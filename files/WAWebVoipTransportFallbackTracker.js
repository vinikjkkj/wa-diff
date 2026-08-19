__d(
  "WAWebVoipTransportFallbackTracker",
  ["WALogger", "WAWebCoreActionsODS"],
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
      !u ||
        c ||
        ((c = !0),
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
    function p() {
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
    function _() {
      ((u = !1), (c = !1));
    }
    ((l.markFallbackTriggered = d),
      (l.notifySctpConnectionOpened = m),
      (l.finalizeFallbackOutcome = p),
      (l.resetFallbackTracker = _));
  },
  98,
);
