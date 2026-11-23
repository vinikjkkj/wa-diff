__d(
  "WAWebMexSetUsernameJob",
  [
    "WAWebMexClient",
    "WAWebMexSetUsernameJobMutation.graphql",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var a,
        i =
          e !== void 0 ? e : (e = n("WAWebMexSetUsernameJobMutation.graphql")),
        l = await o("WAWebMexClient").fetchQuery(
          i,
          r("isStringNullOrEmpty")(t.input) ? {} : t,
        );
      return (
        ((a = l.xwa2_username_set) == null ? void 0 : a.result) === "SUCCESS"
      );
    }
    l.mexSetUsernameQueryJob = s;
  },
  98,
);
