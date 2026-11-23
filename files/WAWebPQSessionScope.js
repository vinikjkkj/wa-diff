__d(
  "WAWebPQSessionScope",
  ["WAWebPQGatingUtils", "WAWebSessionScope", "WAWebSignalSessionApi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t, n) {
      if (
        (n != null && n !== o("WAWebSessionScope").SessionScope.DEFAULT) ||
        !t ||
        e.isHosted() ||
        e.isBot() ||
        e.isFbidBot() ||
        !o("WAWebPQGatingUtils").isPq1on1MessageEnabled()
      )
        return n;
      var r = await o("WAWebSignalSessionApi").hasSignalSessions(
          [e],
          o("WAWebSessionScope").SessionScope.PQ,
        ),
        a = r[0];
      return a ? o("WAWebSessionScope").SessionScope.PQ : n;
    }
    l.resolvePqSendScope = e;
  },
  98,
);
