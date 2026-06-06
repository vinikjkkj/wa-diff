__d(
  "WAWebMediaStickerUtils",
  [
    "Promise",
    "WALogger",
    "WAWebMediaInMemoryBlobCache",
    "WAWebNonMessageDataRequestMediaHandlingUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebSendNonMessageDataRequest",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 3;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          yield o(
            "WAWebSendNonMessageDataRequest",
          ).sendPeerDataOperationRequest(
            o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .UPLOAD_STICKER,
            {
              fileSha256Arr: t.map(function (e) {
                return e.filehash;
              }),
            },
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      var t = e.map(function (e) {
        return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(
          e.filehash,
        )
          ? (d || (d = n("Promise"))).resolve()
          : e.downloadMedia(!1);
      });
      return (d || (d = n("Promise"))).allSettled(t);
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.filterStickers,
            r = t.isAvatarStickers,
            a = t.onChange,
            i = t.onDownloadEnd,
            l = t.onDownloadStart,
            d = t.setStickerReuploadRetryCount,
            _ = t.setStickersDownloaded,
            g = t.stickerReuploadRetryCount,
            h = t.stickersArr,
            y = h.filter(function (e) {
              return o(
                "WAWebMediaInMemoryBlobCache",
              ).InMemoryMediaBlobCache.has(e.filehash);
            });
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[sticker-dl] pre-dl cached=",
                "",
              ])),
            y.length,
          ),
            _(n != null ? n(y, { isAvatarStickers: r }) : y),
            l == null || l(),
            yield f(h).then(function () {
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
                _(n != null ? n(e, { isAvatarStickers: r }) : e),
                a == null || a(),
                g < m &&
                  t.length > 0 &&
                  (d(g + 1),
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[sticker-dl] failed, need RDU=",
                        "",
                      ])),
                    t.length,
                  ),
                  p(t)));
            }),
            i == null || i());
        })),
        h.apply(this, arguments)
      );
    }
    ((l.requestStickerReupload = p),
      (l.handleStickerDownloadInStickerPanel = g));
  },
  98,
);
