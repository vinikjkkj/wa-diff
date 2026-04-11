__d(
  "waWebBizAdCreationMediaCollectionReducer",
  ["FBImmer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("FBImmer").produce(e, function (e) {
        switch (t.type) {
          case "media_collection_reducer.update_media_collection":
            ((e.lastSuccessfullyUploadedMediaCollection =
              e.currentLocallyUploadedMediaCollection),
              (e.currentLocallyUploadedMediaCollection = t.mediaCollection));
            break;
          case "media_collection_reducer.revert_to_last_successfully_uploaded_media_collection":
            e.currentLocallyUploadedMediaCollection =
              e.lastSuccessfullyUploadedMediaCollection;
            break;
        }
      });
      return [n];
    }
    l.default = e;
  },
  98,
);
