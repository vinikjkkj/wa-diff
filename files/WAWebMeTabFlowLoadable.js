__d(
  "WAWebMeTabFlowLoadable",
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
          var e = yield r("JSResourceForInteraction")("WAWebMeTabFlow.react")
            .__setRef("WAWebMeTabFlowLoadable")
            .load();
          return e.MeTabFlow;
        }),
        "MeTabFlow",
      ),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingDrawer.react"), {
            title: s._(/*BTDS*/ "You"),
            error: !!t.error,
          });
        },
      });
    ((l.requireBundle = c), (l.MeTabFlowLoadable = d));
  },
  226,
);
