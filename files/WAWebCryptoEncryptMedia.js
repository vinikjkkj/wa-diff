__d(
  "WAWebCryptoEncryptMedia",
  [
    "WACryptoHmac",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WAWebCryptoEncryptMediaUsingDependencies",
    "WAWebMediaWorkerProxy",
    "WAWebPREGatingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {
        computeHmac: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = t.data,
              r = t.length,
              a = t.macKey,
              i = t.plaintextByteLength;
            if (o("WAWebPREGatingUtils").shouldUseWorkerForFileSizeBytes(i)) {
              var l = yield o("WAWebMediaWorkerProxy").hmacSha256InWorker(
                  a,
                  n,
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
                    hmac: yield o("WACryptoHmac").hmacSha256(c, u, r),
                    macKey: c,
                    data: u,
                  });
            }
            return {
              hmac: yield o("WACryptoHmac").hmacSha256(a, n, r),
              macKey: a,
              data: n,
            };
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        computeFilehash: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.ciphertextHmac,
              n = e.plaintextByteLength;
            if (o("WAWebPREGatingUtils").shouldUseWorkerForFileSizeBytes(n)) {
              var r = yield o(
                  "WAWebMediaWorkerProxy",
                ).calculateFilehashInWorker(t),
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
                    hash: yield o("WAMediaCalculateFilehash").calculateFilehash(
                      i,
                    ),
                    ciphertextHmac: i,
                  });
            }
            return {
              hash: yield o("WAMediaCalculateFilehash").calculateFilehash(t),
              ciphertextHmac: t,
            };
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      c = o(
        "WAWebCryptoEncryptMediaUsingDependencies",
      ).createEncryptMediaUsingDependencies(u),
      d = c;
    l.default = d;
  },
  98,
);
