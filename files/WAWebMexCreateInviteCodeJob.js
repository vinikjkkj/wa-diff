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
          var i =
              e !== void 0
                ? e
                : (e = n("WAWebMexCreateInviteCodeJobMutation.graphql")),
            l = { input: { receiver: t, entry_point: r, server_send_sms: a } },
            s = yield o("WAWebMexClient").fetchQuery(i, l),
            u = s.xwa2_growth_create_invite_code;
          return u == null
            ? null
            : { code: u.code, errorReason: u.error_reason };
        })),
        u.apply(this, arguments)
      );
    }
    l.mexCreateInviteCode = s;
  },
  98,
);
