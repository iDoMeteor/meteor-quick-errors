Meteor.subscribe('errors');

/*
 * Errors template helpers
 */
Template.errors.helpers({
    errors: function() {
        var e = Errors.find();
        if (e.count() > 0) {
            $('#iron-router-progress').hide();
        }
        return e;
    }
});

/*
 * Error template triggers
 */
Template.error.events({
    
    /*
     * Change error seen flag to true when dismissed
     */
    'click button': function(e) {
        errorClear(e.currentTarget.id);
    },

});

