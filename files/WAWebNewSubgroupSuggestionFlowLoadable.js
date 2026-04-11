__d(
  "WAWebNewSubgroupSuggestionFlowLoadable",
  [
    "JSResourceForInteraction",
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
          var e = yield r("JSResourceForInteraction")(
            "WAWebNewSubgroupSuggestionFlow.react",
          )
            .__setRef("WAWebNewSubgroupSuggestionFlowLoadable")
            .load();
          return e.NewSubgroupSuggestionFlow;
        }),
        "NewSubgroupSuggestionFlow",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.NewSubgroupSuggestionFlowLoadable = c;
  },
  98,
);
