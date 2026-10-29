__d(
  "WAWebGenerateVideoMessageProto",
  [
    "WATypeUtils",
    "WAWebChannelVideoServerTranscodeGating",
    "WAWebE2EProtoUtils",
    "WAWebMediaGatingUtils",
    "WAWebMsgType",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.contextInfo,
        n = e.json,
        a = e.mediaMetadata,
        i = a == null ? void 0 : a.duration,
        l = i != null && o("WATypeUtils").isString(i) ? parseInt(i, 10) : i,
        s = n.caption,
        u = n.mimetype || (a == null ? void 0 : a.mimetype),
        c = r("WAWebWid").isNewsletter(n.to),
        d =
          c &&
          (a == null ? void 0 : a.dashManifestUrl) != null &&
          o(
            "WAWebChannelVideoServerTranscodeGating",
          ).isChannelVideoServerTranscodeUploadEnabled(),
        m = {};
      o("WAWebMediaGatingUtils").isThumbnailGenerationForMsgOnServerEnabled(
        n,
      ) &&
        (m = {
          thumbnailDirectPath: a == null ? void 0 : a.thumbnailDirectPath,
          thumbnailSha256: o("WAWebE2EProtoUtils").encodeBytes(
            a == null ? void 0 : a.thumbnailSha256,
          ),
        });
      var p = babelHelpers.extends(
        {
          url: a == null ? void 0 : a.url,
          mimetype: u,
          directPath: a == null ? void 0 : a.directPath,
          fileSha256: o("WAWebE2EProtoUtils").encodeBytes(
            a == null ? void 0 : a.filehash,
          ),
          fileEncSha256: o("WAWebE2EProtoUtils").encodeBytes(
            a == null ? void 0 : a.encFilehash,
          ),
          height: a == null ? void 0 : a.height,
          width: a == null ? void 0 : a.width,
          seconds: l,
          caption: s,
          fileLength: o("WATypeUtils").isNumber(n.size) ? n.size : void 0,
          mediaKey: o("WAWebE2EProtoUtils").encodeBytes(
            a == null ? void 0 : a.mediaKey,
          ),
          mediaKeyTimestamp: o("WATypeUtils").isNumber(
            a == null ? void 0 : a.mediaKeyTimestamp,
          )
            ? a.mediaKeyTimestamp
            : void 0,
          jpegThumbnail: n.isViewOnce
            ? void 0
            : o("WAWebE2EProtoUtils").encodeBytes(n.body),
          gifPlayback: n.isGif,
          gifAttribution: n.gifAttribution,
          accessibilityLabel: n.accessibilityLabel,
          contextInfo: t,
          streamingSidecar: n.streamingSidecar,
          viewOnce: n.isViewOnce,
          annotations: n.interactiveAnnotations,
          metadataUrl:
            (a == null ? void 0 : a.metadataUrl) != null &&
            o(
              "WAWebChannelVideoServerTranscodeGating",
            ).isChannelVideoServerTranscodeUploadEnabled()
              ? a.metadataUrl
              : void 0,
          dashManifestUrl: d
            ? a == null
              ? void 0
              : a.dashManifestUrl
            : void 0,
        },
        m,
      );
      return (
        o("WAWebE2EProtoUtils").validateOutgoingRequiredMediaProperties(
          n.type,
          p,
          c,
        ),
        n.type === o("WAWebMsgType").MSG_TYPE.PTV
          ? { ptvMessage: p }
          : { videoMessage: p }
      );
    }
    l.default = e;
  },
  98,
);
