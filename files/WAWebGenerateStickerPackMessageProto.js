__d(
  "WAWebGenerateStickerPackMessageProto",
  ["WAWebE2EProtoUtils", "WAWebForwardReachGating"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.contextInfo,
        n = e.json,
        r = e.mediaMetadata,
        a = r === void 0 ? {} : r,
        i = t == null ? void 0 : t.forwardReachScore;
      return {
        stickerPackMessage: {
          stickerPackId: n.stickerPackId,
          name: n.filename,
          publisher: n.stickerPackPublisher,
          fileSha256: o("WAWebE2EProtoUtils").encodeBytes(a.filehash),
          fileEncSha256: o("WAWebE2EProtoUtils").encodeBytes(a.encFilehash),
          mediaKey: o("WAWebE2EProtoUtils").encodeBytes(a.mediaKey),
          directPath: n.directPath,
          caption: n.caption,
          contextInfo:
            i != null &&
            o("WAWebForwardReachGating").isForwardReachScoreSendEnabled()
              ? { forwardReachScore: i }
              : void 0,
          packDescription: n.description,
          thumbnailSha256: o("WAWebE2EProtoUtils").encodeBytes(
            a.thumbnailSha256,
          ),
          thumbnailEncSha256: o("WAWebE2EProtoUtils").encodeBytes(
            a.thumbnailEncSha256,
          ),
          thumbnailDirectPath: n.thumbnailDirectPath,
          stickers: n.stickers,
          fileLength: n.size,
          trayIconFileName: n.trayIconFileName,
          stickerPackSize: n.stickerPackSize,
        },
      };
    }
    l.default = e;
  },
  98,
);
