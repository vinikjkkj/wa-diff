__d(
  "SupportConversationMAISAChatEvents",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      "thread_created",
      "thread_appeared",
      "thread_ready",
      "thread_typeable",
      "thread_visible",
      "thread_disappeared",
      "thread_contents_shown",
      "chat_component_mounted",
      "starter_prompts_rendered",
      "starter_prompt_impression",
      "starter_prompt_clicked",
      "send_message_button_clicked",
      "maisa_chat_message_thumbs_up_click",
      "maisa_chat_message_thumbs_down_click",
      "agentic_card_action_failure",
      "agentic_card_action_success",
      "agentic_card_button_click",
      "agentic_card_deeplink_click",
      "agentic_card_impression",
      "csat_survey_shown",
      "csat_survey_toast_shown",
      "support_history_thread_selected",
    ]);
    function s(t, n) {
      return t == null ||
        !e.has(t) ||
        (n == null ? void 0 : n.is_maisa_native) != null
        ? n
        : babelHelpers.extends({}, n, { is_maisa_native: "false" });
    }
    ((l.MAISA_CHAT_EVENTS = e), (l.withDefaultIsMAISANative = s));
  },
  98,
);
