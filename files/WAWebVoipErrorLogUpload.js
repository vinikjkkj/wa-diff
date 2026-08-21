__d(
  "WAWebVoipErrorLogUpload",
  [
    "WALogger",
    "WAWebCrashlog",
    "WAWebEnvironment",
    "WAWebUA",
    "WAWebVoipWebTransportCallSummary",
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
      m = 6,
      p = 10,
      _ = 0.1,
      f = 0.01,
      g = 0.1,
      h = 5e3,
      y = "voip-group-call-cer",
      C = 0.1,
      b = 3,
      v = 3e4,
      S = null,
      R = new Set();
    function L(e) {
      if (S == null)
        try {
          var t,
            n,
            r = JSON.parse(e);
          S =
            (t =
              r == null || (n = r.call_info) == null
                ? void 0
                : n.call_result) != null
              ? t
              : null;
        } catch (e) {
          S = null;
        }
    }
    function E(e) {
      if (!r("justknobx")._("5297")) return null;
      var t = e === m || e === p;
      if (!t) return null;
      var n = o("WAWebUA").UA.browser.toLowerCase() || "unknown",
        a = o("WAWebVoipWebTransportCallSummary").hasWtActivityThisCall(),
        i = a ? "webtransport-" : "",
        l = e === m ? "setup-error" : "accepted-but-not-connected",
        s = o("WAWebUA").UA.isChrome ? f : _,
        u = a && e === p ? g : s;
      return { reason: "voip-call-error-" + n + "-" + i + l, sampling: u };
    }
    function k() {
      var t,
        n = S;
      if (((S = null), !!r("WAWebEnvironment").isWeb && n != null)) {
        var a = E(n);
        if (a != null) {
          var i = a.reason,
            l = a.sampling;
          r("gkx")("26258") || (i = i + "-testing");
          var u = (t = document.visibilityState) != null ? t : "unknown",
            c = document.hasFocus();
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] upload result=",
                " reason=",
                " rate=",
                " vis=",
                " focus=",
                "",
              ])),
            n,
            i,
            l,
            u,
            String(c),
          ),
            window.setTimeout(function () {
              o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: uploading error logs: ",
                      "",
                    ])),
                  i,
                )
                .sendLogs(i, {
                  sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                  sampling: l,
                });
            }, h));
        }
      }
    }
    function I(e) {
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
          e.maxConnectedParticipants < b ||
          !r("justknobx")._("5297")
        )
      ) {
        var i =
          ((t = e.callId) != null ? t : "unknown-call") +
          ":" +
          String((n = e.groupCallSegmentIdx) != null ? n : "unknown-segment");
        if (!R.has(i)) {
          R.add(i);
          var l = C,
            s = r("gkx")("26258") ? y : y + "-testing",
            m = T(e);
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] scheduling group CER log upload reason=",
                " rate=",
                "",
              ])),
            s,
            l,
          ),
            self.setTimeout(function () {
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: uploading group CER logs: ",
                    "",
                  ])),
                s,
              ),
                o("WAWebCrashlog")
                  .upload({
                    reason: s,
                    clientSamplingRate: l,
                    fromTimestamp: m,
                    hasTaggedMessage: !1,
                    sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                  })
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: group CER log upload failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e));
                  })
                  .finally(function () {
                    R.delete(i);
                  }));
            }, h));
        }
      }
    }
    function T(e) {
      var t = e.groupCallTotalCallTSinceCallStart,
        n = t != null && t >= 0 ? t : e.callT;
      if (!(n == null || n < 0)) return Math.max(0, Date.now() - n - v);
    }
    ((l.captureWamCallResult = L),
      (l.maybeUploadErrorLogs = k),
      (l.maybeUploadGroupCallCerLogs = I));
  },
  98,
);
