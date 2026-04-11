__d(
  "WAWebCheckmarkInfoModalLogEvents",
  [
    "WAWebContactGetters",
    "WAWebContactUtils",
    "WAWebMetaVerifiedInteractionWamEvent",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumMetaVerifiedInteractionAction",
    "WAWebWamEnumMetaVerifiedInteractionAssetType",
    "WAWebWamEnumMetaVerifiedInteractionReferral",
    "WAWebWamEnumMetaVerifiedInteractionSurface",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebContactGetters").getId(e).toJid(),
        n = {
          businessOwnerJid: t,
          metaVerifiedInteractionAction: o(
            "WAWebWamEnumMetaVerifiedInteractionAction",
          ).META_VERIFIED_INTERACTION_ACTION.CLICK_BADGE,
          metaVerifiedInteractionReferral: o(
            "WAWebWamEnumMetaVerifiedInteractionReferral",
          ).META_VERIFIED_INTERACTION_REFERRAL.CHAT_PROFILE,
          metaVerifiedInteractionSurface: o(
            "WAWebWamEnumMetaVerifiedInteractionSurface",
          ).META_VERIFIED_INTERACTION_SURFACE.BUSINESS_PROFILE,
        },
        r = o("WAWebContactUtils").getMaybeBizPlatformForLogging(t);
      (r === o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.ENT
        ? (n.metaVerifiedInteractionAssetType = o(
            "WAWebWamEnumMetaVerifiedInteractionAssetType",
          ).META_VERIFIED_INTERACTION_ASSET_TYPE.ENT)
        : r === o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB &&
          (n.metaVerifiedInteractionAssetType = o(
            "WAWebWamEnumMetaVerifiedInteractionAssetType",
          ).META_VERIFIED_INTERACTION_ASSET_TYPE.SMB),
        new (o(
          "WAWebMetaVerifiedInteractionWamEvent",
        ).MetaVerifiedInteractionWamEvent)(n).commit());
    }
    l.logClickProfileBadge = e;
  },
  98,
);
