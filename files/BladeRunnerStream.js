__d(
  "BladeRunnerStream",
  ["Promise", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    var e,
      l = (function () {
        function t(e) {
          this.$1 = e;
        }
        var r = t.prototype;
        return (
          (r.getStreamHandler = function () {
            return this.$1;
          }),
          (r.cancel = function () {}),
          (r.amendWithAck = (function () {
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
          (r.amendFireAndForget = function (t) {}),
          (r.amendWithoutAck = function (t) {}),
          (r.start = function () {
            return (e || (e = n("Promise"))).resolve();
          }),
          (r.isAlive = function () {
            return !1;
          }),
          (r.canAmend = function () {
            return !1;
          }),
          (r.getStatus = function () {
            return null;
          }),
          (r.getStreamId = function () {
            return 0;
          }),
          t
        );
      })();
    i.default = l;
  },
  66,
);
