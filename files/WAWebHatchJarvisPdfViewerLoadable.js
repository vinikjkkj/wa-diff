__d(
  "WAWebHatchJarvisPdfViewerLoadable",
  [
    "JSResourceForInteraction",
    "WAWebHatchLoadingDrawer.react",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebHatchJarvisPdfViewer.react",
        )
          .__setRef("WAWebHatchJarvisPdfViewerLoadable")
          .load();
        return e;
      }, "WAWebHatchJarvisPdfViewer"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebHatchLoadingDrawer.react"), {
            error: !!t.error,
          });
        },
        renderLoadingImmediately: !0,
      });
    l.WAWebHatchJarvisPdfViewerLoadable = c;
  },
  98,
);
