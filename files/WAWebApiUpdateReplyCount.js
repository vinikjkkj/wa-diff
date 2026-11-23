__d(
  "WAWebApiUpdateReplyCount",
  ["WAWebSchemaMessage"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = [];
      for (var r of e) {
        var a,
          i = r[0],
          l = r[1],
          s = t.getByParentMsgKey(i);
        if (s != null) {
          var u = (a = s.replyCount) != null ? a : 0;
          n.push({ id: i, replyCount: u + l });
        }
      }
      await o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(n);
    }
    l.updateReplyCountInParentMsgs = e;
  },
  98,
);
