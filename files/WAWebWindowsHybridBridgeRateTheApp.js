__d(
  "WAWebWindowsHybridBridgeRateTheApp",
  ["WAWebODS", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.getStoreProductForCurrentApp = function () {
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.rate_the_app.send.get_store_product_for_current_app_async",
            ),
            this.$1.getStoreProductForCurrentAppAsync()
          );
        }),
        (t.requestRateAndApp = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            r("WAWebODS").incr(
              "web.hybrid.bridge.rate_the_app.send.request_rate_and_review_app_async",
            );
            var e = yield this.$1.requestRateAndReviewAppAsync();
            return JSON.parse(e);
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
