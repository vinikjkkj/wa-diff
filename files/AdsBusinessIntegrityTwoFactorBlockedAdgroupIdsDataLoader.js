__d(
  "AdsBusinessIntegrityTwoFactorBlockedAdgroupIdsDataLoader",
  [
    "AsyncTypedRequest",
    "Promise",
    "XAdsBusinessIntegrityPostAuthenticationControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var o = r(
        "XAdsBusinessIntegrityPostAuthenticationControllerRouteBuilder",
      ).buildUri({ account_id: t });
      return new (e || (e = n("Promise")))(function (e, t) {
        new (r("AsyncTypedRequest"))(o)
          .setPayloadHandler(function (t) {
            e(t);
          })
          .setErrorHandler(function (e) {
            t(e);
          })
          .setMethod("GET")
          .setReadOnly(!0)
          .send();
      });
    }
    l.loadBlockedAdgroupIds = s;
  },
  98,
);
