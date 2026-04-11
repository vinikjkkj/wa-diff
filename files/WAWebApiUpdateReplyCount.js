__d(
  "WAWebApiUpdateReplyCount",
  ["WAWebSchemaMessage", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          yield o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(n);
        })),
        s.apply(this, arguments)
      );
    }
    l.updateReplyCountInParentMsgs = e;
  },
  98,
);
