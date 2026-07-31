__d(
  "WAWebBizAISettingsCategoryHandlers",
  [
    "WAWebBizAISettingsCategoryRegistry",
    "WAWebBizAiAgentGating",
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
        o("WAWebBizAiHandoffRemovalTimingFetchQuery").fetchHandoffRemovalTiming,
      ],
    ]);
    function s(e) {
      return e ===
        o("WAWebProtobufSyncAction.pb")
          .SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory
          .HANDOFF_REMOVAL_TIMING
        ? o("WAWebBizAiAgentGating").isHandoffRemovalTimingSyncEnabled()
        : !0;
    }
    function u(t) {
      var n = e.get(t);
      n != null &&
        s(t) &&
        o("WAWebBizAISettingsCategoryRegistry").registerCategory(t, {
          fetch: n,
        });
    }
    l.registerCategoryHandler = u;
  },
  98,
);
