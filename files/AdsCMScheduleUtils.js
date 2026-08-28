__d(
  "AdsCMScheduleUtils",
  ["fbt", "AdsAccountStore", "DateTime"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      var n,
        o = r("DateTime").createFromISOString(
          e,
          r("AdsAccountStore").getTimezoneID(),
        );
      return o.instant < 0
        ? null
        : (t === !0
            ? (n = o.format("M j, Y"))
            : u(o, 0)
              ? (n = o.format("g:ia"))
              : u(o, 1)
                ? (n = s._(/*BTDS*/ "Tomorrow"))
                : u(o, -1)
                  ? (n = s._(/*BTDS*/ "Yesterday"))
                  : (n = o.format("M j, Y")),
          { label: n, fullLabel: o.format("M d, Y g:ia") });
    }
    function u(e, t) {
      var n = r("DateTime")
        .now(r("AdsAccountStore").getTimezoneID())
        .addDays(t);
      return (
        e.getYear() === n.getYear() &&
        e.getMonth() === n.getMonth() &&
        e.getDayOfMonth() === n.getDayOfMonth()
      );
    }
    l.getDateUIData = e;
  },
  226,
);
