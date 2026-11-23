__d(
  "WAWebWamLoginMetricUtils",
  ["WAWebLoginWamEvent", "WAWebWamEnumLoginResultType", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      e = self.performance.now();
    }
    function u(t) {
      var n = new (o("WAWebLoginWamEvent").LoginWamEvent)();
      return (
        n.set({
          connectionOrigin: t,
          loginResult: o("WAWebWamEnumLoginResultType").LOGIN_RESULT_TYPE.OK,
          loginT: Math.floor(self.performance.now() - r("nullthrows")(e)),
        }),
        n.commitAndWaitForFlush()
      );
    }
    ((l.markLoginStartT = s), (l.logLoginSuccess = u));
  },
  98,
);
