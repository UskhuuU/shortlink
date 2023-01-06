const LinkModel = require("../helper/model")



exports.createLink = async (request, response, next) => {

    const createLink = await LinkModel.create({...request.body})
    await LinkModel.findByIdAndUpdate(createLink.id, {shortURL: 'http://localhost:8000/links/' + createLink.id})
    response   
        .status(201)
        .json({message: `created`, data: createLink})
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
    const {id}  = request.params
    try{
        const Links = await LinkModel.findById(id);
        response.redirect(Links.URL)
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