__d(
  "WAWebWindowsHybridBridgeRateTheApp.v2608",
  ["asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.getStoreProductForCurrentApp = function () {
          return this.$1.getStoreProductForCurrentAppAsync();
        }),
        (t.requestRateAndApp = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
    i.WAWebWindowsHybridBridgeRateTheApp_v2608 = e;
  },
  66,
);
