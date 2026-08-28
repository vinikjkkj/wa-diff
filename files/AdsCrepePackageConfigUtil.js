__d(
  "AdsCrepePackageConfigUtil",
  ["adsMemoizeWithArgs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsMemoizeWithArgs")(
      function (e, t) {
        return { objectID: e, objectLevel: t };
      },
      function (e, t) {
        return (
          (e != null ? e : "unknown_id") + (t != null ? t : "unknown_level")
        );
      },
      i.id + ".getObjectIDAndLevelMemoized",
    );
    l.getObjectIDAndLevelMemoized = e;
  },
  98,
);
