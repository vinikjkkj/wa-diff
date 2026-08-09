__d(
  "LSWriteThreadCapabilities",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (r) {
          return t.db
            .table(9)
            .fetch([[[e[0]]]])
            .next()
            .then(function (r, o) {
              var a = r.done,
                i = r.value;
              return a
                ? 0
                : ((o = i.item),
                  (n[0] = t.i64.of_float(Date.now())),
                  t.forEach(t.db.table(9).fetch([[[e[0]]]]), function (t) {
                    var n = t.update,
                      r = t.item;
                    return n({
                      capabilities: e[1],
                      capabilities2: e[2],
                      capabilities3: e[3],
                      capabilities4: e[4],
                      capabilities5: e[5],
                      capabilities6: e[6],
                    });
                  }));
            });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxWriteThreadCapabilitiesStoredProcedure"),
      (e.__tables__ = ["threads"]),
      (a.exports = e));
  },
  null,
);
