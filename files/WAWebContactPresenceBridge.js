__d(
  "WAWebContactPresenceBridge",
  [
    "Promise",
    "WASendPresenceStatusProtocol",
    "WAWebConnModel",
    "WAWebSendPresenceSubscriptionJob",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      o("WASendPresenceStatusProtocol").sendPresenceStatusProtocol({
        status: "available",
        name: o("WAWebConnModel").Conn.pushname,
      });
    }
    function u() {
      o("WASendPresenceStatusProtocol").sendPresenceStatusProtocol({
        status: "unavailable",
        name: o("WAWebConnModel").Conn.pushname,
      });
    }
    function c(t, a) {
      var i;
      return (
        t instanceof r("WAWebWid")
          ? (i = t)
          : (i = o("WAWebWidFactory").createWid(t)),
        (e || (e = n("Promise"))).resolve(
          r("WAWebSendPresenceSubscriptionJob")(i, a),
        )
      );
    }
    ((l.setPresenceAvailable = s),
      (l.setPresenceUnavailable = u),
      (l.subscribePresence = c));
  },
  98,
);
