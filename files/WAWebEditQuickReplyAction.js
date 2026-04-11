__d(
  "WAWebEditQuickReplyAction",
  [
    "invariant",
    "WAWebBizGatingUtils",
    "WAWebQuickReplyCollection",
    "WAWebQuickReplyLogging",
    "WAWebSendQuickReplyAddOrEditMutation",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t, n, r, o) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            (o("WAWebBizGatingUtils").quickRepliesManagementEnabled() ||
              s(0, 73617),
              o("WAWebQuickReplyLogging").logQuickReplyEditEvent(),
              yield o(
                "WAWebSendQuickReplyAddOrEditMutation",
              ).sendQuickReplyAddOrEditMutation(e, t, n, r, a),
              o("WAWebQuickReplyCollection").QuickReplyCollection.add(
                { id: e, message: n, shortcut: t },
                { merge: !0 },
              ));
          },
        )),
        u.apply(this, arguments)
      );
    }
    l.editQuickReplyAction = e;
  },
  98,
);
