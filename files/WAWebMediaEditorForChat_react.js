__d(
  "WAWebMediaEditorForChat.react",
  [
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
    function c(e, t) {
      return function (n) {
        return s.jsx(
          r("WAWebMediaEditorCaptionInput.react"),
          babelHelpers.extends({ chat: e }, n, { placeholderText: t }),
        );
      };
    }
    function d(e) {
      var t,
        n = e.allowMultipleMedia,
        a = e.chat,
        i = e.initCaption,
        l = e.isNewsletterStatus,
        d = e.maxCaptionLength,
        m = e.maxNumberOfMedia,
        p = e.mediaCollection,
        _ = e.mimes,
        f = e.newsletterWid,
        g = e.onAudienceSelectorClicked,
        h = e.onClose,
        y = e.onDropText,
        C = e.onRender,
        b = e.onSendMedia,
        v = e.openTrigger,
        S = e.placeholderText,
        R = e.ref,
        L = e.sendAsSticker,
        E = e.setStatusPostingPrivacyConfig,
        k = e.statusPostingPrivacyConfig,
        I = e.theme,
        T = e.threadId,
        D = e.tsNavigationData,
        x =
          !a.contact.isEnterprise &&
          !o("WAWebUserPrefsMeUser").isMeAccount(a.contact.id) &&
          !L,
        $ =
          (t = o("useWAWebChatValues").useOptionalChatValues(a.id, [
            o("WAWebChatGetters").getIsNewsletter,
            o("WAWebFrontendChatGetters").getNewsletterMetadata,
            o("WAWebFrontendChatGetters").getComposeQuotedMsg,
          ])) != null
            ? t
            : [!1, null, null],
        P = $[0],
        N = $[1],
        M = $[2],
        w = u(null),
        A = w[0],
        F = w[1],
        O = function (t, n) {
          return p.processAttachmentsForChat(t, n, a, m);
        },
        B = function (t, n, r) {
          if (
            P &&
            o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(
              N,
            ) &&
            I !== o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isWamoSubCreatorExperienceSupported()
          ) {
            var e = function (r) {
              (F(null),
                b(
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
            F({ popupAnchorEl: r, handleSelect: e });
            return;
          }
          (b(t, babelHelpers.extends({}, n)),
            M != null &&
              o(
                "WAWebQuotedMessageUserJourneyLogger",
              ).QuotedMessageUserJourneyLogger.quotedMessageSent(a.id));
        };
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx(o("WAWebMediaEditor.react").MediaEditor, {
            ref: R,
            canViewOnce: x,
            sendAsSticker: L,
            theme: I,
            onClose: h,
            onRender: C,
            hdEligible: !P,
            mediaCollection: p,
            initCaption: i,
            onDropText: y,
            onSendMedia: B,
            onAudienceSelectorClicked: g,
            statusPostingPrivacyConfig: k,
            setStatusPostingPrivacyConfig: E,
            newsletterWid: f,
            isNewsletterStatus: l,
            tsNavigationData: D,
            threadId: T,
            allowMultipleMedia: n,
            maxNumberOfMedia:
              m != null
                ? m
                : o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(
                    p.getPreviewableMedias().length,
                    a.id,
                  ),
            mimes: _,
            maxCaptionLength: d,
            openTrigger: v,
            onProcessAttachments: O,
            renderCaptionInput: c(a, S),
          }),
          A != null &&
            I !== o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL &&
            s.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
              handleSelect: A.handleSelect,
              popupAnchorEl: A.popupAnchorEl,
              onDismiss: function () {
                return F(null);
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
