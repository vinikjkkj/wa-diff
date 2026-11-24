__d(
  "WAWebWindowsHybridBridgeRateTheApp.v2647",
  ["WAWebODS", "WAWebWindowsHybridBridgeTrace"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.requestRateAndApp = async function () {
          var e = this;
          r("WAWebODS").incr(
            "web.hybrid.bridge.rate_the_app.send.request_rate_and_review_app_async",
          );
          var t = await o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
            {
              bridge: "rateTheApp",
              method: "requestRateAndReviewAppAsync",
              type: "async",
            },
            function () {
              return e.$1.requestRateAndReviewAppAsync();
            },
          );
          return JSON.parse(t);
        }),
        e
      );
    })();
    l.WAWebWindowsHybridBridgeRateTheApp_v2647 = e;
  },
  98,
);
