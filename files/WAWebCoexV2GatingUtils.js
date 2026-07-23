__d(
  "WAWebCoexV2GatingUtils",
  ["WAWebABProps", "WAWebCoexV2BotWid"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebABProps").getABPropConfigValue("coexv2_send_enabled") === !0
      );
    }
    function s() {
      return (
        o("WAWebABProps").getABPropConfigValue("coexv2_recv_enabled") === !0
      );
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
