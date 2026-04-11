__d(
  "justknobx",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {},
      u = {
        getBool: function (t) {
          s(0, 47459);
        },
        getInt: function (t) {
          s(0, 47459);
        },
        _: function (n) {
          var t = e[n];
          return (t != null || s(0, 47458, n), t.r);
        },
        add: function (n, r) {
          for (var t in n)
            (r && r.entry++, t in e ? r && r.dup_entry++ : (e[t] = n[t]));
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
