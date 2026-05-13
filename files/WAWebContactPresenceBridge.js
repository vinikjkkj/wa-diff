__d(
  "WAWebContactPresenceBridge",
  [
    "WASendPresenceStatusProtocol",
    "WAWebConnModel",
    "WAWebSendPresenceSubscriptionJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      o("WASendPresenceStatusProtocol").sendPresenceStatusProtocol({
        status: "available",
        name: o("WAWebConnModel").Conn.pushname,
      });
    }
    function s() {
      o("WASendPresenceStatusProtocol").sendPresenceStatusProtocol({
        status: "unavailable",
        name: o("WAWebConnModel").Conn.pushname,
      });
    }
    function u(e) {
      return o("WAWebSendPresenceSubscriptionJob").sendUserPresenceSubscription(
        e,
      );
    }
    function c(e) {
      o("WAWebSendPresenceSubscriptionJob").sendGroupPresenceSubscription(e);
    }
    ((l.setPresenceAvailable = e),
      (l.setPresenceUnavailable = s),
      (l.subscribeUserPresence = u),
      (l.subscribeGroupPresence = c));
  },
  98,
);
