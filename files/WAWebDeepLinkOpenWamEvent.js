__d(
  "WAWebDeepLinkOpenWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumDeepLinkOpenFrom",
    "WAWebWamEnumDeepLinkType",
    "WAWebWamEnumOwnerType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          DeepLinkOpen: [
            2136,
            {
              campaign: [8, e.TYPES.STRING],
              deepLinkOpenFrom: [
                2,
                o("WAWebWamEnumDeepLinkOpenFrom").DEEP_LINK_OPEN_FROM,
              ],
              deepLinkSessionId: [6, e.TYPES.STRING],
              deepLinkType: [3, o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE],
              isContact: [4, e.TYPES.BOOLEAN],
              linkOwnerType: [5, o("WAWebWamEnumOwnerType").OWNER_TYPE],
              sourceSurface: [7, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { DeepLinkOpen: [] },
      );
    l.DeepLinkOpenWamEvent = s;
  },
  98,
);
