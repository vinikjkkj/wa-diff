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
      _,
      f = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")(
            "WAWebSharableEventNotificationPersistence",
          )
            .__setRef("WAWebSharableEventNotificationHandler")
            .load();
        }),
        "WAWebSharableEventNotificationPersistence",
      );
    function g(e) {
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
    function h(e) {
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
    function y(e) {
      return e === "DELETED_BY_HOST"
        ? o("WAWebSharableEventNotificationConstants").SharableEventDeleteReason
            .DeletedByHost
        : e === "EXPIRED"
          ? o("WAWebSharableEventNotificationConstants")
              .SharableEventDeleteReason.Expired
          : null;
    }
    function C(e) {
      return e === "EVENT_STARTED"
        ? o("WAWebSharableEventNotificationConstants").SharableEventReminderType
            .EventStarted
        : o("WAWebSharableEventNotificationConstants").SharableEventReminderType
            .EventStartingSoon;
    }
    function b(t, n, r) {
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
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        S.apply(this, arguments)
      );
    }
    var R = 60;
    function L(e) {
      if (e == null) return 0;
      var t = Math.floor(Date.now() / 1e3),
        n = Math.max(0, e - t);
      return Math.floor(n / R);
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return E({
            scope: "invite",
            response: t,
            persist: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = yield f(),
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
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return E({
            scope: "update",
            response: t,
            persist: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = yield f(),
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
                eventStatus: g(e.event_status),
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
                    b("update", n, e.eventId) ||
                      (yield v({
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
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return E({
            scope: "rsvp",
            response: t,
            persist: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.xwa2_notify_event_on_rsvp.event_id;
                  try {
                    var n = yield f(),
                      a = n.refreshSharableEventAfterRsvpNotification;
                    a(t);
                  } catch (e) {
                    o("WALogger")
                      .WARN(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
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
                rsvpStatus: h(e.rsvp_status),
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
                    b("rsvp", r, e.eventId) ||
                      (yield v({
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
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return E({
            scope: "delete",
            response: t,
            persist: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.xwa2_notify_event_on_delete.event_id;
                  try {
                    var n = yield f(),
                      a = n.persistSharableEventDeleteNotification;
                    yield a(t);
                  } catch (e) {
                    o("WALogger")
                      .WARN(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
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
                deleteReason: y(e.delete_reason),
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
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                    b("delete", n, e.eventId) ||
                      (yield v({
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
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return E({
            scope: "reminder",
            response: t,
            extract: function (t) {
              var e = t.xwa2_notify_event_on_reminder;
              return {
                eventId: e.event_id,
                eventName: e.event_name,
                startTsSec: e.start_ts_sec,
                reminderType: C(e.reminder_type),
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
                          minutesUntilStart: L(e.startTsSec),
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
        A.apply(this, arguments)
      );
    }
    function F(e, t) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return E({
            scope: "invite-remove",
            response: t,
            persist: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = yield f(),
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
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return E({
            scope: "guest-joined-wa",
            response: t,
            extract: o("WAWebMexSharableEventGuestJoinedWaNotifications")
              .toGuestJoinedWaNotificationData,
            apply: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t;
                  e.isUserVisible === !0 &&
                    (yield v({
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
        W.apply(this, arguments)
      );
    }
    ((l.mexHandleSharableEventInviteNotification = I),
      (l.mexHandleSharableEventUpdateNotification = D),
      (l.mexHandleSharableEventRsvpNotification = $),
      (l.mexHandleSharableEventDeleteNotification = N),
      (l.mexHandleSharableEventReminderNotification = w),
      (l.mexHandleSharableEventInviteRemoveNotification = F),
      (l.mexHandleSharableEventGuestJoinedWaNotification = B));
  },
  98,
);
