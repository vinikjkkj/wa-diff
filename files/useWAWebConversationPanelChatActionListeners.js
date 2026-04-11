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
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d() {
      var t = o("react-compiler-runtime").c(33),
        n = r("useWAWebUIM")(),
        a = o("WAWebDrawerManagerContext").useDrawerManagerContext("right"),
        i = o("WAWebDrawerManagerContext").useDrawerManagerContext("mid"),
        l;
      t[0] !== n
        ? ((l = function (t, r, a, i, l, s, u, d) {
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? {
                    descriptorType: "info_flow",
                    chat: t,
                    showFullGroupDescription: r,
                    scrollToParticipantList: a,
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
                      showFullGroupDescription: r,
                      scrollToParticipantList: a,
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
                uim: n,
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                noFocus: !0,
              },
            );
          }),
          (t[0] = n),
          (t[1] = l))
        : (l = t[1]);
      var u = l,
        d;
      t[2] !== n
        ? ((d = function (t) {
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
                uim: n,
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                noFocus: !0,
              },
            );
          }),
          (t[2] = n),
          (t[3] = d))
        : (d = t[3]);
      var y = d,
        C;
      t[4] !== n
        ? ((C = function (t) {
            var e = t.lid,
              a = t.wid;
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? {
                    descriptorType: "verification",
                    lid: e,
                    contact: o(
                      "WAWebContactCollection",
                    ).ContactCollection.assertGet(a),
                    isFirstLevel: !0,
                  }
                : c.jsx(
                    r("WAWebVerificationDrawerLoadable")
                      .VerificationDrawerLoadable,
                    {
                      lid: e,
                      contact: o(
                        "WAWebContactCollection",
                      ).ContactCollection.assertGet(a),
                      isFirstLevel: !0,
                    },
                  ),
              {
                transition: "slide-left",
                uim: n,
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              },
            );
          }),
          (t[4] = n),
          (t[5] = C))
        : (C = t[5]);
      var b = C,
        v;
      t[6] !== n
        ? ((v = function (t) {
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
                    { transition: "slide-left", uim: n },
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
                      { transition: "slide-left", uim: n },
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
                      { transition: "slide-left", uim: n },
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
          }),
          (t[6] = n),
          (t[7] = v))
        : (v = t[7]);
      var S = v,
        R;
      t[8] !== n
        ? ((R = function (t, r, a) {
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              c.jsx(
                o("WAWebBizCtwaPreviewFlowLoadable").CtWAAdPreviewFlowLoadable,
                { msg: t, onClose: r },
              ),
              { transition: "slide-left", uim: n, onEnterAnimationComplete: a },
            );
          }),
          (t[8] = n),
          (t[9] = R))
        : (R = t[9]);
      var L = R,
        E;
      t[10] !== a || t[11] !== n
        ? ((E = function (t, r, i, l) {
            var e,
              s = (e = a.existsDrawer()) != null ? e : !1;
            (s &&
              o(
                "WAWebGalaxyFlowQPLLoggerUtils",
              ).clearAllActiveWaeQPLMarkerInstances(),
              o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                c.jsx(
                  o("WAWebGalaxyFlowsLoadable.react").WAWebGalaxyFlowsLoadable,
                  {
                    chat: t,
                    messageData: r,
                    msg: i,
                    hasClearedActiveQPLMarker: s,
                    onCancel: function () {
                      (l(),
                        o(
                          "WAWebDrawerManager",
                        ).DrawerManager.closeDrawerRight());
                    },
                  },
                ),
                { transition: "flow-transition-drawer-push", uim: n },
              ));
          }),
          (t[10] = a),
          (t[11] = n),
          (t[12] = E))
        : (E = t[12]);
      var k = E,
        I;
      t[13] !== i || t[14] !== n
        ? ((I = function (a) {
            var t,
              l,
              s = a.animationName,
              u = a.attachments,
              d = a.chat,
              m = a.fileOrigin,
              p = a.initCaption,
              _ = a.isQuestion,
              f = a.onCancel,
              g = a.onComplete,
              y = a.onSend,
              C = a.openTrigger,
              b = a.questionReplyQuotedMessage,
              v = a.sendAsSticker,
              S = a.threadId,
              R = function () {
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
              L = (t = d.getComposeContents()) == null ? void 0 : t.text;
            if (L != null && o("WAWebBotBaseGating").isBotEnabled())
              for (
                var E = new RegExp(
                    o("WAWebRichTextInputConst").userJidRegexStr,
                    "g",
                  ),
                  k = E.exec(L);
                k != null;
              ) {
                var I = o("WAWebWidFactory").createWid(k[1]);
                if (I.isBot()) return;
                k = E.exec(L);
              }
            var T = (l = i.existsDrawer()) != null ? l : !1;
            if (!T) {
              d.attachMediaContents ||
                d.setAttachMediaContents(
                  new (r("WAWebAttachMediaCollection"))({
                    chatParticipantCount: d.getParticipantCount(),
                  }),
                );
              var D = r("WANullthrows")(d.attachMediaContents);
              o("WAWebDrawerManager").DrawerManager.openDrawerMid(
                c.jsx(
                  o("WAWebAttachMediaFlowLoadable").AttachMediaFlowLoadable,
                  {
                    chat: d,
                    onComplete: g,
                    onSend: y,
                    onCancel: f,
                    onDismiss: h,
                    onRender: R,
                    initCaption: p,
                    mediaCollection: D,
                    sendAsSticker: v,
                    openTrigger: C,
                    isQuestion: _,
                    questionReplyQuotedMessage: b,
                    threadId: S,
                  },
                ),
                {
                  transition: s || "slide-up",
                  uim: n,
                  noFocus: !0,
                  focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                },
              );
            }
          }),
          (t[13] = i),
          (t[14] = n),
          (t[15] = I))
        : (I = t[15]);
      var T = I,
        D;
      t[16] !== n
        ? ((D = function (t) {
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? { descriptorType: "chat_search", chat: t }
                : c.jsx(r("WAWebChatSearchDrawer.react"), { chat: t }),
              { transition: "slide-left", uim: n },
            );
          }),
          (t[16] = n),
          (t[17] = D))
        : (D = t[17]);
      var x = D,
        $;
      t[18] !== n
        ? (($ = function (t) {
            var e = t.currentTime,
              a = t.getZoomNode,
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
                        getZoomNode: a,
                        highlightedMsgIds: i,
                        shouldShowNumberText: u,
                        shouldShowAllMedia: s,
                      },
                    ),
                  }),
                  { transition: "media-viewer", uim: r("WANullthrows")(n) },
                )
              : o("WAWebModalManager").ModalManager.open(
                  c.jsx(r("WAWebMediaMissingModal.react"), { msg: l }),
                );
          }),
          (t[18] = n),
          (t[19] = $))
        : ($ = t[19]);
      var P = $,
        N;
      t[20] !== n
        ? ((N = function (t) {
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              c.jsx(r("WAWebDefaultEphemeralityDrawer.react"), {
                onClose: g,
                entryPoint: t,
              }),
              {
                transition: "slide-left",
                uim: n,
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              },
            );
          }),
          (t[20] = n),
          (t[21] = N))
        : (N = t[21]);
      var M = N,
        w;
      t[22] !== M || t[23] !== n
        ? ((w = function (t, a, i) {
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
                showNux: a,
                entryPoint: i,
                onDDMSettingsClick: function () {
                  return M(e);
                },
              }),
              {
                transition: "slide-left",
                uim: n,
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              },
            );
          }),
          (t[22] = M),
          (t[23] = n),
          (t[24] = w))
        : (w = t[24]);
      var A = w,
        F;
      t[25] !== n
        ? ((F = function (t) {
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              c.jsx(r("WAWebChatThemeDrawer.react"), { chat: t, onClose: f }),
              {
                transition: "slide-left",
                uim: n,
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              },
            );
          }),
          (t[25] = n),
          (t[26] = F))
        : (F = t[26]);
      var O = F,
        B;
      t[27] !== n
        ? ((B = function (t) {
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              c.jsx(
                o("WAWebMerchantDetailsDrawerLoadable")
                  .MerchantDetailsDrawerLoadable,
                { contactId: t, onClose: _ },
                "legal-entity-details",
              ),
              {
                transition: "slide-left",
                uim: n,
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              },
            );
          }),
          (t[27] = n),
          (t[28] = B))
        : (B = t[28]);
      var W = B,
        q;
      t[29] !== n
        ? ((q = function (t) {
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              c.jsx(
                r("WAWebStickerStoreFlowLoadable").StickerStoreFlowLoadable,
                {
                  stickerPackId: t,
                  onSticker: r("WAWebSendStickerToActiveChatStickersAction"),
                },
              ),
              {
                transition: "slide-left",
                uim: n,
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              },
            );
          }),
          (t[29] = n),
          (t[30] = q))
        : (q = t[30]);
      var U = q,
        V;
      t[31] !== n
        ? ((V = function (t) {
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              c.jsx(r("WAWebLimitSharingDrawer.react"), {
                chat: t,
                onClose: p,
              }),
              {
                transition: "slide-left",
                uim: n,
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              },
            );
          }),
          (t[31] = n),
          (t[32] = V))
        : (V = t[32]);
      var H = V;
      (o("useWAWebListener").useListener(
        r("WAWebChatPreferenceCollection"),
        "wallpaper_drawer_open",
        m,
      ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "chat_info_drawer",
          u,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "delete_newsletter_drawer",
          y,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "msg_info_drawer",
          S,
        ),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "chat_search", x),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "attach_media_drawer",
          T,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "verification_drawer",
          b,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "media_viewer_modal",
          P,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "ephemeral_drawer",
          A,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "chat_theme_drawer",
          O,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "merchant_details_drawer",
          W,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "open_sticker_pack",
          U,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "ctwa_ad_preview_drawer",
          L,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "limit_sharing_drawer",
          H,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "galaxy_flows_drawer",
          k,
        ));
    }
    function m(e) {
      o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") &&
        e &&
        o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
    }
    function p() {
      return o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
    }
    function _() {
      return o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
    }
    function f() {
      return o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
    }
    function g() {
      return o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
    }
    function h() {
      return o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
    }
    l.default = d;
  },
  226,
);
