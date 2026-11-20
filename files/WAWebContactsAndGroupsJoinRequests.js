__d(
  "WAWebContactsAndGroupsJoinRequests",
  ["WAWebGroupAgentParticipant"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return (
        e.length > t ||
        e.some(function (e) {
          return o("WAWebGroupAgentParticipant").isStandardBotProfileGroupAgent(
            e.id,
          );
        })
      );
    }
    function s(e) {
      var t = new Map();
      for (var n of e) {
        var r = n.chat,
          o = n.request,
          a = r.id.toString(),
          i = t.get(a);
        i == null ? t.set(a, { chat: r, requests: [o] }) : i.requests.push(o);
      }
      return Array.from(t.values())
        .map(function (e) {
          var t = e.chat,
            n = e.requests;
          return {
            chat: t,
            requests: n.sort(function (e, t) {
              return t.t - e.t;
            }),
          };
        })
        .sort(function (e, t) {
          return t.requests[0].t - e.requests[0].t;
        });
    }
    ((l.shouldOfferAllRequests = e), (l.groupJoinRequestsByGroup = s));
  },
  98,
);
