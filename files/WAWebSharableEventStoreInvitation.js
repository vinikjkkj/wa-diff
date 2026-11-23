__d(
  "WAWebSharableEventStoreInvitation",
  [
    "WAWebBackendApi",
    "WAWebDBSharableEventInvitationList",
    "WAWebSharableEventServerInvitationRows",
    "WAWebSharableEventStoreInvitation_invitation.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebSharableEventStoreInvitation_invitation.graphql"));
    async function u(e, t, n) {
      var r,
        a = t(s, n),
        i = o(
          "WAWebSharableEventServerInvitationRows",
        ).readSharableEventInvitationSummary(t, a);
      if (i == null) return null;
      var l = ((r = a.invitation_list) != null ? r : []).flatMap(function (e) {
          var n =
            e == null
              ? null
              : o(
                  "WAWebSharableEventServerInvitationRows",
                ).readSharableEventInvitee(t, e);
          return n == null ? [] : [n];
        }),
        u = await o(
          "WAWebDBSharableEventInvitationList",
        ).replaceSharableEventInvitationsIfNewer(e, i, l);
      return u == null ? null : { row: u, invitees: l };
    }
    async function c(e, t, n, r) {
      var a = n == null ? null : await u(e, t, n);
      return (
        a != null
          ? o("WAWebBackendApi").frontendFireAndForget(
              "applySharableEventUpdate",
              d(e, a),
            )
          : r != null &&
            o("WAWebBackendApi").frontendFireAndForget(
              "applySharableEventUpdate",
              { events: [r], inviteeLists: [] },
            ),
        a
      );
    }
    function d(e, t) {
      return {
        events: [t.row],
        inviteeLists: [
          {
            eventId: e,
            rows: t.invitees.map(function (t) {
              return babelHelpers.extends({}, t, { eventId: e });
            }),
          },
        ],
      };
    }
    ((l.storeSharableEventInvitation = u),
      (l.storeAndSendSharableEventInvitation = c),
      (l.toSharableEventInvitationUpdate = d));
  },
  98,
);
