__d(
  "WAWebWrapperMessageDropdownMenu.react",
  [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsSaga",
    "WAWebAuraGating",
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebBotTos",
    "WAWebBotUtils",
    "WAWebChatCommunityUtils",
    "WAWebChatEntryPoint",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebCopyStickerToClipboard",
    "WAWebCopyToClipboard",
    "WAWebCopyUtils",
    "WAWebDebugGatingUtils",
    "WAWebDisplayType",
    "WAWebDropdownItemSeparator.react",
    "WAWebEnvironment",
    "WAWebFavoriteStickerAction",
    "WAWebFileSaver",
    "WAWebForwardActionUserJourneyLogger",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupType",
    "WAWebIcShareWindowsIcon.react",
    "WAWebInMemoryLottieStickerCache",
    "WAWebKeepInChatMsgUtils",
    "WAWebLid1X1MigrationGating",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaTypes",
    "WAWebMegaphoneRefreshedIcon.react",
    "WAWebMessageContextMenuActionsWamEvent",
    "WAWebMessageDebugMenuItems.react",
    "WAWebMetaAiRingAssetResolver",
    "WAWebMiscGatingUtils",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgInfoUtils",
    "WAWebMsgReply",
    "WAWebMsgType",
    "WAWebNewsletterMembershipUtil",
    "WAWebNotesLogEvents",
    "WAWebNotesUtils",
    "WAWebNumbersIcon.react",
    "WAWebQbmMessageLevelActionEvent",
    "WAWebReactionsUtils",
    "WAWebReplyPrivatelyRefreshedIcon.react",
    "WAWebStickerPremiumStatus",
    "WAWebStickerUtils",
    "WAWebWamEnumMessageActionEntryPoint",
    "WAWebWamEnumMessageContextMenuActionType",
    "WAWebWamEnumMessageContextMenuOptionType",
    "WAWebWamEnumMessageLevelAction",
    "WDSIconIcAdd.react",
    "WDSIconIcBookmark.react",
    "WDSIconIcCheckBox.react",
    "WDSIconIcContentCopy.react",
    "WDSIconIcDelete.react",
    "WDSIconIcDownload.react",
    "WDSIconIcEdit.react",
    "WDSIconIcFastForward.react",
    "WDSIconIcFavorite.react",
    "WDSIconIcFavoriteFilled.react",
    "WDSIconIcGrade.react",
    "WDSIconIcInfo.react",
    "WDSIconIcLink.react",
    "WDSIconIcMessageReport.react",
    "WDSIconIcMood.react",
    "WDSIconIcPushPin.react",
    "WDSIconIcReply.react",
    "WDSIconIcThumbDown.react",
    "WDSIconIcThumbUp.react",
    "WDSIconWdsIcBookmarkSlash.react",
    "WDSIconWdsIcChat.react",
    "WDSIconWdsIcGradeSlash.react",
    "WDSIconWdsIcPushPinSlash.react",
    "WDSIconWdsIcSticker.react",
    "WDSMenuItem.react",
    "cr:23046",
    "cr:7565",
    "react",
    "useWAWebIsPinnedMsg",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e, t) {
      new (o(
        "WAWebMessageContextMenuActionsWamEvent",
      ).MessageContextMenuActionsWamEvent)({
        isAGroup: o("WAWebChatGetters").getIsGroup(
          o("WAWebFrontendMsgGetters").getChat(e),
        ),
        isMultiAction: !1,
        isOriginalSender: o("WAWebMsgGetters").getIsSentByMe(e),
        messageContextMenuAction: o("WAWebWamEnumMessageContextMenuActionType")
          .MESSAGE_CONTEXT_MENU_ACTION_TYPE.CLICK,
        messageContextMenuOption: t,
      }).commit();
    }
    function m(e) {
      new (o(
        "WAWebMessageContextMenuActionsWamEvent",
      ).MessageContextMenuActionsWamEvent)({
        isAGroup: o("WAWebChatGetters").getIsGroup(
          o("WAWebFrontendMsgGetters").getChat(e),
        ),
        isMultiAction: !1,
        isOriginalSender: o("WAWebMsgGetters").getIsSentByMe(e),
        messageContextMenuAction: o("WAWebWamEnumMessageContextMenuActionType")
          .MESSAGE_CONTEXT_MENU_ACTION_TYPE.OPEN,
      }).commit();
    }
    function p(e, t, n) {
      return (
        t != null &&
        !e.isViewOnce &&
        (t.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED ||
          (t.mediaStage === o("WAWebMediaTypes").MediaDataStage.INIT && n))
      );
    }
    function _(t) {
      var a,
        i,
        l,
        u,
        _,
        f,
        g = t.associatedMessages,
        h = t.displayType,
        y = t.isFileInCache,
        C = y === void 0 ? !1 : y,
        b = t.msg,
        v = t.onAddPaidPartnershipLabelClick,
        S = t.onAddToNoteClick,
        R = t.onAskMetaAiClick,
        L = t.onBotNegativeFeedbackClick,
        E = t.onBotPositiveFeedbackClick,
        k = t.onCopyFavoriteStickerClick,
        I = t.onCopyLottieStickerClick,
        T = t.onEditClick,
        D = t.onFavoriteStickerClick,
        x = t.onForwardClick,
        $ = t.onKeepClick,
        P = t.onMessageDeleteClick,
        N = t.onMessageDocumentCopyClick,
        M = t.onMessageDownloadClick,
        w = t.onMessageSaveAsClick,
        A = t.onMessageSelectClick,
        F = t.onMsgInfoClick,
        O = t.onNewsletterMessageLinkCopyClick,
        B = t.onOpenContactChatClick,
        W = t.onOpenStickerPackClick,
        q = t.onPinClick,
        U = t.onPrivateReplyClick,
        V = t.onReactionClick,
        H = t.onReplyClick,
        G = t.onReportClick,
        z = t.onRTAClick,
        j = t.onShareClick,
        K = t.onStarClick,
        Q = t.onSupportBotNegativeFeedbackClick,
        X = t.onSupportBotPositiveFeedbackClick,
        Y = t.onUndoKeepClick,
        J = t.onUnfavoriteStickerClick,
        Z = t.onUnpinClick,
        ee = t.onUnstarClick,
        te = t.rightClickedLinkHref;
      m(b);
      var ne = o("WAWebFrontendMsgGetters").getChat(b),
        re = r("useWAWebIsPinnedMsg")(b.id),
        oe = [];
      if (h === o("WAWebDisplayType").DISPLAY_TYPE.EDITING) return oe;
      if (
        h !== o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO &&
        o("WAWebMsgInfoUtils").canOpenInfoDrawer(b.unsafe())
      ) {
        var ae = s._(/*BTDS*/ "Message info");
        oe.push(
          c.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcInfo.react"),
              title: ae,
              onPress: function () {
                (F(),
                  d(
                    b,
                    o("WAWebWamEnumMessageContextMenuOptionType")
                      .MESSAGE_CONTEXT_MENU_OPTION_TYPE.MESSAGE_INFO,
                  ));
              },
              testid: void 0,
            },
            "info",
          ),
        );
      }
      var ie = s._(/*BTDS*/ "Reply");
      if (
        (o("WAWebMsgReply").canReplyMsg(b) &&
          oe.push(
            c.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcReply.react"),
                iconDirectional: !0,
                title: ie,
                onPress: function () {
                  (H(),
                    d(
                      b,
                      o("WAWebWamEnumMessageContextMenuOptionType")
                        .MESSAGE_CONTEXT_MENU_OPTION_TYPE.REPLY,
                    ));
                },
                testid: void 0,
              },
              "reply",
            ),
          ),
        o("WAWebMsgReply").canPrivateReply(b) ||
          o("WAWebMsgReply").canPrivateReplyInRestrictedGrp(b))
      ) {
        var le = s._(/*BTDS*/ "Reply privately");
        oe.push(
          c.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: o("WAWebReplyPrivatelyRefreshedIcon.react")
                .ReplyPrivatelyRefreshedIcon,
              title: le,
              onPress: function () {
                (U(),
                  d(
                    b,
                    o("WAWebWamEnumMessageContextMenuOptionType")
                      .MESSAGE_CONTEXT_MENU_OPTION_TYPE.REPLY_PRIVATELY,
                  ));
              },
              testid: void 0,
            },
            "private_reply",
          ),
        );
      }
      var se =
        !(
          ne.isSuspendedOrTerminated() &&
          o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()
        ) &&
        !o("WAWebMsgGetters").getIsBotFutureproofPlaceholder(b) &&
        !(
          (a = b.author) != null &&
          a.isLid() &&
          ((i = ne.groupMetadata) == null ? void 0 : i.groupType) ===
            o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
        ) &&
        !o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(
          ne,
          o("WAWebFrontendMsgGetters").getSenderObj(b),
        );
      if (
        o("WAWebMsgGetters").getIsGroupMsg(b) &&
        b.author &&
        !o("WAWebMsgGetters").getIsSentByMe(b) &&
        se
      ) {
        var ue = s._(/*BTDS*/ "Message {author}", [
          s._param("author", b.displayName()),
        ]);
        oe.push(
          c.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconWdsIcChat.react"),
              title: ue,
              onPress: function () {
                (B(o("WAWebChatEntryPoint").ChatEntryPoint.DirectMessage),
                  d(
                    b,
                    o("WAWebWamEnumMessageContextMenuOptionType")
                      .MESSAGE_CONTEXT_MENU_OPTION_TYPE.MESSAGE_CONTACT,
                  ));
              },
              testid: void 0,
              truncateText: !0,
            },
            "author",
          ),
        );
      }
      var ce = b.mediaData,
        de =
          (l = (u = window.getSelection()) == null ? void 0 : u.toString()) !=
          null
            ? l
            : "",
        me = s._(/*BTDS*/ "Copy"),
        pe = s._(/*BTDS*/ "Copy selected");
      if (
        (de.length > 0
          ? oe.push(
              c.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcContentCopy.react"),
                  title: pe,
                  onPress: function () {
                    (o("WAWebCopyToClipboard").copyTextToClipboard(de),
                      d(
                        b,
                        o("WAWebWamEnumMessageContextMenuOptionType")
                          .MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY,
                      ),
                      o(
                        "WAWebQbmMessageLevelActionEvent",
                      ).logQbmMessageLevelAction({
                        msg: b,
                        chat: o("WAWebFrontendMsgGetters").getChat(b),
                        messageLevelAction: o("WAWebWamEnumMessageLevelAction")
                          .MESSAGE_LEVEL_ACTION.COPY,
                        messageActionEntryPoint: o(
                          "WAWebWamEnumMessageActionEntryPoint",
                        ).MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
                      }));
                  },
                  testid: void 0,
                },
                "copy-selected-text",
              ),
            )
          : r("WAWebEnvironment").isWindows &&
              n("cr:7565") != null &&
              n("cr:7565").supportsMediaFileCopy() &&
              p(b, ce, C)
            ? oe.push(
                c.jsx(
                  r("WDSMenuItem.react"),
                  {
                    Icon: r("WDSIconIcContentCopy.react"),
                    title: me,
                    onPress: function () {
                      (N(),
                        d(
                          b,
                          o("WAWebWamEnumMessageContextMenuOptionType")
                            .MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY,
                        ),
                        o(
                          "WAWebQbmMessageLevelActionEvent",
                        ).logQbmMessageLevelAction({
                          msg: b,
                          chat: o("WAWebFrontendMsgGetters").getChat(b),
                          messageLevelAction: o(
                            "WAWebWamEnumMessageLevelAction",
                          ).MESSAGE_LEVEL_ACTION.COPY,
                          messageActionEntryPoint: o(
                            "WAWebWamEnumMessageActionEntryPoint",
                          ).MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
                        }));
                    },
                    testid: void 0,
                  },
                  "copy",
                ),
              )
            : de.length === 0 &&
              o("WAWebCopyUtils").canCopyMessage(b) &&
              oe.push(
                c.jsx(
                  r("WDSMenuItem.react"),
                  {
                    Icon: r("WDSIconIcContentCopy.react"),
                    title: me,
                    onPress: function () {
                      (o("WAWebCopyUtils").copyMessageToClipboard(b),
                        d(
                          b,
                          o("WAWebWamEnumMessageContextMenuOptionType")
                            .MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY,
                        ),
                        o(
                          "WAWebQbmMessageLevelActionEvent",
                        ).logQbmMessageLevelAction({
                          msg: b,
                          chat: o("WAWebFrontendMsgGetters").getChat(b),
                          messageLevelAction: o(
                            "WAWebWamEnumMessageLevelAction",
                          ).MESSAGE_LEVEL_ACTION.COPY,
                          messageActionEntryPoint: o(
                            "WAWebWamEnumMessageActionEntryPoint",
                          ).MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
                        }));
                    },
                    testid: void 0,
                  },
                  "copy",
                ),
              ),
        te != null &&
          o("WAWebABProps").getABPropConfigValue(
            "wa_web_copy_link_url_enabled",
          ))
      ) {
        var _e = s._(/*BTDS*/ "Copy link URL");
        oe.push(
          c.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcLink.react"),
              title: _e,
              onPress: function () {
                (o("WAWebCopyToClipboard").copyTextToClipboard(te),
                  d(
                    b,
                    o("WAWebWamEnumMessageContextMenuOptionType")
                      .MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY_LINK_URL,
                  ));
              },
              testid: void 0,
            },
            "copy-link-url",
          ),
        );
      }
      if (
        !o("WAWebReactionsUtils").isContextMenuReactiondEnabled() &&
        o("WAWebReactionsUtils").canReactToMessage(b) &&
        (h === o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION ||
          h === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER)
      ) {
        var fe = s._(/*BTDS*/ "React");
        oe.push(
          c.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcMood.react"),
              title: fe,
              onPress: function () {
                (V(),
                  d(
                    b,
                    o("WAWebWamEnumMessageContextMenuOptionType")
                      .MESSAGE_CONTEXT_MENU_OPTION_TYPE.REACT,
                  ));
              },
              testid: void 0,
            },
            "react-to-message",
          ),
        );
      }
      var ge = s._(/*BTDS*/ "Download");
      !r("WAWebEnvironment").isWindows &&
        o("WAWebMsgActionCapability").canDownloadMsg(b, !0) &&
        oe.push(
          c.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcDownload.react"),
              title: ge,
              onPress: function () {
                (M(),
                  d(
                    b,
                    o("WAWebWamEnumMessageContextMenuOptionType")
                      .MESSAGE_CONTEXT_MENU_OPTION_TYPE.DOWNLOAD,
                  ));
              },
              testid: void 0,
            },
            "download",
          ),
        );
      var he = s._(/*BTDS*/ "Forward");
      o("WAWebMsgActionCapability").canForwardMsg(b)
        ? (o(
            "WAWebForwardActionUserJourneyLogger",
          ).ForwardActionUserJourneyLogger.contextMenuShownWithForward(
            ne.id,
            b,
          ),
          oe.push(
            c.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcFastForward.react"),
                iconDirectional: !0,
                title: he,
                onPress: function () {
                  (x(),
                    d(
                      b,
                      o("WAWebWamEnumMessageContextMenuOptionType")
                        .MESSAGE_CONTEXT_MENU_OPTION_TYPE.FORWARD,
                    ),
                    o(
                      "WAWebQbmMessageLevelActionEvent",
                    ).logQbmMessageLevelAction({
                      msg: b,
                      chat: o("WAWebFrontendMsgGetters").getChat(b),
                      messageLevelAction: o("WAWebWamEnumMessageLevelAction")
                        .MESSAGE_LEVEL_ACTION.FORWARD,
                      messageActionEntryPoint: o(
                        "WAWebWamEnumMessageActionEntryPoint",
                      ).MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
                    }),
                    o(
                      "WAWebForwardActionUserJourneyLogger",
                    ).ForwardActionUserJourneyLogger.forwardTappedInContextMenu());
                },
                testid: void 0,
              },
              "forward",
            ),
          ))
        : o(
            "WAWebForwardActionUserJourneyLogger",
          ).ForwardActionUserJourneyLogger.contextMenuShownWithoutForward(
            ne.id,
            b,
          );
      var ye = s._(/*BTDS*/ "Unpin");
      if (re) {
        var Ce = function () {
          (Z(),
            o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
              msg: b,
              chat: o("WAWebFrontendMsgGetters").getChat(b),
              messageLevelAction: o("WAWebWamEnumMessageLevelAction")
                .MESSAGE_LEVEL_ACTION.UNPIN_MESSAGE,
              messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint")
                .MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
            }),
            d(
              b,
              o("WAWebWamEnumMessageContextMenuOptionType")
                .MESSAGE_CONTEXT_MENU_OPTION_TYPE.PIN_OR_UNPIN,
            ));
        };
        oe.push(
          c.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconWdsIcPushPinSlash.react"),
              title: ye,
              onPress: Ce,
              testid: void 0,
            },
            "unpin",
          ),
        );
      }
      var be = s._(/*BTDS*/ "Pin");
      if (!re && o("WAWebMsgActionCapability").canPinMsg(b)) {
        var ve = function () {
          (q(),
            d(
              b,
              o("WAWebWamEnumMessageContextMenuOptionType")
                .MESSAGE_CONTEXT_MENU_OPTION_TYPE.PIN_OR_UNPIN,
            ),
            o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
              msg: b,
              chat: o("WAWebFrontendMsgGetters").getChat(b),
              messageLevelAction: o("WAWebWamEnumMessageLevelAction")
                .MESSAGE_LEVEL_ACTION.PIN_MESSAGE,
              messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint")
                .MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
            }));
        };
        oe.push(
          c.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcPushPin.react"),
              title: be,
              onPress: ve,
              testid: void 0,
            },
            "pin",
          ),
        );
      }
      var Se = s._(/*BTDS*/ "Unkeep");
      o("WAWebMsgGetters").getIsKept(b) &&
        o("WAWebKeepInChatMsgUtils").canShowUnkeepOption(b) &&
        oe.push(
          c.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconWdsIcBookmarkSlash.react"),
              title: Se,
              onPress: function () {
                (Y(),
                  d(
                    b,
                    o("WAWebWamEnumMessageContextMenuOptionType")
                      .MESSAGE_CONTEXT_MENU_OPTION_TYPE.KEEP_OR_UNKEEP,
                  ));
              },
              testid: void 0,
            },
            "unkeep",
          ),
        );
      var Re = s._(/*BTDS*/ "Keep");
      if (
        (!o("WAWebMsgGetters").getIsKept(b) &&
          o("WAWebKeepInChatMsgUtils").canShowKeepOption(b) &&
          oe.push(
            c.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcBookmark.react"),
                title: Re,
                onPress: function () {
                  ($(),
                    d(
                      b,
                      o("WAWebWamEnumMessageContextMenuOptionType")
                        .MESSAGE_CONTEXT_MENU_OPTION_TYPE.KEEP_OR_UNKEEP,
                    ));
                },
                testid: void 0,
              },
              "keep",
            ),
          ),
        !o("WAWebBotUtils").isMetaAiBot(ne.id) &&
          o("WAWebMsgActionCapability").canForwardMsgToMetaAi([b]) &&
          o("WAWebBotGating").isAskMetaAiEnabled())
      ) {
        var Le = s._(/*BTDS*/ "Ask Meta AI"),
          Ee = function () {
            (R(),
              d(
                b,
                o("WAWebWamEnumMessageContextMenuOptionType")
                  .MESSAGE_CONTEXT_MENU_OPTION_TYPE.ASK_META_AI,
              ));
          };
        oe.push(
          c.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: o("WAWebMetaAiRingAssetResolver").getMetaAiRingIcon(),
              title: Le,
              onPress: Ee,
              testid: void 0,
            },
            "ask-meta-ai",
          ),
        );
      }
      var ke = s._(/*BTDS*/ "Star"),
        Ie = s._(/*BTDS*/ "Unstar");
      o("WAWebMsgActionCapability").canStarMsg(b) &&
        (b.star
          ? oe.push(
              c.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconWdsIcGradeSlash.react"),
                  title: Ie,
                  onPress: function () {
                    (ee(),
                      d(
                        b,
                        o("WAWebWamEnumMessageContextMenuOptionType")
                          .MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR,
                      ),
                      o(
                        "WAWebQbmMessageLevelActionEvent",
                      ).logQbmMessageLevelAction({
                        msg: b,
                        chat: o("WAWebFrontendMsgGetters").getChat(b),
                        messageLevelAction: o("WAWebWamEnumMessageLevelAction")
                          .MESSAGE_LEVEL_ACTION.UNSTAR,
                        messageActionEntryPoint: o(
                          "WAWebWamEnumMessageActionEntryPoint",
                        ).MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
                      }));
                  },
                  testid: void 0,
                },
                "star",
              ),
            )
          : o("WAWebMsgGetters").getIsKept(b) ||
            oe.push(
              c.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcGrade.react"),
                  title: ke,
                  onPress: function () {
                    (K(),
                      d(
                        b,
                        o("WAWebWamEnumMessageContextMenuOptionType")
                          .MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR,
                      ),
                      o(
                        "WAWebQbmMessageLevelActionEvent",
                      ).logQbmMessageLevelAction({
                        msg: b,
                        chat: o("WAWebFrontendMsgGetters").getChat(b),
                        messageLevelAction: o("WAWebWamEnumMessageLevelAction")
                          .MESSAGE_LEVEL_ACTION.STAR,
                        messageActionEntryPoint: o(
                          "WAWebWamEnumMessageActionEntryPoint",
                        ).MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
                      }));
                  },
                  testid: void 0,
                },
                "star",
              ),
            ));
      var Te = s._(/*BTDS*/ "Good response"),
        De = s._(/*BTDS*/ "Bad response");
      o("WAWebMsgGetters").getIsCAPISupport(b) &&
        (o("WAWebMsgGetters").getIsBizBot1pResponse(b) ||
          o("WAWebMsgGetters").getIsSupportAIMessage(b)) &&
        o("WAWebABPropsSaga").getSagaFeedbackEnabled() &&
        (oe.push(
          c.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcThumbUp.react"),
              title: Te,
              onPress: function () {
                X();
              },
              testid: void 0,
            },
            "saga-positive-feedback",
          ),
        ),
        oe.push(
          c.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcThumbDown.react"),
              title: De,
              onPress: Q,
              testid: void 0,
            },
            "saga-negative-feedback",
          ),
        ));
      var xe = s._(/*BTDS*/ "Good response"),
        $e = s._(/*BTDS*/ "Bad response");
      if (
        ((o("WAWebBotBaseGating").isBotEnabled() &&
          o("WAWebBotTos").hasSeenBotTos() &&
          !o("WAWebFrontendMsgGetters").getAsRevoked(b) &&
          o("WAWebMsgGetters").getIsMetaBotResponse(b)) ||
          (o("WAWebBotGating").isBizBot1pFeedbackEnabled() &&
            o("WAWebMsgGetters").getIsBizBot1pResponse(b))) &&
        !o("WAWebMsgGetters").getIsCAPISupport(b) &&
        !o("WAWebChatGetters").getIsHatchBot(ne)
      ) {
        var Pe = function () {
            (E(),
              d(
                b,
                o("WAWebWamEnumMessageContextMenuOptionType")
                  .MESSAGE_CONTEXT_MENU_OPTION_TYPE.BOT_FEEDBACK,
              ));
          },
          Ne = function () {
            (L(),
              d(
                b,
                o("WAWebWamEnumMessageContextMenuOptionType")
                  .MESSAGE_CONTEXT_MENU_OPTION_TYPE.BOT_FEEDBACK,
              ));
          };
        (oe.push(
          c.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcThumbUp.react"),
              title: xe,
              onPress: Pe,
              testid: void 0,
            },
            "bot-positive-feedback",
          ),
        ),
          oe.push(
            c.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcThumbDown.react"),
                title: $e,
                onPress: Ne,
                testid: void 0,
              },
              "bot-negative-feedback",
            ),
          ));
      }
      var Me = s._(/*BTDS*/ "Send for admin review");
      if (
        h !== o("WAWebDisplayType").DISPLAY_TYPE.REPORTED_MSG &&
        o("WAWebMsgActionCapability").canReportToAdmin(b)
      ) {
        var we = function () {
          (z(),
            d(
              b,
              o("WAWebWamEnumMessageContextMenuOptionType")
                .MESSAGE_CONTEXT_MENU_OPTION_TYPE.REPORT_TO_ADMIN,
            ));
        };
        oe.push(
          c.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcMessageReport.react"),
              title: Me,
              onPress: we,
              testid: void 0,
            },
            "rta",
          ),
        );
      }
      var Ae = s._(/*BTDS*/ "Edit"),
        Fe = o("WAWebFrontendChatGetters").getIsCapiHostedGroup(ne);
      o("WAWebMsgActionCapability").displayTypeSupportsEditing(h) &&
        o("WAWebMsgActionCapability").canEnterEditingFlow(b) &&
        !Fe &&
        oe.push(
          c.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcEdit.react"),
              title: Ae,
              onPress: function () {
                (T(),
                  d(
                    b,
                    o("WAWebWamEnumMessageContextMenuOptionType")
                      .MESSAGE_CONTEXT_MENU_OPTION_TYPE.EDIT,
                  ));
              },
              testid: void 0,
            },
            "edit-message",
          ),
        );
      var Oe = s._(/*BTDS*/ "Copy link");
      if (o("WAWebMsgActionCapability").canCopyNewsletterMessageLink(b)) {
        var Be = function () {
          (O(),
            d(
              b,
              o("WAWebWamEnumMessageContextMenuOptionType")
                .MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY_NEWSLETTER_LINK,
            ));
        };
        oe.push(
          c.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcLink.react"),
              title: Oe,
              onPress: Be,
              testid: void 0,
            },
            "copy-newsletter-message-link",
          ),
        );
      }
      var We = s._(/*BTDS*/ "Add paid partnership");
      if (o("WAWebMsgActionCapability").canAddPaidPartnershipLabelToMsg(b)) {
        var qe = function () {
          (v(),
            d(
              b,
              o("WAWebWamEnumMessageContextMenuOptionType")
                .MESSAGE_CONTEXT_MENU_OPTION_TYPE.PAID_PARTNERSHIP,
            ));
        };
        oe.push(
          c.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: o("WAWebMegaphoneRefreshedIcon.react")
                .MegaphoneRefreshedIcon,
              iconDirectional: !0,
              title: We,
              onPress: qe,
              testid: void 0,
            },
            "paid-partnership",
          ),
        );
      }
      var Ue = s._(/*BTDS*/ "Remove from Favorites"),
        Ve = s._(/*BTDS*/ "Add to Favorites");
      if (
        b.type === o("WAWebMsgType").MSG_TYPE.STICKER &&
        o("WAWebMiscGatingUtils").isFavoriteStickersEnabled()
      ) {
        var He;
        o("WAWebFavoriteStickerAction").isStickerFilehashFavorited(b.filehash)
          ? oe.push(
              c.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcFavoriteFilled.react"),
                  title: Ue,
                  onPress: function () {
                    (J(),
                      d(
                        b,
                        o("WAWebWamEnumMessageContextMenuOptionType")
                          .MESSAGE_CONTEXT_MENU_OPTION_TYPE
                          .FAVORITE_OR_UNFAVORITE_STICKER,
                      ));
                  },
                  testid: void 0,
                },
                "remove-favorite-sticker",
              ),
            )
          : r("WAWebAuraGating").canUsePremiumSticker(b.stickerPremiumStatus) &&
            r("WAWebAuraGating").canUsePremiumSticker(
              (He = b.mediaData) == null ? void 0 : He.stickerPremiumStatus,
            ) &&
            oe.push(
              c.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcFavorite.react"),
                  title: Ve,
                  onPress: function () {
                    (D(),
                      d(
                        b,
                        o("WAWebWamEnumMessageContextMenuOptionType")
                          .MESSAGE_CONTEXT_MENU_OPTION_TYPE
                          .FAVORITE_OR_UNFAVORITE_STICKER,
                      ));
                  },
                  testid: void 0,
                },
                "favorite-sticker",
              ),
            );
      }
      var Ge = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
          b.filehash,
        ),
        ze = s._(/*BTDS*/ "Copy sticker image");
      if (
        b.type === o("WAWebMsgType").MSG_TYPE.STICKER &&
        o("WAWebCopyToClipboard").supportsCopyImageToClipboard() &&
        o("WAWebStickerUtils").getStickerFileType(b.mediaData.mimetype) ===
          o("WAWebStickerUtils").StickerFileType.LOTTIE &&
        o("WAWebMsgActionCapability").canWamoSubMsgBeSharedByUser(b, ne)
      ) {
        var je = o(
          "WAWebInMemoryLottieStickerCache",
        ).InMemoryLottieStickerCache.get(b.filehash);
        if (je != null) {
          var Ke = function () {
            (o("WAWebCopyStickerToClipboard").copyLottieStickerToClipboard(je),
              d(
                b,
                o("WAWebWamEnumMessageContextMenuOptionType")
                  .MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY_STICKER,
              ));
          };
          oe.push(
            c.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcContentCopy.react"),
                title: ze,
                onPress: Ke,
                testid: void 0,
              },
              "copy-favorite-sticker",
            ),
          );
        }
      } else
        b.type === o("WAWebMsgType").MSG_TYPE.STICKER &&
          Ge != null &&
          o("WAWebCopyToClipboard").supportsCopyImageToClipboard() &&
          o("WAWebMsgActionCapability").canWamoSubMsgBeSharedByUser(b, ne) &&
          oe.push(
            c.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcContentCopy.react"),
                title: ze,
                onPress: function () {
                  (k(Ge),
                    d(
                      b,
                      o("WAWebWamEnumMessageContextMenuOptionType")
                        .MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY_STICKER,
                    ));
                },
                testid: void 0,
              },
              "copy-favorite-sticker",
            ),
          );
      var Qe = s._(/*BTDS*/ "View pack");
      if (b.type === o("WAWebMsgType").MSG_TYPE.STICKER) {
        var Xe,
          Ye = b.mediaData,
          Je = Ye.isFirstParty,
          Ze = Ye.stickerPackId,
          et = b.isAvatar,
          tt = o("WAWebMsgGetters").getIsNewsletterMsg(b)
            ? o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
                ne.newsletterMetadata,
              )
            : !0,
          nt =
            b.stickerPremiumStatus ===
              o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM &&
            ((Xe = b.mediaData) == null ? void 0 : Xe.stickerPremiumStatus) ===
              o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM;
        (!nt || r("WAWebAuraGating").isStickersEnabled()) &&
          Ze != null &&
          et !== !0 &&
          Je === !0 &&
          tt &&
          oe.push(
            c.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconWdsIcSticker.react"),
                title: Qe,
                onPress: function () {
                  (W(Ze),
                    d(
                      b,
                      o("WAWebWamEnumMessageContextMenuOptionType")
                        .MESSAGE_CONTEXT_MENU_OPTION_TYPE.VIEW_STICKER_PACK,
                    ));
                },
                testid: void 0,
              },
              "open-sticker-pack",
            ),
          );
      }
      var rt = s._(/*BTDS*/ "Download all"),
        ot = s._(/*BTDS*/ "Save all"),
        at = s._(/*BTDS*/ "Star all");
      if (o("WAWebFrontendMsgGetters").getAsAlbum(b) && g != null && g.length) {
        var it,
          lt = g.reduce(
            function (e, t) {
              return (
                (e.canDownloadAll =
                  e.canDownloadAll &&
                  o("WAWebMsgActionCapability").canDownloadMsg(t.unsafe())),
                (e.canStarAll =
                  e.canStarAll &&
                  o("WAWebMsgActionCapability").canStarMsg(t.unsafe())),
                e
              );
            },
            { canDownloadAll: !0, canStarAll: !0 },
          ),
          st = lt.canDownloadAll,
          ut = lt.canStarAll,
          ct =
            ((it =
              n("cr:7565") == null
                ? void 0
                : n("cr:7565").supportsBulkMediaSaving()) != null
              ? it
              : !1) && r("WAWebEnvironment").isWindows;
        (st &&
          !ct &&
          oe.push(
            c.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcDownload.react"),
                title: rt,
                onPress: function () {
                  (o("WAWebFileSaver").FileSaver.initDownload(
                    g.map(function (e) {
                      return e.unsafe();
                    }),
                  ),
                    d(
                      b,
                      o("WAWebWamEnumMessageContextMenuOptionType")
                        .MESSAGE_CONTEXT_MENU_OPTION_TYPE.DOWNLOAD_ALL,
                    ));
                },
                testid: void 0,
              },
              "download-all",
            ),
          ),
          st &&
            ct &&
            oe.push(
              c.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcDownload.react"),
                  title: ot,
                  onPress: function () {
                    (n("cr:7565") == null ||
                      n("cr:7565")
                        .selectFolderAndSaveFiles(
                          g.map(function (e) {
                            return e.unsafe();
                          }),
                        )
                        .catch(function (t) {
                          o("WALogger").ERROR(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "Failed to save files: ",
                                "",
                              ])),
                            t,
                          );
                        }),
                      d(
                        b,
                        o("WAWebWamEnumMessageContextMenuOptionType")
                          .MESSAGE_CONTEXT_MENU_OPTION_TYPE.DOWNLOAD_ALL,
                      ));
                  },
                  testid: void 0,
                },
                "download-all",
              ),
            ),
          ut &&
            oe.push(
              c.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcGrade.react"),
                  title: at,
                  onPress: function () {
                    (o("WAWebCmd").Cmd.sendStarMsgs(ne, g),
                      d(
                        b,
                        o("WAWebWamEnumMessageContextMenuOptionType")
                          .MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR,
                      ));
                  },
                  testid: void 0,
                },
                "star-all",
              ),
            ));
      }
      var dt = s._(/*BTDS*/ "Verify security code");
      if (
        (_ = b.author) != null &&
        _.isLid() &&
        ((f = ne.groupMetadata) == null ? void 0 : f.groupType) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
      ) {
        var mt = { wid: b.author };
        o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() &&
          (mt.lid = ne.accountLid);
        var pt = function () {
          (o("WAWebCmd").Cmd.verificationDrawer(mt),
            d(
              b,
              o("WAWebWamEnumMessageContextMenuOptionType")
                .MESSAGE_CONTEXT_MENU_OPTION_TYPE.VERIFY_SECURITY_CODE,
            ));
        };
        oe.push(
          c.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: o("WAWebNumbersIcon.react").NumbersIcon,
              title: dt,
              onPress: pt,
              testid: void 0,
            },
            "verify-security-code",
          ),
        );
      }
      var _t = s._(/*BTDS*/ "Add text to note");
      if (o("WAWebNotesUtils").shouldEnableNotesForMsg(b)) {
        o("WAWebNotesLogEvents").logAddMsgToNoteMenuItemShown(ne.contact);
        var ft = function () {
          (S(),
            d(
              b,
              o("WAWebWamEnumMessageContextMenuOptionType")
                .MESSAGE_CONTEXT_MENU_OPTION_TYPE.ADD_TO_NOTE,
            ));
        };
        oe.push(
          c.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcAdd.react"),
              title: _t,
              onPress: ft,
              testid: void 0,
            },
            "add-to-note",
          ),
        );
      }
      var gt = s._(/*BTDS*/ "Select");
      if (r("WAWebEnvironment").isWindows) {
        (oe.push(
          c.jsx(r("WAWebDropdownItemSeparator.react"), {}, "item-separator"),
        ),
          oe.push(
            c.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcCheckBox.react"),
                title: gt,
                onPress: function () {
                  (A(),
                    d(
                      b,
                      o("WAWebWamEnumMessageContextMenuOptionType")
                        .MESSAGE_CONTEXT_MENU_OPTION_TYPE.SELECT,
                    ),
                    o(
                      "WAWebForwardActionUserJourneyLogger",
                    ).ForwardActionUserJourneyLogger.selectTappedInContextMenu());
                },
                testid: void 0,
              },
              "selectMessage",
            ),
          ));
        var ht = s._(/*BTDS*/ "Save as"),
          yt = s._(/*BTDS*/ "Share"),
          Ct = s._(/*BTDS*/ "Download");
        if (ce != null)
          if (p(b, ce, C)) {
            var bt;
            oe.push(
              c.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcDownload.react"),
                  title: ht,
                  onPress: function () {
                    (w(),
                      d(
                        b,
                        o("WAWebWamEnumMessageContextMenuOptionType")
                          .MESSAGE_CONTEXT_MENU_OPTION_TYPE.SAVE_AS,
                      ));
                  },
                  testid: void 0,
                },
                "save-as",
              ),
            );
            var vt =
              (bt =
                n("cr:23046") == null ||
                n("cr:23046").isWindowsShareSheetEnabled == null
                  ? void 0
                  : n("cr:23046").isWindowsShareSheetEnabled()) != null
                ? bt
                : !1;
            vt &&
              oe.push(
                c.jsx(
                  r("WDSMenuItem.react"),
                  {
                    Icon: o("WAWebIcShareWindowsIcon.react").IcShareWindowsIcon,
                    title: yt,
                    onPress: function () {
                      (j(),
                        d(
                          b,
                          o("WAWebWamEnumMessageContextMenuOptionType")
                            .MESSAGE_CONTEXT_MENU_OPTION_TYPE.SHARE,
                        ),
                        o(
                          "WAWebQbmMessageLevelActionEvent",
                        ).logQbmMessageLevelAction({
                          msg: b,
                          chat: o("WAWebFrontendMsgGetters").getChat(b),
                          messageLevelAction: o(
                            "WAWebWamEnumMessageLevelAction",
                          ).MESSAGE_LEVEL_ACTION.SHARE,
                          messageActionEntryPoint: o(
                            "WAWebWamEnumMessageActionEntryPoint",
                          ).MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
                        }));
                    },
                    testid: void 0,
                  },
                  "share",
                ),
              );
          } else
            (ce.mediaStage === o("WAWebMediaTypes").MediaDataStage.INIT ||
              ce.mediaStage === o("WAWebMediaTypes").MediaDataStage.NEED_POKE ||
              ce.mediaStage ===
                o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED) &&
              oe.push(
                c.jsx(
                  r("WDSMenuItem.react"),
                  {
                    Icon: r("WDSIconIcDownload.react"),
                    title: Ct,
                    onPress: function () {
                      (M(),
                        d(
                          b,
                          o("WAWebWamEnumMessageContextMenuOptionType")
                            .MESSAGE_CONTEXT_MENU_OPTION_TYPE.DOWNLOAD,
                        ));
                    },
                    testid: void 0,
                  },
                  "pre-download",
                ),
              );
      }
      b.ctwaContext == null &&
        oe.push(
          c.jsx(r("WAWebDropdownItemSeparator.react"), {}, "item-separator-3"),
        );
      var St = s._(/*BTDS*/ "Report");
      o("WAWebMsgActionCapability").canReportMsg(b) &&
        oe.push(
          c.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcThumbDown.react"),
              title: St,
              onPress: function () {
                (G(),
                  d(
                    b,
                    o("WAWebWamEnumMessageContextMenuOptionType")
                      .MESSAGE_CONTEXT_MENU_OPTION_TYPE.REPORT,
                  ),
                  o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction(
                    {
                      msg: b,
                      chat: o("WAWebFrontendMsgGetters").getChat(b),
                      messageLevelAction: o("WAWebWamEnumMessageLevelAction")
                        .MESSAGE_LEVEL_ACTION.REPORT,
                      messageActionEntryPoint: o(
                        "WAWebWamEnumMessageActionEntryPoint",
                      ).MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
                    },
                  ));
              },
              testid: void 0,
              destructive: !0,
            },
            "report-message",
          ),
        );
      var Rt = s._(/*BTDS*/ "Delete");
      return (
        o("WAWebMsgActionCapability").canDeleteMsg(b) &&
          oe.push(
            c.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcDelete.react"),
                title: Rt,
                onPress: function () {
                  (P(),
                    d(
                      b,
                      o("WAWebWamEnumMessageContextMenuOptionType")
                        .MESSAGE_CONTEXT_MENU_OPTION_TYPE.DELETE,
                    ),
                    o(
                      "WAWebQbmMessageLevelActionEvent",
                    ).logQbmMessageLevelAction({
                      msg: b,
                      chat: o("WAWebFrontendMsgGetters").getChat(b),
                      messageLevelAction: o("WAWebWamEnumMessageLevelAction")
                        .MESSAGE_LEVEL_ACTION.DELETE,
                      messageActionEntryPoint: o(
                        "WAWebWamEnumMessageActionEntryPoint",
                      ).MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
                    }));
                },
                testid: void 0,
                destructive: !0,
              },
              "delete",
            ),
          ),
        o("WAWebDebugGatingUtils").msgDebugMenuItemsEnabled() &&
          (oe.push(c.jsx(r("WDSMenuItem.react"), { type: "separator" })),
          oe.push.apply(
            oe,
            o("WAWebMessageDebugMenuItems.react").getWAWebMessageDebugMenuItems(
              b,
            ),
          )),
        oe
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
