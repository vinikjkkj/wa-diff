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
    var e = r("flipObject")(r("RegionDatetimePatterns")),
      s = ["FULL", "LONG", "MEDIUM", "SHORT"];
    function u(t) {
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
        u = l + "Formats";
      switch (
        (t in e
          ? (a = o("CLDRDateFormatConfig").CLDRRegionalConfigeratorFormats)
          : (a = o("CLDRDateFormatConfig").CLDRConfigeratorFormats),
        u)
      ) {
        case "dateFormats":
        case "timeFormats":
          var m = c(s[0]);
          if (m == null)
            throw r("FBLogger")("internationalization").mustfixThrow(
              'Format: "%s", category: "%s", with unsupported width: "undefined"',
              t,
              u,
            );
          if (((n = a[u][m]), n == null))
            throw r("FBLogger")("internationalization").mustfixThrow(
              'Format: "%s", category: "%s", width: "%s", with unsupported localization',
              t,
              u,
              m,
            );
          break;
        case "dateTimeFormats":
          var p = c(s[0]),
            _ = c(s[1]);
          if (p == null || _ == null)
            throw r("FBLogger")("internationalization").mustfixThrow(
              'Format: "%s", category: "%s", with unsupported width: dateFormatKey="undefined" timeFormatKey="undefined"',
              t,
              u,
            );
          n = a[u][p];
          var f = a.dateFormats[p],
            g = a.timeFormats[_];
          if (n == null)
            throw r("FBLogger")("internationalization").mustfixThrow(
              'Format: "%s", category: "%s", date width: "%s", and time width: "%s", with unsupported localization',
              t,
              u,
              p,
              _,
            );
          n = n.replace("{0}", g).replace("{1}", f);
          break;
        default:
          u = "availableFormats";
          var h = l;
          if (
            (h.includes("j") && (h = d(h, a.timeFormats)),
            (n = a[u][h]),
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
    function c(e) {
      if (e == null)
        throw r("FBLogger")("internationalization").mustfixThrow(
          "Expected CLDR width key to not be null",
        );
      var t = e.toUpperCase(),
        n = s.find(function (e) {
          return e === t;
        });
      return n != null ? r("IntlDateFormatsCLDRWidthEnum")[n] : void 0;
    }
    function d(e, t) {
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
    l.default = u;
  },
  98,
);
