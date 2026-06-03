__d(
  "WAWebComposeBoxWWAIWrapperLoadable",
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
            "WAWebComposeBoxWWAIWrapper.react",
          )
            .__setRef("WAWebComposeBoxWWAIWrapperLoadable")
            .load();
          return e;
        }),
        "ComposeBoxWWAIWrapper",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      }),
      d = c;
    l.default = d;
  },
  98,
);
