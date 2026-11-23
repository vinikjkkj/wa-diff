__d(
  "WAWebSharableEventNotificationHandler",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WATimeUtils",
    "WAWebLazyLoadedRetriable",
    "WAWebMexSharableEventGuestJoinedWaNotifications",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventNotificationConstants",
    "WAWebSharableEventResolveSender",
    "WAWebSharableEventServerEnums",
    "WAWebSharableEventShowNotificationBridge",
    "WAWebSharableEventStorageEnums",
    "WAWebUserUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v = r("WAWebLazyLoadedRetriable")(async function () {
        return r("JSResourceForInteraction")(
          "WAWebSharableEventNotificationPersistence",
        )
          .__setRef("WAWebSharableEventNotificationHandler")
          .load();
      }, "WAWebSharableEventNotificationPersistence");
    function S(e) {
      return e === "DELETED_BY_HOST"
        ? o("WAWebSharableEventNotificationConstants").SharableEventDeleteReason
            .DeletedByHost
        : e === "EXPIRED"
          ? o("WAWebSharableEventNotificationConstants")
              .SharableEventDeleteReason.Expired
          : null;
    }
    function R(e) {
      return e === "EVENT_STARTED"
        ? o("WAWebSharableEventNotificationConstants").SharableEventReminderType
            .EventStarted
        : e === "EVENT_STARTING_SOON"
          ? o("WAWebSharableEventNotificationConstants")
              .SharableEventReminderType.EventStartingSoon
          : null;
    }
    function L(t, n, r) {
      return o("WAWebUserUtils").isMeAccount(n)
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][mex][",
                "] self-initiated-skip eventId=",
                "",
              ])),
            t,
            r,
          ),
          !0)
        : !1;
    }
    async function E(e) {
      var t = e.body,
        n = e.eventId,
        r = e.senderWid,
        a = e.title,
        i = e.type;
      await o(
        "WAWebSharableEventShowNotificationBridge",
      ).showSharableEventNotificationFromBackend(
        { eventId: n, title: a, body: t, senderWidString: r.toString() },
        i,
      );
    }
    var k = 60;
    function I(e) {
      if (e == null) return null;
      var t = e - o("WATimeUtils").unixTime();
      return t > 0 ? Math.floor(t / k) : null;
    }
    async function T(e) {
      var t = e.apply,
        n = e.extract,
        a = e.persist,
        i = e.response,
        l = e.scope;
      if (
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[sharable_event][mex][",
              "] received",
            ])),
          l,
        ),
        !o(
          "WAWebSharableEventGatingUtils",
        ).isSharableEventNotificationsEnabled())
      ) {
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[sharable_event][mex][",
              "] notifications-disabled-ack-only",
            ])),
          l,
        );
        return;
      }
      a != null &&
        (o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled()
          ? (await a(i),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][mex][",
                  "] saved",
                ])),
              l,
            ))
          : o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][mex][",
                  "] not saved, enable_events_v2_on_companion is off",
                ])),
              l,
            ));
      var f = n(i);
      if (f == null) {
        o("WALogger").WARN(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[sharable_event][mex][",
              "] response-extract-failed",
            ])),
          l,
        );
        return;
      }
      try {
        (await t(f),
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][mex][",
                "] apply eventId=",
                "",
              ])),
            l,
            f.eventId,
          ));
      } catch (e) {
        o("WALogger")
          .WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][mex][",
                "] apply failed",
              ])),
            l,
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("sharable-event-mex-apply-failed");
      }
    }
    async function D(e, t) {
      return T({
        scope: "invite",
        response: t,
        persist: async function (t) {
          var e = await v(),
            n = e.persistSharableEventInviteNotification;
          await n(t.xwa2_notify_event_on_invite);
        },
        extract: function (t) {
          var e,
            n =
              (e = t.xwa2_notify_event_on_invite) == null ? void 0 : e.event_id;
          return n == null ? null : { eventId: n };
        },
        apply: async function (t) {},
      });
    }
    async function x(e, t) {
      return T({
        scope: "update",
        response: t,
        persist: async function (t) {
          var e = await v(),
            n = e.persistSharableEventUpdateNotification;
          await n(t.xwa2_notify_event_on_update);
        },
        extract: function (t) {
          var e = t.xwa2_notify_event_on_update;
          return {
            eventId: e.event_id,
            eventName: e.event_name,
            creatorLid: e.creator_lid,
            eventStatus: o("WAWebSharableEventServerEnums").toStoredStatus(
              e.event_status,
            ),
          };
        },
        apply: async function (t) {
          var e = t.eventName;
          if (
            t.eventStatus ===
            o("WAWebSharableEventStorageEnums").SharableEventStoredStatus
              .Suspended
          ) {
            await o(
              "WAWebSharableEventShowNotificationBridge",
            ).showSharableEventNotificationFromBackend(
              {
                eventId: t.eventId,
                title: "",
                body: { kind: "suspended" },
                senderWidString: null,
              },
              o("WAWebSharableEventNotificationConstants")
                .SharableEventNotificationType.Suspended,
            );
            return;
          }
          if (
            !(
              t.eventStatus !==
                o("WAWebSharableEventStorageEnums").SharableEventStoredStatus
                  .Active || e == null
            )
          ) {
            var n = o(
              "WAWebSharableEventResolveSender",
            ).normalizeSharableEventSenderLid(t.creatorLid);
            L("update", n, t.eventId) ||
              (await E({
                type: o("WAWebSharableEventNotificationConstants")
                  .SharableEventNotificationType.Update,
                eventId: t.eventId,
                title: e,
                body: { kind: "update", eventName: e },
                senderWid: n,
              }));
          }
        },
      });
    }
    async function $(e, t) {
      return T({
        scope: "rsvp",
        response: t,
        persist: async function (t) {
          var e = t.xwa2_notify_event_on_rsvp.event_id;
          try {
            var n = await v(),
              a = n.refreshSharableEventAfterRsvpNotification;
            a(e);
          } catch (t) {
            o("WALogger")
              .WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][mex][rsvp] refetch failed eventId=",
                    "",
                  ])),
                e,
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("sharable-event-mex-rsvp-refetch-failed");
          }
        },
        extract: function (t) {
          var e = t.xwa2_notify_event_on_rsvp;
          return {
            eventId: e.event_id,
            eventName: e.event_name,
            inviteeLid: e.invitee_lid,
            rsvpStatus: o("WAWebSharableEventServerEnums").toStoredRsvpStatus(
              e.rsvp_status,
            ),
          };
        },
        apply: async function (t) {
          var e = t.eventName,
            n = t.rsvpStatus;
          if (
            !(
              e == null ||
              n == null ||
              n ===
                o("WAWebSharableEventStorageEnums")
                  .SharableEventStoredRsvpStatus.NoResponse
            )
          ) {
            var r = o(
              "WAWebSharableEventResolveSender",
            ).normalizeSharableEventSenderLid(t.inviteeLid);
            L("rsvp", r, t.eventId) ||
              (await E({
                type: o("WAWebSharableEventNotificationConstants")
                  .SharableEventNotificationType.Rsvp,
                eventId: t.eventId,
                title: e,
                body: { kind: "rsvp", eventName: e, rsvp: n },
                senderWid: r,
              }));
          }
        },
      });
    }
    async function P(e, t) {
      return T({
        scope: "delete",
        response: t,
        persist: async function (t) {
          var e = t.xwa2_notify_event_on_delete.event_id;
          try {
            var n = await v(),
              a = n.persistSharableEventDeleteNotification;
            await a(e);
          } catch (t) {
            o("WALogger")
              .WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][mex][delete] persist failed eventId=",
                    "",
                  ])),
                e,
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("sharable-event-mex-delete-persist-failed");
          }
        },
        extract: function (t) {
          var e = t.xwa2_notify_event_on_delete;
          return {
            eventId: e.event_id,
            eventName: e.event_name,
            creatorLid: e.creator_lid,
            deleteReason: S(e.delete_reason),
          };
        },
        apply: async function (t) {
          var e = t.eventName;
          if (e != null) {
            if (
              t.deleteReason ===
              o("WAWebSharableEventNotificationConstants")
                .SharableEventDeleteReason.Expired
            ) {
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][mex][",
                    "] expired-skip eventId=",
                    "",
                  ])),
                "delete",
                t.eventId,
              );
              return;
            }
            var n = o(
              "WAWebSharableEventResolveSender",
            ).normalizeSharableEventSenderLid(t.creatorLid);
            L("delete", n, t.eventId) ||
              (await E({
                type: o("WAWebSharableEventNotificationConstants")
                  .SharableEventNotificationType.Delete,
                eventId: t.eventId,
                title: e,
                body: { kind: "delete", eventName: e },
                senderWid: n,
              }));
          }
        },
      });
    }
    async function N(e, t) {
      return T({
        scope: "reminder",
        response: t,
        extract: function (t) {
          var e = t.xwa2_notify_event_on_reminder;
          return {
            eventId: e.event_id,
            eventName: e.event_name,
            eventStatus: o("WAWebSharableEventServerEnums").toStoredStatus(
              e.event_status,
            ),
            startTsSec: e.start_ts_sec,
            reminderType: R(e.reminder_type),
          };
        },
        apply: async function (t) {
          var e = t.eventName,
            n = t.reminderType;
          if (n == null) {
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][mex][",
                  "] unknown-type-skip eventId=",
                  "",
                ])),
              "reminder",
              t.eventId,
            );
            return;
          }
          if (
            !(
              e == null ||
              t.eventStatus !==
                o("WAWebSharableEventStorageEnums").SharableEventStoredStatus
                  .Active
            )
          ) {
            var r = I(t.startTsSec);
            (n ===
              o("WAWebSharableEventNotificationConstants")
                .SharableEventReminderType.EventStartingSoon &&
              r == null) ||
              (await o(
                "WAWebSharableEventShowNotificationBridge",
              ).showSharableEventNotificationFromBackend(
                {
                  eventId: t.eventId,
                  title: e,
                  body: {
                    kind: "reminder",
                    reminderType: n,
                    minutesUntilStart: r != null ? r : 0,
                  },
                  senderWidString: null,
                },
                o("WAWebSharableEventNotificationConstants")
                  .SharableEventNotificationType.Reminder,
              ));
          }
        },
      });
    }
    async function M(e, t) {
      return T({
        scope: "invite-remove",
        response: t,
        persist: async function (t) {
          var e = await v(),
            n = e.persistSharableEventInviteRemoveNotification;
          await n(t.xwa2_notify_event_on_invite_remove);
        },
        extract: function (t) {
          var e = t.xwa2_notify_event_on_invite_remove;
          return {
            eventId: e.event_id,
            eventName: e.event_name,
            inviteeLid: e.removed_lid,
          };
        },
        apply: async function (t) {},
      });
    }
    async function w(e, t) {
      return T({
        scope: "guest-joined-wa",
        response: t,
        extract: o("WAWebMexSharableEventGuestJoinedWaNotifications")
          .toGuestJoinedWaNotificationData,
        apply: async function (t) {
          var e;
          t.isUserVisible === !0 &&
            (await E({
              type: o("WAWebSharableEventNotificationConstants")
                .SharableEventNotificationType.GuestJoinedWa,
              eventId: t.eventId,
              title: (e = t.guestName) != null ? e : "",
              body: { kind: "guestJoinedWa", guestName: t.guestName },
              senderWid: o(
                "WAWebSharableEventResolveSender",
              ).normalizeSharableEventSenderLid(t.inviteeLid),
            }));
        },
      });
    }
    async function A(e, t) {
      if (
        (o("WALogger").LOG(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "[sharable_event][mex][host-push-name] received",
            ])),
        ),
        !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled())
      ) {
        o("WALogger").LOG(
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "[sharable_event][mex][host-push-name] not saved, enable_events_v2_on_companion is off",
            ])),
        );
        return;
      }
      var n = await v(),
        r = n.persistSharableEventCreatorPushName;
      await r(t);
    }
    ((l.mexHandleSharableEventInviteNotification = D),
      (l.mexHandleSharableEventUpdateNotification = x),
      (l.mexHandleSharableEventRsvpNotification = $),
      (l.mexHandleSharableEventDeleteNotification = P),
      (l.mexHandleSharableEventReminderNotification = N),
      (l.mexHandleSharableEventInviteRemoveNotification = M),
      (l.mexHandleSharableEventGuestJoinedWaNotification = w),
      (l.mexHandleSharableEventHostPushNamePublishNotification = A));
  },
  98,
);
