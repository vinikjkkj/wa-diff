__d(
  "WAWebStatusForwardEligibility",
  [
    "WAWebContactGetters",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebStatusGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return (
        !o("WAWebMsgGetters").getIsSentByMe(e) &&
        !o("WAWebContactGetters").getIsPSA(t) &&
        !o("WAWebMsgGetters").getIsGroupStatus(e) &&
        e.canBeReshared === !0 &&
        !o("WAWebMsgGetters").isStatusWithMusic(e) &&
        o("WAWebMsgActionCapability").canForwardMsg(e) &&
        o("WAWebStatusGatingUtils").isStatusReshareViewerFlowEnabled()
      );
    }
    l.isContactStatusForwardable = e;
  },
  98,
);
