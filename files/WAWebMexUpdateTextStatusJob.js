__d(
  "WAWebMexUpdateTextStatusJob",
  [
    "WAWebMexClient",
    "WAWebMexUpdateTextStatusJobMutation.graphql",
    "WAWebTextStatusParseUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var i =
              e !== void 0
                ? e
                : (e = n("WAWebMexUpdateTextStatusJobMutation.graphql")),
            l = o(
              "WAWebTextStatusParseUtils",
            ).createTextStatusObjectForUpdateRequest({
              textStatusString: t,
              textStatusEmoji: r,
              textStatusEphemeralDuration: a,
            }),
            s = { input: l },
            u = yield o("WAWebMexClient").fetchQuery(i, s);
          return u;
        })),
        u.apply(this, arguments)
      );
    }
    l.mexUpdateTextStatus = s;
  },
  98,
);
