var ig = require('instagram-node').instagram(),
_  = require('underscore'),
imagesDAO = require('./images'),
fs = require('fs'),
http = require('http'),
exec = require('child_process').exec;

ig.use({ client_id: 'XX', client_secret: 'XX'});

exports.fetch = function(req, res) {
    fetchCounter(req, res, 0);
}

fetchCounter = function(req, res, counter) {
    ig.media_popular(function(err, medias, remaining, limit) {
        if (err) {
            res.send(500, "There was error while fetching the images " + err)
        } else {
            var mediasSize = medias.length;
            var counter = 0;
            images = _.each(medias, function(media) {
                var image_url = media['images']['standard_resolution']['url']
                var tags = media['tags']
                var image_id =  media['id']
                var file_name = "./saved_images/"+image_id+".jpg"
                var file = fs.createWriteStream(file_name);
                var request = http.get(image_url, function(response) {
                    response.pipe(file);
                });
                var hash = ""
                var command = "../getImageFingerprint.sh " + file_name +

                exec(command, function (error, stdout, stderr) {
                    if (error || stderr) {
                        console.log("error: " + error);
                        console.log("stderr: " + stderr);
                    } else {
                        hash = stdout;
                    }

                    image =  {'image_url': image_url, 'tags' : tags,
                    'image_id' : image_id , 'hash' : hash}

                    console.log("saved: " + file_name);
                    imagesDAO.Image.collection.insert(image, function(err, img) {
                        counter = counter + 1;
                        if (counter == mediasSize) {
                            res.send(img);
                        }
                    });
                });
            });
        }
    });
}

exports.test =  function(req, res) {
        res.send("hello!");
}
