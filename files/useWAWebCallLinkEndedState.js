__d(
  "useWAWebCallLinkEndedState",
  [
    "WAWebCallCollection",
    "WAWebPipController",
    "WAWebVoipEventConstants",
    "WAWebVoipUiDocPipPortalContainer.react",
    "WAWebVoipUiManager",
    "WAWebVoipWaCallEnums",
    "react",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef,
      d = s.useState,
      m = 3e3;
    function p() {
      var e,
        t = d(!1),
        n = t[0],
        a = t[1],
        i = c(null),
        l = c(null),
        s = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection"),
          (e = o("WAWebVoipEventConstants")).getChangeEvent(
            e.VoipCallCollectionEvents.ACTIVE_CALL,
          ),
          function () {
            return r("WAWebCallCollection").activeCall;
          },
        ),
        p = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection"),
          e.getChangeEvent(e.VoipCallModelEvents.CALL_LINK_STATE),
          function () {
            var e, t;
            return (e =
              (t = r("WAWebCallCollection").activeCall) == null
                ? void 0
                : t.callLinkState) != null
              ? e
              : o("WAWebVoipWaCallEnums").CallLinkState.None;
          },
        ),
        _ = r("useWAWebEventTargetValue")(
          s,
          e.getMultiChangeEvent(
            e.VoipCallModelEvents.CALL_LINK_STATE,
            e.VoipCallModelEvents.STATE,
          ),
          function () {
            var e;
            return (e =
              s == null || s.getState == null ? void 0 : s.getState()) != null
              ? e
              : null;
          },
        );
      return (
        u(
          function () {
            var e,
              t = i.current,
              n = l.current,
              u = (n == null ? void 0 : n.isCallLink) === !0,
              c = (s == null ? void 0 : s.isCallLink) === !0,
              d =
                (e = s == null ? void 0 : s.callLinkState) != null
                  ? e
                  : o("WAWebVoipWaCallEnums").CallLinkState.None,
              m =
                t != null &&
                t !== o("WAWebVoipWaCallEnums").CallLinkState.None &&
                p === o("WAWebVoipWaCallEnums").CallLinkState.None,
              f = n != null && u && s == null,
              g =
                c &&
                (s == null ? void 0 : s.callLinkState) != null &&
                d === o("WAWebVoipWaCallEnums").CallLinkState.None,
              h = c && _ === o("WAWebVoipWaCallEnums").CallState.None;
            if (m || f || g || h) {
              var y = s != null ? s : n,
                C = (y == null ? void 0 : y.userEndedCall) === !0;
              C
                ? (s != null &&
                    (r("WAWebCallCollection").setActiveCall(null),
                    r("WAWebCallCollection").setIsInConnectedCall(!1)),
                  r("WAWebPipController").closePiP(),
                  o("WAWebVoipUiManager").closeVoipUiPopoutWindow({
                    callEnded: !0,
                    surveyInteracted: !1,
                  }),
                  o(
                    "WAWebVoipUiDocPipPortalContainer.react",
                  ).WAWebVoipUiDocPipEventEmitter.trigger("closeDocPip", {
                    surveyInteracted: !1,
                  }))
                : a(!0);
            }
            ((i.current = p), (l.current = s));
          },
          [s, p, _],
        ),
        u(
          function () {
            if (n) {
              var e = window.setTimeout(function () {
                (s != null &&
                  (r("WAWebCallCollection").setActiveCall(null),
                  r("WAWebCallCollection").setIsInConnectedCall(!1)),
                  r("WAWebPipController").closePiP(),
                  o("WAWebVoipUiManager").closeVoipUiPopoutWindow({
                    callEnded: !0,
                    surveyInteracted: !1,
                  }),
                  o(
                    "WAWebVoipUiDocPipPortalContainer.react",
                  ).WAWebVoipUiDocPipEventEmitter.trigger("closeDocPip", {
                    surveyInteracted: !1,
                  }));
              }, m);
              return function () {
                window.clearTimeout(e);
              };
            }
          },
          [s, n],
        ),
        { isCallLinkEnded: n }
      );
    }
    l.default = p;
  },
  98,
);
