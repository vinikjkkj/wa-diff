__d(
  "WAWebSharableEventRemoveInvitationsJob",
  [
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "WAWebRelayClient",
    "WAWebSharableEventInvitationStore",
    "WAWebSharableEventRemoveInvitationsJobMutation.graphql",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebSharableEventRemoveInvitationsJobMutation.graphql"));
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          o("WAWebCanonicalGating").isCanonicalEnabled() &&
            !o("WAWebCanonicalUtils").isCanonicalPresent() &&
            (yield o("WAWebCanonicalUtils").waitForCanonicalPresent());
          var a = null,
            i = yield o("WAWebRelayClient").commitMutation(
              s,
              {
                input: {
                  event_id: e,
                  invited_user_lids: t.map(function (e) {
                    return e.toString();
                  }),
                },
              },
              {
                environmentType: "whatsapp_web",
                getInlineDataReader: function (t) {
                  a = t;
                },
              },
            ),
            l =
              i == null || (n = i.xwa_event_remove_invitations) == null
                ? void 0
                : n.privacy_aware_invitation,
            u = a;
          if (l == null || u == null)
            throw r("err")(
              "[sharable_event] xwa_event_remove_invitations returned nothing",
            );
          yield o(
            "WAWebSharableEventInvitationStore",
          ).storeSharableEventInvitationList(e, u, l, l.invitation_list);
        })),
        c.apply(this, arguments)
      );
    }
    l.removeSharableEventInvitations = u;
  },
  98,
);
