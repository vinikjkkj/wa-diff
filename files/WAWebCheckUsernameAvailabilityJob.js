__d(
  "WAWebCheckUsernameAvailabilityJob",
  ["WAWebMexUsernameAvailability", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
              "WAWebMexUsernameAvailability",
            ).mexCheckUsernameAvailabilityQueryJob(e),
            n = t.isUsernameAvailable,
            r = t.suggestedUsernames;
          return { isUsernameAvailable: n, suggestedUsernames: r };
        })),
        s.apply(this, arguments)
      );
    }
    l.getUsernameAvailability = e;
  },
  98,
);
