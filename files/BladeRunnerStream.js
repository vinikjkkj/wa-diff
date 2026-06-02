__d(
  "BladeRunnerStream",
  ["err"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.getStreamHandler = function () {
          return this.$1;
        }),
        (t.cancel = function () {}),
        (t.amendWithAck = async function (t) {
          return !1;
        }),
        (t.amendFireAndForget = function (t) {}),
        (t.ping = function () {
          return Promise.reject(r("err")("ping not supported"));
        }),
        (t.amendWithoutAck = function (t) {}),
        (t.start = function () {
          return Promise.resolve();
        }),
        (t.isAlive = function () {
          return !1;
        }),
        (t.canAmend = function () {
          return !1;
        }),
        (t.getStatus = function () {
          return null;
        }),
        (t.getStreamId = function () {
          return 0;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
