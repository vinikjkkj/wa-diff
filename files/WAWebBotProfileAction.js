__d(
  "WAWebBotProfileAction",
  ["WAWebRequestBotProfiles", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = (yield o("WAWebRequestBotProfiles").requestBotProfiles([
            { id: e, isDefault: !1 },
          ]))[0];
          return t;
        })),
        s.apply(this, arguments)
      );
    }
    l.queryBotProfile = e;
  },
  98,
);
