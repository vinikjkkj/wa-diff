__d(
  "WAWebMexCreateInviteCodeJob",
  ["WAWebMexClient", "WAWebMexCreateInviteCodeJobMutation.graphql"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, r, a) {
      var i =
          e !== void 0
            ? e
            : (e = n("WAWebMexCreateInviteCodeJobMutation.graphql")),
        l = { input: { receiver: t, entry_point: r, server_send_sms: a } },
        s = await o("WAWebMexClient").fetchQuery(i, l),
        u = s.xwa2_growth_create_invite_code;
      return u == null ? null : { code: u.code, errorReason: u.error_reason };
    }
    l.mexCreateInviteCode = s;
  },
  98,
);
