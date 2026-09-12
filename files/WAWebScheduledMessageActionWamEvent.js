__d(
  "WAWebScheduledMessageActionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumGroupRoleType",
    "WAWebWamEnumGroupTypeClient",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumScheduledMessageActionType",
    "WAWebWamEnumScheduledMessageEntrypoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ScheduledMessageAction: [
            8502,
            {
              groupRole: [1, o("WAWebWamEnumGroupRoleType").GROUP_ROLE_TYPE],
              groupTypeClient: [
                2,
                o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT,
              ],
              messageType: [3, o("WAWebWamEnumMessageType").MESSAGE_TYPE],
              scheduledMessageActionType: [
                4,
                o("WAWebWamEnumScheduledMessageActionType")
                  .SCHEDULED_MESSAGE_ACTION_TYPE,
              ],
              scheduledMessageCount: [5, e.TYPES.INTEGER],
              scheduledMessageEntrypoint: [
                6,
                o("WAWebWamEnumScheduledMessageEntrypoint")
                  .SCHEDULED_MESSAGE_ENTRYPOINT,
              ],
              scheduledMessageFutureDurationSecs: [7, e.TYPES.INTEGER],
              scheduledMessageToScheduledCount: [9, e.TYPES.INTEGER],
              scheduledMessageToUnscheduleCount: [10, e.TYPES.INTEGER],
              unifiedSessionId: [8, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ScheduledMessageAction: [] },
      );
    l.ScheduledMessageActionWamEvent = s;
  },
  98,
);
