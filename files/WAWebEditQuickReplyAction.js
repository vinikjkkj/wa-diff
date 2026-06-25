__d(
  "WAWebEditQuickReplyAction",
  [
    "invariant",
    "WAWebQuickReplyCollection",
    "WAWebQuickReplyGatingUtils",
    "WAWebQuickReplyLogging",
    "WAWebSendQuickReplyAddOrEditMutation",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.count,
            n = e.id,
            r = e.keywords,
            a = e.message,
            i = e.shortcut;
          (o("WAWebQuickReplyGatingUtils").quickRepliesManagementEnabled() ||
            s(0, 73617),
            o("WAWebQuickReplyLogging").logQuickReplyEditEvent(),
            yield o(
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
        })),
        u.apply(this, arguments)
      );
    }
    l.editQuickReplyAction = e;
  },
  98,
);
