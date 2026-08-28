__d(
  "isMessengerPWA",
  ["Env", "ExecutionEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u() {
      var n;
      return (
        (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
        t.matchMedia !== void 0 &&
        t.matchMedia("(display-mode: standalone)").matches &&
        ((n = (s || (s = r("Env"))).isMessengerDotComOnComet) != null ? n : !1)
      );
    }
    l.default = u;
  },
  98,
);
