const fs = require("fs");

const uploads = require("../uploads");
const storeImage = uploads.storeImage;
const sendOuts = require("../tmp");

const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    Image.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      data: fs.readFileSync(
        __basedir + "/Project-2/uploads/" + req.file.filename
      ),
    }).then((image) => {
      fs.writeFileSync(
        __basedir + "/Project-2/tmp/" + image.name,
        image.data
        console.log(image)
      );
//render photo here on this page?
      return res.send(`File has been uploaded.${image}`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

module.exports = {
  uploadFiles,
};