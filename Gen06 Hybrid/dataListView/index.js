'use strict';

app.dataListView = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var dataProvider = app.data.gen06Backend;
    var dataSource = new kendo.data.DataSource({
        type: 'everlive',
        transport: {
            typeName: 'Activities',
            dataProvider: dataProvider
        },
        schema: {
            model: {
                fields: {
                    Text: {
                        field: 'Text',
                        defaultValue: ''
                    },
                }
            }
        },
    });

    var dataListViewModel = kendo.observable({
        dataSource: dataSource
    });

    parent.set('dataListViewModel', dataListViewModel);
})(app.dataListView);