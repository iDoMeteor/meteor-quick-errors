/*
 * Error publications
 */
Meteor.publish('errors', function() {
    // Should check user's specific flags in addition to site flagged
    return Errors.find({
            seen: false
        });
});

Meteor.methods ({

    /*
     * Remove single error that has been flagged as viewed
     */
    errorClear: function() {
        console.log("trying: " + this._id);
        alert("trying: " + this._id);
        Errors.update(this._id, {$set: {seen: true}});
    },

    /*
     * Flag all errors as seen
     */
    errorClearAll: function() {
        for (var error in errors) {
            Errors.update(this._id, {seen: true});
        }
    }

});
