__d(
  "WAWebGroupAdminHubSidebarDrawerLoadable",
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
          "WAWebGroupAdminHubSidebarDrawer.react",
        )
          .__setRef("WAWebGroupAdminHubSidebarDrawerLoadable")
          .load();
        return e;
      }, "GroupAdminHubSidebarDrawer"),
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
