__d(
  "WAWebTableRowCountsLogger",
  ["WAAsyncSleep", "WAWebModelStorageUtils"],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e = o("WAWebModelStorageUtils").getStorage().getExistingTables(),
        t = [],
        n = async function (n) {
          (t.push(
            await o("WAWebModelStorageUtils")
              .getStorage()
              .table(n)
              .count()
              .then(function (e) {
                return [n, e];
              }),
          ),
            await o("WAAsyncSleep").asyncSleep(1e3));
        };
      for (var r of e.keys()) await n(r);
      for (var a of t);
    }
    var s = { logStorageTableRowCounts: e };
    l.default = s;
  },
  98,
);
