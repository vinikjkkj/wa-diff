__d(
  "WAFlowsGetFocusDateWithLocalDate",
  ["LocalDate", "Timezone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("Timezone").getEnvironmentTimezoneID() || o("Timezone").UTC,
      s = r("LocalDate").today(e),
      u = function (t) {
        try {
          return typeof t == "string" && t.length
            ? r("LocalDate").fromISOString(t)
            : void 0;
        } catch (e) {
          return;
        }
      },
      c = function (t, n, r, o, a, i) {
        var e = u(t),
          l = u(n),
          s = u(o),
          c = u(a);
        return r === "end"
          ? d(l, e, r, s, c, i, "addDays")
          : d(e, l, r, s, c, i, "subtractDays");
      },
      d = function (t, n, r, o, a, i, l) {
        var e = r === "end" ? a : o;
        return t && o && t.isBefore(o)
          ? o
          : t && a && t.isAfter(a)
            ? a
            : t || (n && i != null ? n[l](i) : n || (e && !m(o, a) ? e : s));
      },
      m = function (t, n) {
        return t && n
          ? s.isAfterOrEqual(t) && s.isBeforeOrEqual(n)
          : t
            ? s.isAfterOrEqual(t)
            : n
              ? s.isBeforeOrEqual(n)
              : !0;
      };
    ((l.getDefaultLocalDate = u), (l.getFocusDateWithLocalDate = c));
  },
  98,
);
