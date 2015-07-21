/*
 * Errors provides:
 *   message
 */
Errors = new Meteor.Collection("errors");

/*
 * Allow errors for all
 */
Errors.allow ({
    insert: function(){return true;},
    update: function(){return true;}
});

/*
 * Throw an error message
 */
errorThrow = function (message) {
    // Don't insert dupes
    // Not using IDs, check to make sure they are not displayed for other users
    var exists = Errors.findOne({message: message});
    if (!exists) {
        Errors.insert ({message: message, seen: false})
    }
    // Hack to get iron router's spinner out of the way
    $('#iron-router-progress').hide();
}

/*
 * Remove single error that has been flagged as viewed
 */
errorClear = function(id) {
    Errors.update(id, {$set: {seen: true}});
}

/*
 * Flag all errors as seen
 */
errorClearAll = function() {
    for (var error in errors) {
        Errors.update(error._id, {$set: {seen: true}});
    }
}
