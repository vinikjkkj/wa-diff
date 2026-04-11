__d(
  "formatDate",
  [
    "CLDRDateFormatConfig",
    "DateFormatConfig",
    "FBLogger",
    "IsInternSite",
    "getCLDRLocalizedFormat",
    "getErrorSafe",
    "intlGetDateNumerics",
    "intlRenderCLDRDate",
    "intlRenderJSDateSymbol",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Object.freeze({
      today: null,
      yesterday: null,
      thisWeek: null,
      thisMonth: null,
      thisYear: null,
      withinDay: null,
      withinWeek: null,
      withinMonth: null,
      withinYear: null,
      older: null,
      future: null,
      allOtherTimes: null,
    });
    function s(e, t, n, o) {
      var a = e,
        i = n || {
          skipSuffixLocalization: !1,
          skipPatternLocalization: !1,
          utc: !1,
          formatInternal: !1,
          throwCLDRError: !1,
        };
      if (t == null || t === "" || a == null || !(a || a === 0)) return "";
      if (
        (typeof a == "string" &&
          (isNaN(Number(a)) &&
            r("FBLogger")("i18n-formatDate")
              .event("date_string_must_be_timestamp")
              .blameToPreviousFile()
              .mustfix(
                'The date passed to formatDate is a string, but not a timestamp, formatDate expects strings to be a string representation of a Unix timestamp but was passed "%s"',
                a,
              ),
          (a = parseInt(a, 10))),
        typeof a == "number" && (a = new Date(a * 1e3)),
        !(a instanceof Date))
      )
        throw r("FBLogger")("internationalization").mustfixThrow(
          "The date passed to formatDate must be either a unix timestamp or JavaScript date object.",
        );
      if (isNaN(a.getTime()))
        throw r("FBLogger")("internationalization").mustfixThrow(
          "Invalid date passed to formatDate",
        );
      a.getTime() >= 1e15 &&
        r("FBLogger")("i18n-formatDate")
          .event("date_too_far_in_future")
          .blameToPreviousFile()
          .info(
            "The date passed to formatDate is too far in the future. Did you mix up milliseconds/seconds?",
          );
      var l = d(a, t),
        s = r("intlGetDateNumerics")(a, i);
      return u(l, s, i, o);
    }
    ((s.DEFAULT_FORMAT = "M j, Y g:i A"),
      (s.periodNames = Object.freeze(Object.keys(e))));
    function u(e, t, n, o) {
      var a = e,
        i = !!n.skipPatternLocalization,
        l = n.formatInternal === !0;
      if (!i && (l || !r("IsInternSite").is_intern_site)) {
        if (e in r("CLDRDateFormatConfig").supportedPHPFormatsKeys)
          try {
            var s = r("CLDRDateFormatConfig").supportedPHPFormatsKeys[e],
              u = r("getCLDRLocalizedFormat")(s);
            return r("intlRenderCLDRDate")(u, n, t);
          } catch (e) {
            var d = r("getErrorSafe")(e);
            if (
              (r("FBLogger")("i18n-formatDate")
                .event("CLDR_date_format_render_error")
                .blameToPreviousFile()
                .catching(d)
                .mustfix("CLDR date format render error"),
              n.throwCLDRError === !0)
            )
              throw d;
          }
        else if (r("DateFormatConfig").formats[e])
          a = r("DateFormatConfig").formats[e];
        else if (!r("IsInternSite").is_intern_site) {
          if (e.length !== 1)
            throw r("FBLogger")("internationalization").mustfixThrow(
              'Trying to localize an unsupported date format: "%s"',
              e,
            );
        }
      }
      return c(a, n, t, o);
    }
    function c(e, t, n, o) {
      for (var a = [], i = 0; i < e.length; i++) {
        var l = void 0;
        o === !0 && e.charAt(i) === "a"
          ? ((l = "A"), a.push(" "))
          : (l = e.charAt(i));
        var s = r("intlRenderJSDateSymbol")(n, l, t, e, i);
        (a.push(s.rendered), (i = s.idx));
      }
      return a.join("");
    }
    function d(e, t) {
      var n = s.DEFAULT_FORMAT;
      if (typeof t == "string") return t;
      if (typeof t == "object") {
        var o = e.getTime();
        for (var a of m()) {
          var i = t[a.name];
          if (i != null && a.start <= o && o < a.end) return i;
        }
        return (
          r("FBLogger")("i18n-formatDate")
            .event("matching_period_format_not_found")
            .blameToPreviousFile()
            .warn(
              'Matching period not found for date "%s", using default format "%s". Current timestamp: "%s"',
              o,
              n,
              Date.now(),
            ),
          n
        );
      } else
        return (
          r("FBLogger")("i18n-formatDate")
            .event("invalid_format_argument")
            .blameToPreviousFile()
            .warn(
              'Called with invalid format "%s" (type: %s) for date "%s", using default: %s',
              t,
              typeof t,
              e.getTime(),
              n,
            ),
          n
        );
    }
    function m() {
      var e = new Date(),
        t = e.getTime(),
        n = e.getFullYear(),
        o = e.getMonth(),
        a = new Date(n, e.getMonth() + 1, 0).getDate(),
        i = new Date(n, 1, 29).getMonth() === 1 ? 366 : 365,
        l = 1e3 * 60 * 60 * 24,
        s = new Date(e.setHours(0, 0, 0, 0)),
        u = new Date(n, o, s.getDate() + 1),
        c =
          e.getDate() -
          ((e.getDay() - r("DateFormatConfig").weekStart + 6) % 7),
        d = new Date(t).setDate(c),
        m = new Date(t).setDate(c + 7),
        p = new Date(n, o, 1),
        _ = new Date(n, o, a + 1),
        f = new Date(n, 0, 1),
        g = new Date(n + 1, 0, 1);
      return [
        { name: "today", start: s.getTime(), end: u.getTime() },
        { name: "withinDay", start: t - l, end: t + l },
        { name: "yesterday", start: s.getTime() - l, end: s.getTime() - 1 },
        { name: "thisWeek", start: d, end: m },
        { name: "withinWeek", start: t - l * 7, end: t + l * 7 },
        { name: "thisMonth", start: p.getTime(), end: _.getTime() },
        { name: "withinMonth", start: t - l * a, end: t + l * a },
        { name: "thisYear", start: f.getTime(), end: g.getTime() },
        { name: "withinYear", start: t - l * i, end: t + l * i },
        { name: "older", start: -1 / 0, end: t },
        { name: "future", start: t, end: 1 / 0 },
        { name: "allOtherTimes", start: -1 / 0, end: 1 / 0 },
      ];
    }
    var p = s;
    l.default = p;
  },
  98,
);
