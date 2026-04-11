__d(
  "qex",
  ["invariant", "BanzaiLazyQueue"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {},
      u = {},
      c = {
        _: function (n) {
          var t = e[n];
          t != null || s(0, 11799, n);
          var r = t.l,
            a = t.r;
          return (
            r != null &&
              !u[n] &&
              ((u[n] = !0), o("BanzaiLazyQueue").queuePost("qex", { l: r })),
            a
          );
        },
        add: function (n, r) {
          for (var t in n)
            (r && r.entry++, t in e ? r && r.dup_entry++ : (e[t] = n[t]));
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
