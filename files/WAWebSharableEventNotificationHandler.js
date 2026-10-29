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
    "WAWebSharableEventShowNotificationBridge",
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
      _ = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")(
            "WAWebSharableEventNotificationPersistence",
          )
            .__setRef("WAWebSharableEventNotificationHandler")
            .load();
        }),
        "WAWebSharableEventNotificationPersistence",
      );
    function f(e) {
      return e === "ACTIVE"
        ? o("WAWebSharableEventNotificationConstants").SharableEventStatus
            .Active
        : e === "CANCELED"
          ? o("WAWebSharableEventNotificationConstants").SharableEventStatus
              .Canceled
          : e === "SUSPENDED"
            ? o("WAWebSharableEventNotificationConstants").SharableEventStatus
                .Suspended
            : null;
    }
    function g(e) {
      return e === "GOING"
        ? o("WAWebSharableEventNotificationConstants")
            .SharableEventNotificationRsvpStatus.Going
        : e === "MAYBE"
          ? o("WAWebSharableEventNotificationConstants")
              .SharableEventNotificationRsvpStatus.Maybe
          : e === "NOT_GOING"
            ? o("WAWebSharableEventNotificationConstants")
                .SharableEventNotificationRsvpStatus.NotGoing
            : e === "NO_RESPONSE"
              ? o("WAWebSharableEventNotificationConstants")
                  .SharableEventNotificationRsvpStatus.NoResponse
              : null;
    }
    function h(e) {
      return e === "DELETED_BY_HOST"
        ? o("WAWebSharableEventNotificationConstants").SharableEventDeleteReason
            .DeletedByHost
        : e === "EXPIRED"
          ? o("WAWebSharableEventNotificationConstants")
              .SharableEventDeleteReason.Expired
          : null;
    }
    function y(e) {
      return e === "EVENT_STARTED"
        ? o("WAWebSharableEventNotificationConstants").SharableEventReminderType
            .EventStarted
        : o("WAWebSharableEventNotificationConstants").SharableEventReminderType
            .EventStartingSoon;
    }
    function C(t, n, r) {
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
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        v.apply(this, arguments)
      );
    }
    var S = 60;
    function R(e) {
      if (e == null) return 0;
      var t = Math.floor(Date.now() / 1e3),
        n = Math.max(0, e - t);
      return Math.floor(n / S);
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.apply,
            n = e.extract,
            a = e.persist,
            i = e.response,
            l = e.scope;
          if (
            (a != null &&
              o(
                "WAWebSharableEventGatingUtils",
              ).isEventsV2OnCompanionEnabled() &&
              (yield a(i)),
            !o(
              "WAWebSharableEventGatingUtils",
            ).isSharableEventNotificationsEnabled())
          ) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][mex][",
                  "] notifications-disabled-ack-only",
                ])),
              l,
            );
            return;
          }
          var m = n(i);
          if (m == null) {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][mex][",
                  "] response-extract-failed",
                ])),
              l,
            );
            return;
          }
          try {
            (yield t(m),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][mex][",
                    "] apply eventId=",
                    "",
                  ])),
                l,
                m.eventId,
              ));
          } catch (e) {
            o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][mex][",
                    "] apply failed",
                  ])),
                l,
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("sharable-event-mex-apply-failed");
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return L({
            scope: "invite",
            response: t,
            persist: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = yield _(),
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
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return L({
            scope: "update",
            response: t,
            persist: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = yield _(),
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
                eventStatus: f(e.event_status),
              };
            },
            apply: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.eventName;
                  if (
                    e.eventStatus ===
                    o("WAWebSharableEventNotificationConstants")
                      .SharableEventStatus.Suspended
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
                        o("WAWebSharableEventNotificationConstants")
                          .SharableEventStatus.Active || t == null
                    )
                  ) {
                    var n = o(
                      "WAWebSharableEventResolveSender",
                    ).normalizeSharableEventSenderLid(e.creatorLid);
                    C("update", n, e.eventId) ||
                      (yield b({
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
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return L({
            scope: "rsvp",
            response: t,
            extract: function (t) {
              var e = t.xwa2_notify_event_on_rsvp;
              return {
                eventId: e.event_id,
                eventName: e.event_name,
                inviteeLid: e.invitee_lid,
                rsvpStatus: g(e.rsvp_status),
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
                        o("WAWebSharableEventNotificationConstants")
                          .SharableEventNotificationRsvpStatus.NoResponse
                    )
                  ) {
                    var r = o(
                      "WAWebSharableEventResolveSender",
                    ).normalizeSharableEventSenderLid(e.inviteeLid);
                    C("rsvp", r, e.eventId) ||
                      (yield b({
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
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return L({
            scope: "delete",
            response: t,
            persist: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.xwa2_notify_event_on_delete.event_id;
                  try {
                    var n = yield _(),
                      a = n.persistSharableEventDeleteNotification;
                    yield a(t);
                  } catch (e) {
                    o("WALogger")
                      .WARN(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
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
                deleteReason: h(e.delete_reason),
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
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
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
                    C("delete", n, e.eventId) ||
                      (yield b({
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
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return L({
            scope: "reminder",
            response: t,
            extract: function (t) {
              var e = t.xwa2_notify_event_on_reminder;
              return {
                eventId: e.event_id,
                eventName: e.event_name,
                startTsSec: e.start_ts_sec,
                reminderType: y(e.reminder_type),
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
                          minutesUntilStart: R(e.startTsSec),
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
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return L({
            scope: "invite-remove",
            response: t,
            persist: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = yield _(),
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
        F.apply(this, arguments)
      );
    }
    function O(e, t) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return L({
            scope: "guest-joined-wa",
            response: t,
            extract: o("WAWebMexSharableEventGuestJoinedWaNotifications")
              .toGuestJoinedWaNotificationData,
            apply: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t;
                  e.isUserVisible === !0 &&
                    (yield b({
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
        B.apply(this, arguments)
      );
    }
    ((l.mexHandleSharableEventInviteNotification = k),
      (l.mexHandleSharableEventUpdateNotification = T),
      (l.mexHandleSharableEventRsvpNotification = x),
      (l.mexHandleSharableEventDeleteNotification = P),
      (l.mexHandleSharableEventReminderNotification = M),
      (l.mexHandleSharableEventInviteRemoveNotification = A),
      (l.mexHandleSharableEventGuestJoinedWaNotification = O));
  },
  98,
);
