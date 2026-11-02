__d(
  "WAWebSharableEventNotificationPersistence",
  [
    "WALogger",
    "WAWebSharableEventGetJob",
    "WAWebSharableEventNotificationPersistJob",
    "WAWebSharableEventNotificationRows",
    "WAWebSharableEventServerRows",
    "WAWebSharableEventStorageEnums",
    "WAWebUserPrefsMeUser",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebSharableEventNotificationRows",
          ).toSharableEventMetadataFromNotification(e);
          if (t == null)
            throw r("err")(
              "[sharable_event] invite notification is missing event fields",
            );
          var n = o("WAWebWidToJid").userLidtoLidUserJid(
            o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
          );
          yield o(
            "WAWebSharableEventNotificationPersistJob",
          ).persistInvitedSharableEvent(
            t,
            o(
              "WAWebSharableEventNotificationRows",
            ).toSelfInviteeFromNotification(e, n),
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebSharableEventNotificationRows",
          ).toSharableEventMetadataFromNotification(e);
          if (
            t == null ||
            t.status ===
              o("WAWebSharableEventStorageEnums").SharableEventStoredStatus
                .Unknown ||
            t.creatorLid == null
          )
            throw r("err")(
              "[sharable_event] update notification is missing event fields",
            );
          yield o(
            "WAWebSharableEventNotificationPersistJob",
          ).persistUpdatedSharableEvent(t);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWidToJid").userLidtoLidUserJid(
            o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
          );
          o("WAWebSharableEventServerRows").toStoredLid(e.removed_lid) === t &&
            (yield o(
              "WAWebSharableEventNotificationPersistJob",
            ).deleteSharableEventFromNotification(e.event_id));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o(
            "WAWebSharableEventNotificationPersistJob",
          ).deleteSharableEventFromNotification(e);
        })),
        f.apply(this, arguments)
      );
    }
    function g(t) {
      o("WAWebSharableEventGetJob")
        .syncSharableEvent(t)
        .catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event] refetching the event after an RSVP failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("sharable-event-rsvp-refetch-failed");
        });
    }
    ((l.persistSharableEventInviteNotification = s),
      (l.persistSharableEventUpdateNotification = c),
      (l.persistSharableEventInviteRemoveNotification = m),
      (l.persistSharableEventDeleteNotification = _),
      (l.refreshSharableEventAfterRsvpNotification = g));
  },
  98,
);
