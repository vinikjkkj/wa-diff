__d(
  "WAWebStickerSuggestionLoadable",
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
          return yield r("JSResourceForInteraction")(
            "WAWebStickerSuggestion.react",
          )
            .__setRef("WAWebStickerSuggestionLoadable")
            .load();
        }),
        "StickerSuggestion",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    l.default = c;
  },
  98,
);
