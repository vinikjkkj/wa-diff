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
            i = !1,
            l =
              e !== void 0
                ? e
                : (e = n("WAWebMexCreateInviteCodeJobMutation.graphql")),
            s = { input: { receiver: t, entry_point: r, server_send_sms: i } },
            u = yield o("WAWebMexClient").fetchQuery(l, s);
          return (a = u.xwa2_growth_create_invite_code) == null
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
