__d(
  "WAWebGifSearchSessionStartedWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumGifSearchProvider"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        GifSearchSessionStarted: [
          1134,
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
      { GifSearchSessionStarted: [] },
    );
    l.GifSearchSessionStartedWamEvent = e;
  },
  98,
);
