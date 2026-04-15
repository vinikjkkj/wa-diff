__d(
  "WAWebTableRowCountsLogger",
  ["WAAsyncSleep", "WAWebModelStorageUtils", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebModelStorageUtils").getStorage().getExistingTables(),
            t = [],
            n = function* (n) {
              (t.push(
                yield o("WAWebModelStorageUtils")
                  .getStorage()
                  .table(n)
                  .count()
                  .then(function (e) {
                    return [n, e];
                  }),
              ),
                yield o("WAAsyncSleep").asyncSleep(1e3));
            };
          for (var r of e.keys()) yield* n(r);
          for (var a of t);
        })),
        s.apply(this, arguments)
      );
    }
    var u = { logStorageTableRowCounts: e };
    l.default = u;
  },
  98,
);
