__d(
  "signalsLogAction",
  ["signalsLoggingAssertComplete", "signalsLoggingSend"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      (r("signalsLoggingAssertComplete")(e),
        r("signalsLoggingSend")(e, { action: t, flowId: n, type: "action" }));
    }
    l.default = e;
  },
  98,
);
