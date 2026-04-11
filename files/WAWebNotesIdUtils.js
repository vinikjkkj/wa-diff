__d(
  "WAWebNotesIdUtils",
  ["WACryptoSha256", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WACryptoSha256").sha256Str(e);
        })),
        s.apply(this, arguments)
      );
    }
    l.generateNoteId = e;
  },
  98,
);
