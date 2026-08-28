__d(
  "baseTextWithEntitiesFilterEntityRanges",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = [];
      for (var n of e) {
        var r = n.entity,
          o = n.entity_type,
          a = n.length,
          i = n.offset;
        i != null &&
          a != null &&
          r != null &&
          r.__typename != null &&
          t.push({ entity: r, entity_type: o, length: a, offset: i });
      }
      return t;
    }
    i.default = e;
  },
  66,
);
