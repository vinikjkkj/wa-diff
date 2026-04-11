__d(
  "WAWebGifFromProviderSentWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumGifSearchProvider"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        GifFromProviderSent: [
          1124,
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
      { GifFromProviderSent: [] },
    );
    l.GifFromProviderSentWamEvent = e;
  },
  98,
);
