__d(
  "CometErrorCodeExtraHandlers",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [];
    function l(t) {
      e.push(t);
    }
    function s(t) {
      var n = e.indexOf(t);
      n > -1 && e.splice(n, 1);
    }
    function u(t) {
      try {
        e.forEach(function (e) {
          return e(t);
        });
      } catch (e) {}
    }
    ((i.addHandler = l), (i.removeHandler = s), (i.executeHandlers = u));
  },
  66,
);
