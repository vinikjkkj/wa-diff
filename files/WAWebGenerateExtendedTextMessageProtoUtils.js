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
    function s(t) {
      var n = t.contextInfo,
        r = t.json,
        a = r.faviconMMSMetadata != null;
      return {
        extendedTextMessage: {
          text: r.body,
          matchedText: r.matchedText,
          description: r.description,
          title: r.title,
          jpegThumbnail: o("WAWebE2EProtoUtils").encodeBytes(r.thumbnail),
          previewType: r.richPreviewType,
          contextInfo: n,
          mediaKey: o("WAWebE2EProtoUtils").encodeBytes(r.mediaKey),
          mediaKeyTimestamp: o("WATypeUtils").isNumber(r.mediaKeyTimestamp)
            ? r.mediaKeyTimestamp
            : void 0,
          thumbnailDirectPath: r.thumbnailDirectPath,
          thumbnailSha256: o("WAWebE2EProtoUtils").encodeBytes(
            r.thumbnailSha256,
          ),
          thumbnailEncSha256: o("WAWebE2EProtoUtils").encodeBytes(
            r.thumbnailEncSha256,
          ),
          thumbnailHeight: r.thumbnailHeight,
          thumbnailWidth: r.thumbnailWidth,
          inviteLinkGroupTypeV2: e(r.inviteGrpType),
          backgroundArgb: r.backgroundColor,
          paymentLinkMetadata: r.paymentLinkMetadata,
          faviconMMSMetadata: a
            ? {
                mediaKey: o("WAWebE2EProtoUtils").encodeBytes(
                  r.faviconMMSMetadata.mediaKey,
                ),
                mediaKeyTimestamp: o("WATypeUtils").isNumber(
                  r.faviconMMSMetadata.mediaKeyTimestamp,
                )
                  ? r.faviconMMSMetadata.mediaKeyTimestamp
                  : void 0,
                thumbnailDirectPath: r.faviconMMSMetadata.thumbnailDirectPath,
                thumbnailSha256: o("WAWebE2EProtoUtils").encodeBytes(
                  r.faviconMMSMetadata.thumbnailSha256,
                ),
                thumbnailEncSha256: o("WAWebE2EProtoUtils").encodeBytes(
                  r.faviconMMSMetadata.thumbnailEncSha256,
                ),
              }
            : void 0,
        },
      };
    }
    l.default = s;
  },
  98,
);
