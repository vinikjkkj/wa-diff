__d(
  "WAWebSharableEventUpdateRsvpJob",
  [
    "WAWebBackendApi",
    "WAWebRelayClient",
    "WAWebSharableEventStoreInvitation",
    "WAWebSharableEventUpdateRsvpJobMutation.graphql",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 0,
      u = 1,
      c =
        e !== void 0
          ? e
          : (e = n("WAWebSharableEventUpdateRsvpJobMutation.graphql"));
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = null,
            i = yield o("WAWebRelayClient").commitMutation(
              c,
              {
                input: babelHelpers.extends(
                  { event_id: e, rsvp_status: p(t) },
                  _(t),
                ),
              },
              {
                environmentType: "whatsapp_web",
                getInlineDataReader: function (t) {
                  a = t;
                },
              },
            ),
            l =
              i == null || (n = i.event_update_rsvp) == null
                ? void 0
                : n.privacy_aware_invitation,
            s = a;
          if (l == null || s == null)
            throw r("err")(
              "[sharable_event] event_update_rsvp returned no invitation",
            );
          var u = yield o(
            "WAWebSharableEventStoreInvitation",
          ).storeSharableEventInvitation(e, s, l);
          u != null &&
            o("WAWebBackendApi").frontendFireAndForget(
              "applySharableEventUpdate",
              {
                events: [u.row],
                inviteeLists: [
                  {
                    eventId: e,
                    rows: u.invitees.map(function (t) {
                      return babelHelpers.extends({}, t, { eventId: e });
                    }),
                  },
                ],
              },
            );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return e === "going" || e === "going_with_guest"
        ? "GOING"
        : e === "maybe"
          ? "MAYBE"
          : e === "not_going"
            ? "NOT_GOING"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function _(e) {
      return e === "going"
        ? { extra_guest_count: s }
        : e === "going_with_guest"
          ? { extra_guest_count: u }
          : e === "maybe" || e === "not_going"
            ? {}
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    l.updateSharableEventRsvp = d;
  },
  98,
);
