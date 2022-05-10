const NewsModel = require('../models/news')
const CategoryModel = require('../models/category')
const Advertisement = require('../models/advertisement')


exports.mainPage = async (req, res, next) => {

    const lastNews = await NewsModel.find().sort({ createdAt: -1 }).skip(0).limit(5)

    const topNews = await NewsModel.find().sort({ view: -1 }).skip(0).limit(5)

    const central = await  NewsModel.find().sort({ view: -1 }).skip(0).limit(10)

    const advertisement  =  await Advertisement.find().sort({createdAt: 1}).limit(2)

    const categories = await CategoryModel.aggregate([
        { $match: {} },
        {
            $lookup:
            {
                from: "news",
                localField: "_id",
                foreignField: "category_ID",
                as: "news_all"
            }
        },
        {
            $project: {
                "news_all.name": 1,
                name: 1, 
                _id: 1
            }
        },
        {
            $set: {
                "news_all.name": {
                   $sum: 1
                }
            }
        },
    ])



    res.json({
        lastNews: lastNews,
        topNews: topNews,
        categories: categories,
        advertisement: advertisement,
        central: central,
    })
}