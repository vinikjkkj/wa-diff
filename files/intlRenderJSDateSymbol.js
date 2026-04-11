__d(
  "intlRenderJSDateSymbol",
  ["DateStrings", "FBLogger", "padNumber"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i) {
      i === void 0 && (i = 0);
      var l = n.skipSuffixLocalization === !0,
        s = i,
        u = "";
      switch (t) {
        case "\\":
          if ((s++, a == null))
            throw r("FBLogger")("internationalization").mustfixThrow(
              "Only deprecated calls to `intlRenderJSDateSymbol()` use `localizedJSFormat`.",
            );
          u = a.charAt(s);
          break;
        case "d":
          u = r("padNumber")(e.dateDay, 2);
          break;
        case "j":
          u = e.dateDay;
          break;
        case "S":
          u = o("DateStrings").getOrdinalSuffix(e.dateDay);
          break;
        case "D":
          u = o("DateStrings").getWeekdayNameShort(e.dateDayOfWeek);
          break;
        case "l":
          u = o("DateStrings").getWeekdayName(e.dateDayOfWeek);
          break;
        case "F":
        case "f":
          u = o("DateStrings").getMonthName(e.dateMonth + 1);
          break;
        case "M":
          u = o("DateStrings").getMonthNameShort(e.dateMonth + 1);
          break;
        case "m":
          u = r("padNumber")(e.dateMonth + 1, 2);
          break;
        case "n":
          u = e.dateMonth + 1;
          break;
        case "Y":
          u = e.dateYear;
          break;
        case "y":
          u = ("" + e.dateYear).slice(2);
          break;
        case "a":
          l
            ? (u = e.dateHours < 12 ? "am" : "pm")
            : (u = o("DateStrings").get12HourClockSuffix(e.dateHours));
          break;
        case "A":
          l
            ? (u = e.dateHours < 12 ? "AM" : "PM")
            : (u = o("DateStrings").getUppercase12HourClockSuffix(e.dateHours));
          break;
        case "g":
          e.dateHours === 0 || e.dateHours === 12
            ? (u = "12")
            : (u = e.dateHours % 12);
          break;
        case "G":
          u = e.dateHours;
          break;
        case "h":
          e.dateHours === 0 || e.dateHours === 12
            ? (u = "12")
            : (u = r("padNumber")(e.dateHours % 12, 2));
          break;
        case "H":
          u = r("padNumber")(e.dateHours, 2);
          break;
        case "i":
          u = r("padNumber")(e.dateMinutes, 2);
          break;
        case "s":
          u = r("padNumber")(e.dateSeconds, 2);
          break;
        case "X":
          u = r("padNumber")(e.dateMilliseconds, 3);
          break;
        default:
          u = t;
      }
      return { idx: s, rendered: String(u) };
    }
    l.default = e;
  },
  98,
);
