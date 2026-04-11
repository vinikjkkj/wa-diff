__d(
  "WAWebBizNativeAdsNUXContainer.react",
  [
    "WAWebBizNativeAdsFlowLoadable",
    "WAWebBizNativeAdsIdentityLogger",
    "WAWebBizNativeAdsLoadingDrawer.react",
    "WAWebBizNativeAdsNUX.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebWamEnumLwiScreenAction",
    "react",
    "react-compiler-runtime",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(24),
        n = e.adCreationFlowID,
        a = e.entryPoint,
        i = e.manageAdsFlowID,
        l = e.onClose,
        u = m(!1),
        c = u[0],
        p = u[1],
        _ = m(null),
        f = _[0],
        g = _[1],
        h = m(!1),
        y = h[0],
        C = h[1],
        b,
        v;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = function () {
            var e = r("setTimeout")(function () {
              p(!0);
            }, 200);
            return function () {
              return window.clearTimeout(e);
            };
          }),
          (v = []),
          (t[0] = b),
          (t[1] = v))
        : ((b = t[0]), (v = t[1])),
        d(b, v));
      var S;
      t[2] !== i || t[3] !== l
        ? ((S = function () {
            (o("WAWebBizNativeAdsIdentityLogger").logNuxScreenEvent(
              o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
                .LWI_ACTION_BACK_BUTTON_TAPPED,
              i,
            ),
              o("WAWebModalManager").closeModalManager(),
              l());
          }),
          (t[2] = i),
          (t[3] = l),
          (t[4] = S))
        : (S = t[4]);
      var R = S,
        L;
      t[5] !== n || t[6] !== i
        ? ((L = function () {
            (o("WAWebBizNativeAdsIdentityLogger").logNuxScreenEvent(
              o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
                .LWI_ACTION_NUX_CONTINUE_TAPPED,
              i,
            ),
              o("WAWebModalManager").closeModalManager(),
              g(function () {
                return o(
                  "WAWebBizNativeAdsFlowLoadable",
                ).createBizNativeAdsFlowLoadable(n, function () {
                  return C(!0);
                });
              }));
          }),
          (t[5] = n),
          (t[6] = i),
          (t[7] = L))
        : (L = t[7]);
      var E = L,
        k,
        I;
      (t[8] !== f || t[9] !== R || t[10] !== E || t[11] !== i || t[12] !== c
        ? ((k = function () {
            c &&
              f == null &&
              (o("WAWebModalManager").ModalManager.open(
                s.jsx(r("WAWebBizNativeAdsNUX.react"), {
                  onBack: R,
                  onOK: E,
                  onOverlayClick: r("WAWebNoop"),
                }),
                { blockClose: !0 },
              ),
              o("WAWebBizNativeAdsIdentityLogger").logNuxScreenEvent(
                o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
                  .LWI_ACTION_VIEW,
                i,
              ));
          }),
          (I = [c, f, R, E, i]),
          (t[8] = f),
          (t[9] = R),
          (t[10] = E),
          (t[11] = i),
          (t[12] = c),
          (t[13] = k),
          (t[14] = I))
        : ((k = t[13]), (I = t[14])),
        d(k, I));
      var T;
      t[15] !== y
        ? ((T = !y && s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {})),
          (t[15] = y),
          (t[16] = T))
        : (T = t[16]);
      var D;
      t[17] !== f || t[18] !== a || t[19] !== i
        ? ((D = f != null && s.jsx(f, { entryPoint: a, manageAdsFlowID: i })),
          (t[17] = f),
          (t[18] = a),
          (t[19] = i),
          (t[20] = D))
        : (D = t[20]);
      var x;
      return (
        t[21] !== T || t[22] !== D
          ? ((x = s.jsxs(s.Fragment, { children: [T, D] })),
            (t[21] = T),
            (t[22] = D),
            (t[23] = x))
          : (x = t[23]),
        x
      );
    }
    l.WAWebBizNativeAdsNUXContainer = p;
  },
  98,
);
