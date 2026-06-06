__d(
  "WAWebNonMessageDataRequestHandlerUploadSticker",
  [
    "Promise",
    "WABase64",
    "WALogger",
    "WANullthrows",
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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(t, n) {
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
        m = 0,
        p = 0,
        _ = new Map(),
        f = 0,
        g = 0,
        h = [],
        y = 0,
        C = [],
        b = [];
      (n.forEach(function (e) {
        e.mediaUploadResult ===
        o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType.SUCCESS
          ? i++
          : e.mediaUploadResult ===
              o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType
                .NOT_FOUND
            ? p++
            : m++;
        var t = e.stickerMessage;
        if (t == null) {
          f++;
          return;
        }
        var n = t.directPath,
          a = t.fileEncSha256,
          s = t.fileSha256,
          u = t.mediaKey,
          c = t.mediaKeyTimestamp;
        if (s == null) {
          g++;
          return;
        }
        var d = o("WABase64").encodeB64(s);
        if (
          e.mediaUploadResult !==
          o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType
            .SUCCESS
        ) {
          (h.length < 3 && h.push(e.mediaUploadResult),
            e.mediaUploadResult !==
              o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType
                .NOT_FOUND && _.set(d, r("WANullthrows")(e.mediaUploadResult)));
          return;
        }
        if (a == null || u == null) {
          y++;
          return;
        }
        l++;
        var v = o(
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
          v || S)
        ) {
          var R,
            L = v != null ? v.sticker : r("WANullthrows")(S).sticker;
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
          (v &&
            (C.length < 3 && C.push(d),
            o(
              "WAWebRecentStickerCollectionMd",
            ).RecentStickerCollectionMd.updateRecentStickerWithNewSticker(
              d,
              k,
            )),
            S &&
              (b.length < 3 && b.push(d),
              o(
                "WAWebFavoriteStickerCollection",
              ).FavoriteStickerCollection.updateFavoriteStickerWithNewSticker(
                d,
                k,
              )));
        }
      }),
        f > 0 &&
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Sticker RDU: got ",
                " null stickerMessage in results",
              ])),
            f,
          ),
        g > 0 &&
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Sticker RDU: got ",
                " null fileSha256 in results",
              ])),
            g,
          ),
        h.length > 0 &&
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "Sticker RDU: ",
                " mediaUploadResults are not success => ",
                "",
              ])),
            h.length,
            h,
          ),
        y > 0 &&
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "Sticker RDU: got ",
                " null media fields in results",
              ])),
            y,
          ),
        o("WAWebNonMessageDataRequestMediaHandlingUtils").insertResponseError(
          _,
          o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .UPLOAD_STICKER,
        ),
        o(
          "WAWebNonMessageDataRequestLoggingUtils",
        ).logNonMessagePeerDataResponse(
          o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .UPLOAD_STICKER,
          t,
          a,
          i,
          l,
          m,
          p,
        ));
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = t.length,
            i = 0,
            l = 0,
            s = 0,
            u = 0,
            c = o("WATimeUtils").unixTime(),
            d = [],
            _ = t
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
            f = new Set(),
            g = 0,
            h = _.map(function (e) {
              var t = r("WANullthrows")(e == null ? void 0 : e.sticker),
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
                    f.add(t.filehash),
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
                  f.add(t.filehash),
                  {
                    kind: o("WAWebMediaMmsV4Upload").UploadMediaResultKind
                      .CANCELLATION,
                  }
                );
              var i = n.entries.getUploadEntry(!0);
              if (i instanceof o("WAWebMediaEntry").UnencryptedMediaEntry)
                return (
                  g++,
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
                mediaKeyInfo: s,
                isViewOnce: !0,
              });
            });
          g > 0 &&
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[sticker-upload] ",
                    " unexpected unencrypted entries",
                  ])),
                g,
              )
              .sendLogs("sticker-upload-unexpected-unencrypted-entry");
          for (
            var y = yield (p || (p = n("Promise"))).all(h),
              C = new Map(),
              b = 0;
            b < y.length;
            b++
          ) {
            var v,
              S,
              R = y[b],
              L = R.kind,
              E = R.mediaEntry,
              k = r("WANullthrows")(_[b]),
              I = r("WANullthrows")(k == null ? void 0 : k.sticker);
            if (
              L !== o("WAWebMediaMmsV4Upload").UploadMediaResultKind.SUCCESS ||
              E == null
            ) {
              (s++,
                d.push({
                  mediaUploadResult: o("WAWebProtobufsMmsRetry.pb")
                    .MediaRetryNotification$ResultType.GENERAL_ERROR,
                  stickerMessage: {
                    fileSha256: o("WABase64").decodeB64(I.filehash),
                  },
                }),
                f.has(I.filehash) || C.set(I.filehash, L));
              continue;
            }
            if ((i++, !f.has(I.filehash))) {
              var T;
              if ((T = I.mediaObject) != null && T.entries.entries) {
                var D;
                (D = I.mediaObject) == null ||
                  (D = D.entries) == null ||
                  D.clearEntries();
              }
              var x = new (o("WAWebStickerModel").StickerModel)({
                id: I.filehash,
                directPath: E.directPath,
                filehash: I.filehash,
                encFilehash: E.encFilehash,
                mediaKey: E.mediaKey,
                mediaKeyTimestamp: E.mediaKeyTimestamp,
                width: I.width,
                height: I.height,
                size: I.size,
                mimetype: I.mimetype,
                isAvatar: I.isAvatar,
                type: I.type,
                index: 0,
              });
              (o(
                "WAWebFavoriteStickerCollection",
              ).FavoriteStickerCollection.updateFavoriteStickerWithNewSticker(
                I.filehash,
                x,
              ),
                C.set(I.filehash, L));
            }
            d.push({
              mediaUploadResult: o("WAWebProtobufsMmsRetry.pb")
                .MediaRetryNotification$ResultType.SUCCESS,
              stickerMessage: {
                fileSha256: o("WABase64").decodeB64(I.filehash),
                fileEncSha256: o("WABase64").decodeB64(
                  (v = E.encFilehash) != null ? v : "",
                ),
                mediaKey: o("WABase64").decodeB64(E.mediaKey),
                mimetype: I.mimetype,
                height: I.height,
                width: I.width,
                directPath: (S = E.directPath) != null ? S : "",
                mediaKeyTimestamp: E.mediaKeyTimestamp,
              },
            });
          }
          (o(
            "WAWebSendNonMessageDataRequestResponse",
          ).sendPeerDataOperationRequestResponseMessage(
            e,
            o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .UPLOAD_STICKER,
            d,
          ),
            o(
              "WAWebNonMessageDataRequestMediaHandlingUtils",
            ).insertMediaUploadResult(C, c),
            o("WAWebNonMessageDataRequestLoggingUtils").logMediaUpload(
              o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                .UPLOAD_STICKER,
              e,
              a,
              i,
              l,
              s,
              u,
            ));
        })),
        g.apply(this, arguments)
      );
    }
    ((l.handleUploadStickerPeerDataOperationRequestResponse = _),
      (l.handleUploadStickerPeerDataOperationRequest = f));
  },
  98,
);
