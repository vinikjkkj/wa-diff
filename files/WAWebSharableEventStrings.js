__d(
  "WAWebSharableEventStrings",
  [
    "fbt",
    "WAWebClock",
    "WAWebFbtIntlList",
    "WAWebL10N",
    "WAWebSharableEventStorageEnums",
    "WAWebSharableEventTiming",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = 1e3;
    function u(e, t) {
      var n = y(e),
        o = r("WAWebL10N").getFullLocale();
      return {
        month: new Intl.DateTimeFormat(o, { month: "short" }).format(n),
        day: new Intl.DateTimeFormat(o, { day: "numeric" }).format(n),
        isToday: C(n, y(t)),
      };
    }
    function c(e, t) {
      var n = o(
          "WAWebSharableEventTiming",
        ).computeSharableEventEffectiveEndTsSec({ startTsSec: e, endTsSec: t }),
        a = y(e),
        i = y(Math.max(e, n)),
        l = {
          hour: "numeric",
          minute: "2-digit",
          hourCycle: o("WAWebClock").Clock.getIs24Hour() ? "h23" : "h12",
        };
      return (
        C(a, i) || ((l.month = "short"), (l.day = "numeric")),
        new Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), l).formatRange(
          a,
          i,
        )
      );
    }
    function d(e, t) {
      var n = y(e),
        a = {
          hour: "numeric",
          minute: "2-digit",
          hourCycle: o("WAWebClock").Clock.getIs24Hour() ? "h23" : "h12",
        };
      return (
        C(n, y(t)) || ((a.month = "short"), (a.day = "numeric")),
        new Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), a).format(n)
      );
    }
    function m(e) {
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
    function p(e) {
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
    function _() {
      return s._(/*BTDS*/ "Creator");
    }
    function f(e) {
      return s._(/*BTDS*/ "Hosted by {hostName}", [s._param("hostName", e)]);
    }
    function g() {
      return s._(/*BTDS*/ "Hosted by you");
    }
    function h(e) {
      var t = new Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), {
          weekday: "long",
          month: "long",
          day: "numeric",
        }).format(y(e.startTsSec)),
        n = [
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
    function y(t) {
      return new Date(t * e);
    }
    function C(e, t) {
      return (
        e.getFullYear() === t.getFullYear() &&
        e.getMonth() === t.getMonth() &&
        e.getDate() === t.getDate()
      );
    }
    ((l.getSharableEventDateColumn = u),
      (l.getSharableEventTimeLine = c),
      (l.getSharableEventStartTime = d),
      (l.getSharableEventPlaceLine = m),
      (l.getSharableEventResponseLabel = p),
      (l.getSharableEventCreatorLabel = _),
      (l.getSharableEventHostedBy = f),
      (l.getSharableEventHostedByViewer = g),
      (l.getSharableEventCardAccessibleLabel = h));
  },
  226,
);
