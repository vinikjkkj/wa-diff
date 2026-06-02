__d(
  "WAWebMexSetUsernameKeyJob",
  ["WAWebMexClient", "WAWebMexSetUsernameKeyJobMutation.graphql"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var r,
        a = { pin: t },
        i =
          e !== void 0
            ? e
            : (e = n("WAWebMexSetUsernameKeyJobMutation.graphql")),
        l = await o("WAWebMexClient").fetchQuery(i, t != null ? a : {});
      return (
        ((r = l.xwa2_username_pin_set) == null ? void 0 : r.result) ===
        "SUCCESS"
      );
    }
    l.mexSetUsernameKeyQueryJob = s;
  },
  98,
);
