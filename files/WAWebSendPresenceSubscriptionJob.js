__d(
  "WAWebSendPresenceSubscriptionJob",
  [
    "WASmaxPresenceSubscribeRPC",
    "WAWebApiChat",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebApiChat").getChatRecordByAccountLid(e),
            r = (t = n[0]) == null ? void 0 : t.tcToken,
            a;
          (r != null &&
            (a = {
              privacyTokenContentsMixinArgs: {
                anyElementValue: new Uint8Array(r),
              },
            }),
            o("WASmaxPresenceSubscribeRPC").sendSubscribeRPC({
              presenceTo: o("WAWebWidToJid").userLidtoLidUserJid(e),
              tCTokenMixinArgs: a,
            }));
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      o("WASmaxPresenceSubscribeRPC").sendSubscribeRPC({
        presenceTo: o("WAWebWidToJid").widToChatJid(e),
      });
    }
    ((l.sendUserPresenceSubscription = e),
      (l.sendGroupPresenceSubscription = u));
  },
  98,
);
