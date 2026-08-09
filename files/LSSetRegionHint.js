__d(
  "LSSetRegionHint",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (n) {
          return t.forEach(t.db.table(1).fetch([[[e[0]]]]), function (t) {
            var n = t.update,
              r = t.item;
            return n({ regionHint: e[1] });
          });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSCoreSetRegionHintStoredProcedure"),
      (e.__tables__ = ["sync_groups"]),
      (a.exports = e));
  },
  null,
);
