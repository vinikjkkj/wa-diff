__d(
  "MetaConfigMap",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = {
        add: function (n, r) {
          for (var t in n)
            (r && r.entry++, t in e ? r && r.dup_entry++ : (e[t] = n[t]));
        },
        get: function (n) {
          return e[n];
        },
      },
      s = l;
    i.default = s;
  },
  66,
);
