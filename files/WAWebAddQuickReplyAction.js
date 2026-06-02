__d(
  "WAWebAddQuickReplyAction",
  [
    "invariant",
    "WATimeUtils",
    "WAWebQuickReplyCollection",
    "WAWebQuickReplyGatingUtils",
    "WAWebQuickReplyLogging",
    "WAWebSendQuickReplyAddOrEditMutation",
  ],
  function (t, n, r, o, a, i, l, s) {
    async function e(e, t) {
      (o("WAWebQuickReplyGatingUtils").quickRepliesManagementEnabled() ||
        s(0, 73617),
        o("WAWebQuickReplyLogging").logQuickReplyAddedEvent());
      var n = String(o("WATimeUtils").unixTime());
      (await o(
        "WAWebSendQuickReplyAddOrEditMutation",
      ).sendQuickReplyAddOrEditMutation(n, e, t, 0, []),
        o("WAWebQuickReplyCollection").QuickReplyCollection.add({
          id: n,
          message: t,
          shortcut: e,
          keywords: [],
          count: 0,
        }));
    }
    l.addQuickReplyAction = e;
  },
  98,
);
