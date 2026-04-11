__d(
  "WAWebPaidMessagingUserInteractionsLoggerWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumPaidMessagingUserInteractionsActionTarget",
    "WAWebWamEnumPaidMessagingUserInteractionsActionType",
    "WAWebWamEnumPaidMessagingUserInteractionsComponentType",
    "WAWebWamEnumPaidMessagingUserInteractionsHeaderMediaType",
    "WAWebWamEnumPaidMessagingUserInteractionsHostStorage",
    "WAWebWamEnumPaidMessagingUserInteractionsMarketingFormat",
    "WAWebWamEnumTapTargetType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PaidMessagingUserInteractionsLogger: [
            4740,
            {
              pmxActionTarget: [
                1,
                o("WAWebWamEnumPaidMessagingUserInteractionsActionTarget")
                  .PAID_MESSAGING_USER_INTERACTIONS_ACTION_TARGET,
              ],
              pmxActionType: [
                2,
                o("WAWebWamEnumPaidMessagingUserInteractionsActionType")
                  .PAID_MESSAGING_USER_INTERACTIONS_ACTION_TYPE,
              ],
              pmxCarouselCardIndex: [14, e.TYPES.INTEGER],
              pmxComponentType: [
                3,
                o("WAWebWamEnumPaidMessagingUserInteractionsComponentType")
                  .PAID_MESSAGING_USER_INTERACTIONS_COMPONENT_TYPE,
              ],
              pmxHashedMessageId: [13, e.TYPES.STRING],
              pmxHashedMessageKey: [11, e.TYPES.INTEGER],
              pmxHeaderMediaType: [
                4,
                o("WAWebWamEnumPaidMessagingUserInteractionsHeaderMediaType")
                  .PAID_MESSAGING_USER_INTERACTIONS_HEADER_MEDIA_TYPE,
              ],
              pmxHostStorage: [
                8,
                o("WAWebWamEnumPaidMessagingUserInteractionsHostStorage")
                  .PAID_MESSAGING_USER_INTERACTIONS_HOST_STORAGE,
              ],
              pmxMarketingFormat: [
                5,
                o("WAWebWamEnumPaidMessagingUserInteractionsMarketingFormat")
                  .PAID_MESSAGING_USER_INTERACTIONS_MARKETING_FORMAT,
              ],
              pmxMessageDeliveredTs: [10, e.TYPES.INTEGER],
              pmxMessageStanzaAcceptedTs: [12, e.TYPES.INTEGER],
              pmxQueryParams: [6, e.TYPES.STRING],
              pmxSenderCountryCode: [9, e.TYPES.STRING],
              pmxTapTargetType: [
                15,
                o("WAWebWamEnumTapTargetType").TAP_TARGET_TYPE,
              ],
              pmxTextTruncationLimit: [16, e.TYPES.INTEGER],
              templateId: [7, e.TYPES.STRING],
            },
            [1, 1, 1],
            "private",
            113760892,
          ],
        },
        { PaidMessagingUserInteractionsLogger: [] },
      );
    l.PaidMessagingUserInteractionsLoggerWamEvent = s;
  },
  98,
);
