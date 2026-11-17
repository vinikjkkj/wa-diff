__d(
  "WAWebInstantViewerLoadable",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadLoading.react",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebInstantViewer.react",
          )
            .__setRef("WAWebInstantViewerLoadable")
            .load();
          return e;
        }),
        "InstantViewer",
      ),
      d = r("WAWebLoadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLazyLoadLoading.react"), { error: !!t.error });
        },
      });
    function m() {
      c().catch(function (t) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[instants] viewer preload failed, opening a Zap loads it again",
            ])),
        );
      });
    }
    ((l.WAWebInstantViewerLoadable = d), (l.preloadInstantViewer = m));
  },
  98,
);
