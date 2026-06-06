__d(
  "WAWebNewSubgroupSuggestionFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebNewSubgroupSuggestionFlow.react",
        )
          .__setRef("WAWebNewSubgroupSuggestionFlowLoadable")
          .load();
        return e.NewSubgroupSuggestionFlow;
      }, "NewSubgroupSuggestionFlow"),
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
