__d(
  "WAWebPnhDailyWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumTypeOfGroupEnum"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PnhDaily: [
            3806,
            {
              communityId: [1, e.TYPES.STRING],
              mappingMissing: [7, e.TYPES.INTEGER],
              pnhIndicatorClicksChat: [2, e.TYPES.INTEGER],
              pnhIndicatorClicksInfoScreen: [3, e.TYPES.INTEGER],
              reactionDeleteCount: [4, e.TYPES.INTEGER],
              reactionOpenTrayCount: [5, e.TYPES.INTEGER],
              totalContacts: [8, e.TYPES.INTEGER],
              typeOfGroup: [
                6,
                o("WAWebWamEnumTypeOfGroupEnum").TYPE_OF_GROUP_ENUM,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { PnhDaily: [] },
      );
    l.PnhDailyWamEvent = s;
  },
  98,
);
