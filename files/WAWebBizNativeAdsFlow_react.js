__d(
  "WAWebBizNativeAdsFlow.react",
  [
    "WAWebBizAdCreationFlowContent.react",
    "WAWebBizAdDraftSaveCallbackContext",
    "WAWebBizNativeAdsFlowTypes",
    "WAWebBizNativeAdsIdentityContextProvider.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebNativeAdsFlowIDContextProvider.react",
    "WAWebUim",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdCreationExitConfirmation",
    "useWAWebFlow",
    "useWAWebFocusOnMount",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["identityBundle", "isWAAEligible", "ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useMemo,
      p = c.useRef;
    function _(t) {
      var a = o("react-compiler-runtime").c(30),
        i,
        l,
        s,
        c;
      a[0] !== t
        ? ((i = t.identityBundle),
          (l = t.isWAAEligible),
          (c = t.ref),
          (s = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l),
          (a[3] = s),
          (a[4] = c))
        : ((i = a[1]), (l = a[2]), (s = a[3]), (c = a[4]));
      var d = o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
          .AdManagement,
        m;
      a[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = { transitions: o("useWAWebFlow").FlowTransitions.None }),
          (a[5] = m))
        : (m = a[5]);
      var _ = o("useWAWebFlow").useFlow(d, m),
        f = _[0],
        g = _[1],
        h = r("useWAWebFocusOnMount")(),
        y = p(null),
        C;
      a[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = { saveCallbackRef: y }), (a[6] = C))
        : (C = a[6]);
      var b = C,
        v = r("useWAWebBizAdCreationExitConfirmation")(
          g.step ===
            o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation,
          b,
        ),
        S = v.showExitConfirmation,
        R;
      a[7] !== g || a[8] !== S
        ? ((R = function (t) {
            t !== o("WAWebUim").DismissReason.LIFECYCLE &&
              (g.step ===
              o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation
                ? n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    var e = yield S();
                    e && g.end();
                  })()
                : g.end());
          }),
          (a[7] = g),
          (a[8] = S),
          (a[9] = R))
        : (R = a[9]);
      var L = R,
        E;
      a[10] !== g || a[11] !== S
        ? ((E = u.jsx(r("WAWebBizAdCreationFlowContent.react"), {
            flow: g,
            showExitConfirmation: S,
            step: g.step,
          })),
          (a[10] = g),
          (a[11] = S),
          (a[12] = E))
        : (E = a[12]);
      var k;
      a[13] !== f || a[14] !== g || a[15] !== L || a[16] !== c || a[17] !== E
        ? ((k = u.jsx(f, { ref: c, flow: g, requestDismiss: L, children: E })),
          (a[13] = f),
          (a[14] = g),
          (a[15] = L),
          (a[16] = c),
          (a[17] = E),
          (a[18] = k))
        : (k = a[18]);
      var I;
      a[19] !== i || a[20] !== l || a[21] !== k
        ? ((I = u.jsx(r("WAWebBizNativeAdsIdentityContextProvider.react"), {
            initialIdentityBundle: i,
            isWAAEligible: l,
            children: k,
          })),
          (a[19] = i),
          (a[20] = l),
          (a[21] = k),
          (a[22] = I))
        : (I = a[22]);
      var T;
      a[23] !== s.initialAdCreationFlowID ||
      a[24] !== s.manageAdsFlowID ||
      a[25] !== I
        ? ((T = u.jsx(r("WAWebNativeAdsFlowIDContextProvider.react"), {
            initialAdCreationFlowID: s.initialAdCreationFlowID,
            manageAdsFlowID: s.manageAdsFlowID,
            children: I,
          })),
          (a[23] = s.initialAdCreationFlowID),
          (a[24] = s.manageAdsFlowID),
          (a[25] = I),
          (a[26] = T))
        : (T = a[26]);
      var D;
      return (
        a[27] !== h || a[28] !== T
          ? ((D = u.jsx(r("WAWebBizAdDraftSaveCallbackContext").Provider, {
              value: b,
              children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
                tabIndex: 0,
                ref: h,
                children: T,
              }),
            })),
            (a[27] = h),
            (a[28] = T),
            (a[29] = D))
          : (D = a[29]),
        D
      );
    }
    l.WAWebBizNativeAdsFlow = _;
  },
  98,
);
