__d(
  "WAWebVoipTransportFallbackTracker",
  ["WALogger", "WAWebODS", "WAWebVoipWebTransportCallSummary"],
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
        r("WAWebODS").incr(
          "web.call.webtransport.fallback_to_sctp.sctp_connected",
        ),
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
        r("WAWebODS").incr(
          "web.call.webtransport.fallback_to_sctp.sctp_failed",
        ),
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
