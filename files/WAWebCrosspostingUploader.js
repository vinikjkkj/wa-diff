__d(
  "WAWebCrosspostingUploader",
  [
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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
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
    async function s(e) {
      var t = e.caption,
        n = e.destination,
        r = e.destinationIdentities,
        a = e.keyPair,
        i = e.purposeEncryptionParams,
        l = e.sessionId,
        s = e.statusBlob,
        c = e.statusKeys,
        d = e.uniqueId,
        m = c.map(function (e) {
          return e.toString();
        }),
        p = await o("WAWebSchemaMessage").getMessageTable().bulkGet(m, !1),
        _ = p
          .filter(function (e) {
            return e != null;
          })
          .map(function (e) {
            return o("WAWebDBMessageSerialization").messageFromDbRow(e);
          });
      await Promise.all(
        _.map(function (e) {
          return u({
            status: e,
            purposeEncryptionParams: i,
            statusBlob: s,
            keyPair: a,
            destination: n,
            uniqueId: d,
            destinationIdentities: r,
            sessionId: l,
            caption: t,
          });
        }),
      );
    }
    async function u(t) {
      var n = t.caption,
        a = t.destination,
        i = t.destinationIdentities,
        l = t.keyPair,
        s = t.purposeEncryptionParams,
        u = t.sessionId,
        c = t.status,
        d = t.statusBlob,
        m = t.uniqueId;
      try {
        var p = await o("WAWebCrosspostingCryptoHelper").forwardSecrecyEncrypt({
            plaintext: new Uint8Array(d),
            nonce: s.purposeDummyNonce,
            serverPublicIK: s.purposePublicIK,
            serverPublicEK: s.purposePublicEK,
            clientPublicKey: new Uint8Array(l.publicKey),
            clientPrivateKey: new Uint8Array(l.privateKey),
            outputLength: o("WAWebCrossposting.flow").SHARED_KEY_LENGTH,
          }),
          _ = await o("WAMediaCalculateFilehash").calculateFilehash(p),
          f = new AbortController(),
          g = f.signal,
          h = {
            file: p.buffer,
            generateThumbnailOnServer: !1,
            hash: _,
            isViewOnce: !1,
            signal: g,
            token: null,
            type: e(c.type),
            uploadOrigin: o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE
              .STATUS_USER,
          },
          y = await r("WAWebUploadManager").unencryptedUpload(h);
        (await o("WAWebCrosspostingDBOperations").updateDirectUrlPath({
          directUrlPath: y.directPath,
          statusMessageId: c.id.toString(),
          crosspostingDestination: o(
            "WAWebEligibilityCheckHelper",
          ).translateWaffleXANToCrosspostingDestination(a),
        }),
          await o("WAWebCrosspostingHelper").prepareCrosspostingIQ(
            a,
            i,
            y.directPath,
            m,
            c,
            u,
            s,
            l,
            n,
          ));
      } catch (e) {
        throw (
          await o(
            "WAWebCrosspostingDBOperations",
          ).updateCrosspostingUniqueIdWithState({
            uniqueId: m,
            statusMessageId: c.id.toString(),
            crosspostingDestination: o(
              "WAWebEligibilityCheckHelper",
            ).translateWaffleXANToCrosspostingDestination(a),
            crosspostingState: o("WAWebCrossposting.flow").CrosspostingState
              .HARD_FAILURE,
          }),
          e
        );
      }
    }
    l.prepareUploads = s;
  },
  98,
);
