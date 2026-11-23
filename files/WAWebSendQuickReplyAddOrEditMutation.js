__d(
  "WAWebSendQuickReplyAddOrEditMutation",
  [
    "invariant",
    "WATimeUtils",
    "WAWebQuickRepliesSync",
    "WAWebQuickReplyGatingUtils",
    "WAWebSyncdCoreApi",
  ],
  function (t, n, r, o, a, i, l, s) {
    async function e(e) {
      var t = e.count,
        n = e.id,
        a = e.keywords,
        i = e.message,
        l = e.shortcut;
      o("WAWebQuickReplyGatingUtils").quickRepliesManagementEnabled() ||
        s(0, 73617);
      var u = o("WATimeUtils").unixTime(),
        c = r("WAWebQuickRepliesSync").getQuickReplyAddOrEditMutation({
          count: t,
          id: n,
          keywords: a,
          message: i,
          shortcut: l,
          timestamp: u,
        });
      await o("WAWebSyncdCoreApi").lockForSync(
        ["quick-reply"],
        [c],
        async function (e) {
          var r = e[0];
          return r.createOrMerge(n, {
            id: n,
            shortcut: l,
            message: i,
            count: t,
            keywords: a,
            ts: u,
          });
        },
      );
    }
    l.sendQuickReplyAddOrEditMutation = e;
  },
  98,
);
