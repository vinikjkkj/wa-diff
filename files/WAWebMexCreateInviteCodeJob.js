__d(
  "WAWebMexCreateInviteCodeJob",
  [
    "WAWebMexClient",
    "WAWebMexCreateInviteCodeJobMutation.graphql",
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
          var i,
            l =
              e !== void 0
                ? e
                : (e = n("WAWebMexCreateInviteCodeJobMutation.graphql")),
            s = { input: { receiver: t, entry_point: r, server_send_sms: a } },
            u = yield o("WAWebMexClient").fetchQuery(l, s);
          return (i = u.xwa2_growth_create_invite_code) == null
            ? void 0
            : i.code;
        })),
        u.apply(this, arguments)
      );
    }
    l.mexCreateInviteCode = s;
  },
  98,
);
