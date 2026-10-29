__d(
  "WAWebGuestEventsCalendarUtils",
  ["WAWebDataLink", "WAWebGuestEventsMapsUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return {
        title: e.title,
        description: e.description,
        startTsSec: e.startTsSec,
        endTsSec: e.endTsSec,
        eventLinkToken: e.eventLinkToken,
        location: o("WAWebGuestEventsMapsUtils").getGuestEventCalendarLocation(
          {
            eventType: e.eventType,
            address: e.locationAddress,
            lat: e.locationLat,
            long: e.locationLong,
            name: e.locationName,
            region: e.locationRegion,
          },
          t,
        ),
      };
    }
    var s = 3600 * 1e3,
      u = "\r\n",
      c = 75,
      d = Math.pow(2, 32);
    function m(e) {
      var t = new URL("https://calendar.google.com/calendar/render");
      return (
        t.searchParams.set("action", "TEMPLATE"),
        t.searchParams.set("text", e.title),
        t.searchParams.set("dates", f(e)),
        e.description != null &&
          e.description !== "" &&
          t.searchParams.set("details", e.description),
        e.location != null &&
          e.location !== "" &&
          t.searchParams.set("location", e.location),
        t.toString()
      );
    }
    function p(e) {
      return { type: "ics_file", content: g(e), filename: "whatsapp-event" };
    }
    function _(e) {
      var t = window.URL.createObjectURL(
          new Blob([e.content], { type: "text/calendar;charset=utf-8" }),
        ),
        n = o("WAWebDataLink").createDataLink(t);
      ((n.style.display = "none"), (n.download = e.filename + ".ics"));
      var r = document.body;
      (r && r.appendChild(n),
        n.click(),
        r && r.removeChild(n),
        window.setTimeout(function () {
          return window.URL.revokeObjectURL(t);
        }, 200));
    }
    function f(e) {
      return C(h(e)) + "/" + C(y(e));
    }
    function g(e) {
      var t = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//WhatsApp//Guest Events//EN",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        "BEGIN:VEVENT",
        "UID:" + b(e),
        "DTSTAMP:" + C(new Date()),
        "DTSTART:" + C(h(e)),
        "DTEND:" + C(y(e)),
        "SUMMARY:" + L(e.title),
      ];
      return (
        e.description != null &&
          e.description !== "" &&
          t.push("DESCRIPTION:" + L(e.description)),
        e.location != null &&
          e.location !== "" &&
          t.push("LOCATION:" + L(e.location)),
        t.push("END:VEVENT", "END:VCALENDAR"),
        "" + t.map(v).join(u) + u
      );
    }
    function h(e) {
      return new Date(e.startTsSec * 1e3);
    }
    function y(e) {
      return e.endTsSec != null
        ? new Date(e.endTsSec * 1e3)
        : new Date(e.startTsSec * 1e3 + s);
    }
    function C(e) {
      return e
        .toISOString()
        .replace(/[-:]/g, "")
        .replace(/\.\d{3}Z$/, "Z");
    }
    function b(e) {
      var t,
        n,
        r,
        o,
        a =
          (t = e.eventLinkToken) != null
            ? t
            : [
                e.title,
                (n = e.description) != null ? n : "",
                String(e.startTsSec),
                String((r = e.endTsSec) != null ? r : ""),
                (o = e.location) != null ? o : "",
              ].join("|");
      return "wa-guest-event-" + R(a) + "@whatsapp.com";
    }
    function v(e) {
      var t = [],
        n = "",
        r = 0;
      return (
        Array.from(e).forEach(function (e) {
          var o = S(e);
          (n !== "" && r + o > c && (t.push(n), (n = " "), (r = 1)),
            (n += e),
            (r += o));
        }),
        t.push(n),
        t.join(u)
      );
    }
    function S(e) {
      var t = e.codePointAt(0);
      return t == null ? 0 : t <= 127 ? 1 : t <= 2047 ? 2 : t <= 65535 ? 3 : 4;
    }
    function R(e) {
      for (var t = 0, n = 0; n < e.length; n++)
        ((t = (Math.imul(t, 31) + e.charCodeAt(n)) % d), t < 0 && (t += d));
      return t.toString(36);
    }
    function L(e) {
      return e
        .replace(/\\/g, "\\\\")
        .replace(/\r\n|\r|\n/g, "\\n")
        .replace(/,/g, "\\,")
        .replace(/;/g, "\\;");
    }
    ((l.getGuestEventCalendarDetails = e),
      (l.getGoogleCalendarUrl = m),
      (l.getGuestEventCalendarICSFile = p),
      (l.downloadGuestEventCalendarICSFile = _));
  },
  98,
);
