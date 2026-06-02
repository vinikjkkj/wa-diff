__d(
  "WAWebSendPresenceSubscriptionJob",
  ["WASmaxPresenceSubscribeRPC", "WAWebApiChat", "WAWebWidToJid"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t,
        n = await o("WAWebApiChat").getChatRecordByAccountLid(e),
        r = (t = n[0]) == null ? void 0 : t.tcToken,
        a;
      (r != null &&
        (a = {
          privacyTokenContentsMixinArgs: { anyElementValue: new Uint8Array(r) },
        }),
        o("WASmaxPresenceSubscribeRPC").sendSubscribeRPC({
          presenceTo: o("WAWebWidToJid").userLidtoLidUserJid(e),
          tCTokenMixinArgs: a,
        }));
    }
    function s(e) {
      o("WASmaxPresenceSubscribeRPC").sendSubscribeRPC({
        presenceTo: o("WAWebWidToJid").widToChatJid(e),
      });
    }
    ((l.sendUserPresenceSubscription = e),
      (l.sendGroupPresenceSubscription = s));
  },
  98,
);
