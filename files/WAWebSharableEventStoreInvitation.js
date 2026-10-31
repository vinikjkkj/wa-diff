__d(
  "WAWebSharableEventStoreInvitation",
  [
    "WAWebDBSharableEventInvitationList",
    "WAWebSharableEventServerInvitationRows",
    "WAWebSharableEventStoreInvitation_invitation.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebSharableEventStoreInvitation_invitation.graphql"));
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a = t(s, n),
            i = o(
              "WAWebSharableEventServerInvitationRows",
            ).readSharableEventInvitationSummary(t, a);
          if (i == null) return null;
          var l = ((r = a.invitation_list) != null ? r : []).flatMap(
              function (e) {
                var n =
                  e == null
                    ? null
                    : o(
                        "WAWebSharableEventServerInvitationRows",
                      ).readSharableEventInvitee(t, e);
                return n == null ? [] : [n];
              },
            ),
            u = yield o(
              "WAWebDBSharableEventInvitationList",
            ).replaceSharableEventInvitationsIfNewer(e, i, l);
          return u == null ? null : { row: u, invitees: l };
        })),
        c.apply(this, arguments)
      );
    }
    l.storeSharableEventInvitation = u;
  },
  98,
);
