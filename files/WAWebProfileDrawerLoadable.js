__d(
  "WAWebProfileDrawerLoadable",
  [
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "WAWebProfileDrawerLoadableRequireBundle",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLoadable")({
        loader: o("WAWebProfileDrawerLoadableRequireBundle").requireBundle,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      }),
      c = u;
    l.default = c;
  },
  98,
);
