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
    "react-compiler-runtime",
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
        n = o("react-compiler-runtime").c(54),
        a = e.allowMultipleMedia,
        i = e.chat,
        l = e.initCaption,
        d = e.isNewsletterStatus,
        m = e.maxCaptionLength,
        p = e.maxNumberOfMedia,
        _ = e.mediaCollection,
        f = e.mimes,
        g = e.newsletterWid,
        h = e.onAudienceSelectorClicked,
        y = e.onClose,
        C = e.onDropText,
        b = e.onRender,
        v = e.onSendMedia,
        S = e.openTrigger,
        R = e.placeholderText,
        L = e.ref,
        E = e.sendAsSticker,
        k = e.setStatusPostingPrivacyConfig,
        I = e.statusPostingPrivacyConfig,
        T = e.theme,
        D = e.threadId,
        x = e.tsNavigationData,
        $;
      n[0] !== i.contact.id || n[1] !== i.contact.isEnterprise || n[2] !== E
        ? (($ =
            !i.contact.isEnterprise &&
            !o("WAWebUserPrefsMeUser").isMeAccount(i.contact.id) &&
            !E),
          (n[0] = i.contact.id),
          (n[1] = i.contact.isEnterprise),
          (n[2] = E),
          (n[3] = $))
        : ($ = n[3]);
      var P = $,
        N =
          (t = o("useWAWebChatValues").useOptionalChatValues(i.id, [
            o("WAWebChatGetters").getIsNewsletter,
            o("WAWebFrontendChatGetters").getNewsletterMetadata,
            o("WAWebFrontendChatGetters").getComposeQuotedMsg,
          ])) != null
            ? t
            : [!1, null, null],
        M = N[0],
        w = N[1],
        A = N[2],
        F = u(null),
        O = F[0],
        B = F[1],
        W;
      n[4] !== i || n[5] !== p || n[6] !== _
        ? ((W = function (t, n) {
            return _.processAttachmentsForChat(t, n, i, p);
          }),
          (n[4] = i),
          (n[5] = p),
          (n[6] = _),
          (n[7] = W))
        : (W = n[7]);
      var q = W,
        U;
      n[8] !== i.id ||
      n[9] !== A ||
      n[10] !== M ||
      n[11] !== w ||
      n[12] !== v ||
      n[13] !== T
        ? ((U = function (t, n, r) {
            if (
              M &&
              o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(
                w,
              ) &&
              T !== o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL &&
              o(
                "WAWebNewsletterGatingUtils",
              ).isWamoSubCreatorExperienceSupported()
            ) {
              var e = function (r) {
                (B(null),
                  v(
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
              B({ popupAnchorEl: r, handleSelect: e });
              return;
            }
            (v(t, babelHelpers.extends({}, n)),
              A != null &&
                o(
                  "WAWebQuotedMessageUserJourneyLogger",
                ).QuotedMessageUserJourneyLogger.quotedMessageSent(i.id));
          }),
          (n[8] = i.id),
          (n[9] = A),
          (n[10] = M),
          (n[11] = w),
          (n[12] = v),
          (n[13] = T),
          (n[14] = U))
        : (U = n[14]);
      var V = U,
        H = !M,
        G;
      n[15] !== i.id || n[16] !== p || n[17] !== _
        ? ((G =
            p != null
              ? p
              : o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(
                  _.getPreviewableMedias().length,
                  i.id,
                )),
          (n[15] = i.id),
          (n[16] = p),
          (n[17] = _),
          (n[18] = G))
        : (G = n[18]);
      var z;
      n[19] !== i || n[20] !== R
        ? ((z = c(i, R)), (n[19] = i), (n[20] = R), (n[21] = z))
        : (z = n[21]);
      var j;
      n[22] !== a ||
      n[23] !== P ||
      n[24] !== q ||
      n[25] !== V ||
      n[26] !== l ||
      n[27] !== d ||
      n[28] !== m ||
      n[29] !== _ ||
      n[30] !== f ||
      n[31] !== g ||
      n[32] !== h ||
      n[33] !== y ||
      n[34] !== C ||
      n[35] !== b ||
      n[36] !== S ||
      n[37] !== L ||
      n[38] !== E ||
      n[39] !== k ||
      n[40] !== I ||
      n[41] !== H ||
      n[42] !== G ||
      n[43] !== z ||
      n[44] !== T ||
      n[45] !== D ||
      n[46] !== x
        ? ((j = s.jsx(o("WAWebMediaEditor.react").MediaEditor, {
            ref: L,
            canViewOnce: P,
            sendAsSticker: E,
            theme: T,
            onClose: y,
            onRender: b,
            hdEligible: H,
            mediaCollection: _,
            initCaption: l,
            onDropText: C,
            onSendMedia: V,
            onAudienceSelectorClicked: h,
            statusPostingPrivacyConfig: I,
            setStatusPostingPrivacyConfig: k,
            newsletterWid: g,
            isNewsletterStatus: d,
            tsNavigationData: x,
            threadId: D,
            allowMultipleMedia: a,
            maxNumberOfMedia: G,
            mimes: f,
            maxCaptionLength: m,
            openTrigger: S,
            onProcessAttachments: q,
            renderCaptionInput: z,
          })),
          (n[22] = a),
          (n[23] = P),
          (n[24] = q),
          (n[25] = V),
          (n[26] = l),
          (n[27] = d),
          (n[28] = m),
          (n[29] = _),
          (n[30] = f),
          (n[31] = g),
          (n[32] = h),
          (n[33] = y),
          (n[34] = C),
          (n[35] = b),
          (n[36] = S),
          (n[37] = L),
          (n[38] = E),
          (n[39] = k),
          (n[40] = I),
          (n[41] = H),
          (n[42] = G),
          (n[43] = z),
          (n[44] = T),
          (n[45] = D),
          (n[46] = x),
          (n[47] = j))
        : (j = n[47]);
      var K;
      n[48] !== O || n[49] !== T
        ? ((K =
            O != null &&
            T !== o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL &&
            s.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
              handleSelect: O.handleSelect,
              popupAnchorEl: O.popupAnchorEl,
              onDismiss: function () {
                return B(null);
              },
            })),
          (n[48] = O),
          (n[49] = T),
          (n[50] = K))
        : (K = n[50]);
      var Q;
      return (
        n[51] !== j || n[52] !== K
          ? ((Q = s.jsxs(s.Fragment, { children: [j, K] })),
            (n[51] = j),
            (n[52] = K),
            (n[53] = Q))
          : (Q = n[53]),
        Q
      );
    }
    l.MediaEditorForChat = d;
  },
  98,
);
