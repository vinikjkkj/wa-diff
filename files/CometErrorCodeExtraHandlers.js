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
      try {
        e.forEach(function (e) {
          return e(t);
        });
      } catch (e) {}
    }
    ((i.addHandler = l), (i.executeHandlers = s));
  },
  66,
);
