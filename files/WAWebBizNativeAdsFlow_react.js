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
        C = p(null),
        b;
      a[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = { existingDraftIDRef: y, saveCallbackRef: C }), (a[6] = b))
        : (b = a[6]);
      var v = b,
        S = r("useWAWebBizAdCreationExitConfirmation")(
          g.step ===
            o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation,
          v,
        ),
        R = S.showExitConfirmation,
        L;
      a[7] !== g || a[8] !== R
        ? ((L = function (t) {
            t !== o("WAWebUim").DismissReason.LIFECYCLE &&
              (g.step ===
              o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation
                ? n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    var e = yield R();
                    e && g.end();
                  })()
                : g.end());
          }),
          (a[7] = g),
          (a[8] = R),
          (a[9] = L))
        : (L = a[9]);
      var E = L,
        k;
      a[10] !== g || a[11] !== R
        ? ((k = u.jsx(r("WAWebBizAdCreationFlowContent.react"), {
            flow: g,
            showExitConfirmation: R,
            step: g.step,
          })),
          (a[10] = g),
          (a[11] = R),
          (a[12] = k))
        : (k = a[12]);
      var I;
      a[13] !== f || a[14] !== g || a[15] !== E || a[16] !== c || a[17] !== k
        ? ((I = u.jsx(f, { ref: c, flow: g, requestDismiss: E, children: k })),
          (a[13] = f),
          (a[14] = g),
          (a[15] = E),
          (a[16] = c),
          (a[17] = k),
          (a[18] = I))
        : (I = a[18]);
      var T;
      a[19] !== i || a[20] !== l || a[21] !== I
        ? ((T = u.jsx(r("WAWebBizNativeAdsIdentityContextProvider.react"), {
            initialIdentityBundle: i,
            isWAAEligible: l,
            children: I,
          })),
          (a[19] = i),
          (a[20] = l),
          (a[21] = I),
          (a[22] = T))
        : (T = a[22]);
      var D;
      a[23] !== s.initialAdCreationFlowID ||
      a[24] !== s.manageAdsFlowID ||
      a[25] !== T
        ? ((D = u.jsx(r("WAWebNativeAdsFlowIDContextProvider.react"), {
            initialAdCreationFlowID: s.initialAdCreationFlowID,
            manageAdsFlowID: s.manageAdsFlowID,
            children: T,
          })),
          (a[23] = s.initialAdCreationFlowID),
          (a[24] = s.manageAdsFlowID),
          (a[25] = T),
          (a[26] = D))
        : (D = a[26]);
      var x;
      return (
        a[27] !== h || a[28] !== D
          ? ((x = u.jsx(r("WAWebBizAdDraftSaveCallbackContext").Provider, {
              value: v,
              children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
                tabIndex: 0,
                ref: h,
                children: D,
              }),
            })),
            (a[27] = h),
            (a[28] = D),
            (a[29] = x))
          : (x = a[29]),
        x
      );
    }
    l.WAWebBizNativeAdsFlow = _;
  },
  98,
);
