__d(
  "WAWebUnifiedResponseContentDrawerLoadable",
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
          "WAWebUnifiedResponseContentDrawer.react",
        )
          .__setRef("WAWebUnifiedResponseContentDrawerLoadable")
          .load();
        return e.WAWebUnifiedResponseContentDrawer;
      }, "WAWebUnifiedResponseContentDrawer"),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.WAWebUnifiedResponseContentDrawerLoadable = c;
  },
  98,
);
