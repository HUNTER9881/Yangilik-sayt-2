const RatingModel = require("../models/rating");
const NewsModel = require("../models/news");
const mongoose = require("mongoose");

exports.createRating = async (req, res, next) => {
    const { rating, news } = req.body;
    if (!rating || !news) {
        res.json({
            message: "Fill form",
        });
    }
    const result = new RatingModel({ rating: rating, news_ID: news });
    result.save()
        .then(async () => {
            const newsData = await RatingModel.aggregate([
                // $match - yangilikni id si boyicha malumotni olib berdi
                { $match: { news_ID: mongoose.Types.ObjectId(news) } },
                // $group - guruhlash uchun
                {
                    $group: {
                        _id: "$news_ID",
                        count: { $sum: 1 },
                        totalSum: { $sum: "$rating" },
                    },
                },
                // o'rtacha arifmetikasini hisoblash
                {
                    $project: {
                        _id: 1,
                        count: 1,
                        totalSum: {
                            $round: [{ $divide: ["$totalSum", "$count"] }, 1],
                        },
                    },
                },
            ]);
            const totalSum = newsData[0].totalSum


            // fronteddan kiritilgan yangilikni id si boyicha ratingn olib totalSum ni yozdik 
            const getNews = await NewsModel.findByIdAndUpdate({_id: news }).select({rating: 1})
            getNews.rating = totalSum
            getNews.save()

            res.json(result)
        })
        .catch((error) => {
            res.json(error)
        })
};
