__d(
  "AdsDefaultPageReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e,
            r = (e = n.response.success_count) != null ? e : 0;
          return r > 0 ? t.clear() : t;
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
