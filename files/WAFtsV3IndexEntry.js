__d(
  "WAFtsV3IndexEntry",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r) {
      return { id: e, chatId: t, timestamp: n, prefixes: r };
    }
    function l(e, t, n, r, o) {
      return { ftsRowId: e, id: t, chatId: n, timestamp: r, prefixes: o };
    }
    ((i.buildEntry = e), (i.buildDBEntry = l));
  },
  66,
);
