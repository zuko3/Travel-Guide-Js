const Place = require("../models/place");
const util = require("../controllers/utils/imageDeleteUtils");

exports.addPlaces = function (req, res, next) {
    const { body: { name, areas, lat, lon, tags, address, description } } = req;
    const images = req.files.map(image => ({ imagename: image.originalname, filename: image.filename, imgpath: image.path }));
    const place = new Place({ name, areas, lat, lon, tags, address, description, images });
    place.save().then(() => res.status(200).json({
        message: "place sucssefully added"
    })).catch(error => res.status(500).json(error));
}

exports.getAllPlaces = function (req, res, next) {
    Place.find().then(places => res.status(200).json({ places })).catch(error => res.status(500).json(error));
}

exports.deletePlacesController = function (req, res, next) {
    const idsToDelete = req.body.ids;
    Place.find({ _id: { $in: idsToDelete } }).then(results => {
        const imageToDel = results.map(place => place.images.map(image => image.filename));
        Place.deleteMany({ _id: { $in: idsToDelete } }).exec().then(() => {
            util.removeUnresolvedImages(imageToDel);
            return res.status(200).json({
                message: "places deleted successfully"
            });
        }).catch(error => {
            console.log(error);
            return res.status(500).json(error)
        })
    }).catch(err => {
        console.log(err);
        return res.status(500).json(err)
    });
}


exports.updatePlaceController = function (req, res, next) {
    const { body: { name, areas, lat, lon, tags, address, description, oldimages = [], _id } } = req;
    const images = req.files.map(image => ({ imagename: image.originalname, filename: image.filename, imgpath: image.path }));
    const imageToDel = Array.isArray(oldimages) ? oldimages.map(oldimage => oldimage) : [oldimages];
    Place.findById(_id).then((place) => {
        const remainingImages = place.images.filter(image => !imageToDel.includes(image.filename))
        place.name = name;
        place.areas = areas;
        place.lat = lat;
        place.lon = lon;
        place.tags = tags;
        place.address = address;
        place.description = description;
        place.images = [...remainingImages, ...images];
        return place.save();
    }).then(() => {
        util.removeUnresolvedImages(imageToDel);
        return res.status(200).json({
            message: "places deleted successfully"
        });
    }).catch(err => res.status(500).json(err))

}