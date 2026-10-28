__d(
  "WAWebMultiSelectBarLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebMultiSelectBar.react",
          )
            .__setRef("WAWebMultiSelectBarLoadable")
            .load();
          return e.MultiSelectBar;
        }),
        "MultiSelectBar",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    l.WAWebMultiSelectBarLoadable = c;
  },
  98,
);
