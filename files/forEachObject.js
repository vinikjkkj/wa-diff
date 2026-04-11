__d(
  "forEachObject",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = Object.prototype.hasOwnProperty;
    function l(t, n, r) {
      for (var o in t) {
        var a = o;
        e.call(t, a) && n.call(r, t[a], a, t);
      }
    }
    i.default = l;
  },
  66,
);
