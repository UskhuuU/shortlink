const LinkModel = require("../helper/model")







exports.createLink = async (request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*")
    if (
        !request.body?.URL ||
        !request.body?.shortURL 
    ) {
        response
            .status(400)
            .json({message: `URL required`})
    }
    const createLink = await LinkModel.create({...request.body})
    response   
        .status(201)
        .json({message: `created`,  data: createLink})
};

exports.getLinks = async (request, response, next) => {
    try{
        const Links = await LinkModel.find();
        response.status(200).json({
            message: true,
            data: Links,
        });   
    } catch (error) {
        return response.status(400).json({message: error, data: null});

    }
};


exports.getLink = async (request, response, next) => {
    const {id} = request.params;
    try{
       const link = await LinkModel.findById(id).exec();
       response.status(200).json({message:true, data: link})
    } catch (error) {
        return response.status(400).json({message: error, data: null});

    }
};


exports.deleteLink =  async (request, response, next) => {

    const {id} = request.params;
    try{
       const link= await LinkModel.findByIdAndDelete(id);
       response.status(200).json({message:"deleted", data: link})
    } catch (error) {
        return response.status(400).json({message: error, data: null});

    }
};