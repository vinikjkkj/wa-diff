__d(
  "WAWebStatusPosterActionsWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumEngagementCardType",
    "WAWebWamEnumEngagementCardVariant",
    "WAWebWamEnumPairedMediaType",
    "WAWebWamEnumSelectedLayoutConfigId",
    "WAWebWamEnumStatusCategory",
    "WAWebWamEnumStatusContentSource",
    "WAWebWamEnumStatusContentType",
    "WAWebWamEnumStatusCreationEntryPoint",
    "WAWebWamEnumStatusEventType",
    "WAWebWamEnumStatusMediaPickerFormatType",
    "WAWebWamEnumStatusPairedMediaQuality",
    "WAWebWamEnumStatusPrivacyType",
    "WAWebWamEnumStickerType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          StatusPosterActions: [
            3546,
            {
              canSaveAsDraft: [32, e.TYPES.BOOLEAN],
              cardType: [
                34,
                o("WAWebWamEnumEngagementCardType").ENGAGEMENT_CARD_TYPE,
              ],
              cardVariant: [
                35,
                o("WAWebWamEnumEngagementCardVariant").ENGAGEMENT_CARD_VARIANT,
              ],
              cid: [36, e.TYPES.STRING],
              defaultTrimmedVideoDuration: [26, e.TYPES.INTEGER],
              editable: [14, e.TYPES.BOOLEAN],
              externalInteractables: [15, e.TYPES.INTEGER],
              externalPackageName: [16, e.TYPES.STRING],
              hasDraftAvailable: [33, e.TYPES.BOOLEAN],
              isFavoured: [28, e.TYPES.BOOLEAN],
              mediaIndex: [29, e.TYPES.INTEGER],
              originalVideoDuration: [27, e.TYPES.INTEGER],
              pairedMediaType: [
                24,
                o("WAWebWamEnumPairedMediaType").PAIRED_MEDIA_TYPE,
              ],
              retryCount: [1, e.TYPES.INTEGER],
              selectedLayoutConfigId: [
                21,
                o("WAWebWamEnumSelectedLayoutConfigId")
                  .SELECTED_LAYOUT_CONFIG_ID,
              ],
              selectedMediaCount: [22, e.TYPES.INTEGER],
              shareType: [17, e.TYPES.STRING],
              statusAudienceSize: [2, e.TYPES.INTEGER],
              statusCategory: [
                30,
                o("WAWebWamEnumStatusCategory").STATUS_CATEGORY,
              ],
              statusContentSource: [
                3,
                o("WAWebWamEnumStatusContentSource").STATUS_CONTENT_SOURCE,
              ],
              statusContentType: [
                4,
                o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE,
              ],
              statusCreationEntryPoint: [
                5,
                o("WAWebWamEnumStatusCreationEntryPoint")
                  .STATUS_CREATION_ENTRY_POINT,
              ],
              statusDuration: [13, e.TYPES.INTEGER],
              statusEventType: [
                7,
                o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE,
              ],
              statusId: [12, e.TYPES.STRING],
              statusMediaPickerFormatType: [
                23,
                o("WAWebWamEnumStatusMediaPickerFormatType")
                  .STATUS_MEDIA_PICKER_FORMAT_TYPE,
              ],
              statusPairedMediaQuality: [
                25,
                o("WAWebWamEnumStatusPairedMediaQuality")
                  .STATUS_PAIRED_MEDIA_QUALITY,
              ],
              statusPostFailureReason: [8, e.TYPES.STRING],
              statusPostingSessionId: [20, e.TYPES.INTEGER],
              statusPrivacyType: [
                10,
                o("WAWebWamEnumStatusPrivacyType").STATUS_PRIVACY_TYPE,
              ],
              statusSessionId: [11, e.TYPES.INTEGER],
              stickerType: [18, o("WAWebWamEnumStickerType").STICKER_TYPE],
              unifiedSessionId: [19, e.TYPES.STRING],
              updatesTabSessionId: [31, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { StatusPosterActions: [] },
      );
    l.StatusPosterActionsWamEvent = s;
  },
  98,
);
