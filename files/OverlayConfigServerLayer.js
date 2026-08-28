__d(
  "OverlayConfigServerLayer",
  ["OverlayConfigConstants", "OverlayConfigLayerSource"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      e.createFromHeader = function (n) {
        try {
          var t,
            r = n == null || (t = n.extensions) == null ? void 0 : t.oc1_json;
          if (r == null) return null;
          var o = JSON.parse(r),
            a = o == null ? void 0 : o.values;
          return a == null ? null : new e(a);
        } catch (e) {
          return null;
        }
      };
      var t = e.prototype;
      return (
        (t.getLayerSource = function () {
          return r("OverlayConfigLayerSource").SERVER;
        }),
        (t.getValue = function (t) {
          var e = this.$1[String(t)];
          return e != null
            ? e
            : r("OverlayConfigConstants").OverlayConfigNotPresentFlagValue;
        }),
        (t.logExposure = function (t) {}),
        e
      );
    })();
    l.default = e;
  },
  98,
);
