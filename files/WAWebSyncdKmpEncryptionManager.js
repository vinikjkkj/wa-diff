__d(
  "WAWebSyncdKmpEncryptionManager",
  [
    "WAArrayBufferUtils",
    "WALogger",
    "WAWebKmpSyncdCryptoProvider",
    "WAWebKmpSyncdDerivedKeysProvider",
    "WAWebKmpSyncdProtobufEncoder",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdError",
    "WAWebSyncdKmpConversion",
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
      p = new (o(
        "wa-kmp-syncd-engine-crypto-api",
      ).JsKmpSyncdMutationDataFactoryImpl)({
        createInternal: function (t, n, r, a) {
          return o(
            "WAWebSyncdKmpConversion",
          ).toKmpSyncdMutationDataForDecryption(t, n, r, a);
        },
      }),
      _ = new (o("wa-kmp-syncd-engine-crypto-api").KmpSyncdEncryptionManager)(
        r("WAWebKmpSyncdDerivedKeysProvider"),
        p,
        r("WAWebKmpSyncdCryptoProvider"),
        r("WAWebKmpSyncdProtobufEncoder"),
      );
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          try {
            var a = o("WAWebSyncdKmpConversion").toKmpSyncdCryptoMutationKey(
                n,
                r,
              ),
              i = o(
                "WAWebSyncdKmpConversion",
              ).toKmpSyncdMutationDataForEncryption(n, t),
              l = _.encrypt(a, i),
              u = yield l.toPromise();
            return {
              indexMac: u.indexHash.buffer,
              indexAndValueCipherText: u.indexAndValueCipherText.buffer,
            };
          } catch (n) {
            throw (
              o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                  .ENCRYPTION_FAILED,
                { collection: t.collection },
              ),
              n instanceof Error
                ? (o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd:kmp: encryption failed",
                        ])),
                    )
                    .catching(n),
                  new (o("WAWebSyncdError").SyncdFatalError)(n.message))
                : (o("WALogger").ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd:kmp: encryption failed",
                      ])),
                  ),
                  n)
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n, r, o) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            try {
              var l,
                s = o("WAWebSyncdKmpConversion").toKmpSyncdEncryptedData(
                  t,
                  a,
                  i,
                ),
                d = yield _.decrypt(
                  o("WAWebSyncdKmpConversion").toKmpSyncdCryptoMutationKey(
                    t,
                    n,
                  ),
                  s,
                ).toPromise(),
                m = d.mutation,
                p = d.plaintext,
                f = r("nullthrows")(
                  m.mutationMac,
                  "SyncdMutation decryption returned a null mutationMac, this should not happen",
                ).buffer,
                g = o("WAArrayBufferUtils").stringToArrayBuffer(m.index);
              return {
                version: m.version,
                index: g,
                indexMac: s.indexHash.buffer,
                value: (l = m.value) == null ? void 0 : l.buffer,
                valueMac: f,
                plaintext: p.buffer,
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
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "syncd:kmp: decryption failed",
                          ])),
                      )
                      .catching(t),
                    new (o("WAWebSyncdError").SyncdFatalError)(t.message))
                  : (o("WALogger").ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd:kmp: decryption failed",
                        ])),
                    ),
                    t)
              );
            }
          },
        )),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n, r, o) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd:kmp: generating patch mac",
                ])),
            );
            var i = yield _.calculatePatchMac(
              a,
              o("wa-kmp-syncd-engine-crypto-api").KmpLong.fromDecimalString(
                r.toString(),
              ),
              o("WAWebSyncdKmpConversion").toKmpSyncdCryptoMutationKeyData(e),
              new Int8Array(o("WAWebSyncdCryptoUtils").combine(n)),
              new Int8Array(t),
            ).toPromise();
            return i.buffer;
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n, r) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd:kmp: generating snapshot mac",
                ])),
            );
            var a = yield _.calculateSnapshotMac(
              r,
              o("wa-kmp-syncd-engine-crypto-api").KmpLong.fromDecimalString(
                n.toString(),
              ),
              new Int8Array(t),
              o("WAWebSyncdKmpConversion").toKmpSyncdCryptoMutationKeyData(e),
            ).toPromise();
            return a.buffer;
          },
        )),
        S.apply(this, arguments)
      );
    }
    var R = {
      encryptMutation: f,
      decryptMutation: h,
      generatePatchMac: C,
      generateSnapshotMac: v,
    };
    l.WASyncdKmpEncryptionManager = R;
  },
  98,
);
