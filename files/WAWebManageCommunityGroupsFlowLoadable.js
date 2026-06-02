__d(
  "WAWebManageCommunityGroupsFlowLoadable",
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
          "WAWebManageCommunityGroupsFlow.react",
        )
          .__setRef("WAWebManageCommunityGroupsFlowLoadable")
          .load();
        return e;
      }, "ManageCommunityGroupsFlow"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    ((l.requireBundle = u), (l.ManageCommunityGroupsFlowLoadable = c));
  },
  98,
);
