__d(
  "WAWebMexUsernameAvailability",
  [
    "WAWebMexClient",
    "WAWebMexUsernameAvailabilityQuery.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a,
            i,
            l =
              e !== void 0
                ? e
                : (e = n("WAWebMexUsernameAvailabilityQuery.graphql")),
            s = { input: t, session_id: r, source: "USER_INPUT" },
            u = yield o("WAWebMexClient").fetchQuery(l, s),
            c = [];
          if (
            ((a = u.xwa2_username_check) == null ? void 0 : a.suggestions) !=
            null
          ) {
            var d;
            c.push.apply(
              c,
              (d = u.xwa2_username_check) == null ? void 0 : d.suggestions,
            );
          }
          return {
            isUsernameAvailable:
              ((i = u.xwa2_username_check) == null ? void 0 : i.result) ===
              "SUCCESS",
            suggestedUsernames: c,
          };
        })),
        u.apply(this, arguments)
      );
    }
    l.mexCheckUsernameAvailabilityQueryJob = s;
  },
  98,
);
