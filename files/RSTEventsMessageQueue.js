__d(
  "RSTEventsMessageQueue",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Map();
    function l(t, n) {
      e.has(t) || e.set(t, []);
      var r = e.get(t);
      r && r.indexOf(n) === -1 && r.push(n);
    }
    function s(t, n) {
      var r = e.get(t);
      r != null &&
        r.forEach(function (e) {
          return e(n);
        });
    }
    ((i.subscribe = l), (i.notify = s));
  },
  66,
);
