__d(
  "WAWebSharableEventGetJob",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebDBSharableEvent",
    "WAWebDBSharableEventDeletion",
    "WAWebDBSharableEventMetadata",
    "WAWebSharableEventCredentials",
    "WAWebSharableEventGetJobQuery.graphql",
    "WAWebSharableEventInviteMessageRefreshJob",
    "WAWebSharableEventInviteStatus",
    "WAWebSharableEventServerClient",
    "WAWebSharableEventServerError",
    "WAWebSharableEventServerRows",
    "WAWebSharableEventStoreInvitation",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = e !== void 0 ? e : (e = n("WAWebSharableEventGetJobQuery.graphql"));
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          yield o(
            "WAWebSharableEventCredentials",
          ).waitForSharableEventCredentials("get");
          var r = yield o("WAWebDBSharableEvent").getSharableEvent(e),
            a = o("WATimeUtils").monotonicTime(),
            i = yield y(e, r).catch(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    throw (
                      o(
                        "WAWebSharableEventServerError",
                      ).getSharableEventErrorKind(t) ===
                        o("WAWebSharableEventServerError")
                          .SharableEventErrorKind.Unavailable && (yield g(e)),
                      t
                    );
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
            l = i.reader,
            c = i.result;
          if (
            o("WAWebDBSharableEventDeletion").wasSharableEventDeletedSince(e, a)
          ) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][get] eventId=",
                  " deleted during the request, not stored",
                ])),
              e,
            );
            return;
          }
          var d = yield b(c, l),
            m = yield S(e, c, l),
            p = (t = m == null ? void 0 : m.row) != null ? t : d;
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][get] eventId=",
                " metadataChanged=",
                " invitees=",
                "",
              ])),
            e,
            String(d != null),
            m == null ? "unchanged" : String(m.invitees.length),
          ),
            p != null &&
              o("WAWebBackendApi").frontendFireAndForget(
                "applySharableEventUpdate",
                m == null
                  ? { events: [p], inviteeLists: [] }
                  : o(
                      "WAWebSharableEventStoreInvitation",
                    ).toSharableEventInvitationUpdate(e, m),
              ));
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][get] eventId=",
                " unavailable, deleting it locally",
              ])),
            e,
          );
          try {
            yield o("WAWebDBSharableEventDeletion").deleteSharableEventsLocally(
              [e],
            );
          } catch (t) {
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][get] eventId=",
                    " deleting the unavailable event locally failed",
                  ])),
                e,
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("sharable-event-delete-unavailable-failed");
            return;
          }
          (o("WAWebBackendApi").frontendFireAndForget(
            "applySharableEventUpdate",
            { deletedEventIds: [e] },
          ),
            yield o(
              "WAWebSharableEventInviteMessageRefreshJob",
            ).markSharableEventInviteMessagesEnded(
              [e],
              o("WAWebSharableEventInviteStatus").SharableEventInviteStatus
                .Deleted,
            ));
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
              "WAWebSharableEventServerClient",
            ).querySharableEventServer(p, {
              input: {
                event_id: e,
                event_last_updated_ts_usec:
                  t == null ? void 0 : t.lastUpdatedTsUsec,
                invitation_last_updated_ts_usec:
                  t == null ? void 0 : t.lastInvitationUpdatedTsUsec,
              },
            }),
            a = n.reader,
            i = n.response,
            l = i == null ? void 0 : i.xwa_event_get;
          if (l == null)
            throw r("err")("[sharable_event] xwa_event_get returned no event");
          return { reader: a, result: l };
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        v.apply(this, arguments)
      );
    }
    function S(e, t, r) {
      var a =
        t.is_invitation_metadata_unchanged === !0
          ? null
          : t.privacy_aware_invitation;
      return a == null
        ? (m || (m = n("Promise"))).resolve(null)
        : o("WAWebSharableEventStoreInvitation").storeSharableEventInvitation(
            e,
            r,
            a,
          );
    }
    l.syncSharableEvent = _;
  },
  98,
);
