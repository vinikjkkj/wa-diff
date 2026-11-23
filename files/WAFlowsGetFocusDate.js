__d(
  "WAFlowsGetFocusDate",
  ["WAFlowsDatePickerUtils", "WAFlowsLocalDate"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("WAFlowsLocalDate").today(),
      s = function (t, n, r, a, i, l) {
        var e,
          s = (e = o("WAFlowsDatePickerUtils")).getLocalDate(t),
          c = e.getLocalDate(n),
          d = e.getLocalDate(a),
          m = e.getLocalDate(i);
        return r === "end"
          ? u(c, s, r, d, m, l, "addDays")
          : u(s, c, r, d, m, l, "subtractDays");
      },
      u = function (n, r, o, a, i, l, s) {
        var t = o === "end" ? i : a;
        return n && a && n.isBefore(a)
          ? a
          : n && i && n.isAfter(i)
            ? i
            : n || (r && l != null ? r[s](l) : r || (t && !c(a, i) ? t : e));
      },
      c = function (n, r) {
        return n && r
          ? e.isAfterOrEqual(n) && e.isBeforeOrEqual(r)
          : n
            ? e.isAfterOrEqual(n)
            : r
              ? e.isBeforeOrEqual(r)
              : !0;
      };
    l.getFocusDate = s;
  },
  98,
);
