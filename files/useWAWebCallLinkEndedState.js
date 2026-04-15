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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(16),
        t = d(!1),
        n = t[0],
        a = t[1],
        i = c(null),
        l = c(null),
        s;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
          )),
          (e[0] = s))
        : (s = e[0]);
      var p = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), s, f),
        g;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_STATE,
          )),
          (e[1] = g))
        : (g = e[1]);
      var h = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), g, _),
        y;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = o("WAWebVoipEventConstants").getMultiChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_STATE,
            o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
          )),
          (e[2] = y))
        : (y = e[2]);
      var C;
      e[3] !== p
        ? ((C = function () {
            var e;
            return (e =
              p == null || p.getState == null ? void 0 : p.getState()) != null
              ? e
              : null;
          }),
          (e[3] = p),
          (e[4] = C))
        : (C = e[4]);
      var b = r("useWAWebEventTargetValue")(p, y, C),
        v,
        S;
      (e[5] !== p || e[6] !== b || e[7] !== h
        ? ((v = function () {
            var e,
              t = i.current,
              n = l.current,
              s = (n == null ? void 0 : n.isCallLink) === !0,
              u = (p == null ? void 0 : p.isCallLink) === !0,
              c =
                (e = p == null ? void 0 : p.callLinkState) != null
                  ? e
                  : o("WAWebVoipWaCallEnums").CallLinkState.None,
              d =
                t != null &&
                t !== o("WAWebVoipWaCallEnums").CallLinkState.None &&
                h === o("WAWebVoipWaCallEnums").CallLinkState.None,
              m = n != null && s && p == null,
              _ =
                u &&
                (p == null ? void 0 : p.callLinkState) != null &&
                c === o("WAWebVoipWaCallEnums").CallLinkState.None,
              f = u && b === o("WAWebVoipWaCallEnums").CallState.None;
            if (d || m || _ || f) {
              var g = p != null ? p : n,
                y = (g == null ? void 0 : g.userEndedCall) === !0;
              y
                ? (p != null &&
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
            ((i.current = h), (l.current = p));
          }),
          (S = [p, h, b]),
          (e[5] = p),
          (e[6] = b),
          (e[7] = h),
          (e[8] = v),
          (e[9] = S))
        : ((v = e[8]), (S = e[9])),
        u(v, S));
      var R, L;
      (e[10] !== p || e[11] !== n
        ? ((R = function () {
            if (n) {
              var e = window.setTimeout(function () {
                (p != null &&
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
          }),
          (L = [p, n]),
          (e[10] = p),
          (e[11] = n),
          (e[12] = R),
          (e[13] = L))
        : ((R = e[12]), (L = e[13])),
        u(R, L));
      var E;
      return (
        e[14] !== n
          ? ((E = { isCallLinkEnded: n }), (e[14] = n), (e[15] = E))
          : (E = e[15]),
        E
      );
    }
    function _() {
      var e, t;
      return (e =
        (t = r("WAWebCallCollection").activeCall) == null
          ? void 0
          : t.callLinkState) != null
        ? e
        : o("WAWebVoipWaCallEnums").CallLinkState.None;
    }
    function f() {
      return r("WAWebCallCollection").activeCall;
    }
    l.default = p;
  },
  98,
);
