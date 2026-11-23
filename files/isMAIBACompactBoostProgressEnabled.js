__d(
  "isMAIBACompactBoostProgressEnabled",
  [
    "MAIBABoostV2OnlineShadowEligibility",
    "gkx",
    "isMAIBALWIR23CopilotConversation",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return r("isMAIBALWIR23CopilotConversation")(t, e)
        ? !0
        : o("MAIBABoostV2OnlineShadowEligibility").isMBSR23BoostConversation(
            t,
            e,
          ) && r("gkx")("28042");
    }
    l.default = e;
  },
  98,
);
