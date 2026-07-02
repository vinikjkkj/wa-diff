__d(
  "WAWebChatModel",
  [
    "fbt",
    "Promise",
    "WAAbortError",
    "WAAsyncSleep",
    "WAFilteredCatch",
    "WAInOrderPromiseQueue",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAck",
    "WAWebAiThreadCollection",
    "WAWebAlarm",
    "WAWebApiContact",
    "WAWebAppTracker",
    "WAWebBackendErrors",
    "WAWebBaseModel",
    "WAWebBizAiAgentGating",
    "WAWebBizLabelUtils",
    "WAWebBotBaseGating",
    "WAWebBotFrontendGating",
    "WAWebBotGating",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebBroadcastMetadataCollection",
    "WAWebChatAssignmentCollection",
    "WAWebChatAssignmentGatingUtils",
    "WAWebChatCollection",
    "WAWebChatConstants",
    "WAWebChatDocMsgsCollection",
    "WAWebChatEntryPoint",
    "WAWebChatEphemerality",
    "WAWebChatFlowTypes",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebChatLinkMsgsCollection",
    "WAWebChatLoadMessages",
    "WAWebChatMedia",
    "WAWebChatMediaMsgsCollection",
    "WAWebChatMessageSearch",
    "WAWebChatModelDerivedMethods",
    "WAWebChatParticipantColor",
    "WAWebChatProductMsgsCollection",
    "WAWebChatThemeGatingUtils",
    "WAWebChatThemeValue",
    "WAWebChatUpdates",
    "WAWebCmd",
    "WAWebCollectionConstants",
    "WAWebConnModel",
    "WAWebConstantsDeprecated",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebCurrentUser",
    "WAWebDBEphemeralMessage",
    "WAWebDBUpdateChatTable",
    "WAWebDBUpdateContactTable",
    "WAWebDebounce",
    "WAWebDecrementThreadUnreadCountsAction",
    "WAWebEventMsgsCollection",
    "WAWebEventsWaitForBbEvent",
    "WAWebFavoriteCollection",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupMetadataCollection",
    "WAWebGroupSafetyCheckUtils",
    "WAWebGroupType",
    "WAWebGroupUnreadMessageType",
    "WAWebHandleNewMsgAction",
    "WAWebKeepInChatMsgUtils",
    "WAWebKeptMsgCollection",
    "WAWebL10N",
    "WAWebLidMigrationUtils",
    "WAWebLimitSharingModelUtils",
    "WAWebListsGatingUtils",
    "WAWebLogoutReasonConstants",
    "WAWebMedia",
    "WAWebMobilePlatforms",
    "WAWebMsgDataFromModel",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgModelUtils",
    "WAWebMuteCollection",
    "WAWebNewsletterCollection",
    "WAWebNewsletterMetadataCollection",
    "WAWebNoop",
    "WAWebNotificationBackend",
    "WAWebNotificationHelpers",
    "WAWebOTPLoggingHelper",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebPresenceChatAction",
    "WAWebPresenceCollection",
    "WAWebProtobufsE2E.pb",
    "WAWebSendNotSpamAction",
    "WAWebSocketLogoutJob",
    "WAWebStarredMsgCollection",
    "WAWebSuperChatMsgs",
    "WAWebThreadsGating",
    "WAWebTos",
    "WAWebTosGating",
    "WAWebTrustedContactsUtils",
    "WAWebUnreadMentionModel",
    "WAWebUpdateDraftMessageChatAction",
    "WAWebUpdateLastAddOnPreviewChatAction",
    "WAWebUserPrefsMeUser",
    "WAWebViewOnceState",
    "WAWebViewRepliesCollection",
    "WAWebWamEnumChatAssignmentChatType",
    "WAWebWamEnumWebcChatType",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "countWhere",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S = 1e3,
      R = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.id = o("WAWebBaseModel").prop()),
            (e.accountLid = o("WAWebBaseModel").prop()),
            (e.t = o("WAWebBaseModel").prop()),
            (e.unreadCount = o("WAWebBaseModel").prop(0)),
            (e.unreadDividerOffset = o("WAWebBaseModel").prop(0)),
            (e.archive = o("WAWebBaseModel").prop()),
            (e.isReadOnly = o("WAWebBaseModel").prop()),
            (e.isLocked = o("WAWebBaseModel").prop()),
            (e.isAnnounceGrpRestrict = o("WAWebBaseModel").prop()),
            (e.modifyTag = o("WAWebBaseModel").prop()),
            (e.muteExpiration = o("WAWebBaseModel").prop(0)),
            (e.mentionAllMuteExpiration = o("WAWebBaseModel").prop()),
            (e.callMuteExpiration = o("WAWebBaseModel").prop()),
            (e.isAutoMuted = o("WAWebBaseModel").prop(!1)),
            (e.wallpaper = o("WAWebBaseModel").prop()),
            (e.showDoodle = o("WAWebBaseModel").prop()),
            (e.chatThemeId = o("WAWebBaseModel").prop()),
            (e.colorSchemeId = o("WAWebBaseModel").prop()),
            (e.stockWallpaperImageId = o("WAWebBaseModel").prop()),
            (e.wallpaperValue = o("WAWebBaseModel").prop()),
            (e.chatThemeValue = o("WAWebBaseModel").prop()),
            (e.name = o("WAWebBaseModel").prop()),
            (e.notSpam = o("WAWebBaseModel").prop()),
            (e.pin = o("WAWebBaseModel").prop()),
            (e.changeNumberOldJid = o("WAWebBaseModel").prop()),
            (e.changeNumberNewJid = o("WAWebBaseModel").prop()),
            (e.lastReceivedKey = o("WAWebBaseModel").prop()),
            (e.capiThreadControl = o("WAWebBaseModel").prop()),
            (e.capiCallingPermissionType = o("WAWebBaseModel").prop()),
            (e.ephemeralDuration = o("WAWebBaseModel").prop()),
            (e.ephemeralSettingTimestamp = o("WAWebBaseModel").prop()),
            (e.afterReadDuration = o("WAWebBaseModel").prop()),
            (e.disappearingModeInitiator = o("WAWebBaseModel").prop()),
            (e.disappearingModeTrigger = o("WAWebBaseModel").prop()),
            (e.disappearingModeInitiatedByMe = o("WAWebBaseModel").prop()),
            (e.createdLocally = o("WAWebBaseModel").prop()),
            (e.pendingAction = o("WAWebBaseModel").session()),
            (e.formattedTitle = o("WAWebBaseModel").session()),
            (e.active = o("WAWebBaseModel").session()),
            (e.pausedTimerId = o("WAWebBaseModel").session()),
            (e.presenceResendTimerId = o("WAWebBaseModel").session()),
            (e.recording = o("WAWebBaseModel").session()),
            (e.typing = o("WAWebBaseModel").session()),
            (e.colors = o("WAWebBaseModel").session()),
            (e.attachMediaContents = o("WAWebBaseModel").session()),
            (e.draftAttachMediaContentsSortTs = o("WAWebBaseModel").session()),
            (e.isComposingPoll = o("WAWebBaseModel").session(!1)),
            (e.pttRecordingSession = o("WAWebBaseModel").session()),
            (e.squelch = o("WAWebBaseModel").session()),
            (e.reactionSquelch = o("WAWebBaseModel").session()),
            (e.pendingSeenCount = o("WAWebBaseModel").session(0)),
            (e.markedUnread = o("WAWebBaseModel").session()),
            (e.trusted = o("WAWebBaseModel").session()),
            (e.groupSafetyChecked = o("WAWebBaseModel").session()),
            (e.canSend = o("WAWebBaseModel").session()),
            (e.showUnreadInTitle = o("WAWebBaseModel").session(!1)),
            (e.activeUnreadCount = o("WAWebBaseModel").session()),
            (e.isFavorite = o("WAWebBaseModel").session(!1)),
            (e.promises = o("WAWebBaseModel").session(function () {
              return {};
            })),
            (e.ftsCache = o("WAWebBaseModel").session(function () {
              return {};
            })),
            (e.composeQuotedMsg = o("WAWebBaseModel").session()),
            (e.composeQuotedMsgRemoteJid = o("WAWebBaseModel").session()),
            (e.quotedMsgAdminGroupJid = o("WAWebBaseModel").session()),
            (e.quotedMsgAdminGroupSubject = o("WAWebBaseModel").session()),
            (e.quotedMsgAdminParentGroupJid = o("WAWebBaseModel").session()),
            (e.groupMetadata = o("WAWebBaseModel").session()),
            (e.broadcastMetadata = o("WAWebBaseModel").session()),
            (e.broadcastRecipientCount = o("WAWebBaseModel").session(0)),
            (e.newsletterMetadata = o("WAWebBaseModel").session()),
            (e.presence = o("WAWebBaseModel").session()),
            (e.mute = o("WAWebBaseModel").session()),
            (e.contact = o("WAWebBaseModel").session()),
            (e.mediaCount = o("WAWebBaseModel").session(0)),
            (e.linkCount = o("WAWebBaseModel").session(0)),
            (e.docCount = o("WAWebBaseModel").session(0)),
            (e.productCount = o("WAWebBaseModel").session(0)),
            (e.pendingDeleteForMeCount = o("WAWebBaseModel").session(0)),
            (e.isParentGroup = o("WAWebBaseModel").session()),
            (e.groupType = o("WAWebBaseModel").session()),
            (e.hasCapi = o("WAWebBaseModel").session()),
            (e.unreadMentionsOfMe = o("WAWebBaseModel").prop()),
            (e.unreadMentionCount = o("WAWebBaseModel").prop()),
            (e.hasUnreadMention = o("WAWebBaseModel").prop(!1)),
            (e.archiveAtMentionViewedInDrawer = o("WAWebBaseModel").prop(!1)),
            (e.hasChatBeenOpened = o("WAWebBaseModel").prop(!1)),
            (e.tcToken = o("WAWebBaseModel").prop()),
            (e.tcTokenTimestamp = o("WAWebBaseModel").prop()),
            (e.tcTokenSenderTimestamp = o("WAWebBaseModel").prop()),
            (e.msgUnsyncedButtonReplyMsgs = o("WAWebBaseModel").prop()),
            (e.endOfHistoryTransfer = o("WAWebBaseModel").session(!1)),
            (e.endOfHistoryTransferType = o("WAWebBaseModel").prop()),
            (e.pendingInitialLoading = o("WAWebBaseModel").prop(!1)),
            (e.lastReactionPreview = o("WAWebBaseModel").prop()),
            (e.chatlistPreview = o("WAWebBaseModel").prop()),
            (e.previewT = o("WAWebBaseModel").prop()),
            (e.unopenedByAssignedAgent = o("WAWebBaseModel").session(!1)),
            (e.isAssignedToMe = o("WAWebBaseModel").session(!1)),
            (e.assignedAgent = o("WAWebBaseModel").session()),
            (e.unreadEditTimestampMs = o("WAWebBaseModel").prop()),
            (e.draftMessage = o("WAWebBaseModel").prop()),
            (e.draftMessageSortTs = o("WAWebBaseModel").session()),
            (e.ephemeralDisplayedExemptions = o("WAWebBaseModel").prop()),
            (e.hasOpened = o("WAWebBaseModel").prop()),
            (e.lastChatEntryTimestamp = o("WAWebBaseModel").prop()),
            (e.botInitialTypingIndicatorMsgId = o("WAWebBaseModel").session()),
            (e.hasCreatedBotInvokeSystemMsg = o("WAWebBaseModel").prop()),
            (e.bizBotSystemMsgType = o("WAWebBaseModel").prop()),
            (e.hasRequestedWelcomeMsg = o("WAWebBaseModel").prop(!1)),
            (e.lidOriginType = o("WAWebBaseModel").prop()),
            (e.historyChatId = o("WAWebBaseModel").prop()),
            (e.hasCtwaConsumerDataSharingDisclosureSystemMsg =
              o("WAWebBaseModel").prop(!1)),
            (e.hasPreloaded = o("WAWebBaseModel").session(!1)),
            (e.chatEntryPoint = o("WAWebBaseModel").session(
              o("WAWebChatEntryPoint").ChatEntryPoint.Initialization,
            )),
            (e.forceDismissAiAgentBlockBar = o("WAWebBaseModel").session(!1)),
            (e.limitSharing = o("WAWebBaseModel").prop()),
            (e.mmSignalSharingExpirationWindow = o("WAWebBaseModel").prop()),
            (e.isSenderNewAccount = o("WAWebBaseModel").prop()),
            (e.isSenderSuspicious = o("WAWebBaseModel").prop()),
            (e.parentCompanyName = o("WAWebBaseModel").prop()),
            (e.obaPhoneNumber = o("WAWebBaseModel").prop()),
            (e.toneId = o("WAWebBaseModel").prop()),
            (e.aiThreads = o("WAWebBaseModel").session(null)),
            (e.viewRepliesThreads = o("WAWebBaseModel").session(null)),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.initialize = function () {
            var n = this,
              a;
            (t.prototype.initialize.call(this),
              this.deriveThemeValueObjectsFromFlats());
            var i = o("WAWebABProps").getABPropConfigValue(
              "web_optimized_event_handlers",
            );
            (this.$ChatImpl$p_4(),
              (this.addQueue = new (r("WAInOrderPromiseQueue"))()),
              (this.sendQueue = new (r("WAInOrderPromiseQueue"))()),
              (this.$ChatImpl$p_1 = new Set()),
              (this.$ChatImpl$p_2 = new Map()),
              (this.$ChatImpl$p_3 = new AbortController()),
              this.$ChatImpl$p_5(),
              (this.msgs.msgLoadState.contextLoaded = !0),
              this.addChild(
                "presence",
                o("WAWebPresenceCollection").PresenceCollection.gadd(
                  this.$ChatImpl$p_6(),
                ),
              ));
            var l = o("WAWebMuteCollection").MuteCollection.get(this.id);
            if (
              (l
                ? this.addChild("mute", l)
                : this.addChild(
                    "mute",
                    o("WAWebMuteCollection").MuteCollection.gadd({
                      id: this.id,
                      expiration: this.muteExpiration,
                      isAutoMuted: this.isAutoMuted,
                      mentionAllMuteExpiration: this.mentionAllMuteExpiration,
                      callExpiration: this.callMuteExpiration,
                    }),
                  ),
              this.listenTo(
                this.mute,
                "change:expiration",
                i
                  ? this.$ChatImpl$p_7
                  : function () {
                      return o("WAWebChatUpdates").updateMuteExpiration(n);
                    },
              ),
              this.listenTo(
                this.mute,
                "change:isAutoMuted",
                i
                  ? this.$ChatImpl$p_7
                  : function () {
                      return o("WAWebChatUpdates").updateMuteExpiration(n);
                    },
              ),
              this.listenTo(
                this.mute,
                "change:mentionAllMuteExpiration",
                i
                  ? this.$ChatImpl$p_8
                  : function () {
                      return o(
                        "WAWebChatUpdates",
                      ).updateMentionAllMuteExpiration(n);
                    },
              ),
              this.listenTo(
                this.mute,
                "change:callExpiration",
                i
                  ? this.$ChatImpl$p_9
                  : function () {
                      return o("WAWebChatUpdates").updateCallMuteExpiration(n);
                    },
              ),
              this.addChild(
                "contact",
                o("WAWebContactCollection").ContactCollection.gadd(this.id),
              ),
              this.name && !this.contact.name)
            ) {
              var s = { name: this.name };
              o("WAWebChatGetters").getIsGroup(this)
                ? this.contact.set(s)
                : o("WAWebChatGetters").getIsNewsletter(this)
                  ? this.contact.set(s)
                  : o("WAWebDBUpdateContactTable")
                      .updateContactTable(this.contact.id, s)
                      .then(function () {
                        n.contact.set(s);
                      });
            }
            if (
              (this.listenTo(
                this.contact,
                "change:name",
                i
                  ? this.$ChatImpl$p_10
                  : function () {
                      return o("WAWebChatGroupUtils").updateTitle(n);
                    },
              ),
              this.listenTo(
                this.contact,
                "change:isContactBlocked",
                i
                  ? this.$ChatImpl$p_11
                  : function () {
                      return o("WAWebChatGroupUtils").updateCanSend(n);
                    },
              ),
              this.listenTo(
                this,
                "change:id change:archive change:unreadCount change:pendingSeenCount change:muteExpiration change:isLocked",
                i
                  ? this.$ChatImpl$p_12
                  : function () {
                      return n.$ChatImpl$p_12();
                    },
              ),
              this.listenTo(
                o("WAWebFavoriteCollection").FavoriteCollection,
                "add remove change",
                i
                  ? this.$ChatImpl$p_13
                  : function () {
                      n.isFavorite = !!o(
                        "WAWebFavoriteCollection",
                      ).FavoriteCollection.get(n.id.toString());
                    },
              ),
              o("WAWebFavoriteCollection").FavoriteCollection.get(
                this.id.toString(),
              ) && (this.isFavorite = !0),
              o("WAWebChatGetters").getIsGroup(this) && (this.trusted = !0),
              this.listenTo(
                o("WAWebTos").TosManager,
                "change",
                i
                  ? this.$ChatImpl$p_11
                  : function () {
                      return o("WAWebChatGroupUtils").updateCanSend(n);
                    },
              ),
              this.listenTo(
                this.contact,
                "change:privacyMode",
                i
                  ? this.$ChatImpl$p_11
                  : function () {
                      return o("WAWebChatGroupUtils").updateCanSend(n);
                    },
              ),
              o("WAWebChatGetters").getIsGroup(this))
            ) {
              var u = this.getGroupMetadataCollection(),
                c = u.gadd(this.id);
              (this.addChild("groupMetadata", c),
                this.listenTo(
                  c,
                  "change:stale change:announce",
                  i
                    ? this.$ChatImpl$p_14
                    : function () {
                        return n.$ChatImpl$p_14();
                      },
                ),
                this.listenTo(
                  c,
                  "change:groupType",
                  i
                    ? this.$ChatImpl$p_15
                    : function () {
                        (n.$ChatImpl$p_12(), (n.groupType = c.groupType));
                      },
                ),
                (this.groupType = c.groupType),
                this.listenTo(
                  c,
                  "change:hasCapi",
                  i
                    ? this.$ChatImpl$p_16
                    : function () {
                        n.hasCapi = c.hasCapi;
                      },
                ),
                (this.hasCapi = c.hasCapi),
                this.listenTo(
                  c.participants,
                  "change:isAdmin bulk_add bulk_remove",
                  i
                    ? this.$ChatImpl$p_14
                    : function () {
                        return n.$ChatImpl$p_14();
                      },
                ),
                this.listenTo(
                  c,
                  "change:trusted change:stale",
                  i
                    ? this.isTrusted
                    : function () {
                        return n.isTrusted();
                      },
                ),
                this.listenTo(
                  c,
                  "change:groupSafetyCheck change:stale",
                  i
                    ? this.isGroupSafetyChecked
                    : function () {
                        return n.isGroupSafetyChecked();
                      },
                ),
                this.listenTo(
                  c,
                  "change:participants change:stale change:suspended change:terminated",
                  i
                    ? this.$ChatImpl$p_17
                    : function () {
                        o("WAWebChatGroupUtils").updateReadOnly(n);
                      },
                ),
                this.listenTo(
                  c.participants,
                  "change:contact.formattedShortName",
                  i
                    ? this.$ChatImpl$p_10
                    : function () {
                        return o("WAWebChatGroupUtils").updateTitle(n);
                      },
                ),
                this.$ChatImpl$p_18(c),
                this.listenTo(
                  c.unreadMentionMetadata.unreadMentionCollection,
                  "add remove reset",
                  i
                    ? this.$ChatImpl$p_19
                    : function () {
                        return n.$ChatImpl$p_19();
                      },
                ),
                this.listenTo(
                  c.unreadMentionMetadata,
                  "change:pendingUnreadMentionCount",
                  i
                    ? this.$ChatImpl$p_19
                    : function () {
                        return n.$ChatImpl$p_19();
                      },
                ),
                this.$ChatImpl$p_14(),
                o("WAWebChatGroupUtils").updateReadOnly(this),
                this.listenTo(
                  this,
                  "change:isAnnounceGrpRestrict",
                  i
                    ? this.$ChatImpl$p_20
                    : function () {
                        (o("WAWebChatGroupUtils").updateReadOnly(n),
                          o("WAWebChatGroupUtils").updateCanSend(n));
                      },
                ),
                this.listenTo(
                  c,
                  "change:isParentGroup",
                  i
                    ? this.$ChatImpl$p_21
                    : function () {
                        n.isParentGroup = c.isParentGroup;
                      },
                ),
                (this.isParentGroup = c.isParentGroup));
            }
            if (o("WAWebChatGetters").getIsBroadcast(this)) {
              var d = this.$ChatImpl$p_22();
              d.get(this.id) ||
                d
                  .update(this.id)
                  .then(function () {
                    o("WAWebChatGroupUtils").updateTitle(n);
                  })
                  .catch(function (t) {
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose(
                          ["broadcast title update failed \n", ""],
                          ["broadcast title update failed \\n", ""],
                        )),
                      t,
                    );
                  });
              var m = d.gadd(this.id);
              (this.addChild("broadcastMetadata", m),
                m.recipients != null &&
                  ((this.broadcastRecipientCount = m.recipients.length),
                  this.listenTo(
                    m.recipients,
                    "add remove reset",
                    i
                      ? this.$ChatImpl$p_23
                      : function () {
                          ((n.broadcastRecipientCount = m.recipients.length),
                            o("WAWebChatGroupUtils").updateTitle(n));
                        },
                  ),
                  this.listenTo(
                    m.recipients,
                    "change:contact.formattedShortName",
                    function (e, t) {
                      var r = m.recipients.get(e.id);
                      (r != null && (r.formattedShortName = t),
                        o("WAWebChatGroupUtils").updateTitle(n));
                    },
                  )));
            }
            if (o("WAWebChatGetters").getIsNewsletter(this)) {
              var p = this.getNewsletterMetadataCollection(),
                _ = p.gadd(this.id);
              (this.addChild("newsletterMetadata", _),
                o("WAWebChatGroupUtils").updateReadOnly(this),
                o("WAWebChatGroupUtils").updateCanSend(this),
                this.listenTo(
                  _,
                  "change:membershipType",
                  i
                    ? this.$ChatImpl$p_20
                    : function () {
                        (o("WAWebChatGroupUtils").updateReadOnly(n),
                          o("WAWebChatGroupUtils").updateCanSend(n));
                      },
                ));
            } else
              this.listenTo(
                this.presence,
                "change:isOnline",
                i
                  ? this.$ChatImpl$p_24
                  : function () {
                      return o("WAWebPresenceChatAction").presenceOnlineChanged(
                        n,
                      );
                    },
              );
            i
              ? this.listenTo(this, "change:isReadOnly", this.$ChatImpl$p_25)
              : this.listenTo(this, "change:isReadOnly", function () {
                  if (
                    ((o("WAWebChatGetters").getIsGroup(this) ||
                      o("WAWebChatGetters").getIsNewsletter(this)) &&
                      (this.isTrusted(),
                      o("WAWebChatGroupUtils").updateCanSend(this)),
                    o("WAWebChatGetters").getIsGroup(this))
                  ) {
                    var e = this.getGroupMetadataCollection();
                    e.update(this.id);
                  }
                });
            var f = this.getCollection();
            if (
              (f.notSpam[this.id] &&
                !this.notSpam &&
                r("WAWebSendNotSpamAction")(this).catch(r("WAWebNoop")),
              (f.notSpam[this.id] = !!this.notSpam),
              this.notSpam ||
                this.listenTo(
                  this,
                  "change:notSpam",
                  i
                    ? this.$ChatImpl$p_26
                    : function () {
                        return n.$ChatImpl$p_26();
                      },
                ),
              o("WAWebChatGroupUtils").updateTitle(this),
              this.isTrusted(),
              (this.groupSafetyChecked = !!(
                (a = this.groupMetadata) != null && a.groupSafetyCheck
              )),
              o("WAWebChatGroupUtils").updateCanSend(this),
              this.listenTo(
                this.contact,
                "change:name",
                i
                  ? this.isTrusted
                  : function () {
                      return n.isTrusted();
                    },
              ),
              this.listenTo(
                this.msgs,
                "add",
                i
                  ? this.$ChatImpl$p_27
                  : function (e) {
                      o("WAWebHandleNewMsgAction").handleNewMsgForChat(n, e);
                    },
              ),
              this.listenTo(
                this.msgs,
                "update_sort_time",
                i
                  ? this.$ChatImpl$p_28
                  : function () {
                      return o("WAWebChatUpdates").updateSortTime(n);
                    },
              ),
              this.listenTo(
                this.msgs,
                "bulk_add",
                i
                  ? this.$ChatImpl$p_29
                  : function (e, t) {
                      return o("WAWebChatMedia").addMediaMsgs(n, e, t);
                    },
              ),
              this.listenTo(
                this.msgs,
                "add",
                i
                  ? this.$ChatImpl$p_30
                  : function (e) {
                      return n.$ChatImpl$p_30(e);
                    },
              ),
              this.listenTo(
                this.msgs,
                "bulk_add",
                i
                  ? this.deregisterExpiredViewOnceBulkMessages
                  : function (e) {
                      return n.deregisterExpiredViewOnceBulkMessages(e);
                    },
              ),
              this.listenTo(
                this.msgs,
                "add remove change:ephemeralExpirationTimestamp change:kicState change:expiredTimestamp",
                i
                  ? this.$ChatImpl$p_31
                  : function (e) {
                      return n.$ChatImpl$p_31(e);
                    },
              ),
              this.listenTo(
                this.msgs,
                "bulk_add",
                i
                  ? this.$ChatImpl$p_32
                  : function (e) {
                      e.forEach(function (e) {
                        n.$ChatImpl$p_31(e);
                      });
                    },
              ),
              this.listenTo(
                this.msgs,
                "change:kicState",
                i
                  ? this.$ChatImpl$p_33
                  : function (e) {
                      var t = n.keptMsgs;
                      t &&
                        (o("WAWebMsgGetters").getIsKept(e)
                          ? t.add(e)
                          : t.remove(e));
                    },
              ),
              this.listenTo(
                this,
                "change:msgs",
                i
                  ? this.$ChatImpl$p_34
                  : function () {
                      return o("WAWebChatMedia").resetMediaMsgs(n);
                    },
              ),
              (this.saveAssignedColorsDebounced = r("WAWebDebounce")(
                function () {
                  return o("WAWebChatParticipantColor").saveAssignedColors(n);
                },
                1e3,
              )),
              this.listenTo(
                this,
                "change:active",
                i
                  ? this.$ChatImpl$p_35
                  : function () {
                      return n.$ChatImpl$p_35();
                    },
              ),
              (this.pendingAction = 0),
              this.listenTo(
                this,
                "change:t change:modifyTag",
                i
                  ? this.$ChatImpl$p_36
                  : function () {
                      return o("WAWebChatMessageSearch").clearFtsCache(n);
                    },
              ),
              this.listenTo(
                r("WAWebL10N"),
                "locale_change",
                i
                  ? this.$ChatImpl$p_10
                  : function () {
                      o("WAWebChatGroupUtils").updateTitle(n);
                    },
              ),
              (o("WAWebConnModel").Conn.isSMB ||
                o("WAWebListsGatingUtils").isListsEnabled()) &&
                o("WAWebBizLabelUtils").initializeLabels(this),
              o("WAWebConnModel").Conn.isSMB && this.$ChatImpl$p_37(),
              this.$ChatImpl$p_12(),
              this.$ChatImpl$p_38(),
              o("WAWebBotUtils").isMetaAiBot(this.id) &&
                o("WAWebBotGating").isAiChatThreadsEnabled())
            ) {
              var g = new (o("WAWebAiThreadCollection").AiThreadCollection)();
              this.aiThreads = g;
            }
            ((o("WAWebThreadsGating").isViewRepliesEntryPointEnabled(this) ||
              o("WAWebThreadsGating").isViewRepliesContextMenuEnabled(this)) &&
              (this.viewRepliesThreads = new (o(
                "WAWebViewRepliesCollection",
              ).ViewRepliesCollection)(this.id)),
              this.id.isFbidBot() &&
                (o("WAWebBotProfileCollection").BotProfileCollection.get(
                  this.id,
                ) ||
                  o("WAWebBotProfileCollection").BotProfileCollection.find(
                    this.id,
                  )),
              o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() &&
                this.listenTo(
                  this,
                  "change:capiThreadControl change:forceDismissAiAgentBlockBar",
                  i
                    ? this.$ChatImpl$p_11
                    : function () {
                        o("WAWebChatGroupUtils").updateCanSend(n);
                      },
                ),
              this.listenTo(
                o("WAWebCmd").Cmd,
                "reachout_timelock_state_change",
                i
                  ? this.$ChatImpl$p_11
                  : function () {
                      return o("WAWebChatGroupUtils").updateCanSend(n);
                    },
              ),
              this.listenTo(
                o("WAWebCmd").Cmd,
                "new_chat_message_capping_state_change",
                i
                  ? this.$ChatImpl$p_11
                  : function () {
                      return o("WAWebChatGroupUtils").updateCanSend(n);
                    },
              ),
              this.listenTo(
                this,
                "add:tcToken change:tcToken remove:tcToken",
                i
                  ? this.$ChatImpl$p_11
                  : function () {
                      return o("WAWebChatGroupUtils").updateCanSend(n);
                    },
              ));
          }),
          (i.$ChatImpl$p_37 = function () {
            var e = this,
              t = o("WAWebABProps").getABPropConfigValue(
                "web_optimized_event_handlers",
              );
            if (o("WAWebChatAssignmentGatingUtils").chatAssignmentEnabled()) {
              this.set(
                "unopenedByAssignedAgent",
                o(
                  "WAWebChatAssignmentCollection",
                ).ChatAssignmentCollection.getChatUnopenedStatus(this.id),
              );
              var n = o(
                "WAWebChatAssignmentCollection",
              ).ChatAssignmentCollection.getAgentCollectionForChatId(this.id);
              (this.set("isAssignedToMe", this.$ChatImpl$p_39()),
                this.set("assignedAgent", n.at(0)),
                this.listenTo(
                  n,
                  "add remove change",
                  t
                    ? this.$ChatImpl$p_40
                    : function () {
                        (e.set(
                          "unopenedByAssignedAgent",
                          o(
                            "WAWebChatAssignmentCollection",
                          ).ChatAssignmentCollection.getChatUnopenedStatus(
                            e.id,
                          ),
                        ),
                          e.set("isAssignedToMe", e.$ChatImpl$p_39()),
                          e.set("assignedAgent", n.at(0)));
                      },
                ));
            }
          }),
          (i.$ChatImpl$p_18 = function (t) {
            var e = this;
            if (this.unreadMentionsOfMe) {
              var n = new Map(
                this.unreadMentionsOfMe.map(function (e) {
                  return [String(e.id), e];
                }),
              );
              this.listenTo(this.msgs, "bulk_add", function (a) {
                for (var i of a) {
                  var l = i.id.toString(),
                    s = n.get(l);
                  !s ||
                    !e.isUnreadMsg(i) ||
                    t.unreadMentionMetadata.addUnreadMentions(
                      [new (r("WAWebUnreadMentionModel"))(s)],
                      o("WAWebGroupUnreadMessageType").UnreadMessageType
                        .PERSISTANCE_LOAD,
                    );
                }
              });
            }
            (this.unreadMentionCount != null &&
              (t.unreadMentionMetadata.pendingUnreadMentionCount =
                this.unreadMentionCount),
              this.$ChatImpl$p_19());
          }),
          (i.$ChatImpl$p_38 = function () {
            var e = this,
              t = o("WAWebABProps").getABPropConfigValue(
                "web_optimized_event_handlers",
              );
            ((this.eventMsgs = new (r("WAWebEventMsgsCollection"))(this)),
              this.listenTo(
                this.msgs,
                "bulk_add",
                t
                  ? this.$ChatImpl$p_41
                  : function (t, n) {
                      var r = t.filter(function (e) {
                        return o("WAWebFrontendMsgGetters").getAsEventCreation(
                          e,
                        );
                      });
                      r.length && e.getEventMsgs().add(r, n);
                    },
              ),
              this.listenTo(
                this.msgs,
                "change:msgs",
                t
                  ? this.$ChatImpl$p_42
                  : function () {
                      if (e.eventMsgs) {
                        var t;
                        (e.eventMsgs.delete(),
                          (t = e.eventMsgs) == null || t.initialize());
                      }
                    },
              ));
          }),
          (i.$ChatImpl$p_11 = function () {
            o("WAWebChatGroupUtils").updateCanSend(this);
          }),
          (i.$ChatImpl$p_10 = function () {
            o("WAWebChatGroupUtils").updateTitle(this);
          }),
          (i.$ChatImpl$p_7 = function () {
            o("WAWebChatUpdates").updateMuteExpiration(this);
          }),
          (i.$ChatImpl$p_8 = function () {
            o("WAWebChatUpdates").updateMentionAllMuteExpiration(this);
          }),
          (i.$ChatImpl$p_9 = function () {
            o("WAWebChatUpdates").updateCallMuteExpiration(this);
          }),
          (i.$ChatImpl$p_17 = function () {
            o("WAWebChatGroupUtils").updateReadOnly(this);
          }),
          (i.$ChatImpl$p_20 = function () {
            (o("WAWebChatGroupUtils").updateReadOnly(this),
              o("WAWebChatGroupUtils").updateCanSend(this));
          }),
          (i.$ChatImpl$p_34 = function () {
            return o("WAWebChatMedia").resetMediaMsgs(this);
          }),
          (i.$ChatImpl$p_36 = function () {
            o("WAWebChatMessageSearch").clearFtsCache(this);
          }),
          (i.$ChatImpl$p_28 = function () {
            o("WAWebChatUpdates").updateSortTime(this);
          }),
          (i.$ChatImpl$p_24 = function () {
            o("WAWebPresenceChatAction").presenceOnlineChanged(this);
          }),
          (i.$ChatImpl$p_13 = function () {
            this.isFavorite = !!o(
              "WAWebFavoriteCollection",
            ).FavoriteCollection.get(this.id.toString());
          }),
          (i.$ChatImpl$p_15 = function () {
            this.$ChatImpl$p_12();
            var e = this.groupMetadata;
            e != null && (this.groupType = e.groupType);
          }),
          (i.$ChatImpl$p_16 = function () {
            var e = this.groupMetadata;
            e != null && (this.hasCapi = e.hasCapi);
          }),
          (i.$ChatImpl$p_21 = function () {
            var e = this.groupMetadata;
            e != null && (this.isParentGroup = e.isParentGroup);
          }),
          (i.$ChatImpl$p_23 = function () {
            var e = this.broadcastMetadata;
            ((e == null ? void 0 : e.recipients) != null &&
              (this.broadcastRecipientCount = e.recipients.length),
              o("WAWebChatGroupUtils").updateTitle(this));
          }),
          (i.$ChatImpl$p_25 = function () {
            if (
              ((o("WAWebChatGetters").getIsGroup(this) ||
                o("WAWebChatGetters").getIsNewsletter(this)) &&
                (this.isTrusted(),
                o("WAWebChatGroupUtils").updateCanSend(this)),
              o("WAWebChatGetters").getIsGroup(this))
            ) {
              var e = this.getGroupMetadataCollection();
              e.update(this.id);
            }
          }),
          (i.$ChatImpl$p_27 = function (t) {
            o("WAWebHandleNewMsgAction").handleNewMsgForChat(this, t);
          }),
          (i.$ChatImpl$p_29 = function (t, n) {
            o("WAWebChatMedia").addMediaMsgs(this, t, n);
          }),
          (i.$ChatImpl$p_32 = function (t) {
            var e = this;
            t.forEach(function (t) {
              e.$ChatImpl$p_31(t);
            });
          }),
          (i.$ChatImpl$p_33 = function (t) {
            var e = this.keptMsgs;
            e && (o("WAWebMsgGetters").getIsKept(t) ? e.add(t) : e.remove(t));
          }),
          (i.$ChatImpl$p_40 = function () {
            var e = o(
              "WAWebChatAssignmentCollection",
            ).ChatAssignmentCollection.getAgentCollectionForChatId(this.id);
            (this.set(
              "unopenedByAssignedAgent",
              o(
                "WAWebChatAssignmentCollection",
              ).ChatAssignmentCollection.getChatUnopenedStatus(this.id),
            ),
              this.set("isAssignedToMe", this.$ChatImpl$p_39()),
              this.set("assignedAgent", e.at(0)));
          }),
          (i.$ChatImpl$p_41 = function (t, n) {
            var e = t.filter(function (e) {
              return o("WAWebFrontendMsgGetters").getAsEventCreation(e);
            });
            e.length && this.getEventMsgs().add(e, n);
          }),
          (i.$ChatImpl$p_42 = function () {
            if (this.eventMsgs) {
              var e;
              (this.eventMsgs.delete(),
                (e = this.eventMsgs) == null || e.initialize());
            }
          }),
          (i.$ChatImpl$p_39 = function () {
            var e = o("WAWebUserPrefsMeUser")
              .getMeDevicePnOrThrow_DO_NOT_USE()
              .getDeviceId();
            return o("WAWebChatAssignmentCollection")
              .ChatAssignmentCollection.getAgentCollectionForChatId(this.id)
              .getModelsArray()
              .some(function (t) {
                return t.deviceId === e;
              });
          }),
          (i.$ChatImpl$p_19 = function () {
            o("WAWebChatGetters").getIsGroup(this) &&
              this.groupMetadata &&
              (this.hasUnreadMention =
                this.groupMetadata.unreadMentionMetadata.getUnreadMentionCount() >
                0);
          }),
          (i.set = function (n, r, o) {
            if (typeof n == "string") {
              if (
                (n === "muteExpiration" && this.mute && this.mute.setMute(r),
                n === "isAutoMuted" && this.mute && this.mute.setAutoMuted(r),
                n === "callMuteExpiration" && this.mute)
              ) {
                var e,
                  a = r != null ? r : 0;
                ((e = this.mute.callExpiration) != null ? e : 0) !== a &&
                  this.mute.muteCall(a);
              }
            } else if (
              (Object.hasOwn(n, "muteExpiration") &&
                this.mute &&
                this.mute.setMute(n.muteExpiration, n.isAutoMuted),
              Object.hasOwn(n, "callMuteExpiration") && this.mute)
            ) {
              var i,
                l,
                s = (i = n.callMuteExpiration) != null ? i : 0;
              ((l = this.mute.callExpiration) != null ? l : 0) !== s &&
                this.mute.muteCall(s);
            }
            return (t.prototype.set.call(this, n, r, o), this);
          }),
          (i.equals = function (t) {
            return this.id.equals(t == null ? void 0 : t.id);
          }),
          (i.addPendingAction = function (t) {
            var e = this,
              n = function () {
                e.decPending();
              };
            (t.then(n, n), this.pendingAction++);
          }),
          (i.decPending = function () {
            this.pendingAction > 0
              ? this.pendingAction--
              : (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "chat:onPendingActionUpdate pendingAction value is invalid",
                    ])),
                ),
                (this.pendingAction = 0));
          }),
          (i.$ChatImpl$p_5 = function () {
            if (o("WAWebFrontendChatGetters").getHasDraftMessage(this)) {
              var e;
              this.draftMessageSortTs =
                (e = this.draftMessage) == null ? void 0 : e.timestamp;
            } else
              this.draftMessageSortTs != null &&
                (this.draftMessageSortTs = null);
          }),
          (i.$ChatImpl$p_4 = function () {
            try {
              o("WAWebLidMigrationUtils").shouldHaveAccountLid(this.id) &&
                this.accountLid == null &&
                (o("WAWebLidMigrationUtils").logLidMetadata(),
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "chat model missing account_lid. isEmp: ",
                        ", id: ",
                        "",
                      ])),
                    o("WAWebCurrentUser").isEmployee(),
                    this.id.toLogString(),
                  )
                  .sendLogs("chat-model-without-account-lid")
                  .tags("missing-lid"));
              var e = this.accountLid;
              if (e != null && !e.isLid()) {
                var t = o("WAWebApiContact").getCurrentLid(e),
                  n = t == null || !t.isLid();
                (o("WAWebLidMigrationUtils").logLidMetadata(),
                  o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "non-Lid accountLid, logout. id: ",
                          ", accLid: ",
                          ", curLid: ",
                          "",
                        ])),
                      this.id.toLogString(),
                      e.toLogString(),
                      t == null ? void 0 : t.toLogString(),
                    )
                    .sendLogs(
                      n
                        ? "account-lid-not-lid-unrecoverable"
                        : "account-lid-not-lid-recoverable",
                    )
                    .tags("account-lid-not-lid"),
                  o("WAAsyncSleep")
                    .asyncSleep(5e3)
                    .then(function () {
                      return o("WAWebSocketLogoutJob").socketLogout(
                        o("WAWebLogoutReasonConstants").LogoutReason
                          .ClientVersionOutdated,
                      );
                    }));
              }
            } catch (e) {
              o("WALogger").ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatModel: failed to validate lid chat: ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (i.$ChatImpl$p_35 = function () {
            var e = this;
            if (
              (o("WAWebChatGetters").getIsGroup(this) &&
                this.active &&
                ((this.squelch = r(
                  "WAWebConstantsDeprecated",
                ).SQUELCH_RESET_VALUE),
                (this.reactionSquelch = r(
                  "WAWebConstantsDeprecated",
                ).SQUELCH_RESET_VALUE),
                (this.hasChatBeenOpened = !0)),
              (this.presence.chatActive = this.active),
              this.active)
            ) {
              var t = o("WATimeUtils").unixTime(),
                n = this.lastChatEntryTimestamp;
              (n == null || t - n > o("WATimeUtils").HOUR_SECONDS) &&
                o("WAWebDBUpdateChatTable")
                  .updateChatTable(this.id, { lastChatEntryTimestamp: t })
                  .then(function () {
                    e.lastChatEntryTimestamp = t;
                  })
                  .catch(r("WAWebNoop"));
            } else {
              (this.$ChatImpl$p_5(),
                this.getCollection().sort(),
                this.deregisterExpiredViewOnceBulkMessages(this.msgs),
                this.$ChatImpl$p_43(),
                this.$ChatImpl$p_44());
              var a = Array.from(this.$ChatImpl$p_1);
              (o("WAWebDBEphemeralMessage")
                .removeExpiredMessagesFromHistory(a)
                .then(function () {
                  var t = a.map(function (e) {
                    return e.id.toString();
                  });
                  t.length > 0 &&
                    (o(
                      "WAWebUpdateLastAddOnPreviewChatAction",
                    ).deleteModelsForLastAddOnPreview(t),
                    o("WAWebPersistedJobManagerWorkerCompatible")
                      .getJobManager()
                      .waitUntilPersisted(
                        o(
                          "WAWebPersistedJobDefinitions",
                        ).jobSerializers.deleteAddOns(e.id.toString(), t),
                      ));
                })
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[ephemeral-leak] drain DB delete failed count=",
                          "",
                        ])),
                      a.length,
                    )
                    .catching(r("getErrorSafe")(e))
                    .tags("ephemeral-messages")
                    .sendLogs("ephemeral-leak-drain-failed", {
                      sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                    });
                }),
                this.$ChatImpl$p_1.forEach(function (t) {
                  (e.$ChatImpl$p_1.delete(t),
                    t.delete({
                      skipUpdatingSortTime: !0,
                      doNotResetLastReceived: !0,
                    }));
                }));
            }
          }),
          (i.$ChatImpl$p_43 = function () {
            if (o("WAWebABProps").getABPropConfigValue("web_anr_prune_cmc")) {
              var e = this.msgs;
              if (!(e.length <= o("WAWebCollectionConstants").PAGE_SIZE)) {
                var t = e.length - o("WAWebCollectionConstants").PAGE_SIZE,
                  n = e.getModelsArray().slice(0, t);
                (e.remove(n, { silent: !0 }, !0),
                  (e.msgLoadState.noEarlierMsgs = !1));
              }
            }
          }),
          (i.$ChatImpl$p_44 = function () {
            if (
              o("WAWebABProps").getABPropConfigValue(
                "web_evict_thumbnail_hq_on_inactive",
              )
            )
              for (var e of this.msgs.getModelsArray())
                e.thumbnailHQ && e.set({ thumbnailHQ: void 0 }, { silent: !0 });
          }),
          (i.$ChatImpl$p_26 = function () {
            var e = this.getCollection();
            ((e.notSpam[this.id] = this.notSpam),
              this.isTrusted(),
              this.notSpam && this.stopListening(this, "change:notSpam"));
          }),
          (i.senderMsgCount = function () {
            return r("countWhere")(this.getAllMsgs(), function (e) {
              return (
                !o("WAWebMsgGetters").getIsSentByMe(e) &&
                !o("WAWebMsgGetters").getIsNotification(e)
              );
            });
          }),
          (i.isCAGAdmin = function () {
            var e,
              t =
                (e = this.groupMetadata) == null
                  ? void 0
                  : e.participants.iAmAdmin();
            return t != null
              ? t && o("WAWebFrontendChatGetters").getIsCAG(this)
              : !1;
          }),
          (i.hasMaybeSentMsgToChat = function () {
            return this.getAllMsgs().some(function (e) {
              return o("WAWebMsgGetters").getIsSentByMe(e);
            });
          }),
          (i.isTrusted = function () {
            var e = !1;
            if (o("WAWebChatGetters").getIsGroup(this)) {
              var t;
              e =
                this.isReadOnly ||
                this.notSpam ||
                ((t = this.groupMetadata) == null ? void 0 : t.isTrusted());
            } else
              o("WAWebChatGetters").getIsBroadcast(this) ||
              o("WAWebChatGetters").getIsNewsletter(this)
                ? (e = !0)
                : o("WAWebChatGetters").getIsUser(this) &&
                  (e =
                    this.notSpam ||
                    o("WAWebFrontendContactGetters").getIsMyContact(
                      this.contact,
                    ));
            return (
              e !== !0 && this.hasMaybeSentMsgToChat() && (e = !0),
              o("WAWebChatGetters").getIsGroup(this) &&
                e !== this.trusted &&
                o(
                  "WAWebGroupSafetyCheckUtils",
                ).handleIsTrustedChangeForGroupSafety(this, !!e),
              (this.trusted = !!e)
            );
          }),
          (i.isGroupSafetyChecked = function () {
            var e = !1;
            if (this.groupMetadata) {
              var t;
              ((e =
                (t = this.groupMetadata) == null ? void 0 : t.groupSafetyCheck),
                e !== this.groupSafetyChecked &&
                  o(
                    "WAWebGroupSafetyCheckUtils",
                  ).handleGroupSafetyCheckStateUpdate(this, !!this.trusted, e));
            }
            return (this.groupSafetyChecked = !!e);
          }),
          (i.isSuspendedOrTerminated = function () {
            if (o("WAWebChatGetters").getIsGroup(this)) {
              var e;
              return !!(
                (e = this.groupMetadata) != null && e.isSuspendedOrTerminated()
              );
            } else if (o("WAWebChatGetters").getIsNewsletter(this)) {
              var t;
              return !!(
                (t = this.newsletterMetadata) != null &&
                t.isSuspendedOrTerminated
              );
            }
            return !1;
          }),
          (i.isSuspended = function () {
            if (o("WAWebChatGetters").getIsGroup(this)) {
              var e;
              return !!((e = this.groupMetadata) != null && e.suspended);
            } else if (o("WAWebChatGetters").getIsNewsletter(this)) {
              var t;
              return !!((t = this.newsletterMetadata) != null && t.suspended);
            }
            return !1;
          }),
          (i.canToggleFavorite = function () {
            var e, t, n, r;
            return o("WAWebListsGatingUtils").isListsEnabled() ||
              this.isFavorite
              ? !0
              : ((o("WAWebChatGetters").getIsGroup(this) &&
                  ((e = this.groupMetadata) == null ? void 0 : e.groupType) !==
                    o("WAWebGroupType").GroupType.COMMUNITY &&
                  ((t = this.groupMetadata) == null ? void 0 : t.groupType) !==
                    o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
                  ((n = this.groupMetadata) == null
                    ? void 0
                    : n.participants.iAmMember()) &&
                  !(
                    (r = this.groupMetadata) != null &&
                    r.isSuspendedOrTerminated()
                  )) ||
                  (o("WAWebFrontendChatGetters").getKind(this) ===
                    o("WAWebChatFlowTypes").ChatKindType.Chat &&
                    this.contact != null &&
                    o("WAWebFrontendContactGetters").getIsMyContact(
                      this.contact,
                    ) &&
                    !o("WAWebContactGetters").getId(this.contact).isBot() &&
                    !o("WAWebContactGetters").getIsMe(this.contact))) &&
                  this.trusted;
          }),
          (i.title = function () {
            var e;
            return o("WAWebChatGetters").getIsGroup(this)
              ? (e = this.formattedTitle) != null
                ? e
                : s._(/*BTDS*/ "Unknown subject").toString()
              : this.formattedTitle;
          }),
          (i.getTcToken = function () {
            return this.tcToken == null ||
              this.tcTokenTimestamp == null ||
              o("WAWebTrustedContactsUtils").isTokenExpired(
                this.tcTokenTimestamp,
                o("WAWebTrustedContactsUtils").TcTokenMode.Receiver,
              )
              ? null
              : this.tcToken;
          }),
          (i.shouldShowUnreadDivider = function () {
            return o("WAWebFrontendChatGetters").getShouldShowUnreadDivider(
              this,
            );
          }),
          (i.delete = function () {
            (t.prototype.delete.call(this),
              this.getCollection().remove(this.id),
              this.$ChatImpl$p_3.abort(),
              this.presence.delete(),
              o("WAWebCmd").Cmd.closeChat(this),
              this.groupMetadata && this.groupMetadata.delete(),
              this.mediaMsgs && this.mediaMsgs.delete(),
              this.linkMsgs && this.linkMsgs.delete(),
              this.docMsgs && this.docMsgs.delete(),
              this.productMsgs && this.productMsgs.delete(),
              this.eventMsgs && this.eventMsgs.delete(),
              this.keptMsgs && this.keptMsgs.delete());
            var e = this.starredMsgs;
            (e && (e.delete(), e.stopListening(), e.reset()),
              o("WAWebChatGetters").clearChatGetterCacheFor(this),
              o("WAWebFrontendChatGetters").clearFrontendChatGetterCacheFor(
                this,
              ));
          }),
          (i.isDirty = function () {
            return this.unreadCount !== 0;
          }),
          (i.canPin = function () {
            var e;
            if (this.archive) return !1;
            var t =
              ((e = this.promises) == null || (e = e.setArchive) == null
                ? void 0
                : e.archive) === !0;
            return !t;
          }),
          (i.canArchive = function () {
            return !0;
          }),
          (i.supportsChatLock = function () {
            return !0;
          }),
          (i.hasUnreadEdit = function () {
            return this.unreadEditTimestampMs != null;
          }),
          (i.setComposeContents = function (t) {
            var e,
              n = t.text;
            if (((e = t.text) == null ? void 0 : e.trim()) === "") {
              var r;
              n = (r = t.text) == null ? void 0 : r.trim();
            }
            var a = {
              text: n,
              ctwaContext: t.ctwaContext,
              ctwaContextLinkData: t.ctwaContextLinkData,
              timestamp: t.timestamp,
              omittedUrl: t.omittedURL,
            };
            o("WAWebUpdateDraftMessageChatAction").updateDraftMessageChat(
              this.id,
              a,
            );
          }),
          (i.getComposeContents = function () {
            if (this.draftMessage) {
              var e = {
                  timestamp: this.draftMessage.timestamp,
                  text: this.draftMessage.text,
                },
                t = this.draftMessage,
                n = t.ctwaContext,
                r = t.ctwaContextLinkData,
                o = t.omittedUrl;
              return (
                o != null && (e.omittedURL = o),
                n != null && (e.ctwaContext = n),
                r != null && (e.ctwaContextLinkData = r),
                e
              );
            }
          }),
          (i.setAttachMediaContents = function (t) {
            ((this.attachMediaContents = t),
              (this.draftAttachMediaContentsSortTs = t
                ? o("WATimeUtils").unixTime()
                : null));
          }),
          (i.isComposingWithUnsavedChanges = function () {
            return this.isComposingPoll;
          }),
          (i.isBusinessGroup = function () {
            var e,
              t =
                (e = this.groupMetadata) == null
                  ? void 0
                  : e.participants.getAdmins();
            if (!t) return !1;
            for (var n of t) {
              var r = o("WAWebContactCollection").ContactCollection.get(n.id);
              if (r != null && r.isBusiness) return !0;
            }
            return !1;
          }),
          (i.isCAG = function () {
            return o("WAWebFrontendChatGetters").getIsCAG(this);
          }),
          (i.onEmptyMRM = function () {
            (o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "models:Chat:removeMsg 0 messages left, querying...",
                ])),
            ),
              o("WAWebChatLoadMessages")
                .loadEarlierMsgs({ chat: this })
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebBackendErrors").E404,
                    r("WAWebNoop"),
                  ),
                )
                .catch(function (e) {
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose(
                        ["chat:onEmptyMRM failed\n", ""],
                        ["chat:onEmptyMRM failed\\n", ""],
                      )),
                    e,
                  );
                }));
          }),
          (i.deleteMsgsBeforeMsgInclusive = function (t, n, a) {
            n === void 0 && (n = !1);
            var e;
            if (!t) e = this.msgs.length;
            else if (this.msgs.get(t.id)) e = this.msgs.indexOf(t);
            else return;
            var i = function (i, l, s) {
              return (
                (!r("isStringNullOrEmpty")(a) &&
                  !o("WAWebMsgModelUtils").msgMatchesType(i, a)) ||
                (i.getMsgChunk() === this.msgs && l > e) ||
                (n && i.star) ||
                (o("WAWebMsgGetters").getIsInitialE2ENotification(i) && n)
              );
            };
            this.deleteMsgsPartial(i, !0);
          }),
          (i.deleteMsgsPartial = function (t, n) {
            var e = this;
            n === void 0 && (n = !1);
            var r = this.unreadCount,
              a = [];
            this.getAllCMCs().forEach(function (r) {
              var i = r.filter(function (n, r, o) {
                return !t.apply(e, [n, r, o]);
              });
              (r.remove(i, void 0, n),
                a.push.apply(a, i),
                i.forEach(function (e) {
                  (o("WAWebMsgGetters").getIsAuthenticationMessage(e) &&
                    o("WAWebOTPLoggingHelper").logOTPMessageDeleted(
                      o("WAWebMsgDataFromModel").msgDataFromMsgModel(e),
                    ),
                    e.delete());
                }));
            });
            var i = this.aiThreads;
            if (i != null) {
              var l = o(
                "WAWebDecrementThreadUnreadCountsAction",
              ).getThreadUnreadDeltasFromMessages(a);
              o(
                "WAWebDecrementThreadUnreadCountsAction",
              ).decrementThreadUnreadCountsAction(l, i);
            }
            if (
              ([].concat(this.msgChunks).forEach(function (t) {
                t.length === 0 && e.removeMsgsCollection(t);
              }),
              this.msgs.length > 0)
            ) {
              var s = r > this.msgs.length ? this.msgs.length : r;
              o("WAWebDBUpdateChatTable")
                .updateChatTable(this.id, { unreadCount: s })
                .then(function () {
                  ((e.unreadCount = s),
                    (e.msgs.msgLoadState.noEarlierMsgs =
                      e.endOfHistoryTransferType !==
                      o("WAWebChatConstants")
                        .ConversationEndOfHistoryTransferModelPropType
                        .INCOMPLETE));
                });
            }
          }),
          (i.deleteMessages = function (t) {
            var e = function (n, r, o) {
              return !t.includes(n.id.toString());
            };
            (this.deleteMsgsPartial(e, !0),
              this.getAllMsgs().length === 0 &&
                o("WAWebChatLoadMessages").loadEarlierMsgs({ chat: this }),
              o("WAWebLimitSharingModelUtils").createLimitSharingMsgOnChatClear(
                this.id,
              ));
          }),
          (i.getLastMsgKeyForAction = function () {
            var e = this.msgs.last(),
              t;
            return (
              e &&
                (!this.lastReceivedKey ||
                (e.id.fromMe && e.local && e.ack === o("WAWebAck").ACK.CLOCK)
                  ? (t = e.id)
                  : (t = this.lastReceivedKey)),
              t || void 0
            );
          }),
          (i.getWebcChatType = function () {
            var e = o("WAWebFrontendChatGetters").getKind(this);
            if (e != null)
              switch (e) {
                case o("WAWebChatFlowTypes").ChatKindType.Chat:
                  return o("WAWebWamEnumWebcChatType").WEBC_CHAT_TYPE
                    .INDIVIDUAL;
                case o("WAWebChatFlowTypes").ChatKindType.Group:
                  return o("WAWebWamEnumWebcChatType").WEBC_CHAT_TYPE.GROUP;
                case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
                  return o("WAWebWamEnumWebcChatType").WEBC_CHAT_TYPE
                    .BROADCAST_LIST;
                case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
                  return o("WAWebWamEnumWebcChatType").WEBC_CHAT_TYPE
                    .NEWSLETTER;
                case o("WAWebChatFlowTypes").ChatKindType.Community:
                  return o("WAWebWamEnumWebcChatType").WEBC_CHAT_TYPE.COMMUNITY;
              }
            else {
              var t = new TypeError("Invalid Chat.kind " + String(e));
              throw (t.stack, t);
            }
          }),
          (i.getMdChatAssignmentChatType = function () {
            return o(
              "WAWebChatModelDerivedMethods",
            ).getMdChatAssignmentChatTypeFn(this);
          }),
          (i.getChatAssignmentChatType = function () {
            var e = o("WAWebFrontendChatGetters").getKind(this);
            if (e != null)
              switch (e) {
                case o("WAWebChatFlowTypes").ChatKindType.Chat:
                  return o("WAWebWamEnumChatAssignmentChatType")
                    .CHAT_ASSIGNMENT_CHAT_TYPE.INDIVIDUAL;
                case o("WAWebChatFlowTypes").ChatKindType.Group:
                  return o("WAWebWamEnumChatAssignmentChatType")
                    .CHAT_ASSIGNMENT_CHAT_TYPE.GROUP;
                case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
                case o("WAWebChatFlowTypes").ChatKindType.Community:
                  return o("WAWebWamEnumChatAssignmentChatType")
                    .CHAT_ASSIGNMENT_CHAT_TYPE.COMMUNITY;
                case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
                  return o("WAWebWamEnumChatAssignmentChatType")
                    .CHAT_ASSIGNMENT_CHAT_TYPE.CHANNEL;
              }
            else {
              var t = new TypeError("Invalid Chat.kind " + String(e));
              throw (t.stack, t);
            }
          }),
          (i.deregisterExpiredViewOnceBulkMessages = function (t) {
            var e = this;
            t.forEach(function (t) {
              return e.$ChatImpl$p_30(t);
            });
          }),
          (i.$ChatImpl$p_30 = function (t) {
            o("WAWebViewOnceState").isExpired(t.safe()) &&
              (o("WAWebAppTracker").AppTracker.mark(
                o("WAWebAppTracker").AppTrackerType.PurgeViewOnce,
              ),
              o("WAWebMedia").deregisterMsg(t));
          }),
          (i.$ChatImpl$p_31 = function (t) {
            var e = this;
            (r("WAWebAlarm").clearTimeout(this.$ChatImpl$p_2.get(t)),
              this.$ChatImpl$p_2.delete(t),
              this.$ChatImpl$p_1.delete(t));
            var a = o("WAWebMsgGetters").getEphemeralExpirationTimestamp(t);
            if (
              !(
                a == null ||
                !this.msgs.includes(t) ||
                o("WAWebMsgGetters").getIsKept(t)
              )
            ) {
              var i = (function () {
                var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    if (
                      (e.$ChatImpl$p_2.delete(t),
                      !o("WAWebMsgGetters").getIsKept(t))
                    ) {
                      var n =
                        t.afterReadDuration != null && t.afterReadDuration > 0;
                      if (!e.active || n) {
                        var a = n && e.active;
                        a &&
                          ((t.isFadingOut = !0),
                          yield o("WAAsyncSleep").asyncSleep(S));
                        try {
                          yield o(
                            "WAWebDBEphemeralMessage",
                          ).removeExpiredMessagesFromHistory([t]);
                        } catch (e) {
                          o("WALogger")
                            .ERROR(
                              g ||
                                (g = babelHelpers.taggedTemplateLiteralLoose([
                                  "[ephemeral-leak] handleExpiration DB delete failed",
                                ])),
                            )
                            .catching(r("getErrorSafe")(e))
                            .tags("ephemeral-messages")
                            .sendLogs(
                              "ephemeral-leak-handle-expiration-failed",
                              {
                                sendLogsType:
                                  o("WALogger").SendLogsType.INVESTIGATION,
                              },
                            );
                          return;
                        }
                        (o(
                          "WAWebUpdateLastAddOnPreviewChatAction",
                        ).deleteModelsForLastAddOnPreview([t.id.toString()]),
                          yield o("WAWebPersistedJobManagerWorkerCompatible")
                            .getJobManager()
                            .waitUntilPersisted(
                              o(
                                "WAWebPersistedJobDefinitions",
                              ).jobSerializers.deleteAddOns(e.id.toString(), [
                                t.id.toString(),
                              ]),
                            ),
                          t.delete({
                            skipUpdatingSortTime: !0,
                            doNotResetLastReceived: !0,
                          }));
                      } else e.$ChatImpl$p_1.add(t);
                    }
                  },
                );
                return function () {
                  return a.apply(this, arguments);
                };
              })();
              if (o("WAWebKeepInChatMsgUtils").isExpired(t)) i();
              else {
                var l = r("WAWebAlarm").setGlobalTimeout(function () {
                  return void i();
                }, a * 1e3);
                this.$ChatImpl$p_2.set(t, l);
              }
            }
          }),
          (i.isUnreadMsg = function (t) {
            return this.$ChatImpl$p_45(t, this.unreadCount);
          }),
          (i.isActiveUnreadMsg = function (t) {
            return this.$ChatImpl$p_45(t, this.activeUnreadCount);
          }),
          (i.$ChatImpl$p_45 = function (t, n) {
            if (n <= 0) return !1;
            for (
              var e = this.msgs.getModelsArray(), r = 0, a = e.length - 1;
              a >= 0;
              a--
            ) {
              var i = e[a];
              if (o("WAWebMsgGetters").getIsUnreadType(i)) {
                if (i === t) return !0;
                if ((r++, r >= n)) break;
              }
            }
            return !1;
          }),
          (i.setWallpaperValue = function (t) {
            return (
              (this.wallpaperValue = t),
              o("WAWebDBUpdateChatTable").updateChatTable(this.id, {
                wallpaperValue: t,
              })
            );
          }),
          (i.setChatThemeValue = function (t) {
            return (
              (this.chatThemeValue = t),
              o("WAWebDBUpdateChatTable").updateChatTable(this.id, {
                chatThemeValue: t,
              })
            );
          }),
          (i.deriveThemeValueObjectsFromFlats = function () {
            (this.wallpaperValue == null &&
              (this.wallpaperValue = o(
                "WAWebChatThemeValue",
              ).wallpaperValueFromFlat({
                wallpaper: this.wallpaper,
                showDoodle: this.showDoodle,
                stockWallpaperImageId: this.stockWallpaperImageId,
              })),
              this.chatThemeValue == null &&
                (this.chatThemeValue = o(
                  "WAWebChatThemeValue",
                ).chatThemeValueFromFlat({
                  chatThemeId:
                    this.chatThemeId != null ? this.chatThemeId : null,
                  colorSchemeId:
                    this.colorSchemeId != null ? this.colorSchemeId : null,
                })));
          }),
          (i.persistDerivedThemeValuesIfNeeded = function () {
            var e =
              this.wallpaper != null ||
              this.showDoodle != null ||
              this.chatThemeId != null ||
              this.colorSchemeId != null ||
              this.stockWallpaperImageId != null;
            if (!o("WAWebChatThemeGatingUtils").isChatThemesEnabled() || !e)
              return (v || (v = n("Promise"))).resolve();
            var t = this.chatThemeValue,
              r = this.wallpaperValue;
            return (
              (this.wallpaper = null),
              (this.showDoodle = null),
              (this.chatThemeId = null),
              (this.colorSchemeId = null),
              (this.stockWallpaperImageId = null),
              o("WAWebDBUpdateChatTable").updateChatTable(this.id, {
                wallpaperValue: r,
                chatThemeValue: t,
                wallpaper: null,
                showDoodle: null,
                chatThemeId: null,
                colorSchemeId: null,
                stockWallpaperImageId: null,
              })
            );
          }),
          (i.setCapiThreadControl = function (t, n) {
            var e = (n == null ? void 0 : n.skipSideEffects) === !0;
            return (
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[Maiba] setCapiThreadControl: ",
                    " -> ",
                    " for chat=",
                    "",
                    "",
                  ])),
                this.capiThreadControl,
                t,
                this.id.toLogString(),
                e ? " (silent)" : "",
              ),
              (this.capiThreadControl = t),
              (this.forceDismissAiAgentBlockBar = !1),
              !e &&
                t ===
                  o("WAWebProtobufsE2E.pb")
                    .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                    .CONTROL_PASSED &&
                ((this.unreadCount = 1),
                o("WAWebNotificationBackend")
                  .showAiHandoffNotification(this)
                  .catch(
                    o("WAAbortError").catchAbort(function (e) {
                      o("WALogger").LOG(
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
                            "[Maiba] Aborted notification ",
                            "",
                          ])),
                        e,
                      );
                    }),
                  )),
              o("WAWebDBUpdateChatTable").updateChatTable(this.id, {
                capiThreadControl: t,
                unreadCount: this.unreadCount,
              })
            );
          }),
          (i.setForceDismissAiAgentBlockingBar = function (t) {
            this.forceDismissAiAgentBlockBar = t;
          }),
          (i.$ChatImpl$p_14 = function () {
            var e = this,
              t = this.groupMetadata;
            if (
              o("WAWebChatGetters").getIsGroup(this) &&
              t != null &&
              !t.stale
            ) {
              var n = !t.participants.iAmAdmin() && t.announce;
              this.isAnnounceGrpRestrict !== n &&
                (o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "chat:_updateIsAnnounceGrpRestrict:old ",
                      ", new: ",
                      "",
                    ])),
                  this.isAnnounceGrpRestrict,
                  n,
                ),
                o("WAWebDBUpdateChatTable")
                  .updateChatTable(this.id, { isAnnounceGrpRestrict: n })
                  .then(function () {
                    return (e.isAnnounceGrpRestrict = n);
                  }));
            }
          }),
          (i.sortMsgs = function (t, n) {
            var e = t.map(function (e) {
              var t = r("nullthrows")(e.getMsgChunk(n != null ? n : void 0));
              return {
                msg: e,
                chunkT: r("nullthrows")(t.at(0)).t,
                index: t.indexOf(e),
              };
            });
            return e
              .sort(function (e, t) {
                return e.chunkT === t.chunkT
                  ? e.index - t.index
                  : e.chunkT - t.chunkT;
              })
              .map(function (e) {
                return e.msg;
              });
          }),
          (i.waitForChatLoading = function () {
            var e = this,
              t = (v || (v = n("Promise"))).resolve();
            return (
              this.pendingInitialLoading &&
                (t = r("WAWebEventsWaitForBbEvent")(
                  this,
                  "change:pendingInitialLoading",
                  function () {
                    return !e.pendingInitialLoading;
                  },
                )),
              t
            );
          }),
          (i.$ChatImpl$p_12 = function () {
            var e,
              t = !!this.muteExpiration;
            if (this.archive) {
              this.showUnreadInTitle = !1;
              return;
            }
            if (this.isLocked) {
              this.showUnreadInTitle = !1;
              return;
            }
            if (o("WAWebBotUtils").isHiddenBotWid(this.id)) {
              this.showUnreadInTitle = !1;
              return;
            }
            if (
              this.id.isBot() &&
              !o("WAWebBotBaseGating").isBotEnabled() &&
              !o("WAWebBotFrontendGating").isManusIntegrationEnabled()
            ) {
              this.showUnreadInTitle = !1;
              return;
            }
            if (
              o("WAWebFrontendChatGetters").getOptimisticUnreadCount(this) <= 0
            ) {
              this.showUnreadInTitle = !1;
              return;
            }
            if (!o("WAWebChatGetters").getIsGroup(this)) {
              this.showUnreadInTitle = !t;
              return;
            }
            if (
              ((e = this.groupMetadata) == null ? void 0 : e.groupType) ===
              o("WAWebGroupType").GroupType.COMMUNITY
            ) {
              this.showUnreadInTitle = !1;
              return;
            }
            if (!t) {
              this.showUnreadInTitle = !0;
              return;
            }
            if (!this.msgs || this.msgs.length === 0) {
              this.showUnreadInTitle = !1;
              return;
            }
            for (
              var n = !1,
                r = this.msgs,
                a = o("WAWebFrontendChatGetters").getOptimisticUnreadCount(
                  this,
                ),
                i = Math.max(0, r.length - a);
              i < r.length;
              i++
            ) {
              var l = this.msgs.at(i);
              if (
                l &&
                o("WAWebNotificationHelpers").isMeUserMentionedOrQuoted(l)
              ) {
                var s = this.getCollection().get(
                  o("WAWebMsgGetters").getSender(l),
                );
                if (!s || !s.muteExpiration) {
                  n = !0;
                  break;
                }
              }
            }
            this.showUnreadInTitle = n;
          }),
          (i.removeFromCollection = function (t) {
            if (
              (t.star && o("WAWebStarredMsgCollection").removeStarredMsgs([t]),
              o("WAWebMsgGetters").getIsMedia(t) && this.mediaMsgs
                ? this.mediaMsgs.remove(t)
                : o("WAWebMsgLinks").getLinksFromMsg(t).length > 0 &&
                    this.linkMsgs
                  ? this.linkMsgs.remove(t)
                  : o("WAWebFrontendMsgGetters").getAsDoc(t) && this.docMsgs
                    ? this.docMsgs.remove(t)
                    : o("WAWebFrontendMsgGetters").getAsProduct(t) != null &&
                        this.productMsgs
                      ? this.productMsgs.remove(t)
                      : o("WAWebFrontendMsgGetters").getAsEventCreation(t) !=
                          null &&
                        this.eventMsgs &&
                        this.eventMsgs.remove(t),
              o("WAWebMsgGetters").getIsKept(t) &&
                this.keptMsgs &&
                this.keptMsgs.remove(t),
              o("WAWebChatGetters").getIsGroup(
                o("WAWebFrontendMsgGetters").getChat(t),
              ))
            ) {
              var e;
              (e = o("WAWebFrontendMsgGetters").getChat(t).groupMetadata) ==
                null ||
                e.unreadMentionMetadata.removeUnreadMentions(t.id.toString());
            }
          }),
          (i.getMediaMsgs = function () {
            return (
              this.mediaMsgs ||
                (this.mediaMsgs = new (r("WAWebChatMediaMsgsCollection"))()),
              this.mediaMsgs
            );
          }),
          (i.getLinkMsgs = function () {
            return (
              this.linkMsgs ||
                (this.linkMsgs = new (r("WAWebChatLinkMsgsCollection"))()),
              this.linkMsgs
            );
          }),
          (i.getDocMsgs = function () {
            return (
              this.docMsgs ||
                (this.docMsgs = new (r("WAWebChatDocMsgsCollection"))()),
              this.docMsgs
            );
          }),
          (i.getEventMsgs = function () {
            return (
              this.eventMsgs ||
                (this.eventMsgs = new (r("WAWebEventMsgsCollection"))(this)),
              this.eventMsgs
            );
          }),
          (i.getParticipantCount = function () {
            var e;
            return (
              ((e = this.groupMetadata) == null
                ? void 0
                : e.participants.length) || 1
            );
          }),
          (i.iAmAdmin = function () {
            return this.groupMetadata
              ? this.groupMetadata.participants.iAmAdmin()
              : !1;
          }),
          (i.getProductMsgs = function () {
            return (
              this.productMsgs ||
                (this.productMsgs = new (r(
                  "WAWebChatProductMsgsCollection",
                ))()),
              this.productMsgs
            );
          }),
          (i.getStarredMsgs = function () {
            var e = this,
              t = this.starredMsgs;
            return (
              t ||
                ((this.starredMsgs = t =
                  new (o("WAWebStarredMsgCollection").StarredMsgCollection)()),
                this.starredMsgs.add(
                  o(
                    "WAWebStarredMsgCollection",
                  ).AllStarredMsgsCollection.filter(function (t) {
                    return o("WAWebFrontendMsgGetters").getChat(t) === e;
                  }),
                )),
              t
            );
          }),
          (i.getKeptMsgs = function () {
            var e = this.keptMsgs;
            return (
              e ||
                ((this.keptMsgs = e = new (r("WAWebKeptMsgCollection"))()),
                this.keptMsgs.add(
                  this.msgs.filter(function (e) {
                    return o("WAWebMsgGetters").getIsKept(e);
                  }),
                )),
              e
            );
          }),
          (i.hasKeptMsgs = function () {
            return this.msgs.some(function (e) {
              return o("WAWebMsgGetters").getIsKept(e);
            });
          }),
          (i.canSendPolls = function () {
            return o("WAWebChatModelDerivedMethods").canSendPolls(this);
          }),
          (i.canInvokeBot = function () {
            var e, t;
            return !(
              !o("WAWebBotBaseGating").isBotEnabled() ||
              o("WAWebChatGetters").getIsNewsletter(this) ||
              o("WAWebContactGetters").getIsMe(this.contact) ||
              o("WAWebFrontendChatGetters").getIsCapiHostedGroup(this) ||
              this.id.isBot() ||
              o("WAWebChatEphemerality").isEphemeralSettingOn(this) ||
              ((e = this.contact.businessProfile) == null
                ? void 0
                : e.isBizBot3p) === !0 ||
              ((t = this.contact.businessProfile) == null
                ? void 0
                : t.isBizBot1p) === !0 ||
              o("WAWebTosGating").shouldBlockBotInvokeAsTosNotAvailable() ||
              (!o("WAWebMobilePlatforms").isSMB() && this.contact.isBusiness)
            );
          }),
          (i.getAbortController = function () {
            return this.$ChatImpl$p_3;
          }),
          (i.getDeleteSignal = function () {
            return this.getAbortController().signal;
          }),
          (i.getCollection = function () {
            return o("WAWebChatGetters").getIsNewsletter(this)
              ? r("WAWebNewsletterCollection")
              : o("WAWebChatCollection").ChatCollection;
          }),
          (i.getGroupMetadataCollection = function () {
            return r("WAWebGroupMetadataCollection");
          }),
          (i.getNewsletterMetadataCollection = function () {
            return r("WAWebNewsletterMetadataCollection");
          }),
          (i.$ChatImpl$p_22 = function () {
            return r("WAWebBroadcastMetadataCollection");
          }),
          (i.updateBotInvokeSystemMsgCreated = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield o("WAWebDBUpdateChatTable").updateChatTable(this.id, {
                hasCreatedBotInvokeSystemMsg: !0,
              }),
                (this.hasCreatedBotInvokeSystemMsg = !0));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.updateBizBotSysMsgCreated = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (yield o("WAWebDBUpdateChatTable").updateChatTable(this.id, {
                  bizBotSystemMsgType: e,
                }),
                  (this.bizBotSystemMsgType = e));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$ChatImpl$p_6 = function () {
            return o("WAWebLidMigrationUtils").shouldHaveAccountLid(this.id)
              ? this.accountLid == null
                ? (o("WALogger")
                    .ERROR(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "[presence] getPresenceKey: lid-migrated user no accountLid",
                        ])),
                    )
                    .sendLogs("presence-key-missing-account-lid"),
                  this.id)
                : this.accountLid
              : this.id;
          }),
          a
        );
      })(r("WAWebSuperChatMsgs"));
    ((R.Proxy = "chat"), (R.idClass = r("WAWebWid")));
    var L = o("WAWebBaseModel").defineModel(R);
    l.Chat = L;
  },
  226,
);
