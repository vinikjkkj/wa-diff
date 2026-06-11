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
    var e, s, u, c, d, m, p;
    function _(e) {
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
    function f(e) {
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
    function g(e) {
      return e === "EVENT_STARTED"
        ? o("WAWebSharableEventNotificationConstants").SharableEventReminderType
            .EventStarted
        : o("WAWebSharableEventNotificationConstants").SharableEventReminderType
            .EventStartingSoon;
    }
    var h = 60;
    function y(e) {
      if (e == null) return 0;
      var t = Math.floor(Date.now() / 1e3),
        n = Math.max(0, e - t);
      return Math.floor(n / h);
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.apply,
            a = t.extract,
            i = t.response,
            l = t.scope;
          if (
            !o(
              "WAWebSharableEventGatingUtils",
            ).isSharableEventNotificationsEnabled()
          ) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][mex][",
                  "] notifications-disabled-ack-only",
                ])),
              l,
            );
            return;
          }
          var d = a(i);
          if (d == null) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][mex][",
                  "] response-extract-failed",
                ])),
              l,
            );
            return;
          }
          try {
            (yield n(d),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][mex][",
                    "] apply eventId=",
                    "",
                  ])),
                l,
                d.eventId,
              ));
          } catch (e) {
            o("WALogger")
              .WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][mex][",
                    "] apply failed",
                  ])),
                l,
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("sharable-event-mex-apply-failed");
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return C({
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
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return C({
            scope: "update",
            response: t,
            extract: function (t) {
              var e = t.xwa2_notify_event_on_update;
              return {
                eventId: e.event_id,
                eventName: e.event_name,
                creatorLid: e.creator_lid,
                eventStatus: _(e.event_status),
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
                      o("WALogger").LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[sharable_event][mex][",
                            "] self-initiated-skip eventId=",
                            "",
                          ])),
                        "update",
                        e.eventId,
                      );
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
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return C({
            scope: "rsvp",
            response: t,
            extract: function (t) {
              var e = t.xwa2_notify_event_on_rsvp;
              return {
                eventId: e.event_id,
                eventName: e.event_name,
                inviteeLid: e.invitee_lid,
                rsvpStatus: f(e.rsvp_status),
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
                      o("WALogger").LOG(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[sharable_event][mex][",
                            "] self-initiated-skip eventId=",
                            "",
                          ])),
                        "rsvp",
                        e.eventId,
                      );
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
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return C({
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
                      o("WALogger").LOG(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[sharable_event][mex][",
                            "] self-initiated-skip eventId=",
                            "",
                          ])),
                        "delete",
                        e.eventId,
                      );
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
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return C({
            scope: "reminder",
            response: t,
            extract: function (t) {
              var e = t.xwa2_notify_event_on_reminder;
              return {
                eventId: e.event_id,
                eventName: e.event_name,
                startTsSec: e.start_ts_sec,
                reminderType: g(e.reminder_type),
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
                          minutesUntilStart: y(e.startTsSec),
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
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return C({
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
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return C({
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
        M.apply(this, arguments)
      );
    }
    ((l.handleSharableEventResponse = C),
      (l.mexHandleSharableEventInviteNotification = v),
      (l.mexHandleSharableEventUpdateNotification = R),
      (l.mexHandleSharableEventRsvpNotification = E),
      (l.mexHandleSharableEventDeleteNotification = I),
      (l.mexHandleSharableEventReminderNotification = D),
      (l.mexHandleSharableEventInviteAddNotification = $),
      (l.mexHandleSharableEventInviteRemoveNotification = N));
  },
  98,
);
