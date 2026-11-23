__d(
  "WASmaxUnifiedSessionShareRPC",
  ["WAComms", "WASmaxJsx", "WAWap"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = s(e);
      await o("WAComms").castSmaxStanza(t);
    }
    function s(e) {
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
    ((l.sendShareRPC = e), (l.makeShareRequest = s));
  },
  98,
);
