__d(
  "WAWebBizAiSmartComposerGating",
  [
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiWebSmartComposerAiListsGateModel",
    "WAWebMobilePlatforms",
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(2),
        t = r("useWAWebBizAiWebSmartComposerAiListsGateEnabled")(),
        n;
      return (
        e[0] !== t ? ((n = _(t)), (e[0] = t), (e[1] = n)) : (n = e[1]),
        n
      );
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
      return e && o("WAWebBizAiAgentGating").isSmartComposerWebEnabled();
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
