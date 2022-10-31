// const { default: mongoose } = require("mongoose");

const mongoose = require ('mongoose');

const DiscussionSchema = mongoose.Schema ({

    contenu: String
});


module.exports = mongoose.model('discussion.model', DiscussionSchema);