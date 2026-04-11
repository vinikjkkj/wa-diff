__d(
  "WAWebGetUserDisclosuresAction",
  [
    "WATimeUtils",
    "WAWebGetUserDisclosuresJob",
    "WAWebTosJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 5;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WAWebGetUserDisclosuresJob").getAllUserDisclosures(),
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
        })),
        u.apply(this, arguments)
      );
    }
    l.getUserDisclosuresAction = s;
  },
  98,
);
