__d(
  "CometTailLoadLoggerConfig",
  ["qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { qplEvent: r("qpl")._(588713587, "4750") };
    function s(t) {
      e.qplEvent = t;
    }
    function u() {
      return e.qplEvent;
    }
    ((l.overrideQPLEvent = s), (l.getQPLEvent = u));
  },
  98,
);
