__d(
  "WAWebOtpRetrieverWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChatsFolderType",
    "WAWebWamEnumCtaFallbackReason",
    "WAWebWamEnumCtaType",
    "WAWebWamEnumOtpEventSource",
    "WAWebWamEnumOtpEventType",
    "WAWebWamEnumOtpProductType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          OtpRetriever: [
            3468,
            {
              businessLid: [26, e.TYPES.INTEGER],
              businessLidOrJid: [28, e.TYPES.STRING],
              businessPhoneNumber: [1, e.TYPES.INTEGER],
              chatId: [19, e.TYPES.STRING],
              chatsFolderType: [
                12,
                o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE,
              ],
              ctaFallbackReason: [
                2,
                o("WAWebWamEnumCtaFallbackReason").CTA_FALLBACK_REASON,
              ],
              ctaType: [3, o("WAWebWamEnumCtaType").CTA_TYPE],
              isKeepChatsArchivedEnabled: [13, e.TYPES.BOOLEAN],
              isMessageNotificationEnabled: [14, e.TYPES.BOOLEAN],
              isNotificationEnabled: [15, e.TYPES.BOOLEAN],
              messageReceivedElapsedTimeSeconds: [11, e.TYPES.INTEGER],
              otpCorrelationId: [20, e.TYPES.STRING],
              otpEventSource: [
                5,
                o("WAWebWamEnumOtpEventSource").OTP_EVENT_SOURCE,
              ],
              otpEventType: [6, o("WAWebWamEnumOtpEventType").OTP_EVENT_TYPE],
              otpFailureReason: [16, e.TYPES.STRING],
              otpHandshakeElapsedTimeMs: [21, e.TYPES.INTEGER],
              otpHandshakeId: [23, e.TYPES.STRING],
              otpIosAutofillDisabled: [29, e.TYPES.BOOLEAN],
              otpMaskLinkedDevices: [24, e.TYPES.BOOLEAN],
              otpProductType: [
                7,
                o("WAWebWamEnumOtpProductType").OTP_PRODUCT_TYPE,
              ],
              otpSdkVersion: [22, e.TYPES.STRING],
              otpSenderAttributes: [27, e.TYPES.STRING],
              otpSessionId: [8, e.TYPES.STRING],
              receiverCountryCode: [18, e.TYPES.STRING],
              templateId: [17, e.TYPES.STRING],
              thirdPartyPackageNameFromIntent: [9, e.TYPES.STRING],
              thirdPartyPackageSignatureHash: [10, e.TYPES.STRING],
              waDeviceId: [25, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "private",
            113760892,
          ],
        },
        { OtpRetriever: [] },
      );
    l.OtpRetrieverWamEvent = s;
  },
  98,
);
