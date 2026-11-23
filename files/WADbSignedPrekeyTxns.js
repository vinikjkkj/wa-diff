__d(
  "WADbSignedPrekeyTxns",
  ["WADbMetaTxns", "WAResultOrError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = await o("WADbMetaTxns").maybeGetLastSignedPrekeyIdAndIdentity(e),
        n = t.identityPair,
        r = t.keyId;
      if (r == null)
        return n == null
          ? o("WAResultOrError").makeError(
              "missing-last-signed-prekey-id-and-registration",
            )
          : o("WAResultOrError").makeError("missing-last-signed-prekey-id");
      var a = await e.signedPrekey.get(r);
      return a == null
        ? o("WAResultOrError").makeError("missing-last-signed-prekey")
        : o("WAResultOrError").makeResult(a.encoded);
    }
    l.getLatestSignedPreKey = e;
  },
  98,
);
