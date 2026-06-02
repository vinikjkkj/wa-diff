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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c() {
      var e = o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.map(
          function (e) {
            return e.sticker;
          },
        ),
        t = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
          e[0].mediaData.filehash,
        );
      if (t == null) return null;
      await o("WAWebFileSaver").FileSaver.downloadData(
        t,
        "sticker",
        o("WAWebFileSaverTypes").AllowedFileExtensions.WEBP,
      );
    }
    async function d() {
      var e = await o("WAWebStickerPackUtils").compressedRecentStickers(
        o("WAWebStickerPackConstants").MAX_RECENT_STICKERS,
      );
      await o("WAWebFileSaver").FileSaver.downloadData(
        e.stickerPackZip,
        "sticker_pack",
        o("WAWebFileSaverTypes").AllowedFileExtensions.ZIP,
      );
    }
    async function m() {
      var e = await o("WAWebStickerPackUtils").generateStickerPackThumbnail(),
        t = await o("WAWebCanvasUtils").canvasToBlob(e, "image/png");
      await o("WAWebFileSaver").FileSaver.downloadData(
        t,
        "stickers",
        o("WAWebFileSaverTypes").AllowedFileExtensions.PNG,
      );
    }
    async function p(t) {
      var n = await o("WAWebStickerPackUtils").compressedRecentStickers(
          o("WAWebStickerPackConstants").MAX_RECENT_STICKERS,
        ),
        a = o("WAWebChatCollection").ChatCollection.getActive();
      if (a == null) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose(["No active chat"])),
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
      var l = await o("WAWebStickerPackUtils").generateStickerPackThumbnail(
          t,
          o("WAWebStickerPackConstants").THUMBNAIL_LENGTH,
          o("WAWebStickerPackConstants").THUMBNAIL_WIDTH,
          o("WAWebStickerPackConstants").IMAGE_LENGTH,
          o("WAWebStickerPackConstants").IMAGE_WIDTH,
        ),
        c = await o("WAWebCanvasUtils").canvasToBlob(l, "image/png");
      (await i.processAttachmentsForChat(
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
        await i.processAttachmentsForChat(
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
        await d.mediaPrep.sendToChat({ chat: a, options: p }));
    }
    var _ = {
      downloadRecentSticker: c,
      downloadStickerPack: d,
      sendStickerPack: p,
      downloadStickerPackThumbnailImage: m,
    };
    l.default = _;
  },
  98,
);
