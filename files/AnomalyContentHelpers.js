__d(
  "AnomalyContentHelpers",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.flatMap(function (e) {
        var t, n;
        return (t =
          (n = e.attributed_ad_objects) == null
            ? void 0
            : n.flatMap(function (e) {
                return e != null && e.ad_object_id != null
                  ? [e.ad_object_id]
                  : [];
              })) != null
          ? t
          : [];
      });
      return new Set(t);
    }
    i.getUniqueAdObjectsFromExplanations = e;
  },
  66,
);
