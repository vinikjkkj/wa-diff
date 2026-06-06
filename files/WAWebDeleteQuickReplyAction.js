__d(
  "WAWebDeleteQuickReplyAction",
  [
    "invariant",
    "WATimeUtils",
    "WAWebQuickRepliesSync",
    "WAWebQuickReplyCollection",
    "WAWebQuickReplyGatingUtils",
    "WAWebQuickReplyLogging",
    "WAWebSyncdCoreApi",
  ],
  function (t, n, r, o, a, i, l, s) {
    async function e(e) {
      (o("WAWebQuickReplyGatingUtils").quickRepliesManagementEnabled() ||
        s(0, 73617),
        o("WAWebQuickReplyLogging").logQuickReplyDeleteEvent());
      var t = o("WATimeUtils").unixTime(),
        n = r("WAWebQuickRepliesSync").getQuickReplyDeleteMutation(e, t);
      (await o("WAWebSyncdCoreApi").lockForSync(
        ["quick-reply"],
        [n],
        async function (t) {
          var n = t[0];
          return n.remove(e);
        },
      ),
        o("WAWebQuickReplyCollection").QuickReplyCollection.remove(e)[0]);
    }
    l.deleteQuickReplyAction = e;
  },
  98,
);
