__d(
  "WAWebBizAISettingsCategoryHandlers",
  [
    "WAWebBizAISettingsCategoryRegistry",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiHandoffRemovalTimingFetchQuery",
    "WAWebBizAiRulesGenMutation",
    "WAWebProtobufSyncAction.pb",
    "asyncToGeneratorRuntime",
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
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent() &&
            (yield o(
              "WAWebBizAiHandoffRemovalTimingFetchQuery",
            ).fetchHandoffRemovalTiming());
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return e ===
        o("WAWebProtobufSyncAction.pb")
          .SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory
          .HANDOFF_REMOVAL_TIMING
        ? o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent() &&
            o("WAWebBizAiAgentGating").isHandoffRemovalTimingSyncEnabled()
        : !0;
    }
    function d(t) {
      var n = e.get(t);
      n != null &&
        c(t) &&
        o("WAWebBizAISettingsCategoryRegistry").registerCategory(t, {
          fetch: n,
        });
    }
    l.registerCategoryHandler = d;
  },
  98,
);
