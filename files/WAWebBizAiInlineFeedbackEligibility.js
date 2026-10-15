__d(
  "WAWebBizAiInlineFeedbackEligibility",
  [
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebMsgActionCapability",
    "WAWebMsgModelUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WAWebFrontendMsgGetters").getMaybeChat(e);
      return (
        t != null &&
        o("WAWebMsgModelUtils").isLastMsg(e) &&
        o("WAWebMsgActionCapability").canShowMsgEditAction(
          e,
          o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
          t,
        ) &&
        o("WAWebMsgActionCapability").shouldCoachAgentEdit(e)
      );
    }
    l.isBizAiInlineFeedbackEligible = e;
  },
  98,
);
