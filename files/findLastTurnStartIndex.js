__d(
  "findLastTurnStartIndex",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      for (
        var r = function (n) {
            var t;
            return ((t = e[n].at(0)) == null ? void 0 : t.role) === "USER";
          },
          o = function (n, r) {
            var t,
              o,
              a = (t = e[n].at(0)) == null ? void 0 : t.bot_request_id;
            return (
              a != null &&
              a === ((o = e[r].at(0)) == null ? void 0 : o.bot_request_id)
            );
          },
          a = e.length - 1;
        a >= 0;
        a--
      ) {
        if (r(a)) return a;
        if (!(n || t.has(a))) {
          for (var i = a - 1; i >= 0 && t.has(i); ) i--;
          if (i >= 0 && !r(i) && !o(i, a)) return a;
        }
      }
      return -1;
    }
    i.default = e;
  },
  66,
);
