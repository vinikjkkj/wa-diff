__d(
  "WAWebSettingsFlowLoadable",
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
          var e = yield r("JSResourceForInteraction")("WAWebSettingsFlow.react")
            .__setRef("WAWebSettingsFlowLoadable")
            .load();
          return e.SettingsFlow;
        }),
        "SettingsFlow",
      ),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingDrawer.react"), {
            title: s._(/*BTDS*/ "Settings"),
            error: !!t.error,
          });
        },
      });
    ((l.requireBundle = c), (l.SettingsFlowLoadable = d));
  },
  226,
);
