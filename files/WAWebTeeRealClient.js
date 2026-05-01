__d(
  "WAWebTeeRealClient",
  ["asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.sendRequest = (function () {
            var e = babelHelpers.wrapAsyncGenerator(function* (e) {
              throw r("err")(
                "TeeRealClient is not implemented. Switch to Mock mode in the TEE Debug Inspector.",
              );
            });
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.preconnect = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              throw r("err")("TeeRealClient is not implemented.");
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.disconnect = function () {}),
          e
        );
      })(),
      s = new e(),
      u = s;
    l.default = u;
  },
  98,
);
