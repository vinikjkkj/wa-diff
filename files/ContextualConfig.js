__d(
  "ContextualConfig",
  [
    "ContextualConfigCollateExposureData",
    "ContextualConfigConstants",
    "ContextualConfigExposureLogger",
    "ContextualConfigParseConfig",
    "ContextualConfigResult",
    "ErrorContextualConfig",
    "Random",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1 / o("ContextualConfigConstants").JSON_SUB_SAMPLE_RATE,
      s = 1,
      u = (function () {
        function t(e, t) {
          (t === void 0 && (t = {}),
            (this.isDebugLoggingEnabled = !1),
            (this.$3 = !1),
            (this.$4 = e),
            (this.$2 = t));
        }
        var n = t.prototype;
        return (
          (n.$5 = function () {
            if (this.$1) return this.$1;
            var e = this.$2,
              t = this.$4,
              n;
            try {
              n = r("ContextualConfigParseConfig")(t, e);
            } catch (e) {
              n = new (r("ErrorContextualConfig"))(r("getErrorSafe")(e));
            }
            return ((this.$1 = n), n);
          }),
          (n.$6 = function (n) {
            var t = this.isDebugLoggingEnabled,
              a = this.$3,
              i = !a && o("Random").random() < e;
            i && (this.$3 = !0);
            var l = r("ContextualConfigCollateExposureData")(this.$4, n, i),
              s = r("ContextualConfigExposureLogger").createEvent(l);
            s.log(t);
          }),
          (n.resolve = function (t) {
            t === void 0 && (t = {});
            var e = this.$1 || this.$5(),
              n = e.resolve(t);
            return (this.$6(n), new (r("ContextualConfigResult"))(n[s]));
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
