__d(
  "useWAWebConversationPanelChatActionListeners",
  [
    "fbt",
    "WALogger",
    "WANullthrows",
    "WAWebABProps",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebAttachMediaCollection",
    "WAWebAttachMediaFlowLoadable",
    "WAWebBizCtwaPreviewFlowLoadable",
    "WAWebBotBaseGating",
    "WAWebChatFlowTypes",
    "WAWebChatGetters",
    "WAWebChatPreferenceCollection",
    "WAWebChatSearchDrawer.react",
    "WAWebChatThemeDrawer.react",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebContactMsgInfoFlowLoadable",
    "WAWebDefaultEphemeralityDrawer.react",
    "WAWebDrawerManager",
    "WAWebDrawerManagerContext",
    "WAWebEphemeralDrawer.react",
    "WAWebErrorBoundary.react",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGalaxyFlowQPLLoggerUtils",
    "WAWebGalaxyFlowsLoadable.react",
    "WAWebGroupMsgInfoFlowLoadable",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebKeyboardTabUtils",
    "WAWebLimitSharingDrawer.react",
    "WAWebMediaMissingModal.react",
    "WAWebMediaViewerFlowLoadable",
    "WAWebMerchantDetailsDrawerLoadable",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebRichTextInputConst",
    "WAWebSendStickerToActiveChatStickersAction",
    "WAWebStickerStoreFlowLoadable",
    "WAWebStreamModel",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebVerificationDrawerLoadable",
    "WAWebWamEnumDisappearingModeEntryPointType",
    "WAWebWamEnumMediaPickerOriginType",
    "WAWebWamEnumProfileEntryPoint",
    "WAWebWidFactory",
    "react",
    "useWAWebListener",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d() {
      var t,
        n,
        a = r("useWAWebUIM")(),
        i = o("WAWebDrawerManagerContext").useDrawerManagerContext("right"),
        l = o("WAWebDrawerManagerContext").useDrawerManagerContext("mid"),
        u = function (t, n, r, i, l, s, u, d) {
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
              ? {
                  descriptorType: "info_flow",
                  chat: t,
                  showFullGroupDescription: n,
                  scrollToParticipantList: r,
                  profileEntryPoint: o("WAWebWamEnumProfileEntryPoint")
                    .PROFILE_ENTRY_POINT.CHAT_MENU,
                  sourceGroupChatOrNewsletter: i,
                  focusNewsletterDescriptionOnMount: l,
                  focusGroupSubjectOnMount: s,
                  focusGroupDescriptionOnMount: u,
                  threadId: d,
                }
              : c.jsx(
                  o("WAWebInfoFlowLoadable").InfoFlowLoadable,
                  {
                    chat: t,
                    showFullGroupDescription: n,
                    scrollToParticipantList: r,
                    profileEntryPoint: o("WAWebWamEnumProfileEntryPoint")
                      .PROFILE_ENTRY_POINT.CHAT_MENU,
                    sourceGroupChatOrNewsletter: i,
                    focusNewsletterDescriptionOnMount: l,
                    focusGroupSubjectOnMount: s,
                    focusGroupDescriptionOnMount: u,
                    threadId: d,
                  },
                  "info-" + t.id.toString(),
                ),
            {
              transition: "slide-left",
              uim: a,
              focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              noFocus: !0,
            },
          );
        },
        d = function (t) {
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
              ? {
                  descriptorType: "info_flow",
                  chat: t,
                  initialStep:
                    o("WAWebInfoFlowStep").InfoFlowStep.DeleteNewsletter,
                }
              : c.jsx(
                  o("WAWebInfoFlowLoadable").InfoFlowLoadable,
                  {
                    chat: t,
                    initialStep:
                      o("WAWebInfoFlowStep").InfoFlowStep.DeleteNewsletter,
                  },
                  "delete-newsletter-" + t.id.toString(),
                ),
            {
              transition: "slide-left",
              uim: a,
              focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              noFocus: !0,
            },
          );
        },
        m = function (t) {
          var e = t.lid,
            n = t.wid;
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
              ? {
                  descriptorType: "verification",
                  lid: e,
                  contact: o(
                    "WAWebContactCollection",
                  ).ContactCollection.assertGet(n),
                  isFirstLevel: !0,
                }
              : c.jsx(
                  r("WAWebVerificationDrawerLoadable")
                    .VerificationDrawerLoadable,
                  {
                    lid: e,
                    contact: o(
                      "WAWebContactCollection",
                    ).ContactCollection.assertGet(n),
                    isFirstLevel: !0,
                  },
                ),
            {
              transition: "slide-left",
              uim: a,
              focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            },
          );
        },
        p = function (t) {
          if (
            o("WAWebStreamModel").Stream.displayInfo ===
            o("WAWebStreamModel").StreamInfo.NORMAL
          ) {
            var e;
            o("WAWebBotBaseGating").isBotEnabled() &&
            (e = t.invokedBotWid) != null &&
            e.isBot()
              ? o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                  o(
                    "WAWebAdaptiveLayoutGatingUtils",
                  ).shouldUseDrawerDescriptor()
                    ? { descriptorType: "group_msg_info", msg: t }
                    : c.jsx(
                        o("WAWebGroupMsgInfoFlowLoadable")
                          .GroupMsgInfoFlowLoadable,
                        { msg: t },
                      ),
                  { transition: "slide-left", uim: a },
                )
              : o("WAWebFrontendChatGetters").getKind(
                    o("WAWebFrontendMsgGetters").getChat(t),
                  ) === o("WAWebChatFlowTypes").ChatKindType.Chat
                ? o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                    o(
                      "WAWebAdaptiveLayoutGatingUtils",
                    ).shouldUseDrawerDescriptor()
                      ? { descriptorType: "contact_msg_info", msg: t }
                      : c.jsx(
                          o("WAWebContactMsgInfoFlowLoadable")
                            .ContactMsgInfoFlowLoadable,
                          { msg: t },
                        ),
                    { transition: "slide-left", uim: a },
                  )
                : o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                    o(
                      "WAWebAdaptiveLayoutGatingUtils",
                    ).shouldUseDrawerDescriptor()
                      ? { descriptorType: "group_msg_info", msg: t }
                      : c.jsx(
                          o("WAWebGroupMsgInfoFlowLoadable")
                            .GroupMsgInfoFlowLoadable,
                          { msg: t },
                        ),
                    { transition: "slide-left", uim: a },
                  );
          } else
            o("WAWebToastManager").ToastManager.open(
              c.jsx(o("WAWebToast.react").Toast, {
                msg: s._(
                  /*BTDS*/ "Couldn't display message info. Try again later.",
                ),
                id: o("WAWebToast.react").genId("msg_info_failed"),
              }),
            );
        },
        _ = function (t, n, r) {
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            c.jsx(
              o("WAWebBizCtwaPreviewFlowLoadable").CtWAAdPreviewFlowLoadable,
              { msg: t, onClose: n },
            ),
            { transition: "slide-left", uim: a, onEnterAnimationComplete: r },
          );
        },
        f = function (t, n, r, l) {
          var e,
            s = (e = i.existsDrawer()) != null ? e : !1;
          (s &&
            o(
              "WAWebGalaxyFlowQPLLoggerUtils",
            ).clearAllActiveWaeQPLMarkerInstances(),
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              c.jsx(
                o("WAWebGalaxyFlowsLoadable.react").WAWebGalaxyFlowsLoadable,
                {
                  chat: t,
                  messageData: n,
                  msg: r,
                  hasClearedActiveQPLMarker: s,
                  onCancel: function () {
                    (l(),
                      o("WAWebDrawerManager").DrawerManager.closeDrawerRight());
                  },
                },
              ),
              { transition: "flow-transition-drawer-push", uim: a },
            ));
        },
        g = function (n) {
          var t,
            i,
            s = n.animationName,
            u = n.attachments,
            d = n.chat,
            m = n.fileOrigin,
            p = n.initCaption,
            _ = n.isQuestion,
            f = n.onCancel,
            g = n.onComplete,
            h = n.onSend,
            y = n.openTrigger,
            C = n.questionReplyQuotedMessage,
            b = n.sendAsSticker,
            v = n.threadId,
            S = function () {
              var t = d.attachMediaContents;
              t &&
                u &&
                (m
                  ? t.processAttachmentsForChat(u, m, d)
                  : (o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "ChatActionListener:onAttachMediaDrawer fileOrigin is not specified, fallback to default",
                        ])),
                    ),
                    t.processAttachmentsForChat(
                      u,
                      o("WAWebWamEnumMediaPickerOriginType")
                        .MEDIA_PICKER_ORIGIN_TYPE.CHAT_PHOTO_LIBRARY,
                      d,
                    )));
            },
            R = (t = d.getComposeContents()) == null ? void 0 : t.text;
          if (R != null && o("WAWebBotBaseGating").isBotEnabled())
            for (
              var L = new RegExp(
                  o("WAWebRichTextInputConst").userJidRegexStr,
                  "g",
                ),
                E = L.exec(R);
              E != null;
            ) {
              var k = o("WAWebWidFactory").createWid(E[1]);
              if (k.isBot()) return;
              E = L.exec(R);
            }
          var I = (i = l.existsDrawer()) != null ? i : !1;
          if (!I) {
            d.attachMediaContents ||
              d.setAttachMediaContents(
                new (r("WAWebAttachMediaCollection"))({
                  chatParticipantCount: d.getParticipantCount(),
                }),
              );
            var T = r("WANullthrows")(d.attachMediaContents);
            o("WAWebDrawerManager").DrawerManager.openDrawerMid(
              c.jsx(o("WAWebAttachMediaFlowLoadable").AttachMediaFlowLoadable, {
                chat: d,
                onComplete: g,
                onSend: h,
                onCancel: f,
                onDismiss: function () {
                  return o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
                },
                onRender: S,
                initCaption: p,
                mediaCollection: T,
                sendAsSticker: b,
                openTrigger: y,
                isQuestion: _,
                questionReplyQuotedMessage: C,
                threadId: v,
              }),
              {
                transition: s || "slide-up",
                uim: a,
                noFocus: !0,
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              },
            );
          }
        },
        h = function (t) {
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
              ? { descriptorType: "chat_search", chat: t }
              : c.jsx(r("WAWebChatSearchDrawer.react"), { chat: t }),
            { transition: "slide-left", uim: a },
          );
        },
        y = function (t) {
          var e = t.currentTime,
            n = t.getZoomNode,
            i = t.highlightedMsgIds,
            l = t.msg,
            s = t.shouldShowAllMedia,
            u = t.shouldShowNumberText;
          o("WAWebMsgCollection").MsgCollection.get(l.id)
            ? o("WAWebModalManager").ModalManager.openMedia(
                c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                  name: "media-viewer-flow",
                  children: c.jsx(
                    o("WAWebMediaViewerFlowLoadable").MediaViewerFlowLoadable,
                    {
                      msg: l,
                      startTime: e,
                      getZoomNode: n,
                      highlightedMsgIds: i,
                      shouldShowNumberText: u,
                      shouldShowAllMedia: s,
                    },
                  ),
                }),
                { transition: "media-viewer", uim: r("WANullthrows")(a) },
              )
            : o("WAWebModalManager").ModalManager.open(
                c.jsx(r("WAWebMediaMissingModal.react"), { msg: l }),
              );
        },
        C = function (t) {
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            c.jsx(r("WAWebDefaultEphemeralityDrawer.react"), {
              onClose: function () {
                return o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
              },
              entryPoint: t,
            }),
            {
              transition: "slide-left",
              uim: a,
              focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            },
          );
        },
        b = function (t, n, i) {
          var e = o("WAWebChatGetters").getIsGroup(t)
            ? o("WAWebWamEnumDisappearingModeEntryPointType")
                .DISAPPEARING_MODE_ENTRY_POINT_TYPE
                .GROUP_CHAT_DISAPPEARING_MESSAGES_SETTING
            : o("WAWebWamEnumDisappearingModeEntryPointType")
                .DISAPPEARING_MODE_ENTRY_POINT_TYPE
                .INDIVIDUAL_CHAT_DISAPPEARING_MESSAGES_SETTING;
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            c.jsx(r("WAWebEphemeralDrawer.react"), {
              chat: t,
              showNux: n,
              entryPoint: i,
              onDDMSettingsClick: function () {
                return C(e);
              },
            }),
            {
              transition: "slide-left",
              uim: a,
              focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            },
          );
        },
        v = function (t) {
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            c.jsx(r("WAWebChatThemeDrawer.react"), {
              chat: t,
              onClose: function () {
                return o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
              },
            }),
            {
              transition: "slide-left",
              uim: a,
              focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            },
          );
        },
        S = function (t) {
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            c.jsx(
              o("WAWebMerchantDetailsDrawerLoadable")
                .MerchantDetailsDrawerLoadable,
              {
                contactId: t,
                onClose: function () {
                  return o(
                    "WAWebDrawerManager",
                  ).DrawerManager.closeDrawerRight();
                },
              },
              "legal-entity-details",
            ),
            {
              transition: "slide-left",
              uim: a,
              focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            },
          );
        },
        R = function (t) {
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            c.jsx(r("WAWebStickerStoreFlowLoadable").StickerStoreFlowLoadable, {
              stickerPackId: t,
              onSticker: r("WAWebSendStickerToActiveChatStickersAction"),
            }),
            {
              transition: "slide-left",
              uim: a,
              focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            },
          );
        },
        L = function (t) {
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            c.jsx(r("WAWebLimitSharingDrawer.react"), {
              chat: t,
              onClose: function () {
                return o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
              },
            }),
            {
              transition: "slide-left",
              uim: a,
              focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            },
          );
        };
      ((t = o("useWAWebListener")).useListener(
        r("WAWebChatPreferenceCollection"),
        "wallpaper_drawer_open",
        function (e) {
          o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") &&
            e &&
            o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
        },
      ),
        t.useListener((n = o("WAWebCmd")).Cmd, "chat_info_drawer", u),
        t.useListener(n.Cmd, "delete_newsletter_drawer", d),
        t.useListener(n.Cmd, "msg_info_drawer", p),
        t.useListener(n.Cmd, "chat_search", h),
        t.useListener(n.Cmd, "attach_media_drawer", g),
        t.useListener(n.Cmd, "verification_drawer", m),
        t.useListener(n.Cmd, "media_viewer_modal", y),
        t.useListener(n.Cmd, "ephemeral_drawer", b),
        t.useListener(n.Cmd, "chat_theme_drawer", v),
        t.useListener(n.Cmd, "merchant_details_drawer", S),
        t.useListener(n.Cmd, "open_sticker_pack", R),
        t.useListener(n.Cmd, "ctwa_ad_preview_drawer", _),
        t.useListener(n.Cmd, "limit_sharing_drawer", L),
        t.useListener(n.Cmd, "galaxy_flows_drawer", f));
    }
    l.default = d;
  },
  226,
);
