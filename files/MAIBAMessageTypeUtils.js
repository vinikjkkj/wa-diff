__d(
  "MAIBAMessageTypeUtils",
  ["isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.entrypointPromptId,
        n = e.messageType,
        o = e.originatingMidChatPromptBotResponseId,
        a = e.postbackPayload,
        i = e.selectedSuggestedPrompt;
      return n != null
        ? n
        : r("isStringNullOrEmpty")(t)
          ? i != null && !r("isStringNullOrEmpty")(i.prompt_id)
            ? "NULL_STATE_PROMPT"
            : r("isStringNullOrEmpty")(a)
              ? r("isStringNullOrEmpty")(o)
                ? "STANDARD"
                : "MID_CHAT_PROMPT"
              : "CTA_POSTBACK"
          : "ENTRYPOINT_PROMPT";
    }
    l.computeMessageType = e;
  },
  98,
);
