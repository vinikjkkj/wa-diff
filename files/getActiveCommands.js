__d(
  "getActiveCommands",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      var r = new Map();
      function o(e) {
        e.forEach(function (e, t) {
          var n = r.get(t);
          if (n) {
            var o = n.every(function (e) {
              return e.shouldStopPropagation === !1;
            });
            o && n.push(e);
          } else r.set(t, [e]);
        });
      }
      for (var a = e; a != null; ) {
        var i = a && a.getCommandMap();
        (o(i), (a = a && a.getParent()));
      }
      return (t && o(t.getCommandMap()), n && o(n.getCommandMap()), r);
    }
    i.default = e;
  },
  66,
);
