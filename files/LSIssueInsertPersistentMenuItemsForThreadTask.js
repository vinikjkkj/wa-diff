__d(
  "LSIssueInsertPersistentMenuItemsForThreadTask",
  ["LSIssueNewTask"],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (o) {
          return (
            (r[0] = new t.Map()),
            r[0].set("thread_key", e[0]),
            (r[1] = t.toJSON(r[0])),
            t.storedProcedure(
              n("LSIssueNewTask"),
              "insert_persistent_menu_items",
              t.i64.cast([0, 117]),
              r[1],
              void 0,
              void 0,
              t.i64.cast([0, 0]),
              t.i64.cast([0, 0]),
              void 0,
              void 0,
              t.i64.cast([0, 0]),
              t.i64.cast([0, 0]),
            )
          );
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSOmnistoreSettingsIssueInsertPersistentMenuItemsForThreadTaskStoredProcedure"),
      (e.__tables__ = []),
      (a.exports = e));
  },
  null,
);
