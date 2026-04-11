__d(
  "WAWebGifSearchCancelledWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumGifSearchProvider"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        GifSearchCancelled: [
          1126,
          {
            gifSearchProvider: [
              1,
              o("WAWebWamEnumGifSearchProvider").GIF_SEARCH_PROVIDER,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { GifSearchCancelled: [] },
    );
    l.GifSearchCancelledWamEvent = e;
  },
  98,
);
