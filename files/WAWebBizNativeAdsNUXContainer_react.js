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
      var t = e.adCreationFlowID,
        n = e.entryPoint,
        a = e.manageAdsFlowID,
        i = e.onClose,
        l = m(!1),
        u = l[0],
        p = l[1],
        _ = m(null),
        f = _[0],
        g = _[1],
        h = m(!1),
        y = h[0],
        C = h[1];
      d(function () {
        var e = r("setTimeout")(function () {
          p(!0);
        }, 200);
        return function () {
          return window.clearTimeout(e);
        };
      }, []);
      var b = c(
          function () {
            (o("WAWebBizNativeAdsIdentityLogger").logNuxScreenEvent(
              o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
                .LWI_ACTION_BACK_BUTTON_TAPPED,
              a,
            ),
              o("WAWebModalManager").closeModalManager(),
              i());
          },
          [a, i],
        ),
        v = c(
          function () {
            (o("WAWebBizNativeAdsIdentityLogger").logNuxScreenEvent(
              o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
                .LWI_ACTION_NUX_CONTINUE_TAPPED,
              a,
            ),
              o("WAWebModalManager").closeModalManager(),
              g(function () {
                return o(
                  "WAWebBizNativeAdsFlowLoadable",
                ).createBizNativeAdsFlowLoadable(t, function () {
                  return C(!0);
                });
              }));
          },
          [t, a],
        );
      return (
        d(
          function () {
            u &&
              f == null &&
              (o("WAWebModalManager").ModalManager.open(
                s.jsx(r("WAWebBizNativeAdsNUX.react"), {
                  onBack: b,
                  onOK: v,
                  onOverlayClick: r("WAWebNoop"),
                }),
                { blockClose: !0 },
              ),
              o("WAWebBizNativeAdsIdentityLogger").logNuxScreenEvent(
                o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
                  .LWI_ACTION_VIEW,
                a,
              ));
          },
          [u, f, b, v, a],
        ),
        s.jsxs(s.Fragment, {
          children: [
            !y && s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {}),
            f != null && s.jsx(f, { entryPoint: n, manageAdsFlowID: a }),
          ],
        })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.WAWebBizNativeAdsNUXContainer = p));
  },
  98,
);
