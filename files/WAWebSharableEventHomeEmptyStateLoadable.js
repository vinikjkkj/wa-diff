__d(
  "WAWebSharableEventHomeEmptyStateLoadable",
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
        return r("JSResourceForInteraction")(
          "WAWebSharableEventHomeEmptyState.react",
        )
          .__setRef("WAWebSharableEventHomeEmptyStateLoadable")
          .load();
      }, "WAWebSharableEventHomeEmptyState"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), {
            error: !!t.error,
            cancellable: !1,
          });
        },
      }),
      d = c;
    l.default = d;
  },
  98,
);
