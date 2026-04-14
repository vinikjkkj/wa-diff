__d(
  "WAWebMediaEditorForChat.react",
  [
    "WAWebAiModeSelector.react",
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebBotMultiModalToasts",
    "WAWebBotMultiModalUtils",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebFileUtils",
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
    "WAWebStateUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebChatValues",
    "useWAWebListener",
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
        a = e.allowMultipleMedia,
        i = e.chat,
        l = e.hideFooter,
        d = e.initCaption,
        m = e.isNewsletterStatus,
        p = e.isSubmitDisabled,
        _ = e.maxCaptionLength,
        f = e.maxNumberOfMedia,
        g = e.mediaCollection,
        h = e.mimes,
        y = e.newsletterWid,
        C = e.onAudienceSelectorClicked,
        b = e.onClose,
        v = e.onDropText,
        S = e.onRender,
        R = e.onSendMedia,
        L = e.openTrigger,
        E = e.placeholderText,
        k = e.ref,
        I = e.renderSubmitAccessory,
        T = e.sendAsSticker,
        D = e.setStatusPostingPrivacyConfig,
        x = e.statusPostingPrivacyConfig,
        $ = e.theme,
        P = e.threadId,
        N = e.toolbarContainer,
        M = e.tsNavigationData,
        w =
          !i.contact.isEnterprise &&
          !o("WAWebUserPrefsMeUser").isMeAccount(i.contact.id) &&
          !T,
        A =
          (t = o("useWAWebChatValues").useOptionalChatValues(i.id, [
            o("WAWebChatGetters").getIsNewsletter,
            o("WAWebFrontendChatGetters").getNewsletterMetadata,
            o("WAWebFrontendChatGetters").getComposeQuotedMsg,
          ])) != null
            ? t
            : [!1, null, null],
        F = A[0],
        O = A[1],
        B = A[2],
        W = u(null),
        q = W[0],
        U = W[1],
        V = o("WAWebChatGetters").getIsMetaAiBot(
          o("WAWebStateUtils").unproxy(i),
        );
      o("useWAWebListener").useListener(
        V ? g : null,
        "max_upload_limit",
        function () {
          var e = g.getPreviewableMedias(),
            t =
              e.length > 0
                ? o("WAWebFileUtils").typeFromMimetype(e[0].mimetype)
                : void 0,
            n = o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(
              0,
              i.id,
              t,
            );
          t === "image"
            ? o("WAWebBotMultiModalToasts").showImageSendLimitExceededToast(n)
            : t === "document" &&
              o(
                "WAWebBotMultiModalToasts",
              ).showDocumentUploadLimitExceededToast(n);
        },
      );
      var H = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = e;
              if (V) {
                if (
                  o("WAWebBotMultiModalUtils").hasMetaAiMixedMediaTypes(
                    e.map(function (e) {
                      return e.file;
                    }),
                  )
                ) {
                  (o("WAWebBotMultiModalToasts").showMixedMediaTypeToast(),
                    g.getPreviewableMedias().length === 0 &&
                      (b == null || b(!0)));
                  return;
                }
                var r = o(
                  "WAWebBotMultiModalUtils",
                ).getSupportedMetaAiAttachments(e);
                if (
                  (o("WAWebBotMultiModalUtils").maybeShowUnsupportedFileToast(
                    r.length,
                    e.length,
                  ),
                  r.length === 0)
                ) {
                  g.getPreviewableMedias().length === 0 && (b == null || b(!0));
                  return;
                }
                n = r;
              }
              var a =
                n.length > 0
                  ? o("WAWebFileUtils").typeFromMimetype(n[0].file.type)
                  : void 0;
              return g.processAttachmentsForChat(
                n,
                t,
                i,
                f != null
                  ? f
                  : o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(
                      g.getPreviewableMedias().length + n.length,
                      i.id,
                      a,
                    ),
              );
            },
          );
          return function (n, r) {
            return e.apply(this, arguments);
          };
        })(),
        G = function (t, n, r) {
          if (
            F &&
            o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(
              O,
            ) &&
            $ !== o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isWamoSubCreatorExperienceSupported()
          ) {
            var e = function (r) {
              (U(null),
                R(
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
            U({ popupAnchorEl: r, handleSelect: e });
            return;
          }
          (R(t, babelHelpers.extends({}, n)),
            B != null &&
              o(
                "WAWebQuotedMessageUserJourneyLogger",
              ).QuotedMessageUserJourneyLogger.quotedMessageSent(i.id));
        },
        z =
          o("WAWebBotUtils").isMetaAiBot(i.id) &&
          o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled()
            ? s.jsx(r("WAWebAiModeSelector.react"), {
                chat: i,
                isInteractive:
                  o("WAWebBotGating").isAiModeSelectorInteractive(),
                threadId: P,
              })
            : null,
        j = g.getPreviewableMedias(),
        K =
          j.length > 0
            ? o("WAWebFileUtils").typeFromMimetype(j[0].mimetype)
            : void 0;
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx(o("WAWebMediaEditor.react").MediaEditor, {
            ref: k,
            canViewOnce: w,
            sendAsSticker: T,
            theme: $,
            onClose: b,
            onRender: S,
            hdEligible: !F,
            mediaCollection: g,
            initCaption: d,
            onDropText: v,
            onSendMedia: G,
            onAudienceSelectorClicked: C,
            statusPostingPrivacyConfig: x,
            setStatusPostingPrivacyConfig: D,
            newsletterWid: y,
            isNewsletterStatus: m,
            tsNavigationData: M,
            threadId: P,
            allowMultipleMedia: a,
            maxNumberOfMedia:
              f != null
                ? f
                : o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(
                    j.length,
                    i.id,
                    K,
                  ),
            mimes: h,
            maxCaptionLength: _,
            openTrigger: L,
            onProcessAttachments: H,
            renderCaptionInput: c(i, E, z),
            hideFooter: l,
            toolbarContainer: N,
            renderSubmitAccessory: I,
            isSubmitDisabled: p,
          }),
          q != null &&
            $ !== o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL &&
            s.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
              handleSelect: q.handleSelect,
              popupAnchorEl: q.popupAnchorEl,
              onDismiss: function () {
                return U(null);
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
