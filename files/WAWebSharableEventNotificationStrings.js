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
          return d(t);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "delete" &&
          "eventName" in e
        ) {
          var n = e.eventName;
          return m(n);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "suspended"
        )
          return c();
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "rsvp" &&
          "rsvp" in e &&
          "eventName" in e
        ) {
          var r = e.rsvp,
            o = e.eventName;
          return p(r, o);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "reminder" &&
          "reminderType" in e &&
          "minutesUntilStart" in e
        ) {
          var a = e.reminderType,
            i = e.minutesUntilStart;
          return _(a, i);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function u() {
      return s._(/*BTDS*/ "Event suspended").toString();
    }
    function c() {
      return s
        ._(/*BTDS*/ "Your event has been suspended for violating our policies")
        .toString();
    }
    function d(e) {
      return s
        ._(/*BTDS*/ "updated \ud83d\uddd3 {eventName}", [
          s._param("eventName", e),
        ])
        .toString();
    }
    function m(e) {
      return s
        ._(/*BTDS*/ "cancelled \ud83d\uddd3 {eventName}", [
          s._param("eventName", e),
        ])
        .toString();
    }
    function p(e, t) {
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
    function _(e, t) {
      return e ===
        o("WAWebSharableEventNotificationConstants").SharableEventReminderType
          .EventStarted
        ? s._(/*BTDS*/ "\ud83d\uddd3 starts now").toString()
        : e ===
            o("WAWebSharableEventNotificationConstants")
              .SharableEventReminderType.EventStartingSoon
          ? f(
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
    function f(e) {
      return e ===
        o("WAWebSharableEventNotificationConstants")
          .SharableEventReminderLeadTimeBucket.OneMinute
        ? g(1)
        : e ===
            o("WAWebSharableEventNotificationConstants")
              .SharableEventReminderLeadTimeBucket.FiveMinutes
          ? g(5)
          : e ===
              o("WAWebSharableEventNotificationConstants")
                .SharableEventReminderLeadTimeBucket.FifteenMinutes
            ? g(15)
            : e ===
                o("WAWebSharableEventNotificationConstants")
                  .SharableEventReminderLeadTimeBucket.ThirtyMinutes
              ? g(30)
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
    function g(e) {
      return s
        ._(/*BTDS*/ "\ud83d\uddd3 starts in {minutes} min", [
          s._param("minutes", e),
        ])
        .toString();
    }
    ((l.formatSharableEventBody = e),
      (l.suspendedNotificationTitle = u),
      (l.suspendedNotificationBody = c),
      (l.updateNotificationBody = d),
      (l.deleteNotificationBody = m),
      (l.rsvpHostNotificationBody = p),
      (l.reminderNotificationBody = _));
  },
  226,
);
