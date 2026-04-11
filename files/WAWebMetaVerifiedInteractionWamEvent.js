__d(
  "WAWebMetaVerifiedInteractionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBusinessOwnerPlatform",
    "WAWebWamEnumMetaVerifiedInteractionAction",
    "WAWebWamEnumMetaVerifiedInteractionAssetType",
    "WAWebWamEnumMetaVerifiedInteractionReferral",
    "WAWebWamEnumMetaVerifiedInteractionSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MetaVerifiedInteraction: [
            4870,
            {
              businessOwnerJid: [1, e.TYPES.STRING],
              businessOwnerPlatform: [
                2,
                o("WAWebWamEnumBusinessOwnerPlatform").BUSINESS_OWNER_PLATFORM,
              ],
              isMetaVerifiedSubscribed: [7, e.TYPES.BOOLEAN],
              isSelfView: [8, e.TYPES.BOOLEAN],
              metaVerifiedInteractionAction: [
                3,
                o("WAWebWamEnumMetaVerifiedInteractionAction")
                  .META_VERIFIED_INTERACTION_ACTION,
              ],
              metaVerifiedInteractionAssetType: [
                4,
                o("WAWebWamEnumMetaVerifiedInteractionAssetType")
                  .META_VERIFIED_INTERACTION_ASSET_TYPE,
              ],
              metaVerifiedInteractionReferral: [
                5,
                o("WAWebWamEnumMetaVerifiedInteractionReferral")
                  .META_VERIFIED_INTERACTION_REFERRAL,
              ],
              metaVerifiedInteractionSurface: [
                6,
                o("WAWebWamEnumMetaVerifiedInteractionSurface")
                  .META_VERIFIED_INTERACTION_SURFACE,
              ],
            },
            [1, 1, 1],
            "private",
            113760892,
          ],
        },
        { MetaVerifiedInteraction: [] },
      );
    l.MetaVerifiedInteractionWamEvent = s;
  },
  98,
);
