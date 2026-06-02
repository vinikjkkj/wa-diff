__d(
  "WAWebMexCreateInviteCodeJob",
  ["WAWebMexClient", "WAWebMexCreateInviteCodeJobMutation.graphql"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, r) {
      var a,
        i = !1,
        l =
          e !== void 0
            ? e
            : (e = n("WAWebMexCreateInviteCodeJobMutation.graphql")),
        s = { input: { receiver: t, entry_point: r, server_send_sms: i } },
        u = await o("WAWebMexClient").fetchQuery(l, s);
      return (a = u.xwa2_growth_create_invite_code) == null ? void 0 : a.code;
    }
    l.mexCreateInviteCode = s;
  },
  98,
);
