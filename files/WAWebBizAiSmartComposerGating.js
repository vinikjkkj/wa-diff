__d(
  "WAWebBizAiSmartComposerGating",
  [
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebMobilePlatforms",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() &&
        o("WAWebBizAiAgentGating").isSmartComposerWebEnabled()
      );
    }
    function s() {
      return e() && o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent();
    }
    function u(e) {
      return !e.id.isAiHub();
    }
    function c(e, t) {
      return (
        o("WAWebBizAiAgentStatusUtils").isChatEligibleForAiAgent(e, t) &&
        o("WAWebBizAiAgentGating").isSmartComposerWebEnabled()
      );
    }
    ((l.isSmartComposerShellBaseEnabled = e),
      (l.isSmartComposerShellEnabled = s),
      (l.shouldUseSmartComposerShellForChat = u),
      (l.isSmartComposerEnabledForChat = c));
  },
  98,
);
