__d(
  "applyChangesToBPlusTree",
  ["I64"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      var r = !1;
      for (var a of n) {
        var i = a[0],
          l = a[1];
        switch (l.operation) {
          case "delete":
            t.delete(i);
            break;
          case "put": {
            var s = t.getWithDefault(i, void 0);
            if (s === l.value) continue;
            var u = (e || (e = o("I64"))).cast(s);
            if (u != null) {
              var c = (e || (e = o("I64"))).cast(l.value);
              if (c != null && (e || (e = o("I64"))).equal(u, c)) continue;
            }
          }
          case "add":
            t.set(i, l.value);
            break;
        }
        r = !0;
      }
      return ((n.length = 0), r);
    }
    l.default = s;
  },
  98,
);
