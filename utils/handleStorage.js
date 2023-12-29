import multer from 'multer' 
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({

    destination: function (req, file, cb){
        const pathStorage = `${__dirname}/../storage`
        cb(null, pathStorage)
    },
    filename: function(req, file, cb){
        const extension = file.originalname.split(".").pop();
        const filename = `file-${Date.now()}.${extension}`;
        cb(null, filename)

    }
})

export const uploadMiddleware = multer({storage});