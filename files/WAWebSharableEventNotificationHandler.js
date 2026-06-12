__d(
  "WAWebSharableEventNotificationHandler",
  [
    "WALogger",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventNotificationConstants",
    "WAWebSharableEventResolveSender",
    "WAWebSharableEventShowNotificationBridge",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
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
    function p(e) {
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
    function _(e) {
      return e === "EVENT_STARTED"
        ? o("WAWebSharableEventNotificationConstants").SharableEventReminderType
            .EventStarted
        : o("WAWebSharableEventNotificationConstants").SharableEventReminderType
            .EventStartingSoon;
    }
    function f(t, n) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[sharable_event][mex][",
            "] self-initiated-skip eventId=",
            "",
          ])),
        t,
        n,
      );
    }
    var g = 60;
    function h(e) {
      if (e == null) return 0;
      var t = Math.floor(Date.now() / 1e3),
        n = Math.max(0, e - t);
      return Math.floor(n / g);
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.apply,
            n = e.extract,
            a = e.response,
            i = e.scope;
          if (
            !o(
              "WAWebSharableEventGatingUtils",
            ).isSharableEventNotificationsEnabled()
          ) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][mex][",
                  "] notifications-disabled-ack-only",
                ])),
              i,
            );
            return;
          }
          var l = n(a);
          if (l == null) {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][mex][",
                  "] response-extract-failed",
                ])),
              i,
            );
            return;
          }
          try {
            (yield t(l),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][mex][",
                    "] apply eventId=",
                    "",
                  ])),
                i,
                l.eventId,
              ));
          } catch (e) {
            o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][mex][",
                    "] apply failed",
                  ])),
                i,
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("sharable-event-mex-apply-failed");
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return y({
            scope: "invite",
            response: t,
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
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return y({
            scope: "update",
            response: t,
            extract: function (t) {
              var e = t.xwa2_notify_event_on_update;
              return {
                eventId: e.event_id,
                eventName: e.event_name,
                creatorLid: e.creator_lid,
                eventStatus: m(e.event_status),
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
                    if (o("WAWebUserPrefsMeUser").isMeAccount(n)) {
                      f("update", e.eventId);
                      return;
                    }
                    yield o(
                      "WAWebSharableEventShowNotificationBridge",
                    ).showSharableEventNotificationFromBackend(
                      {
                        eventId: e.eventId,
                        title: t,
                        body: { kind: "update", eventName: t },
                        senderWidString: n.toString(),
                      },
                      o("WAWebSharableEventNotificationConstants")
                        .SharableEventNotificationType.Update,
                    );
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
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return y({
            scope: "rsvp",
            response: t,
            extract: function (t) {
              var e = t.xwa2_notify_event_on_rsvp;
              return {
                eventId: e.event_id,
                eventName: e.event_name,
                inviteeLid: e.invitee_lid,
                rsvpStatus: p(e.rsvp_status),
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
                    if (o("WAWebUserPrefsMeUser").isMeAccount(r)) {
                      f("rsvp", e.eventId);
                      return;
                    }
                    yield o(
                      "WAWebSharableEventShowNotificationBridge",
                    ).showSharableEventNotificationFromBackend(
                      {
                        eventId: e.eventId,
                        title: t,
                        body: { kind: "rsvp", eventName: t, rsvp: n },
                        senderWidString: r.toString(),
                      },
                      o("WAWebSharableEventNotificationConstants")
                        .SharableEventNotificationType.Rsvp,
                    );
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
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return y({
            scope: "delete",
            response: t,
            extract: function (t) {
              var e = t.xwa2_notify_event_on_delete;
              return {
                eventId: e.event_id,
                eventName: e.event_name,
                creatorLid: e.creator_lid,
              };
            },
            apply: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.eventName;
                  if (t != null) {
                    var n = o(
                      "WAWebSharableEventResolveSender",
                    ).normalizeSharableEventSenderLid(e.creatorLid);
                    if (o("WAWebUserPrefsMeUser").isMeAccount(n)) {
                      f("delete", e.eventId);
                      return;
                    }
                    yield o(
                      "WAWebSharableEventShowNotificationBridge",
                    ).showSharableEventNotificationFromBackend(
                      {
                        eventId: e.eventId,
                        title: t,
                        body: { kind: "delete", eventName: t },
                        senderWidString: n.toString(),
                      },
                      o("WAWebSharableEventNotificationConstants")
                        .SharableEventNotificationType.Delete,
                    );
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
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return y({
            scope: "reminder",
            response: t,
            extract: function (t) {
              var e = t.xwa2_notify_event_on_reminder;
              return {
                eventId: e.event_id,
                eventName: e.event_name,
                startTsSec: e.start_ts_sec,
                reminderType: _(e.reminder_type),
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
                          minutesUntilStart: h(e.startTsSec),
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
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return y({
            scope: "invite-add",
            response: t,
            extract: function (t) {
              var e,
                n,
                r = t.xwa2_notify_event_on_invite_add;
              return {
                eventId: r.event_id,
                eventName: r.event_name,
                addedInviteeLids:
                  (e =
                    (n = r.added_invitees) == null
                      ? void 0
                      : n
                          .map(function (e) {
                            return e.invitee_lid;
                          })
                          .filter(function (e) {
                            return e != null;
                          })) != null
                    ? e
                    : null,
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
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return y({
            scope: "invite-remove",
            response: t,
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
        N.apply(this, arguments)
      );
    }
    ((l.handleSharableEventResponse = y),
      (l.mexHandleSharableEventInviteNotification = b),
      (l.mexHandleSharableEventUpdateNotification = S),
      (l.mexHandleSharableEventRsvpNotification = L),
      (l.mexHandleSharableEventDeleteNotification = k),
      (l.mexHandleSharableEventReminderNotification = T),
      (l.mexHandleSharableEventInviteAddNotification = x),
      (l.mexHandleSharableEventInviteRemoveNotification = P));
  },
  98,
);
