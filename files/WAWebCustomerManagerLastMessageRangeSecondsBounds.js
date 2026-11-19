__d(
  "WAWebCustomerManagerLastMessageRangeSecondsBounds",
  ["WAWebCustomerManagerDateRangeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 86400;
    function s(t, n) {
      n === void 0 && (n = new Date());
      var r = Math.floor(n.getTime() / 1e3);
      return t === "today"
        ? u(n, 0)
        : t === "yesterday"
          ? u(n, -1)
          : t === "last_7_days"
            ? { endSec: null, startSec: r - 7 * e }
            : t === "last_14_days"
              ? { endSec: null, startSec: r - 14 * e }
              : t === "last_30_days"
                ? { endSec: null, startSec: r - 30 * e }
                : t === "last_3_months"
                  ? { endSec: null, startSec: c(n, 3) }
                  : t === "last_year"
                    ? { endSec: null, startSec: d(n, 1) }
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            t,
                        );
                      })();
    }
    function u(e, t) {
      var n = new Date(e.getFullYear(), e.getMonth(), e.getDate() + t);
      return o(
        "WAWebCustomerManagerDateRangeUtils",
      ).getCustomRangeSecondsBounds(n, n);
    }
    function c(e, t) {
      return m(e, e.getFullYear(), e.getMonth() - t);
    }
    function d(e, t) {
      return m(e, e.getFullYear() - t, e.getMonth());
    }
    function m(e, t, n) {
      var r = new Date(t, n + 1, 0).getDate(),
        o = Math.min(e.getDate(), r);
      return Math.floor(new Date(t, n, o).getTime() / 1e3);
    }
    l.lastMessageRangeSecondsBounds = s;
  },
  98,
);
