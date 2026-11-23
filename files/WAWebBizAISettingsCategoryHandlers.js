__d(
  "WAWebBizAISettingsCategoryHandlers",
  [
    "WAWebBizAISettingsCategoryRegistry",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiHandoffRemovalTimingFetchQuery",
    "WAWebBizAiRulesGenMutation",
    "WAWebProtobufSyncAction.pb",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map([
      [
        o("WAWebProtobufSyncAction.pb")
          .SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory
          .INSTRUCTIONS,
        o("WAWebBizAiRulesGenMutation").fetchRules,
      ],
      [
        o("WAWebProtobufSyncAction.pb")
          .SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory
          .HANDOFF_REMOVAL_TIMING,
        s,
      ],
    ]);
    async function s() {
      o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent() &&
        (await o(
          "WAWebBizAiHandoffRemovalTimingFetchQuery",
        ).fetchHandoffRemovalTiming());
    }
    function u(e) {
      return e ===
        o("WAWebProtobufSyncAction.pb")
          .SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory
          .HANDOFF_REMOVAL_TIMING
        ? o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent() &&
            o("WAWebBizAiAgentGating").isHandoffRemovalTimingSyncEnabled()
        : !0;
    }
    function c(t) {
      var n = e.get(t);
      n != null &&
        u(t) &&
        o("WAWebBizAISettingsCategoryRegistry").registerCategory(t, {
          fetch: n,
        });
    }
    l.registerCategoryHandler = c;
  },
  98,
);
