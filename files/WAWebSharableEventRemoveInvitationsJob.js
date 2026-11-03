__d(
  "WAWebSharableEventRemoveInvitationsJob",
  [
    "WALogger",
    "WAWebSharableEventCredentials",
    "WAWebSharableEventRemoveInvitationsJobMutation.graphql",
    "WAWebSharableEventServerClient",
    "WAWebSharableEventStoreInvitation",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebSharableEventRemoveInvitationsJobMutation.graphql"));
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          yield o(
            "WAWebSharableEventCredentials",
          ).waitForSharableEventCredentials("remove-invitations");
          var a = yield o(
              "WAWebSharableEventServerClient",
            ).mutateSharableEventServer(u, {
              input: {
                event_id: e,
                invited_user_lids: t.map(function (e) {
                  return e.toString();
                }),
              },
            }),
            i = a.reader,
            l = a.response,
            c =
              l == null || (n = l.xwa_event_remove_invitations) == null
                ? void 0
                : n.privacy_aware_invitation;
          if (c == null)
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
            yield o(
              "WAWebSharableEventStoreInvitation",
            ).storeAndSendSharableEventInvitation(e, i, c));
        })),
        d.apply(this, arguments)
      );
    }
    l.removeSharableEventInvitations = c;
  },
  98,
);
