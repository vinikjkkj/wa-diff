__d(
  "WAWebHatchPeerConversationText",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      var n, r;
      return e === "own_agent"
        ? s._(/*BTDS*/ "")
        : e === "peer_human"
          ? (n = t.peerOwnerName) != null
            ? n
            : s._(/*BTDS*/ "")
          : e === "peer_agent"
            ? (r = t.peerMuseName) != null
              ? r
              : s._(/*BTDS*/ "")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    l.hatchPeerConversationSenderText = e;
  },
  226,
);
