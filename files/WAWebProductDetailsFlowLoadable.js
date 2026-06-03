__d(
  "WAWebProductDetailsFlowLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebBizProductDetailsFlow.react",
          )
            .__setRef("WAWebProductDetailsFlowLoadable")
            .load();
          return e;
        }),
        "ProductDetailsFlow",
      ),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingDrawer.react"), {
            title: s._(/*BTDS*/ "Details"),
            error: !!t.error,
          });
        },
      });
    ((l.requireBundle = c), (l.ProductDetailsFlowLoadable = d));
  },
  226,
);
