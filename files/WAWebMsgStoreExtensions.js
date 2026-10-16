__d(
  "WAWebMsgStoreExtensions",
  [
    "WAWebPollNameHashAppend",
    "WAWebPollNameHashSeed",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebPollNameHashSeed").maybeSeedInitialPollNameHashes(e);
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebPollNameHashAppend").appendPollNameHashesForEdits(e);
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return (delete e.pollNameHashHistory, e);
    }
    ((l.prepareNewMsgsForStore = e),
      (l.handleStoredMessageEdits = s),
      (l.omitColumnsPreservedAcrossEdits = c));
  },
  98,
);
