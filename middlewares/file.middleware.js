import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

import fs from 'fs';
import cloudinary from 'cloudinary';

const __dirname = path.dirname(fileURLToPath(
    import.meta.url));
const VALID_FILE_TYPES = ['image/png', 'image/jpg', 'image/jpeg'];

cloudinary.config({
    cloud_name: 'dcpgr4jjn',
    api_key: '649745266161171',
    api_secret: 'sa3asg73_w0E_t0GAtVdm7YYd7M'
});
const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname + '../images'));
    }
});

const fileFilter = (req, file, cb) => {
    if (!VALID_FILE_TYPES.includes(file.mimetype)) {
        cb(new Error('Invalid file type'));
    } else {
        cb(null, true);
    }
}

const upload = multer({
    storage,
    fileFilter,
});


// Ahora tenemos un nuevo middleware de subida de archivos
const uploadToCloudinary = async(req, res, next) => {
    if (req.file) {
        try {
            const filePath = req.file.path;
            const image = await cloudinary.v2.uploader.upload(filePath);

            // Borramos el archivo local
            fs.unlinkSync(filePath);

            // Añadimos la propiedad file_url a nuestro Request
            req.file_url = image.secure_url;
            return next();
        } catch (error) {
            return next(error)
        }
    } else {
        return next();
    }
};

export { upload, uploadToCloudinary };