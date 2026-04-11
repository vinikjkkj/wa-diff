__d(
  "strPretty",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      for (
        var t = [], n = e.valueOf().trim(), r = !0, o = 0;
        o < n.length;
        o++
      ) {
        var a = n.charAt(o),
          i = o <= n.length - 2 ? n.charAt(o + 1) : null;
        if (/^[a-zA-Z]$/.test(a)) {
          if (
            (r ? (t.push(a.toUpperCase()), (r = !1)) : t.push(a.toLowerCase()),
            i != null && !/^[_\s]$/.test(i))
          ) {
            var l = a.toUpperCase() === a,
              s = i.toUpperCase() === i && /^[a-zA-Z]$/.test(i);
            !l && s && ((r = !0), t.push(" "));
          }
        } else if (/^[0-9]$/.test(a)) t.push(a);
        else if (/^[!.?]$/.test(a)) (t.push(a), (r = !0));
        else {
          if (i != null) {
            var u = i.toUpperCase() === i;
            (u || /^[_]$/.test(a)) && (r = !0);
          }
          t.push(" ");
        }
      }
      return t.join("");
    }
    i.default = e;
  },
  66,
);
