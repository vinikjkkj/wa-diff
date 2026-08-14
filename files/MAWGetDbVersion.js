__d(
  "MAWGetDbVersion",
  ["MAWDbVersionList", "justknobx", "objectValues"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s() {
      return e != null
        ? e
        : o("MAWDbVersionList").toVersion(r("justknobx")._("1716"));
    }
    function u(t) {
      if (r("justknobx")._("1495")) {
        if (t == null || t === "current") return ((e = null), e);
        var n = Math.max.apply(
          Math,
          r("objectValues")(o("MAWDbVersionList").VERSION),
        );
        if (t === "latest")
          return ((e = o("MAWDbVersionList").toVersion(n)), e);
        if (!Number.isInteger(t)) return e;
        if (t < 0) return ((e = o("MAWDbVersionList").toVersion(n + t)), e);
        e = o("MAWDbVersionList").toVersion(t);
      }
    }
    ((l.getArmadilloDbVersion = s), (l.setArmadilloDbVersionForTest = u));
  },
  98,
);
