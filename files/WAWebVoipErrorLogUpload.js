__d(
  "WAWebVoipErrorLogUpload",
  [
    "WALogger",
    "WAWebCrashlog",
    "WAWebEnvironment",
    "WAWebUA",
    "WAWebVoipSctpConnectionManager",
    "WAWebVoipTransportFallbackTracker",
    "WAWebVoipWebTransportCallSummary",
    "WAWebVoipWebTransportConnectionManager",
    "WAWebWamEnumCallResultType",
    "getErrorSafe",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C = 6,
      b = 10,
      v = 0.1,
      S = 0.01,
      R = 0.1,
      L = 0.001,
      E = 8,
      k = 5e3,
      I = "voip-group-call-cer",
      T = 0.1,
      D = 3,
      x = 3e4,
      $ = null,
      P = new Set(),
      N = !1,
      M = !1,
      w = null;
    function A(e) {
      if ($ == null)
        try {
          var t,
            n,
            r = JSON.parse(e);
          $ =
            (t =
              r == null || (n = r.call_info) == null
                ? void 0
                : n.call_result) != null
              ? t
              : null;
        } catch (e) {
          $ = null;
        }
    }
    function F() {
      ((N = !1), (M = !1));
    }
    function O() {
      if (
        ((N = !0),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: Web client entered reconnecting",
            ])),
        ),
        !M)
      ) {
        M = !0;
        var t = o(
            "WAWebVoipWebTransportCallSummary",
          ).getWtCallSummaryIfCurrent(),
          n = t.attempts
            .slice(-E)
            .map(function (e) {
              var t,
                n = e.outcome == null ? "pending" : e.outcome;
              return (
                e.connectionId +
                ":" +
                n +
                ":" +
                ((t = e.likelyCause) != null ? t : "none")
              );
            })
            .join("|");
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: reconnecting transport path previousWebTransportOpened=",
              " fallbackToSctp=",
              "",
            ])),
          String(t.numOpened > 0),
          String(o("WAWebVoipTransportFallbackTracker").hasFallbackTriggered()),
        ),
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: reconnecting SCTP relays ",
                "",
              ])),
            o("WAWebVoipSctpConnectionManager").getSctpRelayDebugSummary(),
          ),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: reconnecting WebTransport relays ",
                "",
              ])),
            o(
              "WAWebVoipWebTransportConnectionManager",
            ).getWebTransportRelayDebugSummary(),
          ),
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: reconnecting WebTransport history attempts=",
                " opened=",
                " details=",
                "",
              ])),
            String(t.numRelayAttempts),
            String(t.numOpened),
            n || "none",
          ));
      }
    }
    function B() {
      var e = N;
      ((N = !1),
        !(!e || !r("WAWebEnvironment").isWeb || !r("justknobx")._("5297")) &&
          (W(),
          (w = window.setTimeout(function () {
            ((w = null),
              r("gkx")("26258")
                ? o("WALogger")
                    .LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: uploading reconnecting logs",
                        ])),
                    )
                    .sendLogs("voip-call-reconnecting", {
                      sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                      sampling: L,
                    })
                : o("WALogger")
                    .LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: uploading reconnecting testing logs",
                        ])),
                    )
                    .sendLogs("voip-call-reconnecting-testing", {
                      sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                      sampling: L,
                    }));
          }, k))));
    }
    function W() {
      w != null && (window.clearTimeout(w), (w = null));
    }
    function q(e) {
      if (!r("justknobx")._("5297")) return null;
      var t = e === C || e === b;
      if (!t) return null;
      var n = o("WAWebUA").UA.browser.toLowerCase() || "unknown",
        a = o("WAWebVoipWebTransportCallSummary").hasWtActivityThisCall(),
        i = a ? "webtransport-" : "",
        l = e === C ? "setup-error" : "accepted-but-not-connected",
        s = o("WAWebUA").UA.isChrome ? S : v,
        u = a && e === b ? R : s;
      return { reason: "voip-call-error-" + n + "-" + i + l, sampling: u };
    }
    function U() {
      var e,
        t = $;
      if ((($ = null), !!r("WAWebEnvironment").isWeb && t != null)) {
        var n = q(t);
        if (n != null) {
          W();
          var a = n.reason,
            i = n.sampling;
          r("gkx")("26258") || (a = a + "-testing");
          var l = (e = document.visibilityState) != null ? e : "unknown",
            s = document.hasFocus();
          (o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] upload result=",
                " reason=",
                " rate=",
                " vis=",
                " focus=",
                "",
              ])),
            t,
            a,
            i,
            l,
            String(s),
          ),
            window.setTimeout(function () {
              o("WALogger")
                .LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: uploading error logs: ",
                      "",
                    ])),
                  a,
                )
                .sendLogs(a, {
                  sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                  sampling: i,
                });
            }, k));
        }
      }
    }
    function V(e) {
      var t,
        n,
        a =
          (e.groupCallTotalCallTSinceCallStart != null &&
            e.groupCallTotalCallTSinceCallStart > 0) ||
          (e.callT != null && e.callT > 0);
      if (
        !(
          !r("WAWebEnvironment").isWeb ||
          e.callEndReconnecting !== !0 ||
          e.callResult !==
            o("WAWebWamEnumCallResultType").CALL_RESULT_TYPE.CONNECTED ||
          !a ||
          e.groupCallIsLastSegment !== !0 ||
          e.maxConnectedParticipants < D ||
          !r("justknobx")._("5297")
        )
      ) {
        var i =
          ((t = e.callId) != null ? t : "unknown-call") +
          ":" +
          String((n = e.groupCallSegmentIdx) != null ? n : "unknown-segment");
        if (!P.has(i)) {
          P.add(i);
          var l = T,
            s = r("gkx")("26258") ? I : I + "-testing",
            u = H(e);
          (o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] scheduling group CER log upload reason=",
                " rate=",
                "",
              ])),
            s,
            l,
          ),
            self.setTimeout(function () {
              (o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: uploading group CER logs: ",
                    "",
                  ])),
                s,
              ),
                o("WAWebCrashlog")
                  .upload({
                    reason: s,
                    clientSamplingRate: l,
                    fromTimestamp: u,
                    hasTaggedMessage: !1,
                    sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                  })
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: group CER log upload failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e));
                  })
                  .finally(function () {
                    P.delete(i);
                  }));
            }, k));
        }
      }
    }
    function H(e) {
      var t = e.groupCallTotalCallTSinceCallStart,
        n = t != null && t >= 0 ? t : e.callT;
      if (!(n == null || n < 0)) return Math.max(0, Date.now() - n - x);
    }
    ((l.captureWamCallResult = A),
      (l.resetReconnectingStateForNewCall = F),
      (l.recordCallReconnectingStateForLogs = O),
      (l.maybeUploadReconnectingLogs = B),
      (l.maybeUploadErrorLogs = U),
      (l.maybeUploadGroupCallCerLogs = V));
  },
  98,
);
