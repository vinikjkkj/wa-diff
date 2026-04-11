__d(
  "WAWebMediaViewerFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingMediaViewer.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebMediaViewerFlow.react",
          )
            .__setRef("WAWebMediaViewerFlowLoadable")
            .load();
          return e.MediaViewerFlow;
        }),
        "MediaViewerFlow",
      ),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingMediaViewer.react"), {
            error: !!t.error,
          });
        },
      });
    ((l.requireBundle = u), (l.MediaViewerFlowLoadable = c));
  },
  98,
);
