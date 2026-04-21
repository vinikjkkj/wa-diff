__d(
  "WAWebSchemaMessage",
  ["WAWebModelStorageUtils", "WAWebModelStorageVersions", "WAWebStorageSchema"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage();
      e.add_OPTIMIZED_EXPERIMENT("message", function (e, t) {
        var n,
          r = t.addArrayIndex,
          a = t.addColumn,
          i = t.addCompositeIndex,
          l = t.addEncryptedColumn,
          s = t.addIndex,
          u = t.addUniqueIndex,
          c = t.addUserDefinedPrimaryKey,
          d = t.removeColumn;
        return e
          .version((n = o("WAWebModelStorageVersions")).messageCreateTable(), [
            c("id"),
            a("internalId"),
            u("internalId"),
            a("rowId"),
            u("rowId"),
            a("type"),
            a("subtype"),
            a("t"),
            a("notifyName"),
            a("from"),
            a("to"),
            a("author"),
            a("local"),
            a("ack"),
            a("invis"),
            a("isStarred"),
            s("isStarred"),
            a("mentionedJidList"),
            a("groupMentions"),
            a("count"),
            a("devicesAdded"),
            a("devicesRemoved"),
            a("isThisDeviceAdded"),
            a("recipients"),
            a("protocolMessageKey"),
            a("protocolMessageRowId"),
            a("templateParams"),
            i(["internalId", "isStarred"]),
            a("vcardWAids"),
            r("vcardWAids"),
            a("hasLink"),
            a("isMediaMsg"),
            a("isDocMsg"),
            a("isEventMsg"),
            i(["internalId", "isMediaMsg"]),
            i(["internalId", "isDocMsg"]),
            i(["internalId", "hasLink"]),
            a("ephemeralStartTimestamp"),
            a("ephemeralDuration"),
            a("ephemeralSettingTimestamp"),
            a("ephemeralOutOfSync"),
            a("ephemeralSettingUser"),
            a("expiredTimestamp"),
            s("expiredTimestamp"),
            a("afterReadDuration"),
            a("directPath"),
            a("mimetype"),
            a("duration"),
            a("filehash"),
            a("uploadhash"),
            a("size"),
            a("filename"),
            a("streamingSidecar"),
            a("mediaKey"),
            a("mediaKeyTimestamp"),
            a("pageCount"),
            a("isGif"),
            a("gifAttribution"),
            a("accessibilityLabel"),
            a("isViewOnce"),
            a("width"),
            a("height"),
            a("scanLengths"),
            a("scansSidecar"),
            a("interactiveAnnotations"),
            a("firstFrameLength"),
            a("firstFrameSidecar"),
            a("isAnimated"),
            a("isLottie"),
            a("stickerPremiumStatus"),
            a("thumbnail"),
            a("richPreviewType"),
            a("doNotPlayInline"),
            a("paymentLinkMetadata"),
            a("broadcast"),
            a("broadcastParticipants"),
            a("bclParticipants"),
            a("broadcastId"),
            a("quotedMsg"),
            a("quotedStanzaID"),
            a("quotedRemoteJid"),
            a("quotedParticipant"),
            a("footer"),
            a("hydratedButtons"),
            a("selectedId"),
            a("selectedIndex"),
            a("selectedCarouselCardIndex"),
            a("vcardFormattedName"),
            a("isVcardOverMmsDocument"),
            a("isCaptionByUser"),
            a("hsmTag"),
            a("hsmCategory"),
            a("templateId"),
            a("businessOwnerJid"),
            a("productId"),
            a("currencyCode"),
            a("priceAmount1000"),
            a("retailerId"),
            a("url"),
            a("productImageCount"),
            a("paymentCurrency"),
            a("paymentMessageReceiverJid"),
            a("paymentTransactionTimestamp"),
            a("paymentStatus"),
            a("paymentNoteMsg"),
            a("paymentRequestMessageKey"),
            a("paymentExpiryTimestamp"),
            a("message"),
            a("orderTitle"),
            a("itemCount"),
            a("orderId"),
            a("surface"),
            a("status"),
            a("token"),
            a("textColor"),
            a("backgroundColor"),
            a("font"),
            a("isForwarded"),
            a("forwardingScore"),
            a("ctwaContext"),
            a("signupContext"),
            a("messageRangeIndex"),
            s("messageRangeIndex"),
            a("vcardList"),
            a("totalAmount1000"),
            a("totalCurrencyCode"),
            a("list"),
            a("listResponse"),
            a("isDynamicReplyButtonsMsg"),
            a("dynamicReplyButtons"),
            a("selectedButtonId"),
            a("sellerJid"),
            a("deprecatedMms3Url"),
            a("encFilehash"),
            l(
              "msgRowOpaqueData",
              o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER,
            ),
            a("thumbnailDirectPath"),
            a("thumbnailSha256"),
            a("thumbnailEncSha256"),
            a("thumbnailHeight"),
            a("thumbnailWidth"),
            a("revokeSender"),
            a("isQuestion"),
            a("questionReplyQuotedMessage"),
            a("newsletterAdminProfile"),
            a("pendingReadReceipt"),
            i(["from", "pendingReadReceipt"]),
            a("inviteGrpType"),
            a("quotedGroupSubject"),
            a("quotedParentGroupJid"),
            a("quotedType"),
            a("reactionParentKey"),
            a("reactionTimestamp"),
            a("reactionText"),
            a("lastPlaybackProgress"),
            a("hasReaction"),
            a("kicKey"),
            a("kicState"),
            a("kicTimestampMs"),
            a("kicNotified"),
            a("keptMessageKey"),
            a("keepType"),
            a("keptCount"),
            a("agentId"),
            a("revokeTimestamp"),
            a("futureproofParams"),
            a("futureproofReparsed"),
            a("futureproofType"),
            a("futureproofSubtype"),
            a("botFeedbackKind"),
            a("botFeedbackText"),
            a("latestEditMsgKey"),
            a("latestEditSenderTimestampMs"),
            a("editMsgType"),
            a("bizSource"),
            a("invokedBotWid"),
            a("botEditType"),
            a("botTargetSenderJid"),
            a("bizBotType"),
            a("botPersonaId"),
            a("viewCount"),
            a("forwardsCount"),
            a("questionResponsesCount"),
            a("readQuestionResponsesCount"),
            a("forwardedNewsletterMessageInfo"),
            a("forwardedAiBotMessageInfo"),
            a("botSignatureVerificationMetadata"),
            a("unifiedResponseRawData"),
            a("statusAttributions"),
            a("canBeReshared"),
            a("statusAudienceMetadata"),
            a("viewed"),
            a("disappearingModeTrigger"),
            a("disappearingModeInitiatedByMe"),
            a("botResponseTargetId"),
            a("botPluginType"),
            a("botPluginReferenceIndex"),
            a("botPluginSearchProvider"),
            a("botPluginSearchUrl"),
            a("botReelPluginThumbnailCdnUrl"),
            a("botPluginMaybeParent"),
            a("carouselCardsParsed"),
            a("botMsgBodyType"),
            a("botPluginSearchQuery"),
            a("botMessageDisclaimerText"),
            a("botSessionTransparencyType"),
            a("botModeSelection"),
            a("botModeOverride"),
            a("newsletterAdminInviteInfo"),
            a("newsletterFollowerInviteInfo"),
            a("bizContentPlaceholderType"),
            a("hostedBizEncStateMismatch"),
            a("placeholderCreatedWhenAccountIsHosted"),
            a("senderOrRecipientAccountTypeHosted"),
            a("eventInvalidated"),
            a("replyCount"),
            a("associationType"),
            a("parentMsgKey"),
            a("statusMentioned"),
            a("viewMode"),
            a("stickers"),
            a("stickerPackId"),
            a("stickerPackPublisher"),
            a("trayIconFileName"),
            a("stickerPackSize"),
            a("isSupportAIMessage"),
            a("shouldShowSupportAISystemMessage"),
            a("supportCitations"),
            a("isWamoSub"),
            a("hasPaidPartnershipLabel"),
            a("callSilenceReason"),
            a("callOutcome"),
            a("isVideoCall"),
            a("callDuration"),
            a("callParticipants"),
            a("isCallLink"),
            a("callLinkToken"),
            a("finalCallOutcome"),
            a("richResponse"),
            a("unifiedResponse"),
            a("limitSharing"),
            a("galaxyFlowWAMMessageId"),
            a("galaxyFlowQPLMessageId"),
            a("galaxyFlowDisabled"),
            a("signupCtaTapped"),
            a("isGroupStatus"),
            a("isNewsletterStatus"),
            a("faviconMMSMetadata"),
            a("mmSignalSharing"),
            a("groupHistoryBundleMessageKey"),
            a("groupHistoryBundleMetadata"),
            a("groupHistoryIndividualMessageInfo"),
            a("internalThreadIDs"),
            a("nonJidMentions"),
            a("botGroupParticipant"),
            a("isScheduledMsg"),
            a("scheduledTimestampS"),
          ])
          .version(n.messageAddIsSendFailureProperties(), [a("isSendFailure")])
          .version(n.messageAddPaymentTxnStatus(), [a("paymentTxnStatus")])
          .version(n.messageAddProductListPreviewInfo(), [
            a("productListItemCount"),
          ])
          .version(n.messageAddPrivacyModeFields(), [
            a("privacyModeWhenSent"),
            a("bizPrivacyStatus"),
          ])
          .version(n.messageAddProductListPreviewHeaderImage(), [
            a("productHeaderImageRejected"),
          ])
          .version(n.messageAddDisappearingModeInitiator(), [
            a("disappearingModeInitiator"),
          ])
          .version(n.messageAddGroupInviteV4(), [
            a("inviteGrp"),
            a("inviteGrpName"),
            a("comment"),
            a("inviteCode"),
            a("inviteCodeExp"),
          ])
          .version(n.addSupportForHSMButtons(), [a("isFromTemplate")])
          .version(n.messageAddPaymentRequestNFMFields(), [
            a("nativeFlowButtons"),
            a("paymentRequestHeader"),
          ])
          .version(n.addWaveformToAudioMessages(), [a("waveform")])
          .version(n.messageRemovePaymentRequestHeaderField(), [
            d("paymentRequestHeader"),
          ])
          .version(n.messageAddNativeFlowNameField(), [a("nativeFlowName")])
          .version(n.addStaticURLToImageVideoMessages(), [a("staticUrl")])
          .version(n.addRequiresDirectConnection(), [
            a("requiresDirectConnection"),
          ])
          .version(n.messageAddPaymentInviteServiceType(), [
            a("paymentInviteServiceType"),
          ])
          .version(n.addStatusPSACampaignFields(), [
            a("campaignId"),
            a("campaignDuration"),
          ])
          .version(n.messageAddPaymentBackground(), [a("paymentBackground")])
          .version(n.messageAddInteractiveMessageFields(), [
            a("interactiveHeader"),
            a("interactiveType"),
            a("interactivePayload"),
          ])
          .version(n.messageAddActionLink(), [a("actionLink")])
          .version(n.messageAddHeaderType(), [a("headerType")])
          .version(n.messageStatusPSAReadTimestamp(), [
            a("statusPSAReadTimestamp"),
          ])
          .version(n.messageAddPollInvalidated(), [a("pollInvalidated")])
          .version(n.messageAddRcat(), [a("rcat")])
          .version(n.errorCodeColumn(), [a("errorCode")])
          .version(n.lastUpdateTimestampColumn(), [a("lastUpdateFromServerTs")])
          .version(n.paidMessagingCampaignIdColumn(), [a("pmCampaignId")])
          .version(n.messageAddEditIndex(), [s("latestEditMsgKey")])
          .version(n.messageAddIsCarouselIndex(), [
            a("isCarouselMsg"),
            i(["internalId", "isCarouselMsg"]),
          ])
          .version(n.messageAddIsEventMsgIndex(), [
            i(["internalId", "isEventMsg"]),
          ])
          .version(n.messageAddVoipCallLogIndex(), [
            a("isCallLogMsg"),
            s("isCallLogMsg"),
            i(["internalId", "isCallLogMsg"]),
          ])
          .version(n.messageAddVoipCallOutcomeIndex(), [
            s("callOutcome"),
            a("callCreator"),
          ])
          .version(n.messageAddMediaRelatedIndex(), [
            a("typeFlag"),
            i(["typeFlag", "t", "internalId"]),
          ])
          .version(n.messageAddInternalThreadIDIndex(), [
            r("internalThreadIDs"),
          ])
          .version(n.messageAddBloksWidgetField(), [a("bloksWidget")])
          .view(function (e) {
            return e;
          })
          .enablePropFilter(!0)
          .useDbMsgEncKeyForEncryptedCol(!0)
          .commit();
      });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("message");
    }
    ((l.addTable = e), (l.getMessageTable = s));
  },
  98,
);
