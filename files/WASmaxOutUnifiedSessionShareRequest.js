__d(
  "WASmaxOutUnifiedSessionShareRequest",
  ["WASmaxJsx", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.unifiedSessionId,
        n = o("WASmaxJsx").smax(
          "ib",
          null,
          o("WASmaxJsx").smax("unified_session", {
            id: o("WAWap").CUSTOM_STRING(t),
          }),
        );
      return n;
    }
    l.makeShareRequest = e;
  },
  98,
);
