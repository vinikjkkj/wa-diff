__d(
  "baseTypeaheadFlattenEntries",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.flatMap(function (e) {
        return e.type === "section" ? e.entries : e;
      });
    }
    i.default = e;
  },
  66,
);
