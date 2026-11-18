__d(
  "WAWebGenerateStickerPackMessageProto",
  ["WAWebE2EProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.json,
        n = e.mediaMetadata,
        r = n === void 0 ? {} : n;
      return {
        stickerPackMessage: {
          stickerPackId: t.stickerPackId,
          name: t.filename,
          publisher: t.stickerPackPublisher,
          fileSha256: o("WAWebE2EProtoUtils").encodeBytes(r.filehash),
          fileEncSha256: o("WAWebE2EProtoUtils").encodeBytes(r.encFilehash),
          mediaKey: o("WAWebE2EProtoUtils").encodeBytes(r.mediaKey),
          directPath: t.directPath,
          caption: t.caption,
          packDescription: t.description,
          thumbnailSha256: o("WAWebE2EProtoUtils").encodeBytes(
            r.thumbnailSha256,
          ),
          thumbnailEncSha256: o("WAWebE2EProtoUtils").encodeBytes(
            r.thumbnailEncSha256,
          ),
          thumbnailDirectPath: t.thumbnailDirectPath,
          stickers: t.stickers,
          fileLength: t.size,
          trayIconFileName: t.trayIconFileName,
          stickerPackSize: t.stickerPackSize,
        },
      };
    }
    l.default = e;
  },
  98,
);
