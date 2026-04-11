__d(
  "WAWebEphemeralOutOfSyncInfoWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumClientGroupSizeBucket"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          EphemeralOutOfSyncInfo: [
            3892,
            {
              groupSizeBucket: [
                1,
                o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET,
              ],
              incomingMessageEphemeralityDuration: [2, e.TYPES.INTEGER],
              isAGroup: [3, e.TYPES.BOOLEAN],
              isNewThreadForUser: [5, e.TYPES.BOOLEAN],
              otherDefaultModeDuration: [6, e.TYPES.INTEGER],
              threadEphemeralityDuration: [7, e.TYPES.INTEGER],
              threadId: [8, e.TYPES.STRING],
              userDefaultModeDuration: [9, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { EphemeralOutOfSyncInfo: [] },
      );
    l.EphemeralOutOfSyncInfoWamEvent = s;
  },
  98,
);
