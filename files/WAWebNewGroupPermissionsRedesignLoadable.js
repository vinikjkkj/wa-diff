__d(
  "WAWebNewGroupPermissionsRedesignLoadable",
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
          "WAWebNewGroupPermissionsRedesign.react",
        )
          .__setRef("WAWebNewGroupPermissionsRedesignLoadable")
          .load();
      }, "NewGroupPermissionsRedesign"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    ((l.requireBundle = u), (l.NewGroupPermissionsRedesignLoadable = c));
  },
  98,
);
