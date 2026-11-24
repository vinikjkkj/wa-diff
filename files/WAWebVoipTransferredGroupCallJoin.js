__d(
  "WAWebVoipTransferredGroupCallJoin",
  ["WAWebVoipOngoingCallCollection", "WAWebVoipTransferredCallRegistry"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n;
      return (t =
        (n = o(
          "WAWebVoipOngoingCallCollection",
        ).WAWebVoipOngoingCallCollection.getByCallId(e)) == null
          ? void 0
          : n.joinableCallId) != null
        ? t
        : e;
    }
    function s(e) {
      var t = e.joinableCallId;
      t != null &&
        (o("WAWebVoipTransferredCallRegistry").getTransferredCallRoot(t) != null
          ? o("WAWebVoipTransferredCallRegistry").clearTransferredCallEndMarks(
              t,
            )
          : e.from != null &&
            o("WAWebVoipTransferredCallRegistry").registerTransferredCall(
              t,
              { rootCallId: e.id.id, rootCallCreatorWid: e.from },
              e.t,
            ));
    }
    ((l.getGroupCallIdToJoin = e), (l.mapJoinedSegmentToRootCall = s));
  },
  98,
);
