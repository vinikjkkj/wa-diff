__d(
  "WAWebChannelMembershipActionEventWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumChannelMembershipActionResult"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChannelMembershipActionEvent: [
            5762,
            {
              actionResult: [
                1,
                o("WAWebWamEnumChannelMembershipActionResult")
                  .CHANNEL_MEMBERSHIP_ACTION_RESULT,
              ],
              cid: [2, e.TYPES.STRING],
              dedupKey: [5, e.TYPES.INTEGER],
              unifiedSessionId: [3, e.TYPES.STRING],
              updatesTabSessionId: [4, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChannelMembershipActionEvent: [] },
      );
    l.ChannelMembershipActionEventWamEvent = s;
  },
  98,
);
