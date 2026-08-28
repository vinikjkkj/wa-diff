__d(
  "SctpNegotiationStateSctpNegotiationStateTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
        UNKNOWN: 0,
        OFFER: 1,
        ANSWER: 2,
        PARTICIPANTS_UPDATED: 3,
      }),
      l = n("$InternalEnum")({
        UNKNOWN: 0,
        SFU: 1,
        P2P: 2,
        SERVER_DETERMINED: 3,
      });
    a.exports = { SctpMediaPath: l, SctpMessageTypeEnum: e };
  },
  null,
);
