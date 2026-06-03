__d(
  "WAWebMexSetUsernameKeyJob",
  [
    "WAWebMexClient",
    "WAWebMexSetUsernameKeyJobMutation.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r,
            a = { pin: t },
            i =
              e !== void 0
                ? e
                : (e = n("WAWebMexSetUsernameKeyJobMutation.graphql")),
            l = yield o("WAWebMexClient").fetchQuery(i, t != null ? a : {});
          return (
            ((r = l.xwa2_username_pin_set) == null ? void 0 : r.result) ===
            "SUCCESS"
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.mexSetUsernameKeyQueryJob = s;
  },
  98,
);
