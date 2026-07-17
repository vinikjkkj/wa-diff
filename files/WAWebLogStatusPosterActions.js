__d(
  "WAWebLogStatusPosterActions",
  [
    "WAWebWamEnumStatusContentSource",
    "WAWebWamEnumStatusContentType",
    "WAWebWamEnumStatusCreationEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = new Uint32Array(2);
      return (
        self.crypto.getRandomValues(e),
        Math.floor(e[0] / 2048) * 4294967296 + e[1]
      );
    }
    ((l.STATUS_CONTENT_SOURCE = o(
      "WAWebWamEnumStatusContentSource",
    ).STATUS_CONTENT_SOURCE),
      (l.STATUS_CONTENT_TYPE = o(
        "WAWebWamEnumStatusContentType",
      ).STATUS_CONTENT_TYPE),
      (l.STATUS_CREATION_ENTRY_POINT = o(
        "WAWebWamEnumStatusCreationEntryPoint",
      ).STATUS_CREATION_ENTRY_POINT),
      (l.createStatusPostingSessionId = e));
  },
  98,
);
