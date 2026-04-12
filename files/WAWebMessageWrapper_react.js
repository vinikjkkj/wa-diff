__d(
  "WAWebMessageWrapper.react",
  [
    "cx",
    "fbt",
    "CometVirtualization.react",
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsSaga",
    "WAWebAccessibility.react",
    "WAWebAddMsgToNoteAction",
    "WAWebAddOnBubbleType",
    "WAWebAddOnBubblesContainer.react",
    "WAWebBizAiAgentGating",
    "WAWebBizAiTeachYourAiDrawer.react",
    "WAWebBizCoexGatingUtils",
    "WAWebBizTemplateButtons.react",
    "WAWebBotFeedbackModal.react",
    "WAWebBotGating",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotTypes",
    "WAWebBroadcastMessageDropdownMenu.react",
    "WAWebBubbleAnimationWrapper.react",
    "WAWebChatGetters",
    "WAWebClassnames",
    "WAWebCmd",
    "WAWebCodeFormatMutator",
    "WAWebCopyStickerToClipboard",
    "WAWebCopyToClipboard",
    "WAWebDebugGatingUtils",
    "WAWebDeleteRevokeMsgFlow.react",
    "WAWebDisplayType",
    "WAWebDomScroll",
    "WAWebDropdown.react",
    "WAWebDropdownItem.react",
    "WAWebErrorBoundary.react",
    "WAWebExpandableTextContext",
    "WAWebFavoriteStickerAction",
    "WAWebFileSaver",
    "WAWebFocusTracer",
    "WAWebForwardActionUserJourneyLogger",
    "WAWebForwardUtils",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupMetadataContext",
    "WAWebInteractiveMessageCarousel.react",
    "WAWebKeepInChatActions",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardListHotKeys.react",
    "WAWebKeyboardRotateFocusArrows.react",
    "WAWebMarketingMessagesUserFeedbackGatingUtils",
    "WAWebMediaDocumentUtils",
    "WAWebMentionMessageContext",
    "WAWebMessageButtons.react",
    "WAWebMessageCheckbox.react",
    "WAWebMessageComponentWrapper.react",
    "WAWebMessageDebugMenuItems.react",
    "WAWebMessageEditFlow.react",
    "WAWebMessageHandlers",
    "WAWebMessageMenu.react",
    "WAWebMessageMeta.react",
    "WAWebMessagePluginMsgDisplayClass",
    "WAWebMessagePosition",
    "WAWebMessageUiUtils",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebMsgFailIcon.react",
    "WAWebMsgGetters",
    "WAWebMsgReply",
    "WAWebMsgType",
    "WAWebMultiSelectBar.react",
    "WAWebNewsletterActionButtonWrapper.react",
    "WAWebNewsletterMsgLinkUtils",
    "WAWebPaidPartnershipLabelModal.react",
    "WAWebPinInChatCollection",
    "WAWebPinMessageModal.react",
    "WAWebPinnedMessagesUserJourneyLogger",
    "WAWebPrepareMessageSendingAction",
    "WAWebProtobufsE2E.pb",
    "WAWebPttPrefs",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsPanel.react",
    "WAWebReactionsUtils",
    "WAWebReplyToMsgChatAction",
    "WAWebReportMsgPopup.react",
    "WAWebReportNewsletterPostPopup.react",
    "WAWebReportToAdminEventsLogger",
    "WAWebReportToAdminPopup.react",
    "WAWebRevokeMetricUtils",
    "WAWebSendBotFeedbackAction",
    "WAWebSendPinMessageAction",
    "WAWebSendReactionMsgAction",
    "WAWebSendReactionsTray.react",
    "WAWebSendReactionsTrayContainer.react",
    "WAWebSendSupportBotFeedbackActions",
    "WAWebSpamConstants",
    "WAWebStateUtils",
    "WAWebSupportAiSessionWamEvent",
    "WAWebSupportBotNegativeFeedbackModal",
    "WAWebSupportCarousel",
    "WAWebThemeContext",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUim",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUserPrefsMeUser",
    "WAWebVelocityTransitionGroup",
    "WAWebViewMode.flow",
    "WAWebViewOnceState",
    "WAWebViewRepliesLabel.react",
    "WAWebWamEnumKicEntryPointType",
    "WAWebWamEnumQuotedMessageUserJourneyEntryPoint",
    "WAWebWamEnumReactionUserJourneyEntryPoint",
    "WAWebWamEnumReportToAdminInteraction",
    "WAWebWamEnumSupportAiEventType",
    "WAWebWid",
    "WAWebWrapperConstants",
    "WAWebWrapperDisplayTypeContext",
    "WAWebWrapperGetTailIcon",
    "WAWebWrapperGroupProfilePicture.react",
    "WAWebWrapperHandlers",
    "WAWebWrapperListeners.react",
    "WAWebWrapperMessageActionButtonsRow",
    "WAWebWrapperMessageDropdownMenu.react",
    "WAWebWrapperMessageDropdownMenuReactionsTray.react",
    "WAWebWrapperOrderEphemeralExemption",
    "WAWebWrapperQuickActionButton.react",
    "WAWebWrapperReactionsQuickActionButton.react",
    "WAWebWrapperShouldDisplayAuthor",
    "WAWebWrapperShouldHaveTail",
    "WDSFocusStateStyles",
    "WDSMenu.react",
    "asyncToGeneratorRuntime",
    "cr:13786",
    "cr:23046",
    "cr:5997",
    "cr:7565",
    "getErrorSafe",
    "gkx",
    "justknobx",
    "react",
    "stylex",
    "useWAWebAssociatedMessages",
    "useWAWebBizVPVData",
    "useWAWebChatValues",
    "useWAWebDebouncedCallback",
    "useWAWebEventTargetValue",
    "useWAWebForceUpdate",
    "useWAWebIsKeyboardUser",
    "useWAWebListener",
    "useWAWebMessageAriaDescription",
    "useWAWebMessageAriaLabel",
    "useWAWebMsgValues",
    "useWAWebStableCallback",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = ["ref"],
      y = ["ref"],
      C,
      b,
      v = b || (b = o("react")),
      S = b,
      R = S.useEffect,
      L = S.useImperativeHandle,
      E = S.useMemo,
      k = S.useRef,
      I = S.useState,
      T = "x4dpwp4-B",
      D = {
        messageFocused: { outlineOffset: "x1wfwxd8", $$css: !0 },
        messageRow: { paddingBottom: "xscbp6u", $$css: !0 },
        messageContinuation: { paddingBottom: "xa0aww2", $$css: !0 },
        groupHistoryMessageRow: {
          position: "x1n2onr6",
          "::before_content": "x1cpjm7i",
          "::before_position": "x1hmns74",
          "::before_top": "x1y3wzot",
          "::before_bottom": "xhq5o37",
          "::before_insetInlineStart": "xfbisj7",
          "::before_left": null,
          "::before_right": null,
          "::before_transform": "xnyzbwf",
          "::before_width": "xkeh78v",
          "::before_zIndex": "xy5mcqj",
          $$css: !0,
        },
        groupHistoryMessageRowLight: {
          "::before_backgroundColor": "xd3jkiw",
          $$css: !0,
        },
        groupHistoryMessageRowDark: {
          "::before_backgroundColor": "x5cow8b",
          $$css: !0,
        },
      },
      x = { atLeastOnceKeyboardUser: !0 };
    function $(t) {
      "use no forget";
      var a,
        i,
        l,
        s,
        y,
        b,
        S,
        T,
        $,
        M,
        O,
        B,
        W = t.ref,
        q = babelHelpers.objectWithoutPropertiesLoose(t, h),
        U = q.msg,
        V = q.position,
        H = q.displayType,
        G = H === void 0 ? o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION : H,
        z = q.selectedMessages,
        j = q.isFocusable,
        K = q.selectable,
        Q = q.isMsgVisible,
        X = q.onMessageSelect,
        Y = q.getSequentialMsg,
        J = q.onProductClick,
        Z = q.onMessageClick,
        ee = q.current,
        te = q.showProfilePicture,
        ne = te === void 0 ? !0 : te,
        re = q.onMsgFocus,
        oe = q.onMsgBlur,
        ae = q.isFollowUpReply,
        ie = o("WAWebMessageMeta.react").useBizBot1pLabel(U.safe()) != null,
        le = r("useWAWebIsKeyboardUser")(),
        se = le.isKeyboardUser,
        ue = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        ce = o("useWAWebListener").useAddListenerOnce(),
        de = ce[0],
        me = k(!1),
        pe = o("useWAWebMsgValues").useMsgValues(q.msg.id, [
          o("WAWebFrontendMsgGetters").getAsMms,
          o("WAWebFrontendMsgGetters").getAsPollCreation,
          o("WAWebFrontendMsgGetters").getAsPttLike,
          o("WAWebFrontendMsgGetters").getAsRevoked,
          o("WAWebMsgGetters").getAuthor,
          o("WAWebMsgGetters").getBody,
          o("WAWebFrontendMsgGetters").getDir,
          o("WAWebMsgGetters").getEphemeralDuration,
          o("WAWebMsgGetters").getEphemeralOutOfSync,
          o("WAWebMsgGetters").getFilehash,
          o("WAWebMsgGetters").getId,
          o("WAWebMsgGetters").getIsAvatar,
          o("WAWebMsgGetters").getIsBizNotification,
          o("WAWebMsgGetters").getIsEphemeral,
          o("WAWebMsgGetters").getIsFailed,
          o("WAWebMsgGetters").getHostedBizEncStateMismatch,
        ]),
        _e = pe[0],
        fe = pe[1],
        ge = pe[2],
        he = pe[3],
        ye = pe[4],
        Ce = pe[5],
        be = pe[6],
        ve = pe[7],
        Se = pe[8],
        Re = pe[9],
        Le = pe[10],
        Ee = pe[11],
        ke = pe[12],
        Ie = pe[13],
        Te = pe[14],
        De = pe[15],
        xe = o("useWAWebMsgValues").useMsgValues(q.msg.id, [
          o("WAWebMsgGetters").getIsFrequentlyForwarded,
          o("WAWebMsgGetters").getIsFutureproof,
          o("WAWebMsgGetters").getIsGroupMsg,
          o("WAWebMsgGetters").getIsLive,
          o("WAWebMsgGetters").getIsMedia,
          o("WAWebMsgGetters").getIsMdHistoryMsg,
          o("WAWebMsgGetters").getIsNotification,
          o("WAWebFrontendMsgGetters").getIsRTL,
          o("WAWebMsgGetters").getIsAiHub,
          o("WAWebMsgGetters").getIsSentByMe,
          o("WAWebMsgGetters").getIsViewOnce,
          o("WAWebMsgGetters").getLinkPreview,
          o("WAWebMsgGetters").getList,
          o("WAWebFrontendMsgGetters").getMediaData,
          o("WAWebMsgGetters").getMatchedText,
          o("WAWebMsgGetters").getQuotedMsg,
        ]),
        $e = xe[0],
        Pe = xe[1],
        Ne = xe[2],
        Me = xe[3],
        we = xe[4],
        Ae = xe[5],
        Fe = xe[6],
        Oe = xe[7],
        Be = xe[8],
        We = xe[9],
        qe = xe[10],
        Ue = xe[11],
        Ve = xe[12],
        He = xe[13],
        Ge = xe[14],
        ze = xe[15],
        je = o("useWAWebMsgValues").useMsgValues(q.msg.id, [
          o("WAWebMsgGetters").getRichPreviewType,
          o("WAWebMsgGetters").getSender,
          o("WAWebMsgGetters").getStar,
          o("WAWebMsgGetters").getSubtype,
          o("WAWebMsgGetters").getType,
          o("WAWebMsgGetters").getTitle,
          o("WAWebFrontendMsgGetters").getHasTemplateButtons,
          o("WAWebFrontendMsgGetters").getIsQuickReply,
          o("WAWebMsgGetters").getIsFromTemplate,
          o("WAWebMsgGetters").getDoNotPlayInline,
          o("WAWebMsgGetters").getCtwaContext,
          o("WAWebMsgGetters").getBizPrivacyStatus,
          o("WAWebMsgGetters").getVerifiedBizName,
          o("WAWebMsgGetters").getTemplateParams,
          o("WAWebMsgGetters").getDynamicReplyButtons,
          o("WAWebFrontendMsgGetters").getReplyButtons,
        ]),
        Ke = je[0],
        Qe = je[1],
        Xe = je[2],
        Ye = je[3],
        Je = je[4],
        Ze = je[5],
        et = je[6],
        tt = je[7],
        nt = je[8],
        rt = je[9],
        ot = je[10],
        at = je[11],
        it = je[12],
        lt = je[13],
        st = je[14],
        ut = o("useWAWebMsgValues").useMsgValues(q.msg.id, [
          o("WAWebMsgGetters").getHasReaction,
          o("WAWebMsgGetters").getBroadcastId,
          o("WAWebMsgGetters").getDeprecatedMms3Url,
          o("WAWebMsgGetters").getIsKept,
          o("WAWebFrontendMsgGetters").getPendingDeleteForMe,
          o("WAWebMsgGetters").getMessageSecret,
          o("WAWebMsgGetters").getOriginalSelfAuthor,
          o("WAWebMsgGetters").getFrom,
          o("WAWebMsgGetters").getTo,
          o("WAWebFrontendMsgGetters").getIsTransparentMsg,
          o("WAWebFrontendMsgGetters").getIsTransparentMsgEmoji,
          o("WAWebMsgGetters").getGroupHistoryBundleMessageKey,
        ]),
        ct = ut[0],
        dt = ut[1],
        mt = ut[2],
        pt = ut[3],
        _t = ut[4],
        ft = ut[5],
        gt = ut[6],
        ht = ut[7],
        yt = ut[8],
        Ct = ut[9],
        bt = ut[10],
        vt = ut[11],
        St = o("WAWebFrontendMsgGetters").getChat(U),
        Rt = o("WAWebThemeContext").useIsDarkTheme(),
        Lt = o("WAWebChatGetters").getIsBroadcast(St),
        Et = k(null),
        kt = k(null),
        It = k(null),
        Tt = k(null),
        Dt = k(null),
        xt = k(null),
        $t = k(null),
        Pt = k(null),
        Nt = k(null),
        Mt = k(null),
        wt = k(!1),
        At = k(null),
        Ft = I(null),
        Ot = Ft[0],
        Bt = Ft[1],
        Wt = I(null),
        qt = Wt[0],
        Ut = Wt[1],
        Vt = I(null),
        Ht = Vt[0],
        Gt = Vt[1],
        zt = I(!1),
        jt = zt[0],
        Kt = zt[1],
        Qt = I(!1),
        Xt = Qt[0],
        Yt = Qt[1],
        Jt = I(function () {
          return q.selectedMessages
            ? q.selectedMessages.isSelected(o("WAWebStateUtils").unproxy(q.msg))
            : !1;
        }),
        Zt = Jt[0],
        en = Jt[1],
        tn = I(!1),
        nn = tn[0],
        rn = tn[1],
        on = I(!1),
        an = on[0],
        ln = on[1],
        sn = I(!1),
        un = sn[0],
        cn = sn[1],
        dn = I(!1),
        mn = dn[0],
        pn = dn[1],
        _n = I(null),
        fn = _n[0],
        gn = _n[1],
        hn = I({ atLeastOnceKeyboardUser: !1 }),
        yn = hn[0],
        Cn = hn[1],
        bn = o("useWAWebAssociatedMessages").useHiddenAssociatedMessages(
          U,
          o("WAWebViewMode.flow").ViewModeSurface.CHAT,
        ),
        vn = o("useWAWebMessageAriaLabel").useMessageAriaLabel(U, bn, yn),
        Sn = function () {
          return (
            !Fe &&
            !(
              U.type === o("WAWebMsgType").MSG_TYPE.CHAT &&
              U.subtype ===
                o("WAWebBotGenTypingIndicatorMsg")
                  .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE
            ) &&
            G !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY &&
            G !== o("WAWebDisplayType").DISPLAY_TYPE.CONTACT_CARD &&
            G !== o("WAWebDisplayType").DISPLAY_TYPE.EDITING &&
            G !== o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS
          );
        },
        Rn = vn;
      (un &&
        se &&
        Sn() &&
        (Rn =
          vn != null
            ? u._(
                /*BTDS*/ "{messageContent} For more options, press left or right arrow key to access context menu",
                [u._param("messageContent", vn)],
              )
            : u._(
                /*BTDS*/ "For more options, press left or right arrow key to access context menu",
              )),
        R(
          function () {
            se && yn.atLeastOnceKeyboardUser === !1 && Cn(x);
          },
          [se],
        ),
        R(
          function () {
            Yt(!1);
          },
          [bt],
        ),
        R(
          function () {
            return function () {
              me.current && (oe == null || oe());
            };
          },
          [oe],
        ));
      var Ln = o("WAWebWrapperHandlers").getHandlers(U),
        En = Ln.handleMsgInfoClick,
        kn = Ln.handleOpenBizEncStateMismatchInfoPopup,
        In = Ln.handleOpenBizPrivacyInfoPopup,
        Tn = Ln.handleOpenContactChat,
        Dn = Ln.handleOpenEphemeralExemptionInfoPopup,
        xn = Ln.handleOpenEphemeralInfoPopup,
        $n = Ln.handleOpenMarketingMessagesFeedbackPopup,
        Pn = Ln.handleOpenWebSearchFlow,
        Nn = function (t) {
          !t.buttons && !jt && Sn() && Kt(!0);
        },
        Mn = function () {
          Kt(!1);
        },
        wn = function () {
          Sn() && Mn();
        },
        An = o("WAWebDisplayType").isMsgGalleryDisplay(G),
        Fn = o("WAWebDisplayType").isConversationDisplay(G),
        On = o("WAWebDisplayType").isWideDisplay(G),
        Bn = function () {
          var e,
            t,
            n =
              (e =
                (t = Pt.current) == null
                  ? void 0
                  : t.contains(document.activeElement)) != null
                ? e
                : !1;
          return se && n;
        },
        Wn = function () {
          var e = K == null || K === !1,
            t =
              o("WAWebMiscGatingUtils").messageListA11yRedesignEnabled() &&
              Bn();
          pn(!Be && Fn && e && (an || Ht != null || qt != null || t));
        },
        qn = r("useWAWebDebouncedCallback")(
          Wn,
          o("WAWebWrapperConstants").DEBOUNCE_DURATION.REACTION_BUTTON,
        ),
        Un = function () {
          (ln(!0), qn());
        },
        Vn = function () {
          (ln(!1), qn());
        },
        Hn = function () {
          qn();
        },
        Gn = function () {
          (Fn
            ? vr(o("WAWebMultiSelectBar.react").MultiSelectMode.DELETE)
            : o("WAWebModalManager").ModalManager.open(
                v.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
                  chat: St,
                  msgList: [U].map(o("WAWebStateUtils").unproxy),
                  isMsgVisible: Q,
                }),
              ),
            o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(),
            o("WAWebRevokeMetricUtils").UiRevokeActionHelper.messageSelected());
        },
        zn = function () {
          o("WAWebMessageHandlers").handleMessageReply(
            St,
            U,
            o("WAWebWamEnumQuotedMessageUserJourneyEntryPoint")
              .QUOTED_MESSAGE_USER_JOURNEY_ENTRY_POINT
              .CONTEXT_MENU_REPLY_BUTTON,
          );
        },
        jn = function () {
          o("WAWebMessageHandlers").handleAskMetaAi(U);
        },
        Kn = function () {
          var e = o("WAWebStateUtils").unproxy(U);
          r("WAWebReplyToMsgChatAction")(e);
        },
        Qn = function () {
          o("WAWebFileSaver").FileSaver.initDownload(
            o("WAWebStateUtils").unproxy(U),
          );
        },
        Xn = function () {
          n("cr:7565") &&
            n("cr:7565")
              .saveMediaFile(o("WAWebStateUtils").unproxy(U))
              .then(function () {
                if (n("cr:13786"))
                  return n("cr:13786").shareFile(
                    o("WAWebStateUtils").unproxy(U),
                  );
              })
              .catch(function (t) {
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Error while sharing a message: ",
                      "",
                    ])),
                  t,
                );
              });
        },
        Yn = function () {
          n("cr:7565")
            ? n("cr:7565")
                .saveMediaFile(o("WAWebStateUtils").unproxy(U))
                .catch(function (e) {
                  o("WALogger").ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Error while downloading a message: ",
                        "",
                      ])),
                    e,
                  );
                })
            : o("WAWebFileSaver").FileSaver.initDownload(
                o("WAWebStateUtils").unproxy(U),
              );
        },
        Jn = function () {
          n("cr:7565") &&
            n("cr:7565")
              .copyMediaFile(o("WAWebStateUtils").unproxy(U))
              .then(function (e) {
                o("WAWebToastManager").ToastManager.open(
                  v.jsx(o("WAWebToast.react").Toast, {
                    msg: u._(/*BTDS*/ "File copied: {fileName}", [
                      u._param("fileName", e),
                    ]),
                  }),
                );
              })
              .catch(function (e) {
                o("WALogger").ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "Error while copying a message: ",
                      "",
                    ])),
                  e,
                );
              });
        },
        Zn = function () {
          tr(o("WAWebBotTypes").BotFeedbackKind.POSITIVE);
        },
        er = function () {
          o("WAWebModalManager").ModalManager.open(
            v.jsx(r("WAWebBotFeedbackModal.react"), { msg: U, onSubmit: tr }),
          );
        },
        tr = function (t) {
          (o("WAWebSendBotFeedbackAction").sendBotFeedback(U, t),
            o("WAWebToastManager").ToastManager.open(
              v.jsx(o("WAWebToast.react").Toast, {
                msg: u._(/*BTDS*/ "Feedback submitted to Meta"),
              }),
            ),
            o("WAWebModalManager").ModalManager.close());
        },
        nr = function () {
          (new (o("WAWebSupportAiSessionWamEvent").SupportAiSessionWamEvent)({
            supportAiEventType: o("WAWebWamEnumSupportAiEventType")
              .SUPPORT_AI_EVENT_TYPE.THUMB_DOWN_CLICKED,
          }).commit(),
            o("WAWebModalManager").ModalManager.open(
              v.jsx(r("WAWebSupportBotNegativeFeedbackModal"), {
                msgKey: U.id,
                onSubmit: o("WAWebSendSupportBotFeedbackActions")
                  .handleSupportBotFeedbackSubmit,
              }),
            ));
        },
        rr = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (new (o("WAWebSupportAiSessionWamEvent").SupportAiSessionWamEvent)({
              supportAiEventType: o("WAWebWamEnumSupportAiEventType")
                .SUPPORT_AI_EVENT_TYPE.THUMB_UP_CLICKED,
            }).commit(),
              yield o(
                "WAWebSendSupportBotFeedbackActions",
              ).handleSupportBotFeedbackSubmit(U.id, ["positive"]));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        or = function () {
          var e = new (o(
            "WAWebPinnedMessagesUserJourneyLogger",
          ).PinnedMessagesUserJourneyLogger)(St);
          (e.messageMenuClickPin(U),
            o("WAWebModalManager").ModalManager.open(
              v.jsx(r("WAWebPinMessageModal.react"), { msg: U, logger: e }),
            ));
        },
        ar = function () {
          var e = o(
            "WAWebPinInChatCollection",
          ).PinInChatCollection.getByParentMsgKey(U.id);
          (new (o(
            "WAWebPinnedMessagesUserJourneyLogger",
          ).PinnedMessagesUserJourneyLogger)(St).messageMenuClickUnpin(U, e),
            o("WAWebSendPinMessageAction")
              .sendPinInChatMsg(
                U,
                o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
                  .UNPIN_FOR_ALL,
              )
              .catch(function (e) {
                o("WALogger").ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "Error while unpinning a message: ",
                      "",
                    ])),
                  e,
                );
              }));
        },
        ir = function () {
          var e = o("WAWebStateUtils").unproxy(U);
          o("WAWebCmd").Cmd.sendStarMsgs(St, [e]);
        },
        lr = function () {
          var e = o("WAWebStateUtils").unproxy(U);
          o("WAWebCmd").Cmd.sendUnstarMsgs(St, [e]);
        },
        sr = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              yield o("WAWebKeepInChatActions").runKeepInChatUX(
                o("WAWebStateUtils").unproxy(U),
                o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.CHAT,
              );
            } catch (t) {
              var e;
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "Keep operation not complete. Reason: ",
                    "",
                  ])),
                (e = r("getErrorSafe")(t).message) != null ? e : "unknown",
              );
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        ur = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              yield o("WAWebKeepInChatActions").runUndoKeepInChatUX(
                o("WAWebStateUtils").unproxy(U),
                o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.CHAT,
              );
            } catch (t) {
              var e;
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "UndoKeep operation not complete. Reason: ",
                    "",
                  ])),
                (e = r("getErrorSafe")(t).message) != null ? e : "unknown",
              );
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        cr = function () {
          o("WAWebFavoriteStickerAction").addStickerMsgsToFavorites([
            o("WAWebStateUtils").unproxy(U),
          ]);
        },
        dr = function () {
          o("WAWebFavoriteStickerAction").removeStickerMsgFromFavorites(
            o("WAWebStateUtils").unproxy(U),
          );
        },
        mr = function () {
          r("WAWebAddMsgToNoteAction")(U);
        },
        pr = function (t) {
          Pt.current && r("WAWebFocusTracer").focus(Pt.current, t);
        },
        _r = r("useWAWebStableCallback")(function () {
          o("WAWebMiscGatingUtils").messageListA11yRedesignEnabled() &&
            pr({ preventScroll: !0 });
        }),
        fr = r("useWAWebStableCallback")(function () {
          se && _r();
        }),
        gr = r("useWAWebStableCallback")(function (e) {
          (_r(),
            Bt(null),
            e != null &&
              o(
                "WAWebForwardActionUserJourneyLogger",
              ).ForwardActionUserJourneyLogger.contextMenuDismissed(),
            se && Kt(!1));
        }),
        hr = r("useWAWebStableCallback")(function () {
          (_r(),
            Ut(null),
            Ot != null && Bt(null),
            se && ln(!1),
            qn(),
            o(
              "WAWebReactionUserJourneyLogger",
            ).ReactionUserJourneyLogger.trayClose(),
            (wt.current = !1));
        }),
        yr = r("useWAWebStableCallback")(function () {
          At.current != null && (At.current.remove(), (At.current = null));
        }),
        Cr = r("useWAWebStableCallback")(function (e) {
          (e === void 0 && (e = !1),
            e || _r(),
            Gt(null),
            yr(),
            se && ln(!1),
            qn(),
            wt.current ||
              o(
                "WAWebReactionUserJourneyLogger",
              ).ReactionUserJourneyLogger.trayClose());
        }),
        br = function () {
          _r();
        },
        vr = function (t, n) {
          (o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(),
            n && n.stopPropagation(),
            X
              ? X(o("WAWebStateUtils").unproxy(U), !Zt, t, n)
              : o("WALogger")
                  .ERROR(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "no onMessageSelect",
                      ])),
                  )
                  .sendLogs("wrapper-onSelectClick"));
        },
        Sr = function () {
          return Pt.current;
        },
        Rr = function (t) {
          Dt.current &&
            (Yt(!0),
            de(kt.current, "animationend", function () {
              Yt(!1);
            }),
            j && t !== !0 && pr({ preventScroll: !0 }));
        },
        Lr = function () {
          o("WAWebMessageHandlers").handleOpenForwardFlow({
            multiSelect: Fn,
            msg: o("WAWebStateUtils").unproxy(U),
            handleSelectClick: vr,
          });
        },
        Er = function () {
          o("WAWebMsgActionCapability").canEnterEditingFlow(U) &&
            o("WAWebModalManager").ModalManager.open(
              v.jsx(r("WAWebMessageEditFlow.react"), { msg: U }),
            );
        },
        kr = function () {
          (o("WAWebReportToAdminEventsLogger").logRTAReportingEvent({
            reportToAdminInteraction: o("WAWebWamEnumReportToAdminInteraction")
              .REPORT_TO_ADMIN_INTERACTION.CLICK_SEND_FOR_ADMIN_REVIEW,
            groupId: o("WAWebFrontendMsgGetters").getChat(U).id.user,
          }),
            o("WAWebModalManager").ModalManager.open(
              v.jsx(r("WAWebReportToAdminPopup.react"), { msg: U }),
            ));
        },
        Ir = function () {
          o("WAWebModalManager").ModalManager.open(
            v.jsx(r("WAWebPaidPartnershipLabelModal.react"), { msg: U }),
          );
        },
        Tr = r("useWAWebStableCallback")(function (e, t) {
          if (o("WAWebReactionsUtils").canReactToMessage(e)) {
            var n = function (n) {
              (o("WAWebSendReactionMsgAction")
                .sendReactionToMsg(e, n)
                .then(function () {
                  o(
                    "WAWebReactionUserJourneyLogger",
                  ).ReactionUserJourneyLogger.reactionSelect(n);
                })
                .catch(function (e) {}),
                hr());
            };
            Ut({
              dirY: o("WAWebDropdown.react").DirY.BOTTOM,
              dirX:
                We && !On
                  ? o("WAWebDropdown.react").DirX.LEFT
                  : o("WAWebDropdown.react").DirX.RIGHT,
              type: o("WAWebDropdown.react").MenuType.ReactionPicker,
              menu: v.jsx(r("WAWebReactionsPanel.react"), {
                msgId: Le.toString(),
                onSelection: n,
              }),
              flipOnRTL: !0,
              anchor: Nt.current,
            });
          }
        }),
        Dr = r("useWAWebStableCallback")(function (e, t, n, r, a, i) {
          (r === void 0 && (r = o("WAWebDropdown.react").DirX.CENTER),
            a === void 0 && (a = o("WAWebDropdown.react").DirY.TOP));
          var l = function (n) {
            ((wt.current =
              n === o("WAWebSendReactionsTray.react").MORE_REACTIONS),
              n !== o("WAWebSendReactionsTray.react").MORE_REACTIONS
                ? o("WAWebSendReactionMsgAction")
                    .sendReactionToMsg(e, n)
                    .then(function () {
                      o(
                        "WAWebReactionUserJourneyLogger",
                      ).ReactionUserJourneyLogger.reactionSelect(n);
                    })
                    .catch(function (e) {})
                : self.setTimeout(function () {
                    Tr(e, Pt.current);
                  }, 150),
              qn(),
              Cr());
          };
          Gt({
            dirY: a,
            dirX: r,
            type: o("WAWebDropdown.react").MenuType.ReactionSendTray,
            menu: v.jsx(
              o("WAWebSendReactionsTrayContainer.react")
                .SendReactionsTrayContainer,
              {
                selectedCallback: l,
                msg: e,
                onMouseEnter: Un,
                onMouseOver: Un,
                onMouseLeave: Vn,
                userJourneyEntryPoint: n,
                disableAutoFocus: i,
              },
            ),
            flipOnRTL: !0,
            anchor: t,
          });
        }),
        xr = r("useWAWebStableCallback")(function (e, t, n) {
          var r;
          if (o("WAWebReactionsUtils").canReactToMessage(e)) {
            !o("WAWebFrontendChatGetters").getIsCAG(
              o("WAWebFrontendMsgGetters").getChat(e),
            ) &&
              !o("WAWebChatGetters").getIsNewsletter(
                o("WAWebFrontendMsgGetters").getChat(e),
              ) &&
              o(
                "WAWebPrepareMessageSendingAction",
              ).prepareChatForMessageSending(
                o("WAWebFrontendMsgGetters").getChat(e),
              );
            var a =
              (r = n.current) == null ? void 0 : r.getBoundingClientRect();
            if (a != null) {
              yr();
              var i = o("WAWebMessageUiUtils").calculateReactionTrayPosition(a),
                l = i.anchorX,
                s = i.anchorY,
                u = i.dirX,
                c = i.dirY,
                d = o("WAWebMessageUiUtils").createVirtualAnchor(l, s);
              (document.body != null && document.body.appendChild(d),
                (At.current = d),
                Dr(e, d, t, u, c, !0));
            }
          }
        }),
        $r = r("useWAWebStableCallback")(function (e, t, n) {
          var r;
          if (o("WAWebReactionsUtils").canReactToMessage(e)) {
            !o("WAWebFrontendChatGetters").getIsCAG(
              o("WAWebFrontendMsgGetters").getChat(e),
            ) &&
              !o("WAWebChatGetters").getIsNewsletter(
                o("WAWebFrontendMsgGetters").getChat(e),
              ) &&
              o(
                "WAWebPrepareMessageSendingAction",
              ).prepareChatForMessageSending(
                o("WAWebFrontendMsgGetters").getChat(e),
              );
            var a =
              ((r = Nt.current) == null
                ? void 0
                : r.getBoundingClientRect().left) !== 0
                ? Nt.current
                : It.current;
            self.setTimeout(function () {
              Dr(e, a, n);
            }, 50);
          }
        }),
        Pr = function () {
          var e;
          return (e = Et.current) == null ? void 0 : e.getRef();
        },
        Nr = r("useWAWebStableCallback")(function (e) {
          Et.current = {
            getRef: function () {
              return e;
            },
          };
        }),
        Mr = function () {
          Ht
            ? Cr()
            : $r(
                U,
                void 0,
                o("WAWebWamEnumReactionUserJourneyEntryPoint")
                  .REACTION_USER_JOURNEY_ENTRY_POINT
                  .MACOS_MESSAGE_REACTION_BUTTON,
              );
        },
        wr = function () {
          if (
            o("WAWebChatGetters").getIsNewsletter(
              o("WAWebFrontendMsgGetters").getChat(U),
            )
          ) {
            o("WAWebModalManager").ModalManager.open(
              v.jsx(r("WAWebReportNewsletterPostPopup.react"), {
                chat: o("WAWebFrontendMsgGetters").getChat(U),
                msg: U,
                spamFlow: o("WAWebSpamConstants").SpamFlow.MessageMenu,
              }),
            );
            return;
          }
          o("WAWebModalManager").ModalManager.open(
            v.jsx(r("WAWebReportMsgPopup.react"), {
              msg: U,
              spamFlow: o("WAWebSpamConstants").SpamFlow.MessageMenu,
            }),
          );
        },
        Ar = function (t) {
          if (se && K === !0) {
            (t.preventDefault(), vr());
            return;
          }
          var e = Pr();
          (e == null ? void 0 : e.handleKeyActivation) != null &&
            e.handleKeyActivation(t);
        },
        Fr = function () {
          var e =
            o("WAWebMiscGatingUtils").messageListA11yRedesignEnabled() && Bn();
          return Sn() && K !== !0 && ((jt && !Xt) || ee === !0 || !!Ot || e);
        },
        Or = function () {
          var e, t;
          return (
            ge &&
              ((e = function (t) {
                (t.preventDefault(),
                  t.stopPropagation(),
                  o("WAWebPttPrefs").PttPrefs.increasePlaybackRateFor(Le));
              }),
              (t = function (t) {
                (t.preventDefault(),
                  t.stopPropagation(),
                  o("WAWebPttPrefs").PttPrefs.decreasePlaybackRateFor(Le));
              })),
            { enter: Ar, space: Ar, "shift+>": e, "shift+<": t }
          );
        },
        Br = o("WAWebMediaDocumentUtils").useIsFileInCacheState(U) === !0,
        Wr = k("full"),
        qr = I(null),
        Ur = qr[0],
        Vr = qr[1],
        Hr = Lt
          ? v.jsx(r("WAWebBroadcastMessageDropdownMenu.react"), {
              msg: U,
              onStarClick: ir,
              onUnstarClick: lr,
            })
          : v.jsx(r("WAWebWrapperMessageDropdownMenu.react"), {
              msg: U,
              associatedMessages: bn,
              isFileInCache: Br,
              onKeepClick: sr,
              onUndoKeepClick: ur,
              displayType: G,
              onMsgInfoClick: En,
              onReplyClick: zn,
              onPrivateReplyClick: Kn,
              onMessageDownloadClick: Yn,
              onMessageSaveAsClick: Qn,
              onMessageDocumentCopyClick: Jn,
              onBotPositiveFeedbackClick: Zn,
              onMessageSelectClick: vr,
              onBotNegativeFeedbackClick: er,
              onSupportBotPositiveFeedbackClick: rr,
              onSupportBotNegativeFeedbackClick: nr,
              onStarClick: ir,
              onUnstarClick: lr,
              onFavoriteStickerClick: cr,
              onUnfavoriteStickerClick: dr,
              onMessageDeleteClick: Gn,
              onOpenContactChatClick: Tn,
              onForwardClick: Lr,
              onShareClick: Xn,
              onCopyFavoriteStickerClick: w,
              onCopyLottieStickerClick: A,
              onOpenStickerPackClick: F,
              onReactionClick: function () {
                return $r(
                  U,
                  void 0,
                  o("WAWebWamEnumReactionUserJourneyEntryPoint")
                    .REACTION_USER_JOURNEY_ENTRY_POINT
                    .MACOS_MESSAGE_MENU_ITEM_REACTION,
                );
              },
              onReportClick: function () {
                return wr(U);
              },
              onEditClick: Er,
              onRTAClick: kr,
              onPinClick: or,
              onUnpinClick: ar,
              onNewsletterMessageLinkCopyClick: function () {
                return o(
                  "WAWebNewsletterMsgLinkUtils",
                ).handleNewsletterMessageLinkCopyClick(U);
              },
              onAddToNoteClick: mr,
              onAddPaidPartnershipLabelClick: Ir,
              onAskMetaAiClick: jn,
              rightClickedLinkHref: Ur,
            }),
        Gr = v.jsx(r("WDSMenu.react"), {
          useMaxWidth: !1,
          children:
            Wr.current === "full"
              ? Hr
              : o(
                  "WAWebMessageDebugMenuItems.react",
                ).getWAWebMessageDebugMenuItems(U),
        }),
        zr = v.jsx(r("WDSMenu.react"), { useMaxWidth: !1, children: Hr });
      function jr() {
        o("WAWebModalManager").ModalManager.exists(function (e) {
          Cr(e);
        });
      }
      var Kr = r("useWDSMenu")({
          targetRef: Mt,
          menu: Gr,
          contextMenuArea: !0,
          enableUIM: !0,
          onClose: jr,
        }),
        Qr = Kr.menuPortal,
        Xr = Kr.menuRef,
        Yr = Kr.openMenu;
      function Jr() {
        o("WAWebModalManager").ModalManager.exists(function (e) {
          (e || _r(), Cr(!0));
        });
      }
      var Zr = r("useWDSMenu")({
          targetRef: It,
          menu: zr,
          enableUIM: !0,
          onClose: Jr,
        }),
        eo = Zr.menuPortal,
        to = Zr.menuRef,
        no = Zr.openMenu,
        ro = function (t) {
          var e, n;
          if (
            (Gt(null),
            yr(),
            ((e =
              (n = document.getSelection()) == null ? void 0 : n.toString()) !=
            null
              ? e
              : "") === "")
          ) {
            if ((t.stopPropagation(), !r("gkx")("26258"))) {
              var a = o("WAWebStateUtils").unproxy(U);
              ((window.msg = a),
                o("WAWebCmd").Cmd.trigger("debug-msg-changed", a),
                window.Debug.msgHandler && window.Debug.msgHandler());
            }
            if (!Sn()) {
              o("WAWebDebugGatingUtils").msgDebugMenuItemsEnabled() &&
                ((Wr.current = "debug"), Yr(t));
              return;
            }
            ((Wr.current = "full"),
              Vr(P(t)),
              Yr(t),
              self.setTimeout(function () {
                xr(
                  U,
                  o("WAWebWamEnumReactionUserJourneyEntryPoint")
                    .REACTION_USER_JOURNEY_ENTRY_POINT
                    .MACOS_MESSAGE_MENU_ITEM_REACTION,
                  Xr,
                );
              }, 150));
          }
        },
        oo = function () {
          (Vr(null),
            no(),
            self.setTimeout(function () {
              xr(
                U,
                o("WAWebWamEnumReactionUserJourneyEntryPoint")
                  .REACTION_USER_JOURNEY_ENTRY_POINT
                  .MACOS_MESSAGE_MENU_ITEM_REACTION,
                to,
              );
            }, 150));
        },
        ao = function (t, n, a) {
          if (n && Ot) {
            (Bt(null), Ut(null), Gt(null));
            return;
          }
          var e = n ? It.current : t,
            i = v.jsxs(v.Fragment, {
              children: [
                r("WAWebWrapperMessageDropdownMenuReactionsTray.react")
                  ? v.jsx(
                      r("WAWebWrapperMessageDropdownMenuReactionsTray.react"),
                      {
                        anchor: e,
                        msg: U,
                        onMouseEnter: Un,
                        onMouseOver: Un,
                        onMouseLeave: Vn,
                        onReactionSent: function () {
                          (qn(),
                            Bt(null),
                            o(
                              "WAWebReactionUserJourneyLogger",
                            ).ReactionUserJourneyLogger.trayClose());
                        },
                        isSentByMe: We,
                        isWideDisplay: On,
                        onReactionPickerOpen: Ut,
                      },
                    )
                  : null,
                Lt
                  ? v.jsx(r("WAWebBroadcastMessageDropdownMenu.react"), {
                      msg: U,
                      onStarClick: ir,
                      onUnstarClick: lr,
                    })
                  : v.jsx(r("WAWebWrapperMessageDropdownMenu.react"), {
                      msg: U,
                      associatedMessages: bn,
                      isFileInCache: Br,
                      onKeepClick: sr,
                      onUndoKeepClick: ur,
                      displayType: G,
                      onMsgInfoClick: En,
                      onReplyClick: zn,
                      onPrivateReplyClick: Kn,
                      onMessageDownloadClick: Yn,
                      onMessageSaveAsClick: Qn,
                      onMessageDocumentCopyClick: Jn,
                      onBotPositiveFeedbackClick: Zn,
                      onMessageSelectClick: vr,
                      onBotNegativeFeedbackClick: er,
                      onSupportBotPositiveFeedbackClick: rr,
                      onSupportBotNegativeFeedbackClick: nr,
                      onStarClick: ir,
                      onUnstarClick: lr,
                      onFavoriteStickerClick: cr,
                      onUnfavoriteStickerClick: dr,
                      onMessageDeleteClick: Gn,
                      onOpenContactChatClick: Tn,
                      onForwardClick: Lr,
                      onShareClick: Xn,
                      onCopyFavoriteStickerClick: function (t) {
                        return void o(
                          "WAWebCopyToClipboard",
                        ).copyImageToClipboard(t);
                      },
                      onCopyLottieStickerClick: function (t) {
                        return void o(
                          "WAWebCopyStickerToClipboard",
                        ).copyLottieStickerToClipboard(t);
                      },
                      onOpenStickerPackClick: function (t) {
                        return o("WAWebCmd").Cmd.openStickerPack(t);
                      },
                      onReactionClick: function () {
                        return $r(
                          U,
                          void 0,
                          o("WAWebWamEnumReactionUserJourneyEntryPoint")
                            .REACTION_USER_JOURNEY_ENTRY_POINT
                            .MACOS_MESSAGE_MENU_ITEM_REACTION,
                        );
                      },
                      onReportClick: function () {
                        return wr(U);
                      },
                      onEditClick: Er,
                      onRTAClick: kr,
                      onPinClick: or,
                      onUnpinClick: ar,
                      onNewsletterMessageLinkCopyClick: function () {
                        return o(
                          "WAWebNewsletterMsgLinkUtils",
                        ).handleNewsletterMessageLinkCopyClick(U);
                      },
                      onAddToNoteClick: mr,
                      onAddPaidPartnershipLabelClick: Ir,
                      onAskMetaAiClick: jn,
                      rightClickedLinkHref: a != null ? P(a) : null,
                    }),
              ],
            });
          a != null
            ? Bt({ menu: i, event: a })
            : Bt({
                menu: i,
                anchor: e,
                theme: o("WAWebDropdownItem.react").DropdownItemThemeType
                  .Compact,
                autoFocus: se,
              });
        },
        io = function (t) {
          var e = o("WAWebStateUtils").unproxy(U);
          if (
            !(!o("WAWebMsgReply").canReplyMsg(e) || K === !0 || !Fn || Ot || Ht)
          ) {
            var n = function (t, n) {
              for (var e = n; e; ) {
                if (e === t) return !0;
                e = e.parentNode;
              }
              return !1;
            };
            if (
              t.target instanceof HTMLElement &&
              (n(Dt.current, t.target) || n(Nt.current, t.target))
            ) {
              !r("gkx")("26258") &&
                e.isViewOnce &&
                !nn &&
                (We || o("WAWebViewOnceState").isViewed(e.safe())) &&
                rn(!0);
              return;
            }
            (o("WAWebMessageHandlers").handleMessageReply(
              St,
              U,
              o("WAWebWamEnumQuotedMessageUserJourneyEntryPoint")
                .QUOTED_MESSAGE_USER_JOURNEY_ENTRY_POINT.MESSAGE_DOUBLE_TAP,
            ),
              Rr());
          }
        },
        lo = function () {
          Sn() && (Kt(!0), ao(void 0, !0));
        },
        so = function (t) {
          Zt !== t && en(t);
        },
        uo = function (t, n) {
          Pt.current &&
            o("WAWebDomScroll")
              .scrollAt(Pt.current, void 0, n)
              .then(t);
        },
        co = function () {
          U.resend().catch(function (e) {
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "wrapper:resend failure: ",
                  "",
                ])),
              e,
            );
          });
        },
        mo = function () {};
      L(W, function () {
        return {
          focus: pr,
          openContextMenu: Yr,
          getContainerElement: Sr,
          getMsgComponentRef: Pr,
          resend: co,
        };
      });
      var po = r("useWAWebEventTargetValue")(U, "change", function () {
          return o("WAWebMsgActionCapability").canQuickForwardMsg(U);
        }),
        _o = r("useWAWebEventTargetValue")(U, "change", function () {
          return o("WAWebMsgGetters").getIsMarketingTemplateTag(U);
        });
      (o("useWAWebListener").useListener(U, "revoked", function () {
        (Ot && gr(o("WAWebUim").DismissReason.LIFECYCLE),
          Ht && Cr(),
          qt && hr());
      }),
        o("useWAWebListener").useListener(
          document,
          "selectionchange",
          function () {
            var e, t;
            ((e =
              (t = document.getSelection()) == null ? void 0 : t.toString()) !=
            null
              ? e
              : "") !== "" && Mn();
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "media_viewer_modal",
          Mn,
        ));
      var fo = o("WAWebWrapperShouldDisplayAuthor").shouldDisplayAuthor({
          msg: U,
          position: V,
          displayType: G,
        }),
        go,
        ho =
          o("WAWebMiscGatingUtils").messageListA11yRedesignEnabled() && Fn
            ? 0
            : -1;
      Fr() &&
        (go = v.jsx(
          r("WAWebMessageMenu.react"),
          {
            msg: U,
            hasAuthor: fo,
            displayType: G,
            position: V,
            onToggle: oo,
            role: "button",
            ariaLabel: u._(/*BTDS*/ "Context menu"),
            tabIndex: ho,
            isMenuOpen: !!Ot,
          },
          "icon-context",
        ));
      var yo = v.jsx("div", { className: "x10l6tqk xyc4j8s xceh6e4", ref: It }),
        Co = null,
        bo =
          o("useWAWebMessageAriaDescription").useMessageAriaDescription(
            U,
            bn,
            yn,
          ) || Rn,
        vo = u._(/*BTDS*/ "Checkbox, {checkbox-state} , {msg-contents}", [
          u._param("checkbox-state", Zt ? "selected" : "unselected"),
          u._param("msg-contents", bo),
        ]);
      if (
        !Fe &&
        q.selectable === !0 &&
        !(
          U.type === o("WAWebMsgType").MSG_TYPE.CHAT &&
          U.subtype ===
            o("WAWebBotGenTypingIndicatorMsg")
              .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE
        )
      ) {
        var So =
          G === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY ||
          G === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY_LINKS
            ? "gallery"
            : null;
        Co = v.jsx(r("WAWebMessageCheckbox.react"), {
          checked: !!Zt,
          onClick: function (t) {
            (vr(void 0, t),
              o(
                "WAWebForwardActionUserJourneyLogger",
              ).ForwardActionUserJourneyLogger.messageForwardSelect(!!Zt));
          },
          msgTheme: So,
          ariaLabel: vo,
        });
      }
      var Ro = null;
      if (Je === o("WAWebMsgType").MSG_TYPE.STICKER && q.selectable === !0) {
        var Lo;
        Ro = v.jsx("span", {
          children: v.jsx("div", {
            className: "x10l6tqk x11uqc5h xh8yej3 x5yr21d x1ypdohk",
            onMouseEnter:
              (Lo = xt.current) == null ? void 0 : Lo.startAnimation,
            onClick: function (t) {
              return vr(void 0, t);
            },
          }),
        });
      }
      var Eo = !1;
      if (Je === o("WAWebMsgType").MSG_TYPE.CHAT) {
        var ko = o("WAWebCodeFormatMutator").Code.match(Ce);
        Eo = ko.length === 1 && ko[0][4][0].length === Ce.length;
      }
      var Io =
          (a = o("useWAWebChatValues").useOptionalChatValues(St.id, [
            o("WAWebChatGetters").getIsPSA,
          ])) != null
            ? a
            : [],
        To = Io[0],
        Do = o("WAWebWrapperShouldHaveTail").shouldHaveTail({
          chat: St,
          isDisplayedAsNotification: Fe,
          displayType: G,
          tailOverride: q.tailOverride,
          position: V,
        }),
        xo =
          Ct &&
          (!fo || We || (!Ne && !ze)) &&
          ((Fn &&
            (V === o("WAWebMessagePosition").MsgPosition.FRONT ||
              V === o("WAWebMessagePosition").MsgPosition.SINGLE)) ||
            !Fn),
        $o =
          q.selectable !== !0 &&
          (Fn ||
            G === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO ||
            G === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS ||
            G === o("WAWebDisplayType").DISPLAY_TYPE.REPORTED_MSG),
        Po = Se === !0 && !Fe && !Pe,
        No =
          o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
          De === !0 &&
          !Ne &&
          ((i = o("WAWebFrontendMsgGetters").getChat(U)) == null ||
          (i = i.contact) == null
            ? void 0
            : i.isOrHasBeenHosted) === !0,
        Mo = $o && po,
        wo =
          Je !== o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
          $o &&
          _o &&
          o(
            "WAWebMarketingMessagesUserFeedbackGatingUtils",
          ).isMMMessageLevelFeedbackEnabled() &&
          !o(
            "WAWebMarketingMessagesUserFeedbackGatingUtils",
          ).isMMUserControlsExceptionNumberPrefixMatch(
            (l = o("WAWebFrontendMsgGetters").getChat(U)) == null ||
              (l = l.contact) == null
              ? void 0
              : l.id,
          ),
        Ao = $o && $e && Je === o("WAWebMsgType").MSG_TYPE.CHAT,
        Fo =
          at != null &&
          !St.id.isBot() &&
          !St.id.isCAPISupportAccount() &&
          U.invokedBotWid == null,
        Oo,
        Bo = We && !On,
        Wo = !St.isUnreadMsg(U),
        qo = E(function () {
          return { isOutgoing: We, isRead: Wo };
        }, []);
      !Ct &&
        U &&
        Fn &&
        o("WAWebReactionsUtils").shouldShowReactionBubble(
          U,
          o("WAWebAddOnBubbleType").AddOnBubbleType.DEFAULT,
        ) &&
        (Oo = v.jsx(r("WAWebAddOnBubblesContainer.react"), {
          displayType: G,
          isOutgoingMsg: Bo,
          bubbleType:
            Je === o("WAWebMsgType").MSG_TYPE.IMAGE
              ? o("WAWebAddOnBubbleType").AddOnBubbleType.IMAGE_MSG
              : o("WAWebAddOnBubbleType").AddOnBubbleType.DEFAULT,
          parentIds: [U.id.toString()].concat(
            bn.map(function (e) {
              return e.id.toString();
            }),
          ),
          onDetailsPaneClosed: br,
          hasReaction:
            ct ||
            bn.some(function (e) {
              return o("WAWebMsgGetters").getHasReaction(e);
            }),
          canHaveComments: o("WAWebFrontendChatGetters").getIsCAG(St),
        }));
      var Uo = o(
          "WAWebWrapperOrderEphemeralExemption",
        ).isMessageExemptedFromDisappearing(St, U),
        Vo = Fo || Po || No || Mo || wo || Ao || Uo,
        Ho = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((s = {}), (s._amjv = !0), s),
        ),
        Go = !Fe && G !== o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT,
        zo = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((y = {}),
          (y._amk0 = _t),
          (y._aml4 =
            G !== o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS &&
            G !== o("WAWebDisplayType").DISPLAY_TYPE.REPORTED_MSG &&
            To),
          (y._amk1 = Fe),
          (y._amkk = An),
          (y._anz0 = On),
          (y._amky = G === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO),
          (y._amkz = Vo),
          (y["message-out"] =
            (!Fe && We) || G === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO),
          (y["message-in"] = !Fe && !We),
          y),
          ((b = {}),
          (b[
            o("WAWebKeyboardListHotKeys.react").LIST_FOCUSABLE_ITEM_CLASS_NAME
          ] = j),
          b),
          ((S = {}),
          (S._amjy = Go),
          (S._amjz = !o("WAWebChatGetters").getIsGroup(St)),
          (S["_amj-"] = On || Fe),
          (S._as4s = (On && Je !== o("WAWebMsgType").MSG_TYPE.ALBUM) || Fe),
          (S._amjw = !0),
          (S._anjh =
            G === o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS),
          S),
          {
            0: "",
            2: "x1klvx2g xahtqtb",
            1: "xl9ihdk x1hq3j7i x1dr3g3m",
            3: "x1klvx2g xahtqtb xl9ihdk x1hq3j7i x1dr3g3m",
          }[(!!Go << 1) | ((Xt === !0) << 0)],
        ),
        jo = o("WAWebWrapperConstants").NO_PADDING_SUBTYPES.includes(U.subtype),
        Ko = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          "_amk4",
          o("WAWebABProps").getABPropConfigValue(
            "wa_web_highlight_me_mention",
          ) && "_avau",
          un &&
            se &&
            (C || (C = r("stylex")))(
              o("WDSFocusStateStyles").WDSFocusStateStyles
                .genericFocusPersistent,
              D.messageFocused,
            ),
          N(U, G, St),
          ((T = {}),
          (T._amkb = Fe),
          (T._amkc = jo),
          (T._amke = Eo),
          (T._amk5 = Do),
          (T["tail-override-left"] = q.tailOverride === "left"),
          (T["tail-override-right"] = q.tailOverride === "right"),
          T),
          (($ = {}), ($._amka = xo), $),
          vt != null && "x9lmoot x1ppz1d2",
        );
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "animate_message_bubble",
        function (e, t) {
          e.toString() === Le.toString() && gn(t);
        },
      );
      var Qo = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((M = {}),
          (M._amk6 = !Ct),
          (M._amlo = !Fe && !Ct),
          (M._amlp = nt && et && !tt),
          (M._amqa = o("WAWebBotGating").shouldAnimateAsBotStream(U)),
          M),
          vt != null && !Ct && "x9lmoot x1ppz1d2",
          fn != null && (C || (C = r("stylex")))(fn),
        ),
        Xo;
      Ot ? (Xo = "none") : Oe ? (Xo = "pop-fast-reverse") : (Xo = "pop-fast");
      var Yo;
      qt
        ? (Yo = v.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "MsgReactionPicker",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: hr,
            children: v.jsx(r("WAWebUimUieMenu.react"), { contextMenu: qt }),
          }))
        : Ht &&
          (Yo = v.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "MsgReactionTray",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: function () {
              return Cr();
            },
            children: v.jsx(r("WAWebUimUieMenu.react"), { contextMenu: Ht }),
          }));
      var Jo;
      q.isFocusedMsg === !0 &&
        (Jo = v.jsx(o("WAWebWrapperListeners.react").WhileFocusedListener, {
          parent: { scrollMsg: uo, highlight: Rr, highlightMention: mo },
        }));
      var Zo;
      z &&
        (Zo = v.jsx(o("WAWebWrapperListeners.react").SelectionListener, {
          parent: { onSelectChange: so },
          msgId: Le.toString(),
          selectedMessages: z,
        }));
      var ea = [];
      if (Vo) {
        var ta = {
            showQuickEphemeralInfoAction: Po,
            onOpenEphemeralInfoPopup: xn,
            onOpenBizEncStateMissmatchInfoPopup: kn,
            showHostedBizEncStateMismatchInfoAction: No,
            showQuickBizPrivacyInfoAction: Fo,
            onOpenBizPrivacyInfoPopup: In,
            showQuickForwardAction: Mo,
            onOpenForwardFlow: function (t) {
              (o("WAWebMessageHandlers").handleOpenForwardFlow({
                msg: U,
                handleSelectClick: vr,
                multiSelect: t,
                onForward: function (t) {
                  o("WAWebForwardUtils").showForwardedToast(t.length);
                },
              }),
                o(
                  "WAWebForwardActionUserJourneyLogger",
                ).ForwardActionUserJourneyLogger.fastForwardButtonTapped(
                  St.id,
                  U,
                ));
            },
            showQuickMarketingMessagesFeedbackAction: wo,
            onOpenMarketingMessagesFeedback: $n,
            showQuickSearchAction: Ao,
            onOpenWebSearchFlow: Pn,
            showQuickEphemeralExemptionInfoAction: Uo,
            onOpenEphemeralExemptionInfoPopup: Dn,
          },
          na = v.jsx(
            r("WAWebWrapperQuickActionButton.react"),
            babelHelpers.extends({}, ta),
          );
        ea.push(na);
      }
      var ra = mn && ie && o("WAWebBizAiAgentGating").isAiCoachingEnabled();
      (ra && ea.push(v.jsx(r("WAWebBizAiTeachYourAiDrawer.react"), { msg: U })),
        o("WAWebReactionsUtils").canReactToMessage(U) &&
          ea.push(
            v.jsx(r("WAWebWrapperReactionsQuickActionButton.react"), {
              ref: Nt,
              msg: U,
              showButton: mn,
              onToggleReactionTray: Mr,
            }),
          ));
      var oa;
      He &&
        (oa = v.jsx(o("WAWebWrapperListeners.react").MediaListener, {
          forceUpdate: ue,
          mediaData: He,
        }));
      var aa = "msg-container";
      Fe && (aa = "msg-notification-container");
      var ia;
      if (Do) {
        var la;
        (q.tailOverride === "left"
          ? (la = o("WAWebWrapperGetTailIcon").getTailIcon(
              o("WAWebWrapperConstants").MSG_DIRECTION.IN,
            ))
          : q.tailOverride === "right"
            ? (la = o("WAWebWrapperGetTailIcon").getTailIcon(
                o("WAWebWrapperConstants").MSG_DIRECTION.OUT,
              ))
            : (la = o("WAWebWrapperGetTailIcon").getTailIcon(We)),
          (ia = v.jsx(la, {
            className_DONOTUSE: "_amk7",
            containerRef: Tt,
            "aria-hidden": !0,
          })));
      }
      var sa = U.safe(),
        ua = r("useWAWebBizVPVData")(U.unsafe()),
        ca =
          sa.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          sa.carouselCards != null
            ? v.jsx(r("WAWebInteractiveMessageCarousel.react"), {
                msg: sa,
                mainMsgWrapperRef: kt,
                isMsgVisible: q.isMsgVisible,
                msgComponentRef: Nr,
                bizVPVData: ua,
              })
            : null,
        da =
          r("WAWebWid").isCAPISupportAccount(U == null ? void 0 : U.from) &&
          U.isSupportAIMessage === !0 &&
          o("WAWebABPropsSaga").getIsSagaV1CarouselEnabled() &&
          U.supportCitations != null &&
          U.supportCitations.length > 0
            ? v.jsx(r("WAWebSupportCarousel"), {
                items:
                  (O =
                    (B = U.supportCitations) == null
                      ? void 0
                      : B.map(function (e) {
                          return {
                            title: e.title,
                            subtitle: e.subtitle,
                            cmsId: e.cmsId,
                            imageUrl: e.imageUrl,
                          };
                        })) != null
                    ? O
                    : [],
              })
            : null,
        ma;
      nt && et
        ? (ma = v.jsx(r("WAWebBizTemplateButtons.react"), { msg: U, chat: St }))
        : st != null &&
          st.length > 0 &&
          G !== o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS &&
          G !== o("WAWebDisplayType").DISPLAY_TYPE.REPORTED_MSG &&
          (ma = v.jsx(r("WAWebMessageButtons.react"), { msg: U }));
      var pa;
      Fe || V === o("WAWebMessagePosition").MsgPosition.MID
        ? (pa = null)
        : We &&
            he == null &&
            Je !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION &&
            Je !== o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT
          ? (pa = v.jsx(o("WAWebAccessibility.react").InvisibleLabel, {
              children: u._(/*BTDS*/ "You:"),
            }))
          : Ne ||
            (pa = v.jsx(o("WAWebAccessibility.react").InvisibleLabel, {
              children: u._(/*BTDS*/ "{author}:", [
                u._param("author", U.displayName()),
              ]),
            }));
      var _a = null;
      Ie &&
        (_a = v.jsx(o("WAWebAccessibility.react").InvisibleLabel, {
          children: u._(/*BTDS*/ "This is a disappearing message"),
        }));
      var fa = o("WAWebMsgGetters").getIsInitialE2ENotification(U),
        ga = v.jsxs("div", {
          "aria-label": Rn,
          className: zo,
          role: fa ? "button" : void 0,
          ref: kt,
          children: [
            v.jsx(r("WAWebVelocityTransitionGroup"), {
              transitionName: "delay-leave",
              children: Co,
            }),
            v.jsxs("div", {
              ref: Mt,
              "data-testid": void 0,
              className: Ko,
              onContextMenu: ro,
              onMouseOver: Nn,
              onMouseEnter: Nn,
              onMouseLeave: wn,
              children: [
                ia,
                ne &&
                  v.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                    name: "msg-row-group-profile-picture-wrapper",
                    children: v.jsx(
                      r("WAWebWrapperGroupProfilePicture.react"),
                      {
                        position: V,
                        tailOverride: q.tailOverride,
                        msg: U,
                        selectable: q.selectable,
                      },
                    ),
                  }),
                qe &&
                  n("cr:5997") &&
                  v.jsx(n("cr:5997"), {
                    isPeeking: nn,
                    onAnimationEnd: function () {
                      return rn(!1);
                    },
                  }),
                v.jsx(r("WAWebMsgFailIcon.react"), {
                  displayType: G,
                  msg: U,
                  associatedMessages: bn,
                }),
                Ro,
                v.jsxs(r("WAWebBubbleAnimationWrapper.react"), {
                  shouldAnimation:
                    o("WAWebBotGating").shouldAnimateAsBotStream(U),
                  bubbleRef: Dt,
                  msg: U,
                  componentClass: Qo,
                  children: [
                    pa,
                    v.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                      name: "msg",
                      children: v.jsx(r("WAWebGroupMetadataContext").Provider, {
                        value: St.groupMetadata,
                        children: v.jsxs(
                          r("WAWebMentionMessageContext").Provider,
                          {
                            value: qo,
                            children: [
                              v.jsx(r("WAWebMessageComponentWrapper.react"), {
                                msgComponentRef: Et,
                                chat: St,
                                displayAuthor: fo,
                                displayType: G,
                                hover: jt,
                                isMsgVisible: Q,
                                msg: U,
                                associatedMessages: bn,
                                position: V,
                                getSequentialMsg: Y,
                                onProductClick: J,
                                onMessageClick: Z,
                                forwardStickerRef: xt,
                                stickerLikeBubbleContainerRef: $t,
                                isFollowUpReply: ae,
                              }),
                              v.jsx(r("WAWebViewRepliesLabel.react"), {
                                msg: U.safe(),
                              }),
                              v.jsx(
                                r("WAWebNewsletterActionButtonWrapper.react"),
                                { msg: U },
                              ),
                            ],
                          },
                        ),
                      }),
                    }),
                    v.jsx(r("WAWebVelocityTransitionGroup"), {
                      transitionName: Xo,
                      children: go,
                    }),
                    yo,
                  ],
                }),
                v.jsx(
                  r("WAWebWrapperMessageActionButtonsRow"),
                  {
                    isOutgoingMsg: !On && We,
                    isMsgGallery: An,
                    hasReaction: ct,
                    messageActionButtons: ea,
                  },
                  "msg-acton-button-row-" + Le.toString(),
                ),
                ma,
                _a,
                da,
              ],
            }),
            Oo,
            Yo,
            Qr,
            eo,
            Jo,
            Zo,
            oa,
          ],
        }),
        ha = r("gkx")("5902") ? 1e3 : 4e3;
      function ya(e) {
        var t;
        e.getModifierState("Control") &&
          e.target instanceof Node &&
          !((t = Dt.current) != null && t.contains(e.target)) &&
          vr(void 0, e);
      }
      var Ca = v.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
        className: Ho,
        xstyle: [
          D.messageRow,
          (V === o("WAWebMessagePosition").MsgPosition.FRONT ||
            V === o("WAWebMessagePosition").MsgPosition.MID) &&
            !(nt && tt) &&
            !On &&
            D.messageContinuation,
          vt != null && D.groupHistoryMessageRow,
          vt != null &&
            (Rt ? D.groupHistoryMessageRowDark : D.groupHistoryMessageRowLight),
        ],
        "data-id": Le.toString(),
        "data-testid": void 0,
        handlers: Or(),
        onClick:
          n("cr:23046") != null && n("cr:23046").isWindowsHybridEnabled()
            ? ya
            : null,
        onDoubleClick: io,
        ref: Pt,
        tabIndex: -1,
        onMouseOver: Un,
        onMouseEnter: Un,
        onFocus: function () {
          (re == null || re(), (me.current = !0), cn(!0), Hn());
        },
        onBlur: function () {
          (oe == null || oe(), (me.current = !1), cn(!1), Hn());
        },
        onMouseLeave: Vn,
        children: [
          v.jsx(r("CometVirtualization.react"), {
            fasterSizeMeasurement: r("justknobx")._("1789"),
            unmountHiddenChildren: !0,
            hiddenMode: "none",
            pinChildrenOnInteraction: !1,
            topBottomMargin: ha,
            initialRenderConfig: {
              isVisible: !0,
              nodeHeight: null,
              hasScrollAnchoring: !0,
            },
            children: ga,
          }),
          ca,
        ],
      });
      return o("WAWebMiscGatingUtils").messageListA11yRedesignEnabled()
        ? v.jsx(r("WAWebExpandableTextContext").Provider, {
            value: fr,
            children: v.jsx(r("WAWebWrapperDisplayTypeContext").Provider, {
              value: G,
              children: v.jsx(r("WAWebKeyboardRotateFocusArrows.react"), {
                role: "row",
                children: Ca,
              }),
            }),
          })
        : Ca;
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P(e) {
      var t = e.target;
      if (t instanceof HTMLElement) {
        var n = t.closest("a");
        if (n instanceof HTMLAnchorElement && n.href !== "") return n.href;
      }
      return null;
    }
    function N(e, t, n) {
      var r;
      if (e.isViewOnce) return "_amkd";
      var a = o("WAWebMessagePluginMsgDisplayClass").msgDisplayClass({
        msg: e,
        displayType: t,
      });
      if (a != null) return a;
      switch (e.type) {
        case o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE:
          return "_amkd";
        case o("WAWebMsgType").MSG_TYPE.GP2:
          return (e.subtype === "create" &&
            o("WAWebUserPrefsMeUser").isMeAccount(
              (r = n.groupMetadata) == null ? void 0 : r.owner,
            )) ||
            ((e.subtype === "add" || e.subtype === "invite") &&
              o("WAWebUserPrefsMeUser").isMeAccount(e.recipients[0]))
            ? "_aqjf"
            : void 0;
        case o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE:
          return o(
            "WAWebWrapperConstants",
          ).NON_E2E_NOTIFICATION_SUBTYPES.includes(e.subtype)
            ? "_amki"
            : o("WAWebMsgGetters").getIsBizNotification(e)
              ? "_amkh"
              : void 0;
        case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION:
          return (e.subtype === "encrypt" &&
            o("WAWebMsgGetters").getIsCAPISupport(e)) ||
            e.subtype === "chat_psa"
            ? "_amki"
            : "_amkg";
        case o("WAWebMsgType").MSG_TYPE.CIPHERTEXT:
        case o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER:
          return o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "_amkd",
            "_amkj",
          );
        case o("WAWebMsgType").MSG_TYPE.UNKNOWN:
          return o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "_amkd",
            "_amkj",
          );
        case o("WAWebMsgType").MSG_TYPE.DEBUG:
          return;
        default:
          return;
      }
    }
    M.displayName = "Wrapper";
    function M(e) {
      var t,
        n,
        r,
        a = e.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(e, y);
      return v.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
        name: i.errorBoundaryName + "-message-wrapper",
        description:
          "msgId: " +
          ((t =
            (n = i.msg) == null || (n = n.id) == null
              ? void 0
              : n.toString()) != null
            ? t
            : "") +
          " msgType: " +
          i.msg.type +
          ", msgSubtype: " +
          ((r = i.msg.subtype) != null ? r : "unknown"),
        children: v.jsx($, babelHelpers.extends({ ref: a }, i)),
      });
    }
    M.displayName = M.name + " [from " + i.id + "]";
    function w(e) {
      o("WAWebCopyToClipboard").copyImageToClipboard(e);
    }
    function A(e) {
      o("WAWebCopyStickerToClipboard").copyLottieStickerToClipboard(e);
    }
    function F(e) {
      o("WAWebCmd").Cmd.openStickerPack(e);
    }
    l.default = M;
  },
  226,
);
