__d(
  "getBadgePosition",
  ["Locale", "memoizeWithArgs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("memoizeWithArgs")(
      function (e, t) {
        t === void 0 && (t = !1);
        var n = Math.sqrt(2 * e * e) - e,
          r = Math.round(Math.sqrt((n * n) / 2));
        return t
          ? o("Locale").isRTL()
            ? { left: r, top: r, transform: "translate(-50%, -50%)" }
            : { right: r, top: r, transform: "translate(50%, -50%)" }
          : o("Locale").isRTL()
            ? { bottom: r, left: r, transform: "translate(-50%, 50%)" }
            : { bottom: r, right: r, transform: "translate(50%, 50%)" };
      },
      function (e, t) {
        return String(t) + String(e);
      },
    );
    l.getBadgePosition = e;
  },
  98,
);
