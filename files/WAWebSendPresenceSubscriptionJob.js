__d(
  "WAWebSendPresenceSubscriptionJob",
  ["WASmaxPresenceSubscribeRPC", "WAWebWidToJid"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n;
      (e.isUser() &&
        t != null &&
        (n = {
          privacyTokenContentsMixinArgs: { anyElementValue: new Uint8Array(t) },
        }),
        o("WASmaxPresenceSubscribeRPC").sendSubscribeRPC({
          presenceTo: o("WAWebWidToJid").widToChatJid(e),
          tCTokenMixinArgs: n,
        }));
    }
    l.default = e;
  },
  98,
);
