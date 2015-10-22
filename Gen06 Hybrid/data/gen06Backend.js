'use strict';

(function() {
    app.data.gen06Backend = new Everlive({
        offlineStorage: true,
        apiKey: 'O8jaubYHTlpGh14p',
        url: '//testtap.telerik.com/bs-api/v1/',
        scheme: 'https'
    });

    document.addEventListener("online", function() {
        app.data.gen06Backend.offline(false);
        app.data.gen06Backend.sync();
    });

    document.addEventListener("offline", function() {
        app.data.gen06Backend.offline(true);
    });

}());