__d(
  "WebBloksBindInstrumentation",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      return Date.now();
    }
    function l() {
      return {
        flushes: 0,
        passesEmitted: 0,
        passesSuppressed: 0,
        variableWritesApplied: 0,
        nodesVisited: 0,
        modelsRebuilt: 0,
        subtreesReusedAtEntry: 0,
        subtreesReusedAtExit: 0,
        bindMs: 0,
        windowStartMs: 0,
      };
    }
    var s = l();
    function u() {
      return babelHelpers.extends({}, s);
    }
    function c() {
      ((s.flushes = 0),
        (s.passesEmitted = 0),
        (s.passesSuppressed = 0),
        (s.variableWritesApplied = 0),
        (s.nodesVisited = 0),
        (s.modelsRebuilt = 0),
        (s.subtreesReusedAtEntry = 0),
        (s.subtreesReusedAtExit = 0),
        (s.bindMs = 0),
        (s.windowStartMs = e()));
    }
    ((i.bindClockNowMs = e),
      (i.bindCounters = s),
      (i.readBindCounters = u),
      (i.resetBindCounters = c));
  },
  66,
);
