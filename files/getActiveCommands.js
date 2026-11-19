__d(
  "getActiveCommands",
  ["getFocusedWalkStopWrapper"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = new Map();
      function a(e) {
        e.forEach(function (e, t) {
          var n = o.get(t);
          if (n) {
            var r = n.every(function (e) {
              return e.shouldStopPropagation === !1;
            });
            r && n.push(e);
          } else o.set(t, [e]);
        });
      }
      for (
        var i = e, l = r("getFocusedWalkStopWrapper")(t);
        i != null && i !== l;
      ) {
        var s = i && i.getCommandMap();
        (a(s), (i = i && i.getParent()));
      }
      return (t && a(t.getCommandMap()), n && a(n.getCommandMap()), o);
    }
    l.default = e;
  },
  98,
);
