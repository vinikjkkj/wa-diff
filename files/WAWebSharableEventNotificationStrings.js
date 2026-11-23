__d(
  "WAWebSharableEventNotificationStrings",
  [
    "fbt",
    "WAWebSharableEventNotificationConstants",
    "WAWebSharableEventStorageEnums",
  ],
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
          return u();
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "guestJoinedWa" &&
          "guestName" in e
        ) {
          var r = e.guestName;
          return c(r);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "rsvp" &&
          "rsvp" in e &&
          "eventName" in e
        ) {
          var o = e.rsvp,
            a = e.eventName;
          return p(o, a);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "reminder" &&
          "reminderType" in e &&
          "minutesUntilStart" in e
        ) {
          var i = e.reminderType,
            l = e.minutesUntilStart;
          return _(i, l);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function u() {
      return s._(/*BTDS*/ "").toString();
    }
    function c(e) {
      return e == null || e === ""
        ? s._(/*BTDS*/ "").toString()
        : s._(/*BTDS*/ "", [s._param("guestName", e)]).toString();
    }
    function d(e) {
      return s._(/*BTDS*/ "", [s._param("eventName", e)]).toString();
    }
    function m(e) {
      return s._(/*BTDS*/ "", [s._param("eventName", e)]).toString();
    }
    function p(e, t) {
      return e ===
        o("WAWebSharableEventStorageEnums").SharableEventStoredRsvpStatus.Going
        ? s._(/*BTDS*/ "", [s._param("eventName", t)]).toString()
        : e ===
            o("WAWebSharableEventStorageEnums").SharableEventStoredRsvpStatus
              .Maybe
          ? s._(/*BTDS*/ "", [s._param("eventName", t)]).toString()
          : e ===
              o("WAWebSharableEventStorageEnums").SharableEventStoredRsvpStatus
                .NotGoing
            ? s._(/*BTDS*/ "", [s._param("eventName", t)]).toString()
            : e ===
                o("WAWebSharableEventStorageEnums")
                  .SharableEventStoredRsvpStatus.NoResponse
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
        ? s._(/*BTDS*/ "").toString()
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
          .SharableEventReminderLeadTimeBucket.FifteenMinutes
        ? g(15)
        : e ===
            o("WAWebSharableEventNotificationConstants")
              .SharableEventReminderLeadTimeBucket.ThirtyMinutes
          ? g(30)
          : e ===
              o("WAWebSharableEventNotificationConstants")
                .SharableEventReminderLeadTimeBucket.OneHour
            ? s._(/*BTDS*/ "").toString()
            : e ===
                o("WAWebSharableEventNotificationConstants")
                  .SharableEventReminderLeadTimeBucket.OneDay
              ? s._(/*BTDS*/ "").toString()
              : e ===
                  o("WAWebSharableEventNotificationConstants")
                    .SharableEventReminderLeadTimeBucket.ThreeDays
                ? s._(/*BTDS*/ "").toString()
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    function g(e) {
      return s._(/*BTDS*/ "", [s._param("minutes", e)]).toString();
    }
    ((l.formatSharableEventBody = e),
      (l.guestJoinedWaNotificationBody = c),
      (l.updateNotificationBody = d),
      (l.deleteNotificationBody = m),
      (l.rsvpHostNotificationBody = p),
      (l.reminderNotificationBody = _));
  },
  226,
);
