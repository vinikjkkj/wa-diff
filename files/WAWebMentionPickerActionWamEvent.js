__d(
  "WAWebMentionPickerActionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumGroupTypeClient",
    "WAWebWamEnumMentionType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MentionPickerAction: [
            7082,
            {
              groupSize: [1, e.TYPES.INTEGER],
              groupTypeClient: [
                2,
                o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT,
              ],
              isAGroup: [3, e.TYPES.BOOLEAN],
              mentionGroupId: [6, e.TYPES.STRING],
              mentionType: [4, o("WAWebWamEnumMentionType").MENTION_TYPE],
              threadId: [5, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MentionPickerAction: [] },
      );
    l.MentionPickerActionWamEvent = s;
  },
  98,
);
