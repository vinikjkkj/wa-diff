__d(
  "CometSSRStyleXInjectionCollection",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [];
    function l() {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      e.push(n);
    }
    function s() {
      return e;
    }
    function u() {
      e = [];
    }
    ((i.addStyleInjection = l),
      (i.getStyleInjections = s),
      (i.clearStyleCollection = u));
  },
  66,
);
