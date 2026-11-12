__d(
  "WAWebCommunityPermissionsDrawerLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "WAWebNoop",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebCommunityPermissionsDrawer.react",
        )
          .__setRef("WAWebCommunityPermissionsDrawerLoadable")
          .load();
      }, "CommunityPermissionsDrawer"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    function d() {
      u().catch(r("WAWebNoop"));
    }
    ((l.requireBundle = u),
      (l.CommunityPermissionsDrawerLoadable = c),
      (l.preloadCommunityPermissionsDrawer = d));
  },
  98,
);
