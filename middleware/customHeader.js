export const customHeader = (req, res ,next) =>{
    try{
        const apiKey = req.headers.api_key
        if(apiKey === 'hola-celia'){
            next()
        }else{
            res.status(403)
            res.send({error: "API_KEY_INCORRECTA"})
        }
    } catch(err){
        res.status(403)
        res.send({error: "ERROR_CUSTOM_HEADER"})
    }
}