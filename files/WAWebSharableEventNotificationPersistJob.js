__d(
  "WAWebSharableEventNotificationPersistJob",
  [
    "WAWebBackendApi",
    "WAWebDBSharableEventChange",
    "WAWebDBSharableEventDeletion",
    "WAWebDBSharableEventInvitee",
    "WAWebDBSharableEventMetadata",
    "WAWebSharableEventChangeFlags",
    "WAWebSharableEventStorageEnums",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
              "WAWebDBSharableEventMetadata",
            ).upsertSharableEventMetadataIfNewer([e], { insertMissing: !0 }),
            r = n[0],
            a =
              r != null && r.previous == null
                ? yield o(
                    "WAWebDBSharableEventChange",
                  ).recordSharableEventChange(
                    e.eventId,
                    o(
                      "WAWebSharableEventChangeFlags",
                    ).toSharableEventChangeFlags([
                      o("WAWebSharableEventStorageEnums")
                        .SharableEventChangeFlag.NewEvent,
                    ]),
                    e.lastUpdatedTsUsec,
                  )
                : null,
            i =
              t != null &&
              (yield o(
                "WAWebDBSharableEventInvitee",
              ).seedSharableEventInviteeIfAbsent(t));
          (r == null && !i) ||
            o("WAWebBackendApi").frontendFireAndForget(
              "applySharableEventUpdate",
              {
                events: r == null ? [] : [r.row],
                invitees: i && t != null ? [t] : [],
                unseenChanges: a == null ? [] : [a],
              },
            );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
              "WAWebDBSharableEventMetadata",
            ).upsertSharableEventMetadataIfNewer([e], { insertMissing: !1 }),
            n = t[0],
            r = n == null ? void 0 : n.previous;
          if (!(n == null || r == null)) {
            var a = yield o(
              "WAWebDBSharableEventChange",
            ).recordSharableEventChange(
              e.eventId,
              o(
                "WAWebSharableEventChangeFlags",
              ).computeSharableEventChangeFlags(r, n.row),
              e.lastUpdatedTsUsec,
            );
            o("WAWebBackendApi").frontendFireAndForget(
              "applySharableEventUpdate",
              { events: [n.row], unseenChanges: a == null ? [] : [a] },
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield o("WAWebDBSharableEventDeletion").deleteSharableEventsLocally([
            e,
          ]),
            o("WAWebBackendApi").frontendFireAndForget(
              "applySharableEventUpdate",
              { deletedEventIds: [e] },
            ));
        })),
        m.apply(this, arguments)
      );
    }
    ((l.persistInvitedSharableEvent = e),
      (l.persistUpdatedSharableEvent = u),
      (l.deleteSharableEventFromNotification = d));
  },
  98,
);
