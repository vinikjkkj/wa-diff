__d(
  "LSGetCursor",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (o) {
          return t.sequence([
            function (r) {
              return t.db
                .table(1)
                .fetch([[[e[0]]]])
                .next()
                .then(function (e, t) {
                  var r = e.done,
                    o = e.value;
                  return r
                    ? (n[0] = void 0)
                    : ((t = o.item), (n[0] = t.currentCursor));
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
    ((e.__sproc_name__ = "LSCoreGetCursorStoredProcedure"),
      (e.__tables__ = ["sync_groups"]),
      (a.exports = e));
  },
  null,
);
