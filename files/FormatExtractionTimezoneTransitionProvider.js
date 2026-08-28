__d(
  "FormatExtractionTimezoneTransitionProvider",
  ["TimezoneUtil", "memoize", "requireWeak"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { extractionStatuses: {} },
      s = r("memoize")(function () {
        var e = new Intl.DateTimeFormat("en-US", {
          timeZone: "UTC",
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: !1,
        }).format(new Date("2004-01-01T00:00:00.000Z"));
        return e.includes("24");
      });
    function u(e) {
      var t;
      r("requireWeak")("TimezoneNamesData", function (e) {
        return (t = e);
      });
      var n;
      try {
        var o =
          Object.prototype.hasOwnProperty.call(window, "Intl") &&
          typeof Intl == "object";
        n = o && Object.prototype.hasOwnProperty.call(Intl, "DateTimeFormat");
      } catch (e) {
        return null;
      }
      if (!n || !t) return null;
      var a = t.zoneNames[e];
      if (!a) return null;
      try {
        var i = {
          timeZone: a,
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        };
        return (
          s()
            ? (i = babelHelpers.extends({}, i, { hourCycle: "h23" }))
            : (i = babelHelpers.extends({}, i, { hour12: !1 })),
          new Intl.DateTimeFormat("en-US", i)
        );
      } catch (e) {
        return null;
      }
    }
    function c(e, t) {
      var n = e.format(new Date(t * 1e3));
      return d(n) / 1e3 - t;
    }
    function d(e) {
      var t = e.match(/\d+/g);
      if (t) {
        var n = t[0],
          r = t[1],
          o = t[2],
          a = t[3],
          i = t[4],
          l = t[5];
        return Date.UTC(+o, +n - 1, +r, +a, +i, +l);
      }
      return NaN;
    }
    function m(t) {
      if (e.extractionStatuses[t] === "error") return null;
      var n = u(t);
      if (!n) return ((e.extractionStatuses[t] = "error"), null);
      try {
        var r = o("TimezoneUtil").extractTimezoneTransitions(c.bind(null, n));
        return ((e.extractionStatuses[t] = "success"), r);
      } catch (n) {
        return ((e.extractionStatuses[t] = "error"), null);
      }
    }
    ((l._intlFormattedDateToUTC = d), (l.extractOrNull = m));
  },
  98,
);
