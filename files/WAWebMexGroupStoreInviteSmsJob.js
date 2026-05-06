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
            l =
              e !== void 0
                ? e
                : (e = n("WAWebMexGroupStoreInviteSmsJobMutation.graphql")),
            s = { input: { partcipants: r, group_jid: t } },
            u = yield o("WAWebMexClient").fetchQuery(l, s),
            c =
              (i = u.xwa2_group_store_invites_sms) == null ||
              (i = i.participant_responses) == null
                ? void 0
                : i.some(function (e) {
                    return (e == null ? void 0 : e.error_code) != null;
                  });
          return c === !0;
        })),
        u.apply(this, arguments)
      );
    }
    l.mexGroupStoreInviteSms = s;
  },
  98,
);
