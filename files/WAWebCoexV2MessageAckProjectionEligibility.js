__d(
  "WAWebCoexV2MessageAckProjectionEligibility",
  ["WAWebAck", "WAWebUserPrefsMeUser"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return !o("WAWebUserPrefsMeUser").isMeAccount(e);
    }
    function s(t) {
      var n = t.projectedAck,
        r = t.representedLid;
      return (n !== o("WAWebAck").ACK.RECEIVED &&
        n !== o("WAWebAck").ACK.READ) ||
        !e(r)
        ? null
        : n;
    }
    ((l.isCoexV2MessageAckProjectionTarget = e),
      (l.getEligibleCoexV2MessageAckProjection = s));
  },
  98,
);
