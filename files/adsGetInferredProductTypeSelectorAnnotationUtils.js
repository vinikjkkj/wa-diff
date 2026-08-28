__d(
  "adsGetInferredProductTypeSelectorAnnotationUtils",
  ["adsGetInferredProductTypesSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = [],
        n = new Set([]);
      return (
        e.forEach(function (e) {
          var r,
            a =
              (r = o(
                "adsGetInferredProductTypesSelector",
              ).adsGetInferredProductTypesByObjectTypeSelector(e)) != null
                ? r
                : ["unknown"];
          (t.push(
            e.id +
              "-" +
              a
                .map(function (e) {
                  return "(" + String(e) + ")";
                })
                .join(""),
          ),
            a.forEach(function (e) {
              return n.add(String(e));
            }));
        }),
        {
          inferred_product_types: t,
          inferred_product_types_set: Array.from(n).sort(),
        }
      );
    }
    l.default = e;
  },
  98,
);
