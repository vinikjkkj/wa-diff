__d(
  "WAWebMaibaAiHubSettledProgressEdit",
  [
    "WAWebBizAiAgentGating",
    "WAWebBotTypes",
    "WAWebMaibaWASSMigration",
    "WAWebUnifiedResponseUtils",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (!o("WAWebMaibaWASSMigration").isMaibaAiHubLid(e.id.remote))
        return null;
      var n = o("WAWebUnifiedResponseUtils").isSettledProgressStatusOnly(
        t.unifiedResponse,
      );
      return s(e, t, n)
        ? o("WAWebViewMode.flow").ViewModeType.HIDDEN
        : u(e, n)
          ? o("WAWebViewMode.flow").ViewModeType.VISIBLE
          : null;
    }
    function s(e, t, n) {
      return (
        n &&
        t.botEditType === o("WAWebBotTypes").BotMsgEditType.LAST &&
        o("WAWebViewModeUtils").isViewModeVisibleInSurface(
          o("WAWebViewMode.flow").ViewModeSurface.CHAT,
          e.viewMode,
        ) &&
        o("WAWebBizAiAgentGating").isMaibaWASSReceivingEnabled()
      );
    }
    function u(e, t) {
      return (
        !t &&
        e.viewMode === o("WAWebViewMode.flow").ViewModeType.HIDDEN &&
        e.associationType == null &&
        o("WAWebBizAiAgentGating").isMaibaWASSReceivingEnabled()
      );
    }
    l.getMaibaAiHubSettledProgressEditViewMode = e;
  },
  98,
);
