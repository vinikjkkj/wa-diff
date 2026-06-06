__d(
  "WAWebGalaxyFlowsUnifiedEncryptionVerifier",
  [
    "WABase64",
    "WAWebCryptoCurve25519",
    "WAWebCryptoCurve25519VerifySignature",
    "WAWebGalaxyFlowsError",
    "WAWebGalaxyFlowsIdentityFetcher",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.arePublicKeyWithSignatureValid = async function (t, n, r, o) {
            var e = await this.$1(t, n, r);
            e ? o.onComplete(!0) : await this.$2(t, n, r, o);
          }),
          (t.$2 = async function (t, n, r, a) {
            var e = this;
            return new Promise(function (i, l) {
              o("WAWebGalaxyFlowsIdentityFetcher")
                .GalaxyFlowsIdentityFetcher.fetchIdentityFor(t, {
                  onComplete: async function () {
                    try {
                      (await e.$3(t, n, r, a), i());
                    } catch (e) {
                      l(e);
                    }
                  },
                })
                .catch(l);
            });
          }),
          (t.$3 = async function (t, n, r, o) {
            var e = await this.$1(t, n, r);
            try {
              o.onComplete(e);
            } catch (e) {
              throw e;
            }
          }),
          (t.$1 = async function (t, n, r) {
            if (n == null || r == null) return !1;
            try {
              var e = await o("WAWebSignalProtocolStore")
                .getPersistSignalProtocolStore()
                .loadIdentityKey(
                  o("WAWebSignalCommonUtils").createSignalAddress(t).toString(),
                );
              if (e == null)
                throw new (o("WAWebGalaxyFlowsError").WaeGalaxyFlowError)(
                  o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors
                    .MISSING_IDENTITY_KEY,
                );
              var a = o("WAWebCryptoCurve25519").toCurveKeyPubKey(
                  o("WAWebSignalCommonUtils").strToBuffer(e),
                ),
                i = new Uint8Array(a),
                l = new Uint8Array(o("WABase64").decodeB64(n)),
                s = new Uint8Array(o("WABase64").decodeB64(r));
              return o("WAWebCryptoCurve25519VerifySignature").verifySignature(
                i,
                l,
                s,
              );
            } catch (e) {
              throw e instanceof
                o("WAWebGalaxyFlowsError").WaeGalaxyFlowError &&
                e.name ===
                  o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors
                    .MISSING_IDENTITY_KEY
                ? e
                : new (o("WAWebGalaxyFlowsError").WaeGalaxyFlowError)(
                    o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors
                      .PUBLIC_KEY_SINGATURE_VERIFICATION_EXCEPTION,
                  );
            }
          }),
          e
        );
      })(),
      s = new e();
    l.UnifiedEncryptionVerifier = s;
  },
  98,
);
