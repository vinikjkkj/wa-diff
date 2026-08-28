__d(
  "generateAPIFieldNameForFilters",
  ["invariant", "AdsFilteringObjectType", "getObjectValues"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      return (
        r("getObjectValues")(r("AdsFilteringObjectType")).includes(e) ||
          s(0, 4108, e),
        e + "." + t
      );
    }
    l.default = e;
  },
  98,
);
