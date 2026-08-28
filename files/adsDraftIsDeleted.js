__d(
  "adsDraftIsDeleted",
  ["adsDraftGetStatusFieldForLevel"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e.action === "archive" || e.action === "delete") return !0;
      var t = e.getIn([
        "values",
        r("adsDraftGetStatusFieldForLevel")(e.objectType),
        "newValue",
      ]);
      return t === "ARCHIVED" || t === "DELETED";
    }
    l.default = e;
  },
  98,
);
