__d(
  "WAWebHatchConnectorsFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebDrawerManager",
    "WAWebHatchConnectAttemptLog",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebHatchConnectorsFlow.react",
          )
            .__setRef("WAWebHatchConnectorsFlowLoadable")
            .load();
          return e;
        }),
        "WAWebHatchConnectorsFlow",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    function d(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.cardTapAttempt,
        a;
      (t[0] !== n
        ? ((a = function () {
            return o("WAWebHatchConnectAttemptLog").settleHatchConnectAttempt(
              n,
              !1,
            );
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]),
        r("useWAWebOnUnmount")(a));
      var i;
      return (
        t[2] !== e
          ? ((i = s.jsx(c, babelHelpers.extends({}, e))),
            (t[2] = e),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    function m(e, t, n) {
      o("WAWebDrawerManager").DrawerManager.openDrawerRight(
        s.jsx(d, {
          cardTapAttempt: n,
          initialConnectorId: e,
          initialConnectorName: t,
          onClose: o("WAWebDrawerManager").closeDrawerRight,
        }),
      );
    }
    ((l.WAWebHatchConnectorsFlowLoadable = d),
      (l.openHatchConnectorDrawer = m));
  },
  98,
);
