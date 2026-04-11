__d(
  "WAWebAddQuickReplyAction",
  [
    "invariant",
    "WATimeUtils",
    "WAWebBizGatingUtils",
    "WAWebQuickReplyCollection",
    "WAWebQuickReplyLogging",
    "WAWebSendQuickReplyAddOrEditMutation",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (o("WAWebBizGatingUtils").quickRepliesManagementEnabled() ||
            s(0, 73617),
            o("WAWebQuickReplyLogging").logQuickReplyAddedEvent());
          var n = String(o("WATimeUtils").unixTime());
          (yield o(
            "WAWebSendQuickReplyAddOrEditMutation",
          ).sendQuickReplyAddOrEditMutation(n, e, t, 0, []),
            o("WAWebQuickReplyCollection").QuickReplyCollection.add({
              id: n,
              message: t,
              shortcut: e,
              keywords: [],
              count: 0,
            }));
        })),
        u.apply(this, arguments)
      );
    }
    l.addQuickReplyAction = e;
  },
  98,
);
