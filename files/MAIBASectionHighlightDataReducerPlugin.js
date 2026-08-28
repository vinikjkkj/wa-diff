__d(
  "MAIBASectionHighlightDataReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 1e3,
      l = {
        reduce: function (n, r) {
          return {
            sectionTypes: r.sectionTypes,
            counter: n.counter >= e ? 1 : n.counter + 1,
          };
        },
      },
      s = l;
    i.default = s;
  },
  66,
);
