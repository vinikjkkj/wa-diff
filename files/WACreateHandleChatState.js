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
        if (r == null && a == null) return s;
        var e = o(
            "WASmaxChatstateServerNotificationRPC",
          ).receiveServerNotificationRPC(t),
          n = e.parsedRequest,
          i = n.stateSource,
          l = n.stateTypes,
          u = o("WAHandleChatStateProtocol").parseChatStatus(l);
        if (i.name === "FromUser") {
          var c;
          return (c =
            r == null
              ? void 0
              : r({ status: u, jid: i.value.from }).then(
                  o("WAResultOrError").makeResult,
                )) != null
            ? c
            : s;
        } else {
          var d;
          return (
            i.name,
            (d =
              a == null
                ? void 0
                : a({
                    status: u,
                    jid: i.value.from,
                    participant: i.value.participant,
                  }).then(o("WAResultOrError").makeResult)) != null
              ? d
              : s
          );
        }
      };
    }
    l.createHandleChatState = u;
  },
  98,
);
