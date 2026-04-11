__d(
  "WASyncdKmpEncryptionManager",
  [
    "WAArrayBufferUtils",
    "WALogger",
    "WASyncdKmpConversion",
    "WAWebKmpSyncdCryptoProvider",
    "WAWebKmpSyncdDerivedKeysProvider",
    "WAWebKmpSyncdProtobufEncoder",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdError",
    "WAWebSyncdMetricFatalError",
    "asyncToGeneratorRuntime",
    "nullthrows",
    "wa-kmp-syncd-engine-crypto-api",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = new (o(
        "wa-kmp-syncd-engine-crypto-api",
      ).JsKmpSyncdMutationDataFactoryImpl)({
        createInternal: function (t, n, r, a) {
          return o("WASyncdKmpConversion").toKmpSyncdMutationDataForDecryption(
            t,
            n,
            r,
            a,
          );
        },
      }),
      g = new (o("wa-kmp-syncd-engine-crypto-api").KmpSyncdEncryptionManager)(
        r("WAWebKmpSyncdDerivedKeysProvider"),
        f,
        r("WAWebKmpSyncdCryptoProvider"),
        r("WAWebKmpSyncdProtobufEncoder"),
      );
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd:kmp: encrypting mutation",
              ])),
          );
          try {
            var a = o("WASyncdKmpConversion").toKmpSyncdCryptoMutationKey(n, r),
              i = o("WASyncdKmpConversion").toKmpSyncdMutationDataForEncryption(
                n,
                t,
              ),
              l = g.encrypt(a, i),
              c = yield l.toPromise();
            return {
              indexMac: c.indexHash.buffer,
              indexAndValueCipherText: c.indexAndValueCipherText.buffer,
            };
          } catch (e) {
            throw (
              o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                  .ENCRYPTION_FAILED,
                { collection: t.collection },
              ),
              e instanceof Error
                ? (o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd:kmp: encryption failed",
                        ])),
                    )
                    .catching(e),
                  new (o("WAWebSyncdError").SyncdFatalError)(e.message))
                : (o("WALogger").ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd:kmp: encryption failed",
                      ])),
                  ),
                  e)
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n, r, o) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd:kmp: decrypting mutation",
                ])),
            );
            try {
              var l,
                s = o("WASyncdKmpConversion").toKmpSyncdEncryptedData(t, a, i),
                u = yield g
                  .decrypt(
                    o("WASyncdKmpConversion").toKmpSyncdCryptoMutationKey(t, n),
                    s,
                  )
                  .toPromise(),
                p = u.mutation,
                _ = u.plaintext,
                f = r("nullthrows")(
                  p.mutationMac,
                  "SyncdMutation decryption returned a null mutationMac, this should not happen",
                ).buffer,
                h = o("WAArrayBufferUtils").stringToArrayBuffer(p.index);
              return {
                version: p.version,
                index: h,
                indexMac: s.indexHash.buffer,
                value: (l = p.value) == null ? void 0 : l.buffer,
                valueMac: f,
                plaintext: _.buffer,
              };
            } catch (t) {
              throw (
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                  o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                    .DECRYPTION_FAILED,
                  { collection: e },
                ),
                t instanceof Error
                  ? (o("WALogger")
                      .ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "syncd:kmp: decryption failed",
                          ])),
                      )
                      .catching(t),
                    new (o("WAWebSyncdError").SyncdFatalError)(t.message))
                  : (o("WALogger").ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd:kmp: decryption failed",
                        ])),
                    ),
                    t)
              );
            }
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n, r, o) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd:kmp: generating patch mac",
                ])),
            );
            var i = yield g
              .calculatePatchMac(
                a,
                o("wa-kmp-syncd-engine-crypto-api").KmpLong.fromDecimalString(
                  r.toString(),
                ),
                o("WASyncdKmpConversion").toKmpSyncdCryptoMutationKeyData(e),
                new Int8Array(o("WAWebSyncdCryptoUtils").combine(n)),
                new Int8Array(t),
              )
              .toPromise();
            return i.buffer;
          },
        )),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n, r) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd:kmp: generating snapshot mac",
                ])),
            );
            var a = yield g
              .calculateSnapshotMac(
                r,
                o("wa-kmp-syncd-engine-crypto-api").KmpLong.fromDecimalString(
                  n.toString(),
                ),
                new Int8Array(t),
                o("WASyncdKmpConversion").toKmpSyncdCryptoMutationKeyData(e),
              )
              .toPromise();
            return a.buffer;
          },
        )),
        L.apply(this, arguments)
      );
    }
    var E = {
      encryptMutation: h,
      decryptMutation: C,
      generatePatchMac: v,
      generateSnapshotMac: R,
    };
    l.WASyncdKmpEncryptionManager = E;
  },
  98,
);
