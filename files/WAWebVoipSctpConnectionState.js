__d(
  "WAWebVoipSctpConnectionState",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Map(),
      l = new Map(),
      s = new Set(),
      u = new Map(),
      c = {
        currentRelayState: new Map(),
        isCleaningUp: !1,
        staggerGeneration: 0,
        sctpTimeoutMs: 1e4,
        iceRestartRxInactivityMs: 1e4,
      };
    function d() {
      return c.currentRelayState;
    }
    function m(e) {
      c.currentRelayState = e;
    }
    function p() {
      return c.isCleaningUp;
    }
    function _(e) {
      c.isCleaningUp = e;
    }
    function f() {
      return c.staggerGeneration;
    }
    function g() {
      return ++c.staggerGeneration;
    }
    function h() {
      return c.sctpTimeoutMs;
    }
    function y(e) {
      c.sctpTimeoutMs = e;
    }
    function C() {
      return c.iceRestartRxInactivityMs;
    }
    function b(e) {
      c.iceRestartRxInactivityMs = e;
    }
    function v() {
      return 2 * c.sctpTimeoutMs;
    }
    ((i.sctpConnections = e),
      (i.samePathReconnectAttempts = l),
      (i.pendingReconnectTimeouts = s),
      (i.connectionOpenedResolvers = u),
      (i.getCurrentRelayState = d),
      (i.setCurrentRelayState = m),
      (i.isCleaningUp = p),
      (i.setIsCleaningUp = _),
      (i.getStaggerGeneration = f),
      (i.bumpStaggerGeneration = g),
      (i.getSctpTimeoutMs = h),
      (i.setSctpTimeoutMs = y),
      (i.getIceRestartRxInactivityMs = C),
      (i.setIceRestartRxInactivityMs = b),
      (i.sctpConnectionTimeoutMs = v));
  },
  66,
);
