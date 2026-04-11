__d(
  "WAWebMexSetUsernameJob",
  [
    "WAWebMexClient",
    "WAWebMexSetUsernameJobMutation.graphql",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i =
              e !== void 0
                ? e
                : (e = n("WAWebMexSetUsernameJobMutation.graphql")),
            l = yield o("WAWebMexClient").fetchQuery(
              i,
              r("isStringNullOrEmpty")(t.input) ? {} : t,
            );
          return (
            ((a = l.xwa2_username_set) == null ? void 0 : a.result) ===
            "SUCCESS"
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.mexSetUsernameQueryJob = s;
  },
  98,
);
