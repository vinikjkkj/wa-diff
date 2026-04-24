__d(
  "WAWebBizAISettingsCategoryHandlers",
  [
    "WAWebBizAISettingsCategoryRegistry",
    "WAWebBizAiExampleResponsesQuery",
    "WAWebBizAiKnowledgeReviewQuery",
    "WAWebBizAiLeadGenFormsQuery",
    "WAWebBizAiReplySettingsQuery",
    "WAWebBizAiRulesGenMutation",
    "WAWebProtobufSyncAction.pb",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map([
        [
          (e = o("WAWebProtobufSyncAction.pb"))
            .SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory
            .INSTRUCTIONS,
          o("WAWebBizAiRulesGenMutation").fetchRules,
        ],
        [
          e.SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory
            .RESPONSE_SETTINGS,
          o("WAWebBizAiReplySettingsQuery").fetchReplySettings,
        ],
        [
          e.SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory
            .EXAMPLE_RESPONSES,
          o("WAWebBizAiExampleResponsesQuery").fetchExampleResponses,
        ],
        [
          e.SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory
            .KNOWLEDGE,
          o("WAWebBizAiKnowledgeReviewQuery").getAllPendingKnowledge,
        ],
        [
          e.SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory
            .LEAD_GEN,
          o("WAWebBizAiLeadGenFormsQuery").fetchLeadGenForms,
        ],
      ]);
    function u(e) {
      var t = s.get(e);
      t != null &&
        o("WAWebBizAISettingsCategoryRegistry").registerCategory(e, {
          fetch: t,
        });
    }
    l.registerCategoryHandler = u;
  },
  98,
);
