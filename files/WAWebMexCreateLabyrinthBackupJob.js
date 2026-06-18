__d(
  "WAWebMexCreateLabyrinthBackupJob",
  [
    "WAWebMexClient",
    "WAWebMexCreateLabyrinthBackupJobMutation.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexCreateLabyrinthBackupJobMutation.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = { input: e },
            n = yield o("WAWebMexClient").fetchQuery(s, t);
          return n;
        })),
        c.apply(this, arguments)
      );
    }
    l.mexCreateLabyrinthBackup = u;
  },
  98,
);
