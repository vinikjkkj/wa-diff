__d(
  "WAWebSharableEventNotificationHandler",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebMexSharableEventGuestJoinedWaNotifications",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventNotificationConstants",
    "WAWebSharableEventResolveSender",
    "WAWebSharableEventServerEnums",
    "WAWebSharableEventShowNotificationBridge",
    "WAWebSharableEventStorageEnums",
    "WAWebUserPrefsMeUser",
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
      b = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")(
            "WAWebSharableEventNotificationPersistence",
          )
            .__setRef("WAWebSharableEventNotificationHandler")
            .load();
        }),
        "WAWebSharableEventNotificationPersistence",
      );
    function v(e) {
      return e === "DELETED_BY_HOST"
        ? o("WAWebSharableEventNotificationConstants").SharableEventDeleteReason
            .DeletedByHost
        : e === "EXPIRED"
          ? o("WAWebSharableEventNotificationConstants")
              .SharableEventDeleteReason.Expired
          : null;
    }
    function S(e) {
      return e === "EVENT_STARTED"
        ? o("WAWebSharableEventNotificationConstants").SharableEventReminderType
            .EventStarted
        : o("WAWebSharableEventNotificationConstants").SharableEventReminderType
            .EventStartingSoon;
    }
    function R(t, n, r) {
      return o("WAWebUserPrefsMeUser").isMeAccount(n)
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
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        E.apply(this, arguments)
      );
    }
    var k = 60;
    function I(e) {
      if (e == null) return 0;
      var t = Math.floor(Date.now() / 1e3),
        n = Math.max(0, e - t);
      return Math.floor(n / k);
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            a != null &&
              (o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled()
                ? (yield a(i),
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[sharable_event][mex][",
                        "] saved",
                      ])),
                    l,
                  ))
                : o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[sharable_event][mex][",
                        "] not saved, enable_events_v2_on_companion is off",
                      ])),
                    l,
                  )),
            !o(
              "WAWebSharableEventGatingUtils",
            ).isSharableEventNotificationsEnabled())
          ) {
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][mex][",
                  "] notifications-disabled-ack-only",
                ])),
              l,
            );
            return;
          }
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
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return T({
            scope: "invite",
            response: t,
            persist: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = yield b(),
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
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return T({
            scope: "update",
            response: t,
            persist: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = yield b(),
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
                    R("update", n, e.eventId) ||
                      (yield L({
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
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return T({
            scope: "rsvp",
            response: t,
            persist: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.xwa2_notify_event_on_rsvp.event_id;
                  try {
                    var n = yield b(),
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
                    R("rsvp", r, e.eventId) ||
                      (yield L({
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
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return T({
            scope: "delete",
            response: t,
            persist: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.xwa2_notify_event_on_delete.event_id;
                  try {
                    var n = yield b(),
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
                deleteReason: v(e.delete_reason),
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
                    R("delete", n, e.eventId) ||
                      (yield L({
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
        F.apply(this, arguments)
      );
    }
    function O(e, t) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return T({
            scope: "reminder",
            response: t,
            extract: function (t) {
              var e = t.xwa2_notify_event_on_reminder;
              return {
                eventId: e.event_id,
                eventName: e.event_name,
                startTsSec: e.start_ts_sec,
                reminderType: S(e.reminder_type),
              };
            },
            apply: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.eventName,
                    n = e.reminderType;
                  t == null ||
                    n == null ||
                    (yield o(
                      "WAWebSharableEventShowNotificationBridge",
                    ).showSharableEventNotificationFromBackend(
                      {
                        eventId: e.eventId,
                        title: t,
                        body: {
                          kind: "reminder",
                          reminderType: n,
                          minutesUntilStart: I(e.startTsSec),
                        },
                        senderWidString: null,
                      },
                      o("WAWebSharableEventNotificationConstants")
                        .SharableEventNotificationType.Reminder,
                    ));
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          });
        })),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return T({
            scope: "invite-remove",
            response: t,
            persist: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = yield b(),
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
        q.apply(this, arguments)
      );
    }
    function U(e, t) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return T({
            scope: "guest-joined-wa",
            response: t,
            extract: o("WAWebMexSharableEventGuestJoinedWaNotifications")
              .toGuestJoinedWaNotificationData,
            apply: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t;
                  e.isUserVisible === !0 &&
                    (yield L({
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
        V.apply(this, arguments)
      );
    }
    function H(e, t) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            (o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][mex][host-push-name] received",
                ])),
            ),
            !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled())
          ) {
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][mex][host-push-name] not saved, enable_events_v2_on_companion is off",
                ])),
            );
            return;
          }
          var n = yield b(),
            r = n.persistSharableEventCreatorPushName;
          yield r(t);
        })),
        G.apply(this, arguments)
      );
    }
    ((l.mexHandleSharableEventInviteNotification = x),
      (l.mexHandleSharableEventUpdateNotification = P),
      (l.mexHandleSharableEventRsvpNotification = M),
      (l.mexHandleSharableEventDeleteNotification = A),
      (l.mexHandleSharableEventReminderNotification = O),
      (l.mexHandleSharableEventInviteRemoveNotification = W),
      (l.mexHandleSharableEventGuestJoinedWaNotification = U),
      (l.mexHandleSharableEventHostPushNamePublishNotification = H));
  },
  98,
);
