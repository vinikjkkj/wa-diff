__d(
  "WAWebSharableEventUpdateRsvpJob",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebSharableEventServerClient",
    "WAWebSharableEventStoreInvitation",
    "WAWebSharableEventUpdateRsvpJobMutation.graphql",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 0,
      d = 1,
      m =
        e !== void 0
          ? e
          : (e = n("WAWebSharableEventUpdateRsvpJobMutation.graphql"));
    async function p(e, t) {
      var n,
        a = await o("WAWebSharableEventServerClient").mutateSharableEventServer(
          m,
          { input: babelHelpers.extends({ event_id: e }, _(t)) },
        ),
        i = a.reader,
        l = a.response,
        c =
          l == null || (n = l.event_update_rsvp) == null
            ? void 0
            : n.privacy_aware_invitation;
      if (c == null)
        throw r("err")(
          "[sharable_event] event_update_rsvp returned no invitation",
        );
      var d = await o(
        "WAWebSharableEventStoreInvitation",
      ).storeSharableEventInvitation(e, i, c);
      if (d == null) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[sharable_event][respond] sent eventId=",
              " response=",
              " but not stored: a newer invitation is stored",
            ])),
          e,
          t,
        );
        return;
      }
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[sharable_event][respond] sent eventId=",
            " response=",
            "",
          ])),
        e,
        t,
      ),
        o("WAWebBackendApi").frontendFireAndForget(
          "applySharableEventUpdate",
          o(
            "WAWebSharableEventStoreInvitation",
          ).toSharableEventInvitationUpdate(e, d),
        ));
    }
    function _(e) {
      return babelHelpers.extends({ rsvp_status: f(e) }, g(e));
    }
    function f(e) {
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
    function g(e) {
      return e === "going"
        ? { extra_guest_count: c }
        : e === "going_with_guest"
          ? { extra_guest_count: d }
          : e === "maybe" || e === "not_going"
            ? {}
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    ((l.updateSharableEventRsvp = p), (l.toSharableEventRsvpInput = _));
  },
  98,
);
