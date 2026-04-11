__d(
  "WAWebDebugStickerPack",
  [
    "WALogger",
    "WAWebAttachMediaCollection",
    "WAWebCanvasUtils",
    "WAWebChatCollection",
    "WAWebFileSaver",
    "WAWebFileSaverTypes",
    "WAWebFileUtils",
    "WAWebMediaInMemoryBlobCache",
    "WAWebRecentStickerCollectionMd",
    "WAWebStickerPackConstants",
    "WAWebStickerPackUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o(
              "WAWebRecentStickerCollectionMd",
            ).RecentStickerCollectionMd.map(function (e) {
              return e.sticker;
            }),
            t = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
              e[0].mediaData.filehash,
            );
          if (t == null) return null;
          yield o("WAWebFileSaver").FileSaver.downloadData(
            t,
            "sticker",
            o("WAWebFileSaverTypes").AllowedFileExtensions.WEBP,
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebStickerPackUtils").compressedRecentStickers(
            o("WAWebStickerPackConstants").MAX_RECENT_STICKERS,
          );
          yield o("WAWebFileSaver").FileSaver.downloadData(
            e.stickerPackZip,
            "sticker_pack",
            o("WAWebFileSaverTypes").AllowedFileExtensions.ZIP,
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
              "WAWebStickerPackUtils",
            ).generateStickerPackThumbnail(),
            t = yield o("WAWebCanvasUtils").canvasToBlob(e, "image/png");
          yield o("WAWebFileSaver").FileSaver.downloadData(
            t,
            "stickers",
            o("WAWebFileSaverTypes").AllowedFileExtensions.PNG,
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o("WAWebStickerPackUtils").compressedRecentStickers(
              o("WAWebStickerPackConstants").MAX_RECENT_STICKERS,
            ),
            a = o("WAWebChatCollection").ChatCollection.getActive();
          if (a == null) {
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "No active chat",
                ])),
            );
            return;
          }
          a.attachMediaContents ||
            a.setAttachMediaContents(
              new (r("WAWebAttachMediaCollection"))({
                chatParticipantCount: a.getParticipantCount(),
              }),
            );
          var i = a.attachMediaContents;
          if (i == null) {
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "No media collection",
                ])),
            );
            return;
          }
          var l = yield o("WAWebStickerPackUtils").generateStickerPackThumbnail(
              t,
              o("WAWebStickerPackConstants").THUMBNAIL_LENGTH,
              o("WAWebStickerPackConstants").THUMBNAIL_WIDTH,
              o("WAWebStickerPackConstants").IMAGE_LENGTH,
              o("WAWebStickerPackConstants").IMAGE_WIDTH,
            ),
            c = yield o("WAWebCanvasUtils").canvasToBlob(l, "image/png");
          (yield i.processAttachmentsForChat(
            [
              {
                file: o("WAWebFileUtils").createFile(
                  [n.stickerPackZip],
                  "Kewwl Emoji",
                  { type: "application/zip" },
                ),
              },
            ],
            void 0,
            a,
          ),
            yield i.processAttachmentsForChat(
              [
                {
                  file: o("WAWebFileUtils").createFile(
                    [c],
                    "sticker_pack_thumbnail",
                    { type: "image/png" },
                  ),
                },
              ],
              void 0,
              a,
            ));
          var d = i.getValidMedias().find(function (e) {
            return e.filename === "Kewwl Emoji";
          });
          if (d == null) {
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "No attached media",
                ])),
            );
            return;
          }
          var m = i.getValidMedias()[1],
            p = {};
          ((p.type = d.type),
            (p.caption = "This is a caption"),
            (p.description = "Your fav creepy emoji"),
            (p.publisher = "Ana M"),
            (p.thumbnailFilehash = m.mediaPrep.mediaData.filehash),
            (p.stickers = n.stickerPackStickers),
            (p.fileLength = n.stickerPackZip.size),
            (d.preview = m.preview),
            (d.mediaPrep.mediaData.preview = m.mediaPrep.mediaData.preview),
            yield d.mediaPrep.sendToChat({ chat: a, options: p }));
        })),
        h.apply(this, arguments)
      );
    }
    var y = {
      downloadRecentSticker: c,
      downloadStickerPack: m,
      sendStickerPack: g,
      downloadStickerPackThumbnailImage: _,
    };
    l.default = y;
  },
  98,
);
