__d(
  "AdsVideoFilterReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return t.set(
            "param",
            babelHelpers.extends({}, n.query, {
              sort: t.param.sort,
              title: t.param.title,
            }),
          );
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
