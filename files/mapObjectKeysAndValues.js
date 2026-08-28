__d(
  "mapObjectKeysAndValues",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = Object.prototype.hasOwnProperty;
    function l(t, n, r, o) {
      var a = {};
      for (var i in t) {
        var l = i;
        if (e.call(t, l)) {
          var s = n.call(o, t[l], l, t),
            u = r.call(o, t[l], l, t);
          a[s] = u;
        }
      }
      return a;
    }
    i.default = l;
  },
  66,
);
