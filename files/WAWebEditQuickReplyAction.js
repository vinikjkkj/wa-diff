__d(
  "WAWebEditQuickReplyAction",
  [
    "invariant",
    "WAWebQuickReplyCollection",
    "WAWebQuickReplyGatingUtils",
    "WAWebQuickReplyLogging",
    "WAWebSendQuickReplyAddOrEditMutation",
  ],
  function (t, n, r, o, a, i, l, s) {
    async function e(e) {
      var t = e.count,
        n = e.id,
        r = e.keywords,
        a = e.message,
        i = e.shortcut;
      (o("WAWebQuickReplyGatingUtils").quickRepliesManagementEnabled() ||
        s(0, 73617),
        o("WAWebQuickReplyLogging").logQuickReplyEditEvent(),
        await o(
          "WAWebSendQuickReplyAddOrEditMutation",
        ).sendQuickReplyAddOrEditMutation({
          count: t,
          id: n,
          keywords: r,
          message: a,
          shortcut: i,
        }),
        o("WAWebQuickReplyCollection").QuickReplyCollection.add(
          { id: n, message: a, shortcut: i },
          { merge: !0 },
        ));
    }
    l.editQuickReplyAction = e;
  },
  98,
);
