__d(
  "XUIDateTimePickerUtils",
  [],
  function (t, n, r, o, a, i) {
    var e = 60,
      l = 36e5,
      s = 3600,
      u = 60,
      c = {
        offsetDate: function (n, r, o) {
          var t = r != null ? r : (n.getTimezoneOffset() / e) * -1,
            a = o === !0 ? -1 : 1,
            i = t >= 0 ? a : a * -1,
            s = Math.abs(t) * l;
          return new Date(n.getTime() + s * i);
        },
        getOffsetUIDate: function (t, n) {
          return c.offsetDate(t, n);
        },
        getOffsetUISecondsSinceMidnightUTC: function (t, n) {
          return c.getSecondsSinceMidnightUTC(c.getOffsetUIDate(t, n));
        },
        getActualDateFromOffsetUIDate: function (t, n) {
          return c.offsetDate(t, n, !0);
        },
        getActualDateFromOffsetUISeconds: function (t, n, r) {
          var e = c.getDateAtTimeUTC(c.getOffsetUIDate(n, r), t);
          return c.getActualDateFromOffsetUIDate(e, r);
        },
        getActualCanonicalDate: function (t, n, r) {
          var e = c.getOffsetUIDate(n, r),
            o = 0;
          e.getUTCDate() !== n.getUTCDate() &&
            (o = e.getTime() < n.getTime() ? 1 : -1);
          var a = new Date(t);
          return (a.setUTCDate(a.getUTCDate() + o), a);
        },
        getActualDateFromOffsetUICanonicalDate: function (t, n, r) {
          var e = c.getActualCanonicalDate(t, n, r),
            o = c.getSecondsSinceMidnightUTC(n),
            a = c.getDateAtTimeUTC(e, o),
            i = 0;
          return (
            r === void 0 &&
              (i = (a.getTimezoneOffset() - n.getTimezoneOffset()) / 60),
            a.setUTCHours(a.getUTCHours() + i),
            a
          );
        },
        getSecondsSinceMidnightUTC: function (t) {
          return (
            t.getUTCHours() * s + t.getUTCMinutes() * u + t.getUTCSeconds()
          );
        },
        getDateAtTimeUTC: function (t, n) {
          var e = Math.floor(n / s),
            r = Math.floor((n % s) / u),
            o = n % u,
            a = new Date(t);
          return (a.setUTCHours(e, r, o, 0), a);
        },
      },
      d = c;
    i.default = d;
  },
  66,
);
