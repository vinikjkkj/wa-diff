__d(
  "WAWebProductCatalogProductImageViewFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingMediaViewer.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebProductCatalogProductImageViewFlow.react",
        )
          .__setRef("WAWebProductCatalogProductImageViewFlowLoadable")
          .load();
        return e;
      }, "ProductCatalogProductImageViewFlow"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingMediaViewer.react"), {
            error: !!t.error,
          });
        },
      });
    l.ProductCatalogProductImageViewFlowLoadable = c;
  },
  98,
);
