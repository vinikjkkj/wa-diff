__d(
  "adsExperimentsIsAdObjectArchivedOrDeleted",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
        var e, n, r;
        return (
          ((t == null || (e = t.adObjects) == null ? void 0 : e[0].status) ===
            "ARCHIVED" ||
            (t == null || (n = t.adObjects) == null ? void 0 : n[0].status) ===
              "DELETED") &&
          ((r = t == null ? void 0 : t.adObjects) != null ? r : []).length === 1
        );
      },
      l = e;
    i.default = l;
  },
  66,
);
