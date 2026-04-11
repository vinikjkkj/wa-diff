__d(
  "SidneeAbrConfigUtils",
  [
    "MetaConfig",
    "SidneeAbrConfigDefault",
    "cr:11245",
    "cr:11338",
    "cr:11403",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        r("MetaConfig")._("143") ||
        r("MetaConfig")._("234") ||
        r("gkx")("17337") ||
        r("gkx")("17440")
      );
    }
    function s() {
      return n("cr:11338")
        ? n("cr:11338").createSidneeAbrConfig()
        : n("cr:11245")
          ? n("cr:11245").createSidneeAbrConfig()
          : n("cr:11403")
            ? n("cr:11403").createSidneeAbrConfig()
            : o("SidneeAbrConfigDefault").createSidneeAbrConfig();
    }
    ((l.shouldUseSidneeAbr = e), (l.createSidneeAbrConfig = s));
  },
  98,
);
