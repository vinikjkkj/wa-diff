__d(
  "WAWebMediaEditorForChat.react",
  [
    "WAWebAiModeSelector.react",
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebMediaEditor.react",
    "WAWebMediaEditorCaptionInput.react",
    "WAWebMediaEditorEnumsThemes",
    "WAWebMediaGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterWamoSubMessageType",
    "WAWebNewsletterWamoSubMessageTypePopup.react",
    "WAWebNewsletterWamoSubUtils",
    "WAWebQuotedMessageUserJourneyLogger",
    "WAWebUserPrefsMeUser",
    "react",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c(e, t, n) {
      return function (o) {
        return s.jsx(
          r("WAWebMediaEditorCaptionInput.react"),
          babelHelpers.extends({ chat: e }, o, {
            placeholderText: t,
            modeSelectorElement: n,
          }),
        );
      };
    }
    function d(e) {
      var t,
        n = e.allowMultipleMedia,
        a = e.chat,
        i = e.hideFooter,
        l = e.initCaption,
        d = e.isNewsletterStatus,
        m = e.isSubmitDisabled,
        p = e.maxCaptionLength,
        _ = e.maxNumberOfMedia,
        f = e.mediaCollection,
        g = e.mimes,
        h = e.newsletterWid,
        y = e.onAudienceSelectorClicked,
        C = e.onClose,
        b = e.onDropText,
        v = e.onRender,
        S = e.onSendMedia,
        R = e.openTrigger,
        L = e.placeholderText,
        E = e.ref,
        k = e.renderSubmitAccessory,
        I = e.sendAsSticker,
        T = e.setStatusPostingPrivacyConfig,
        D = e.statusPostingPrivacyConfig,
        x = e.theme,
        $ = e.threadId,
        P = e.toolbarContainer,
        N = e.tsNavigationData,
        M =
          !a.contact.isEnterprise &&
          !o("WAWebUserPrefsMeUser").isMeAccount(a.contact.id) &&
          !I,
        w =
          (t = o("useWAWebChatValues").useOptionalChatValues(a.id, [
            o("WAWebChatGetters").getIsNewsletter,
            o("WAWebFrontendChatGetters").getNewsletterMetadata,
            o("WAWebFrontendChatGetters").getComposeQuotedMsg,
          ])) != null
            ? t
            : [!1, null, null],
        A = w[0],
        F = w[1],
        O = w[2],
        B = u(null),
        W = B[0],
        q = B[1],
        U = function (t, n) {
          return f.processAttachmentsForChat(t, n, a, _);
        },
        V = function (t, n, r) {
          if (
            A &&
            o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(
              F,
            ) &&
            x !== o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isWamoSubCreatorExperienceSupported()
          ) {
            var e = function (r) {
              (q(null),
                S(
                  t,
                  babelHelpers.extends({}, n, {
                    isWamoSub:
                      r ===
                      o("WAWebNewsletterWamoSubMessageType")
                        .NewsletterWamoSubMessageType.WamoSub
                        ? !0
                        : void 0,
                  }),
                ));
            };
            q({ popupAnchorEl: r, handleSelect: e });
            return;
          }
          (S(t, babelHelpers.extends({}, n)),
            O != null &&
              o(
                "WAWebQuotedMessageUserJourneyLogger",
              ).QuotedMessageUserJourneyLogger.quotedMessageSent(a.id));
        },
        H =
          o("WAWebBotUtils").isMetaAiBot(a.id) &&
          o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled()
            ? s.jsx(r("WAWebAiModeSelector.react"), {
                chat: a,
                isInteractive:
                  o("WAWebBotGating").isAiModeSelectorInteractive(),
                threadId: $,
              })
            : null;
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx(o("WAWebMediaEditor.react").MediaEditor, {
            ref: E,
            canViewOnce: M,
            sendAsSticker: I,
            theme: x,
            onClose: C,
            onRender: v,
            hdEligible: !A,
            mediaCollection: f,
            initCaption: l,
            onDropText: b,
            onSendMedia: V,
            onAudienceSelectorClicked: y,
            statusPostingPrivacyConfig: D,
            setStatusPostingPrivacyConfig: T,
            newsletterWid: h,
            isNewsletterStatus: d,
            tsNavigationData: N,
            threadId: $,
            allowMultipleMedia: n,
            maxNumberOfMedia:
              _ != null
                ? _
                : o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(
                    f.getPreviewableMedias().length,
                    a.id,
                  ),
            mimes: g,
            maxCaptionLength: p,
            openTrigger: R,
            onProcessAttachments: U,
            renderCaptionInput: c(a, L, H),
            hideFooter: i,
            toolbarContainer: P,
            renderSubmitAccessory: k,
            isSubmitDisabled: m,
          }),
          W != null &&
            x !== o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL &&
            s.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
              handleSelect: W.handleSelect,
              popupAnchorEl: W.popupAnchorEl,
              onDismiss: function () {
                return q(null);
              },
            }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.MediaEditorForChat = d));
  },
  98,
);
