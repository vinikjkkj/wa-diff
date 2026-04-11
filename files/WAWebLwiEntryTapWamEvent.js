__d(
  "WAWebLwiEntryTapWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumLwiEntryPoint",
    "WAWebWamEnumLwiSubEntryPoint",
    "WAWebWamEnumStatusTypeMedia",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          LwiEntryTap: [
            2770,
            {
              activeItemsCount: [14, e.TYPES.INTEGER],
              archivedItemsCount: [15, e.TYPES.INTEGER],
              businessToolsSessionId: [4, e.TYPES.STRING],
              catalogSessionId: [2, e.TYPES.STRING],
              itemsCount: [11, e.TYPES.INTEGER],
              lwiEntryPoint: [
                3,
                o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT,
              ],
              lwiExtras: [17, e.TYPES.STRING],
              lwiFlowId: [1, e.TYPES.STRING],
              lwiSubEntryPoint: [
                7,
                o("WAWebWamEnumLwiSubEntryPoint").LWI_SUB_ENTRY_POINT,
              ],
              notificationLogId: [16, e.TYPES.STRING],
              previousLwiFlowId: [13, e.TYPES.STRING],
              statusId: [18, e.TYPES.STRING],
              statusSessionId: [6, e.TYPES.INTEGER],
              statusTypeMedia: [
                12,
                o("WAWebWamEnumStatusTypeMedia").STATUS_TYPE_MEDIA,
              ],
              userHasLinkedFbPage: [5, e.TYPES.BOOLEAN],
              waCampaignId: [10, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { LwiEntryTap: [] },
      );
    l.LwiEntryTapWamEvent = s;
  },
  98,
);
