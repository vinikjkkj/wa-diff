__d(
  "WAWebGroupPermissionsRedesignLoadable",
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
      u = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebGroupPermissionsRedesign.react",
        )
          .__setRef("WAWebGroupPermissionsRedesignLoadable")
          .load();
      }, "GroupPermissionsRedesign"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    ((l.requireBundle = u), (l.GroupPermissionsRedesignLoadable = c));
  },
  98,
);
