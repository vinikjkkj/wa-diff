__d(
  "WAWebSharableEventNotificationPersistence",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBSharableEventCreatorPushName",
    "WAWebSharableEventGetJob",
    "WAWebSharableEventInviteStatus",
    "WAWebSharableEventNotificationPersistJob",
    "WAWebSharableEventNotificationRows",
    "WAWebSharableEventServerRows",
    "WAWebSharableEventStorageEnums",
    "WAWebUserUtils",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebSharableEventNotificationRows",
          ).toSharableEventMetadataFromNotification(e);
          if (t == null)
            throw r("err")(
              "[sharable_event] invite notification is missing event fields",
            );
          var n = o("WAWebWidToJid").userLidtoLidUserJid(
            o("WAWebUserUtils").getMeLidUserOrThrow(),
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
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWidToJid").userLidtoLidUserJid(
            o("WAWebUserUtils").getMeLidUserOrThrow(),
          );
          o("WAWebSharableEventServerRows").toStoredLid(e.removed_lid) === t &&
            (yield o(
              "WAWebSharableEventNotificationPersistJob",
            ).deleteSharableEventFromNotification(
              e.event_id,
              o("WAWebSharableEventInviteStatus").SharableEventInviteStatus
                .Removed,
            ));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o(
            "WAWebSharableEventNotificationPersistJob",
          ).deleteSharableEventFromNotification(
            e,
            o("WAWebSharableEventInviteStatus").SharableEventInviteStatus
              .Deleted,
          );
        })),
        g.apply(this, arguments)
      );
    }
    var h = new Map();
    function y(e) {
      var t = h.get(e);
      if (t != null) {
        t.rerun = !0;
        return;
      }
      var n = { rerun: !1 };
      (h.set(e, n), C(e, n));
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          n.rerun = !1;
          try {
            yield o("WAWebSharableEventGetJob").syncSharableEvent(t);
          } catch (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][rsvp-refetch] failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("sharable-event-rsvp-refetch-failed");
          } finally {
            n.rerun ? C(t, n) : h.delete(t);
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = R(e);
          if (t == null) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][mex][host-push-name] invalid payload, acked",
                ])),
            );
            return;
          }
          (yield o(
            "WAWebDBSharableEventCreatorPushName",
          ).saveSharableEventCreatorPushNameIfNewer(t)) &&
            o("WAWebBackendApi").frontendFireAndForget(
              "applySharableEventUpdate",
              { creatorPushNames: [t] },
            );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      var t,
        n = e.xwa2_notify_event_on_host_push_name_publish,
        r = o("WAWebSharableEventServerRows").toStoredLid(
          n == null ? void 0 : n.host_lid,
        ),
        a = n == null || (t = n.push_name) == null ? void 0 : t.trim(),
        i = Number(n == null ? void 0 : n.published_ts_usec);
      return r == null || a == null || a === "" || !Number.isFinite(i) || i <= 0
        ? null
        : { creatorLid: r, pushName: a, publishedTsUsec: i };
    }
    ((l.persistSharableEventInviteNotification = u),
      (l.persistSharableEventUpdateNotification = d),
      (l.persistSharableEventInviteRemoveNotification = p),
      (l.persistSharableEventDeleteNotification = f),
      (l.refreshSharableEventAfterRsvpNotification = y),
      (l.persistSharableEventCreatorPushName = v));
  },
  98,
);
