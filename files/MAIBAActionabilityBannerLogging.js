__d(
  "MAIBAActionabilityBannerLogging",
  [
    "AdsHelpTrayUILoggerStoreUtils",
    "MAIBAChatAppStore",
    "MAIBAChatAppUIProvider",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e,
        t = o("MAIBAChatAppStore").shouldUseLaminarForMAIBA()
          ? r("MAIBAChatAppUIProvider")()
          : o("MAIBAChatAppStore").getState();
      return t == null || (e = t.selectedChatState) == null
        ? void 0
        : e.externalConversationId;
    }
    function s(t, n, r, a) {
      var i;
      o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
        "maiba_actionability_banner",
        {
          banner_label: t,
          banner_section: r != null ? r : "",
          banner_status: n,
          conversation_id: (i = e()) != null ? i : "",
          tool_call_id: a != null ? a : "",
        },
      );
    }
    l.logActionabilityBanner = s;
  },
  98,
);
