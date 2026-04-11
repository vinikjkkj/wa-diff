__d(
  "WAWebVoipValidateAndDecryptEnc",
  [
    "invariant",
    "WACryptoPkcs7",
    "WAFilteredCatch",
    "WAJids",
    "WALogger",
    "WANullthrows",
    "WAWebAdvSignatureApi",
    "WAWebBackendJobs.flow",
    "WAWebHandleMsgTypes.flow",
    "WAWebProtobufsE2E.pb",
    "WAWebSignal",
    "WAWebSignalCommonErrors",
    "WAWebSignalProtocolStore",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u, c, d, m;
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.maybeChild("enc"),
            a = t.peer_jid;
          if (!n || !a)
            return {
              result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS,
            };
          var i = n.maybeAttrInt("count");
          (i == null || Number.isNaN(i)) && (i = 0);
          var l = {
            e2eType: n.attrEnumValues(
              "type",
              o("WAWebBackendJobs.flow").CiphertextType.members(),
            ),
            ciphertext: new Uint8Array(n.contentBytes()),
            retryCount: i,
            encMediaType: null,
            hideFail: !1,
          };
          try {
            var s = e.maybeChild("device-identity");
            if (
              a.device != null &&
              a.device !== o("WAJids").DEFAULT_DEVICE_ID &&
              l.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
              !s
            )
              return (
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip:validateAndDecryptEnc: need device-identity for pkmsg",
                    ])),
                ),
                {
                  result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                    .PARSE_ERROR,
                }
              );
            if (s) {
              var u = new Uint8Array(s.contentBytes()),
                p = yield o("WAWebAdvSignatureApi").validateADVwithEncs(a, u, [
                  l,
                ]);
              if (!p)
                return {
                  result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                    .PARSE_ERROR,
                };
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip:validateAndDecryptEnc: ADV device-identity validated +",
                  ])),
              );
            }
            var _ = yield f(l, a),
              g = _.decrypted,
              h = _.result;
            return (
              h === o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS &&
                (n.unsafeSetNodeContent(new Uint8Array(r("WANullthrows")(g))),
                yield o("WAWebSignalProtocolStore")
                  .getSignalProtocolStore()
                  .flushBufferToDiskIfNotMemOnlyMode()),
              { result: h, retryCount: i }
            );
          } catch (e) {
            return (
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip:validateAndDecryptEnc error",
                  ])),
              ),
              {
                result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                  .PARSE_ERROR,
              }
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(t, n) {
      return (
        t.e2eType !== o("WAWebBackendJobs.flow").CiphertextType.Skmsg ||
          s(0, 56543),
        o("WAWebSignal")
          .Cipher.decryptSignalProto(n, t.e2eType, t.ciphertext)
          .then(function (e) {
            var t,
              n = o("WACryptoPkcs7").unpadPkcs7(new Uint8Array(e)),
              r = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufsE2E.pb").MessageSpec,
                n,
              );
            return (t = r.call) != null && t.callKey
              ? {
                  result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                    .SUCCESS,
                  decrypted: r.call.callKey,
                }
              : {
                  result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                    .PARSE_ERROR,
                };
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebSignalCommonErrors").SignalDecryptionError,
              function (t) {
                return (
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip:decryptSignalProto failed with decryption error; ",
                        "",
                      ])),
                    t,
                  ),
                  {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                      .RETRY,
                  }
                );
              },
            ),
          )
          .catch(function (e) {
            return (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip:decryptSignalProto failed with unexpected error; ",
                    "",
                  ])),
                e,
              ),
              {
                result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                  .PARSE_ERROR,
              }
            );
          })
      );
    }
    l.validateAndDecryptEnc = p;
  },
  98,
);
