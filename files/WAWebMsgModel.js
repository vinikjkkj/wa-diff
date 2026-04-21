__d(
  "WAWebMsgModel",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WATypeUtils",
    "WAWebAck",
    "WAWebBaseModel",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotTypes",
    "WAWebBusinessHSMTypes",
    "WAWebBusinessProfileTypes",
    "WAWebCarouselCardsCollection",
    "WAWebChangePresenceHandlerAction",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebChatContactUtils",
    "WAWebChatGetMessage",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebCommonMsgUtils",
    "WAWebCompactMapString",
    "WAWebConnModel",
    "WAWebConstantsDeprecated",
    "WAWebContactCollection",
    "WAWebDBUpdateMessageTable",
    "WAWebDirectConnectionGatingUtils",
    "WAWebEventsWaitForBbEvent",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebInvisiblePlaceholderViewModeProcessor",
    "WAWebKeepInChatMsgUtils",
    "WAWebMedia",
    "WAWebMediaData",
    "WAWebMediaTypes",
    "WAWebMessageAssociationGatingUtils",
    "WAWebMessageAssociationUIUtils",
    "WAWebMessageReceiptUtils",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModelPropUtils",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebMuteCollection",
    "WAWebNewsletterCollection",
    "WAWebNewsletterSendMsgAction",
    "WAWebNotificationsMsgNotification",
    "WAWebPinInChatCollection",
    "WAWebPromiseQueue",
    "WAWebSendMessageEditAction",
    "WAWebSendMsgRecordAction",
    "WAWebStarredMsgCollection",
    "WAWebSuspendedGroupMediaDownloadFailureModal.react",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebVcardParsingUtils",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebViewOnceState",
    "WAWebWamEnumWebcRmrReasonCode",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "asyncToGeneratorRuntime",
    "fbs",
    "getErrorSafe",
    "gkx",
    "isStringNullOrEmpty",
    "lodash",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
        "ack",
        "author",
        "broadcast",
        "buttons",
        "from",
        "id",
        "invis",
        "isNewMsg",
        "latestEditMsgKey",
        "latestEditSenderTimestampMs",
        "multicast",
        "notifyName",
        "quotedMsg",
        "quotedParticipant",
        "quotedRemoteJid",
        "quotedStanzaID",
        "quotedType",
        "recipients",
        "recvFresh",
        "replyButtons",
        "senderObj",
        "star",
        "t",
        "to",
      ],
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = g || (g = o("react")),
      y = (function (t) {
        function a() {
          for (var e, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
            a[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(a)) || this),
            (e.id = o("WAWebBaseModel").prop()),
            (e.rowId = o("WAWebBaseModel").prop()),
            (e.serverId = o("WAWebBaseModel").prop()),
            (e.parentServerId = o("WAWebBaseModel").prop()),
            (e.questionResponseInfo = o("WAWebBaseModel").prop()),
            (e.viewCount = o("WAWebBaseModel").prop()),
            (e.viewed = o("WAWebBaseModel").prop(!1)),
            (e.body = o("WAWebBaseModel").prop()),
            (e.type = o("WAWebBaseModel").prop()),
            (e.typeFlag = o("WAWebBaseModel").prop()),
            (e.subtype = o("WAWebBaseModel").prop()),
            (e.t = o("WAWebBaseModel").prop()),
            (e.clientReceivedTsMillis = o("WAWebBaseModel").prop()),
            (e.revokeTimestamp = o("WAWebBaseModel").prop()),
            (e.notifyName = o("WAWebBaseModel").prop()),
            (e.from = o("WAWebBaseModel").prop()),
            (e.to = o("WAWebBaseModel").prop()),
            (e.author = o("WAWebBaseModel").prop()),
            (e.ack = o("WAWebBaseModel").prop()),
            (e.invis = o("WAWebBaseModel").prop()),
            (e.isNewMsg = o("WAWebBaseModel").prop()),
            (e.star = o("WAWebBaseModel").prop(!1)),
            (e.kicKey = o("WAWebBaseModel").prop()),
            (e.kicState = o("WAWebBaseModel").prop()),
            (e.kicTimestampMs = o("WAWebBaseModel").prop()),
            (e.kicNotified = o("WAWebBaseModel").prop(!1)),
            (e.keepType = o("WAWebBaseModel").prop()),
            (e.keptMessageKey = o("WAWebBaseModel").prop()),
            (e.keptCount = o("WAWebBaseModel").prop()),
            (e.recvFresh = o("WAWebBaseModel").prop()),
            (e.caption = o("WAWebBaseModel").prop()),
            (e.interactiveAnnotations = o("WAWebBaseModel").prop()),
            (e.lastMusicBlocklistUpdate = o("WAWebBaseModel").prop()),
            (e.contextInfo = o("WAWebBaseModel").prop()),
            (e.statusAttributions = o("WAWebBaseModel").prop()),
            (e.statusAudienceMetadata = o("WAWebBaseModel").prop()),
            (e.clientUrl = o("WAWebBaseModel").prop()),
            (e.loc = o("WAWebBaseModel").prop()),
            (e.lat = o("WAWebBaseModel").prop()),
            (e.lng = o("WAWebBaseModel").prop()),
            (e.isLive = o("WAWebBaseModel").prop()),
            (e.accuracy = o("WAWebBaseModel").prop()),
            (e.speed = o("WAWebBaseModel").prop()),
            (e.degrees = o("WAWebBaseModel").prop()),
            (e.comment = o("WAWebBaseModel").prop()),
            (e.sequence = o("WAWebBaseModel").prop()),
            (e.shareDuration = o("WAWebBaseModel").prop()),
            (e.finalLat = o("WAWebBaseModel").prop()),
            (e.finalLng = o("WAWebBaseModel").prop()),
            (e.finalAccuracy = o("WAWebBaseModel").prop()),
            (e.finalThumbnail = o("WAWebBaseModel").prop()),
            (e.finalSpeed = o("WAWebBaseModel").prop()),
            (e.finalDegrees = o("WAWebBaseModel").prop()),
            (e.finalTimeOffset = o("WAWebBaseModel").prop()),
            (e.deprecatedMms3Url = o("WAWebBaseModel").prop()),
            (e.directPath = o("WAWebBaseModel").prop()),
            (e.mimetype = o("WAWebBaseModel").prop()),
            (e.duration = o("WAWebBaseModel").prop()),
            (e.filehash = o("WAWebBaseModel").prop()),
            (e.encFilehash = o("WAWebBaseModel").prop()),
            (e.size = o("WAWebBaseModel").prop()),
            (e.filename = o("WAWebBaseModel").prop()),
            (e.streamingSidecar = o("WAWebBaseModel").prop()),
            (e.mediaKey = o("WAWebBaseModel").prop()),
            (e.mediaKeyTimestamp = o("WAWebBaseModel").prop()),
            (e.pageCount = o("WAWebBaseModel").prop()),
            (e.isGif = o("WAWebBaseModel").prop()),
            (e.gifAttribution = o("WAWebBaseModel").prop()),
            (e.accessibilityLabel = o("WAWebBaseModel").prop()),
            (e.isViewOnce = o("WAWebBaseModel").prop()),
            (e.streamable = o("WAWebBaseModel").prop()),
            (e.width = o("WAWebBaseModel").prop()),
            (e.height = o("WAWebBaseModel").prop()),
            (e.thumbnailDirectPath = o("WAWebBaseModel").prop()),
            (e.thumbnailSha256 = o("WAWebBaseModel").prop()),
            (e.thumbnailEncSha256 = o("WAWebBaseModel").prop()),
            (e.thumbnailHeight = o("WAWebBaseModel").prop()),
            (e.thumbnailWidth = o("WAWebBaseModel").prop()),
            (e.metadataUrl = o("WAWebBaseModel").prop()),
            (e.waveform = o("WAWebBaseModel").prop()),
            (e.staticUrl = o("WAWebBaseModel").prop()),
            (e.stickerPackId = o("WAWebBaseModel").prop()),
            (e.stickerPackName = o("WAWebBaseModel").prop()),
            (e.stickerPackPublisher = o("WAWebBaseModel").prop()),
            (e.stickers = o("WAWebBaseModel").prop()),
            (e.trayIconFileName = o("WAWebBaseModel").prop()),
            (e.stickerPackSize = o("WAWebBaseModel").prop()),
            (e.mediaHandle = o("WAWebBaseModel").prop()),
            (e.scanLengths = o("WAWebBaseModel").prop()),
            (e.scansSidecar = o("WAWebBaseModel").prop()),
            (e.isFromTemplate = o("WAWebBaseModel").prop(!1)),
            (e.devicesAdded = o("WAWebBaseModel").prop()),
            (e.devicesRemoved = o("WAWebBaseModel").prop()),
            (e.isThisDeviceAdded = o("WAWebBaseModel").prop()),
            (e.firstFrameLength = o("WAWebBaseModel").prop()),
            (e.firstFrameSidecar = o("WAWebBaseModel").prop()),
            (e.isAnimated = o("WAWebBaseModel").prop()),
            (e.isLottie = o("WAWebBaseModel").prop()),
            (e.matchedText = o("WAWebBaseModel").prop()),
            (e.thumbnail = o("WAWebBaseModel").prop()),
            (e.thumbnailHQ = o("WAWebBaseModel").prop()),
            (e.richPreviewType = o("WAWebBaseModel").prop()),
            (e.doNotPlayInline = o("WAWebBaseModel").prop()),
            (e.rcat = o("WAWebBaseModel").prop()),
            (e.faviconMMSMetadata = o("WAWebBaseModel").prop()),
            (e.isScheduledMsg = o("WAWebBaseModel").prop()),
            (e.scheduledTimestampS = o("WAWebBaseModel").prop()),
            (e.title = o("WAWebBaseModel").prop()),
            (e.description = o("WAWebBaseModel").prop()),
            (e.isAdsMedia = o("WAWebBaseModel").prop(!1)),
            (e.paymentLinkMetadata = o("WAWebBaseModel").prop()),
            (e.businessOwnerJid = o("WAWebBaseModel").prop()),
            (e.productId = o("WAWebBaseModel").prop()),
            (e.currencyCode = o("WAWebBaseModel").prop()),
            (e.priceAmount1000 = o("WAWebBaseModel").prop()),
            (e.salePriceAmount1000 = o("WAWebBaseModel").prop()),
            (e.retailerId = o("WAWebBaseModel").prop()),
            (e.url = o("WAWebBaseModel").prop()),
            (e.productImageCount = o("WAWebBaseModel").prop()),
            (e.sessionId = o("WAWebBaseModel").prop()),
            (e.pollName = o("WAWebBaseModel").prop()),
            (e.pollOptions = o("WAWebBaseModel").prop()),
            (e.pollSelectableOptionsCount = o("WAWebBaseModel").prop()),
            (e.pollInvalidated = o("WAWebBaseModel").prop(!1)),
            (e.pollContentType = o("WAWebBaseModel").prop()),
            (e.pollType = o("WAWebBaseModel").prop()),
            (e.correctOptionIndex = o("WAWebBaseModel").prop()),
            (e.pollEndTime = o("WAWebBaseModel").prop()),
            (e.pollHideVoterNames = o("WAWebBaseModel").prop()),
            (e.pollAllowAddOption = o("WAWebBaseModel").prop()),
            (e.isSentCagPollCreation = o("WAWebBaseModel").prop(!1)),
            (e.pollUpdateParentKey = o("WAWebBaseModel").prop()),
            (e.encPollVote = o("WAWebBaseModel").prop()),
            (e.selectedOptionLocalIds = o("WAWebBaseModel").prop()),
            (e.pollVotesSnapshot = o("WAWebBaseModel").prop()),
            (e.quarantineExtractedText = o("WAWebBaseModel").prop()),
            (e.quarantineOriginalProtobuf = o("WAWebBaseModel").prop()),
            (e.senderTimestampMs = o("WAWebBaseModel").prop()),
            (e.latestEditMsgKey = o("WAWebBaseModel").prop(null)),
            (e.latestEditSenderTimestampMs = o("WAWebBaseModel").prop(null)),
            (e.editMsgType = o("WAWebBaseModel").prop()),
            (e.recipients = o("WAWebBaseModel").prop()),
            (e.broadcast = o("WAWebBaseModel").prop()),
            (e.quotedMsg = o("WAWebBaseModel").prop()),
            (e.quotedStanzaID = o("WAWebBaseModel").prop()),
            (e.quotedRemoteJid = o("WAWebBaseModel").prop()),
            (e.quotedParticipant = o("WAWebBaseModel").prop()),
            (e.quotedGroupSubject = o("WAWebBaseModel").prop()),
            (e.quotedParentGroupJid = o("WAWebBaseModel").prop()),
            (e.quotedType = o("WAWebBaseModel").prop()),
            (e.mentionedJidList = o("WAWebBaseModel").prop()),
            (e.reporterJidList = o("WAWebBaseModel").prop()),
            (e.groupMentions = o("WAWebBaseModel").prop()),
            (e.footer = o("WAWebBaseModel").prop()),
            (e.hydratedButtons = o("WAWebBaseModel").prop()),
            (e.buttons = o("WAWebBaseModel").session()),
            (e.hsmTag = o("WAWebBaseModel").prop()),
            (e.hsmCategory = o("WAWebBaseModel").prop()),
            (e.templateId = o("WAWebBaseModel").prop()),
            (e.eventName = o("WAWebBaseModel").prop()),
            (e.isEventCanceled = o("WAWebBaseModel").prop(!1)),
            (e.eventDescription = o("WAWebBaseModel").prop()),
            (e.eventJoinLink = o("WAWebBaseModel").prop()),
            (e.eventStartTime = o("WAWebBaseModel").prop()),
            (e.eventEndTime = o("WAWebBaseModel").prop()),
            (e.eventLocation = o("WAWebBaseModel").prop()),
            (e.eventInvalidated = o("WAWebBaseModel").prop(!1)),
            (e.eventIsScheduledCall = o("WAWebBaseModel").prop()),
            (e.eventExtraGuestsAllowed = o("WAWebBaseModel").prop()),
            (e.selectedId = o("WAWebBaseModel").prop()),
            (e.selectedIndex = o("WAWebBaseModel").prop()),
            (e.selectedCarouselCardIndex = o("WAWebBaseModel").prop()),
            (e.multicast = o("WAWebBaseModel").prop()),
            (e.urlText = o("WAWebBaseModel").prop()),
            (e.urlNumber = o("WAWebBaseModel").prop()),
            (e.statusMentioned = o("WAWebBaseModel").prop()),
            (e.isWamoSub = o("WAWebBaseModel").prop()),
            (e.hasPaidPartnershipLabel = o("WAWebBaseModel").prop()),
            (e.clearMedia = o("WAWebBaseModel").prop()),
            (e.isVcardOverMmsDocument = o("WAWebBaseModel").prop(!1)),
            (e.isCaptionByUser = o("WAWebBaseModel").prop()),
            (e.vcardList = o("WAWebBaseModel").prop()),
            (e.vcardFormattedName = o("WAWebBaseModel").prop()),
            (e.revokeSender = o("WAWebBaseModel").prop()),
            (e.protocolMessageKey = o("WAWebBaseModel").prop()),
            (e.futureproofBuffer = o("WAWebBaseModel").prop()),
            (e.futureproofParams = o("WAWebBaseModel").prop()),
            (e.futureproofType = o("WAWebBaseModel").prop()),
            (e.futureproofSubtype = o("WAWebBaseModel").prop()),
            (e.templateParams = o("WAWebBaseModel").prop()),
            (e.textColor = o("WAWebBaseModel").prop()),
            (e.backgroundColor = o("WAWebBaseModel").prop()),
            (e.font = o("WAWebBaseModel").prop()),
            (e.cannotBeRanked = o("WAWebBaseModel").prop()),
            (e.canBeReshared = o("WAWebBaseModel").prop()),
            (e.campaignId = o("WAWebBaseModel").prop()),
            (e.campaignDuration = o("WAWebBaseModel").prop()),
            (e.actionLink = o("WAWebBaseModel").prop()),
            (e.statusPSAReadTimestamp = o("WAWebBaseModel").prop()),
            (e.crosspostingInfo = o("WAWebBaseModel").prop()),
            (e.isForwarded = o("WAWebBaseModel").prop(!1)),
            (e.isQuestion = o("WAWebBaseModel").prop(!1)),
            (e.questionReplyQuotedMessage = o("WAWebBaseModel").prop(null)),
            (e.questionResponsesCount = o("WAWebBaseModel").prop(0)),
            (e.readQuestionResponsesCount = o("WAWebBaseModel").prop(0)),
            (e.forwardsCount = o("WAWebBaseModel").prop(0)),
            (e.forwardingScore = o("WAWebBaseModel").prop()),
            (e.labels = o("WAWebBaseModel").prop()),
            (e.hasReaction = o("WAWebBaseModel").prop(!1)),
            (e.newsletterAdminProfile = o("WAWebBaseModel").prop(null)),
            (e.paymentCurrency = o("WAWebBaseModel").prop()),
            (e.paymentAmount1000 = o("WAWebBaseModel").prop()),
            (e.paymentMessageReceiverJid = o("WAWebBaseModel").prop()),
            (e.paymentTransactionTimestamp = o("WAWebBaseModel").prop()),
            (e.paymentStatus = o("WAWebBaseModel").prop()),
            (e.paymentTxnStatus = o("WAWebBaseModel").prop()),
            (e.paymentNoteMsg = o("WAWebBaseModel").prop()),
            (e.paymentRequestMessageKey = o("WAWebBaseModel").prop()),
            (e.paymentExpiryTimestamp = o("WAWebBaseModel").prop()),
            (e.paymentInviteServiceType = o("WAWebBaseModel").prop()),
            (e.ephemeralDuration = o("WAWebBaseModel").prop()),
            (e.ephemeralSettingTimestamp = o("WAWebBaseModel").prop()),
            (e.ephemeralOutOfSync = o("WAWebBaseModel").prop()),
            (e.ephemeralSharedSecret = o("WAWebBaseModel").prop()),
            (e.disappearingModeInitiator = o("WAWebBaseModel").prop()),
            (e.ephemeralSettingUser = o("WAWebBaseModel").prop()),
            (e.disappearingModeTrigger = o("WAWebBaseModel").prop()),
            (e.disappearingModeInitiatedByMe = o("WAWebBaseModel").prop()),
            (e.afterReadDuration = o("WAWebBaseModel").prop()),
            (e.expiredTimestamp = o("WAWebBaseModel").prop()),
            (e.parentMsgKey = o("WAWebBaseModel").prop()),
            (e.associationType = o("WAWebBaseModel").prop()),
            (e.viewMode = o("WAWebBaseModel").prop()),
            (e.messageSecret = o("WAWebBaseModel").prop()),
            (e.originalSelfAuthor = o("WAWebBaseModel").prop()),
            (e.bizPrivacyStatus = o("WAWebBaseModel").prop()),
            (e.privacyModeWhenSent = o("WAWebBaseModel").prop()),
            (e.verifiedBizName = o("WAWebBaseModel").prop()),
            (e.inviteCode = o("WAWebBaseModel").prop()),
            (e.inviteCodeExp = o("WAWebBaseModel").prop()),
            (e.inviteGrp = o("WAWebBaseModel").prop()),
            (e.inviteGrpName = o("WAWebBaseModel").prop()),
            (e.inviteGrpJpegThum = o("WAWebBaseModel").prop()),
            (e.inviteGrpType = o("WAWebBaseModel").prop()),
            (e.threadIds = o("WAWebBaseModel").prop()),
            (e.aiThreadInfo = o("WAWebBaseModel").prop()),
            (e.sellerJid = o("WAWebBaseModel").prop()),
            (e.message = o("WAWebBaseModel").prop()),
            (e.orderTitle = o("WAWebBaseModel").prop()),
            (e.itemCount = o("WAWebBaseModel").prop()),
            (e.orderId = o("WAWebBaseModel").prop()),
            (e.surface = o("WAWebBaseModel").prop()),
            (e.status = o("WAWebBaseModel").prop()),
            (e.token = o("WAWebBaseModel").prop()),
            (e.totalAmount1000 = o("WAWebBaseModel").prop()),
            (e.totalCurrencyCode = o("WAWebBaseModel").prop()),
            (e.catalogType = o("WAWebBaseModel").prop()),
            (e.historySyncMetaData = o("WAWebBaseModel").prop()),
            (e.isSendFailure = o("WAWebBaseModel").prop()),
            (e.errorCode = o("WAWebBaseModel").prop()),
            (e.appStateSyncKeyShare = o("WAWebBaseModel").prop()),
            (e.appStateSyncKeyRequest = o("WAWebBaseModel").prop()),
            (e.appStateFatalExceptionNotification = o("WAWebBaseModel").prop()),
            (e.peerDataOperationRequestMessage = o("WAWebBaseModel").prop()),
            (e.peerDataOperationRequestResponseMessage =
              o("WAWebBaseModel").prop()),
            (e.broadcastParticipants = o("WAWebBaseModel").prop()),
            (e.broadcastEphSettings = o("WAWebBaseModel").prop()),
            (e.broadcastId = o("WAWebBaseModel").prop()),
            (e.smbClientCampaignId = o("WAWebBaseModel").prop()),
            (e.ctwaContext = o("WAWebBaseModel").prop()),
            (e.signupContext = o("WAWebBaseModel").prop()),
            (e.utm = o("WAWebBaseModel").session()),
            (e.list = o("WAWebBaseModel").prop()),
            (e.listResponse = o("WAWebBaseModel").prop()),
            (e.productListItemCount = o("WAWebBaseModel").prop()),
            (e.productHeaderImageRejected = o("WAWebBaseModel").prop(!1)),
            (e.agentId = o("WAWebBaseModel").prop()),
            (e.lastPlaybackProgress = o("WAWebBaseModel").prop(0)),
            (e.local = o("WAWebBaseModel").session(!1)),
            (e.search = o("WAWebBaseModel").session()),
            (e.$MsgImpl$p_1 = o("WAWebBaseModel").session()),
            (e.$MsgImpl$p_2 = o("WAWebBaseModel").session(function () {
              return new Map();
            })),
            (e.startOfDay = o("WAWebBaseModel").session()),
            (e.startOfDaySkew = o("WAWebBaseModel").session()),
            (e.quotedMsgKey = o("WAWebBaseModel").session()),
            (e.isQuotedMsgAvailable = o("WAWebBaseModel").session(!0)),
            (e.fromQuotedMsg = o("WAWebBaseModel").session(!1)),
            (e.senderObj = o("WAWebBaseModel").session()),
            (e.mediaData = o("WAWebBaseModel").session()),
            (e.forwardedFromWeb = o("WAWebBaseModel").session(!1)),
            (e.nonce = o("WAWebBaseModel").session()),
            (e.squelch = o("WAWebBaseModel").session()),
            (e.wamMessageSendReporter = o("WAWebBaseModel").session()),
            (e.wamMessageSendPerfReporter = o("WAWebBaseModel").session()),
            (e.pendingDeleteForMe = o("WAWebBaseModel").session(!1)),
            (e.isFadingOut = o("WAWebBaseModel").session(!1)),
            (e.isDynamicReplyButtonsMsg = o("WAWebBaseModel").prop(!1)),
            (e.dynamicReplyButtons = o("WAWebBaseModel").prop()),
            (e.replyButtons = o("WAWebBaseModel").session()),
            (e.buttonsResponse = o("WAWebBaseModel").prop()),
            (e.selectedButtonId = o("WAWebBaseModel").prop()),
            (e.headerType = o("WAWebBaseModel").prop()),
            (e.nativeFlowName = o("WAWebBaseModel").prop()),
            (e.nativeFlowButtons = o("WAWebBaseModel").prop()),
            (e.interactiveHeader = o("WAWebBaseModel").prop()),
            (e.interactiveType = o("WAWebBaseModel").prop()),
            (e.interactivePayload = o("WAWebBaseModel").prop()),
            (e.nativeFlowInteractiveMsg = o("WAWebBaseModel").prop()),
            (e.carouselCardsParsed = o("WAWebBaseModel").prop()),
            (e.carouselCards = o("WAWebBaseModel").session()),
            (e.isCarouselCard = o("WAWebBaseModel").prop(!1)),
            (e.parentMsgId = o("WAWebBaseModel").prop(null)),
            (e.callSilenceReason = o("WAWebBaseModel").prop(null)),
            (e.callOutcome = o("WAWebBaseModel").prop()),
            (e.isVideoCall = o("WAWebBaseModel").prop(!1)),
            (e.callDuration = o("WAWebBaseModel").prop(null)),
            (e.callCreator = o("WAWebBaseModel").prop(null)),
            (e.callParticipants = o("WAWebBaseModel").prop(null)),
            (e.isCallLink = o("WAWebBaseModel").prop(null)),
            (e.callLinkToken = o("WAWebBaseModel").prop(null)),
            (e.finalCallOutcome = o("WAWebBaseModel").prop()),
            (e.terminatedByDeviceSwitch = o("WAWebBaseModel").prop(null)),
            (e.selfOtherDeviceConnected = o("WAWebBaseModel").prop(null)),
            (e.reactionParentKey = o("WAWebBaseModel").prop()),
            (e.reactionText = o("WAWebBaseModel").prop()),
            (e.reactionTimestamp = o("WAWebBaseModel").prop()),
            (e.targetMessageKey = o("WAWebBaseModel").prop()),
            (e.encIv = o("WAWebBaseModel").prop()),
            (e.encPayload = o("WAWebBaseModel").prop()),
            (e.replyCount = o("WAWebBaseModel").prop()),
            (e.pinParentKey = o("WAWebBaseModel").prop()),
            (e.pinMessageType = o("WAWebBaseModel").prop()),
            (e.pinSenderTimestampMs = o("WAWebBaseModel").prop()),
            (e.pinExpiryDuration = o("WAWebBaseModel").prop()),
            (e.revokeDuration = o("WAWebBaseModel").session()),
            (e.isMdHistoryMsg = o("WAWebBaseModel").prop(!1)),
            (e.stickerSentTs = o("WAWebBaseModel").prop(0)),
            (e.isAvatar = o("WAWebBaseModel").prop(!1)),
            (e.stickerPremiumStatus = o("WAWebBaseModel").prop()),
            (e.bizSource = o("WAWebBaseModel").prop()),
            (e.pmCampaignId = o("WAWebBaseModel").prop()),
            (e.decisionId = o("WAWebBaseModel").prop()),
            (e.sourceType = o("WAWebBaseModel").prop()),
            (e.decisionSources = o("WAWebBaseModel").prop()),
            (e.lastUpdateFromServerTs = o("WAWebBaseModel").prop(0)),
            (e.botEditType = o("WAWebBaseModel").prop()),
            (e.invokedBotWid = o("WAWebBaseModel").prop(null)),
            (e.botMessageSecret = o("WAWebBaseModel").prop()),
            (e.botFeedbackKind = o("WAWebBaseModel").prop()),
            (e.botFeedbackText = o("WAWebBaseModel").prop()),
            (e.botTargetSenderJid = o("WAWebBaseModel").prop()),
            (e.botGroupParticipant = o("WAWebBaseModel").prop()),
            (e.bizBotType = o("WAWebBaseModel").prop(null)),
            (e.botPersonaId = o("WAWebBaseModel").prop()),
            (e.activeBotMsgStreamingInProgress =
              o("WAWebBaseModel").session(!1)),
            (e.botEditTimeoutID = o("WAWebBaseModel").session()),
            (e.lastBotEditBodyLength = o("WAWebBaseModel").session()),
            (e.botEditTargetId = o("WAWebBaseModel").session()),
            (e.botRespOrInvocationRevokeBotWid =
              o("WAWebBaseModel").session(null)),
            (e.botResponseTargetId = o("WAWebBaseModel").prop(null)),
            (e.botPluginType = o("WAWebBaseModel").prop(null)),
            (e.botPluginReferenceIndex = o("WAWebBaseModel").prop(null)),
            (e.botPluginSearchProvider = o("WAWebBaseModel").prop(null)),
            (e.botPluginSearchUrl = o("WAWebBaseModel").prop(null)),
            (e.botPluginSearchQuery = o("WAWebBaseModel").prop(null)),
            (e.botPluginMaybeParent = o("WAWebBaseModel").prop(!1)),
            (e.botReelPluginThumbnailCdnUrl = o("WAWebBaseModel").prop(null)),
            (e.botMessageDisclaimerText = o("WAWebBaseModel").prop(null)),
            (e.botSessionTransparencyType = o("WAWebBaseModel").prop(null)),
            (e.botMetricsMetadata = o("WAWebBaseModel").session(null)),
            (e.botMsgBodyType = o("WAWebBaseModel").prop(null)),
            (e.botModeSelection = o("WAWebBaseModel").prop(null)),
            (e.botModeOverride = o("WAWebBaseModel").prop(null)),
            (e.isSupportAIMessage = o("WAWebBaseModel").prop()),
            (e.supportCitations = o("WAWebBaseModel").prop()),
            (e.richResponse = o("WAWebBaseModel").prop()),
            (e.unifiedResponse = o("WAWebBaseModel").prop()),
            (e.forwardedNewsletterMessageInfo = o("WAWebBaseModel").prop()),
            (e.forwardedAiBotMessageInfo = o("WAWebBaseModel").prop()),
            (e.encryptedData = o("WAWebBaseModel").prop()),
            (e.newsletterAdminInviteInfo = o("WAWebBaseModel").prop()),
            (e.newsletterFollowerInviteInfo = o("WAWebBaseModel").prop()),
            (e.reportingTokenInfo = o("WAWebBaseModel").prop()),
            (e.reportingTokenContent = o("WAWebBaseModel").prop()),
            (e.plainProtobufBytes = o("WAWebBaseModel").session()),
            (e.preMatChat = o("WAWebBaseModel").session()),
            (e.senderWithDevice = o("WAWebBaseModel").session()),
            (e.isRetry = o("WAWebBaseModel").session(!1)),
            (e.isOffline = o("WAWebBaseModel").session(!1)),
            (e.read = o("WAWebBaseModel").prop()),
            (e.memberLabelData = o("WAWebBaseModel").prop()),
            (e.musicArtwork = o("WAWebBaseModel").prop()),
            (e.$MsgImpl$p_3 = o("WAWebBaseModel").session(function () {
              return [];
            })),
            (e.$MsgImpl$p_4 = o("WAWebBaseModel").session(function () {
              return [];
            })),
            (e.$MsgImpl$p_5 = o("WAWebBaseModel").session(function () {
              return [];
            })),
            (e.linksIndexParsed = o("WAWebBaseModel").session(0)),
            (e.$MsgImpl$p_6 = o("WAWebBaseModel").session()),
            (e.$MsgImpl$p_7 = o("WAWebBaseModel").session(function () {
              return [];
            })),
            (e.$MsgImpl$p_8 = o("WAWebBaseModel").session(function () {
              return [];
            })),
            (e.$MsgImpl$p_9 = o("WAWebBaseModel").session(function () {
              return [];
            })),
            (e.phoneNumbersIndexParsed = o("WAWebBaseModel").session(0)),
            (e.$MsgImpl$p_10 = o("WAWebBaseModel").session()),
            (e.requiresDirectConnection = o("WAWebBaseModel").prop(null)),
            (e.isGroupStatus = o("WAWebBaseModel").prop()),
            (e.isNewsletterStatus = o("WAWebBaseModel").prop()),
            (e.isOverwrittenByRevoke = o("WAWebBaseModel").session(!1)),
            (e.bizContentPlaceholderType = o("WAWebBaseModel").prop(null)),
            (e.hostedBizEncStateMismatch = o("WAWebBaseModel").prop(!1)),
            (e.senderOrRecipientAccountTypeHosted =
              o("WAWebBaseModel").prop(!1)),
            (e.placeholderCreatedWhenAccountIsHosted =
              o("WAWebBaseModel").prop(!1)),
            (e.limitSharing = o("WAWebBaseModel").prop()),
            (e.galaxyFlowWAMMessageId = o("WAWebBaseModel").prop()),
            (e.galaxyFlowQPLMessageId = o("WAWebBaseModel").prop()),
            (e.galaxyFlowDisabled = o("WAWebBaseModel").prop()),
            (e.signupCtaTapped = o("WAWebBaseModel").prop()),
            (e.groupHistoryBundleMessageKey = o("WAWebBaseModel").prop(null)),
            (e.groupHistoryBundleMetadata = o("WAWebBaseModel").prop(null)),
            (e.groupHistoryIndividualMessageInfo =
              o("WAWebBaseModel").prop(null)),
            (e.nonJidMentions = o("WAWebBaseModel").prop(null)),
            (e.createdMediaDataOnInit = o("WAWebBaseModel").session(!1)),
            (e.createdMediaDataOnUpdate = o("WAWebBaseModel").session(!1)),
            (e.oldType = o("WAWebBaseModel").session()),
            (e.newType = o("WAWebBaseModel").session()),
            (e.typeOnInit = o("WAWebBaseModel").session()),
            (e.calledCiphertextDecrypted = o("WAWebBaseModel").session(!1)),
            (e.$MsgImpl$p_21 = r("lodash").debounce(function (e, t) {
              o("WAWebDBUpdateMessageTable").updateMessageTable(e, {
                lastPlaybackProgress: t,
              });
            }, 500)),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.pendingAckUpdate_TESTONLY = function () {
            return this.$MsgImpl$p_11;
          }),
          (i.initializeMedia = function () {
            (this.$MsgImpl$p_12(),
              (!this.isViewOnce ||
                o("WAWebViewOnceState").isUnviewed(this.safe())) &&
                o("WAWebMedia").registerMsg(this));
          }),
          (i.initialize = function () {
            var e = this,
              n;
            (t.prototype.initialize.call(this),
              (this.typeOnInit = this.type),
              this.carouselCardsParsed != null && this.$MsgImpl$p_13(),
              this.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
                this.listenTo(
                  this,
                  "change:carouselCardsParsed",
                  this.$MsgImpl$p_13,
                ),
              (this.$MsgImpl$p_11 = new (o(
                "WAWebPromiseQueue",
              ).PromiseQueue)()));
            var a = o("WAWebMsgModelUtils").getValidatedSender(this);
            (a &&
              (this.addChild(
                "senderObj",
                o("WAWebContactCollection").ContactCollection.gadd(
                  a.isUser() &&
                    !a.isFbidBot() &&
                    !a.isHosted() &&
                    !a.isNewsletter()
                    ? o("WAWebWidFactory").createWid(
                        a.isLid()
                          ? o("WAJids").toLidUserJid(a.user)
                          : o("WAJids").toPhoneUserJid(a.user),
                      )
                    : a,
                ),
              ),
              this.hsmTag ===
                o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.MARKETING &&
                this.senderObj.setIsMarketingMessageThread(!0)),
              (this.mentionedJidList = this.mentionedJidList || []),
              (this.groupMentions = this.groupMentions || []),
              this.mentionedJidList.forEach(function (e) {
                return o("WAWebContactCollection").ContactCollection.gadd(e);
              }),
              this.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT &&
                this.listenToOnce(this, "change:type", this.$MsgImpl$p_14),
              (this.mediaObject = void 0),
              o("WAWebMsgModelUtils").typeIsMms(this) &&
                ((this.createdMediaDataOnInit = !0), this.initializeMedia()),
              this.isViewOnce &&
                (this.listenTo(this, "change:ack", this.$MsgImpl$p_15),
                this.listenTo(
                  this.mediaData,
                  "change:mediaStage",
                  this.$MsgImpl$p_15,
                )),
              this.listenTo(this, "change:viewMode", this.$MsgImpl$p_16),
              o("WAWebViewModeUtils").isViewModeVisibleInSurface(
                o("WAWebViewMode.flow").ViewModeSurface.CHAT,
                this.viewMode,
              ) || this.$MsgImpl$p_16(),
              r("gkx")("26258") ||
                this.listenTo(this, "change:t", function () {
                  Number.isInteger(e.t) ||
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Invalid timestamp value in msg, raw ts value: ",
                            ", msgId: ",
                            ", msgType: ",
                            "_",
                            "",
                          ])),
                        e.t,
                        e.id.toString(),
                        e.type,
                        e.subtype,
                      )
                      .tags("date_marker")
                      .sendLogs("Msg TS updated to invalid value");
                }),
              o("WAWebMsgGetters").getIsMetaBotResponse(this) &&
                this.listenTo(this, "change:botEditType", this.$MsgImpl$p_17),
              this.recvFresh &&
                (n = this.senderObj) != null &&
                (n = n.id) != null &&
                n.isBot() &&
                (this.botEditType == null &&
                  (this.botEditType = o("WAWebBotTypes").BotMsgEditType.FULL),
                (this.activeBotMsgStreamingInProgress = !0)),
              this.$MsgImpl$p_17());
          }),
          (i.$MsgImpl$p_16 = function () {
            var e,
              t,
              n =
                (e =
                  (t = o("WAWebFrontendMsgGetters").getMaybeChat(this)) == null
                    ? void 0
                    : t.msgs) != null
                  ? e
                  : this.$MsgImpl$p_1;
            (o("WAWebViewModeUtils").isViewModeVisibleInSurface(
              o("WAWebViewMode.flow").ViewModeSurface.CHAT,
              this.viewMode,
            )
              ? n == null || n.trigger("insert_msgs", [this], {})
              : (this._triggerNotificationForParentMessage(),
                this.$MsgImpl$p_18({ messageInHiddenViewMode: !0 }),
                n == null || n.trigger("remove_msgs", [this], {})),
              n == null || n.triggerChangeLast(null, n, {}));
          }),
          (i.hideParentMessageInChat = function (t) {
            var e = t.duringDetach,
              n = this.parentMsgKey;
            if (n) {
              var r,
                a = this.getCollection().get(n);
              a &&
                (r = o("WAWebInvisiblePlaceholderViewModeProcessor")
                  .InvisiblePlaceholderViewModeProcessor
                  .compatibleMessageTypes) != null &&
                r.includes(a.type) &&
                o("WAWebMessageAssociationUIUtils").shouldHideParentMessage({
                  parentMsg: a,
                  duringDetach: e,
                }) &&
                a.set(
                  "viewMode",
                  o("WAWebViewMode.flow").ViewModeType.INVISIBLE_PLACEHOLDER,
                );
            }
          }),
          (i._triggerNotificationForParentMessage = function () {
            var e = o("WAWebFrontendMsgGetters").getEventType(this),
              t = this.parentMsgKey,
              n =
                this.recvFresh &&
                !o("WAWebMsgGetters").getIsSentByMe(this) &&
                (e === o("WAWebCommonMsgUtils").EventType.DEFAULT ||
                  e === o("WAWebCommonMsgUtils").EventType.SIGNIFICANT);
            if (t && n) {
              var r = this.getCollection().get(t);
              r &&
              o(
                "WAWebNotificationsMsgNotification",
              ).eligibleMessagesForNotificationRetriggering.has(r.type)
                ? o("WAWebCmd").Cmd.alertNewMsg(r)
                : o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Msg: _triggerNotificationForParentMessage: parentMsg for ",
                        " not found in MsgCollection or not eligible for notification re-triggering",
                      ])),
                    this.id.toString(),
                  );
            }
          }),
          (i.$MsgImpl$p_13 = function () {
            var e,
              t,
              n = this.carouselCardsParsed;
            if (n != null) {
              var o =
                  (e =
                    (t = this.carouselCards) == null
                      ? void 0
                      : t.getCardsById()) != null
                    ? e
                    : {},
                a = [];
              for (var i of n) {
                var l = i.id.toString();
                if (o[l] != null) {
                  var s = o[l];
                  (s.set(i), a.push(s));
                } else {
                  var u = babelHelpers.extends({}, i);
                  a.push(u);
                }
              }
              var c = new (r("WAWebCarouselCardsCollection"))();
              (c.add(a),
                (this.carouselCards = c),
                this.getCollection().add(c.slice()));
            }
          }),
          (i.$MsgImpl$p_17 = function () {
            var e = this;
            if (
              this.subtype ===
              o("WAWebBotGenTypingIndicatorMsg")
                .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE
            ) {
              var t = o(
                "WAWebBotGenTypingIndicatorMsg",
              ).getBotTypingIndicatorTimeout();
              (self.setTimeout(function () {
                e.delete();
              }, t),
                r("WAWebChangePresenceHandlerAction")({
                  id: this.id.remote,
                  type: "typing",
                }));
              return;
            }
            var n = this.botEditType;
            if (n != null) {
              var a = o(
                "WAWebBotGenTypingIndicatorMsg",
              ).getBotTypingIndicatorTimeout();
              switch (n) {
                case o("WAWebBotTypes").BotMsgEditType.LAST:
                case o("WAWebBotTypes").BotMsgEditType.FULL:
                  ((this.activeBotMsgStreamingInProgress = !1),
                    this.botEditTimeoutID &&
                      self.clearTimeout(this.botEditTimeoutID));
                  return;
                default:
                  this.botEditTimeoutID = self.setTimeout(function () {
                    ((e.activeBotMsgStreamingInProgress = !1),
                      (e.botEditType = o("WAWebBotTypes").BotMsgEditType.LAST),
                      o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, {
                        botEditType: o("WAWebBotTypes").BotMsgEditType.LAST,
                      }));
                  }, a);
              }
            }
          }),
          (i.getMsgChunk = function (t) {
            return t != null
              ? this.$MsgImpl$p_2.get(t.toString())
              : this.$MsgImpl$p_1;
          }),
          (i.setMsgChunk = function (t, n) {
            n != null
              ? this.$MsgImpl$p_2.set(n.toString(), t)
              : (this.$MsgImpl$p_1 = t);
          }),
          (i.forEachThreadMsgChunk = function (t) {
            this.$MsgImpl$p_2.forEach(function (e, n) {
              t(e, n);
            });
          }),
          (i.getRawLinks = function () {
            return (
              this.type === o("WAWebMsgType").MSG_TYPE.REVOKED &&
                this.$MsgImpl$p_3.length > 0 &&
                this.clearRawLinks(),
              this.$MsgImpl$p_3
            );
          }),
          (i.setRawLinks = function (t) {
            t.length > 0 && (this.$MsgImpl$p_3 = t);
          }),
          (i.clearRawLinks = function () {
            ((this.$MsgImpl$p_3 = []), (this.linksIndexParsed = 0));
          }),
          (i.getRawPollOptionsToLinks = function () {
            return this.$MsgImpl$p_6;
          }),
          (i.setRawPollOptionsToLinks = function (t) {
            this.$MsgImpl$p_6 = t;
          }),
          (i.getRawHeaderLinks = function () {
            return this.$MsgImpl$p_4;
          }),
          (i.setRawHeaderLinks = function (t) {
            t.length > 0 && (this.$MsgImpl$p_4 = t);
          }),
          (i.getRawFooterLinks = function () {
            return this.$MsgImpl$p_5;
          }),
          (i.setRawFooterLinks = function (t) {
            t.length > 0 && (this.$MsgImpl$p_5 = t);
          }),
          (i.getRawPhoneNumbers = function () {
            return this.$MsgImpl$p_7;
          }),
          (i.setRawPhoneNumbers = function (t) {
            t.length > 0 && (this.$MsgImpl$p_7 = t);
          }),
          (i.clearRawPhoneNumbers = function () {
            ((this.$MsgImpl$p_7 = []), (this.phoneNumbersIndexParsed = 0));
          }),
          (i.getRawHeaderPhoneNumbers = function () {
            return this.$MsgImpl$p_8;
          }),
          (i.setRawHeaderPhoneNumbers = function (t) {
            t.length > 0 && (this.$MsgImpl$p_8 = t);
          }),
          (i.getRawFooterPhoneNumbers = function () {
            return this.$MsgImpl$p_9;
          }),
          (i.setRawFooterPhoneNumbers = function (t) {
            t.length > 0 && (this.$MsgImpl$p_9 = t);
          }),
          (i.$MsgImpl$p_12 = function () {
            this.addChild("mediaData", new (r("WAWebMediaData"))());
          }),
          (i.mayFail = function () {
            return (
              o("WAWebMsgGetters").getIsSentByMe(this) &&
              this.ack < o("WAWebAck").ACK.SENT
            );
          }),
          (i.isUnsentPhoneMsg = function () {
            return (
              !this.local &&
              o("WAWebMsgGetters").getIsSentByMe(this) &&
              this.ack < o("WAWebAck").ACK.SENT
            );
          }),
          (i.interactiveButtonsReleased = function () {
            return (
              this.isFromTemplate ||
              (!o("WAWebFrontendMsgGetters").getHasTemplateButtons(this) &&
                this.type !== o("WAWebMsgType").MSG_TYPE.TEMPLATE_BUTTON_REPLY)
            );
          }),
          (i.getVcardWids = function () {
            return this.type !== o("WAWebMsgType").MSG_TYPE.VCARD
              ? null
              : o("WAWebVcardParsingUtils").vcardAllWids(
                  o("WAWebMsgGetters").getVcard(this),
                );
          }),
          (i.getMultiVcardWids = function () {
            if (this.type !== o("WAWebMsgType").MSG_TYPE.MULTI_VCARD)
              return null;
            var e = o("WAWebMsgGetters").getVcardList(this),
              t = r("WAWebCompactMapString")(e, function (e) {
                return e.vcard;
              })
                .map(function (e) {
                  return o("WAWebVcardParsingUtils").parseMultiVcard(e);
                })
                .flat(),
              n = t
                .map(function (e) {
                  return o("WAWebVcardParsingUtils").vcardAllWids(e);
                })
                .flat();
            return Array.from(new Set(n));
          }),
          (i.resumeRemoteUpload = function () {
            return o("WAWebMsgGetters").getIsNewsletterMsg(this)
              ? o("WAWebMedia").resumeUploadMsg(this)
              : (this.isUnsentPhoneMsg() &&
                  o("WAWebSendMsgRecordAction").sendMsgRecord(this),
                this.forceDownloadMediaEvenIfExpensive());
          }),
          (i.cancelDownload = function () {
            o("WAWebMedia").cancelDownloadMsg(this);
          }),
          (i.resumeUpload = function () {
            return (
              this.mediaData.mediaStage !==
                o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD &&
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "resumeUpload called while state was ",
                        "",
                      ])),
                    this.mediaData.mediaStage,
                  )
                  .sendLogs("resume-non-need-upload"),
              o("WAWebMedia")
                .resumeUploadMsg(this)
                .then(function (e) {
                  return e == null ? void 0 : e.messageSendResult;
                })
            );
          }),
          (i.cancelUpload = function () {
            o("WAWebMedia").cancelUploadMsg(this);
          }),
          (i.waitForPhoneUpload = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this;
              (this.mediaData != null &&
                this.mediaData.filehash &&
                !this.isUnsentPhoneMsg()) ||
                (this.$MsgImpl$p_10 ||
                  (this.$MsgImpl$p_10 = r("WAWebEventsWaitForBbEvent")(
                    this.mediaData,
                    "change:mediaStage change:filehash",
                    function () {
                      return !!e.mediaData.filehash && !e.isUnsentPhoneMsg();
                    },
                  )),
                yield this.$MsgImpl$p_10,
                (this.$MsgImpl$p_10 = null));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.forceDownloadMediaEvenIfExpensive = function () {
            return this.downloadMedia({
              downloadEvenIfExpensive: !0,
              rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .MSG_CLICK,
              isUserInitiated: !0,
            });
          }),
          (i.downloadMedia = function (t) {
            var e = this,
              a;
            if (o("WAWebFrontendMsgGetters").getAsRevoked(this))
              return (f || (f = n("Promise"))).resolve();
            var i = t.downloadEvenIfExpensive,
              l = t.isAutoDownload,
              s = t.isUserInitiated,
              u = t.rmrReason,
              c = t.shouldSequenceDownload;
            if (!s && !o("WAWebMsgModelPropUtils").isTrusted(this))
              return (f || (f = n("Promise"))).resolve();
            if (
              !o("WAWebMsgGetters").getIsStatus(this) &&
              !o("WAWebMsgGetters").getIsNewsletterMsg(this) &&
              o("WAWebFrontendMsgGetters")
                .getChat(this)
                .isSuspendedOrTerminated() &&
              o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()
            )
              return (
                s &&
                  o("WAWebModalManager").ModalManager.open(
                    h.jsx(
                      r("WAWebSuspendedGroupMediaDownloadFailureModal.react"),
                      {},
                    ),
                    { transition: "modal-flow" },
                  ),
                (f || (f = n("Promise"))).resolve()
              );
            if (
              (o("WAWebFrontendMsgGetters").getAsMms(this) ||
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "id: ",
                        " type: ",
                        "",
                      ])),
                    this.id.toString(),
                    this.type,
                  )
                  .sendLogs("media-fault: downloadMedia msg is not mms type"),
              this.isUnsentPhoneMsg())
            ) {
              var m = this.$MsgImpl$p_10;
              return (
                m ||
                  (m = this.$MsgImpl$p_10 =
                    r("WAWebEventsWaitForBbEvent")(
                      this.mediaData,
                      "change:mediaStage change:filehash",
                      function () {
                        return !!e.mediaData.filehash && !e.isUnsentPhoneMsg();
                      },
                    ).then(function () {
                      e.$MsgImpl$p_10 = null;
                    })),
                m.then(function () {
                  return e.downloadMedia(t);
                })
              );
            }
            return o("WAWebMedia").downloadMsg({
              msg: this,
              isUserClick:
                u ===
                o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                  .MSG_CLICK,
              downloadEvenIfExpensive: i,
              rmrReason: u,
              rmrData: this.$MsgImpl$p_19(u),
              mode: s ? "manual" : "auto",
              isAutoDownload: l,
              chatWid:
                (a = o("WAWebFrontendMsgGetters").getMaybeChat(this)) == null
                  ? void 0
                  : a.id,
              shouldSequenceDownload: c,
            });
          }),
          (i.$MsgImpl$p_19 = function (t) {
            var e = { webcRmrReason: t, webcMessageT: this.t },
              n = o("WAWebFrontendMsgGetters").getMaybeChat(this);
            if (n) {
              ((e.webcChatType = n.getWebcChatType()),
                n.initialIndex != null &&
                  (e.webcChatPosition = n.initialIndex));
              var r = this.$MsgImpl$p_1;
              r &&
                r === n.msgs &&
                (e.webcMessageIndex = r.length - r.indexOf(this) - 1);
            }
            return e;
          }),
          (i.applyUpdate = function (t) {
            var e = this;
            return (
              t.type &&
                this.type !== t.type &&
                ((this.oldType = this.type), (this.newType = t.type)),
              t.type &&
              this.type !== t.type &&
              o("WAWebMsgModelUtils").typeIsMms(t)
                ? (!o("WAWebCommonMsgUtils").isPlaceholderMsg(this.type) &&
                    !o("WAWebMsgGetters").getIsFutureproof(this) &&
                    !o("WAWebCommonMsgUtils").isQuarantinedMsg(this.type) &&
                    o("WALogger")
                      .ERROR(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "updated ",
                            " from ",
                            " to ",
                            "",
                          ])),
                        this.id.toString(),
                        this.type,
                        String(t.type),
                      )
                      .sendLogs("invalid-type-update"),
                  this.registerAndPrepMedia(t).then(function () {
                    e.set(t);
                  }))
                : (this.set(t), (f || (f = n("Promise"))).resolve())
            );
          }),
          (i.registerAndPrepMedia = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                ((this.createdMediaDataOnUpdate = !0),
                  this.$MsgImpl$p_12(),
                  o("WAWebMedia").registerMsgEarly(this, e));
                try {
                  yield o("WAWebMedia").prepareMsg(this);
                } catch (e) {
                  throw (
                    o("WALogger")
                      .ERROR(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "error",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("preregister-error"),
                    e
                  );
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.waitForPrep = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e,
                t = this,
                r = o("WAWebMsgModelUtils").typeIsMms(this);
              r &&
                this.mediaData == null &&
                (o("WALogger").ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "Msg: waitForPrep called while mediaData was null. id: ",
                      "\n            createdMediaDataOnInit: ",
                      ", createdMediaDataOnUpdate: ",
                      ",\n            type on init: ",
                      ", type before change: ",
                      ", type after change: ",
                      "\n            calledCiphertextDecrypted: ",
                      "",
                    ])),
                  this.id.toString(),
                  this.createdMediaDataOnInit,
                  this.createdMediaDataOnUpdate,
                  this.typeOnInit,
                  this.oldType,
                  this.newType,
                  this.calledCiphertextDecrypted,
                ),
                this.initializeMedia());
              var a =
                  this.requiresDirectConnection == null
                    ? o("WAWebDirectConnectionGatingUtils")
                        .genDirectConnectionMessageModifiers(
                          this.type,
                          (e = this.list) == null ? void 0 : e.listType,
                          this.businessOwnerJid,
                        )
                        .then(function (e) {
                          return t.set(e);
                        })
                    : (f || (f = n("Promise"))).resolve(),
                i = r
                  ? o("WAWebMedia").prepareMsg(this)
                  : (f || (f = n("Promise"))).resolve();
              return (yield a, i);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$MsgImpl$p_18 = function (t) {
            var e = this.$MsgImpl$p_20().get(this.id.remote);
            if (e) {
              var n, r;
              ((this.id.remote.isBot() ||
                ((n = e.contact.businessProfile) == null
                  ? void 0
                  : n.isBizBot3p) === !0) &&
                this.subtype ===
                  o("WAWebBotGenTypingIndicatorMsg")
                    .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE &&
                e.botInitialTypingIndicatorMsgId &&
                e.botInitialTypingIndicatorMsgId.equals(this.id) &&
                e.set({ botInitialTypingIndicatorMsgId: null }, { silent: !0 }),
                e.unreadMsgAnchor === this && (e.unreadMsgAnchor = void 0));
              var a =
                (t == null ? void 0 : t.messageInHiddenViewMode) === !0 ||
                !t ||
                !t.doNotResetLastReceived;
              if (a && e.lastReceivedKey === this.id) {
                var i = void 0,
                  l = o("WAWebChatGetMessage").getLastReceivedMsg(e);
                (l && (i = l.id), (e.lastReceivedKey = i));
              }
              (r = e.composeQuotedMsg) != null &&
                r.id.equals(this.id) &&
                (t == null ? void 0 : t.messageInHiddenViewMode) !== !0 &&
                (e.composeQuotedMsg = null);
            }
          }),
          (i.delete = function (n) {
            (t.prototype.delete.call(this),
              this.botEditTimeoutID && self.clearTimeout(this.botEditTimeoutID),
              o("WAWebStarredMsgCollection").AllStarredMsgsCollection.remove(
                this,
              ),
              o(
                "WAWebPinInChatCollection",
              ).PinInChatCollection.deleteByParentMessageKey(this.id),
              o("WAWebMsgModelUtils").typeIsMms(this) &&
                o("WAWebMedia").deregisterMsg(this));
            var e = this.getCollection();
            (o(
              "WAWebMessageAssociationGatingUtils",
            ).isMessageAssociationInfraEnabled() &&
              o("WAWebMessageAssociationUIUtils")
                .getHiddenAssociatedMessages(this.id)
                .forEach(function (e) {
                  e.delete();
                }),
              e.remove(this.id),
              this.hideParentMessageInChat({ duringDetach: !1 }),
              this.$MsgImpl$p_1 &&
                this.$MsgImpl$p_1.remove(
                  this.id,
                  {},
                  !!(n != null && n.skipUpdatingSortTime),
                ));
            for (var r of this.$MsgImpl$p_2.values())
              r.remove(this.id, {}, !!(n != null && n.skipUpdatingSortTime));
            (this.$MsgImpl$p_2.clear(),
              this.$MsgImpl$p_18(n),
              o("WAWebMsgGetters").clearMsgGetterCacheFor(this),
              o("WAWebFrontendMsgGetters").clearFrontendMsgGetterCacheFor(
                this,
              ));
          }),
          (i.isLastMessage = function () {
            var e = o("WAWebFrontendMsgGetters").getChat(this).msgs.last();
            return this.id.equals(e == null ? void 0 : e.id);
          }),
          (i.msgContextInfo = function (n) {
            var t = this.toJSON(),
              r = t.ack,
              a = t.author,
              i = t.broadcast,
              l = t.buttons,
              s = t.from,
              u = t.id,
              c = t.invis,
              d = t.isNewMsg,
              m = t.latestEditMsgKey,
              p = t.latestEditSenderTimestampMs,
              _ = t.multicast,
              f = t.notifyName,
              g = t.quotedMsg,
              h = t.quotedParticipant,
              y = t.quotedRemoteJid,
              C = t.quotedStanzaID,
              b = t.quotedType,
              v = t.recipients,
              S = t.recvFresh,
              R = t.replyButtons,
              L = t.senderObj,
              E = t.star,
              k = t.t,
              I = t.to,
              T = babelHelpers.objectWithoutPropertiesLoose(t, e),
              D = this.id,
              x = null;
            n && !D.remote.equals(n) && (x = D.remote);
            var $ =
              o("WAWebMsgModelUtils").getQuotedParticipantForContextInfo(this);
            return {
              quotedMsg: T,
              quotedParticipant: $,
              quotedStanzaID: D.id,
              quotedRemoteJid: x,
            };
          }),
          (i.displayName = function (t) {
            var e;
            t === void 0 && (t = {});
            var n = t,
              a = n.newPushNameFormatting,
              i = a === void 0 ? !1 : a,
              l = n.showShortName,
              s = l === void 0 ? !1 : l,
              u = n.showVerifiedName,
              c = u === void 0 ? !1 : u,
              d = n.withPushName,
              m = d === void 0 ? !1 : d,
              p = n.withPushNameOnly,
              _ = p === void 0 ? !1 : p;
            if (!o("WAWebMsgGetters").getSender(this)) return "";
            if (
              o("WAWebUserPrefsMeUser").isMeAccount(
                o("WAWebMsgGetters").getSender(this),
              )
            )
              return r("fbs")._(/*BTDS*/ "You").toString();
            if (o("WAWebMsgGetters").getIsPSA(this))
              return o("WAWebConnModel").Conn.isSMB
                ? r("fbs")._(/*BTDS*/ "WhatsApp Business").toString()
                : r("fbs")._(/*BTDS*/ "WhatsApp").toString();
            if (this.senderObj == null) return "";
            var f = this.senderObj,
              g = s ? f.shortName : void 0;
            if (r("isStringNullOrEmpty")(g)) {
              if (f.name) return f.name;
            } else return g;
            if (
              c &&
              f.verifiedLevel ===
                o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH &&
              f.verifiedName
            )
              return f.verifiedName;
            if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
              var h = o(
                "WAWebFrontendContactGetters",
              ).getFormattedUsernameAndType(f);
              if (h != null) return h.displayName;
            }
            var y = i
                ? o("WAWebChatContactUtils")
                    .getFormattedNotifyName(this.notifyName)
                    .toString()
                : "~" + this.notifyName,
              C = m && this.notifyName ? y : "";
            if (_ && C) return C;
            var b =
              (e = o("WAWebMsgGetters").getSender(this)) != null && e.isLid()
                ? o("WAWebFrontendContactGetters").getUserDisplayNameForLid(f)
                : o("WAWebWidFormat").widToFormattedUser(
                    o("WAWebMsgGetters").getSender(this),
                  );
            return (
              o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(
                o("WAWebFrontendMsgGetters").getChat(this),
                f,
              ) && (b = o("WAWebFrontendContactGetters").getMaskedPhoneLid(f)),
              "" + b + (C ? " " : "") + C
            );
          }),
          (i.mentionMap = function () {
            if (!this.mentionedJidList || !this.mentionedJidList.length)
              return null;
            var e = {};
            return (
              this.mentionedJidList.forEach(function (t) {
                e["@" + (r("WAWebWid").user(t) || "")] = o(
                  "WAWebContactCollection",
                ).ContactCollection.gadd(t);
              }),
              e
            );
          }),
          (i.groupMentionMap = function () {
            var e;
            return !this.groupMentions || !this.groupMentions.length
              ? null
              : (e = this.groupMentions) == null
                ? void 0
                : e.reduce(function (e, t) {
                    var n,
                      r = "@" + t.groupJid.toString();
                    return ((e[r] = (n = t.groupSubject) != null ? n : ""), e);
                  }, {});
          }),
          (i.updateAck = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                t === void 0 && (t = !1);
                var n = this.ack,
                  r = o("WAWebFrontendMsgGetters").getMaybeChat(this);
                if (
                  !(
                    !o("WAWebMsgGetters").getIsStatus(this) &&
                    r != null &&
                    o("WAWebChatGetters").getIsGroup(r) &&
                    this.isMdHistoryMsg &&
                    e >= o("WAWebAck").ACK.RECEIVED &&
                    this.id.fromMe
                  )
                ) {
                  var a = this.id;
                  if (this.id.remote.isStatus()) {
                    var i = yield o(
                      "WAWebMessageReceiptUtils",
                    ).fixStatusReceiptKeys([a]);
                    a = i[0];
                  }
                  o("WATypeUtils").isNumber(e) &&
                  (n === void 0 || e > n || e === o("WAWebAck").ACK.FAILED)
                    ? ((this.ack = e),
                      t ||
                        this.$MsgImpl$p_11.enqueue(function () {
                          return o(
                            "WAWebDBUpdateMessageTable",
                          ).updateMessageTable(a, { ack: e });
                        }))
                    : e === o("WAWebAck").ACK.FAILED &&
                      this.ack === o("WAWebAck").ACK.CLOCK &&
                      ((this.ack = o("WAWebAck").ACK.FAILED),
                      this.$MsgImpl$p_11.enqueue(function () {
                        return o(
                          "WAWebDBUpdateMessageTable",
                        ).updateMessageTable(a, { ack: e });
                      }));
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.updateErrorCode = function (t) {
            return (
              (this.errorCode = t),
              o("WAWebDBUpdateMessageTable").updateMessageTable(this.id, {
                errorCode: t,
              })
            );
          }),
          (i.updateReadQuestionResponsesCount = function () {
            return (
              (this.readQuestionResponsesCount = this.questionResponsesCount),
              o("WAWebDBUpdateMessageTable").updateMessageTable(this.id, {
                readQuestionResponsesCount: this.questionResponsesCount,
              })
            );
          }),
          (i.updateGalaxyFlowMsgLoggingIds = function (t, n) {
            return (
              (this.galaxyFlowWAMMessageId = t),
              (this.galaxyFlowQPLMessageId = n),
              o("WAWebDBUpdateMessageTable").updateMessageTable(this.id, {
                galaxyFlowWAMMessageId: t,
                galaxyFlowQPLMessageId: n,
              })
            );
          }),
          (i.updateNFMButtonsState = function (t) {
            return o("WAWebDBUpdateMessageTable").updateMessageTable(this.id, {
              galaxyFlowDisabled: t,
            });
          }),
          (i.updateLastPlaybackProgress = function (t) {
            ((this.lastPlaybackProgress = t), this.$MsgImpl$p_21(this.id, t));
          }),
          (i.avParams = function () {
            return o("WAWebMedia").mediaMetadata(this);
          }),
          (i.resend = function () {
            var e = this;
            if (o("WAWebMsgGetters").getIsFailed(this)) {
              if (o("WAWebMsgGetters").getIsEdited(this))
                return o("WAWebSendMessageEditAction").resendLatestEdit(this);
              var t = { ack: o("WAWebAck").ACK.CLOCK };
              return (
                (t.isSendFailure = !1),
                this.$MsgImpl$p_11.enqueue(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    (yield o("WAWebDBUpdateMessageTable").updateMessageTable(
                      e.id,
                      t,
                    ),
                      e.set(t));
                  }),
                ),
                o("WAWebMsgGetters").getIsNewsletterMsg(this)
                  ? o("WAWebNewsletterSendMsgAction")
                      .resendNewsletterMsg(this)
                      .then(function (e) {
                        return e && e.messageSendResult;
                      })
                  : o("WAWebFrontendMsgGetters").getAsMms(this)
                    ? o("WAWebMsgGetters").getIsSentByMeFromWeb(this)
                      ? this.resumeUpload()
                      : this.resumeRemoteUpload()
                    : o("WAWebSendMsgRecordAction")
                        .sendMsgRecord(this)
                        .then(function (e) {
                          return e.messageSendResult;
                        })
              );
            }
            return (f || (f = n("Promise"))).resolve();
          }),
          (i.$MsgImpl$p_14 = function () {
            if (
              ((this.calledCiphertextDecrypted = !0),
              !o("WAWebMsgGetters").getIsStatus(this))
            ) {
              var e = o("WAWebFrontendMsgGetters").getChat(this),
                t = e.msgs.length,
                n = e.msgs.indexOf(this);
              n !== -1 &&
                t - n <= 10 &&
                !o("WAWebMsgGetters").getIsSentByMe(this) &&
                o("WAWebCmd").Cmd.alertNewMsg(this);
            }
          }),
          (i.$MsgImpl$p_15 = function () {
            if (this.isViewOnce && this.mediaData != null) {
              var e =
                  o("WAWebMsgGetters").getIsSentByMe(this) &&
                  this.ack >= o("WAWebAck").ACK.SENT &&
                  this.mediaData.mediaStage ===
                    o("WAWebMediaTypes").MediaDataStage.RESOLVED,
                t =
                  !o("WAWebMsgGetters").getIsSentByMe(this) &&
                  this.ack >= o("WAWebAck").ACK.PLAYED;
              (e || t) &&
                (this.stopListening(this, "change:ack", this.$MsgImpl$p_15),
                this.stopListening(
                  this.mediaData,
                  "change:mediaStage",
                  this.$MsgImpl$p_15,
                ),
                o("WAWebMedia").deregisterMsg(this));
            }
          }),
          (i.getForwardingScoreWhenForwarded = function () {
            var e = 5,
              t =
                o("WAWebMsgGetters").getNumTimesForwarded(this) +
                (o("WAWebMsgGetters").getShouldDisplayAsForwarded(this)
                  ? 1
                  : 0);
            return t >= e
              ? r("WAWebConstantsDeprecated").FREQUENTLY_FORWARDED_SENTINEL
              : t;
          }),
          (i.timeUntilExpiration = function () {
            var e = o("WAWebMsgGetters").getEphemeralExpirationTimestamp(this);
            return e == null
              ? null
              : o("WAWebKeepInChatMsgUtils").isExpired(this)
                ? 0
                : e - o("WATimeUtils").unixTime();
          }),
          (i.getCollection = function () {
            return o("WAWebMsgCollection").MsgCollection;
          }),
          (i.$MsgImpl$p_20 = function () {
            return o("WAWebMsgGetters").getIsNewsletterMsg(this)
              ? r("WAWebNewsletterCollection")
              : o("WAWebChatCollection").ChatCollection;
          }),
          (i.safe = function () {
            return this;
          }),
          (i.unsafe = function () {
            return this;
          }),
          (i.shouldShowNotificationPreview = function () {
            var e;
            return (
              !(
                (e = o("WAWebFrontendMsgGetters").getAsViewOnce(this)) !=
                  null && e.isViewOnce
              ) && o("WAWebMuteCollection").MuteCollection.getGlobalPreviews()
            );
          }),
          (i.detachAssociatedMsg = function () {
            (this.hideParentMessageInChat({ duringDetach: !0 }),
              this.set({
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                associationType: null,
                parentMsgKey: null,
              }));
          }),
          (i.updateGroupHistoryBundleProcessState = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return this.groupHistoryBundleMetadata == null
                  ? (f || (f = n("Promise"))).reject()
                  : (this.set({
                      groupHistoryBundleMetadata: babelHelpers.extends(
                        {},
                        this.groupHistoryBundleMetadata,
                        { processState: e },
                      ),
                    }),
                    (f || (f = n("Promise"))).resolve());
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })(o("WAWebBaseModel").BaseModel);
    ((y.Proxy = "msg"),
      (y.idClass = r("WAWebMsgKey")),
      (y.kind = "__MOCKED_KIND__"));
    var C = o("WAWebBaseModel").defineModel(y);
    l.Msg = C;
  },
  226,
);
