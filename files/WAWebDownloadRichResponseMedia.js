__d(
  "WAWebDownloadRichResponseMedia",
  ["WAWebFetchRichResponseMediaBytes", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          yield o(
            "WAWebFetchRichResponseMediaBytes",
          ).fetchRichResponseMediaBytes(e, t, n);
        })),
        s.apply(this, arguments)
      );
    }
    l.downloadRichResponseMedia = e;
  },
  98,
);
