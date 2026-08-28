__d(
  "ISODateString",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = e.replace(/-|\+/g, ""),
        n = t.length === 10 ? 2 : 0,
        r = e.indexOf("-") === 0 ? -1 : 1;
      return {
        year: r * Number(t.substring(0, 4 + n)),
        month: Number(t.substring(4 + n, 6 + n)) || 1,
        day: Number(t.substring(6 + n, 8 + n)) || 1,
      };
    }
    function l(e) {
      var t = e.replace(":", "").replace(":", ""),
        n = +t.substring(0, 2) || 0,
        r = +t.substring(2, 4) || 0,
        o = parseFloat(t.substring(4)) || 0,
        a = Math.floor(o),
        i = Math.floor(1e3 * (o - a));
      return { hour: n, minute: r, second: a, millisecond: i };
    }
    function s(e) {
      if (!e || e === "Z") return 0;
      var t = e.replace(":", ""),
        n = t[0] === "+" ? 1 : -1,
        r = +t.substring(1, 3) || 0,
        o = +t.substring(3, 5) || 0;
      return n * (3600 * r + 60 * o);
    }
    function u(t) {
      var n = t.indexOf("T"),
        r = n !== -1 ? Math.max(t.indexOf("+", n), t.indexOf("-", n)) : -1,
        o = n !== -1 ? t.substring(0, n) : t,
        a;
      r !== -1
        ? (a = t.substring(n + 1, r))
        : n !== -1
          ? (a = t.substring(n + 1))
          : (a = "");
      var i = r !== -1 ? t.substring(r) : "";
      return babelHelpers.extends({}, e(o), l(a || ""), { offset: s(i) });
    }
    ((i.parseDateComponents = e),
      (i.parseTimeComponents = l),
      (i.parseTimezone = s),
      (i.parseComponents = u));
  },
  66,
);
