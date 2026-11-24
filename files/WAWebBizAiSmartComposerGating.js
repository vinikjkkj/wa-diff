__d(
  "WAWebBizAiSmartComposerGating",
  [
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebMobilePlatforms",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return c() && o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent();
    }
    function s(e) {
      return !e.id.isAiHub();
    }
    function u(e, t) {
      return (
        o("WAWebBizAiAgentStatusUtils").isChatEligibleForAiAgent(e, t) && d()
      );
    }
    function c() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        d() &&
        o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled()
      );
    }
    function d() {
      return !o(
        "WAWebBizAiAgentGating",
      ).isSmartComposerAiListsEmergencyDisabled();
    }
    ((l.isSmartComposerShellEnabled = e),
      (l.shouldUseSmartComposerShellForChat = s),
      (l.isSmartComposerEnabledForChat = u),
      (l.isSmartComposerShellBaseEnabled = c),
      (l.isSmartComposerWebUIEnabled = d));
  },
  98,
);
