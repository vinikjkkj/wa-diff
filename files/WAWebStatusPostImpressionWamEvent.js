__d(
  "WAWebStatusPostImpressionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChannelUserType",
    "WAWebWamEnumGroupStatusSizeBucket",
    "WAWebWamEnumInlineVideoType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStatusCategory",
    "WAWebWamEnumStatusContentType",
    "WAWebWamEnumStatusItemViewResult",
    "WAWebWamEnumStatusPosterContactType",
    "WAWebWamEnumStatusRowSection",
    "WAWebWamEnumStatusViewEntryMethod",
    "WAWebWamEnumStatusViewExitMethod",
    "WAWebWamEnumUrlStatusType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          StatusPostImpression: [
            6364,
            {
              channelStatusId: [46, e.TYPES.INTEGER],
              channelUserType: [
                47,
                o("WAWebWamEnumChannelUserType").CHANNEL_USER_TYPE,
              ],
              cid: [48, e.TYPES.STRING],
              entryMethod: [
                29,
                o("WAWebWamEnumStatusViewEntryMethod").STATUS_VIEW_ENTRY_METHOD,
              ],
              externalSourceDomainType: [
                1,
                o("WAWebWamEnumInlineVideoType").INLINE_VIDEO_TYPE,
              ],
              groupStatusSizeBucket: [
                41,
                o("WAWebWamEnumGroupStatusSizeBucket").GROUP_STATUS_SIZE_BUCKET,
              ],
              isCloseSharingPost: [42, e.TYPES.BOOLEAN],
              isEngagementCard: [45, e.TYPES.BOOLEAN],
              isFirstView: [2, e.TYPES.BOOLEAN],
              isLastStatus: [43, e.TYPES.BOOLEAN],
              isPosterBiz: [3, e.TYPES.BOOLEAN],
              isSelfView: [24, e.TYPES.BOOLEAN],
              isSubImpression: [4, e.TYPES.BOOLEAN],
              isSubscribed: [33, e.TYPES.BOOLEAN],
              isSuccessfulView: [30, e.TYPES.BOOLEAN],
              isViewedInLandscape: [5, e.TYPES.BOOLEAN],
              musicBlocked: [6, e.TYPES.BOOLEAN],
              pogViewSequenceIndex: [37, e.TYPES.INTEGER],
              psaCampaignId: [7, e.TYPES.STRING],
              psaLinkAvailable: [8, e.TYPES.BOOLEAN],
              statusAttributionTypes: [38, e.TYPES.STRING],
              statusCategory: [
                25,
                o("WAWebWamEnumStatusCategory").STATUS_CATEGORY,
              ],
              statusContainsMusic: [9, e.TYPES.BOOLEAN],
              statusContainsQuestion: [28, e.TYPES.BOOLEAN],
              statusContainsReactionSticker: [34, e.TYPES.BOOLEAN],
              statusContentType: [
                10,
                o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE,
              ],
              statusGroupId: [39, e.TYPES.STRING],
              statusId: [11, e.TYPES.STRING],
              statusItemViewResult: [
                31,
                o("WAWebWamEnumStatusItemViewResult").STATUS_ITEM_VIEW_RESULT,
              ],
              statusLoadTime: [12, e.TYPES.TIMER],
              statusMediaType: [13, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              statusPogIndex: [15, e.TYPES.INTEGER],
              statusPostIndex: [16, e.TYPES.INTEGER],
              statusPostPlaybackDuration: [17, e.TYPES.TIMER],
              statusPosterContactType: [
                35,
                o("WAWebWamEnumStatusPosterContactType")
                  .STATUS_POSTER_CONTACT_TYPE,
              ],
              statusPosterHashId: [26, e.TYPES.STRING],
              statusPosterId: [40, e.TYPES.STRING],
              statusViewEntrypoint: [
                18,
                o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION,
              ],
              statusViewExitMethod: [
                44,
                o("WAWebWamEnumStatusViewExitMethod").STATUS_VIEW_EXIT_METHOD,
              ],
              statusViewTime: [19, e.TYPES.TIMER],
              statusViewerSessionId: [20, e.TYPES.INTEGER],
              unifiedSessionId: [21, e.TYPES.STRING],
              updatesTabSessionId: [22, e.TYPES.INTEGER],
              urlStatusType: [
                23,
                o("WAWebWamEnumUrlStatusType").URL_STATUS_TYPE,
              ],
              viewSequenceIndex: [32, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { StatusPostImpression: [] },
      );
    l.StatusPostImpressionWamEvent = s;
  },
  98,
);
