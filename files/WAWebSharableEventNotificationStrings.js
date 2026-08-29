__d(
  "WAWebSharableEventNotificationStrings",
  ["fbt", "WAWebSharableEventNotificationConstants"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "update" &&
          "eventName" in e
        ) {
          var t = e.eventName;
          return c(t);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "delete" &&
          "eventName" in e
        ) {
          var n = e.eventName;
          return d(n);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "suspended"
        )
          return u();
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "rsvp" &&
          "rsvp" in e &&
          "eventName" in e
        ) {
          var r = e.rsvp,
            o = e.eventName;
          return m(r, o);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "reminder" &&
          "reminderType" in e &&
          "minutesUntilStart" in e
        ) {
          var a = e.reminderType,
            i = e.minutesUntilStart;
          return p(a, i);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function u() {
      return s
        ._(/*BTDS*/ "Your event has been suspended for violating our policies")
        .toString();
    }
    function c(e) {
      return s
        ._(/*BTDS*/ "updated \ud83d\uddd3 {eventName}", [
          s._param("eventName", e),
        ])
        .toString();
    }
    function d(e) {
      return s
        ._(/*BTDS*/ "canceled \ud83d\uddd3 {eventName}", [
          s._param("eventName", e),
        ])
        .toString();
    }
    function m(e, t) {
      return e ===
        o("WAWebSharableEventNotificationConstants")
          .SharableEventNotificationRsvpStatus.Going
        ? s
            ._(/*BTDS*/ "\ud83d\uddd3 Going to {eventName}", [
              s._param("eventName", t),
            ])
            .toString()
        : e ===
            o("WAWebSharableEventNotificationConstants")
              .SharableEventNotificationRsvpStatus.Maybe
          ? s
              ._(/*BTDS*/ "\ud83d\uddd3 Maybe going to {eventName}", [
                s._param("eventName", t),
              ])
              .toString()
          : e ===
              o("WAWebSharableEventNotificationConstants")
                .SharableEventNotificationRsvpStatus.NotGoing
            ? s
                ._(/*BTDS*/ "\ud83d\uddd3 Not going to {eventName}", [
                  s._param("eventName", t),
                ])
                .toString()
            : e ===
                o("WAWebSharableEventNotificationConstants")
                  .SharableEventNotificationRsvpStatus.NoResponse
              ? null
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function p(e, t) {
      return e ===
        o("WAWebSharableEventNotificationConstants").SharableEventReminderType
          .EventStarted
        ? s._(/*BTDS*/ "\ud83d\uddd3 starts now").toString()
        : e ===
            o("WAWebSharableEventNotificationConstants")
              .SharableEventReminderType.EventStartingSoon
          ? _(
              o(
                "WAWebSharableEventNotificationConstants",
              ).nearestReminderBucket(t),
            )
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function _(e) {
      return e ===
        o("WAWebSharableEventNotificationConstants")
          .SharableEventReminderLeadTimeBucket.OneMinute
        ? f(1)
        : e ===
            o("WAWebSharableEventNotificationConstants")
              .SharableEventReminderLeadTimeBucket.FiveMinutes
          ? f(5)
          : e ===
              o("WAWebSharableEventNotificationConstants")
                .SharableEventReminderLeadTimeBucket.FifteenMinutes
            ? f(15)
            : e ===
                o("WAWebSharableEventNotificationConstants")
                  .SharableEventReminderLeadTimeBucket.ThirtyMinutes
              ? f(30)
              : e ===
                  o("WAWebSharableEventNotificationConstants")
                    .SharableEventReminderLeadTimeBucket.OneHour
                ? s._(/*BTDS*/ "\ud83d\uddd3 starts in 1 hour").toString()
                : e ===
                    o("WAWebSharableEventNotificationConstants")
                      .SharableEventReminderLeadTimeBucket.OneDay
                  ? s._(/*BTDS*/ "\ud83d\uddd3 starts in 1 day").toString()
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })();
    }
    function f(e) {
      return s
        ._(/*BTDS*/ "\ud83d\uddd3 starts in {minutes} min", [
          s._param("minutes", e),
        ])
        .toString();
    }
    ((l.formatSharableEventBody = e),
      (l.suspendedNotificationBody = u),
      (l.updateNotificationBody = c),
      (l.deleteNotificationBody = d),
      (l.rsvpHostNotificationBody = m),
      (l.reminderNotificationBody = p));
  },
  226,
);
