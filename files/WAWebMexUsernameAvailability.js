__d(
  "WAWebMexUsernameAvailability",
  [
    "WAWebMexClient",
    "WAWebMexUsernameAvailabilityQuery.graphql",
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
            a,
            i =
              e !== void 0
                ? e
                : (e = n("WAWebMexUsernameAvailabilityQuery.graphql")),
            l = { input: t },
            s = yield o("WAWebMexClient").fetchQuery(i, l),
            u = [];
          if (
            ((r = s.xwa2_username_check) == null ? void 0 : r.suggestions) !=
            null
          ) {
            var c;
            u.push.apply(
              u,
              (c = s.xwa2_username_check) == null ? void 0 : c.suggestions,
            );
          }
          return {
            isUsernameAvailable:
              ((a = s.xwa2_username_check) == null ? void 0 : a.result) ===
              "SUCCESS",
            suggestedUsernames: u,
          };
        })),
        u.apply(this, arguments)
      );
    }
    l.mexCheckUsernameAvailabilityQueryJob = s;
  },
  98,
);
