import multer from "multer";
import crypto from "crypto";
import { extname, resolve } from "path";

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, "..", "..", "tmp", "uploads"),
    filename: (req, file, cb) => {
      crypto.randomBytes(25, (err, res) => {
        if (err) return cb(err);
        // xxxxxx.jpg ou xxxxxx.png
        return cb(null, res.toString("hex") + extname(file.originalname));
      });
    },
  }),
};
