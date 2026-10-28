__d(
  "WACreateHandleChatState",
  [
    "Promise",
    "WAHandleChatStateProtocol",
    "WAResultOrError",
    "WASmaxChatstateServerNotificationRPC",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = n("Promise"))).resolve(
        o("WAResultOrError").makeResult("NO_ACK"),
      );
    function u(e) {
      var t,
        n,
        r =
          (t = e.individualMessage) == null
            ? void 0
            : t.handleIndividualChatState,
        a = (n = e.groupMessage) == null ? void 0 : n.handleGroupChatState;
      return function (t) {
        var e;
        if (r == null && a == null) return s;
        var n = o(
            "WASmaxChatstateServerNotificationRPC",
          ).receiveServerNotificationRPC(t),
          i = n.parsedRequest,
          l = i.stateSource,
          u = i.stateTypes,
          c = o("WAHandleChatStateProtocol").parseChatStatus(u);
        if (l.name === "FromGroup") {
          var d;
          return (d =
            a == null
              ? void 0
              : a({
                  status: c,
                  jid: l.value.from,
                  participant: l.value.participant,
                }).then(o("WAResultOrError").makeResult)) != null
            ? d
            : s;
        }
        return (e =
          r == null
            ? void 0
            : r({ status: c, jid: l.value.from }).then(
                o("WAResultOrError").makeResult,
              )) != null
          ? e
          : s;
      };
    }
    l.createHandleChatState = u;
  },
  98,
);
