__d(
  "WAWebBannerEventWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBannerOperations",
    "WAWebWamEnumBannerTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          BannerEvent: [
            1578,
            {
              bannerId: [3, e.TYPES.STRING],
              bannerOperation: [
                2,
                o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS,
              ],
              bannerType: [1, o("WAWebWamEnumBannerTypes").BANNER_TYPES],
              deviceId: [4, e.TYPES.STRING],
              notificationLogId: [5, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { BannerEvent: [] },
      );
    l.BannerEventWamEvent = s;
  },
  98,
);
