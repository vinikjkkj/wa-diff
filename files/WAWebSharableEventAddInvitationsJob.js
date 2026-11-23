__d(
  "WAWebSharableEventAddInvitationsJob",
  [
    "WAWebSharableEventAddInvitationsJobMutation.graphql",
    "WAWebSharableEventCredentials",
    "WAWebSharableEventServerClient",
    "WAWebSharableEventServerRows",
    "WAWebSharableEventStoreInvitation",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebSharableEventAddInvitationsJobMutation.graphql"));
    async function u(e, t) {
      var n, a, i, l;
      await o("WAWebSharableEventCredentials").waitForSharableEventCredentials(
        "add-invitations",
      );
      var u = await o(
          "WAWebSharableEventServerClient",
        ).mutateSharableEventServer(s, {
          input: {
            event_id: e,
            invited_user_lids: t.map(function (e) {
              return e.toString();
            }),
          },
        }),
        c = u.reader,
        d = u.response,
        m = d == null ? void 0 : d.event_add_invitations;
      if (m == null)
        throw r("err")(
          "[sharable_event] event_add_invitations returned nothing",
        );
      await o(
        "WAWebSharableEventStoreInvitation",
      ).storeAndSendSharableEventInvitation(e, c, m.privacy_aware_invitation);
      var p = m.invitation_add_outcome;
      return {
        newlyAddedLids: ((n = p == null ? void 0 : p.newly_added_lids) != null
          ? n
          : []
        ).flatMap(function (e) {
          var t = o("WAWebSharableEventServerRows").toStoredLid(e);
          return t == null ? [] : [t];
        }),
        successfulCount:
          (a = p == null ? void 0 : p.successful_count) != null ? a : 0,
        invalidCount:
          (i = p == null ? void 0 : p.invalid_count) != null ? i : 0,
        failedCount: (l = p == null ? void 0 : p.failed_count) != null ? l : 0,
        isRetryable: (p == null ? void 0 : p.is_retryable) === !0,
      };
    }
    l.addSharableEventInvitations = u;
  },
  98,
);
