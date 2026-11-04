__d(
  "WAWebSharableEventJoinViaLinkJob",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBSharableEventMetadata",
    "WAWebSharableEventJoinViaLinkJobMutation.graphql",
    "WAWebSharableEventServerClient",
    "WAWebSharableEventServerRows",
    "WAWebSharableEventStoreInvitation",
    "WAWebSharableEventUpdateRsvpJob",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebSharableEventJoinViaLinkJobMutation.graphql"));
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
              "WAWebSharableEventServerClient",
            ).mutateSharableEventServer(u, {
              input: babelHelpers.extends(
                { link_token: e },
                o("WAWebSharableEventUpdateRsvpJob").toSharableEventRsvpInput(
                  t,
                ),
              ),
            }),
            a = n.reader,
            i = n.response,
            l = i == null ? void 0 : i.xwa_event_join_via_link,
            c = l == null ? void 0 : l.privacy_aware_event,
            d =
              c == null
                ? null
                : o("WAWebSharableEventServerRows").readSharableEventMetadata(
                    a,
                    c,
                  );
          if (d == null)
            throw r("err")(
              "[sharable_event] xwa_event_join_via_link returned no event",
            );
          var m = d.eventId,
            p = yield o(
              "WAWebDBSharableEventMetadata",
            ).upsertSharableEventMetadataIfNewer([d], { insertMissing: !0 }),
            _ = p[0],
            f = l == null ? void 0 : l.privacy_aware_invitation,
            g =
              f == null
                ? null
                : yield o(
                    "WAWebSharableEventStoreInvitation",
                  ).storeSharableEventInvitation(m, a, f);
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][join-via-link] joined eventId=",
                  " response=",
                  "",
                ])),
              m,
              t,
            ),
            g != null
              ? o("WAWebBackendApi").frontendFireAndForget(
                  "applySharableEventUpdate",
                  o(
                    "WAWebSharableEventStoreInvitation",
                  ).toSharableEventInvitationUpdate(m, g),
                )
              : _ != null &&
                o("WAWebBackendApi").frontendFireAndForget(
                  "applySharableEventUpdate",
                  { events: [_.row] },
                ),
            m
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.joinSharableEventViaLink = c;
  },
  98,
);
