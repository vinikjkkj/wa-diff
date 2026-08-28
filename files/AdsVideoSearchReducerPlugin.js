__d(
  "AdsVideoSearchReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return t.set(
            "param",
            babelHelpers.extends({}, t.param, { title: n.query }),
          );
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
