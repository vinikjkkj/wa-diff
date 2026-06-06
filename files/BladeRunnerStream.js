__d(
  "BladeRunnerStream",
  ["Promise", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t(e) {
          this.$1 = e;
        }
        var o = t.prototype;
        return (
          (o.getStreamHandler = function () {
            return this.$1;
          }),
          (o.cancel = function () {}),
          (o.amendWithAck = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return !1;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (o.amendFireAndForget = function (t) {}),
          (o.ping = function () {
            return (e || (e = n("Promise"))).reject(
              r("err")("ping not supported"),
            );
          }),
          (o.amendWithoutAck = function (t) {}),
          (o.start = function () {
            return (e || (e = n("Promise"))).resolve();
          }),
          (o.isAlive = function () {
            return !1;
          }),
          (o.canAmend = function () {
            return !1;
          }),
          (o.getStatus = function () {
            return null;
          }),
          (o.getStreamId = function () {
            return 0;
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
