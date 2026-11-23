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
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e) {
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
      await o(
        "WAWebSharableEventNotificationPersistJob",
      ).persistInvitedSharableEvent(
        t,
        o("WAWebSharableEventNotificationRows").toSelfInviteeFromNotification(
          e,
          n,
        ),
      );
    }
    async function c(e) {
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
      await o(
        "WAWebSharableEventNotificationPersistJob",
      ).persistUpdatedSharableEvent(t);
    }
    async function d(e) {
      var t = o("WAWebWidToJid").userLidtoLidUserJid(
        o("WAWebUserUtils").getMeLidUserOrThrow(),
      );
      o("WAWebSharableEventServerRows").toStoredLid(e.removed_lid) === t &&
        (await o(
          "WAWebSharableEventNotificationPersistJob",
        ).deleteSharableEventFromNotification(
          e.event_id,
          o("WAWebSharableEventInviteStatus").SharableEventInviteStatus.Removed,
        ));
    }
    async function m(e) {
      await o(
        "WAWebSharableEventNotificationPersistJob",
      ).deleteSharableEventFromNotification(
        e,
        o("WAWebSharableEventInviteStatus").SharableEventInviteStatus.Deleted,
      );
    }
    var p = new Map();
    function _(e) {
      var t = p.get(e);
      if (t != null) {
        t.rerun = !0;
        return;
      }
      var n = { rerun: !1 };
      (p.set(e, n), f(e, n));
    }
    async function f(t, n) {
      n.rerun = !1;
      try {
        await o("WAWebSharableEventGetJob").syncSharableEvent(t);
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
        n.rerun ? f(t, n) : p.delete(t);
      }
    }
    async function g(e) {
      var t = h(e);
      if (t == null) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[sharable_event][mex][host-push-name] invalid payload, acked",
            ])),
        );
        return;
      }
      (await o(
        "WAWebDBSharableEventCreatorPushName",
      ).saveSharableEventCreatorPushNameIfNewer(t)) &&
        o("WAWebBackendApi").frontendFireAndForget("applySharableEventUpdate", {
          creatorPushNames: [t],
        });
    }
    function h(e) {
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
      (l.persistSharableEventUpdateNotification = c),
      (l.persistSharableEventInviteRemoveNotification = d),
      (l.persistSharableEventDeleteNotification = m),
      (l.refreshSharableEventAfterRsvpNotification = _),
      (l.persistSharableEventCreatorPushName = g));
  },
  98,
);
