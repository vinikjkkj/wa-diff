__d(
  "WAWebPollNameHashUtils",
  ["WACryptoSha256", "WALogger"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e) {
      var t = await o("WACryptoSha256").sha256(new TextEncoder().encode(e));
      return new Uint8Array(t);
    }
    async function u(t) {
      try {
        return await s(t);
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[polls/tc] failed to compute poll name hash",
                ])),
            )
            .sendLogs("poll-name-hash-compute-failed"),
          null
        );
      }
    }
    ((l.computePollNameHash = s), (l.tryComputePollNameHash = u));
  },
  98,
);
