__d(
  "WAWebMmSignalUndisclosedWebWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumMmSignalType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MmSignalUndisclosedWeb: [
            7862,
            {
              mmCarouselCardIndex: [1, e.TYPES.INTEGER],
              mmCtaButtonIndex: [2, e.TYPES.INTEGER],
              mmSignalData: [3, e.TYPES.STRING],
              mmSignalType: [4, o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE],
            },
            [1, 1, 1],
            "private",
            0,
          ],
        },
        { MmSignalUndisclosedWeb: [] },
      );
    l.MmSignalUndisclosedWebWamEvent = s;
  },
  98,
);
