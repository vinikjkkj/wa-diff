__d(
  "LSDb",
  ["LSDbV1", "ReStoreDbVersion", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = Object.freeze({ V1: o("ReStoreDbVersion").cast("V1") }),
      u = {
        targetVersion: o("ReStoreDbVersion").castVersion(
          s,
          "V" + ((e = r("justknobx")._("2392")) != null ? e : 0),
        ),
        versions: { V1: o("LSDbV1").LSDbV1 },
        legacyVersions: {},
        versionOrder: ["V1"],
      };
    ((l.LSDbVersion = s), (l.Versions = u));
  },
  98,
);
