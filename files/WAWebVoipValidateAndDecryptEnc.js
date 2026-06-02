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
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u, c, d, m;
    async function p(t, n) {
      var a = t.maybeChild("enc"),
        i = n.peer_jid;
      if (!a || !i)
        return {
          result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS,
        };
      var l = a.maybeAttrInt("count");
      (l == null || Number.isNaN(l)) && (l = 0);
      var s = {
        e2eType: a.attrEnumValues(
          "type",
          o("WAWebBackendJobs.flow").CiphertextType.members(),
        ),
        ciphertext: a.contentBytes(),
        retryCount: l,
        encMediaType: null,
        hideFail: !1,
      };
      try {
        var d = t.maybeChild("device-identity");
        if (
          i.device != null &&
          i.device !== o("WAJids").DEFAULT_DEVICE_ID &&
          s.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
          !d
        )
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip:validateAndDecryptEnc: need device-identity for pkmsg",
                ])),
            ),
            {
              result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                .PARSE_ERROR,
            }
          );
        if (d) {
          var m = new Uint8Array(d.contentBytes()),
            p = await o("WAWebAdvSignatureApi").validateADVwithEncs(i, m, [s]);
          if (!p)
            return {
              result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                .PARSE_ERROR,
            };
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip:validateAndDecryptEnc: ADV device-identity validated +",
              ])),
          );
        }
        var f = await _(s, i),
          g = f.decrypted,
          h = f.result;
        return (
          h === o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS &&
            (a.unsafeSetNodeContent(new Uint8Array(r("WANullthrows")(g))),
            await o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode()),
          { result: h, retryCount: l }
        );
      } catch (e) {
        return (
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip:validateAndDecryptEnc error",
              ])),
          ),
          { result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR }
        );
      }
    }
    function _(e, t) {
      return (
        e.e2eType !== o("WAWebBackendJobs.flow").CiphertextType.Skmsg ||
          s(0, 56543),
        o("WAWebSignal")
          .Cipher.decryptSignalProto(t, e.e2eType, e.ciphertext)
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
              function (e) {
                return (
                  o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip:decryptSignalProto failed with decryption error; ",
                        "",
                      ])),
                    e,
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
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
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
