__d(
  "WAWebGifSearchNoResultsWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumGifSearchProvider"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        GifSearchNoResults: [
          1128,
          {
            gifSearchProvider: [
              1,
              o("WAWebWamEnumGifSearchProvider").GIF_SEARCH_PROVIDER,
            ],
            inputLanguageCode: [3, o("WAWebWamCodegenUtils").TYPES.STRING],
            languageCode: [2, o("WAWebWamCodegenUtils").TYPES.STRING],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { GifSearchNoResults: [] },
    );
    l.GifSearchNoResultsWamEvent = e;
  },
  98,
);
