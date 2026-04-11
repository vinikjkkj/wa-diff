__d(
  "WAWebWaFsGroupJoinRequestActionWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumGroupJoinRequestActionType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WaFsGroupJoinRequestAction: [
            3944,
            {
              groupJid: [1, e.TYPES.STRING],
              groupJoinRequestAction: [
                2,
                o("WAWebWamEnumGroupJoinRequestActionType")
                  .GROUP_JOIN_REQUEST_ACTION_TYPE,
              ],
              groupJoinRequestGroupsInCommon: [5, e.TYPES.INTEGER],
              isSuccessful: [3, e.TYPES.BOOLEAN],
              serverResponseTime: [4, e.TYPES.TIMER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WaFsGroupJoinRequestAction: [] },
      );
    l.WaFsGroupJoinRequestActionWamEvent = s;
  },
  98,
);
