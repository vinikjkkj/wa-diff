__d(
  "LSGetFirstAvailableAttachmentCTAID",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (e) {
          return t.sequence([
            function (e) {
              return t.db
                .table(19)
                .fetchDesc()
                .next()
                .then(function (e, r) {
                  var o = e.done,
                    a = e.value;
                  return o
                    ? (n[0] = t.i64.cast([0, 1]))
                    : ((r = a.item),
                      (n[0] = t.i64.add(r.ctaId, t.i64.cast([0, 1]))));
                });
            },
            function (e) {
              return (r[0] = n[0]);
            },
          ]);
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSMailboxGetFirstAvailableAttachmentCTAIDStoredProcedure"),
      (e.__tables__ = ["attachment_ctas"]),
      (a.exports = e));
  },
  null,
);
