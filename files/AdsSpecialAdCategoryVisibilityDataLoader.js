__d(
  "AdsSpecialAdCategoryVisibilityDataLoader",
  [
    "AsyncRequest",
    "XAdsSpecialAdCategoryVisibilityAsyncControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r(
        "XAdsSpecialAdCategoryVisibilityAsyncControllerRouteBuilder",
      ).buildUri({ ad_account_id: e });
      return new (r("AsyncRequest"))()
        .setURI(t)
        .setMethod("GET")
        .setReadOnly(!0)
        .exec()
        .then(
          function (e) {
            var t = e.getPayload();
            return t == null ? [] : t;
          },
          function (e) {
            return [];
          },
        );
    }
    l.genContent = e;
  },
  98,
);
