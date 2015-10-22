'use strict';

app.formView = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var formViewModel = kendo.observable({
        fields: {
            time: '',
            datetime: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('formViewModel', formViewModel);
})(app.formView);