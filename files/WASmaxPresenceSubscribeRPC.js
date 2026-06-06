__d(
  "WASmaxPresenceSubscribeRPC",
  ["WAComms", "WASmaxOutPresenceSubscribeRequest"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WASmaxOutPresenceSubscribeRequest").makeSubscribeRequest(e);
      await o("WAComms").castSmaxStanza(t);
    }
    l.sendSubscribeRPC = e;
  },
  98,
);
