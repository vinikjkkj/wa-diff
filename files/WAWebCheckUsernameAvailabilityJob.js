__d(
  "WAWebCheckUsernameAvailabilityJob",
  ["WAWebMexUsernameAvailability"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = await o(
          "WAWebMexUsernameAvailability",
        ).mexCheckUsernameAvailabilityQueryJob(e, t),
        r = n.isUsernameAvailable,
        a = n.suggestedUsernames;
      return { isUsernameAvailable: r, suggestedUsernames: a };
    }
    l.getUsernameAvailability = e;
  },
  98,
);
