__d(
  "WAWebStickerSendMusicButtonLoadable",
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
            "WAWebStickerSendMusicButton.react",
          )
            .__setRef("WAWebStickerSendMusicButtonLoadable")
            .load();
          return e;
        }),
        "StickerSendMusicButton",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    l.WAWebStickerSendMusicButtonLoadable = c;
  },
  98,
);
