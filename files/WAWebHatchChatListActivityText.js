__d(
  "WAWebHatchChatListActivityText",
  [
    "WAWebBotUtils",
    "WAWebChatListActivityText",
    "WAWebHatchAgentStatusManager",
    "WAWebHatchFrontendGating",
    "WAWebHatchLinkedStatusManager",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebChatListActivityText").registerChatListActivityTextSource({
        appliesTo: function (t) {
          return (
            o("WAWebBotUtils").isHatchBot(t) &&
            o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()
          );
        },
        getText: s,
        subscribe: u,
      });
    }
    function s() {
      var e = r("WAWebHatchAgentStatusManager").getAgentStatus();
      return e == null || r("WAWebHatchLinkedStatusManager").isUnlinked()
        ? null
        : r("WAWebHatchAgentStatusManager").getDisplayText(e);
    }
    function u(e) {
      var t = r("WAWebHatchAgentStatusManager").subscribeToStatusText(e),
        n = r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(e);
      return function () {
        (t(), n());
      };
    }
    l.registerHatchChatListActivityText = e;
  },
  98,
);
