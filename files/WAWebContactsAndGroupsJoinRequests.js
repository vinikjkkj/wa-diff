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
    l.shouldOfferAllRequests = e;
  },
  98,
);
