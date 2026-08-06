__d(
  "WAWebBizAiSmartComposerGating",
  ["WAWebBizAiAgentGating", "WAWebBizAiAgentStatusUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        o("WAWebBizAiAgentStatusUtils").isChatEligibleForAiAgent(e) &&
        o("WAWebBizAiAgentGating").isSmartComposerWebEnabled()
      );
    }
    l.isSmartComposerEnabledForChat = e;
  },
  98,
);
