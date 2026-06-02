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
    async function e(e, t, n, r, a) {
      (o("WAWebQuickReplyGatingUtils").quickRepliesManagementEnabled() ||
        s(0, 73617),
        o("WAWebQuickReplyLogging").logQuickReplyEditEvent(),
        await o(
          "WAWebSendQuickReplyAddOrEditMutation",
        ).sendQuickReplyAddOrEditMutation(e, t, n, r, a),
        o("WAWebQuickReplyCollection").QuickReplyCollection.add(
          { id: e, message: n, shortcut: t },
          { merge: !0 },
        ));
    }
    l.editQuickReplyAction = e;
  },
  98,
);
