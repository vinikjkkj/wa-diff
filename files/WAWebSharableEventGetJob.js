__d(
  "WAWebSharableEventGetJob",
  [
    "WAWebBackendApi",
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "WAWebDBSharableEvent",
    "WAWebDBSharableEventInvitationList",
    "WAWebDBSharableEventMetadata",
    "WAWebRelayClient",
    "WAWebSharableEventGetJobQuery.graphql",
    "WAWebSharableEventServerInvitationRows",
    "WAWebSharableEventServerRows",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebSharableEventGetJobQuery.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          o("WAWebCanonicalGating").isCanonicalEnabled() &&
            !o("WAWebCanonicalUtils").isCanonicalPresent() &&
            (yield o("WAWebCanonicalUtils").waitForCanonicalPresent());
          var n = yield o("WAWebDBSharableEvent").getSharableEvent(e),
            r = yield d(e, n),
            a = r.reader,
            i = r.result,
            l = yield p(i, a),
            s = yield f(e, i, a),
            u = (t = s == null ? void 0 : s.row) != null ? t : l;
          u != null &&
            o("WAWebBackendApi").frontendFireAndForget(
              "applySharableEventUpdate",
              {
                events: [u],
                inviteeLists:
                  s == null
                    ? []
                    : [
                        {
                          eventId: e,
                          rows: s.invitees.map(function (t) {
                            return babelHelpers.extends({}, t, { eventId: e });
                          }),
                        },
                      ],
              },
            );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = null,
            a = yield o("WAWebRelayClient").fetchQuery(
              s,
              {
                input: {
                  event_id: e,
                  event_last_updated_ts_usec:
                    t == null ? void 0 : t.lastUpdatedTsUsec,
                  invitation_last_updated_ts_usec:
                    t == null ? void 0 : t.lastInvitationUpdatedTsUsec,
                },
              },
              {
                environmentType: "whatsapp_web",
                fetchPolicy: "network-only",
                getInlineDataReader: function (t) {
                  n = t;
                },
              },
            ),
            i = a == null ? void 0 : a.xwa_event_get,
            l = n;
          if (i == null || l == null)
            throw r("err")("[sharable_event] xwa_event_get returned no event");
          return { reader: l, result: i };
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n =
              e.is_event_metadata_unchanged === !0
                ? null
                : e.privacy_aware_event,
            r =
              n == null
                ? null
                : o("WAWebSharableEventServerRows").readSharableEventMetadata(
                    t,
                    n,
                  );
          if (r == null) return null;
          var a = yield o(
              "WAWebDBSharableEventMetadata",
            ).upsertSharableEventMetadataIfNewer([r], { insertMissing: !0 }),
            i = a[0];
          return i == null ? void 0 : i.row;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a =
              t.is_invitation_metadata_unchanged === !0
                ? null
                : t.privacy_aware_invitation,
            i =
              a == null
                ? null
                : o(
                    "WAWebSharableEventServerInvitationRows",
                  ).readSharableEventInvitationSummary(n, a);
          if (a == null || i == null) return null;
          var l = ((r = a.invitation_list) != null ? r : []).flatMap(
              function (e) {
                var t =
                  e == null
                    ? null
                    : o(
                        "WAWebSharableEventServerInvitationRows",
                      ).readSharableEventInvitee(n, e);
                return t == null ? [] : [t];
              },
            ),
            s = yield o(
              "WAWebDBSharableEventInvitationList",
            ).replaceSharableEventInvitationsIfNewer(e, i, l);
          return s == null ? null : { row: s, invitees: l };
        })),
        g.apply(this, arguments)
      );
    }
    l.syncSharableEvent = u;
  },
  98,
);
