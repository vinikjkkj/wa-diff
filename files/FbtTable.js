__d(
  "FbtTable",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        ARG: { INDEX: 0, SUBSTITUTION: 1 },
        access: function (n, r, o, a) {
          if (o >= r.length)
            return (
              typeof n == "string" ||
                Array.isArray(n) ||
                s(0, 21388, JSON.stringify(n)),
              n
            );
          var t = r[o],
            i = t[e.ARG.INDEX];
          if (i == null) return e.access(n, r, o + 1, a);
          (typeof n != "string" && !Array.isArray(n)) || s(0, 20954, typeof n);
          for (var l = 0; l < i.length; ++l) {
            var u = n[i[l]];
            if (u != null) {
              a.push(i[l]);
              var c = e.access(u, r, o + 1, a);
              if (c != null) return c;
            }
          }
          return null;
        },
      },
      u = e;
    l.default = u;
  },
  98,
);
