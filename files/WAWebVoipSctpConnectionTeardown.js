__d(
  "WAWebVoipSctpConnectionTeardown",
  ["WAWebNoop"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      ((e.onopen = t = r("WAWebNoop")),
        (e.onclose = t),
        (e.onmessage = t),
        (e.onerror = t));
    }
    function s(e) {
      ((e.onicecandidate = r("WAWebNoop")),
        (e.oniceconnectionstatechange = r("WAWebNoop")),
        (e.onconnectionstatechange = r("WAWebNoop")));
    }
    function u(t) {
      var n = t.channel;
      n != null && (e(n), n.close(), (t.channel = null));
    }
    function c(e) {
      (e.connectionTimeout != null &&
        (window.clearTimeout(e.connectionTimeout),
        (e.connectionTimeout = null)),
        e.dtlsStallTimeout != null &&
          (window.clearTimeout(e.dtlsStallTimeout),
          (e.dtlsStallTimeout = null)));
    }
    ((l.detachPeerConnectionHandlers = s),
      (l.closeConnectionDataChannel = u),
      (l.clearConnectionTimers = c));
  },
  98,
);
