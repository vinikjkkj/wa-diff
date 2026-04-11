__d(
  "WAWebFilterSession",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e() {
        this.initSessionId();
      }
      var t = e.prototype;
      return (
        (t.initSessionId = function () {
          this.sessionId = this.newSessionId();
        }),
        (t.newSessionId = function () {
          return (
            (this.sessionId = Math.floor(2147483648 * Math.random())),
            this.sessionId
          );
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
