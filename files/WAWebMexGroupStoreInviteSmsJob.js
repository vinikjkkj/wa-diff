__d(
  "WAWebMexGroupStoreInviteSmsJob",
  ["WAWebMexClient", "WAWebMexGroupStoreInviteSmsJobMutation.graphql"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, r, a) {
      var i,
        l,
        s =
          e !== void 0
            ? e
            : (e = n("WAWebMexGroupStoreInviteSmsJobMutation.graphql")),
        u = { input: { partcipants: r, group_jid: t } },
        c = await o("WAWebMexClient").fetchQuery(s, u);
      return (i =
        (l = c.xwa2_group_store_invites_sms) == null ||
        (l = l.participant_responses) == null
          ? void 0
          : l.map(function (e) {
              return e == null ? void 0 : e.error_code;
            })) != null
        ? i
        : [];
    }
    l.mexGroupStoreInviteSms = s;
  },
  98,
);
