__d(
  "WAWebOrderCreationFlowLoadable",
  [
    "JSResource",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResource")("WAWebBizOrderCreationFlow.react")
            .__setRef("WAWebOrderCreationFlowLoadable")
            .load();
          return e;
        }),
        "OrderCreationFlow",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      }),
      d = c;
    l.default = d;
  },
  98,
);
