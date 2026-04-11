__d(
  "QPLHasteSupportDataStorage",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = {
        add: function (n, r) {
          Object.keys(n).forEach(function (t) {
            if ((r && r.entry++, e[t] == null)) {
              var o = n[t];
              e[t] = o;
            } else r && r.dup_entry++;
          });
        },
        get: function (n) {
          return e[n];
        },
      };
    i.default = l;
  },
  66,
);
