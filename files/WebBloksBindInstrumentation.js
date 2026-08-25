__d(
  "WebBloksBindInstrumentation",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      return Date.now();
    }
    var l = !1;
    function s(e) {
      l = !1;
    }
    function u() {
      return l;
    }
    function c() {
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
    var d = c();
    function m() {
      return babelHelpers.extends({}, d);
    }
    function p() {
      ((d.flushes = 0),
        (d.passesEmitted = 0),
        (d.passesSuppressed = 0),
        (d.variableWritesApplied = 0),
        (d.nodesVisited = 0),
        (d.modelsRebuilt = 0),
        (d.subtreesReusedAtEntry = 0),
        (d.subtreesReusedAtExit = 0),
        (d.bindMs = 0),
        (d.windowStartMs = e()));
    }
    ((i.bindClockNowMs = e),
      (i.setBindInstrumentationEnabled = s),
      (i.isBindInstrumentationEnabled = u),
      (i.bindCounters = d),
      (i.readBindCounters = m),
      (i.resetBindCounters = p));
  },
  66,
);
