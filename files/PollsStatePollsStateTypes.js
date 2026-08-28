__d(
  "PollsStatePollsStateTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({ UNKNOWN: 0, ACTIVE: 1 }),
      l = n("$InternalEnum")({ UNKNOWN: 0, TEXT: 1 }),
      s = n("$InternalEnum")({
        Create: "create",
        Remove: "remove",
        Vote: "vote",
        Remove_vote: "remove_vote",
        Ping: "ping",
        Clone_poll_state: "clone_poll_state",
      });
    a.exports = {
      PollState: e,
      PollType: l,
      PollsParticipantActionInputState$Types: s,
    };
  },
  null,
);
