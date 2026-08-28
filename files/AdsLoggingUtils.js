__d(
  "AdsLoggingUtils",
  ["AdsPerfTiming"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return (
        (e.includes("perf_scenario") &&
          (t == null || (n = t.active_scenarios) == null ? void 0 : n[0])) ||
        ""
      );
    }
    function s(t, n, r, a, i) {
      n !== "action_dispatched" &&
        ((i === !0 ? console.groupCollapsed : console.info)(
          "LOG [" + (a || "PE") + "]",
          "{" + (t || "") + "}",
          n,
          "@" + (Date.now() - o("AdsPerfTiming").start) / 1e3 + "s",
          e(n, r),
          r,
        ),
        i === !0 && (console.trace(), console.groupEnd()));
    }
    ((l.getEventSummary = e), (l.logToConsole = s));
  },
  98,
);
