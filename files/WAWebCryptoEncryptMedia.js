__d(
  "WAWebCryptoEncryptMedia",
  [
    "WACryptoHmac",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WAWebCryptoEncryptMediaUsingDependencies",
    "WAWebMediaWorkerProxy",
    "WAWebPREGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {
        computeHmac: async function (n) {
          var t = n.data,
            r = n.length,
            a = n.macKey,
            i = n.plaintextByteLength;
          if (o("WAWebPREGatingUtils").shouldUseWorkerForFileSizeBytes(i)) {
            var l = await o("WAWebMediaWorkerProxy").hmacSha256InWorker(
                a,
                t,
                r,
              ),
              s = l.result,
              u = l.transferredBuffer,
              c = l.transferredKeyBuffer;
            return s.success
              ? { hmac: s.value.hmac, macKey: c, data: u }
              : (o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "hmacSha256InWorker: size:",
                        ", failed: ",
                        "",
                      ])),
                    u.byteLength,
                    s.error,
                  )
                  .sendLogs("worker-hmac-sha256-failed"),
                {
                  hmac: await o("WACryptoHmac").hmacSha256(c, u, r),
                  macKey: c,
                  data: u,
                });
          }
          return {
            hmac: await o("WACryptoHmac").hmacSha256(a, t, r),
            macKey: a,
            data: t,
          };
        },
        computeFilehash: async function (t) {
          var e = t.ciphertextHmac,
            n = t.plaintextByteLength;
          if (o("WAWebPREGatingUtils").shouldUseWorkerForFileSizeBytes(n)) {
            var r = await o("WAWebMediaWorkerProxy").calculateFilehashInWorker(
                e,
              ),
              a = r.result,
              i = r.transferredBuffer;
            return a.success
              ? { hash: a.value.filehash, ciphertextHmac: i }
              : (o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "calculateFilehashInWorker: size:",
                        " failed: ",
                        "",
                      ])),
                    i.byteLength,
                    a.error,
                  )
                  .sendLogs("worker-calculate-filehash-error"),
                {
                  hash: await o("WAMediaCalculateFilehash").calculateFilehash(
                    i,
                  ),
                  ciphertextHmac: i,
                });
          }
          return {
            hash: await o("WAMediaCalculateFilehash").calculateFilehash(e),
            ciphertextHmac: e,
          };
        },
      },
      c = o(
        "WAWebCryptoEncryptMediaUsingDependencies",
      ).createEncryptMediaUsingDependencies(u),
      d = c;
    l.default = d;
  },
  98,
);
