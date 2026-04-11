__d(
  "WAWebLwiEntryPointImpressionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumLwiEntryPoint",
    "WAWebWamEnumLwiEntryPointImpressionAction",
    "WAWebWamEnumLwiSubEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          LwiEntryPointImpression: [
            2906,
            {
              activeItemsCount: [8, e.TYPES.INTEGER],
              archivedItemsCount: [9, e.TYPES.INTEGER],
              businessToolsSessionId: [2, e.TYPES.STRING],
              catalogSessionId: [1, e.TYPES.STRING],
              itemsCount: [7, e.TYPES.INTEGER],
              lwiEntryPoint: [
                3,
                o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT,
              ],
              lwiEntryPointImpressionAction: [
                12,
                o("WAWebWamEnumLwiEntryPointImpressionAction")
                  .LWI_ENTRY_POINT_IMPRESSION_ACTION,
              ],
              lwiExtras: [10, e.TYPES.STRING],
              lwiSubEntryPoint: [
                6,
                o("WAWebWamEnumLwiSubEntryPoint").LWI_SUB_ENTRY_POINT,
              ],
              statusId: [11, e.TYPES.STRING],
              statusSessionId: [5, e.TYPES.INTEGER],
              userHasLinkedFbPage: [4, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { LwiEntryPointImpression: [] },
      );
    l.LwiEntryPointImpressionWamEvent = s;
  },
  98,
);
