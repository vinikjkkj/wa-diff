__d(
  "WAWebDebugBizVPVOverlay",
  ["WAWebUserPrefsDebugKeys", "WAWebUserPrefsStore", "gkx", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("gkx")("26258");
    function s() {
      if ((r("vulture")("k38D2-8icfUES4Q4J6JBGeCe3AQ="), e)) return !1;
      var t = r("WAWebUserPrefsStore").get(
        r("WAWebUserPrefsDebugKeys").DEBUG_VPV_OVERLAY_ENABLED,
      );
      return t == null ? !1 : !!t;
    }
    var u = s(),
      c = new Set();
    function d() {
      return (r("vulture")("mQSGpH4wf07EW472T9tCwpWU1jQ="), !e && u);
    }
    function m(t) {
      (r("vulture")("rIqQBj0TDECcJEYCo8j6qEWBynE="),
        !(e || u === t) &&
          ((u = t),
          r("WAWebUserPrefsStore").set(
            r("WAWebUserPrefsDebugKeys").DEBUG_VPV_OVERLAY_ENABLED,
            t,
          ),
          c.forEach(function (e) {
            (r("vulture")("POyCst-464f8Y7NtTRmAkj944lY="), e(u));
          })));
    }
    function p() {
      (r("vulture")("TQK2e44FOOUngJV1fU4_Ln0z01k="), m(!u));
    }
    ((p.doc = "Toggle VPV debug overlay on business messages"),
      (p.paramsToExecute = []));
    function _(e) {
      return (
        r("vulture")("WzzMQJILwaD9eD8VD0Cexn3OY78="),
        c.add(e),
        function () {
          (r("vulture")("hMbY5yH7EE98b2bTu8kkFXjK-Ls="), c.delete(e));
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
