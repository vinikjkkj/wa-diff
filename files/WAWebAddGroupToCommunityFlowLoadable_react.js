__d(
  "WAWebAddGroupToCommunityFlowLoadable.react",
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
            "WAWebAddGroupToCommunityFlow.react",
          )
            .__setRef("WAWebAddGroupToCommunityFlowLoadable.react")
            .load();
          return e;
        }),
        "CommunityTransferOwnershipFlow",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.AddGroupToCommunityFlowLoadable = c;
  },
  98,
);
