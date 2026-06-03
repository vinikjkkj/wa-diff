__d(
  "WAWebCheckUsernameAvailabilityJob",
  ["WAWebMexUsernameAvailability", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
              "WAWebMexUsernameAvailability",
            ).mexCheckUsernameAvailabilityQueryJob(e, t),
            r = n.isUsernameAvailable,
            a = n.suggestedUsernames;
          return { isUsernameAvailable: r, suggestedUsernames: a };
        })),
        s.apply(this, arguments)
      );
    }
    l.getUsernameAvailability = e;
  },
  98,
);
