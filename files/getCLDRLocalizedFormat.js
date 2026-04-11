__d(
  "getCLDRLocalizedFormat",
  [
    "CLDRDateFormatConfig",
    "FBLogger",
    "IntlDateFormatsCLDRWidthEnum",
    "RegionDatetimePatterns",
    "flipObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("flipObject")(r("RegionDatetimePatterns"));
    function s(t) {
      if (t == null)
        throw r("FBLogger")("internationalization").mustfixThrow(
          'Format: "%s", not supported by configurator.',
          t,
        );
      var n,
        a,
        i = t.split("_"),
        l = i[0],
        s = babelHelpers.arrayLikeToArray(i).slice(1),
        d = l + "Formats";
      switch (
        (t in e
          ? (a = o("CLDRDateFormatConfig").CLDRRegionalConfigeratorFormats)
          : (a = o("CLDRDateFormatConfig").CLDRConfigeratorFormats),
        d)
      ) {
        case "dateFormats":
        case "timeFormats":
          var m = u(s[0]);
          if (m == null)
            throw r("FBLogger")("internationalization").mustfixThrow(
              'Format: "%s", category: "%s", with unsupported width: "undefined"',
              t,
              d,
            );
          if (((n = a[d][m]), n == null))
            throw r("FBLogger")("internationalization").mustfixThrow(
              'Format: "%s", category: "%s", width: "%s", with unsupported localization',
              t,
              d,
              m,
            );
          break;
        case "dateTimeFormats":
          var p = u(s[0]),
            _ = u(s[1]);
          if (p == null || _ == null)
            throw r("FBLogger")("internationalization").mustfixThrow(
              'Format: "%s", category: "%s", with unsupported width: dateFormatKey="undefined" timeFormatKey="undefined"',
              t,
              d,
            );
          n = a[d][p];
          var f = a.dateFormats[p],
            g = a.timeFormats[_];
          if (n == null)
            throw r("FBLogger")("internationalization").mustfixThrow(
              'Format: "%s", category: "%s", date width: "%s", and time width: "%s", with unsupported localization',
              t,
              d,
              p,
              _,
            );
          n = n.replace("{0}", g).replace("{1}", f);
          break;
        default:
          d = "availableFormats";
          var h = l;
          if (
            (h.includes("j") && (h = c(h, a.timeFormats)),
            (n = a[d][h]),
            n == null)
          )
            throw r("FBLogger")("internationalization").mustfixThrow(
              'Format: "%s", with key: "%s", not supported by CLDR',
              t,
              h,
            );
      }
      return n;
    }
    function u(e) {
      if (e == null)
        throw r("FBLogger")("internationalization").mustfixThrow(
          "Expected CLDR width key to not be null",
        );
      return r("IntlDateFormatsCLDRWidthEnum")[e.toUpperCase()];
    }
    function c(e, t) {
      var n,
        o = t.short;
      return (
        o == null
          ? (r("FBLogger")("formatDate")
              .blameToPreviousFile()
              .warn(
                'CLDR `timeFormat`, width `short` required for 24 hour localization not found for availableKey: "%s"',
                e,
              ),
            (n = "h"))
          : (n = o.includes("H") ? "H" : "h"),
        e.replace("j", n)
      );
    }
    l.default = s;
  },
  98,
);
