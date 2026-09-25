__d(
  "WAWebMexGroupStoreAndSendInviteSmsJob",
  [
    "WAWebMexClient",
    "WAWebMexGroupStoreAndSendInviteSmsJobMutation.graphql",
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
                : (e = n(
                    "WAWebMexGroupStoreAndSendInviteSmsJobMutation.graphql",
                  )),
            u = {
              input: {
                entry_point: a,
                group_jid: t,
                participants: [{ participant: r, server_sent_sms: !0 }],
              },
            },
            c = yield o("WAWebMexClient").fetchQuery(s, u),
            d =
              (i = c.xwa2_group_store_and_send_invites_sms) == null ||
              (i = i.participant_responses) == null
                ? void 0
                : i[0],
            m = (l = d == null ? void 0 : d.error_code) != null ? l : null,
            p = d != null && m == null && d.server_sent === !0;
          return { errorCode: p ? null : m, serverSent: p };
        })),
        u.apply(this, arguments)
      );
    }
    l.mexGroupStoreAndSendInviteSms = s;
  },
  98,
);
