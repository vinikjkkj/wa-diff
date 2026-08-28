__d(
  "adsCreateKeyedStoreSelector",
  ["DerivedDataMap", "adsCreateStoreSelector", "shallowEqual"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o = new (r("DerivedDataMap"))({
          getInputData: t.getInputData,
          computeResult: t.computeResult,
          areInputsEqual:
            (n = t.areInputsEqual) != null ? n : r("shallowEqual"),
          areResultsEqual: t.areResultsEqual,
        });
      return r("adsCreateStoreSelector")(
        e,
        function (n) {
          return o.get(t.getKey(n));
        },
        { name: i.id },
      );
    }
    l.default = e;
  },
  98,
);
