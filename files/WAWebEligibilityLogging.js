__d(
  "WAWebEligibilityLogging",
  ["WAWebABProps", "WAWebABPropsConfigs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["wa_web_app_lock_upsell"],
      s = (function () {
        function t() {
          this.$1 = new Map();
        }
        var n = t.prototype;
        return (
          (n.init = function () {
            for (var t of e)
              this.$1.set(t, o("WAWebABProps").getABPropConfigValue(t));
          }),
          (n.getValue = function (t) {
            var e;
            return (e = this.$1.get(t)) != null
              ? e
              : o("WAWebABPropsConfigs").ABPropConfigs[t][2];
          }),
          t
        );
      })(),
      u = new s();
    l.eligibilityLogger = u;
  },
  98,
);
