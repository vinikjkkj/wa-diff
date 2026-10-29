__d(
  "WAWebSharableEventNotificationPersistence",
  [
    "WAWebSharableEventNotificationPersistJob",
    "WAWebSharableEventNotificationRows",
    "WAWebSharableEventServerRows",
    "WAWebSharableEventStorageEnums",
    "WAWebUserPrefsMeUser",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWidToJid").userLidtoLidUserJid(
            o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
          );
          o("WAWebSharableEventServerRows").toStoredLid(e.removed_lid) === t &&
            (yield o(
              "WAWebSharableEventNotificationPersistJob",
            ).deleteSharableEventFromNotification(e.event_id));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o(
            "WAWebSharableEventNotificationPersistJob",
          ).deleteSharableEventFromNotification(e);
        })),
        _.apply(this, arguments)
      );
    }
    ((l.persistSharableEventInviteNotification = e),
      (l.persistSharableEventUpdateNotification = u),
      (l.persistSharableEventInviteRemoveNotification = d),
      (l.persistSharableEventDeleteNotification = p));
  },
  98,
);
