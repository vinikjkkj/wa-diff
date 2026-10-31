__d(
  "WAWebSharableEventAddInvitationsJob",
  [
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "WAWebRelayClient",
    "WAWebSharableEventAddInvitationsJobMutation.graphql",
    "WAWebSharableEventInvitationStore",
    "WAWebSharableEventServerRows",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebSharableEventAddInvitationsJobMutation.graphql"));
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n, a, i, l;
          o("WAWebCanonicalGating").isCanonicalEnabled() &&
            !o("WAWebCanonicalUtils").isCanonicalPresent() &&
            (yield o("WAWebCanonicalUtils").waitForCanonicalPresent());
          var u = null,
            c = yield o("WAWebRelayClient").commitMutation(
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
                  u = t;
                },
              },
            ),
            d = c == null ? void 0 : c.event_add_invitations,
            m = u;
          if (d == null || m == null)
            throw r("err")(
              "[sharable_event] event_add_invitations returned nothing",
            );
          var p = d.privacy_aware_invitation;
          yield o(
            "WAWebSharableEventInvitationStore",
          ).storeSharableEventInvitationList(
            e,
            m,
            p,
            p == null ? void 0 : p.invitation_list,
          );
          var _ = d.invitation_add_outcome;
          return {
            newlyAddedLids: ((n = _ == null ? void 0 : _.newly_added_lids) !=
            null
              ? n
              : []
            ).flatMap(function (e) {
              var t = o("WAWebSharableEventServerRows").toStoredLid(e);
              return t == null ? [] : [t];
            }),
            successfulCount:
              (a = _ == null ? void 0 : _.successful_count) != null ? a : 0,
            invalidCount:
              (i = _ == null ? void 0 : _.invalid_count) != null ? i : 0,
            failedCount:
              (l = _ == null ? void 0 : _.failed_count) != null ? l : 0,
            isRetryable: (_ == null ? void 0 : _.is_retryable) === !0,
          };
        })),
        c.apply(this, arguments)
      );
    }
    l.addSharableEventInvitations = u;
  },
  98,
);
