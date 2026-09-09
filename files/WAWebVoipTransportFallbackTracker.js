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
      return u;
    }
    function p() {
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
    function _() {
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
    function f() {
      ((u = !1), (c = !1));
    }
    ((l.markFallbackTriggered = d),
      (l.hasFallbackTriggered = m),
      (l.notifySctpConnectionOpened = p),
      (l.finalizeFallbackOutcome = _),
      (l.resetFallbackTracker = f));
  },
  98,
);
