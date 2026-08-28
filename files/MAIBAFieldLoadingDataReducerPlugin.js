__d(
  "MAIBAFieldLoadingDataReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          if (n.fieldTypes.length === 0) return t;
          var e = new Set(t.loadingFieldTypes);
          if (n.state === "loading") for (var r of n.fieldTypes) e.add(r);
          else for (var o of n.fieldTypes) e.delete(o);
          return { loadingFieldTypes: e };
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
