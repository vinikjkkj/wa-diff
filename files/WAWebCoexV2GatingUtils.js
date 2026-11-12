__d(
  "WAWebCoexV2GatingUtils",
  ["WAWebABProps", "WAWebCoexV2BotWid", "justknobx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebABProps").getABPropConfigValue("coexv2_send_enabled") === !0
      );
    }
    function s() {
      return !r("justknobx")._("7647");
    }
    function u(e, t) {
      return (
        t != null &&
        e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
        s()
      );
    }
    ((l.isCoexV2SendEnabled = e),
      (l.isCoexV2RecvEnabled = s),
      (l.isCoexV2RelayMessage = u));
  },
  98,
);
