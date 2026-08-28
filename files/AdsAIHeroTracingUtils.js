__d(
  "AdsAIHeroTracingUtils",
  ["ALToolTab", "AdsPerfInteractionsController"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("ALToolTab").getCurrentToolTab(),
        n = t.tab,
        a = t.tool;
      (r("AdsPerfInteractionsController").startInteraction(
        "maiba.chat.open",
        e.callsite,
        { tracePolicy: "maiba.chat.open" },
      ),
        u("maiba.chat.open", e, a, n));
    }
    function s(e) {
      var t = r("AdsPerfInteractionsController").addEventListener(
        "maiba.send_message.client",
        "end",
        function () {
          (t.remove(), e());
        },
      );
    }
    function u(e, t, n, o) {
      var a, i;
      r("AdsPerfInteractionsController").addCustomInteractionAnnotation(e, {
        app_surface: n,
        conversation_id: t.conversationID,
        is_sending_message: t.isSendingMessage,
        is_web_platform_chat: t.isWebPlatformChat,
        referrer_tab: o != null ? o : "",
        referrer_tool: n != null ? n : "",
        preload_source: (a = t.preloadSource) != null ? a : "cold",
        sidebar_prerendered: (i = t.sidebarPrerendered) != null ? i : !1,
      });
    }
    ((l.startAdsAIOpenChatThreadInteraction = e),
      (l.onAdsAISendMessageTurnComplete = s));
  },
  98,
);
