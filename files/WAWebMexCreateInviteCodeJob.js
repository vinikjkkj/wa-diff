__d(
  "WAWebMexCreateInviteCodeJob",
  [
    "WAWebMexClient",
    "WAWebMexCreateInviteCodeJobMutation.graphql",
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
            i =
              e !== void 0
                ? e
                : (e = n("WAWebMexCreateInviteCodeJobMutation.graphql")),
            l = { input: { receiver: t, entry_point: r } },
            s = yield o("WAWebMexClient").fetchQuery(i, l);
          return (a = s.xwa2_growth_create_invite_code) == null
            ? void 0
            : a.code;
        })),
        u.apply(this, arguments)
      );
    }
    l.mexCreateInviteCode = s;
  },
  98,
);
