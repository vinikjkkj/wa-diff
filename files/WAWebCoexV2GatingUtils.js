__d(
  "WAWebCoexV2GatingUtils",
  ["WAWebABProps"],
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
    ((l.isCoexV2SendEnabled = e), (l.isCoexV2RecvEnabled = s));
  },
  98,
);
