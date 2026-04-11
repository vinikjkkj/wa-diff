__d(
  "useWAWebMetaAIChatOpenMetrics",
  [
    "WAWebBotJourneyLogger",
    "WAWebBotLoggingUtils",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebPonyfillsCryptoRandomUUID",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = e.chat,
        n = e.chatEntryPoint;
      s(function () {
        var e;
        if (o("WAWebBotUtils").isMetaAiBot(t.id)) {
          var a = o("WAWebBotLoggingUtils").getBotEntryPoint(n),
            i =
              a != null
                ? a
                : o("WAWebBotJourneyLogger").BotJourneyLogger.getEntryPoint(),
            l =
              (e = o("WAWebBotProfileCollection").BotProfileCollection.get(
                t.id,
              )) == null
                ? void 0
                : e.personaId;
          if (!(i == null || l == null)) {
            if (a != null) {
              var s = r("WAWebPonyfillsCryptoRandomUUID")();
              o("WAWebBotJourneyLogger").BotJourneyLogger.setDestinationId(s);
            }
            (o("WAWebBotJourneyLogger").BotJourneyLogger.setBotPersonaId(l),
              o("WAWebBotJourneyLogger").BotJourneyLogger.setEntryPoint(i));
            var u = o(
              "WAWebBotLoggingUtils",
            ).getBotMetricsEntryPointFromChatEntryPoint(n);
            (u != null &&
              o(
                "WAWebBotJourneyLogger",
              ).BotJourneyLogger.setBotMetricsEntryPoint(u),
              o("WAWebBotJourneyLogger").BotJourneyLogger.logAiChatClick());
          }
        }
      }, []);
    }
    l.useMetaAIChatOpenMetrics = u;
  },
  98,
);
