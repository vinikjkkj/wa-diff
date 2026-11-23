__d(
  "WAWebMexUpdateTextStatusJob",
  [
    "WAWebMexClient",
    "WAWebMexUpdateTextStatusJobMutation.graphql",
    "WAWebTextStatusParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, r, a) {
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
        u = await o("WAWebMexClient").fetchQuery(i, s);
      return u;
    }
    l.mexUpdateTextStatus = s;
  },
  98,
);
