__d(
  "WAWebPtvStatusEligibility",
  [
    "WAWebABProps",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.PTV &&
        o("WAWebMsgGetters").getIsSentByMe(e) &&
        !o("WAWebMsgGetters").getIsForwarded(e) &&
        !o("WAWebMsgGetters").getHasOriginatedFromNewsletter(e) &&
        !o("WAWebMsgGetters").getIsQuestion(e) &&
        !o("WAWebMsgGetters").getIsQuestionReply(e) &&
        !s(e) &&
        o("WAWebMsgActionCapability").hasRetrievableMedia(e) &&
        "VideoEncoder" in globalThis &&
        o("WAWebABProps").getABPropConfigValue(
          "ptv_forwarding_to_status_enabled",
        )
      );
    }
    function s(e) {
      return (
        o("WAWebMsgGetters").getIsViewOnce(e) ||
        o("WAWebMsgGetters").getIsViewOncePlaceholder(e)
      );
    }
    l.canPostOwnPtvAsStatus = e;
  },
  98,
);
