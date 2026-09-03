__d(
  "WAWebContactManagerLastMessageCutoff",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 86400;
    function l(t) {
      var n = new Date(),
        r = Math.floor(n.getTime() / 1e3);
      return t === "last_7_days"
        ? r - 7 * e
        : t === "last_14_days"
          ? r - 14 * e
          : t === "last_30_days"
            ? r - 30 * e
            : t === "last_3_months"
              ? s(n, 3)
              : t === "last_year"
                ? u(n, 1)
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        t,
                    );
                  })();
    }
    function s(e, t) {
      return c(e, e.getFullYear(), e.getMonth() - t);
    }
    function u(e, t) {
      return c(e, e.getFullYear() - t, e.getMonth());
    }
    function c(e, t, n) {
      var r = new Date(t, n + 1, 0).getDate(),
        o = Math.min(e.getDate(), r);
      return Math.floor(new Date(t, n, o).getTime() / 1e3);
    }
    i.lastMessageCutoffTimestamp = l;
  },
  66,
);
