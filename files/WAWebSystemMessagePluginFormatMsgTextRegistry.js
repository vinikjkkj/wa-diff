__d(
  "WAWebSystemMessagePluginFormatMsgTextRegistry",
  [
    "WAWebFormatCallLogMsgtext",
    "WAWebGroupsGp2AddFormatSystemMessageText",
    "WAWebMemberShareGroupHistoryModeFormatSystemMessageText",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [
        {
          type: "call_log",
          subtype: "miss",
          formatMsgText: (e = r("WAWebFormatCallLogMsgtext")),
        },
        { type: "call_log", subtype: "miss_group", formatMsgText: e },
        { type: "call_log", subtype: "miss_group_video", formatMsgText: e },
        { type: "call_log", subtype: "miss_video", formatMsgText: e },
        { type: "call_log", subtype: void 0, formatMsgText: e },
        {
          type: "gp2",
          subtype: "add",
          formatMsgText: r("WAWebGroupsGp2AddFormatSystemMessageText"),
        },
        {
          type: "gp2",
          subtype: "member_share_group_history_mode",
          formatMsgText: r(
            "WAWebMemberShareGroupHistoryModeFormatSystemMessageText",
          ),
        },
      ];
    l.default = s;
  },
  98,
);
