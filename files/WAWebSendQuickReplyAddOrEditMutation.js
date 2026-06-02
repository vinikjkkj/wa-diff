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
    async function e(e, t, n, a, i) {
      o("WAWebQuickReplyGatingUtils").quickRepliesManagementEnabled() ||
        s(0, 73617);
      var l = o("WATimeUtils").unixTime(),
        u = r("WAWebQuickRepliesSync").getQuickReplyAddOrEditMutation(
          e,
          t,
          n,
          a,
          i,
          l,
        );
      await o("WAWebSyncdCoreApi").lockForSync(
        ["quick-reply"],
        [u],
        async function (r) {
          var o = r[0];
          return o.createOrMerge(e, {
            id: e,
            shortcut: t,
            message: n,
            count: a,
            keywords: i,
            ts: l,
          });
        },
      );
    }
    l.sendQuickReplyAddOrEditMutation = e;
  },
  98,
);
