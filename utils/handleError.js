export const handleHttpError = (res, message = 'Ups something happened!', code = 403) =>{
    res.status(code);
    res.send({ error:message })
}