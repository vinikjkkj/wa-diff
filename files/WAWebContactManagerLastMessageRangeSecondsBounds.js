__d(
  "WAWebContactManagerLastMessageRangeSecondsBounds",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 86400;
    function l(t) {
      var n = new Date(),
        r = Math.floor(n.getTime() / 1e3);
      return t === "today"
        ? s(n, 0)
        : t === "yesterday"
          ? s(n, -1)
          : t === "last_7_days"
            ? { endSec: null, startSec: r - 7 * e }
            : t === "last_14_days"
              ? { endSec: null, startSec: r - 14 * e }
              : t === "last_30_days"
                ? { endSec: null, startSec: r - 30 * e }
                : t === "last_3_months"
                  ? { endSec: null, startSec: u(n, 3) }
                  : t === "last_year"
                    ? { endSec: null, startSec: c(n, 1) }
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            t,
                        );
                      })();
    }
    function s(e, t) {
      var n = new Date(e.getFullYear(), e.getMonth(), e.getDate() + t),
        r = Math.floor(n.getTime() / 1e3),
        o = Math.floor(
          new Date(
            n.getFullYear(),
            n.getMonth(),
            n.getDate(),
            23,
            59,
            59,
            999,
          ).getTime() / 1e3,
        );
      return { endSec: o, startSec: r };
    }
    function u(e, t) {
      return d(e, e.getFullYear(), e.getMonth() - t);
    }
    function c(e, t) {
      return d(e, e.getFullYear() - t, e.getMonth());
    }
    function d(e, t, n) {
      var r = new Date(t, n + 1, 0).getDate(),
        o = Math.min(e.getDate(), r);
      return Math.floor(new Date(t, n, o).getTime() / 1e3);
    }
    i.lastMessageRangeSecondsBounds = l;
  },
  66,
);
