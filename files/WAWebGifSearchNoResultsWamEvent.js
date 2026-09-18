__d(
  "WAWebGifSearchNoResultsWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumGifSearchProvider"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          GifSearchNoResults: [
            1128,
            {
              dedupKey: [4, e.TYPES.INTEGER],
              gifSearchProvider: [
                1,
                o("WAWebWamEnumGifSearchProvider").GIF_SEARCH_PROVIDER,
              ],
              inputLanguageCode: [3, e.TYPES.STRING],
              languageCode: [2, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { GifSearchNoResults: [] },
      );
    l.GifSearchNoResultsWamEvent = s;
  },
  98,
);
