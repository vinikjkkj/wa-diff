__d(
  "WASmaxOutPassiveModePassiveIQRequest",
  ["WASmaxJsx", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax(
        "iq",
        {
          id: o("WAWap").generateId(),
          type: "set",
          xmlns: "passive",
          to: o("WAWap").S_WHATSAPP_NET,
        },
        o("WASmaxJsx").smax("passive", null),
      );
      return e;
    }
    l.makePassiveIQRequest = e;
  },
  98,
);
