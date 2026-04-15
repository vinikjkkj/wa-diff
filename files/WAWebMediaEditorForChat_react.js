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
    "react-compiler-runtime",
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
        a = o("react-compiler-runtime").c(108),
        i = e.allowMultipleMedia,
        l = e.chat,
        d = e.hideFooter,
        p = e.initCaption,
        _ = e.isNewsletterStatus,
        f = e.isSubmitDisabled,
        g = e.maxCaptionLength,
        h = e.maxNumberOfMedia,
        y = e.mediaCollection,
        C = e.mimes,
        b = e.newsletterWid,
        v = e.onAudienceSelectorClicked,
        S = e.onClose,
        R = e.onDropText,
        L = e.onRender,
        E = e.onSendMedia,
        k = e.openTrigger,
        I = e.placeholderText,
        T = e.ref,
        D = e.renderSubmitAccessory,
        x = e.sendAsSticker,
        $ = e.setStatusPostingPrivacyConfig,
        P = e.statusPostingPrivacyConfig,
        N = e.theme,
        M = e.threadId,
        w = e.toolbarContainer,
        A = e.tsNavigationData,
        F;
      a[0] !== l.contact.id || a[1] !== l.contact.isEnterprise || a[2] !== x
        ? ((F =
            !l.contact.isEnterprise &&
            !o("WAWebUserPrefsMeUser").isMeAccount(l.contact.id) &&
            !x),
          (a[0] = l.contact.id),
          (a[1] = l.contact.isEnterprise),
          (a[2] = x),
          (a[3] = F))
        : (F = a[3]);
      var O = F,
        B =
          (t = o("useWAWebChatValues").useOptionalChatValues(l.id, [
            o("WAWebChatGetters").getIsNewsletter,
            o("WAWebFrontendChatGetters").getNewsletterMetadata,
            o("WAWebFrontendChatGetters").getComposeQuotedMsg,
          ])) != null
            ? t
            : [!1, null, null],
        W = B[0],
        q = B[1],
        U = B[2],
        V = u(null),
        H = V[0],
        G = V[1],
        z;
      a[4] !== l
        ? ((z = o("WAWebChatGetters").getIsMetaAiBot(
            o("WAWebStateUtils").unproxy(l),
          )),
          (a[4] = l),
          (a[5] = z))
        : (z = a[5]);
      var j = z,
        K;
      (a[6] !== l.id || a[7] !== y
        ? ((K = function () {
            var e = y.getPreviewableMedias(),
              t =
                e.length > 0
                  ? o("WAWebFileUtils").typeFromMimetype(e[0].mimetype)
                  : void 0,
              n = o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(
                0,
                l.id,
                t,
              );
            t === "image"
              ? o("WAWebBotMultiModalToasts").showImageSendLimitExceededToast(n)
              : t === "document" &&
                o(
                  "WAWebBotMultiModalToasts",
                ).showDocumentUploadLimitExceededToast(n);
          }),
          (a[6] = l.id),
          (a[7] = y),
          (a[8] = K))
        : (K = a[8]),
        o("useWAWebListener").useListener(j ? y : null, "max_upload_limit", K));
      var Q;
      a[9] !== l || a[10] !== j || a[11] !== h || a[12] !== y || a[13] !== S
        ? ((Q = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = e;
                if (j) {
                  if (
                    o("WAWebBotMultiModalUtils").hasMetaAiMixedMediaTypes(
                      e.map(m),
                    )
                  ) {
                    (o("WAWebBotMultiModalToasts").showMixedMediaTypeToast(),
                      y.getPreviewableMedias().length === 0 &&
                        (S == null || S(!0)));
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
                    y.getPreviewableMedias().length === 0 &&
                      (S == null || S(!0));
                    return;
                  }
                  n = r;
                }
                var a =
                  n.length > 0
                    ? o("WAWebFileUtils").typeFromMimetype(n[0].file.type)
                    : void 0;
                return y.processAttachmentsForChat(
                  n,
                  t,
                  l,
                  h != null
                    ? h
                    : o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(
                        y.getPreviewableMedias().length + n.length,
                        l.id,
                        a,
                      ),
                );
              },
            );
            return function (n, r) {
              return e.apply(this, arguments);
            };
          })()),
          (a[9] = l),
          (a[10] = j),
          (a[11] = h),
          (a[12] = y),
          (a[13] = S),
          (a[14] = Q))
        : (Q = a[14]);
      var X = Q,
        Y;
      a[15] !== l.id ||
      a[16] !== U ||
      a[17] !== W ||
      a[18] !== q ||
      a[19] !== E ||
      a[20] !== N
        ? ((Y = function (t, n, r) {
            if (
              W &&
              o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(
                q,
              ) &&
              N !== o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL &&
              o(
                "WAWebNewsletterGatingUtils",
              ).isWamoSubCreatorExperienceSupported()
            ) {
              var e = function (r) {
                (G(null),
                  E(
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
              G({ popupAnchorEl: r, handleSelect: e });
              return;
            }
            (E(t, babelHelpers.extends({}, n)),
              U != null &&
                o(
                  "WAWebQuotedMessageUserJourneyLogger",
                ).QuotedMessageUserJourneyLogger.quotedMessageSent(l.id));
          }),
          (a[15] = l.id),
          (a[16] = U),
          (a[17] = W),
          (a[18] = q),
          (a[19] = E),
          (a[20] = N),
          (a[21] = Y))
        : (Y = a[21]);
      var J = Y,
        Z;
      a[22] !== l || a[23] !== M
        ? ((Z =
            o("WAWebBotUtils").isMetaAiBot(l.id) &&
            o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled()
              ? s.jsx(r("WAWebAiModeSelector.react"), {
                  chat: l,
                  isInteractive:
                    o("WAWebBotGating").isAiModeSelectorInteractive(),
                  threadId: M,
                })
              : null),
          (a[22] = l),
          (a[23] = M),
          (a[24] = Z))
        : (Z = a[24]);
      var ee = Z,
        te,
        ne,
        re,
        oe,
        ae,
        ie,
        le,
        se,
        ue,
        ce,
        de,
        me,
        pe,
        _e,
        fe,
        ge,
        he,
        ye,
        Ce,
        be,
        ve;
      if (
        a[25] !== i ||
        a[26] !== O ||
        a[27] !== l.id ||
        a[28] !== J ||
        a[29] !== p ||
        a[30] !== W ||
        a[31] !== _ ||
        a[32] !== h ||
        a[33] !== y ||
        a[34] !== b ||
        a[35] !== v ||
        a[36] !== S ||
        a[37] !== R ||
        a[38] !== L ||
        a[39] !== T ||
        a[40] !== x ||
        a[41] !== $ ||
        a[42] !== P ||
        a[43] !== N ||
        a[44] !== M ||
        a[45] !== A
      ) {
        var Se = y.getPreviewableMedias(),
          Re =
            Se.length > 0
              ? o("WAWebFileUtils").typeFromMimetype(Se[0].mimetype)
              : void 0;
        ((te = o("WAWebMediaEditor.react").MediaEditor),
          (Ce = T),
          (be = O),
          (ve = x),
          (ne = N),
          (re = S),
          (oe = L),
          (ae = !W),
          (ie = y),
          (le = p),
          (se = R),
          (ue = J),
          (ce = v),
          (de = P),
          (me = $),
          (pe = b),
          (_e = _),
          (fe = A),
          (ge = M),
          (he = i),
          (ye =
            h != null
              ? h
              : o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(
                  Se.length,
                  l.id,
                  Re,
                )),
          (a[25] = i),
          (a[26] = O),
          (a[27] = l.id),
          (a[28] = J),
          (a[29] = p),
          (a[30] = W),
          (a[31] = _),
          (a[32] = h),
          (a[33] = y),
          (a[34] = b),
          (a[35] = v),
          (a[36] = S),
          (a[37] = R),
          (a[38] = L),
          (a[39] = T),
          (a[40] = x),
          (a[41] = $),
          (a[42] = P),
          (a[43] = N),
          (a[44] = M),
          (a[45] = A),
          (a[46] = te),
          (a[47] = ne),
          (a[48] = re),
          (a[49] = oe),
          (a[50] = ae),
          (a[51] = ie),
          (a[52] = le),
          (a[53] = se),
          (a[54] = ue),
          (a[55] = ce),
          (a[56] = de),
          (a[57] = me),
          (a[58] = pe),
          (a[59] = _e),
          (a[60] = fe),
          (a[61] = ge),
          (a[62] = he),
          (a[63] = ye),
          (a[64] = Ce),
          (a[65] = be),
          (a[66] = ve));
      } else
        ((te = a[46]),
          (ne = a[47]),
          (re = a[48]),
          (oe = a[49]),
          (ae = a[50]),
          (ie = a[51]),
          (le = a[52]),
          (se = a[53]),
          (ue = a[54]),
          (ce = a[55]),
          (de = a[56]),
          (me = a[57]),
          (pe = a[58]),
          (_e = a[59]),
          (fe = a[60]),
          (ge = a[61]),
          (he = a[62]),
          (ye = a[63]),
          (Ce = a[64]),
          (be = a[65]),
          (ve = a[66]));
      var Le;
      a[67] !== l || a[68] !== ee || a[69] !== I
        ? ((Le = c(l, I, ee)),
          (a[67] = l),
          (a[68] = ee),
          (a[69] = I),
          (a[70] = Le))
        : (Le = a[70]);
      var Ee;
      a[71] !== te ||
      a[72] !== X ||
      a[73] !== d ||
      a[74] !== f ||
      a[75] !== g ||
      a[76] !== C ||
      a[77] !== k ||
      a[78] !== D ||
      a[79] !== ne ||
      a[80] !== re ||
      a[81] !== oe ||
      a[82] !== ae ||
      a[83] !== ie ||
      a[84] !== le ||
      a[85] !== se ||
      a[86] !== ue ||
      a[87] !== ce ||
      a[88] !== de ||
      a[89] !== me ||
      a[90] !== pe ||
      a[91] !== _e ||
      a[92] !== fe ||
      a[93] !== ge ||
      a[94] !== he ||
      a[95] !== ye ||
      a[96] !== Le ||
      a[97] !== Ce ||
      a[98] !== be ||
      a[99] !== ve ||
      a[100] !== w
        ? ((Ee = s.jsx(te, {
            ref: Ce,
            canViewOnce: be,
            sendAsSticker: ve,
            theme: ne,
            onClose: re,
            onRender: oe,
            hdEligible: ae,
            mediaCollection: ie,
            initCaption: le,
            onDropText: se,
            onSendMedia: ue,
            onAudienceSelectorClicked: ce,
            statusPostingPrivacyConfig: de,
            setStatusPostingPrivacyConfig: me,
            newsletterWid: pe,
            isNewsletterStatus: _e,
            tsNavigationData: fe,
            threadId: ge,
            allowMultipleMedia: he,
            maxNumberOfMedia: ye,
            mimes: C,
            maxCaptionLength: g,
            openTrigger: k,
            onProcessAttachments: X,
            renderCaptionInput: Le,
            hideFooter: d,
            toolbarContainer: w,
            renderSubmitAccessory: D,
            isSubmitDisabled: f,
          })),
          (a[71] = te),
          (a[72] = X),
          (a[73] = d),
          (a[74] = f),
          (a[75] = g),
          (a[76] = C),
          (a[77] = k),
          (a[78] = D),
          (a[79] = ne),
          (a[80] = re),
          (a[81] = oe),
          (a[82] = ae),
          (a[83] = ie),
          (a[84] = le),
          (a[85] = se),
          (a[86] = ue),
          (a[87] = ce),
          (a[88] = de),
          (a[89] = me),
          (a[90] = pe),
          (a[91] = _e),
          (a[92] = fe),
          (a[93] = ge),
          (a[94] = he),
          (a[95] = ye),
          (a[96] = Le),
          (a[97] = Ce),
          (a[98] = be),
          (a[99] = ve),
          (a[100] = w),
          (a[101] = Ee))
        : (Ee = a[101]);
      var ke;
      a[102] !== H || a[103] !== N
        ? ((ke =
            H != null &&
            N !== o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL &&
            s.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
              handleSelect: H.handleSelect,
              popupAnchorEl: H.popupAnchorEl,
              onDismiss: function () {
                return G(null);
              },
            })),
          (a[102] = H),
          (a[103] = N),
          (a[104] = ke))
        : (ke = a[104]);
      var Ie;
      return (
        a[105] !== Ee || a[106] !== ke
          ? ((Ie = s.jsxs(s.Fragment, { children: [Ee, ke] })),
            (a[105] = Ee),
            (a[106] = ke),
            (a[107] = Ie))
          : (Ie = a[107]),
        Ie
      );
    }
    function m(e) {
      return e.file;
    }
    l.MediaEditorForChat = d;
  },
  98,
);
