__d(
  "WAWebBotProfileAction",
  ["WAWebRequestBotProfiles", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = (yield o("WAWebRequestBotProfiles").requestBotProfiles([
            { id: e, isDefault: !1, personaId: t },
          ]))[0];
          return n;
        })),
        s.apply(this, arguments)
      );
    }
    l.queryBotProfile = e;
  },
  98,
);
