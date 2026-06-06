__d(
  "WAWebMexGroupStoreInviteSmsJob",
  [
    "WAWebMexClient",
    "WAWebMexGroupStoreInviteSmsJobMutation.graphql",
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
            l,
            s =
              e !== void 0
                ? e
                : (e = n("WAWebMexGroupStoreInviteSmsJobMutation.graphql")),
            u = { input: { partcipants: r, group_jid: t } },
            c = yield o("WAWebMexClient").fetchQuery(s, u);
          return (i =
            (l = c.xwa2_group_store_invites_sms) == null ||
            (l = l.participant_responses) == null
              ? void 0
              : l.map(function (e) {
                  return e == null ? void 0 : e.error_code;
                })) != null
            ? i
            : [];
        })),
        u.apply(this, arguments)
      );
    }
    l.mexGroupStoreInviteSms = s;
  },
  98,
);
