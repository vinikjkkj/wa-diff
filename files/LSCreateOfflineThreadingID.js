__d(
  "LSCreateOfflineThreadingID",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return (
        (n[0] = t.i64.random()),
        (r[0] = t.i64.and_(
          t.i64.or_(
            t.i64.lsl_(e[0], t.i64.to_int32(t.i64.cast([0, 22]))),
            t.i64.and_(n[0], t.i64.cast([0, 4194303])),
          ),
          t.i64.cast([2147483647, 4294967295]),
        )),
        t.resolve(r)
      );
    }
    ((e.__sproc_name__ = "LSMailboxCreateOfflineThreadingIDStoredProcedure"),
      (e.__tables__ = []),
      (a.exports = e));
  },
  null,
);
