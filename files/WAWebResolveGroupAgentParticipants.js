__d(
  "WAWebResolveGroupAgentParticipants",
  [
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e
            .filter(function (e) {
              return e.endsWith("@bot");
            })
            .map(function (e) {
              return o("WAWebWidFactory").createUserWidOrThrow(e);
            })
            .filter(function (e) {
              return (
                !o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e) &&
                !o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
              );
            });
          return t.length === 0 ||
            !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
            ? []
            : t;
        })),
        s.apply(this, arguments)
      );
    }
    l.resolveGroupAgentParticipants = e;
  },
  98,
);
