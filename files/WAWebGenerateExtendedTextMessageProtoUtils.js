__d(
  "WAWebGenerateExtendedTextMessageProtoUtils",
  [
    "WATypeUtils",
    "WAWebE2EProtoUtils",
    "WAWebGroupType",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.contextInfo,
        n = e.json,
        r = n.faviconMMSMetadata != null;
      return {
        extendedTextMessage: {
          text: n.body,
          matchedText: n.matchedText,
          description: n.description,
          title: n.title,
          jpegThumbnail: o("WAWebE2EProtoUtils").encodeBytes(n.thumbnail),
          previewType: n.richPreviewType,
          contextInfo: t,
          mediaKey: o("WAWebE2EProtoUtils").encodeBytes(n.mediaKey),
          mediaKeyTimestamp: o("WATypeUtils").isNumber(n.mediaKeyTimestamp)
            ? n.mediaKeyTimestamp
            : void 0,
          thumbnailDirectPath: n.thumbnailDirectPath,
          thumbnailSha256: o("WAWebE2EProtoUtils").encodeBytes(
            n.thumbnailSha256,
          ),
          thumbnailEncSha256: o("WAWebE2EProtoUtils").encodeBytes(
            n.thumbnailEncSha256,
          ),
          thumbnailHeight: n.thumbnailHeight,
          thumbnailWidth: n.thumbnailWidth,
          inviteLinkGroupTypeV2: s(n.inviteGrpType),
          backgroundArgb: n.backgroundColor,
          font: n.font,
          paymentLinkMetadata: n.paymentLinkMetadata,
          faviconMmsMetadata: r
            ? {
                mediaKey: o("WAWebE2EProtoUtils").encodeBytes(
                  n.faviconMMSMetadata.mediaKey,
                ),
                mediaKeyTimestamp: o("WATypeUtils").isNumber(
                  n.faviconMMSMetadata.mediaKeyTimestamp,
                )
                  ? n.faviconMMSMetadata.mediaKeyTimestamp
                  : void 0,
                thumbnailDirectPath: n.faviconMMSMetadata.thumbnailDirectPath,
                thumbnailSha256: o("WAWebE2EProtoUtils").encodeBytes(
                  n.faviconMMSMetadata.thumbnailSha256,
                ),
                thumbnailEncSha256: o("WAWebE2EProtoUtils").encodeBytes(
                  n.faviconMMSMetadata.thumbnailEncSha256,
                ),
              }
            : void 0,
        },
      };
    }
    function s(e) {
      switch (e) {
        case o("WAWebGroupType").GroupType.COMMUNITY:
          return o("WAWebProtobufsE2E.pb")
            .Message$ExtendedTextMessage$InviteLinkGroupType.PARENT;
        case o("WAWebGroupType").GroupType.LINKED_SUBGROUP:
          return o("WAWebProtobufsE2E.pb")
            .Message$ExtendedTextMessage$InviteLinkGroupType.SUB;
        case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP:
          return o("WAWebProtobufsE2E.pb")
            .Message$ExtendedTextMessage$InviteLinkGroupType.DEFAULT_SUB;
        default:
          return o("WAWebProtobufsE2E.pb")
            .Message$ExtendedTextMessage$InviteLinkGroupType.DEFAULT;
      }
    }
    l.default = e;
  },
  98,
);
