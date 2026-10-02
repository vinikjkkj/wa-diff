__d(
  "WAWebCustomerManagerImportDateParsingUtils",
  ["WATimeUtils", "WAWebCustomerProfileBirthday"],
  function (t, n, r, o, a, i, l) {
    var e = 30,
      s = Object.freeze({
        iso: "YYYY-MM-DD",
        monthFirst: "MM/DD/YYYY",
        dayFirst: "DD-MM-YYYY",
        birthdayMonthDay: "MM/DD",
        birthdayIsoMonthDay: "--MM-DD",
      });
    function u(e, t) {
      var n = e == null ? void 0 : e.trim();
      if (n == null || n === "") return { type: "empty" };
      var r = c(n, t);
      if (r == null) return { type: "invalid" };
      var a =
        t === "birthday"
          ? o("WAWebCustomerProfileBirthday").BIRTHDAY_SENTINEL_YEAR
          : r.year;
      if (!p(a, r.monthIndex, r.day)) return { type: "invalid" };
      var i = m(a, r.monthIndex, r.day),
        l = Math.floor(i.getTime() / 1e3);
      return l < -o("WATimeUtils").MAX_INT || l > o("WATimeUtils").MAX_INT
        ? { type: "invalid" }
        : { type: "valid", value: o("WATimeUtils").castToUnixTime(l) };
    }
    function c(e, t) {
      var n,
        r =
          (n = /^\'?--(\d{2})-(\d{2})$/.exec(e)) != null
            ? n
            : /^(\d{1,2})\/(\d{1,2})$/.exec(e);
      if (t === "birthday" && r != null)
        return {
          year: o("WAWebCustomerProfileBirthday").BIRTHDAY_SENTINEL_YEAR,
          monthIndex: Number(r[1]) - 1,
          day: Number(r[2]),
        };
      var a = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
      if (a != null)
        return {
          year: Number(a[1]),
          monthIndex: Number(a[2]) - 1,
          day: Number(a[3]),
        };
      var i = /^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/.exec(e);
      if (i != null)
        return {
          year: d(i[3]),
          monthIndex: Number(i[1]) - 1,
          day: Number(i[2]),
        };
      var l = /^(\d{1,2})-(\d{1,2})-(\d{2}|\d{4})$/.exec(e);
      return l != null
        ? { year: d(l[3]), monthIndex: Number(l[2]) - 1, day: Number(l[1]) }
        : null;
    }
    function d(t) {
      var n = Number(t);
      return t.length !== 2 ? n : n < e ? 2e3 + n : 1900 + n;
    }
    function m(e, t, n) {
      var r = new Date(0);
      return (r.setUTCFullYear(e, t, n), r.setUTCHours(0, 0, 0, 0), r);
    }
    function p(e, t, n) {
      if (e < 1 || t < 0 || t > 11 || n < 1 || n > 31) return !1;
      var r = m(e, t, n);
      return (
        r.getUTCFullYear() === e &&
        r.getUTCMonth() === t &&
        r.getUTCDate() === n
      );
    }
    ((l.CUSTOMER_MANAGER_IMPORT_DATE_FORMATS = s),
      (l.parseCustomerManagerImportDate = u));
  },
  98,
);
