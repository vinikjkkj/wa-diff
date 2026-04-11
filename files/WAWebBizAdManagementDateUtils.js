__d(
  "WAWebBizAdManagementDateUtils",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 864e5,
      u = new Set([
        "REJECTED",
        "PENDING",
        "NOT_DELIVERING",
        "ERROR",
        "CREATING",
        "DRAFT",
        "INACTIVE",
      ]);
    function c(t) {
      var n = t.boostingStatus,
        r = t.durationInDays,
        o = t.locale,
        a = t.startTime;
      if (a == null || r == null || (n != null && u.has(n))) return null;
      if (r === 0) return s._(/*BTDS*/ "Until you pause it");
      var i = a * 1e3,
        l = i + r * e,
        c = Date.now(),
        d = new Date(c);
      d.setHours(0, 0, 0, 0);
      var m = new Date(d.getTime() + e),
        p = new Date(d.getTime() + 2 * e),
        _ = l >= d.getTime() && l < m.getTime(),
        f = l >= m.getTime() && l < p.getTime(),
        g = l < c;
      if (_)
        return g ? s._(/*BTDS*/ "Ended today") : s._(/*BTDS*/ "Ends today");
      if (f) return s._(/*BTDS*/ "Ends tomorrow");
      if (g) {
        var h = new Intl.DateTimeFormat(o, {
          month: "short",
          day: "numeric",
        }).format(l);
        return s._(/*BTDS*/ "Ended on {date}", [s._param("date", h)]);
      }
      var y = Math.ceil((l - c) / e);
      return y > 0
        ? s._(/*BTDS*/ '_j{"*":"Ends in {number} days","_1":"Ends in 1 day"}', [
            s._plural(y, "number"),
          ])
        : null;
    }
    l.getAdEndDateText = c;
  },
  226,
);
