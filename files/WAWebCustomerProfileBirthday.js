__d(
  "WAWebCustomerProfileBirthday",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    var e = 2e3,
      s = /^(\d{4})-(\d{2})-(\d{2})$/;
    function u(e, t) {
      var n = new Date(e * 1e3),
        r = n.getUTCMonth(),
        o = n.getUTCDate(),
        a = String(r + 1).padStart(2, "0"),
        i = String(o).padStart(2, "0");
      return d(t, r, o) + "-" + a + "-" + i;
    }
    function c(t) {
      var n = m(t);
      return n == null
        ? null
        : o("WATimeUtils").castToUnixTime(
            Math.floor(Date.UTC(e, n.monthIndex, n.day) / 1e3),
          );
    }
    function d(t, n, r) {
      var o = m(t);
      return o == null ? e : p(o.year, n, r) ? o.year : e;
    }
    function m(e) {
      if (e == null) return null;
      var t = s.exec(e);
      if (t == null) return null;
      var n = Number(t[1]),
        r = Number(t[2]) - 1,
        o = Number(t[3]);
      return p(n, r, o) ? { year: n, monthIndex: r, day: o } : null;
    }
    function p(e, t, n) {
      var r = new Date(Date.UTC(e, t, n));
      return (
        r.getUTCFullYear() === e &&
        r.getUTCMonth() === t &&
        r.getUTCDate() === n
      );
    }
    ((l.BIRTHDAY_SENTINEL_YEAR = e),
      (l.formatBirthdayToIso = u),
      (l.parseBirthdayFromIso = c));
  },
  98,
);
