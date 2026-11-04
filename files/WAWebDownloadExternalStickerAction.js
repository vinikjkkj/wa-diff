__d(
  "WAWebDownloadExternalStickerAction",
  [
    "WABlobToArrayBuffer",
    "WAMediaCalculateFilehash",
    "WAWebExternalStickerUtils",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaObject",
    "WAWebMediaStickers",
    "WAWebMediaTypes",
    "WAWebPonyfillsFetch",
    "WAWebStickerUtils",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          if (
            !(
              e.filehash &&
              o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(
                e.filehash,
              )
            )
          ) {
            var a = e.externalUrl;
            if (!o("WAWebExternalStickerUtils").isGiphyMediaURL(a))
              throw r("err")("Invalid external sticker URL");
            e.mediaData.mediaStage =
              o("WAWebMediaTypes").MediaDataStage.FETCHING;
            var i = yield r("WAWebPonyfillsFetch")(a, {
              signal: t,
              referrerPolicy: "no-referrer",
            });
            if (!i.ok) throw r("err")("External sticker download HTTP failure");
            var l = yield u(i),
              s = l.blob,
              c = l.buffer,
              d = yield o("WAMediaCalculateFilehash").calculateFilehash(c);
            if ((t.throwIfAborted(), e.filehash && e.filehash !== d))
              throw r("err")("External sticker content hash does not match");
            var m = yield o("WAWebStickerUtils").parseStickerMetadata(
              s,
              new (o("WAWebMediaObject").MediaObject)(),
            );
            t.throwIfAborted();
            var p = m.fullHeight,
              _ = m.fullWidth;
            if (
              _ == null ||
              _ <= 0 ||
              _ > o("WAWebExternalStickerUtils").MAX_STICKER_DIMENSION ||
              _ !== p
            )
              throw r("err")("Unsupported external sticker dimensions");
            if (_ !== e.width || p !== e.height)
              throw r("err")("External sticker dimensions do not match");
            var f = e.mediaData.accessibilityLabel,
              g = {
                filehash: e.filehash,
                size: e.size,
                mediaKeyTimestamp: e.mediaKeyTimestamp,
              },
              h = e.mediaObject != null;
            e.set({
              filehash: d,
              size: s.size,
              mediaKeyTimestamp: (n = e.mediaKeyTimestamp) != null ? n : 0,
            });
            var y = !1;
            try {
              o("WAWebMediaStickers").registerSticker(e);
              var C = r("nullthrows")(e.mediaObject);
              (o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(
                d,
                s,
              ),
                C.consolidate({
                  fullWidth: _,
                  fullHeight: p,
                  animationDuration: m.animationDuration,
                  firstFrameLength: m.firstFrameLength,
                  singleLoopDuration: m.singleLoopDuration,
                  isAnimated: m.isAnimated,
                  isAvatar: !1,
                  isAiSticker: !1,
                  isFromStickerMaker: !1,
                  size: s.size,
                  accessibilityLabel: f,
                  downloadStage: o("WAWebMediaTypes").DownloadStage.RESOLVED,
                  isFirstParty: !1,
                }),
                yield C.resolveWhenConsolidated(),
                (y = !0));
            } finally {
              y ||
                (h || o("WAWebMediaStickers").deregisterSticker(e),
                e.set(g),
                e.mediaData.set(g));
            }
          }
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            Number(e.headers.get("Content-Length")) >=
            o("WAWebExternalStickerUtils").MAX_GIPHY_STICKER_SIZE_BYTES
          ) {
            var t;
            throw (
              yield (t = e.body) == null ? void 0 : t.cancel(),
              r("err")("External sticker download exceeds size limit")
            );
          }
          var n = yield e.blob();
          if (
            n.size === 0 ||
            n.type !== "image/webp" ||
            n.size >=
              o("WAWebExternalStickerUtils").MAX_GIPHY_STICKER_SIZE_BYTES
          )
            throw r("err")("Unsupported external sticker media");
          var a = yield o("WABlobToArrayBuffer").blobToArrayBuffer(n);
          return (
            o("WAWebExternalStickerUtils").validateExternalStickerWebP(a),
            { blob: n, buffer: a }
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.downloadExternalSticker = e;
  },
  98,
);
