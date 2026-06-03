__d(
  "WAWebWindowsHybridBridgeRateTheApp",
  ["WAWebODS", "WAWebWindowsHybridBridgeTrace", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.getStoreProductForCurrentApp = function () {
          var e = this;
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.rate_the_app.send.get_store_product_for_current_app_async",
            ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "rateTheApp",
                method: "getStoreProductForCurrentAppAsync",
                type: "async",
              },
              function () {
                return e.$1.getStoreProductForCurrentAppAsync();
              },
            )
          );
        }),
        (t.requestRateAndApp = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = this;
            r("WAWebODS").incr(
              "web.hybrid.bridge.rate_the_app.send.request_rate_and_review_app_async",
            );
            var t = yield o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
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
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        e
      );
    })();
    l.WAWebWindowsHybridBridgeRateTheApp = e;
  },
  98,
);
