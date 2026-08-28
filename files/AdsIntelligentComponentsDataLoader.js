__d(
  "AdsIntelligentComponentsDataLoader",
  [
    "AsyncRequest",
    "FetchIntelligentComponentsDataRelay",
    "XAdsCMTipQEAsyncControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("FetchIntelligentComponentsDataRelay")
        .loadMessage(e)
        .catch(function (e) {
          throw e.message;
        });
    }
    var s = function (t, n) {
      var e = r("XAdsCMTipQEAsyncControllerRouteBuilder").buildUri({
        tip_id: t,
        channel_id: n,
      });
      new (r("AsyncRequest"))()
        .setURI(e)
        .setAllowCrossPageTransition(!0)
        .send();
    };
    ((l.loadMessages = e), (l.logExposure = s));
  },
  98,
);
