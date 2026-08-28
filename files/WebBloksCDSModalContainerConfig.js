__d(
  "WebBloksCDSModalContainerConfig",
  ["CDSWebBloksMinificationKeys", "WebBloksContainerConfig", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n, r) {
        var o;
        return (
          (o = e.call(this) || this),
          (o.backgroundOverlayColor = t),
          (o.mode = n),
          (o.navbar = r),
          o
        );
      }
      (babelHelpers.inheritsLoose(t, e),
        (t.fromBloksModel = function (n) {
          var e = n.get(
              o("CDSWebBloksMinificationKeys")
                .MODAL_CONFIG_BACKGROUND_OVERLAY_COLOR,
            ),
            r = n.get(o("CDSWebBloksMinificationKeys").MODAL_CONFIG_MODE),
            a = n.get(o("CDSWebBloksMinificationKeys").MODAL_CONFIG_NAVBAR);
          return new t(e, r, a);
        }));
      var n = t.prototype;
      return (
        (n.mergeWith = function (n) {
          var e,
            r,
            a,
            i = o("WebBloksUtils").cast(n);
          return new t(
            (e = i.backgroundOverlayColor) != null
              ? e
              : this.backgroundOverlayColor,
            (r = i.mode) != null ? r : this.mode,
            (a = i.navbar) != null ? a : this.navbar,
          );
        }),
        (n.getIsOverlay = function () {
          return this.mode == null
            ? !0
            : [
                "auto_sheet",
                "flexible_sheet",
                "full_sheet",
                "half_sheet",
              ].includes(this.mode);
        }),
        t
      );
    })(o("WebBloksContainerConfig").WebBloksContainerConfig);
    l.default = e;
  },
  98,
);
