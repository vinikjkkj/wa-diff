__d(
  "WAWebLabyrinthEncodeEpochAnonId",
  ["WABase64"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WABase64").encodeB64(new TextEncoder().encode(String(e)));
    }
    l.encodeLabyrinthEpochAnonId = e;
  },
  98,
);
