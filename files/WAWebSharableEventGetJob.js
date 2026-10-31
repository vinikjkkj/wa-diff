__d(
  "WAWebSharableEventGetJob",
  [
    "Promise",
    "WAWebBackendApi",
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "WAWebDBSharableEvent",
    "WAWebDBSharableEventMetadata",
    "WAWebRelayClient",
    "WAWebSharableEventGetJobQuery.graphql",
    "WAWebSharableEventServerRows",
    "WAWebSharableEventStoreInvitation",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = e !== void 0 ? e : (e = n("WAWebSharableEventGetJobQuery.graphql"));
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          o("WAWebCanonicalGating").isCanonicalEnabled() &&
            !o("WAWebCanonicalUtils").isCanonicalPresent() &&
            (yield o("WAWebCanonicalUtils").waitForCanonicalPresent());
          var n = yield o("WAWebDBSharableEvent").getSharableEvent(e),
            r = yield m(e, n),
            a = r.reader,
            i = r.result,
            l = yield _(i, a),
            s = yield g(e, i, a),
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
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = null,
            a = yield o("WAWebRelayClient").fetchQuery(
              u,
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
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        f.apply(this, arguments)
      );
    }
    function g(e, t, r) {
      var a =
        t.is_invitation_metadata_unchanged === !0
          ? null
          : t.privacy_aware_invitation;
      return a == null
        ? (s || (s = n("Promise"))).resolve(null)
        : o("WAWebSharableEventStoreInvitation").storeSharableEventInvitation(
            e,
            r,
            a,
          );
    }
    l.syncSharableEvent = c;
  },
  98,
);
