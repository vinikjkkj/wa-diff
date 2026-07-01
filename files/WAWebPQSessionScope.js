__d(
  "WAWebPQSessionScope",
  [
    "WAWebPQGatingUtils",
    "WAWebSessionScope",
    "WAWebSignalSessionApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            (n != null && n !== o("WAWebSessionScope").SessionScope.DEFAULT) ||
            !t ||
            e.isHosted() ||
            e.isBot() ||
            e.isFbidBot() ||
            !o("WAWebPQGatingUtils").isPq1on1MessageEnabled()
          )
            return n;
          var r = yield o("WAWebSignalSessionApi").hasSignalSessions(
              [e],
              o("WAWebSessionScope").SessionScope.PQ,
            ),
            a = r[0];
          return a ? o("WAWebSessionScope").SessionScope.PQ : n;
        })),
        s.apply(this, arguments)
      );
    }
    l.resolvePqSendScope = e;
  },
  98,
);
