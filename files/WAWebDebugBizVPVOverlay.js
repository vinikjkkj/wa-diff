__d(
  "WAWebDebugBizVPVOverlay",
  ["WAWebUserPrefsDebugKeys", "WAWebUserPrefsStore", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("gkx")("26258");
    function s() {
      if (e) return !1;
      var t = r("WAWebUserPrefsStore").get(
        r("WAWebUserPrefsDebugKeys").DEBUG_VPV_OVERLAY_ENABLED,
      );
      return t == null ? !1 : !!t;
    }
    var u = s(),
      c = new Set();
    function d() {
      return !e && u;
    }
    function m(t) {
      e ||
        u === t ||
        ((u = t),
        r("WAWebUserPrefsStore").set(
          r("WAWebUserPrefsDebugKeys").DEBUG_VPV_OVERLAY_ENABLED,
          t,
        ),
        c.forEach(function (e) {
          e(u);
        }));
    }
    function p() {
      m(!u);
    }
    ((p.doc = "Toggle VPV debug overlay on business messages"),
      (p.paramsToExecute = []));
    function _(e) {
      return (
        c.add(e),
        function () {
          c.delete(e);
        }
      );
    }
    ((l.isVPVOverlayEnabled = d),
      (l.enableVPVOverlay = m),
      (l.toggleVPVOverlay = p),
      (l.subscribeToVPVOverlay = _));
  },
  98,
);
