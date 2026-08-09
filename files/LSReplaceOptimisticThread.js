__d(
  "LSReplaceOptimisticThread",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        o = [];
      return t.sequence([
        function (o) {
          return t.db
            .table(9)
            .fetch([[[e[1]]]])
            .next()
            .then(function (o, a) {
              var i = o.done,
                l = o.value;
              return i
                ? t.forEach(
                    t.filter(t.db.table(9).fetch([[[e[0]]]]), function (n) {
                      return (
                        t.i64.eq(n.threadKey, e[0]) &&
                        t.i64.le(n.authorityLevel, t.i64.cast([0, 20]))
                      );
                    }),
                    function (n) {
                      var r = n.update,
                        o = n.item;
                      return r({
                        threadKey: e[1],
                        authorityLevel: t.i64.cast([0, 40]),
                      });
                    },
                  )
                : ((a = l.item),
                  t.i64.le(a.authorityLevel, t.i64.cast([0, 40]))
                    ? (r("gkx")("14697") ? (n[2] = !1) : (n[2] = !0),
                      (n[1] = n[2]))
                    : (n[1] = !0),
                  n[1]
                    ? t.forEach(t.db.table(9).fetch([[[e[0]]]]), function (e) {
                        return e.delete();
                      })
                    : t.resolve());
            });
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxReplaceOptimisticThreadStoredProcedure"),
      (e.__tables__ = ["threads"]));
    var s = e;
    l.default = s;
  },
  98,
);
