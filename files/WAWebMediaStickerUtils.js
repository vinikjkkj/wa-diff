__d(
  "WAWebMediaStickerUtils",
  [
    "WALogger",
    "WAWebMediaInMemoryBlobCache",
    "WAWebNonMessageDataRequestMediaHandlingUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebSendNonMessageDataRequest",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 3;
    async function m(e) {
      var t = e.filter(function (e) {
        var t,
          n =
            (t = o(
              "WAWebNonMessageDataRequestMediaHandlingUtils",
            ).mediaReuploadRequestCountMap.get(e.filehash)) != null
              ? t
              : 0;
        return (
          n <
          o("WAWebNonMessageDataRequestMediaHandlingUtils")
            .MEDIA_REUPLOAD_REQUEST_LIMIT
        );
      });
      await o("WAWebSendNonMessageDataRequest").sendPeerDataOperationRequest(
        o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .UPLOAD_STICKER,
        {
          fileSha256Arr: t.map(function (e) {
            return e.filehash;
          }),
        },
      );
    }
    function p(e) {
      var t = e.map(function (e) {
        return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(
          e.filehash,
        )
          ? Promise.resolve()
          : e.downloadMedia(!1);
      });
      return Promise.allSettled(t);
    }
    async function _(t) {
      var n = t.filterStickers,
        r = t.isAvatarStickers,
        a = t.onChange,
        i = t.onDownloadEnd,
        l = t.onDownloadStart,
        _ = t.setStickerReuploadRetryCount,
        f = t.setStickersDownloaded,
        g = t.stickerReuploadRetryCount,
        h = t.stickersArr,
        y = h.filter(function (e) {
          return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(
            e.filehash,
          );
        });
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[sticker-dl] pre-dl cached=",
            "",
          ])),
        y.length,
      ),
        f(n != null ? n(y, { isAvatarStickers: r }) : y),
        l == null || l(),
        await p(h).then(function () {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[sticker-dl] done",
              ])),
          );
          var e = [],
            t = [];
          (h.forEach(function (n) {
            o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(
              n.filehash,
            )
              ? e.push(n)
              : t.push(n);
          }),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[sticker-dl] post-dl cached=",
                  "",
                ])),
              e.length,
            ),
            f(n != null ? n(e, { isAvatarStickers: r }) : e),
            a == null || a(),
            g < d &&
              t.length > 0 &&
              (_(g + 1),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[sticker-dl] failed, need RDU=",
                    "",
                  ])),
                t.length,
              ),
              m(t)));
        }),
        i == null || i());
    }
    ((l.requestStickerReupload = m),
      (l.handleStickerDownloadInStickerPanel = _));
  },
  98,
);
