__d(
  "WAMediaManagerGetMostRecentMediaEntry",
  [
    "WAFindMostRecentMediaEntry",
    "WAMediaUtils",
    "WAResultOrError",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.fullSizePlaintextHash,
            n = e.getMediaEntries,
            r = e.mediaDownloadFlow;
          r.addPoint("get_media_entries_start");
          var a = yield n(t);
          if (a == null)
            return (
              r.addPoint("get_media_entries_fail"),
              o("WAResultOrError").makeError("missing-media-entry")
            );
          r.addPoint("get_media_entries_end");
          var i = o("WAFindMostRecentMediaEntry").findMostRecentMediaEntry(a);
          if (!i.success)
            return o("WAResultOrError").makeError("missing-media-entry");
          var l = i.value,
            s = l[0],
            u = l[1],
            c = o("WAMediaUtils").validateDecodedMediaEntryForDownload(u);
          if (!c.success) return c;
          var d = c.value;
          return o("WAResultOrError").makeResult({
            mediaEntries: a,
            msgIdOfRecentMediaEntry: s,
            recentMediaEntry: d,
          });
        })),
        s.apply(this, arguments)
      );
    }
    l.getMostRecentMediaEntry = e;
  },
  98,
);
