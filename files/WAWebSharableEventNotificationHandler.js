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
    "asyncToGeneratorRuntime",
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
      v = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")(
            "WAWebSharableEventNotificationPersistence",
          )
            .__setRef("WAWebSharableEventNotificationHandler")
            .load();
        }),
        "WAWebSharableEventNotificationPersistence",
      );
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
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.body,
            n = e.eventId,
            r = e.senderWid,
            a = e.title,
            i = e.type;
          yield o(
            "WAWebSharableEventShowNotificationBridge",
          ).showSharableEventNotificationFromBackend(
            { eventId: n, title: a, body: t, senderWidString: r.toString() },
            i,
          );
        })),
        k.apply(this, arguments)
      );
    }
    var I = 60;
    function T(e) {
      if (e == null) return null;
      var t = e - o("WATimeUtils").unixTime();
      return t > 0 ? Math.floor(t / I) : null;
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              ? (yield a(i),
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
            (yield t(f),
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
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return D({
            scope: "invite",
            response: t,
            persist: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = yield v(),
                    n = t.persistSharableEventInviteNotification;
                  yield n(e.xwa2_notify_event_on_invite);
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            extract: function (t) {
              var e,
                n =
                  (e = t.xwa2_notify_event_on_invite) == null
                    ? void 0
                    : e.event_id;
              return n == null ? null : { eventId: n };
            },
            apply: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {},
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          });
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return D({
            scope: "update",
            response: t,
            persist: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = yield v(),
                    n = t.persistSharableEventUpdateNotification;
                  yield n(e.xwa2_notify_event_on_update);
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
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
            apply: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.eventName;
                  if (
                    e.eventStatus ===
                    o("WAWebSharableEventStorageEnums")
                      .SharableEventStoredStatus.Suspended
                  ) {
                    yield o(
                      "WAWebSharableEventShowNotificationBridge",
                    ).showSharableEventNotificationFromBackend(
                      {
                        eventId: e.eventId,
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
                      e.eventStatus !==
                        o("WAWebSharableEventStorageEnums")
                          .SharableEventStoredStatus.Active || t == null
                    )
                  ) {
                    var n = o(
                      "WAWebSharableEventResolveSender",
                    ).normalizeSharableEventSenderLid(e.creatorLid);
                    L("update", n, e.eventId) ||
                      (yield E({
                        type: o("WAWebSharableEventNotificationConstants")
                          .SharableEventNotificationType.Update,
                        eventId: e.eventId,
                        title: t,
                        body: { kind: "update", eventName: t },
                        senderWid: n,
                      }));
                  }
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          });
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return D({
            scope: "rsvp",
            response: t,
            persist: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.xwa2_notify_event_on_rsvp.event_id;
                  try {
                    var n = yield v(),
                      a = n.refreshSharableEventAfterRsvpNotification;
                    a(t);
                  } catch (e) {
                    o("WALogger")
                      .WARN(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "[sharable_event][mex][rsvp] refetch failed eventId=",
                            "",
                          ])),
                        t,
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("sharable-event-mex-rsvp-refetch-failed");
                  }
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            extract: function (t) {
              var e = t.xwa2_notify_event_on_rsvp;
              return {
                eventId: e.event_id,
                eventName: e.event_name,
                inviteeLid: e.invitee_lid,
                rsvpStatus: o(
                  "WAWebSharableEventServerEnums",
                ).toStoredRsvpStatus(e.rsvp_status),
              };
            },
            apply: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.eventName,
                    n = e.rsvpStatus;
                  if (
                    !(
                      t == null ||
                      n == null ||
                      n ===
                        o("WAWebSharableEventStorageEnums")
                          .SharableEventStoredRsvpStatus.NoResponse
                    )
                  ) {
                    var r = o(
                      "WAWebSharableEventResolveSender",
                    ).normalizeSharableEventSenderLid(e.inviteeLid);
                    L("rsvp", r, e.eventId) ||
                      (yield E({
                        type: o("WAWebSharableEventNotificationConstants")
                          .SharableEventNotificationType.Rsvp,
                        eventId: e.eventId,
                        title: t,
                        body: { kind: "rsvp", eventName: t, rsvp: n },
                        senderWid: r,
                      }));
                  }
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          });
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return D({
            scope: "delete",
            response: t,
            persist: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.xwa2_notify_event_on_delete.event_id;
                  try {
                    var n = yield v(),
                      a = n.persistSharableEventDeleteNotification;
                    yield a(t);
                  } catch (e) {
                    o("WALogger")
                      .WARN(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "[sharable_event][mex][delete] persist failed eventId=",
                            "",
                          ])),
                        t,
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("sharable-event-mex-delete-persist-failed");
                  }
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            extract: function (t) {
              var e = t.xwa2_notify_event_on_delete;
              return {
                eventId: e.event_id,
                eventName: e.event_name,
                creatorLid: e.creator_lid,
                deleteReason: S(e.delete_reason),
              };
            },
            apply: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.eventName;
                  if (t != null) {
                    if (
                      e.deleteReason ===
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
                        e.eventId,
                      );
                      return;
                    }
                    var n = o(
                      "WAWebSharableEventResolveSender",
                    ).normalizeSharableEventSenderLid(e.creatorLid);
                    L("delete", n, e.eventId) ||
                      (yield E({
                        type: o("WAWebSharableEventNotificationConstants")
                          .SharableEventNotificationType.Delete,
                        eventId: e.eventId,
                        title: t,
                        body: { kind: "delete", eventName: t },
                        senderWid: n,
                      }));
                  }
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          });
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return D({
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
            apply: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.eventName,
                    n = e.reminderType;
                  if (n == null) {
                    o("WALogger").LOG(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "[sharable_event][mex][",
                          "] unknown-type-skip eventId=",
                          "",
                        ])),
                      "reminder",
                      e.eventId,
                    );
                    return;
                  }
                  if (
                    !(
                      t == null ||
                      e.eventStatus !==
                        o("WAWebSharableEventStorageEnums")
                          .SharableEventStoredStatus.Active
                    )
                  ) {
                    var r = T(e.startTsSec);
                    (n ===
                      o("WAWebSharableEventNotificationConstants")
                        .SharableEventReminderType.EventStartingSoon &&
                      r == null) ||
                      (yield o(
                        "WAWebSharableEventShowNotificationBridge",
                      ).showSharableEventNotificationFromBackend(
                        {
                          eventId: e.eventId,
                          title: t,
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
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          });
        })),
        W.apply(this, arguments)
      );
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return D({
            scope: "invite-remove",
            response: t,
            persist: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = yield v(),
                    n = t.persistSharableEventInviteRemoveNotification;
                  yield n(e.xwa2_notify_event_on_invite_remove);
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            extract: function (t) {
              var e = t.xwa2_notify_event_on_invite_remove;
              return {
                eventId: e.event_id,
                eventName: e.event_name,
                inviteeLid: e.removed_lid,
              };
            },
            apply: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {},
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          });
        })),
        U.apply(this, arguments)
      );
    }
    function V(e, t) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return D({
            scope: "guest-joined-wa",
            response: t,
            extract: o("WAWebMexSharableEventGuestJoinedWaNotifications")
              .toGuestJoinedWaNotificationData,
            apply: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t;
                  e.isUserVisible === !0 &&
                    (yield E({
                      type: o("WAWebSharableEventNotificationConstants")
                        .SharableEventNotificationType.GuestJoinedWa,
                      eventId: e.eventId,
                      title: (t = e.guestName) != null ? t : "",
                      body: { kind: "guestJoinedWa", guestName: e.guestName },
                      senderWid: o(
                        "WAWebSharableEventResolveSender",
                      ).normalizeSharableEventSenderLid(e.inviteeLid),
                    }));
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          });
        })),
        H.apply(this, arguments)
      );
    }
    function G(e, t) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          var n = yield v(),
            r = n.persistSharableEventCreatorPushName;
          yield r(t);
        })),
        z.apply(this, arguments)
      );
    }
    ((l.mexHandleSharableEventInviteNotification = $),
      (l.mexHandleSharableEventUpdateNotification = N),
      (l.mexHandleSharableEventRsvpNotification = w),
      (l.mexHandleSharableEventDeleteNotification = F),
      (l.mexHandleSharableEventReminderNotification = B),
      (l.mexHandleSharableEventInviteRemoveNotification = q),
      (l.mexHandleSharableEventGuestJoinedWaNotification = V),
      (l.mexHandleSharableEventHostPushNamePublishNotification = G));
  },
  98,
);
