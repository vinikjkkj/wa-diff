__d(
  "WAWebBizAISettingsCategoryHandlers",
  [
    "WAWebBizAISettingsCategoryRegistry",
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
    ]);
    function s(t) {
      var n = e.get(t);
      n != null &&
        o("WAWebBizAISettingsCategoryRegistry").registerCategory(t, {
          fetch: n,
        });
    }
    l.registerCategoryHandler = s;
  },
  98,
);
