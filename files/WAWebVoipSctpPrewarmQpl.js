__d(
  "WAWebVoipSctpPrewarmQpl",
  ["WAWebQplFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("qpl")._(891424385, "2142"),
      s = 3e4;
    function u() {
      return o("WAWebQplFlow").startQplFlow(e, { timeoutInMs: s });
    }
    function c(e) {
      e.endSuccess();
    }
    function d(e, t) {
      e.endFail(t);
    }
    ((l.startVoipSctpPrewarmQpl = u),
      (l.endVoipSctpPrewarmQplSuccess = c),
      (l.endVoipSctpPrewarmQplFail = d));
  },
  98,
);
