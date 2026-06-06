__d(
  "WAWebCrosspostingUploader",
  [
    "Promise",
    "WAMediaCalculateFilehash",
    "WAWebCrossposting.flow",
    "WAWebCrosspostingCryptoHelper",
    "WAWebCrosspostingDBOperations",
    "WAWebCrosspostingHelper",
    "WAWebDBMessageSerialization",
    "WAWebEligibilityCheckHelper",
    "WAWebMmsMediaTypes",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebUploadManager",
    "WAWebWamEnumUploadOriginType",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      switch (e) {
        case o("WAWebMsgType").MSG_TYPE.IMAGE:
        case o("WAWebMsgType").MSG_TYPE.CHAT:
          return o("WAWebMmsMediaTypes").MEDIA_TYPES.WAFFLE_IMAGE;
        case o("WAWebMsgType").MSG_TYPE.VIDEO:
          return o("WAWebMmsMediaTypes").MEDIA_TYPES.WAFFLE_VIDEO;
        default:
          throw r("err")("Unsupported message type for crossposting: " + e);
      }
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.caption,
            a = t.destination,
            i = t.destinationIdentities,
            l = t.keyPair,
            s = t.purposeEncryptionParams,
            u = t.sessionId,
            c = t.statusBlob,
            m = t.statusKeys,
            p = t.uniqueId,
            _ = m.map(function (e) {
              return e.toString();
            }),
            f = yield o("WAWebSchemaMessage").getMessageTable().bulkGet(_, !1),
            g = f
              .filter(function (e) {
                return e != null;
              })
              .map(function (e) {
                return o("WAWebDBMessageSerialization").messageFromDbRow(e);
              });
          yield (e || (e = n("Promise"))).all(
            g.map(function (e) {
              return d({
                status: e,
                purposeEncryptionParams: s,
                statusBlob: c,
                keyPair: l,
                destination: a,
                uniqueId: p,
                destinationIdentities: i,
                sessionId: u,
                caption: r,
              });
            }),
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.caption,
            n = e.destination,
            a = e.destinationIdentities,
            i = e.keyPair,
            l = e.purposeEncryptionParams,
            u = e.sessionId,
            c = e.status,
            d = e.statusBlob,
            m = e.uniqueId;
          try {
            var p = yield o(
                "WAWebCrosspostingCryptoHelper",
              ).forwardSecrecyEncrypt({
                plaintext: new Uint8Array(d),
                nonce: l.purposeDummyNonce,
                serverPublicIK: l.purposePublicIK,
                serverPublicEK: l.purposePublicEK,
                clientPublicKey: new Uint8Array(i.publicKey),
                clientPrivateKey: new Uint8Array(i.privateKey),
                outputLength: o("WAWebCrossposting.flow").SHARED_KEY_LENGTH,
              }),
              _ = yield o("WAMediaCalculateFilehash").calculateFilehash(p),
              f = new AbortController(),
              g = f.signal,
              h = {
                file: p.buffer,
                generateThumbnailOnServer: !1,
                hash: _,
                isViewOnce: !1,
                signal: g,
                token: null,
                type: s(c.type),
                uploadOrigin: o("WAWebWamEnumUploadOriginType")
                  .UPLOAD_ORIGIN_TYPE.STATUS_USER,
              },
              y = yield r("WAWebUploadManager").unencryptedUpload(h);
            (yield o("WAWebCrosspostingDBOperations").updateDirectUrlPath({
              directUrlPath: y.directPath,
              statusMessageId: c.id.toString(),
              crosspostingDestination: o(
                "WAWebEligibilityCheckHelper",
              ).translateWaffleXANToCrosspostingDestination(n),
            }),
              yield o("WAWebCrosspostingHelper").prepareCrosspostingIQ(
                n,
                a,
                y.directPath,
                m,
                c,
                u,
                l,
                i,
                t,
              ));
          } catch (e) {
            throw (
              yield o(
                "WAWebCrosspostingDBOperations",
              ).updateCrosspostingUniqueIdWithState({
                uniqueId: m,
                statusMessageId: c.id.toString(),
                crosspostingDestination: o(
                  "WAWebEligibilityCheckHelper",
                ).translateWaffleXANToCrosspostingDestination(n),
                crosspostingState: o("WAWebCrossposting.flow").CrosspostingState
                  .HARD_FAILURE,
              }),
              e
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.prepareUploads = u;
  },
  98,
);
