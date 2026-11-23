__d(
  "WAWebTeeInterceptClient",
  ["err"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.sendRequest = (function () {
            var e = babelHelpers.wrapAsyncGenerator(function* (e) {
              throw r("err")(
                "TeeInterceptClient is not implemented. Switch to Mock mode in the TEE Debug Inspector.",
              );
            });
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.preconnect = async function () {
            throw r("err")("TeeInterceptClient is not implemented.");
          }),
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
