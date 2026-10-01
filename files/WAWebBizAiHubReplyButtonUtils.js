__d(
  "WAWebBizAiHubReplyButtonUtils",
  [],
  function (t, n, r, o, a, i) {
    var e = new Set([
      "biz_ai_hub_action:agent_chat_onboarding_past_chats_accept",
      "biz_ai_hub_action:agent_chat_onboarding_past_chats_skip",
      "biz_ai_hub_action:past_chats_accept",
    ]);
    function l(t) {
      return e.has(t);
    }
    i.isPrimaryOnlyBizAiHubReplyButton = l;
  },
  66,
);
