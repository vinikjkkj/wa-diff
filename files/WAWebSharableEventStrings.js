__d(
  "WAWebSharableEventStrings",
  [
    "fbt",
    "WAWebClock",
    "WAWebFbtIntlList",
    "WAWebL10N",
    "WAWebSharableEventDraft",
    "WAWebSharableEventStorageEnums",
    "WAWebSharableEventTiming",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = 1e3;
    function u(e, t) {
      var n = v(e),
        o = r("WAWebL10N").getFullLocale();
      return {
        weekday: new Intl.DateTimeFormat(o, { weekday: "short" }).format(n),
        month: new Intl.DateTimeFormat(o, { month: "short" }).format(n),
        day: new Intl.DateTimeFormat(o, { day: "numeric" }).format(n),
        isToday: S(n, v(t)),
      };
    }
    function c(e, t) {
      var n = o(
          "WAWebSharableEventTiming",
        ).computeSharableEventEffectiveEndTsSec({ startTsSec: e, endTsSec: t }),
        a = v(e),
        i = v(Math.max(e, n)),
        l = {
          hour: "numeric",
          minute: "2-digit",
          hourCycle: o("WAWebClock").Clock.getIs24Hour() ? "h23" : "h12",
        };
      return (
        S(a, i) || ((l.month = "short"), (l.day = "numeric")),
        new Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), l).formatRange(
          a,
          i,
        )
      );
    }
    function d(e, t) {
      var n = v(e),
        a = {
          hour: "numeric",
          minute: "2-digit",
          hourCycle: o("WAWebClock").Clock.getIs24Hour() ? "h23" : "h12",
        };
      return (
        S(n, v(t)) || ((a.month = "short"), (a.day = "numeric")),
        new Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), a).format(n)
      );
    }
    function m(e) {
      return new Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), {
        hour: "numeric",
        minute: "2-digit",
        hourCycle: o("WAWebClock").Clock.getIs24Hour() ? "h23" : "h12",
      }).format(v(e));
    }
    function p(e) {
      return new Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hourCycle: o("WAWebClock").Clock.getIs24Hour() ? "h23" : "h12",
      }).format(v(e));
    }
    function _(e) {
      return e ===
        o("WAWebSharableEventDraft").SharableEventReminder.FifteenMinutes
        ? s._(/*BTDS*/ "15 minutes before")
        : e === o("WAWebSharableEventDraft").SharableEventReminder.ThirtyMinutes
          ? s._(/*BTDS*/ "30 minutes before")
          : e === o("WAWebSharableEventDraft").SharableEventReminder.OneHour
            ? s._(/*BTDS*/ "1 hour before")
            : e === o("WAWebSharableEventDraft").SharableEventReminder.OneDay
              ? s._(/*BTDS*/ "1 day before")
              : e === o("WAWebSharableEventDraft").SharableEventReminder.Never
                ? s._(/*BTDS*/ "Never")
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    function f(e) {
      var t,
        n = (t = e.locationName) == null ? void 0 : t.trim();
      return n != null && n !== ""
        ? n
        : e.callLinkToken == null || e.callLinkToken === ""
          ? null
          : e.callLinkMediaType ===
              o("WAWebSharableEventStorageEnums").SharableEventCallLinkMediaType
                .Voice
            ? s._(/*BTDS*/ "WhatsApp voice call")
            : s._(/*BTDS*/ "WhatsApp video call");
    }
    function g(e) {
      return e ===
        o("WAWebSharableEventStorageEnums").SharableEventStoredRsvpStatus.Going
        ? s._(/*BTDS*/ "Going")
        : e ===
            o("WAWebSharableEventStorageEnums").SharableEventStoredRsvpStatus
              .Maybe
          ? s._(/*BTDS*/ "Maybe")
          : e ===
              o("WAWebSharableEventStorageEnums").SharableEventStoredRsvpStatus
                .NotGoing
            ? s._(/*BTDS*/ "Not going")
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
    function h() {
      return s._(/*BTDS*/ "Hosting");
    }
    function y(e) {
      return s._(/*BTDS*/ "Hosted by {hostName}", [s._param("hostName", e)]);
    }
    function C() {
      return s._(/*BTDS*/ "Hosted by you");
    }
    function b(e) {
      var t = new Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), {
          weekday: "long",
          month: "long",
          day: "numeric",
        }).format(v(e.startTsSec)),
        n = [
          e.kicker,
          e.name,
          e.hostedBy,
          t,
          c(e.startTsSec, e.endTsSec),
          e.place,
          e.label,
        ].filter(Boolean);
      return r("WAWebFbtIntlList")(
        n,
        r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
        r("WAWebFbtIntlList").DELIMITERS.COMMA,
      );
    }
    function v(t) {
      return new Date(t * e);
    }
    function S(e, t) {
      return (
        e.getFullYear() === t.getFullYear() &&
        e.getMonth() === t.getMonth() &&
        e.getDate() === t.getDate()
      );
    }
    ((l.getSharableEventDateColumn = u),
      (l.getSharableEventTimeLine = c),
      (l.getSharableEventStartTime = d),
      (l.getSharableEventTimeOfDay = m),
      (l.getSharableEventStartDateTime = p),
      (l.getSharableEventReminderLabel = _),
      (l.getSharableEventPlaceLine = f),
      (l.getSharableEventResponseLabel = g),
      (l.getSharableEventHostingLabel = h),
      (l.getSharableEventHostedBy = y),
      (l.getSharableEventHostedByViewer = C),
      (l.getSharableEventCardAccessibleLabel = b));
  },
  226,
);
