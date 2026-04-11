__d(
  "DateStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    var e, u, c, d, m, p, _, f, g;
    function h(e) {
      return (
        p ||
          (p = [
            s._(/*BTDS*/ "Sunday"),
            s._(/*BTDS*/ "Monday"),
            s._(/*BTDS*/ "Tuesday"),
            s._(/*BTDS*/ "Wednesday"),
            s._(/*BTDS*/ "Thursday"),
            s._(/*BTDS*/ "Friday"),
            s._(/*BTDS*/ "Saturday"),
          ]),
        p[e]
      );
    }
    function y(e) {
      return (
        f ||
          (f = [
            s._(/*BTDS*/ "SUNDAY"),
            s._(/*BTDS*/ "MONDAY"),
            s._(/*BTDS*/ "TUESDAY"),
            s._(/*BTDS*/ "WEDNESDAY"),
            s._(/*BTDS*/ "THURSDAY"),
            s._(/*BTDS*/ "FRIDAY"),
            s._(/*BTDS*/ "SATURDAY"),
          ]),
        f[e]
      );
    }
    function C(e) {
      return (
        _ ||
          (_ = [
            s._(/*BTDS*/ "Sun"),
            s._(/*BTDS*/ "Mon"),
            s._(/*BTDS*/ "Tue"),
            s._(/*BTDS*/ "Wed"),
            s._(/*BTDS*/ "Thu"),
            s._(/*BTDS*/ "Fri"),
            s._(/*BTDS*/ "Sat"),
          ]),
        _[e]
      );
    }
    function b(e) {
      return (
        g ||
          (g = [
            s._(/*BTDS*/ "SUN"),
            s._(/*BTDS*/ "MON"),
            s._(/*BTDS*/ "TUE"),
            s._(/*BTDS*/ "WED"),
            s._(/*BTDS*/ "THU"),
            s._(/*BTDS*/ "FRI"),
            s._(/*BTDS*/ "SAT"),
          ]),
        g[e]
      );
    }
    function v() {
      e = [
        s._(/*BTDS*/ "January"),
        s._(/*BTDS*/ "February"),
        s._(/*BTDS*/ "March"),
        s._(/*BTDS*/ "April"),
        s._(/*BTDS*/ "May"),
        s._(/*BTDS*/ "June"),
        s._(/*BTDS*/ "July"),
        s._(/*BTDS*/ "August"),
        s._(/*BTDS*/ "September"),
        s._(/*BTDS*/ "October"),
        s._(/*BTDS*/ "November"),
        s._(/*BTDS*/ "December"),
      ];
    }
    function S(t) {
      e || v();
      var n = e;
      if (!n) {
        var r = new Error("MONTH_NAMES should be initialized");
        throw (r.stack, r);
      }
      return n[t - 1];
    }
    function R() {
      e || v();
      var t = e;
      if (!t) {
        var n = new Error("MONTH_NAMES should be initialized");
        throw (n.stack, n);
      }
      return t.slice();
    }
    function L(e) {
      return (
        d ||
          (d = [
            s._(/*BTDS*/ "JANUARY"),
            s._(/*BTDS*/ "FEBRUARY"),
            s._(/*BTDS*/ "MARCH"),
            s._(/*BTDS*/ "APRIL"),
            s._(/*BTDS*/ "MAY"),
            s._(/*BTDS*/ "JUNE"),
            s._(/*BTDS*/ "JULY"),
            s._(/*BTDS*/ "AUGUST"),
            s._(/*BTDS*/ "SEPTEMBER"),
            s._(/*BTDS*/ "OCTOBER"),
            s._(/*BTDS*/ "NOVEMBER"),
            s._(/*BTDS*/ "DECEMBER"),
          ]),
        d[e - 1]
      );
    }
    function E(e) {
      return (
        u ||
          (u = [
            s._(/*BTDS*/ "Jan"),
            s._(/*BTDS*/ "Feb"),
            s._(/*BTDS*/ "Mar"),
            s._(/*BTDS*/ "Apr"),
            s._(/*BTDS*/ "May"),
            s._(/*BTDS*/ "Jun"),
            s._(/*BTDS*/ "Jul"),
            s._(/*BTDS*/ "Aug"),
            s._(/*BTDS*/ "Sep"),
            s._(/*BTDS*/ "Oct"),
            s._(/*BTDS*/ "Nov"),
            s._(/*BTDS*/ "Dec"),
          ]),
        u[e - 1]
      );
    }
    function k(e) {
      return (
        c ||
          (c = [
            s._(/*BTDS*/ "JAN"),
            s._(/*BTDS*/ "FEB"),
            s._(/*BTDS*/ "MAR"),
            s._(/*BTDS*/ "APR"),
            s._(/*BTDS*/ "MAY"),
            s._(/*BTDS*/ "JUN"),
            s._(/*BTDS*/ "JUL"),
            s._(/*BTDS*/ "AUG"),
            s._(/*BTDS*/ "SEP"),
            s._(/*BTDS*/ "OCT"),
            s._(/*BTDS*/ "NOV"),
            s._(/*BTDS*/ "DEC"),
          ]),
        c[e - 1]
      );
    }
    function I(e) {
      return (
        m ||
          (m = [
            "",
            s._(/*BTDS*/ "st"),
            s._(/*BTDS*/ "nd"),
            s._(/*BTDS*/ "rd"),
            s._(/*BTDS*/ "th"),
            s._(/*BTDS*/ "th"),
            s._(/*BTDS*/ "th"),
            s._(/*BTDS*/ "th"),
            s._(/*BTDS*/ "th"),
            s._(/*BTDS*/ "th"),
            s._(/*BTDS*/ "th"),
            s._(/*BTDS*/ "th"),
            s._(/*BTDS*/ "th"),
            s._(/*BTDS*/ "th"),
            s._(/*BTDS*/ "th"),
            s._(/*BTDS*/ "th"),
            s._(/*BTDS*/ "th"),
            s._(/*BTDS*/ "th"),
            s._(/*BTDS*/ "th"),
            s._(/*BTDS*/ "th"),
            s._(/*BTDS*/ "th"),
            s._(/*BTDS*/ "st"),
            s._(/*BTDS*/ "nd"),
            s._(/*BTDS*/ "rd"),
            s._(/*BTDS*/ "th"),
            s._(/*BTDS*/ "th"),
            s._(/*BTDS*/ "th"),
            s._(/*BTDS*/ "th"),
            s._(/*BTDS*/ "th"),
            s._(/*BTDS*/ "th"),
            s._(/*BTDS*/ "th"),
            s._(/*BTDS*/ "st"),
          ]),
        m[e]
      );
    }
    function T(e) {
      switch (e) {
        case 1:
          return s._(/*BTDS*/ "1st");
        case 2:
          return s._(/*BTDS*/ "2nd");
        case 3:
          return s._(/*BTDS*/ "3rd");
        case 4:
          return s._(/*BTDS*/ "4th");
        case 5:
          return s._(/*BTDS*/ "5th");
        case 6:
          return s._(/*BTDS*/ "6th");
        case 7:
          return s._(/*BTDS*/ "7th");
        case 8:
          return s._(/*BTDS*/ "8th");
        case 9:
          return s._(/*BTDS*/ "9th");
        case 10:
          return s._(/*BTDS*/ "10th");
        case 11:
          return s._(/*BTDS*/ "11th");
        case 12:
          return s._(/*BTDS*/ "12th");
        case 13:
          return s._(/*BTDS*/ "13th");
        case 14:
          return s._(/*BTDS*/ "14th");
        case 15:
          return s._(/*BTDS*/ "15th");
        case 16:
          return s._(/*BTDS*/ "16th");
        case 17:
          return s._(/*BTDS*/ "17th");
        case 18:
          return s._(/*BTDS*/ "18th");
        case 19:
          return s._(/*BTDS*/ "19th");
        case 20:
          return s._(/*BTDS*/ "20th");
        case 21:
          return s._(/*BTDS*/ "21st");
        case 22:
          return s._(/*BTDS*/ "22nd");
        case 23:
          return s._(/*BTDS*/ "23rd");
        case 24:
          return s._(/*BTDS*/ "24th");
        case 25:
          return s._(/*BTDS*/ "25th");
        case 26:
          return s._(/*BTDS*/ "26th");
        case 27:
          return s._(/*BTDS*/ "27th");
        case 28:
          return s._(/*BTDS*/ "28th");
        case 29:
          return s._(/*BTDS*/ "29th");
        case 30:
          return s._(/*BTDS*/ "30th");
        case 31:
          return s._(/*BTDS*/ "31st");
        default:
          throw new Error("Invalid day of month.");
      }
    }
    function D() {
      return s._(/*BTDS*/ "Day:");
    }
    function x() {
      return s._(/*BTDS*/ "Month:");
    }
    function $() {
      return s._(/*BTDS*/ "Year:");
    }
    function P() {
      return s._(/*BTDS*/ "Hour:");
    }
    function N() {
      return s._(/*BTDS*/ "Minute:");
    }
    function M() {
      return s._(/*BTDS*/ "dd");
    }
    function w() {
      return s._(/*BTDS*/ "mm");
    }
    function A() {
      return s._(/*BTDS*/ "yyyy");
    }
    function F() {
      return s._(/*BTDS*/ "h");
    }
    function O() {
      return s._(/*BTDS*/ "m");
    }
    function B(e) {
      return e < 12 ? s._(/*BTDS*/ "am") : s._(/*BTDS*/ "pm");
    }
    function W(e) {
      return e < 12 ? s._(/*BTDS*/ "AM") : s._(/*BTDS*/ "PM");
    }
    ((l.getWeekdayName = h),
      (l.getUppercaseWeekdayName = y),
      (l.getWeekdayNameShort = C),
      (l.getUppercaseWeekdayNameShort = b),
      (l._initializeMonthNames = v),
      (l.getMonthName = S),
      (l.getMonthNames = R),
      (l.getUppercaseMonthName = L),
      (l.getMonthNameShort = E),
      (l.getUppercaseMonthNameShort = k),
      (l.getOrdinalSuffix = I),
      (l.getDayOfMonth = T),
      (l.getDayLabel = D),
      (l.getMonthLabel = x),
      (l.getYearLabel = $),
      (l.getHourLabel = P),
      (l.getMinuteLabel = N),
      (l.getDayPlaceholder = M),
      (l.getMonthPlaceholder = w),
      (l.getYearPlaceholder = A),
      (l.getHourPlaceholder = F),
      (l.getMinutePlaceholder = O),
      (l.get12HourClockSuffix = B),
      (l.getUppercase12HourClockSuffix = W));
  },
  226,
);
