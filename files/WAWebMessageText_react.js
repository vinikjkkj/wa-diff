__d(
  "WAWebMessageText.react",
  [
    "cx",
    "fbt",
    "PaymentLinkPreviewWithTrustSignalsFeature",
    "PaymentLinkWamLogger",
    "WALogger",
    "WAWebABProps",
    "WAWebAnimatedEmojiGatingUtils",
    "WAWebApi",
    "WAWebApiParse",
    "WAWebBizCatalogPreviewContainer.react",
    "WAWebBizCtwaContext.react",
    "WAWebBizSuspiciousLabel.react",
    "WAWebBizTemplateMessageFooter.react",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatPreferenceCollection",
    "WAWebClassnames",
    "WAWebCommonNewsletterStrings",
    "WAWebConfirmPopup.react",
    "WAWebDisplayType",
    "WAWebDrawerManager",
    "WAWebEmoji",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebFormatHeaderFooter",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupJoinModalUtils",
    "WAWebGroupMetadataCollection",
    "WAWebGroupType",
    "WAWebKeyboardTabUtils",
    "WAWebL10N",
    "WAWebMediaLinkPreviewContainer.react",
    "WAWebMediaLinkPreviewUtils",
    "WAWebMessageAnimatedEmoji.react",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageMeta.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageStaticSingleEmoji.react",
    "WAWebMessageTextBody.react",
    "WAWebMessageTextBubble.react",
    "WAWebModalManager",
    "WAWebModifyParticipantsGroupAction",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgSelectors",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterExecApiCmd",
    "WAWebNewsletterGatingUtils",
    "WAWebNoop",
    "WAWebPaymentLinkComponents.react",
    "WAWebPaymentLinkTrustSignalFooter.react",
    "WAWebQuotedMsgModelUtils",
    "WAWebSendStickerToActiveChatStickersAction",
    "WAWebStickerPackCollectionMd",
    "WAWebStickerPackUtils",
    "WAWebStickerStoreFlowLoadable",
    "WAWebUseBotCommands",
    "WAWebUseBotMessageWithAnimation",
    "WAWebUtilsShouldShowVideoPreview",
    "WAWebVideoLinkPreviewContainer.react",
    "WAWebVoipGatingUtils",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWamEnumTsSurface",
    "cr:17104",
    "cr:9382",
    "isStringNullOrEmpty",
    "react",
    "useWAWebModelValues",
    "useWAWebMsgValues",
    "useWAWebSendViewCount",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = { horizontalLinkPreviewLayout: { maxWidth: "x65f84u", $$css: !0 } },
      f = (e = n("cr:17104")) != null ? e : {},
      g = f.handleClickCallLink;
    function h(e) {
      var t,
        a,
        i,
        l = e.contact,
        s = e.displayAuthor,
        m = e.displayType,
        f = e.isFollowUpReply,
        h = e.msg,
        y = e.position,
        C = e.quotedMsg,
        b = e.stickerLikeBubbleContainerRef,
        v = e.theme,
        S = e.trusted,
        R,
        L,
        E,
        k = !1,
        I = null,
        T = (a = o("useWAWebMsgValues")).useMsgValues(h.id, [
          (i = o("WAWebFrontendMsgGetters")).getIsAnimatedEmoji,
        ]),
        D = T[0],
        x = a.useMsgValues(h.id, [i.getIsSingleEmoji]),
        $ = x[0],
        P = a.useMsgValues(h.id, [i.getJSONAssetForAnimatedEmoji]),
        N = P[0],
        M = o("useWAWebModelValues").useModelValues(
          r("WAWebChatPreferenceCollection").getDefault(),
          ["autoplayAnimatedImages"],
        ),
        w = M.autoplayAnimatedImages,
        A = o("useWAWebSendViewCount").useSendViewCount(h.id, {
          displayType: m,
        }),
        F = a.useMsgValues(h.id, [i.getAsUrl]),
        O = F[0];
      if (
        S === !0 &&
        (o("WAWebMsgGetters").getLinkPreview(h) || h.ctwaContext)
      ) {
        var B = r("WAWebUtilsShouldShowVideoPreview")(h);
        if (h.ctwaContext)
          R = p.jsx(r("WAWebBizCtwaContext.react"), {
            msg: h.unsafe(),
            wrapperClass: "_ahy5",
          });
        else if (B)
          R = p.jsx("div", {
            className: "_ahy5",
            children: p.jsx(r("WAWebVideoLinkPreviewContainer.react"), {
              msg: h.unsafe(),
            }),
          });
        else {
          var W = o("WAWebApiParse").parseAPICmd(
            h.matchedText,
            o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD,
          );
          if (W.resultType === o("WAWebApi").APICmd.GROUP_INVITE) {
            if (
              ((R = p.jsx("div", {
                className: "_ahy5",
                children: p.jsx(
                  o("WAWebMediaLinkPreviewContainer.react")
                    .LinkPreviewContainer,
                  { msg: h.unsafe(), displayType: m, isInvite: !0 },
                ),
              })),
              m !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY)
            ) {
              var q,
                U = o("WAWebGroupJoinModalUtils").getGroupInviteActionText({
                  inGroup: o("WAWebMsgGetters").getIsSentByMe(h),
                  groupType:
                    (q = h.inviteGrpType) != null
                      ? q
                      : o("WAWebGroupType").GroupType.DEFAULT,
                }),
                V = function (t) {
                  var e = h.matchedText;
                  o("WAWebExternalLink.react").openExternalLink(e);
                };
              L = p.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                items: [
                  { label: U, onClick: V, testid: "group-invite-link-action" },
                ],
              });
            }
          } else if (
            o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
            W.resultType === o("WAWebApi").APICmd.NEWSLETTER
          ) {
            var H = W.data.type === "view" && W.data.serverId !== void 0;
            if (
              H &&
              o("WAWebABProps").getABPropConfigValue(
                "channels_invite_link_preview_improvement_enabled",
              )
            ) {
              var G = o("WAWebMediaLinkPreviewUtils").getLinkPreviewThemes(
                  O,
                  m,
                ),
                z = G.bubbleTheme,
                j = G.linkPreviewTheme;
              ((E = z),
                (R = p.jsx("div", {
                  className: "_ahy5",
                  children: p.jsx(
                    o("WAWebMediaLinkPreviewContainer.react")
                      .LinkPreviewContainer,
                    { msg: h.unsafe(), displayType: m, theme: j },
                  ),
                })));
            } else
              R = p.jsx("div", {
                className: "_ahy5",
                children: p.jsx(
                  o("WAWebMediaLinkPreviewContainer.react")
                    .LinkPreviewContainer,
                  { msg: h.unsafe(), displayType: m, isInvite: !0 },
                ),
              });
            if (m !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY) {
              var K = W.data,
                Q = K.serverId,
                X = K.type,
                Y = o(
                  "WAWebCommonNewsletterStrings",
                ).getNewsletterLinkActionLabel(X, Q),
                J =
                  X === "view"
                    ? "newsletter-invite-link-action"
                    : "newsletter-create-action",
                Z = function (t) {
                  o("WAWebNewsletterExecApiCmd").execNewsletterApiCmd(W.data);
                };
              L = p.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                items: [{ label: Y, onClick: Z, testid: J }],
              });
            }
          } else if (W.resultType === o("WAWebApi").APICmd.CATALOG) {
            if (
              ((R = p.jsx("div", {
                className: "_ahy5",
                children: p.jsx(r("WAWebBizCatalogPreviewContainer.react"), {
                  msg: h.unsafe(),
                }),
              })),
              m !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY)
            ) {
              var ee = function (t) {
                  var e = h.matchedText;
                  o("WAWebExternalLink.react").openExternalLink(e);
                },
                te = u._(/*BTDS*/ "View catalog");
              L = p.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                items: [{ label: te, onClick: ee }],
              });
            }
          } else if ((W.resultType, O)) {
            var ne = o("WAWebMediaLinkPreviewUtils").getLinkPreviewThemes(O, m),
              re = ne.bubbleTheme,
              oe = ne.linkPreviewTheme;
            ((E = re),
              (I =
                W.resultType === o("WAWebApi").APICmd.PAYMENT_LINK
                  ? W.data.psp
                  : null));
            var ae = function () {
                o("PaymentLinkWamLogger").shouldLogReceiverEvent(h) &&
                  o("PaymentLinkWamLogger")
                    .genLogClickEvent(
                      {
                        interaction_component: o("PaymentLinkWamLogger")
                          .ClickInteractionComponent.LINK_PREVIEW,
                        msg: h,
                      },
                      I,
                    )
                    .catch(function (e) {
                      o("WALogger").WARN(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "error logging payment link message click: ",
                            "",
                          ])),
                        e,
                      );
                    });
              },
              ie = function (t) {
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                  p.jsx(
                    r("WAWebStickerStoreFlowLoadable").StickerStoreFlowLoadable,
                    {
                      stickerPackId: t,
                      onSticker: r(
                        "WAWebSendStickerToActiveChatStickersAction",
                      ),
                      msg: h.unsafe(),
                    },
                  ),
                  { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
                );
              },
              le = function () {
                var e = o("WAWebStickerPackUtils").extractStickerPackIdFromUrl(
                  h.body,
                );
                e != null &&
                  o("WAWebStickerPackCollectionMd")
                    .StickerPackCollectionMd.fetchStickerPack(e)
                    .then(function () {
                      ie(e);
                    })
                    .catch(r("WAWebNoop"));
              };
            (o("WAWebABProps").getABPropConfigValue(
              "wa_web_horizontal_link_previews",
            ) && (k = !0),
              (R = p.jsx("div", {
                className: "_ahy5",
                children: p.jsx(
                  o("WAWebMediaLinkPreviewContainer.react")
                    .LinkPreviewContainer,
                  {
                    msg: h.unsafe(),
                    displayType: m,
                    theme: oe,
                    onClick: ae,
                    horizontalLayout: k,
                  },
                ),
              })));
            var se = u._(/*BTDS*/ "View sticker pack");
            if (o("WAWebApiParse").isStickerPackURL(h.body))
              L = p.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme
                  .STICKER_PACK,
                items: [
                  {
                    label: se,
                    title: se,
                    onClick: le,
                    disabled: !1,
                    testid: "view-sticker-pack",
                  },
                ],
              });
            else if (W.resultType === o("WAWebApi").APICmd.PAYMENT_LINK)
              L = p.jsx(r("WAWebPaymentLinkComponents.react"), {
                msg: h,
                psp: W.data.psp,
              });
            else if (W.resultType === o("WAWebApi").APICmd.CALL_LINK) {
              var ue = function () {
                  var e = o("WAWebFrontendMsgGetters").getChat(h.unsafe()),
                    t = o("WAWebChatGetters").getIsGroup(e),
                    r = t
                      ? o("WAWebWamEnumLobbyEntryPointType")
                          .LOBBY_ENTRY_POINT_TYPE.CALL_LINK_GROUP_CHAT
                      : o("WAWebWamEnumLobbyEntryPointType")
                          .LOBBY_ENTRY_POINT_TYPE.CALL_LINK_INDIVIDUAL_CHAT,
                    a = g;
                  (a == null &&
                    n("cr:9382") != null &&
                    o("WAWebVoipGatingUtils").callLinksEnabled() &&
                    (a = n("cr:9382").handleClickCallLink),
                    a == null || a(W, r));
                },
                ce = u._(/*BTDS*/ "Join call");
              L = p.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                items: [
                  {
                    label: ce,
                    title: ce,
                    onClick: ue,
                    disabled: !1,
                    testid: "join-call-link",
                  },
                ],
              });
            }
          }
        }
      }
      var de = !!(
          C &&
          !h.id.fromMe &&
          o("WAWebQuotedMsgModelUtils").getQuotedMsgAdminParentGroupJid(
            h.unsafe(),
          )
        ),
        me = o("WAWebQuotedMsgModelUtils").getQuotedMsgAdminGroupJid(
          h.unsafe(),
        );
      if (de && me) {
        var pe = o("WAWebChatCollection").ChatCollection.get(me),
          _e = r("WAWebGroupMetadataCollection").get(me) || {},
          fe = _e.participants,
          ge = _e.subject,
          he = u._(/*BTDS*/ "Add to group"),
          ye = function () {
            var e = null,
              t = o("WAWebMsgGetters").getSender(h);
            if (
              (fe != null && fe.iAmAdmin()
                ? t != null &&
                  fe != null &&
                  fe.get(t) &&
                  (e = u._(
                    /*BTDS*/ '{requester-name} is already added to the group "{subgroup-name}".',
                    [
                      u._param(
                        "requester-name",
                        p.jsx(o("WAWebEmojiText.react").EmojiText, {
                          text: o("WAWebFrontendContactGetters").getDisplayName(
                            h.senderObj,
                          ),
                        }),
                      ),
                      u._param(
                        "subgroup-name",
                        p.jsx(o("WAWebEmojiText.react").EmojiText, {
                          text: ge,
                        }),
                      ),
                    ],
                  ))
                : (e = u._(
                    /*BTDS*/ "You're no longer a group admin. Only group admins can add members to the group.",
                  )),
              e)
            ) {
              o("WAWebModalManager").ModalManager.open(
                p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                  onOK: o("WAWebModalManager").closeModalManager,
                  tsNavigationData: {
                    surface: "unknown",
                    viewName: "message-text",
                  },
                  children: e,
                }),
              );
              return;
            }
            pe &&
              o("WAWebModifyParticipantsGroupAction")
                .addParticipants(pe, [h.senderObj])
                .catch(r("WAWebNoop"));
          };
        L = p.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
          items: [{ label: he, onClick: ye }],
        });
      }
      var Ce = o("WAWebEmoji").EmojiUtil.matchLargeEmojiPattern(h.body),
        be = o("WAWebUseBotCommands").useBotCommands(h),
        ve = o("WAWebUseBotMessageWithAnimation").useBotMessageWithAnimation(h),
        Se = function () {
          o("PaymentLinkWamLogger").shouldLogReceiverEvent(h) &&
            o("PaymentLinkWamLogger")
              .genLogClickEvent(
                {
                  interaction_component: o("PaymentLinkWamLogger")
                    .ClickInteractionComponent.LINK,
                  msg: h,
                },
                I,
              )
              .catch(function (e) {
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "error logging payment link message click: ",
                      "",
                    ])),
                  e,
                );
              });
        },
        Re = p.jsx(r("WAWebMessageTextBody.react"), {
          msg: h,
          displayType: m,
          handleLinkClick: Se,
          trusted: S,
          botCommands: be,
          botMsgTextToRender: ve,
        }),
        Le,
        Ee;
      if (o("WAWebMsgGetters").getSupportsMessageFooter(h)) {
        var ke = h.isDynamicReplyButtonsMsg
            ? o("WAWebFormatHeaderFooter").enableHeaderAndFooterFormatting(
                o("WAWebMsgLinks").getHeaderLinks(h.unsafe()),
                S === !0,
              )
            : {},
          Ie = ke.formatters,
          Te = ke.selectable;
        ((Le = r("isStringNullOrEmpty")(h.title)
          ? null
          : p.jsx("div", {
              className: "_ahy7",
              children: p.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: h.title,
                dirMismatch:
                  o("WAWebFrontendMsgGetters").getRtl(h) !==
                  r("WAWebL10N").isRTL(),
                direction: o("WAWebFrontendMsgGetters").getDir(h),
                selectable: Te,
                formatters: Ie,
              }),
            })),
          (Ee = p.jsx(r("WAWebBizTemplateMessageFooter.react"), {
            dir: o("WAWebFrontendMsgGetters").getDir(h),
            footer: h.footer,
            isShown: o("WAWebMsgGetters").getSupportsMessageFooter(h),
            msg: h.unsafe(),
            rtl: o("WAWebFrontendMsgGetters").getRtl(h),
            trusted: S,
            type: h.type,
          })));
      } else
        o(
          "PaymentLinkPreviewWithTrustSignalsFeature",
        ).shouldShowPaymentLinkTrustSignals(h) &&
          (Ee = p.jsx(r("WAWebPaymentLinkTrustSignalFooter.react"), {
            dir: o("WAWebFrontendMsgGetters").getDir(h),
            msg: h.unsafe(),
            rtl: o("WAWebFrontendMsgGetters").getRtl(h),
            type: h.type,
          }));
      var De =
          m !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY &&
          !o("WAWebMsgGetters").getIsPSA(h) &&
          !Ce &&
          !o("WAWebMsgGetters").getActiveBotMsgStreamingInProgress(h),
        xe;
      C && (xe = p.jsx("div", { className: "_ahy0", children: C }));
      var $e = o("WAWebMsgSelectors").showForwarded(h),
        Pe = o("WAWebMsgLinks").getSuspiciousLinks(h.unsafe()).length > 0,
        Ne = o("useWAWebMsgValues").useMsgValues(h.id, [
          o("WAWebFrontendMsgGetters").getHasTemplateButtons,
        ]),
        Me = Ne[0],
        we =
          L != null ||
          !!Me ||
          !!h.isDynamicReplyButtonsMsg ||
          o("WAWebMsgGetters").getIsBotPluginCarouselMsg(h) ||
          o("WAWebMsgGetters").getIsBotSearchResponse(h),
        Ae;
      if (
        (o("WAWebMsgGetters").getIsBotSearchResponse(h)
          ? (Ae = p.jsx("div", {
              className: "_aoq3",
              children: p.jsx(o("WAWebMessageMeta.react").Meta, {
                msg: h,
                isFollowUpReply: f,
              }),
            }))
          : we &&
            (Ae = p.jsx("div", {
              className: "x10l6tqk xtijo5x x48lskh",
              children: p.jsx(o("WAWebMessageMeta.react").Meta, {
                msg: h,
                isFollowUpReply: f,
              }),
            })),
        w &&
          Ce &&
          D &&
          N != null &&
          o("WAWebAnimatedEmojiGatingUtils").isAnimatedEmojiEnabled())
      )
        return p.jsx(r("WAWebMessageAnimatedEmoji.react"), {
          msg: h,
          asset: N,
          quotedMsg: C,
          displayAuthor: s,
          displayType: m,
          stickerLikeBubbleContainerRef: b,
          position: y,
        });
      var Fe = !(
        o("WAWebMsgGetters").getForwardedNewsletterMessageInfo(h) != null &&
        o("WAWebNewsletterGatingUtils").isNewsletterForwardBottomButtonEnabled()
      );
      if (Ce && $ != null)
        return p.jsx(r("WAWebMessageStaticSingleEmoji.react"), {
          emoji: $,
          msg: h,
          quotedMsg: C,
          displayAuthor: s,
          displayType: m,
          stickerLikeBubbleContainerRef: b,
          position: y,
        });
      var Oe = p.jsx(r("WAWebMessageTextBubble.react"), {
        msg: h,
        displayType: m,
        displayAuthor: s,
        hideMeta: we,
        theme: E,
        xstyle: k && E === "portrait" && _.horizontalLinkPreviewLayout,
        useFixedWidth: h.isDynamicReplyButtonsMsg,
        isFollowUpReply: f,
        children: p.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
          className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            ((t = {}), (t._ahy1 = s), (t._ahy2 = $e), (t._ahy3 = Pe), t),
          ),
          contact: h.senderObj,
          msg: h.unsafe(),
          children: [
            xe,
            !h.ctwaContext &&
              p.jsx(o("WAWebBizSuspiciousLabel.react").SuspiciousLabel, {
                msg: h.unsafe(),
                displayType: m,
              }),
            R,
            p.jsxs(r("WAWebMessageSpacerText.react"), {
              msg: h.unsafe(),
              isFollowUpReply: f,
              spacer:
                h.isFromTemplate || h.isDynamicReplyButtonsMsg
                  ? De && !h.footer
                  : De,
              "data-id": h.id,
              children: [Le, Re, Ee, Ae],
            }),
            Fe && L,
          ],
        }),
      });
      return p.jsx("div", { ref: A, children: Oe });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
