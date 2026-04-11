__d(
  "WAWebCartFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingCartFlowLoadable.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")("WAWebBizCartFlow")
            .__setRef("WAWebCartFlowLoadable")
            .load();
          return e;
        }),
        "CartFlowLoadable",
      ),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingCartFlowLoadable.react"), {
            error: !!t.error,
          });
        },
      });
    ((l.requireBundle = u), (l.CartFlowLoadable = c));
  },
  98,
);
