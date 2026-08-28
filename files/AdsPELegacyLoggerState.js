__d(
  "AdsPELegacyLoggerState",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = {};
    function s(t) {
      var n = [];
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) n.push(arguments[r]);
      ((e[t] = n), (l[t] = Date.now()));
    }
    function u(t) {
      (e[t] !== void 0 && delete e[t], l[t] !== void 0 && delete l[t]);
    }
    function c() {
      var t = [];
      for (var n in e) t.push(n);
      return t;
    }
    ((i.startFlow = s), (i.endFlow = u), (i.getActiveFlows = c));
  },
  66,
);
