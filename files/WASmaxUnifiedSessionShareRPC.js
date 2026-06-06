__d(
  "WASmaxUnifiedSessionShareRPC",
  ["WAComms", "WASmaxOutUnifiedSessionShareRequest"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WASmaxOutUnifiedSessionShareRequest").makeShareRequest(e);
      await o("WAComms").castSmaxStanza(t);
    }
    l.sendShareRPC = e;
  },
  98,
);
