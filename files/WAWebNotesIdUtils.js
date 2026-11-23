__d(
  "WAWebNotesIdUtils",
  ["WACryptoSha256"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      return o("WACryptoSha256").sha256Str(e);
    }
    l.generateNoteId = e;
  },
  98,
);
