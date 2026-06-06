__d(
  "WAWebGetUserDisclosuresAction",
  ["WATimeUtils", "WAWebGetUserDisclosuresJob", "WAWebTosJob"],
  function (t, n, r, o, a, i, l) {
    var e = 5;
    async function s() {
      var t = await o("WAWebGetUserDisclosuresJob").getAllUserDisclosures(),
        n = t.map(function (t) {
          return {
            id: t.id.toString(),
            state: t.stage === e,
            timestamp: o("WATimeUtils").castToUnixTime(t.t),
          };
        });
      return {
        refresh: o("WAWebTosJob").DEFAULT_TOS_REFRESH_INTERVAL,
        notice: n,
      };
    }
    l.getUserDisclosuresAction = s;
  },
  98,
);
