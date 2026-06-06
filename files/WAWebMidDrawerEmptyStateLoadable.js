__d(
  "WAWebMidDrawerEmptyStateLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingDrawer.react",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebMidDrawerEmptyState.react",
        )
          .__setRef("WAWebMidDrawerEmptyStateLoadable")
          .load();
        return e.MidDrawerEmptyState;
      }, "MidDrawerEmptyState"),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), {
            error: !!t.error,
            cancellable: !1,
          });
        },
      });
    l.MidDrawerEmptyStateLoadable = c;
  },
  98,
);
