const express = require('express');
const router = express.Router();
//const { User } = require("../models/Video");

const { auth } = require("../middleware/auth");
const multer = require("multer");
const { default: VideoUploadPage } = require('../../client/src/components/views/VideoUploadPage/VideoUploadPage');



//=================================
//             video
//=================================

router.post('uploadfiles', (req, res) => {
    //비디오를 서버에 저장한다. 
    upload(req,res,err => {
        if(err) {
            return res.json({success : false, err})

        }
        return res.json({ success:true, url: res.req.file.path, fileName:res.req.file.filename })
    })

})

module.exports = router;
