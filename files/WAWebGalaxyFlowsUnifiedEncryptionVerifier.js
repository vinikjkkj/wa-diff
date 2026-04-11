__d(
  "WAWebGalaxyFlowsUnifiedEncryptionVerifier",
  [
    "Promise",
    "WABase64",
    "WAWebCryptoCurve25519",
    "WAWebCryptoCurve25519VerifySignature",
    "WAWebGalaxyFlowsError",
    "WAWebGalaxyFlowsIdentityFetcher",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {}
        var r = t.prototype;
        return (
          (r.arePublicKeyWithSignatureValid = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r) {
                var o = yield this.$1(e, t, n);
                o ? r.onComplete(!0) : yield this.$2(e, t, n, r);
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$2 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, r, a, i) {
                var l = this;
                return new (e || (e = n("Promise")))(function (e, s) {
                  o("WAWebGalaxyFlowsIdentityFetcher")
                    .GalaxyFlowsIdentityFetcher.fetchIdentityFor(t, {
                      onComplete: (function () {
                        var o = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* () {
                            try {
                              (yield l.$3(t, r, a, i), e());
                            } catch (e) {
                              s(e);
                            }
                          },
                        );
                        function u() {
                          return o.apply(this, arguments);
                        }
                        return u;
                      })(),
                    })
                    .catch(s);
                });
              },
            );
            function r(e, n, r, o) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (r.$3 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r) {
                var o = yield this.$1(e, t, n);
                try {
                  r.onComplete(o);
                } catch (e) {
                  throw e;
                }
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$1 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                if (t == null || n == null) return !1;
                try {
                  var r = yield o("WAWebSignalProtocolStore")
                    .getPersistSignalProtocolStore()
                    .loadIdentityKey(
                      o("WAWebSignalCommonUtils")
                        .createSignalAddress(e)
                        .toString(),
                    );
                  if (r == null)
                    throw new (o("WAWebGalaxyFlowsError").WaeGalaxyFlowError)(
                      o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors
                        .MISSING_IDENTITY_KEY,
                    );
                  var a = o("WAWebCryptoCurve25519").toCurveKeyPubKey(
                      o("WAWebSignalCommonUtils").strToBuffer(r),
                    ),
                    i = new Uint8Array(a),
                    l = new Uint8Array(o("WABase64").decodeB64(t)),
                    s = new Uint8Array(o("WABase64").decodeB64(n));
                  return o(
                    "WAWebCryptoCurve25519VerifySignature",
                  ).verifySignature(i, l, s);
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
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })(),
      u = new s();
    l.UnifiedEncryptionVerifier = u;
  },
  98,
);
