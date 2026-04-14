__d(
  "WAWebComposeBox.react",
  [
    "cx",
    "fbt",
    "$InternalEnum",
    "PaymentLink",
    "PaymentLinkWamLogger",
    "Promise",
    "WAAbortError",
    "WAFilteredCatch",
    "WALogger",
    "WAShiftTimer",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiPrepareCtwaContextSend",
    "WAWebAttachmentMenuLogger",
    "WAWebBizGatingUtils",
    "WAWebBizQueryCtwaContextBridge",
    "WAWebBlocklistCollection",
    "WAWebBotBaseGating",
    "WAWebBotCommandSuggestions.react",
    "WAWebBotGating",
    "WAWebBotProfileGetters",
    "WAWebBotSuggestions.react",
    "WAWebBotTypes",
    "WAWebBotUtils",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileUtils",
    "WAWebChatGetters",
    "WAWebChatPreferenceCollection",
    "WAWebClassnames",
    "WAWebCmd",
    "WAWebCodeFormatMutator",
    "WAWebComposeBoxActions",
    "WAWebComposeBoxPopupPanels.react",
    "WAWebComposeBoxUtils",
    "WAWebConstantsDeprecated",
    "WAWebConversationSpamUtils",
    "WAWebCopyPasteCopyableArea.react",
    "WAWebCryptoRandomMediaKey",
    "WAWebDrawerManager",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiPickerPlugin",
    "WAWebErrorBoundary.react",
    "WAWebFilePicker.react",
    "WAWebFileUtils",
    "WAWebFrontendChatGetters",
    "WAWebGenMinimalLinkPreviewChatAction",
    "WAWebHatchCommandPickerPlugin.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebLexicalUtils",
    "WAWebLimitSharingUIUtils",
    "WAWebLinkPreviewChatAction",
    "WAWebLinkify",
    "WAWebMaybeGetAiThreadInfo",
    "WAWebMediaConstants",
    "WAWebMediaGetUploadOriginForChat",
    "WAWebMediaOpaqueData",
    "WAWebMediaUploadMmsThumbnail",
    "WAWebMentionPickerPlugin",
    "WAWebMessageComposer.react",
    "WAWebMimeTypes",
    "WAWebMiscErrors",
    "WAWebMmsMediaTypes",
    "WAWebModalManager",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterSendMsgAction",
    "WAWebNewsletterWamoSubMessageType",
    "WAWebNewsletterWamoSubMessageTypePopup.react",
    "WAWebNewsletterWamoSubUtils",
    "WAWebNoop",
    "WAWebPrepareMessageSendingAction",
    "WAWebPresenceChatAction",
    "WAWebProtobufsE2E.pb",
    "WAWebPttComposerRecordingSession",
    "WAWebPttMessageUserJourneyLogger",
    "WAWebQuestions.flow",
    "WAWebQuickReplyLogging",
    "WAWebQuickReplyPickerPlugin",
    "WAWebQuickReplySuggestions.react",
    "WAWebQuotedMessageUserJourneyLogger",
    "WAWebReconnectUtil",
    "WAWebRecordingSessionStateEnum",
    "WAWebRichTextInput.react",
    "WAWebRichTextInputPlugins.react",
    "WAWebSendStickerAction",
    "WAWebSendTextMsgChatAction",
    "WAWebStateUtils",
    "WAWebStopEvent",
    "WAWebSuggestionsPanelContainer.react",
    "WAWebTabOrder",
    "WAWebTextSizeUtils",
    "WAWebThreadsViewAutoQuoteContext",
    "WAWebThreadsViewComposeQuotedMsgContext",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebUim",
    "WAWebUimUie.react",
    "WAWebUseBusinessProfile.react",
    "WAWebUseHatchCommandsFetch",
    "WAWebUseShouldShowBotSuggestions",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebVelocityTransitionGroup",
    "WAWebWamEnumMediaPickerOriginType",
    "WAWebWamEnumQuickReplyEntryPoint",
    "WAWebWamEnumWebcStickerMakerEventNameType",
    "WAWebWebcStickerMakerEventsWamEvent",
    "asyncToGeneratorRuntime",
    "cr:5993",
    "cr:7456",
    "gkx",
    "justknobx",
    "react",
    "stylex",
    "useForceUpdate",
    "useLazyRef",
    "useWAWebChatValues",
    "useWAWebComposeBoxActionListeners",
    "useWAWebDebouncedCallback",
    "useWAWebIsKeyboardUser",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebOnUnmount",
    "useWAWebOptionalBotProfileValues",
    "useWAWebSetModelValue",
    "useWAWebStableCallback",
    "useWAWebTextMessageUserJourneyLogger",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c,
      d,
      m,
      p,
      _,
      f = ["ref"],
      g,
      h,
      y,
      C = y || (y = o("react")),
      b = y,
      v = b.useContext,
      S = b.useEffect,
      R = b.useImperativeHandle,
      L = b.useMemo,
      E = b.useRef,
      k = b.useState,
      I = /^https?:\/\/media\.giphy\.com\/media\/([a-zA-Z0-9]+)/,
      T = 1,
      D = 700,
      x = 8,
      $ = n("$InternalEnum").Mirrored(["ATTACHMENT_MENU", "OTHER"]);
    function P(e, t) {
      return (
        e.length === t.length &&
        e.every(function (e, n) {
          return e.url === t[n].url;
        })
      );
    }
    var N = {
      blockCompose: {
        position: "x1n2onr6",
        zIndex: "xhtitgo",
        boxSizing: "x9f619",
        display: "x78zum5",
        flexDirection: "x1q0g3np",
        alignItems: "xuk3077",
        maxWidth: "x193iq5w",
        minHeight: "x122xwht",
        backgroundColor: "xhjsbib",
        $$css: !0,
      },
      blockComposeRefresh: {
        backgroundColor: "xjbqb8w",
        minHeight: "x1wiwyrm",
        maxWidth: "xquzyny",
        $$css: !0,
      },
      richTextRefresh: { caretColor: "xjdcl3y", $$css: !0 },
    };
    function M(t) {
      "use no forget";
      var a,
        i,
        l,
        s,
        y,
        b,
        M = t.ref,
        w = babelHelpers.objectWithoutPropertiesLoose(t, f),
        A = w.canShowSpamPanel,
        F = A === void 0 ? !1 : A,
        O = w.chat,
        B = w.onComposeHeightChange,
        W = w.onPageUpDown,
        q = w.onSend,
        U = w.questionType,
        V = w.threadId,
        H = v(r("WAWebThreadsViewAutoQuoteContext")),
        G = r("useForceUpdate")(),
        z = o("useWAWebChatValues").useChatValues(w.chat.id, [
          o("WAWebChatGetters").getId,
          o("WAWebFrontendChatGetters").getTrusted,
          o("WAWebFrontendChatGetters").getComposeQuotedMsg,
          o("WAWebChatGetters").getIsPSA,
          o("WAWebChatGetters").getIsGroup,
          o("WAWebFrontendChatGetters").getPttRecordingSession,
          o("WAWebFrontendChatGetters").getShouldAppearInList,
          o("WAWebFrontendChatGetters").getPresence,
          o("WAWebFrontendChatGetters").getContact,
          o("WAWebFrontendChatGetters").getAttachMediaContents,
          o("WAWebFrontendChatGetters").getQuotedMsgAdminGroupJid,
          o("WAWebFrontendChatGetters").getQuotedMsgAdminGroupSubject,
          o("WAWebFrontendChatGetters").getQuotedMsgAdminParentGroupJid,
          o("WAWebFrontendChatGetters").getComposeQuotedMsgRemoteJid,
          o("WAWebChatGetters").getIsAutoMuted,
          o("WAWebChatGetters").getIsNewsletter,
          o("WAWebChatGetters").getIsBroadcast,
          o("WAWebFrontendChatGetters").getNewsletterMetadata,
          o("WAWebFrontendChatGetters").getIsCAG,
        ]),
        j = z[0],
        K = z[1],
        Q = z[2],
        X = z[3],
        Y = z[4],
        J = z[5],
        Z = z[6],
        ee = z[7],
        te = z[8],
        ne = z[9],
        re = z[10],
        oe = z[11],
        ae = z[12],
        ie = z[13],
        le = z[14],
        se = z[15],
        ue = z[16],
        ce = z[17],
        de = U === o("WAWebQuestions.flow").QuestionType.Question,
        me = w.questionReplyQuotedMessage,
        pe = o("useWAWebSetModelValue").useSetModelValue(O, "composeQuotedMsg"),
        _e = v(r("WAWebThreadsViewComposeQuotedMsgContext")),
        fe = (a = _e == null ? void 0 : _e.quotedMsg) != null ? a : Q,
        ge = (i = _e == null ? void 0 : _e.setQuotedMsg) != null ? i : pe,
        he = o("useWAWebSetModelValue").useSetModelValue(
          O,
          "quotedMsgAdminGroupJid",
        ),
        ye = o("useWAWebSetModelValue").useSetModelValue(
          O,
          "composeQuotedMsgRemoteJid",
        ),
        Ce = o("useWAWebSetModelValue").useSetModelValue(
          O,
          "pttRecordingSession",
        ),
        be = o("useWAWebModelValues").useModelValues(
          r("WAWebChatPreferenceCollection").getDefault(),
          [
            "spellcheck",
            "transformTextEmoji",
            "enterIsSend",
            "showExpandedComposer",
          ],
        ),
        ve = L(
          function () {
            return O.getComposeContents();
          },
          [O],
        ),
        Se = k(null),
        Re = Se[0],
        Le = Se[1],
        Ee = E(ve == null ? void 0 : ve.omittedURL),
        ke = k(null),
        Ie = ke[0],
        Te = ke[1],
        De = k(!1),
        xe = De[0],
        $e = De[1],
        Pe = k(o("PaymentLinkWamLogger").LinkPreviewStatus.NOT_STARTED),
        Ne = Pe[0],
        Me = Pe[1],
        we = E(ve == null ? void 0 : ve.omittedURL),
        Ae = E((ve == null ? void 0 : ve.text) || ""),
        Fe = k([]),
        Oe = Fe[0],
        Be = Fe[1],
        We = function () {
          var e = o("WAWebCodeFormatMutator").removeCodeBlocks(Ae.current),
            t = o("WAWebLinkify").findLinks(
              e,
              !0,
              o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
            );
          return (
            Be(function (e) {
              return P(e, t) ? e : t;
            }),
            t[0]
          );
        },
        qe = r("useWAWebIsKeyboardUser")(),
        Ue = qe.isKeyboardUser,
        Ve = k(null),
        He = Ve[0],
        Ge = Ve[1],
        ze = function () {
          return j.isBot() || He != null;
        },
        je = o("WAWebUseBusinessProfile.react").useBusinessProfile(
          o("WAWebBotGating").isBizBot3pAvailable() ||
            o("WAWebBotBaseGating").isBizBot1pEnabled()
            ? j
            : null,
          ["commands", "prompts", "isBizBot1p", "isBizBot3p"],
        ),
        Ke = He != null ? He : j,
        Qe = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(
          Ke,
          [o("WAWebBotProfileGetters").getCommands],
        ),
        Xe = Qe[0],
        Ye =
          (je == null ? void 0 : je.commands) ||
          (o("WAWebBotBaseGating").isBotEnabled() && Xe) ||
          null,
        Je = E([]),
        Ze = r("useLazyRef")(function () {
          return new AbortController();
        }),
        et = k(!1),
        tt = et[0],
        nt = et[1],
        rt = o("WAWebUseShouldShowBotSuggestions").useShouldShowBotSuggestions(
          w.chat,
          je == null ? void 0 : je.prompts,
          w.threadId,
        );
      o("WAWebUseHatchCommandsFetch").useHatchCommandsFetch(O.id);
      var ot = r("useWAWebStableCallback")(function () {
          return O.getComposeContents();
        }),
        at = E(!1),
        it = r("useWAWebTextMessageUserJourneyLogger")(
          O.id,
          ((l =
            (s = ot()) == null || (s = s.text) == null ? void 0 : s.length) !=
          null
            ? l
            : 0) > 0,
        ),
        lt = it.handleCloseForUJLogging,
        st = it.handleMsgSentForUJLogging,
        ut = it.handleTextMsgChangeForUJLogging;
      S(function () {
        return function () {
          (lt(fe != null),
            O.pttRecordingSession != null &&
              o(
                "WAWebPttMessageUserJourneyLogger",
              ).PttMessageUserJourneyLogger.draftSaved(O.id, fe != null));
        };
      }, []);
      var ct = function () {
          ((Je.current = []),
            Ze.current.abort(),
            (Ze.current = new AbortController()),
            tt && nt(!1));
        },
        dt = function (t) {
          (t === void 0 && (t = o("WAWebUim").DismissReason.UIM_INTERACTION),
            $e(!0),
            mt(t));
        },
        mt = function (t) {
          (t === void 0 && (t = o("WAWebUim").DismissReason.UIM_INTERACTION),
            t !== o("WAWebUim").DismissReason.LIFECYCLE &&
              (ct(), Ie && ((we.current = Ee.current), Te(null))));
        },
        pt = function () {
          ((Ee.current = null),
            $e(!1),
            Me(o("PaymentLinkWamLogger").LinkPreviewStatus.NOT_STARTED),
            mt());
        },
        _t = function (a, i) {
          if (a.data.thumbnailDirectPath !== void 0) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "link preview: using an existing thumbnail mms",
                ])),
            );
            var t = o("WAWebComposeBoxUtils").getCachedPreview(a);
            return (
              Te(function (e) {
                return (e == null ? void 0 : e.url) !== a.url ? e : t;
              }),
              (h || (h = n("Promise"))).resolve()
            );
          }
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "link preview: uploading new thumbnail mms",
              ])),
          );
          var l = a.data.thumbnailHQ;
          return l
            ? r("WAWebMediaOpaqueData")
                .createFromBase64Jpeg(l)
                .then(function (e) {
                  return r("WAWebMediaUploadMmsThumbnail")({
                    thumbnail: e,
                    mediaType: se
                      ? o("WAWebMmsMediaTypes").MEDIA_TYPES
                          .NEWSLETTER_THUMBNAIL_LINK
                      : o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_LINK,
                    mediaKeyInfo: r("WAWebCryptoRandomMediaKey")(),
                    uploadOrigin: r("WAWebMediaGetUploadOriginForChat")(O),
                    forwardedFromWeb: !1,
                    signal: i,
                    timeout: o("WAWebMediaConstants")
                      .MMS_THUMBNAIL_UPLOAD_TIMEOUT,
                    isViewOnce: !1,
                  });
                })
                .then(function (e) {
                  var t = e.mediaEntry;
                  t &&
                    Te(function (n) {
                      if ((n == null ? void 0 : n.url) !== a.url) return n;
                      var r = {
                          mediaKey: t.mediaKey,
                          mediaKeyTimestamp: t.mediaKeyTimestamp,
                          thumbnailDirectPath: t.directPath,
                          thumbnailSha256: e.filehash,
                          thumbnailEncSha256: t.encFilehash,
                        },
                        o = babelHelpers.extends({}, a, {
                          data: babelHelpers.extends({}, a.data, r),
                        });
                      return o;
                    });
                })
                .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
                .catch(function (e) {
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Full preview upload has failed: ",
                      ])),
                  );
                })
            : (h || (h = n("Promise"))).resolve();
        },
        ft = k(!!Ae.current),
        gt = ft[0],
        ht = ft[1],
        yt = k(ve == null ? void 0 : ve.ctwaContextLinkData),
        Ct = yt[0],
        bt = yt[1],
        vt = E(null),
        St = E(null),
        Rt = E(null),
        Lt = E(null),
        Et = E(null),
        kt = E(null),
        It = E(null),
        Tt = E(!1),
        Dt = E(!1),
        xt = E(null),
        $t = E(null),
        Pt = r("useWAWebStableCallback")(function () {
          if (!gt || Ct) {
            pt();
            return;
          }
          var e = We();
          if (!e) {
            pt();
            return;
          }
          var t = e.url;
          if (!(Ee.current !== "" && Ee.current === t)) {
            ((Ee.current = t), (we.current = null));
            var n = Ze.current.signal,
              a = null;
            o("PaymentLink").shouldDetectInComposer() &&
              (a = o("PaymentLink").getPSP(t));
            var i =
                a != null
                  ? o("WAWebProtobufsE2E.pb")
                      .Message$ExtendedTextMessage$PreviewType.PAYMENT_LINKS
                  : o("WAWebProtobufsE2E.pb")
                      .Message$ExtendedTextMessage$PreviewType.NONE,
              l = o(
                "WAWebGenMinimalLinkPreviewChatAction",
              ).genMinimalLinkPreview(e, i, !0, { psp: a });
            (Te(l), Me(o("PaymentLinkWamLogger").LinkPreviewStatus.STARTED));
            var s = o("WAWebLinkPreviewChatAction")
              .getLinkPreview(e, O)
              .then(function (t) {
                if (n.aborted) throw new (o("WAAbortError").AbortError)();
                if (
                  t &&
                  Ee.current === t.url &&
                  t.data &&
                  (t.data.title || t.data.description)
                )
                  return (
                    Te(t),
                    _t(t, n).finally(function () {
                      Me(o("PaymentLinkWamLogger").LinkPreviewStatus.COMPLETED);
                    })
                  );
                l != null &&
                  Te(
                    o(
                      "WAWebGenMinimalLinkPreviewChatAction",
                    ).genMinimalLinkPreview(e, i, !1, { psp: a }),
                  );
              });
            (Je.current.push(s),
              s
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebMiscErrors").Unmount,
                    r("WAWebNoop"),
                  ),
                )
                .catch(o("WAAbortError").catchAbort(r("WAWebNoop"))));
          }
        }),
        Nt = r("useLazyRef")(function () {
          return new (o("WAShiftTimer").ShiftTimer)(Pt);
        }),
        Mt = E({ text: "", parsableText: "", data: {} }),
        wt = E(null),
        At = null,
        Ft = k(),
        Ot = Ft[0],
        Bt = Ft[1],
        Wt = k(O.pttRecordingSession),
        qt = Wt[0],
        Ut = Wt[1],
        Vt = k(O.pttRecordingSession != null),
        Ht = Vt[0],
        Gt = Vt[1],
        zt = k(null),
        jt = zt[0],
        Kt = zt[1],
        Qt = k(""),
        Xt = Qt[0],
        Yt = k(ve == null ? void 0 : ve.ctwaContext),
        Jt = Yt[0],
        Zt = Yt[1],
        en = k(function () {
          return o("WAWebConversationSpamUtils").shouldShowSpamPanel(O);
        }),
        tn = en[0],
        nn = en[1],
        rn = function () {
          (nn(!1),
            o("WAWebConversationSpamUtils").acknowledgeGroupAsNotSpam(O));
        },
        on = function () {
          nn(!1);
        },
        an = k({ handleOnce: [], handleMultiple: [] }),
        ln = an[0],
        sn = an[1];
      o("useWAWebListener").useListener(
        o("WAWebBlocklistCollection").BlocklistCollection,
        ["add", "remove", "reset"],
        G,
      );
      var un = k(be.showExpandedComposer),
        cn = un[0],
        dn = un[1],
        mn = function () {
          (dn(!cn), be.set("showExpandedComposer", !be.showExpandedComposer));
        },
        pn = function () {
          var e,
            t = Ae.current,
            n = O.getComposeContents();
          if (
            !(n == null && t.trim() === "") &&
            (n == null || (e = n.text) == null ? void 0 : e.trim()) !== t.trim()
          ) {
            var r = { text: t, timestamp: o("WATimeUtils").unixTime() },
              a = we.current;
            (a != null && (r.omittedURL = a),
              Jt != null && (r.ctwaContext = Jt),
              Ct != null && (r.ctwaContextLinkData = Ct),
              O.setComposeContents(r));
          }
        },
        _n = function (t) {
          (pn(), pt());
          var e = t.sourceUrl;
          e != null &&
            e !== "" &&
            o("WAWebBizQueryCtwaContextBridge")
              .fetchCtwaContextData(t)
              .then(function (e) {
                (Zt(e), pn());
              })
              .catch(function (e) {
                o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "Unable to retrieve CTWA context data, error: ",
                      "",
                    ])),
                  e,
                );
              });
        };
      (S(function () {
        (Nt.current.debounceAndCap(50, 50),
          Ct && (!Jt || Jt.sourceUrl !== Ct.sourceUrl) && (Zt(null), _n(Ct)),
          o(
            "WAWebPttMessageUserJourneyLogger",
          ).PttMessageUserJourneyLogger.setHasDraft(
            O.pttRecordingSession != null,
          ));
      }, []),
        r("useWAWebOnUnmount")(function () {
          var e;
          (Nt.current.cancel(),
            Ze.current.abort(),
            (e = xt.current) == null || e.cancel(),
            pn());
        }));
      var fn = E(V);
      S(
        function () {
          var e = fn.current;
          ((fn.current = V), e !== V && ge(null));
        },
        [ge, V],
      );
      var gn = r("useWAWebDebouncedCallback")(pn, 200),
        hn = function () {
          var e = Ae.current.trim().length > 0;
          return e;
        },
        yn = function (t) {
          Ot == null || Ot.focus();
        },
        Cn = function (t, n) {
          Ot == null || Ot.replaceSelection(t, n);
        },
        bn = function (t, n) {
          if (t === " " && !hn()) return o("WAWebCmd").Cmd.scrollMessages();
          (yn(!0), Cn(t, n));
        },
        vn = function (t) {
          if (
            j.isBot() &&
            !o("WAWebBotUtils").isBotChannelFBID(j) &&
            (!o("WAWebBotUtils").isMetaAiBot(j) ||
              !(
                o("WAWebBotGating").isMetaAiImageInputEnabled() ||
                o("WAWebBotGating").isMetaAiDocUploadEnabled()
              ))
          )
            return (
              o("WAWebToastManager").ToastManager.open(
                C.jsx(o("WAWebToast.react").Toast, {
                  msg: u._(/*BTDS*/ "This action is not supported."),
                }),
              ),
              !1
            );
          var e = r("justknobx")._("4552"),
            n = t.filter(function (t) {
              var n = o("WAWebFileUtils").typeFromMimetype(t.type);
              return n === o("WAWebFileUtils").FILETYPE.DOCUMENT
                ? e
                : n === o("WAWebFileUtils").FILETYPE.IMAGE ||
                    n === o("WAWebFileUtils").FILETYPE.VIDEO ||
                    n === o("WAWebFileUtils").FILETYPE.AUDIO;
            });
          return (
            n.length > 0 &&
              (gn.flush(),
              o("WAWebCmd").Cmd.attachMediaDrawer({
                chat: O,
                threadId: V,
                attachments: n.map(function (e) {
                  return { file: e };
                }),
                fileOrigin: o("WAWebWamEnumMediaPickerOriginType")
                  .MEDIA_PICKER_ORIGIN_TYPE.PASTE,
                initCaption: ot(),
                onComplete: Fn,
              })),
            !0
          );
        },
        Sn = function (t) {
          vn(t);
        },
        Rn = function (t) {
          (yn(!0), Ot == null || Ot.paste(t));
        },
        Ln = E($.OTHER),
        En = function () {
          if (r("justknobx")._("169")) Ot == null || Ot.replaceSelection("/");
          else {
            var e;
            (e = wt.current) == null || e.togglePanel();
          }
          Ln.current = $.ATTACHMENT_MENU;
        },
        kn = function () {
          Ot == null || Ot.reset();
        },
        In = function () {
          yn();
        },
        Tn = function () {
          o("WAWebComposeBoxActions").ComposeBoxActions.setIsFocus(!0);
        },
        Dn = function () {
          o("WAWebComposeBoxActions").ComposeBoxActions.setIsFocus(!1);
        },
        xn = E(null),
        $n = E(null),
        Pn = function (t) {
          (bt(t), Zt(null), _n(t));
        },
        Nn = function (t) {
          sn(function (e) {
            var n = e.handleMultiple,
              r = e.handleOnce;
            return {
              handleOnce: t.handleOnce ? r.concat(t.handleOnce) : r,
              handleMultiple: t.handleMultiple ? r.concat(t.handleMultiple) : n,
            };
          });
        },
        Mn = function () {
          (bt(null), Zt(null), pn(), Nt.current.onOrBefore(1));
        },
        wn = function () {
          var e;
          ((e = St.current) == null || e.activate(), yn(!1));
        },
        An = function (t) {
          var e;
          (t.stopPropagation(),
            W(t),
            (e = xt.current) == null || e.debounce(0));
        },
        Fn = r("useWAWebStableCallback")(function (e, t) {
          t === void 0 && (t = {});
          var n = t,
            r = n.initCaptionUsed;
          (e && r && kn(), e && Mn());
        }),
        On = r("useWAWebStableCallback")(function () {
          gn.flush();
        }),
        Bn = function () {
          (Kt(null), In());
        },
        Wn = function (t, n, a, i) {
          var e = o("WAWebComposeBoxUtils").fetchGif(t, n, a, i);
          return (
            gn.flush(),
            (de || me) && o("WAWebModalManager").ModalManager.close(),
            o("WAWebCmd").Cmd.attachMediaDrawer({
              chat: O,
              threadId: V,
              attachments: [e],
              initCaption: ot(),
              fileOrigin: o("WAWebWamEnumMediaPickerOriginType")
                .MEDIA_PICKER_ORIGIN_TYPE.CHAT_GIF_INAPP,
              onComplete: function (t, n) {
                (Fn(t, n), t && Bn());
              },
              isQuestion: de,
              questionReplyQuotedMessage: me,
            }),
            e.catch(r("WAWebNoop")),
            e
          );
        },
        qn = function (t, n, r) {
          Wn(t, t, n, r);
        },
        Un = function (t, n, r) {
          var e = fe != null ? fe : H,
            a = o("WAWebApiPrepareCtwaContextSend").prepareCtwaContextSend(
              Ct,
              Jt,
            ),
            i = {
              stickerSendOrigin: n,
              quotedMsg: e,
              ctwaContext: a,
              threadId: V,
            };
          (r ===
            o("WAWebNewsletterWamoSubMessageType").NewsletterWamoSubMessageType
              .WamoSub && (i.isWamoSub = !0),
            o("WAWebSendStickerAction").sendStickerToChat(O, t, i),
            ge(null),
            Mn());
        },
        Vn = function (t, n, r) {
          if (t.isCreateButton) {
            var e;
            (new (o(
              "WAWebWebcStickerMakerEventsWamEvent",
            ).WebcStickerMakerEventsWamEvent)({
              stickerMakerEventName: o(
                "WAWebWamEnumWebcStickerMakerEventNameType",
              ).WEBC_STICKER_MAKER_EVENT_NAME_TYPE.STICKER_MAKER_BUTTON_TAP,
            }).commit(),
              (e = kt.current) == null || e.open());
            return;
          }
          if (
            se &&
            o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(
              ce,
            ) &&
            r != null &&
            r.target &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isWamoSubCreatorExperienceSupported()
          ) {
            var a = function (r) {
              Un(t, n, r);
            };
            Le({ popupAnchorEl: r.target, handleSelect: a });
          } else Un(t, n);
        },
        Hn = function (t, n, r) {
          r === !0
            ? Un(
                t,
                n,
                o("WAWebNewsletterWamoSubMessageType")
                  .NewsletterWamoSubMessageType.WamoSub,
              )
            : Un(t, n);
        },
        Gn = function (t) {
          var e = hn();
          Ae.current = t;
          var n = hn();
          (n !== e &&
            (window.setTimeout(function () {
              o("WAWebComposeBoxActions").ComposeBoxActions.setHasText(n);
            }, 0),
            ht(n)),
            n
              ? (ee.subscribe(),
                o("WAWebPresenceChatAction").markComposing(O),
                o(
                  "WAWebPrepareMessageSendingAction",
                ).prepareChatForMessageSending(O))
              : ((At = null), o("WAWebPresenceChatAction").markPaused(O)));
          var r = We();
          (((!r && Ee.current) || (r && r.url !== Ee.current)) && pt(),
            Tt.current ? Nt.current.onOrBefore(1) : Nt.current.debounce(D),
            (Tt.current = !1),
            gn(),
            !tn && t && !K && nn(!0));
          var a = Mt.current.data,
            i = a.mentionedJidList,
            l =
              i == null
                ? void 0
                : i.find(function (e) {
                    return e.isBot();
                  });
          (Ge(l), at.current ? (at.current = !1) : ut(n, fe != null));
        },
        zn = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e;
            (O.pttRecordingSession != null
              ? (e = O.pttRecordingSession)
              : ((e = o(
                  "WAWebPttComposerRecordingSession",
                ).createRecordingSession({
                  chat: o("WAWebStateUtils").unproxy(O),
                })),
                e.on("change:recordingState", function () {
                  var t = e.recordingState;
                  O.pttRecordingSession === e &&
                    (t ===
                      o("WAWebRecordingSessionStateEnum").RecordingSessionState
                        .ERROR ||
                      t ===
                        o("WAWebRecordingSessionStateEnum")
                          .RecordingSessionState.STOPPED) &&
                    Ce(null);
                })),
              Ut(e),
              Gt(!1),
              o(
                "WAWebPttMessageUserJourneyLogger",
              ).PttMessageUserJourneyLogger.start(O.id, fe != null));
            var t;
            try {
              t = yield e.start();
            } finally {
              var n = t ? e : null;
              (Ce(n), Ut(n), Gt(n != null));
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        jn = function (t) {
          (Kt(t),
            t != null &&
              o("WAWebUserPrefsGeneral").setLastComposeBoxExpressionPanel(t));
        },
        Kn = function (t) {
          var e = t.getFiles();
          return vn(e);
        },
        Qn = function (t) {
          var e = I.exec(t);
          if (e) {
            var n = "https://media.giphy.com/media/" + e[1] + "/200w.mp4";
            return (
              Wn(
                n,
                t,
                o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution
                  .GIPHY,
              ).catch(function () {
                (o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
                  yn(!0),
                  Ot == null || Ot.replaceSelection(t),
                  o("WAWebToastManager").ToastManager.open(
                    C.jsx(o("WAWebToast.react").Toast, {
                      msg: u._(
                        /*BTDS*/ "The item you tried adding failed to load.",
                      ),
                    }),
                  ));
              }),
              !0
            );
          }
          return ((Tt.current = !0), !1);
        },
        Xn = function () {
          return Lt.current ? Lt.current.offsetWidth - T : 0;
        },
        Yn = function (t) {
          var e,
            n,
            r = t.target;
          (r instanceof HTMLElement &&
            (e = $n.current) != null &&
            e.contains(r)) ||
            (r instanceof HTMLElement &&
              r ===
                (Ot == null || (n = Ot.editor) == null
                  ? void 0
                  : n.getRootElement()) &&
              wn(),
            !Y && gt && nn(!0));
        },
        Jn = function (t) {
          var e;
          o("WAWebReconnectUtil").reconnect();
          var n = Mt.current.text.trim(),
            a = Mt.current.data;
          if (!(n.length === 0 && !Ct)) {
            if (
              o(
                "WAWebLimitSharingUIUtils",
              ).isLimitSharingReceiverEnabledForUsers(O, a.mentionedJidList)
            ) {
              o("WAWebLimitSharingUIUtils").showLimitSharingInvokeBlockedPopup(
                O,
              );
              return;
            }
            ct();
            var i = fe != null ? fe : H,
              l = Ie == null ? void 0 : Ie.data,
              s = o("PaymentLink").getPaymentLinkMessageMetadata(
                l,
                o("WAWebCodeFormatMutator").removeCodeBlocks(n),
              ),
              u = a.mentionedJidList || [],
              c = a.groupMentions || [],
              d = o("WAWebApiPrepareCtwaContextSend").prepareCtwaContextSend(
                Ct,
                Jt,
              ),
              m = Dt.current;
            if (
              (Kt(null),
              ht(!1),
              Te(null),
              (e = xn.current) == null || e.close(),
              At &&
                (o("WAWebQuickReplyLogging").logQuickReplySendEvent(
                  At === $.ATTACHMENT_MENU
                    ? o("WAWebWamEnumQuickReplyEntryPoint")
                        .QUICK_REPLY_ENTRY_POINT
                        .QUICK_REPLY_ENTRY_POINT_ATTACHMENT_PANEL
                    : o("WAWebWamEnumQuickReplyEntryPoint")
                        .QUICK_REPLY_ENTRY_POINT
                        .QUICK_REPLY_ENTRY_POINT_KEYBOARD,
                ),
                (At = null)),
              m)
            ) {
              var _ = o("WAWebStateUtils").unproxy(O);
              _.urlText && (_.urlText = void 0);
            }
            var f =
                V != null
                  ? {
                      threadIds: [V],
                      aiThreadInfo: o(
                        "WAWebMaybeGetAiThreadInfo",
                      ).maybeGetAiThreadInfo(O, V),
                    }
                  : {},
              g = babelHelpers.extends(
                {
                  linkPreview: l,
                  quotedMsg: i,
                  mentionedJidList: u,
                  groupMentions: c,
                  quotedMsgAdminGroupJid: re,
                  quotedMsgAdminGroupSubject: oe,
                  quotedMsgAdminParentGroupJid: ae,
                  ctwaContext: d,
                  isQuestion: de,
                  questionReplyQuotedMessage: me,
                },
                f,
                { maybeNonJidMentioned: $t.current != null && $t.current > 0 },
              );
            if (
              (se
                ? (t ===
                    o("WAWebNewsletterWamoSubMessageType")
                      .NewsletterWamoSubMessageType.WamoSub &&
                    o(
                      "WAWebNewsletterGatingUtils",
                    ).isWamoSubCreatorExperienceSupported() &&
                    (g.isWamoSub = !0),
                  o("WAWebNewsletterSendMsgAction").sendNewsletterTextMsg(
                    O,
                    n,
                    g,
                  ))
                : (o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "sendTextAction inside WAWebComposeBox",
                      ])),
                  ),
                  o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
                    O,
                    n,
                    babelHelpers.extends({}, g, {
                      botMsgBodyType:
                        o("WAWebBotGating").isBizBot3pAvailable() &&
                        je != null &&
                        je.commands &&
                        o("WAWebLexicalUtils").hasBotCommand(
                          Ot == null ? void 0 : Ot.editor,
                        )
                          ? o("WAWebBotTypes").BotMsgBodyType.COMMAND
                          : null,
                      paymentLinkMetadata: s,
                    }),
                  ),
                  Mn(),
                  ln.handleOnce.forEach(function (e) {
                    return e == null ? void 0 : e();
                  }),
                  ln.handleMultiple.forEach(function (e) {
                    return e == null ? void 0 : e();
                  }),
                  sn({ handleMultiple: ln.handleMultiple, handleOnce: [] })),
              o("PaymentLinkWamLogger").shouldLogSendEvent())
            ) {
              var h = o("WAWebUserPrefsMeUser").getMeUser(),
                y = o("WAWebBusinessProfileUtils").hasCatalog(
                  o(
                    "WAWebBusinessProfileCollection",
                  ).BusinessProfileCollection.get(h),
                );
              o("PaymentLinkWamLogger")
                .genLogSendEventIfPaymentLink(
                  o("WAWebCodeFormatMutator").removeCodeBlocks(n),
                  xe,
                  Ie,
                  Ne,
                  y,
                  O,
                  s,
                )
                .catch(r("WAWebNoop"));
            }
            ((Dt.current = !1),
              ($t.current = null),
              ge(null),
              he(null),
              ye(null),
              O.setComposeContents({}),
              kn(),
              hn());
          }
        },
        Zn = function () {
          if (
            se &&
            o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(
              ce,
            ) &&
            vt.current &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isWamoSubCreatorExperienceSupported()
          ) {
            var e = function (t) {
              Jn(t);
            };
            Le({ popupAnchorEl: vt.current, handleSelect: e });
          } else Jn();
          (q == null || q(),
            o("WAWebCmd").Cmd.chatMessageSent(O),
            (at.current = !0),
            st(fe != null),
            fe != null &&
              o(
                "WAWebQuotedMessageUserJourneyLogger",
              ).QuotedMessageUserJourneyLogger.quotedMessageSent(O.id));
        },
        er = r("useWAWebStableCallback")(function (e) {
          Ot == null || Ot.setTextContent(e);
        }),
        tr = function (t) {
          if (jt) {
            var e;
            ((e = Et.current) == null || e.restoreFocus(!0),
              o("WAWebStopEvent").stopEvent(t));
          }
        },
        nr = r("useWAWebDebouncedCallback")(
          function (e) {
            hn() || o("WAWebComposeBoxUtils").editLastMessage(O, e);
          },
          200,
          { trailing: !0 },
        ),
        rr = function () {
          (Ut(null), Gt(!1), In());
        },
        or = function () {
          (q == null || q(), o("WAWebCmd").Cmd.chatMessageSent(O));
        },
        ar = function (t) {
          if (t) {
            t.stopPropagation();
            var e = t.target.files == null ? [] : Array.from(t.target.files);
            e.length &&
              (new (o(
                "WAWebWebcStickerMakerEventsWamEvent",
              ).WebcStickerMakerEventsWamEvent)({
                stickerMakerEventName: o(
                  "WAWebWamEnumWebcStickerMakerEventNameType",
                ).WEBC_STICKER_MAKER_EVENT_NAME_TYPE.IMAGE_UPLOADED,
              }).commit(),
              o("WAWebCmd").Cmd.attachMediaDrawer({
                chat: O,
                threadId: V,
                attachments: e.map(function (e) {
                  return { file: e, stickerMaker: !0 };
                }),
                fileOrigin: o("WAWebWamEnumMediaPickerOriginType")
                  .MEDIA_PICKER_ORIGIN_TYPE.CHAT_PHOTO_LIBRARY,
                sendAsSticker: !0,
              }));
          }
        },
        ir = function (t) {
          if (
            o("WAWebABProps").getABPropConfigValue(
              "enable_mention_everyone_sender_web",
            )
          ) {
            var e;
            $t.current = ((e = $t.current) != null ? e : 0) | t;
          }
        };
      r("useWAWebComposeBoxActionListeners")(O, {
        onFocus: In,
        onPaste: bn,
        onPasteFiles: Sn,
        onRoutedPaste: Rn,
        onSend: Zn,
        onToggleQuickReplies: En,
        onCtwaContextLinkData: Pn,
        onSendingLogAttributes: Nn,
        onSetTextContent: er,
        onSetNonJidMentions: ir,
      });
      var lr =
          o("WAWebTextSizeUtils").getWAWebTextSizeStyles().composerFontSize,
        sr = o("WAWebStateUtils").unproxy(O).groupMetadata,
        ur = function (t) {
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "handlePromptSelect inside WAWebComposeBox",
              ])),
          );
          var e;
          (V != null &&
            (e = o("WAWebMaybeGetAiThreadInfo").maybeGetAiThreadInfo(O, V)),
            o("WAWebSendTextMsgChatAction").sendTextMsgToChat(O, t, {
              botMsgBodyType: o("WAWebBotGating").isBizBot3pAvailable()
                ? o("WAWebBotTypes").BotMsgBodyType.PROMPT
                : null,
              threadIds: V ? [V] : void 0,
              aiThreadInfo: e,
            }));
        },
        cr = o("WAWebComposeBoxUtils").getComposeBoxPlaceholderText({
          chat: O,
          questionType: U,
        }),
        dr = o("WAWebComposeBoxUtils").getComposeBoxAriaLabelText(O),
        mr = C.jsxs(r("WAWebRichTextInput.react"), {
          ref: Bt,
          onFocus: Tn,
          onBlur: Dn,
          placeholder: cr,
          ariaLabel: dr,
          ariaActiveDescendents: Xt,
          textXstyle: lr,
          xstyle: N.richTextRefresh,
          testid: void 0,
          editorName: "compose-box",
          initialText: (y = ot()) == null ? void 0 : y.text,
          readOnly: qt != null,
          maxLength: r("WAWebConstantsDeprecated").MAX_TXT_MSG_SIZE,
          maxVisibleLines: x,
          minVisibleLines: cn ? 2 : 1,
          spellCheck: be.spellcheck,
          enterIsNewLine: !be.enterIsSend,
          multiline: !0,
          focusOnMount: !Ue,
          tabOrder: o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_INPUT,
          onChange: function (t) {
            ((Mt.current = t), Gn(t.parsableText));
          },
          onEnter: Zn,
          onFiles: Kn,
          onTextPaste: Qn,
          onMaxPasteExceeded: o("WAWebComposeBoxUtils").handleMaxPasteExceeded,
          children: [
            C.jsx(r("WAWebRichTextInputPlugins.react"), {
              groupMetadata: sr,
              transformTextEmoji: be.transformTextEmoji,
              textFormatEnabled: !0,
              bulletPointsEnabled: !0,
              numberedListEnabled: !0,
              inlineCodeEnabled: !0,
              blockQuoteEnabled: !0,
              internLinksEnabled: !0,
              phoneNumbersEnabled: !1,
              linksEnabled: !0,
              textFormatShortcutsEnabled: !0,
              floatingToolbarEnabled: !cn,
              botInvokeEnabled: O.canInvokeBot(),
              highlightedBotCommands: Ye,
            }),
            C.jsx(r("WAWebEmojiPickerPlugin"), {}),
            C.jsx(r("WAWebMentionPickerPlugin"), {
              chat: o("WAWebStateUtils").unproxy(O),
              elevatedPushNamesEnabled: o(
                "WAWebElevatedPushNamesFlag",
              ).elevatedPushNamesM2Enabled(O),
              botInvokeEnabled: O.canInvokeBot(),
              source: "chat-composer",
            }),
            o("WAWebBotGating").isHatchCommandsEnabled() &&
              o("WAWebBotUtils").isHatchBot(O.id) &&
              C.jsx(r("WAWebHatchCommandPickerPlugin.react"), { chatId: O.id }),
            o("WAWebBizGatingUtils").canSendQuickReplyInChat(O) &&
              r("justknobx")._("169") &&
              (Ot == null ? void 0 : Ot.editor) &&
              C.jsx(r("WAWebQuickReplyPickerPlugin"), { editor: Ot.editor }),
          ],
        }),
        pr,
        _r = Ot == null ? void 0 : Ot.editor;
      (_r != null &&
        (pr = C.jsxs(C.Fragment, {
          children: [
            !1,
            !1,
            o("WAWebBizGatingUtils").canSendQuickReplyInChat(O) &&
              !r("justknobx")._("169") &&
              C.jsx(r("WAWebQuickReplySuggestions.react"), {
                kind: o("WAWebSuggestionsPanelContainer.react")
                  .SuggestionsPanelKind.ComposeBox,
                editor: _r,
                ref: wt,
                onSelect: function () {
                  (Ln.current === $.ATTACHMENT_MENU
                    ? (o(
                        "WAWebAttachmentMenuLogger",
                      ).AttachmentMenuLogger.logAttachmentSend(
                        O,
                        o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                          .QUICK_REPLY,
                      ),
                      (At = $.ATTACHMENT_MENU))
                    : (At = $.OTHER),
                    (Ln.current = $.OTHER));
                },
                onHide: function () {
                  (Ln.current === $.ATTACHMENT_MENU &&
                    o(
                      "WAWebAttachmentMenuLogger",
                    ).AttachmentMenuLogger.logAttachmentCancel(
                      O,
                      o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                        .QUICK_REPLY,
                    ),
                    (Ln.current = $.OTHER));
                },
              }),
            ((o("WAWebBotBaseGating").isBizBot3pEnabled() && je) ||
              (o("WAWebBotBaseGating").isBotEnabled() && Xe)) &&
              C.jsx(
                o("WAWebBotCommandSuggestions.react").BotCommandSuggestions,
                {
                  kind: o("WAWebSuggestionsPanelContainer.react")
                    .SuggestionsPanelKind.ComposeBox,
                  editor: _r,
                  businessProfile: je && o("WAWebStateUtils").unproxy(je),
                  metaBotId: Ke,
                },
              ),
            !r("gkx")("26258") && n("cr:5993")
              ? C.jsx(n("cr:5993"), {
                  kind: o("WAWebSuggestionsPanelContainer.react")
                    .SuggestionsPanelKind.ComposeBox,
                  editor: _r,
                })
              : null,
          ],
        })),
        R(
          M,
          function () {
            return {
              flushSaveComposeContentDebounced: On,
              getCurrentComposeContent: ot,
              updateTextAfterMediaDrawerClose: Fn,
            };
          },
          [On, ot, Fn],
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "start_ptt_recording",
          function () {
            Ht || zn();
          },
        ));
      var fr = null;
      rt &&
        (fr = C.jsx(r("WAWebBotSuggestions.react"), {
          id: j,
          onPromptSelect: ur,
        }));
      var gr = {
          chat: O,
          pttComposerActive: Ht,
          isMessageToBot: ze(),
          getCurrentComposeContent: ot,
          richTextInputRef: Ot,
          updateTextAfterMediaDrawerClose: Fn,
          inputHotkeyRef: It,
          handleTab: tr,
          handleMetaUpDebounced: nr,
          handleInputFocus: Yn,
          input: mr,
          expressionsPanelWrapperRef: $n,
          expressionsPanelPickerRef: xn,
          replaceInputSelection: Cn,
          handlePanelsSticker: Vn,
          handlePanelsStickerFromStore: Hn,
          handlePanelsGif: qn,
          hasTextState: gt,
          handleSendText: Zn,
          recordingSession: qt,
          startRecording: zn,
          threadId: V,
        },
        hr = o("WAWebComposeBoxPopupPanels.react").useComposePopupPanels(Et, {
          chat: O,
          linkPreviewData: Ie == null ? void 0 : Ie.data,
          links: Oe,
          ctwaContextLinkData: Ct,
          ctwaContextData: Jt,
          restoreFocus: In,
          selectedExpressionPanel: jt,
          getComposeBlockWidth: Xn,
          onComposeHeightChange: B,
          omitLinkPreview: dt,
          omitCtwa: Mn,
          onEmoji: Cn,
          onGif: qn,
          onExpressionPanelChange: jn,
          onSticker: Vn,
          onExpressionPanelClose: Bn,
          showSpamPanel: F && tn,
          onClickNotSpam: rn,
          onClickDismissSpam: on,
          questionReplyQuotedMessage: w.questionReplyQuotedMessage,
          questionType: U,
        }),
        yr = hr.PopupPanels,
        Cr = hr.hasTopPanels,
        br;
      return (
        cn && n("cr:7456")
          ? (br = C.jsx(
              n("cr:7456"),
              babelHelpers.extends({}, gr, { ref: vt, onCollapseComposer: mn }),
            ))
          : (br = C.jsx(
              r("WAWebMessageComposer.react"),
              babelHelpers.extends({}, gr, {
                ref: vt,
                hasTopPanel: Cr,
                closePttComposer: rr,
                onPttSend: or,
                questionType: U,
                questionReplyQuotedMessage: w.questionReplyQuotedMessage,
                threadId: V,
              }),
            )),
        C.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
          name: "compose-box",
          type: "fatal",
          children: C.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "ComposeBox",
            ref: St,
            uimState: o("WAWebUim").UIMState.PASSIVE,
            requestFocus: Ue ? null : In,
            children: C.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
              component: "footer",
              tabIndex: null,
              handlers: { pagedown: An, pageup: An },
              className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                ((b = {}), (b._ak1n = Ht), (b._ak1i = !0), (b._anyz = rt), b),
                "x1wiwyrm",
              ),
              ref: Rt,
              children: [
                fr,
                C.jsx(r("WAWebCopyPasteCopyableArea.react"), {
                  canCut: !0,
                  className: (g || (g = r("stylex")))(
                    N.blockCompose,
                    [
                      N.blockComposeRefresh,
                      o("WAWebUISpacing").uiMargin.horizAuto,
                    ],
                    !1,
                  ),
                  ref: Lt,
                  children: C.jsxs("div", {
                    "data-testid": void 0,
                    className: "x1n2onr6 x98rzlu xh8yej3 xeuugli x1gg8mnh",
                    children: [
                      null,
                      C.jsx(r("WAWebVelocityTransitionGroup"), {
                        transitionName: "messageComposer",
                        children: br,
                      }),
                    ],
                  }),
                }),
                yr,
                C.jsx(r("WAWebFilePicker.react"), {
                  ref: kt,
                  mimes: o("WAWebMimeTypes").IMAGE_MIMES,
                  onChange: ar,
                  multiple: !1,
                }),
                pr,
                Re != null &&
                  C.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
                    handleSelect: Re.handleSelect,
                    popupAnchorEl: Re.popupAnchorEl,
                    onDismiss: function () {
                      return Le(null);
                    },
                  }),
              ],
            }),
          }),
        })
      );
    }
    M.displayName = M.name + " [from " + i.id + "]";
    var w = M;
    function A(e) {
      var t = e.chat,
        n = e.handleFocus,
        r = t.id.toString();
      return (
        o("useWAWebListener").useListener(
          o("WAWebComposeBoxActions").ComposeBoxActions,
          "focus_" + r,
          n,
        ),
        o("useWAWebListener").useListener(
          o("WAWebComposeBoxActions").ComposeBoxActions,
          "focus",
          n,
        ),
        C.jsx(o("WAWebUimUie.react").UIE, {
          displayName: "PlaceholderComposeBox",
        })
      );
    }
    ((A.displayName = A.name + " [from " + i.id + "]"),
      (l.ComposeBox = w),
      (l.PlaceholderComposeBox = A));
  },
  226,
);
