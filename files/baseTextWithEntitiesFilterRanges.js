__d(
  "baseTextWithEntitiesFilterRanges",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var r = e[n];
        if (
          r != null &&
          r.offset != null &&
          r.length != null &&
          r.entity != null &&
          r.entity.__typename != null
        ) {
          var o;
          t.push({
            entity: r.entity,
            entity_is_weak_reference:
              (o = r.entity_is_weak_reference) != null ? o : null,
            length: r.length,
            offset: r.offset,
          });
        }
      }
      return t;
    }
    i.default = e;
  },
  66,
);
