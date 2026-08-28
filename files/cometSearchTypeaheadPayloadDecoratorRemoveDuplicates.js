__d(
  "cometSearchTypeaheadPayloadDecoratorRemoveDuplicates",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return function (t) {
        var n = new Set(
            (e != null ? e : []).map(function (e) {
              return e.key;
            }),
          ),
          r = t.entries,
          o = r.filter(function (e) {
            return !n.has(e.key);
          });
        return babelHelpers.extends({}, t, { entries: o });
      };
    }
    i.default = e;
  },
  66,
);
