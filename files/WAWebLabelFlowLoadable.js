__d(
  "WAWebLabelFlowLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebListsGatingUtils",
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
          var e = yield r("JSResourceForInteraction")("WAWebBizLabelFlow.react")
            .__setRef("WAWebLabelFlowLoadable")
            .load();
          return e;
        }),
        "LabelFlow",
      ),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingDrawer.react"), {
            title: o("WAWebListsGatingUtils").isListsEnabled()
              ? s._(/*BTDS*/ "Lists")
              : s._(/*BTDS*/ "Labels"),
            error: !!t.error,
          });
        },
      });
    ((l.requireBundle = c), (l.LabelFlowLoadable = d));
  },
  226,
);
