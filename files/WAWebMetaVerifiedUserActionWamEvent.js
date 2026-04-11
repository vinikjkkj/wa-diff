__d(
  "WAWebMetaVerifiedUserActionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMetaVerifiedDialogInteraction",
    "WAWebWamEnumMetaVerifiedLockedFieldEditOutcome",
    "WAWebWamEnumMetaVerifiedLockedProfileField",
    "WAWebWamEnumMetaVerifiedUserActionAction",
    "WAWebWamEnumMetaVerifiedUserActionAssetType",
    "WAWebWamEnumMetaVerifiedUserActionBannerType",
    "WAWebWamEnumMetaVerifiedUserActionErrorDetails",
    "WAWebWamEnumMetaVerifiedUserActionInteractionError",
    "WAWebWamEnumMetaVerifiedUserActionReferral",
    "WAWebWamEnumMetaVerifiedUserActionResult",
    "WAWebWamEnumMetaVerifiedUserActionSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MetaVerifiedUserAction: [
            4986,
            {
              isProfileLocked: [16, e.TYPES.BOOLEAN],
              isRetryAttempt: [22, e.TYPES.BOOLEAN],
              isVlevelHigh: [19, e.TYPES.BOOLEAN],
              metaVerifiedDialogInteraction: [
                20,
                o("WAWebWamEnumMetaVerifiedDialogInteraction")
                  .META_VERIFIED_DIALOG_INTERACTION,
              ],
              metaVerifiedLockedFieldEditOutcome: [
                21,
                o("WAWebWamEnumMetaVerifiedLockedFieldEditOutcome")
                  .META_VERIFIED_LOCKED_FIELD_EDIT_OUTCOME,
              ],
              metaVerifiedLockedProfileField: [
                17,
                o("WAWebWamEnumMetaVerifiedLockedProfileField")
                  .META_VERIFIED_LOCKED_PROFILE_FIELD,
              ],
              metaVerifiedLockedProfileFieldEligibility: [18, e.TYPES.STRING],
              metaVerifiedQuickPromotionId: [12, e.TYPES.STRING],
              metaVerifiedUserActionAction: [
                1,
                o("WAWebWamEnumMetaVerifiedUserActionAction")
                  .META_VERIFIED_USER_ACTION_ACTION,
              ],
              metaVerifiedUserActionAssetType: [
                2,
                o("WAWebWamEnumMetaVerifiedUserActionAssetType")
                  .META_VERIFIED_USER_ACTION_ASSET_TYPE,
              ],
              metaVerifiedUserActionBannerType: [
                14,
                o("WAWebWamEnumMetaVerifiedUserActionBannerType")
                  .META_VERIFIED_USER_ACTION_BANNER_TYPE,
              ],
              metaVerifiedUserActionErrorDetails: [
                8,
                o("WAWebWamEnumMetaVerifiedUserActionErrorDetails")
                  .META_VERIFIED_USER_ACTION_ERROR_DETAILS,
              ],
              metaVerifiedUserActionExtra: [13, e.TYPES.STRING],
              metaVerifiedUserActionGreenDotVisible: [7, e.TYPES.BOOLEAN],
              metaVerifiedUserActionInteractionError: [
                6,
                o("WAWebWamEnumMetaVerifiedUserActionInteractionError")
                  .META_VERIFIED_USER_ACTION_INTERACTION_ERROR,
              ],
              metaVerifiedUserActionIsSubscribed: [9, e.TYPES.BOOLEAN],
              metaVerifiedUserActionReferral: [
                3,
                o("WAWebWamEnumMetaVerifiedUserActionReferral")
                  .META_VERIFIED_USER_ACTION_REFERRAL,
              ],
              metaVerifiedUserActionResult: [
                5,
                o("WAWebWamEnumMetaVerifiedUserActionResult")
                  .META_VERIFIED_USER_ACTION_RESULT,
              ],
              metaVerifiedUserActionSurface: [
                4,
                o("WAWebWamEnumMetaVerifiedUserActionSurface")
                  .META_VERIFIED_USER_ACTION_SURFACE,
              ],
              metaVerifiedUserActionVerifiedBadgeVisible: [15, e.TYPES.BOOLEAN],
              userActionErrorCode: [10, e.TYPES.STRING],
              userActionSessionId: [11, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MetaVerifiedUserAction: [] },
      );
    l.MetaVerifiedUserActionWamEvent = s;
  },
  98,
);
