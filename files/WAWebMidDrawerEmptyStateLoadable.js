__d(
  "WAWebMidDrawerEmptyStateLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebMidDrawerEmptyState.react",
          )
            .__setRef("WAWebMidDrawerEmptyStateLoadable")
            .load();
          return e.MidDrawerEmptyState;
        }),
        "MidDrawerEmptyState",
      ),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), {
            error: !!t.error,
            cancellable: !1,
          });
        },
      });
    l.MidDrawerEmptyStateLoadable = c;
  },
  98,
);
