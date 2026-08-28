__d(
  "SignalsLoggingSessions",
  [
    "SignalsLoggingSessionErrors",
    "nullthrows",
    "signalsLoggingComputeScope",
    "signalsNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3,
      s = r("signalsNow")();
    function u(e, t) {
      return { loggerData: e, start: r("signalsNow")(), timeoutSeconds: t };
    }
    function c(t) {
      return t == null
        ? !1
        : t.timeoutSeconds == null
          ? !0
          : t.start + t.timeoutSeconds * e > r("signalsNow")();
    }
    var d = (function () {
        function e() {
          var e = this;
          ((this.$1 = {}),
            (this.globalSessionStartTime = s),
            (this.start = function (t, n) {
              var a = r("signalsLoggingComputeScope")(t),
                i = r("nullthrows")(t.namespace);
              if (/[^a-zA-Z_0-9.]/.test(a))
                throw new (o(
                  "SignalsLoggingSessionErrors",
                ).InvalidSessionNameError)();
              var l = i + "." + a;
              if (c(e.$1[l]))
                throw new (o(
                  "SignalsLoggingSessionErrors",
                ).DuplicateSessionNameError)(i, a);
              return (
                (e.$1[l] = u(t, n)),
                function () {
                  return e.end(l);
                }
              );
            }));
        }
        var t = e.prototype;
        return (
          (t.resetAllForTests = function () {
            this.$1 = {};
          }),
          (t.end = function (t) {
            delete this.$1[t];
          }),
          (t.getForSend = function () {
            var e = this;
            return Object.keys(this.$1)
              .map(function (t) {
                return e.$1[t];
              })
              .filter(c);
          }),
          (t.getSession = function (t, n) {
            var e = t + "." + n;
            return this.$1[e];
          }),
          e
        );
      })(),
      m = new d(),
      p = m;
    l.default = p;
  },
  98,
);
