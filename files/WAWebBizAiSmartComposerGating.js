__d(
  "WAWebBizAiSmartComposerGating",
  [
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiWebSmartComposerAiListsGateModel",
    "WAWebMobilePlatforms",
    "useWAWebBizAiWebSmartComposerAiListsGateEnabled",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return p() && o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent();
    }
    function s(e) {
      return !e.id.isAiHub();
    }
    function u(e, t) {
      return (
        o("WAWebBizAiAgentStatusUtils").isChatEligibleForAiAgent(e, t) && m()
      );
    }
    function c() {
      return _(r("useWAWebBizAiWebSmartComposerAiListsGateEnabled")());
    }
    function d(e) {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        _(e) &&
        o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled()
      );
    }
    function m() {
      return _(
        o(
          "WAWebBizAiWebSmartComposerAiListsGateModel",
        ).isBizAiWebSmartComposerAiListsGateEnabled(),
      );
    }
    function p() {
      return d(
        o(
          "WAWebBizAiWebSmartComposerAiListsGateModel",
        ).isBizAiWebSmartComposerAiListsGateEnabled(),
      );
    }
    function _(e) {
      return (
        !o("WAWebBizAiAgentGating").isSmartComposerAiListsEmergencyDisabled() &&
        e &&
        o("WAWebBizAiAgentGating").isSmartComposerWebEnabled()
      );
    }
    ((l.isSmartComposerShellEnabled = e),
      (l.shouldUseSmartComposerShellForChat = s),
      (l.isSmartComposerEnabledForChat = u),
      (l.useIsSmartComposerWebUIEnabled = c),
      (l.isSmartComposerShellBaseEnabledWithJointGate = d),
      (l.isSmartComposerWebUIEnabled = m));
  },
  98,
);
