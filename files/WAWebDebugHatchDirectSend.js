__d(
  "WAWebDebugHatchDirectSend",
  ["WAWebUserPrefsDebugKeys", "WAWebUserPrefsStore", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e = new Set(),
      s =
        r("WAWebUserPrefsStore").get(
          r("WAWebUserPrefsDebugKeys").DEBUG_HATCH_DIRECT_SEND,
        ) === !0;
    function u() {
      return s && r("gkx")("16539");
    }
    function c(t) {
      s !== t &&
        ((s = t),
        r("WAWebUserPrefsStore").set(
          r("WAWebUserPrefsDebugKeys").DEBUG_HATCH_DIRECT_SEND,
          t,
        ),
        e.forEach(function (e) {
          return e();
        }));
    }
    ((c.doc =
      "Turn Direct Send on or off for the WhatsApp contacts in a Muse chat's Connections \u2192 Recommendations"),
      (c.paramsToExecute = [!0]));
    function d(t) {
      return (
        e.add(t),
        function () {
          e.delete(t);
        }
      );
    }
    ((l.isHatchDirectSendEnabled = u),
      (l.updateHatchDirectSend = c),
      (l.subscribeToHatchDirectSend = d));
  },
  98,
);
