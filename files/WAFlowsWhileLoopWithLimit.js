__d(
  "WAFlowsWhileLoopWithLimit",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if ((n === void 0 && (n = 100), typeof e != "boolean"))
        throw r("err")("Condition must be evaluated to boolean");
      if (typeof t != "function") throw r("err")("Callback must be a function");
      if (typeof n != "number" || n <= 0 || n % 1 !== 0)
        throw r("err")("limit must be a positive integer");
      for (var o = 0; e && o < n; ) (t(), o++);
    }
    l.default = e;
  },
  98,
);
