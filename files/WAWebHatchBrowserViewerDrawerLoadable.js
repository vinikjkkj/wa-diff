__d(
  "WAWebHatchBrowserViewerDrawerLoadable",
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
          "WAWebHatchBrowserViewerDrawer.react",
        )
          .__setRef("WAWebHatchBrowserViewerDrawerLoadable")
          .load();
        return e;
      }, "WAWebHatchBrowserViewerDrawer"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.WAWebHatchBrowserViewerDrawerLoadable = c;
  },
  98,
);
