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
      var a = t.identityBundle,
        i = t.isWAAEligible,
        l = t.ref,
        s = babelHelpers.objectWithoutPropertiesLoose(t, e),
        c = o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement,
        _ = o("useWAWebFlow").useFlow(c, {
          transitions: o("useWAWebFlow").FlowTransitions.None,
        }),
        f = _[0],
        g = _[1],
        h = r("useWAWebFocusOnMount")(),
        y = p(null),
        C = p(null),
        b = m(function () {
          return { existingDraftIDRef: y, saveCallbackRef: C };
        }, []),
        v = r("useWAWebBizAdCreationExitConfirmation")(
          g.step ===
            o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation,
          b,
        ),
        S = v.showExitConfirmation,
        R = d(
          function (e) {
            e !== o("WAWebUim").DismissReason.LIFECYCLE &&
              (g.step ===
              o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation
                ? n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    var e = yield S();
                    e && g.end();
                  })()
                : g.end());
          },
          [g, S],
        );
      return u.jsx(r("WAWebBizAdDraftSaveCallbackContext").Provider, {
        value: b,
        children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          tabIndex: 0,
          ref: h,
          children: u.jsx(r("WAWebNativeAdsFlowIDContextProvider.react"), {
            initialAdCreationFlowID: s.initialAdCreationFlowID,
            manageAdsFlowID: s.manageAdsFlowID,
            children: u.jsx(
              r("WAWebBizNativeAdsIdentityContextProvider.react"),
              {
                initialIdentityBundle: a,
                isWAAEligible: i,
                children: u.jsx(f, {
                  ref: l,
                  flow: g,
                  requestDismiss: R,
                  children: u.jsx(r("WAWebBizAdCreationFlowContent.react"), {
                    flow: g,
                    showExitConfirmation: S,
                    step: g.step,
                  }),
                }),
              },
            ),
          }),
        }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.WAWebBizNativeAdsFlow = _));
  },
  98,
);
