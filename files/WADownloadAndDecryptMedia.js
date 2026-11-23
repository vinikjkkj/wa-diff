__d(
  "WADownloadAndDecryptMedia",
  ["WADecryptMedia", "WADownloadCiphertext", "WAResultOrError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = e.abortSignal,
        n = e.directPath,
        r = e.eventFlow,
        a = e.fileEncSha256,
        i = e.mediaKey,
        l = e.mediaTypeDetails,
        s = e.onCiphertext,
        u = e.plaintextHash,
        c = await o("WADownloadCiphertext").cachedDownloadCiphertext({
          abortSignal: t,
          mediaTypeDetails: l,
          fileEncSha256: a,
          directPath: n,
          eventFlow: r,
          plaintextHash: u,
        });
      if (c.success !== !0) return c;
      r.addPoint("decrypt_media_start");
      var d = await o("WADecryptMedia")
        .decryptMedia({
          mediaKey: i,
          mediaTypeDetails: l,
          plaintextHash: u,
          ciphertextHmac: c.value,
        })
        .finally(function () {
          return r.addPoint("decrypt_media_end");
        });
      return d.success !== !0
        ? d
        : (s == null ||
            s({
              ciphertext: c.value,
              mediaKey: i,
              mediaTypeDetails: l,
              plaintextHash: u,
            }),
          d.value.alternativeHmacSaltUsed != null &&
            r.addAnnotations({
              string: {
                alternativeHmacSaltUsed: d.value.alternativeHmacSaltUsed,
              },
            }),
          o("WAResultOrError").makeResult(d.value.plaintext));
    }
    l.downloadAndDecryptMedia = e;
  },
  98,
);
