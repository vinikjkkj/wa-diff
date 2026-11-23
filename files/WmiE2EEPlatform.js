__d(
  "WmiE2EEPlatform",
  ["MpsTypes", "WAGetPlatformFromStanzaId"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s(
        o("WAGetPlatformFromStanzaId").getPlatformFromStanzaId(
          o("MpsTypes").messageIdToStanzaId(e),
        ),
      );
    }
    function s(e) {
      if (e === "web" || e === "mobile") return e;
    }
    l.getE2EEPlatformFromMessageId = e;
  },
  98,
);
