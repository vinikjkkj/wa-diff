__d(
  "MAIBACMODashboardExperience.entrypoint",
  ["JSResourceForInteraction", "MAIBACMODashboardProvidersQuery$Parameters"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e;
        return {
          queries: {
            dashboardQueryRef: {
              parameters: r("MAIBACMODashboardProvidersQuery$Parameters"),
              variables: { currentPageID: t.pageID },
              options: {
                fetchKey: String((e = t.workspaceVersion) != null ? e : 0),
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "MAIBACMODashboardExperience.react",
      ).__setRef("MAIBACMODashboardExperience.entrypoint"),
    };
    l.default = e;
  },
  98,
);
