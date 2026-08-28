__d(
  "AdsToastCardsDismissReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.id,
            r = t.filter(function (t) {
              return t.id !== e;
            });
          return r.length !== t.length ? r : t;
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
