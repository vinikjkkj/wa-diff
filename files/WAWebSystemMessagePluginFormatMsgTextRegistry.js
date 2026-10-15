__d(
  "WAWebSystemMessagePluginFormatMsgTextRegistry",
  [
    "WAWebBrazilPaymentReceiptAddedFormatMsgText",
    "WAWebFormatCallLog",
    "WAWebGroupsGp2AddFormatSystemMessageText",
    "WAWebMemberShareGroupHistoryModeFormatSystemMessageText",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [
        {
          type: "call_log",
          subtype: "miss",
          formatMsgText: (e = r("WAWebFormatCallLog")),
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
        {
          type: "notification",
          subtype: "br_payment_receipt_added",
          formatMsgText: r("WAWebBrazilPaymentReceiptAddedFormatMsgText"),
        },
      ];
    l.default = s;
  },
  98,
);
