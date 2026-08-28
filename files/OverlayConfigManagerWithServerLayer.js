__d(
  "OverlayConfigManagerWithServerLayer",
  ["OverlayConfigManager"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this) || this),
          (n.$OverlayConfigManagerWithServerLayer$p_1 = -1),
          t != null && (n.layerManager = t.layerManager.clone()),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.setServerLayer = function (t) {
          if (this.$OverlayConfigManagerWithServerLayer$p_1 > -1) {
            this.layerManager.replaceLayer(
              this.$OverlayConfigManagerWithServerLayer$p_1,
              t,
            );
            return;
          }
          this.$OverlayConfigManagerWithServerLayer$p_1 =
            this.layerManager.addLayer(t);
        }),
        t
      );
    })(r("OverlayConfigManager"));
    l.default = e;
  },
  98,
);
