__d(
  "MAWConsoleLogger",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("gkx")("2656");
    function s(t, n, r) {
      if (e) {
        var o = r
          .map(function (e) {
            return "[" + e + "]";
          })
          .join("");
        if (t === "count") {
          console.count(o + " " + String(n));
          return;
        }
        for (
          var a = arguments.length, i = new Array(a > 3 ? a - 3 : 0), l = 3;
          l < a;
          l++
        )
          i[l - 3] = arguments[l];
        if (o) {
          var s;
          (s = console)[t].apply(s, [o, n].concat(i));
        } else {
          var u;
          (u = console)[t].apply(u, [n].concat(i));
        }
      }
    }
    l.logToConsole = s;
  },
  98,
);
