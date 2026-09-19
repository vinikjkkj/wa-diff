__d(
  "WAWebVoipTransportFallbackTracker",
  ["WALogger", "WAWebCoreActionsODS", "WAWebVoipWebTransportCallSummary"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = !1,
      c = !1;
    function d() {
      u || ((u = !0), (c = !1));
    }
    function m() {
      u && o("WAWebVoipWebTransportCallSummary").recordWtFallbackSctpStart();
    }
    function p() {
      return u;
    }
    function _() {
      !u ||
        c ||
        ((c = !0),
        o("WAWebVoipWebTransportCallSummary").recordWtFallbackSctpConnected(),
        o(
          "WAWebCoreActionsODS",
        ).logCallWebtransportFallbackToSctpSctpConnected(),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportFallback] SCTP recovered call after WebTransport fallback",
            ])),
        ));
    }
    function f() {
      !u ||
        c ||
        ((c = !0),
        o("WAWebCoreActionsODS").logCallWebtransportFallbackToSctpSctpFailed(),
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportFallback] SCTP also failed after WebTransport fallback",
              ])),
          )
          .sendLogs("webtransport-fallback-sctp-failed"));
    }
    function g() {
      ((u = !1), (c = !1));
    }
    ((l.markFallbackTriggered = d),
      (l.markFallbackSctpStarted = m),
      (l.hasFallbackTriggered = p),
      (l.notifySctpConnectionOpened = _),
      (l.finalizeFallbackOutcome = f),
      (l.resetFallbackTracker = g));
  },
  98,
);
