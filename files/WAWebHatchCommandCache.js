__d(
  "WAWebHatchCommandCache",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Map();
    function l(t) {
      return e.get(t);
    }
    function s(t, n) {
      e.set(t, n);
    }
    function u() {
      e.clear();
    }
    ((i.getHatchCommands = l),
      (i.setHatchCommands = s),
      (i.clearAllHatchCommands = u));
  },
  66,
);
