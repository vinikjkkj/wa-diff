__d(
  "WAWebCtwaActionBannerUnderstandWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumPreferredLinkType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          CtwaActionBannerUnderstand: [
            3586,
            {
              bannerIdentifier: [1, e.TYPES.STRING],
              bannerLocale: [2, e.TYPES.STRING],
              clientLocale: [3, e.TYPES.STRING],
              hasLocalLink: [4, e.TYPES.BOOLEAN],
              hasUniversalLink: [5, e.TYPES.BOOLEAN],
              invalidLink: [6, e.TYPES.STRING],
              lwiFlowIdentifier: [7, e.TYPES.STRING],
              notificationLogId: [11, e.TYPES.STRING],
              preferredLink: [
                8,
                o("WAWebWamEnumPreferredLinkType").PREFERRED_LINK_TYPE,
              ],
              validLocale: [9, e.TYPES.BOOLEAN],
              validNotification: [10, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "private",
            0,
          ],
        },
        { CtwaActionBannerUnderstand: [] },
      );
    l.CtwaActionBannerUnderstandWamEvent = s;
  },
  98,
);
