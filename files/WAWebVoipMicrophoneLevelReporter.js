__d(
  "WAWebVoipMicrophoneLevelReporter",
  ["WALogger", "WAWebVoipMicrophoneLevelAccumulator", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e, t) {
          ((this.$1 = new (o(
            "WAWebVoipMicrophoneLevelAccumulator",
          ).WAWebVoipMicrophoneLevelAccumulator)()),
            (this.$2 = !1),
            (this.$4 = e),
            (this.$3 = t));
        }
        var n = t.prototype;
        return (
          (n.report = function (t, n) {
            if (!this.$2)
              try {
                var e = window.performance.now();
                this.$1.add(t, n, e);
                var r = this.$1.flushIfDue(e);
                r != null && this.$4(r);
              } catch (e) {
                this.$5(e);
              }
          }),
          (n.forward = function (t) {
            if (!this.$2)
              try {
                this.$4(t);
              } catch (e) {
                this.$5(e);
              }
          }),
          (n.$5 = function (n) {
            ((this.$2 = !0),
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:",
                      "] input level reporting disabled after a failure",
                    ])),
                  this.$3,
                )
                .catching(r("getErrorSafe")(n))
                .sendLogs("voip-mic-level-report-failed"));
          }),
          t
        );
      })();
    l.WAWebVoipMicrophoneLevelReporter = s;
  },
  98,
);
