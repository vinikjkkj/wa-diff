__d(
  "LSGetViewerFBID",
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
                .table(4)
                .fetch([[[t.i64.cast([0, 1])]]])
                .next()
                .then(function (e, r) {
                  var o = e.done,
                    a = e.value;
                  return o
                    ? (n[0] = t.i64.cast([-1, 4294967295]))
                    : ((r = a.item), (n[0] = r.facebookUserId));
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
    ((e.__sproc_name__ = "LSCoreGetViewerFBIDStoredProcedure"),
      (e.__tables__ = ["_user_info"]),
      (a.exports = e));
  },
  null,
);
