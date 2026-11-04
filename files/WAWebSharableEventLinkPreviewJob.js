__d(
  "WAWebSharableEventLinkPreviewJob",
  [
    "WAWebSharableEventLinkPreviewJobQuery.graphql",
    "WAWebSharableEventServerClient",
    "WAWebSharableEventServerInvitationRows",
    "WAWebSharableEventServerRows",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        countGoing: 0,
        countMaybe: 0,
        countNotGoing: 0,
        countNoResponse: 0,
        totalInvitedCount: 0,
        lastInvitationUpdatedTsUsec: 0,
      },
      u =
        e !== void 0
          ? e
          : (e = n("WAWebSharableEventLinkPreviewJobQuery.graphql"));
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o(
              "WAWebSharableEventServerClient",
            ).querySharableEventServer(u, { input: { link_token: e } }),
            a = n.reader,
            i = n.response,
            l = i == null ? void 0 : i.xwa_event_get_link_preview,
            c = l == null ? void 0 : l.privacy_aware_event,
            d =
              c == null
                ? null
                : o("WAWebSharableEventServerRows").readSharableEventMetadata(
                    a,
                    c,
                  );
          if (l == null || d == null)
            throw r("err")(
              "[sharable_event] xwa_event_get_link_preview returned no event",
            );
          var m = l.privacy_aware_invitation,
            p =
              m == null
                ? null
                : o(
                    "WAWebSharableEventServerInvitationRows",
                  ).readSharableEventInvitationSummary(a, m),
            _ = (
              (t = m == null ? void 0 : m.invitation_list) != null ? t : []
            ).flatMap(function (e) {
              var t =
                e == null
                  ? null
                  : o(
                      "WAWebSharableEventServerInvitationRows",
                    ).readSharableEventInvitee(a, e);
              return t == null
                ? []
                : [babelHelpers.extends({}, t, { eventId: d.eventId })];
            });
          return {
            event: babelHelpers.extends({}, s, d, p),
            invitees: _,
            region: c == null ? void 0 : c.region,
            creatorPushName: l.creator_pushname,
            hasViewerInvitation: l.privacy_aware_my_invitation != null,
          };
        })),
        d.apply(this, arguments)
      );
    }
    l.fetchSharableEventLinkPreview = c;
  },
  98,
);
