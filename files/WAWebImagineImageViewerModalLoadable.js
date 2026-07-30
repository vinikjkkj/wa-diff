__d(
  "WAWebImagineImageViewerModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingMediaViewer.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebImagineImageViewerModal.react",
          )
            .__setRef("WAWebImagineImageViewerModalLoadable")
            .load();
          return e;
        }),
        "ImagineImageViewerModal",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingMediaViewer.react"), {
            error: !!t.error,
          });
        },
      });
    l.WAWebImagineImageViewerModalLoadable = c;
  },
  98,
);
