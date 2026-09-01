__d(
  "WAWebBizAiChatOpenAttribution",
  ["WAWebChatEntryPoint", "WAWebChatSearchFilters"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (function (e) {
        return e === o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF
          ? o("WAWebChatEntryPoint").ChatEntryPoint.ChatlistAiHandoffFilter
          : e === o("WAWebChatSearchFilters").SearchFilters.AI_RESPONDING
            ? o("WAWebChatEntryPoint").ChatEntryPoint.ChatlistAiRespondingFilter
            : o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist;
      })(e == null ? void 0 : e.kind);
    }
    function s(e) {
      return e ===
        o("WAWebChatEntryPoint").ChatEntryPoint.ChatlistAiHandoffFilter
        ? "ai_handoff"
        : e ===
            o("WAWebChatEntryPoint").ChatEntryPoint.ChatlistAiRespondingFilter
          ? "ai_responding"
          : null;
    }
    ((l.getBizAiChatEntryPointFromFilter = e),
      (l.getBizAiChatFilterNameFromEntryPoint = s));
  },
  98,
);
