__d(
  "SidneeAbrConfigUtils",
  [
    "MetaConfig",
    "cr:11245",
    "cr:11338",
    "cr:11403",
    "cr:19096",
    "cr:824",
    "cr:9415",
    "gkx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        r("MetaConfig")._("143") ||
        r("MetaConfig")._("234") ||
        r("gkx")("17337") ||
        r("gkx")("17440") ||
        r("MetaConfig")._("524") ||
        r("MetaConfig")._("533")
      );
    }
    function s() {
      return n("cr:11338")
        ? n("cr:11338").createSidneeAbrConfig()
        : n("cr:11245")
          ? n("cr:11245").createSidneeAbrConfig()
          : n("cr:11403")
            ? n("cr:11403").createSidneeAbrConfig()
            : n("cr:9415")
              ? n("cr:9415").createSidneeAbrConfig()
              : n("cr:824")
                ? n("cr:824").createSidneeAbrConfig()
                : r("nullthrows")(n("cr:19096")).createSidneeAbrConfig();
    }
    ((l.shouldUseSidneeAbr = e), (l.createSidneeAbrConfig = s));
  },
  98,
);
