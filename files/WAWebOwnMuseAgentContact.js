__d(
  "WAWebOwnMuseAgentContact",
  [
    "WAWebBotProfileCollection",
    "WAWebBotTosIds",
    "WAWebContactCollection",
    "WAWebFetchOwnMuseAgent",
    "WAWebInitializeBotContact",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          if (o("WAWebBotTosIds").getMuseGroupInitiatorNoticeId() == null)
            return null;
          var t = yield o("WAWebFetchOwnMuseAgent").fetchOwnMuseAgent();
          if (t == null) return null;
          var n = o("WAWebContactCollection").ContactCollection.gadd(t),
            r =
              (e = o("WAWebBotProfileCollection").BotProfileCollection.get(
                t,
              )) == null
                ? void 0
                : e.name;
          return (
            r != null &&
              r !== "" &&
              (n.name == null ||
                n.name ===
                  o("WAWebInitializeBotContact").getBotPlaceholderName()) &&
              n.set({ name: r }),
            n
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.fetchOwnMuseAgentContact = e;
  },
  98,
);
