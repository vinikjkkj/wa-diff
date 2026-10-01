__d(
  "WAWebNonMessageDataRequestHandlerUploadSticker",
  [
    "Promise",
    "WABase64",
    "WALogger",
    "WATimeUtils",
    "WAWebCryptoRandomMediaKey",
    "WAWebFavoriteStickerCollection",
    "WAWebMediaEntry",
    "WAWebMediaMmsV4Upload",
    "WAWebNonMessageDataRequestLoggingUtils",
    "WAWebNonMessageDataRequestMediaHandlingUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsMmsRetry.pb",
    "WAWebRecentStickerCollectionMd",
    "WAWebSendNonMessageDataRequestResponse",
    "WAWebStickerModel",
    "WAWebWamEnumUploadOriginType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g(t, n) {
      if (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[Sticker RDU] reupload response results len=",
              "",
            ])),
          n.length,
        ),
        n.length === 0)
      ) {
        o(
          "WAWebNonMessageDataRequestLoggingUtils",
        ).logNonMessagePeerDataResponse(
          o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .UPLOAD_STICKER,
          t,
          0,
          0,
          0,
          0,
          0,
        );
        return;
      }
      var a = n.length,
        i = 0,
        l = 0,
        p = 0,
        _ = 0,
        f = new Map(),
        g = 0,
        h = 0,
        y = [],
        C = 0,
        b = [],
        v = [];
      (n.forEach(function (e) {
        e.mediaUploadResult ===
        o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType.SUCCESS
          ? i++
          : e.mediaUploadResult ===
              o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType
                .NOT_FOUND
            ? _++
            : p++;
        var t = e.stickerMessage;
        if (t == null) {
          g++;
          return;
        }
        var n = t.directPath,
          a = t.fileEncSha256,
          s = t.fileSha256,
          u = t.mediaKey,
          c = t.mediaKeyTimestamp;
        if (s == null) {
          h++;
          return;
        }
        var d = o("WABase64").encodeB64(s);
        if (
          e.mediaUploadResult !==
          o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType
            .SUCCESS
        ) {
          (y.length < 3 && y.push(e.mediaUploadResult),
            e.mediaUploadResult !==
              o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType
                .NOT_FOUND && f.set(d, r("nullthrows")(e.mediaUploadResult)));
          return;
        }
        if (a == null || u == null) {
          C++;
          return;
        }
        l++;
        var m = o(
            "WAWebRecentStickerCollectionMd",
          ).RecentStickerCollectionMd.get(d),
          S = o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.get(
            d,
          );
        if (
          (o(
            "WAWebNonMessageDataRequestMediaHandlingUtils",
          ).inFlightStickerRequests.has(d) &&
            o(
              "WAWebNonMessageDataRequestMediaHandlingUtils",
            ).inFlightStickerRequests.delete(d),
          m || S)
        ) {
          var R,
            L = m != null ? m.sticker : r("nullthrows")(S).sticker;
          if (
            n === L.directPath &&
            o("WABase64").encodeB64(a) === L.encFilehash &&
            o("WABase64").encodeB64(u) === L.mediaKey
          )
            return;
          if ((R = L.mediaObject) != null && R.entries.entries) {
            var E;
            (E = L.mediaObject) == null ||
              (E = E.entries) == null ||
              E.clearEntries();
          }
          var k = new (o("WAWebStickerModel").StickerModel)({
            id: L.filehash,
            directPath: n != null ? n : L.directPath,
            filehash: L.filehash,
            encFilehash: o("WABase64").encodeB64(a),
            mediaKey: o("WABase64").encodeB64(u),
            mediaKeyTimestamp: c != null ? Number(c) : L.mediaKeyTimestamp,
            width: L.width,
            height: L.height,
            size: L.size,
            mimetype: L.mimetype,
            type: L.type,
            isAvatar: L.isAvatar,
            index: 0,
          });
          (m &&
            (b.length < 3 && b.push(d),
            o(
              "WAWebRecentStickerCollectionMd",
            ).RecentStickerCollectionMd.updateRecentStickerWithNewSticker(
              d,
              k,
            )),
            S &&
              (v.length < 3 && v.push(d),
              o(
                "WAWebFavoriteStickerCollection",
              ).FavoriteStickerCollection.updateFavoriteStickerWithNewSticker(
                d,
                k,
              )));
        }
      }),
        g > 0 &&
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Sticker RDU: got ",
                " null stickerMessage in results",
              ])),
            g,
          ),
        h > 0 &&
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Sticker RDU: got ",
                " null fileSha256 in results",
              ])),
            h,
          ),
        y.length > 0 &&
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "Sticker RDU: ",
                " mediaUploadResults are not success => ",
                "",
              ])),
            y.length,
            y,
          ),
        C > 0 &&
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "Sticker RDU: got ",
                " null media fields in results",
              ])),
            C,
          ),
        o("WAWebNonMessageDataRequestMediaHandlingUtils")
          .insertResponseError(
            f,
            o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .UPLOAD_STICKER,
          )
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "sticker reupload response error insertion failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("sticker-reupload-response-error-insertion");
          }),
        o(
          "WAWebNonMessageDataRequestLoggingUtils",
        ).logNonMessagePeerDataResponse(
          o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .UPLOAD_STICKER,
          t,
          a,
          i,
          l,
          p,
          _,
        ));
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = t.length,
            i = 0,
            l = 0,
            s = 0,
            u = 0,
            c = o("WATimeUtils").unixTime(),
            d = [],
            m = t
              .map(function (e) {
                var t = e.fileSha256;
                if (t == null) {
                  (s++,
                    d.push({
                      mediaUploadResult: o("WAWebProtobufsMmsRetry.pb")
                        .MediaRetryNotification$ResultType.GENERAL_ERROR,
                    }));
                  return;
                }
                var n = o(
                  "WAWebFavoriteStickerCollection",
                ).FavoriteStickerCollection.get(t);
                if (n == null) {
                  (u++,
                    d.push({
                      mediaUploadResult: o("WAWebProtobufsMmsRetry.pb")
                        .MediaRetryNotification$ResultType.NOT_FOUND,
                      stickerMessage: {
                        fileSha256: o("WABase64").decodeB64(t),
                      },
                    }));
                  return;
                }
                return n;
              })
              .filter(function (e) {
                return e != null;
              }),
            g = new Set(),
            h = 0,
            y = m.map(function (e) {
              var t = r("nullthrows")(e == null ? void 0 : e.sticker),
                n = t.mediaObject;
              if (n == null)
                return {
                  kind: o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR,
                };
              if (
                o(
                  "WAWebNonMessageDataRequestMediaHandlingUtils",
                ).shouldSkipMediaUploadWithSuccess(
                  t.filehash,
                  o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                    .UPLOAD_STICKER,
                  c,
                )
              ) {
                var a = n.entries.getDownloadEntry(!0);
                if (a instanceof o("WAWebMediaEntry").EncryptedMediaEntry)
                  return (
                    l++,
                    g.add(t.filehash),
                    {
                      kind: o("WAWebMediaMmsV4Upload").UploadMediaResultKind
                        .SUCCESS,
                      mediaEntry: a,
                    }
                  );
              }
              if (
                o(
                  "WAWebNonMessageDataRequestMediaHandlingUtils",
                ).shouldSkipMediaUploadWithCancellation(
                  t.filehash,
                  o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                    .UPLOAD_STICKER,
                  c,
                )
              )
                return (
                  g.add(t.filehash),
                  {
                    kind: o("WAWebMediaMmsV4Upload").UploadMediaResultKind
                      .CANCELLATION,
                  }
                );
              var i = n.entries.getUploadEntry(!0);
              if (i instanceof o("WAWebMediaEntry").UnencryptedMediaEntry)
                return (
                  h++,
                  {
                    kind: o("WAWebMediaMmsV4Upload").UploadMediaResultKind
                      .ERROR,
                  }
                );
              var s =
                i instanceof o("WAWebMediaEntry").EncryptedMediaEntry
                  ? { key: i.mediaKey, timestamp: i.mediaKeyTimestamp }
                  : r("WAWebCryptoRandomMediaKey")();
              return o("WAWebMediaMmsV4Upload").uploadMedia({
                mimetype: t.mimetype,
                mediaObject: n,
                mediaType: "sticker",
                forwardedFromWeb: !1,
                uploadOrigin: o("WAWebWamEnumUploadOriginType")
                  .UPLOAD_ORIGIN_TYPE.STICKER_WEB,
                fileOrigin: null,
                mediaKeyInfo: s,
                isViewOnce: !0,
              });
            });
          h > 0 &&
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[sticker-upload] ",
                    " unexpected unencrypted entries",
                  ])),
                h,
              )
              .sendLogs("sticker-upload-unexpected-unencrypted-entry");
          for (
            var C = yield (f || (f = n("Promise"))).all(y),
              b = new Map(),
              v = 0;
            v < C.length;
            v++
          ) {
            var S,
              R,
              L = C[v],
              E = L.kind,
              k = L.mediaEntry,
              I = r("nullthrows")(m[v]),
              T = r("nullthrows")(I == null ? void 0 : I.sticker);
            if (
              E !== o("WAWebMediaMmsV4Upload").UploadMediaResultKind.SUCCESS ||
              k == null
            ) {
              (s++,
                d.push({
                  mediaUploadResult: o("WAWebProtobufsMmsRetry.pb")
                    .MediaRetryNotification$ResultType.GENERAL_ERROR,
                  stickerMessage: {
                    fileSha256: o("WABase64").decodeB64(T.filehash),
                  },
                }),
                g.has(T.filehash) || b.set(T.filehash, E));
              continue;
            }
            if ((i++, !g.has(T.filehash))) {
              var D;
              if ((D = T.mediaObject) != null && D.entries.entries) {
                var x;
                (x = T.mediaObject) == null ||
                  (x = x.entries) == null ||
                  x.clearEntries();
              }
              var $ = new (o("WAWebStickerModel").StickerModel)({
                id: T.filehash,
                directPath: k.directPath,
                filehash: T.filehash,
                encFilehash: k.encFilehash,
                mediaKey: k.mediaKey,
                mediaKeyTimestamp: k.mediaKeyTimestamp,
                width: T.width,
                height: T.height,
                size: T.size,
                mimetype: T.mimetype,
                isAvatar: T.isAvatar,
                type: T.type,
                index: 0,
              });
              (o(
                "WAWebFavoriteStickerCollection",
              ).FavoriteStickerCollection.updateFavoriteStickerWithNewSticker(
                T.filehash,
                $,
              ),
                b.set(T.filehash, E));
            }
            d.push({
              mediaUploadResult: o("WAWebProtobufsMmsRetry.pb")
                .MediaRetryNotification$ResultType.SUCCESS,
              stickerMessage: {
                fileSha256: o("WABase64").decodeB64(T.filehash),
                fileEncSha256: o("WABase64").decodeB64(
                  (S = k.encFilehash) != null ? S : "",
                ),
                mediaKey: o("WABase64").decodeB64(k.mediaKey),
                mimetype: T.mimetype,
                height: T.height,
                width: T.width,
                directPath: (R = k.directPath) != null ? R : "",
                mediaKeyTimestamp: k.mediaKeyTimestamp,
              },
            });
          }
          (o("WAWebSendNonMessageDataRequestResponse")
            .sendPeerDataOperationRequestResponseMessage(
              e,
              o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                .UPLOAD_STICKER,
              d,
            )
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "sticker reupload response message sending failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("sticker-reupload-response-msg-send");
            }),
            o(
              "WAWebNonMessageDataRequestMediaHandlingUtils",
            ).insertMediaUploadResult(b, c),
            o("WAWebNonMessageDataRequestLoggingUtils").logMediaUpload({
              errorCount: s,
              existingDataNoUploadCount: l,
              notFoundCount: u,
              requestCount: a,
              requestType: o("WAWebProtobufsE2E.pb")
                .Message$PeerDataOperationRequestType.UPLOAD_STICKER,
              stanzaId: e,
              successUploadCount: i,
            }));
        })),
        y.apply(this, arguments)
      );
    }
    ((l.handleUploadStickerPeerDataOperationRequestResponse = g),
      (l.handleUploadStickerPeerDataOperationRequest = h));
  },
  98,
);
