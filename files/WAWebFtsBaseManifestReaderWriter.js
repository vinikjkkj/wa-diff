__d(
  "WAWebFtsBaseManifestReaderWriter",
  ["asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.__performReadWriteOperation = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield this.$1.acquire(),
              n;
            try {
              n = yield e();
            } finally {
              t.release();
            }
            return n;
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        e
      );
    })();
    i.default = e;
  },
  66,
);
