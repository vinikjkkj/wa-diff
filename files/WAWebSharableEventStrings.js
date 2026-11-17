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
      var n = b(e),
        o = b(t),
        a = r("WAWebL10N").getFullLocale();
      return {
        month: new Intl.DateTimeFormat(a, { month: "short" }).format(n),
        day: new Intl.DateTimeFormat(a, { day: "numeric" }).format(n),
        year:
          n.getFullYear() === o.getFullYear()
            ? null
            : new Intl.DateTimeFormat(a, { year: "numeric" }).format(n),
        isToday: v(n, o),
      };
    }
    function c(e, t) {
      var n = o(
          "WAWebSharableEventTiming",
        ).computeSharableEventEffectiveEndTsSec({ startTsSec: e, endTsSec: t }),
        a = b(e),
        i = b(Math.max(e, n)),
        l = {
          hour: "numeric",
          minute: "2-digit",
          hourCycle: o("WAWebClock").Clock.getIs24Hour() ? "h23" : "h12",
        };
      return (
        v(a, i) || ((l.month = "short"), (l.day = "numeric")),
        new Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), l).formatRange(
          a,
          i,
        )
      );
    }
    function d(e, t) {
      var n = b(e),
        a = {
          hour: "numeric",
          minute: "2-digit",
          hourCycle: o("WAWebClock").Clock.getIs24Hour() ? "h23" : "h12",
        };
      return (
        v(n, b(t)) || ((a.month = "short"), (a.day = "numeric")),
        new Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), a).format(n)
      );
    }
    function m(e, t, n) {
      var a = b(e);
      return t == null || t <= e || !v(a, b(t)) || !v(a, b(n))
        ? d(e, n)
        : new Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), {
            hour: "numeric",
            minute: "2-digit",
            hourCycle: o("WAWebClock").Clock.getIs24Hour() ? "h23" : "h12",
          }).formatRange(a, b(t));
    }
    function p(e) {
      return new Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hourCycle: o("WAWebClock").Clock.getIs24Hour() ? "h23" : "h12",
      }).format(b(e));
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
      return s._(/*BTDS*/ "Creator");
    }
    function y(e) {
      return s._(/*BTDS*/ "Hosted by {hostName}", [s._param("hostName", e)]);
    }
    function C(e, t) {
      var n = b(e.startTsSec),
        o = { weekday: "long", month: "long", day: "numeric" };
      n.getFullYear() !== b(t).getFullYear() && (o.year = "numeric");
      var a = new Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), o).format(
          n,
        ),
        i = [
          e.name,
          e.hostedBy,
          a,
          c(e.startTsSec, e.endTsSec),
          e.place,
          e.label,
        ].filter(Boolean);
      return r("WAWebFbtIntlList")(
        i,
        r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
        r("WAWebFbtIntlList").DELIMITERS.COMMA,
      );
    }
    function b(t) {
      return new Date(t * e);
    }
    function v(e, t) {
      return (
        e.getFullYear() === t.getFullYear() &&
        e.getMonth() === t.getMonth() &&
        e.getDate() === t.getDate()
      );
    }
    ((l.getSharableEventDateColumn = u),
      (l.getSharableEventTimeLine = c),
      (l.getSharableEventStartTime = d),
      (l.getSharableEventCardTime = m),
      (l.getSharableEventStartDateTime = p),
      (l.getSharableEventReminderLabel = _),
      (l.getSharableEventPlaceLine = f),
      (l.getSharableEventResponseLabel = g),
      (l.getSharableEventCreatorLabel = h),
      (l.getSharableEventHostedBy = y),
      (l.getSharableEventCardAccessibleLabel = C));
  },
  226,
);
