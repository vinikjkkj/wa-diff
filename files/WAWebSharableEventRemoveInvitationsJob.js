__d(
  "WAWebSharableEventRemoveInvitationsJob",
  [
    "WALogger",
    "WAWebSharableEventCredentials",
    "WAWebSharableEventFailureLogger",
    "WAWebSharableEventInviteLinkJob",
    "WAWebSharableEventRemoveInvitationsJobMutation.graphql",
    "WAWebSharableEventServerClient",
    "WAWebSharableEventStoreInvitation",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebSharableEventRemoveInvitationsJobMutation.graphql"));
    async function c(e, t, n) {
      var a,
        i = n.resetLink;
      await o("WAWebSharableEventCredentials").waitForSharableEventCredentials(
        "remove-invitations",
      );
      var l = await o(
          "WAWebSharableEventServerClient",
        ).mutateSharableEventServer(u, {
          input: {
            event_id: e,
            invited_user_lids: t.map(function (e) {
              return e.toString();
            }),
          },
        }),
        c = l.reader,
        d = l.response,
        m =
          d == null || (a = d.xwa_event_remove_invitations) == null
            ? void 0
            : a.privacy_aware_invitation;
      if (m == null)
        throw r("err")(
          "[sharable_event] xwa_event_remove_invitations returned nothing",
        );
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[sharable_event][remove-guest] removed eventId=",
            " count=",
            "",
          ])),
        e,
        t.length,
      ),
        i &&
          o("WAWebSharableEventInviteLinkJob")
            .invalidateSharableEventInviteLink(e)
            .catch(function (e) {
              o("WAWebSharableEventFailureLogger").logSharableEventFailure(
                "reset-invite-link",
                e,
              );
            }),
        await o(
          "WAWebSharableEventStoreInvitation",
        ).storeAndSendSharableEventInvitation(e, c, m));
    }
    l.removeSharableEventInvitations = c;
  },
  98,
);
