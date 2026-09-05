__d(
  "WAWebMediaMetadata",
  ["WALogger", "WAWebMediaCryptoEligibilityUtils", "WAWebMsgGetters", "err"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      var n = t.mediaObject;
      if (!n)
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "id: ",
                  " type: ",
                  "",
                ])),
              t.id.toString(),
              t.type,
            )
            .sendLogs("media-fault: mediaMetadata msg without mediaObject"),
          r("err")("msg.mediaMetadata with no mediaObject")
        );
      var a = o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(
        t,
      )
        ? n.entries.getEntryByEncFilehash({
            encFilehash: t.encFilehash,
            deprecatedMms3Url: t.deprecatedMms3Url,
          })
        : n.entries.getUnencryptedEntry(t.filehash, t.directPath);
      if (!a)
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "id: ",
                  " type: ",
                  "",
                ])),
              t.id.toString(),
              t.type,
            )
            .sendLogs("media-fault: mediaMetadata no entry"),
          r("err")("msg.mediaMetadata with entry mismatch")
        );
      var i = t.mediaData;
      return {
        url: c(t, a.deprecatedMms3Url),
        directPath: a.directPath,
        encFilehash: a.getEncfilehash(),
        mediaKey: a.getMediaKey(),
        mediaKeyTimestamp: a.getMediaKeyTimestamp(),
        filehash: t.filehash,
        type: i.type,
        mimetype: i.mimetype,
        filename: i.filename,
        duration: i.duration,
        width: i.fullWidth,
        height: i.fullHeight,
        firstFrameLength: i.firstFrameLength,
        isAnimated: i.isAnimated,
        isLottie: i.isLottie,
        isAiSticker: i.isAiSticker,
        stickerPremiumStatus: i.stickerPremiumStatus,
        thumbnailDirectPath: t.thumbnailDirectPath,
        thumbnailSha256: t.thumbnailSha256,
        thumbnailEncSha256: t.thumbnailEncSha256,
        thumbnailHeight: t.thumbnailHeight,
        thumbnailWidth: t.thumbnailWidth,
        metadataUrl: t.metadataUrl,
        dashManifestUrl: t.dashManifestUrl,
        waveform: t.waveform,
        staticUrl: t.staticUrl,
      };
    }
    function c(e, t) {
      if (o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(e))
        return t;
      if (o("WAWebMsgGetters").getIsStatus(e)) {
        var n;
        return (n = e.deprecatedMms3Url) != null ? n : null;
      }
      return null;
    }
    l.mediaMetadata = u;
  },
  98,
);
