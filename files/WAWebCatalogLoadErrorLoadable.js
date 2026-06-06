__d(
  "WAWebCatalogLoadErrorLoadable",
  [
    "$InternalEnum",
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
          "WAWebCatalogLoadError.react",
        )
          .__setRef("WAWebCatalogLoadErrorLoadable")
          .load();
        return e.CatalogLoadError;
      }, "CatalogLoadError"),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      }),
      d = n("$InternalEnum").Mirrored(["LINK", "BUTTON", "NONE"]);
    ((l.CatalogLoadErrorLoadable = c), (l.CTADisplayType = d));
  },
  98,
);
