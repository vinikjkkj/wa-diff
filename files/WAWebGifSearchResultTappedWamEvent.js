__d(
  "WAWebGifSearchResultTappedWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumGifSearchProvider"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        GifSearchResultTapped: [
          1122,
          {
            gifSearchProvider: [
              1,
              o("WAWebWamEnumGifSearchProvider").GIF_SEARCH_PROVIDER,
            ],
            rank: [2, o("WAWebWamCodegenUtils").TYPES.INTEGER],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { GifSearchResultTapped: [] },
    );
    l.GifSearchResultTappedWamEvent = e;
  },
  98,
);
