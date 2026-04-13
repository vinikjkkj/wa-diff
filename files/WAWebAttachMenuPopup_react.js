__d(
  "WAWebAttachMenuPopup.react",
  [
    "WAWebABProps",
    "WAWebAttachMenuPopupItemAudio.react",
    "WAWebAttachMenuPopupItemCamera.react",
    "WAWebAttachMenuPopupItemCatalog.react",
    "WAWebAttachMenuPopupItemContacts.react",
    "WAWebAttachMenuPopupItemDocuments.react",
    "WAWebAttachMenuPopupItemDrawing.react",
    "WAWebAttachMenuPopupItemEvents.react",
    "WAWebAttachMenuPopupItemOrders.react",
    "WAWebAttachMenuPopupItemPhotos.react",
    "WAWebAttachMenuPopupItemPolls.react",
    "WAWebAttachMenuPopupItemQuestion.react",
    "WAWebAttachMenuPopupItemQuickReplies.react",
    "WAWebAttachMenuPopupItemQuiz.react",
    "WAWebAttachMenuPopupItemStickers.react",
    "WAWebAttachMenuPopupPix.react",
    "WAWebAttachMenuPopupUtils",
    "WAWebAttachMenuUtils",
    "WAWebAttachmentMenuLogger",
    "WAWebBizGatingUtils",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebContactGetters",
    "WAWebMediaEditorOpenTrigger",
    "WAWebMediaEditorUtilsCreateBlankCanvas",
    "WAWebMediaGatingUtils",
    "WAWebModalManager",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebPixAttachmentTrayFeature",
    "WAWebQuestions.flow",
    "WAWebQuestionsGatingUtils",
    "WAWebQuestionsSenderGatingUtils",
    "WAWebWamEnumMediaPickerOriginType",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(134),
        n = e.chat,
        a = e.getComposeBoxEditorRef,
        i = e.getComposeContents,
        l = e.onMenuComplete,
        u = e.questionReplyQuotedMessage,
        d = e.questionType,
        m = e.threadId,
        p;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = [o("WAWebChatGetters").getIsNewsletter]), (t[0] = p))
        : (p = t[0]);
      var _ = o("useWAWebChatValues").useChatValues(n.id, p),
        f = _[0],
        g;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = [o("WAWebChatGetters").getIsBroadcast]), (t[1] = g))
        : (g = t[1]);
      var h = o("useWAWebChatValues").useChatValues(n.id, g),
        y = h[0],
        C;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = [o("WAWebChatGetters").getIsMetaAiBot]), (t[2] = C))
        : (C = t[2]);
      var b = o("useWAWebChatValues").useChatValues(n.id, C),
        v = b[0],
        S;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = [o("WAWebChatGetters").getIsBotChannel]), (t[3] = S))
        : (S = t[3]);
      var R = o("useWAWebChatValues").useChatValues(n.id, S),
        L = R[0],
        E = r("useWAWebUIM")(),
        k;
      t[4] !== E
        ? ((k = function () {
            E == null || E.requestDismiss();
          }),
          (t[4] = E),
          (t[5] = k))
        : (k = t[5]);
      var I = k,
        T;
      t[6] !== n ||
      t[7] !== i ||
      t[8] !== l ||
      t[9] !== u ||
      t[10] !== d ||
      t[11] !== m
        ? ((T = function (t) {
            var e = t.attachments,
              r = t.onCancel,
              a = t.onSend,
              s = t.openTrigger,
              c = t.sendAsSticker,
              p = c === void 0 ? !1 : c;
            o("WAWebCmd").Cmd.attachMediaDrawer({
              chat: n,
              attachments: e,
              fileOrigin: o("WAWebWamEnumMediaPickerOriginType")
                .MEDIA_PICKER_ORIGIN_TYPE.CHAT_PHOTO_LIBRARY,
              initCaption: i == null ? void 0 : i(),
              onComplete: function (t, n) {
                l(t, n);
              },
              onSend: a,
              onCancel: r,
              openTrigger: s,
              sendAsSticker: p,
              isQuestion: d === o("WAWebQuestions.flow").QuestionType.Question,
              questionReplyQuotedMessage: u,
              threadId: m,
            });
          }),
          (t[6] = n),
          (t[7] = i),
          (t[8] = l),
          (t[9] = u),
          (t[10] = d),
          (t[11] = m),
          (t[12] = T))
        : (T = t[12]);
      var D = T,
        x;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = o("WAWebAttachMenuUtils").shouldShowDisabledCatalogOption()),
          (t[13] = x))
        : (x = t[13]);
      var $ = x,
        P;
      t[14] !== n || t[15] !== L
        ? ((P = o("WAWebAttachMenuUtils").shouldShowCatalogOption(n) && !L),
          (t[14] = n),
          (t[15] = L),
          (t[16] = P))
        : (P = t[16]);
      var N = P,
        M;
      t[17] !== n || t[18] !== L
        ? ((M = o("WAWebBizGatingUtils").canSendQuickReplyInChat(n) && !L),
          (t[17] = n),
          (t[18] = L),
          (t[19] = M))
        : (M = t[19]);
      var w = M,
        A;
      t[20] !== n || t[21] !== L
        ? ((A =
            o("WAWebAttachMenuUtils").canSendOrder(n) &&
            !o("WAWebContactGetters").getIsMe(n.contact) &&
            !L),
          (t[20] = n),
          (t[21] = L),
          (t[22] = A))
        : (A = t[22]);
      var F = A,
        O = N || w || F,
        B;
      if (
        t[23] !== n ||
        t[24] !== I ||
        t[25] !== a ||
        t[26] !== L ||
        t[27] !== y ||
        t[28] !== v ||
        t[29] !== f ||
        t[30] !== l ||
        t[31] !== D ||
        t[32] !== u ||
        t[33] !== d ||
        t[34] !== m
      ) {
        var W = o("WAWebMediaGatingUtils").getSupportedMediaTypesForChat(n);
        if (((B = []), d == null)) {
          if (W.has(o("WAWebMsgType").MSG_TYPE.DOCUMENT)) {
            var q;
            t[36] !== n || t[37] !== D
              ? ((q = function (t) {
                  D({
                    attachments: t,
                    onSend: function () {
                      o(
                        "WAWebAttachmentMenuLogger",
                      ).AttachmentMenuLogger.logAttachmentSend(
                        n,
                        o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                          .DOCUMENT,
                      );
                    },
                    onCancel: function () {
                      o(
                        "WAWebAttachmentMenuLogger",
                      ).AttachmentMenuLogger.logAttachmentCancel(
                        n,
                        o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                          .DOCUMENT,
                      );
                    },
                  });
                }),
                (t[36] = n),
                (t[37] = D),
                (t[38] = q))
              : (q = t[38]);
            var U;
            (t[39] !== n || t[40] !== I || t[41] !== q
              ? ((U = s.jsx(r("WAWebAttachMenuPopupItemDocuments.react"), {
                  chat: n,
                  dismissMenu: I,
                  onDocumentPick: q,
                })),
                (t[39] = n),
                (t[40] = I),
                (t[41] = q),
                (t[42] = U))
              : (U = t[42]),
              B.push(U));
          }
          var V;
          t[43] !== n.id
            ? ((V = o("WAWebAttachMenuPopupUtils").getMediaSelectionType(n.id)),
              (t[43] = n.id),
              (t[44] = V))
            : (V = t[44]);
          var H = V;
          if (H != null) {
            var G;
            t[45] !== n.id
              ? ((G = o("WAWebMediaGatingUtils").supportsMultipleUploads(n.id)),
                (t[45] = n.id),
                (t[46] = G))
              : (G = t[46]);
            var z;
            t[47] !== n || t[48] !== D
              ? ((z = function (t) {
                  D({
                    attachments: t,
                    onSend: function () {
                      o(
                        "WAWebAttachmentMenuLogger",
                      ).AttachmentMenuLogger.logAttachmentSend(
                        n,
                        o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                          .PHOTO_AND_VIDEO_LIBRARY,
                      );
                    },
                    onCancel: function () {
                      o(
                        "WAWebAttachmentMenuLogger",
                      ).AttachmentMenuLogger.logAttachmentCancel(
                        n,
                        o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                          .PHOTO_AND_VIDEO_LIBRARY,
                      );
                    },
                  });
                }),
                (t[47] = n),
                (t[48] = D),
                (t[49] = z))
              : (z = t[49]);
            var j;
            (t[50] !== n ||
            t[51] !== I ||
            t[52] !== H ||
            t[53] !== G ||
            t[54] !== z
              ? ((j = s.jsx(
                  o("WAWebAttachMenuPopupItemPhotos.react")
                    .AttachMenuPopupItemPhotos,
                  {
                    chat: n,
                    dismissMenu: I,
                    multiple: G,
                    onMediaPick: z,
                    mediaSelectionType: H,
                  },
                )),
                (t[50] = n),
                (t[51] = I),
                (t[52] = H),
                (t[53] = G),
                (t[54] = z),
                (t[55] = j))
              : (j = t[55]),
              B.push(j));
          }
          if (W.has(o("WAWebMsgType").MSG_TYPE.IMAGE)) {
            var K;
            t[56] !== l || t[57] !== m
              ? ((K = function () {
                  o("WAWebCmd").Cmd.openCaptureMedia({
                    onMenuComplete: l,
                    threadId: m,
                  });
                }),
                (t[56] = l),
                (t[57] = m),
                (t[58] = K))
              : (K = t[58]);
            var Q;
            (t[59] !== n || t[60] !== K
              ? ((Q = s.jsx(r("WAWebAttachMenuPopupItemCamera.react"), {
                  chat: n,
                  onCaptureClick: K,
                })),
                (t[59] = n),
                (t[60] = K),
                (t[61] = Q))
              : (Q = t[61]),
              B.push(Q));
          }
          if (o("WAWebQuestionsSenderGatingUtils").isQuestionSenderEnabled(n)) {
            var X;
            (t[62] !== n || t[63] !== a
              ? ((X = s.jsx(r("WAWebAttachMenuPopupItemQuestion.react"), {
                  chat: n,
                  getComposeBoxEditorRef: a,
                })),
                (t[62] = n),
                (t[63] = a),
                (t[64] = X))
              : (X = t[64]),
              B.push(X));
          }
          if (
            (f &&
              o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterAudioFileSendingEnabled()) ||
            (!f && !y && !v && !L)
          ) {
            var Y;
            t[65] !== n.id
              ? ((Y = o("WAWebMediaGatingUtils").supportsMultipleUploads(n.id)),
                (t[65] = n.id),
                (t[66] = Y))
              : (Y = t[66]);
            var J;
            t[67] !== n || t[68] !== D
              ? ((J = function (t) {
                  D({
                    attachments: t,
                    onSend: function () {
                      o(
                        "WAWebAttachmentMenuLogger",
                      ).AttachmentMenuLogger.logAttachmentSend(
                        n,
                        o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                          .AUDIO,
                      );
                    },
                    onCancel: function () {
                      o(
                        "WAWebAttachmentMenuLogger",
                      ).AttachmentMenuLogger.logAttachmentCancel(
                        n,
                        o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                          .AUDIO,
                      );
                    },
                  });
                }),
                (t[67] = n),
                (t[68] = D),
                (t[69] = J))
              : (J = t[69]);
            var Z;
            (t[70] !== n || t[71] !== I || t[72] !== Y || t[73] !== J
              ? ((Z = s.jsx(r("WAWebAttachMenuPopupItemAudio.react"), {
                  chat: n,
                  dismissMenu: I,
                  multiple: Y,
                  onMediaPick: J,
                })),
                (t[70] = n),
                (t[71] = I),
                (t[72] = Y),
                (t[73] = J),
                (t[74] = Z))
              : (Z = t[74]),
              B.push(Z));
          }
          if (!f && !y && !v && !o("WAWebBotUtils").isManusBot(n.id)) {
            var ee;
            (t[75] !== n || t[76] !== l
              ? ((ee = s.jsx(r("WAWebAttachMenuPopupItemContacts.react"), {
                  chat: n,
                  onMenuComplete: l,
                })),
                (t[75] = n),
                (t[76] = l),
                (t[77] = ee))
              : (ee = t[77]),
              B.push(ee));
          }
          if (n.canSendPolls()) {
            var te;
            (t[78] !== n || t[79] !== a
              ? ((te = s.jsx(r("WAWebAttachMenuPopupItemPolls.react"), {
                  chat: n,
                  getComposeBoxEditorRef: a,
                })),
                (t[78] = n),
                (t[79] = a),
                (t[80] = te))
              : (te = t[80]),
              B.push(te));
          }
          if (
            f &&
            o("WAWebNewsletterGatingUtils").isNewsletterQuizSenderEnabled()
          ) {
            var ne;
            (t[81] !== n || t[82] !== a
              ? ((ne = s.jsx(
                  o("WAWebAttachMenuPopupItemQuiz.react")
                    .AttachMenuPopupItemQuiz,
                  { chat: n, getComposeBoxEditorRef: a },
                )),
                (t[81] = n),
                (t[82] = a),
                (t[83] = ne))
              : (ne = t[83]),
              B.push(ne));
          }
          var re = W.has(o("WAWebMsgType").MSG_TYPE.STICKER)
              ? s.jsx(r("WAWebAttachMenuPopupItemStickers.react"), {
                  chat: n,
                  dismissMenu: I,
                  onMediaPick: function (t) {
                    D({
                      attachments: t,
                      sendAsSticker: !0,
                      onSend: function () {
                        o(
                          "WAWebAttachmentMenuLogger",
                        ).AttachmentMenuLogger.logAttachmentSend(
                          n,
                          o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                            .STICKER_MAKER,
                        );
                      },
                      onCancel: function () {
                        o(
                          "WAWebAttachmentMenuLogger",
                        ).AttachmentMenuLogger.logAttachmentCancel(
                          n,
                          o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                            .STICKER_MAKER,
                        );
                      },
                    });
                  },
                })
              : null,
            oe;
          t[84] !== n || t[85] !== L
            ? ((oe =
                o("WAWebChatGetters").getIsGroup(n) ||
                (o("WAWebChatGetters").getIsUser(n) &&
                  !o("WAWebChatGetters").getIsMetaAiBot(n) &&
                  !L)
                  ? s.jsx(r("WAWebAttachMenuPopupItemEvents.react"), {
                      chat: n,
                    })
                  : null),
              (t[84] = n),
              (t[85] = L),
              (t[86] = oe))
            : (oe = t[86]);
          var ae = oe,
            ie;
          if (
            (t[87] !== ae || t[88] !== re
              ? ((ie = [ae, re]), (t[87] = ae), (t[88] = re), (t[89] = ie))
              : (ie = t[89]),
            B.push(ie),
            W.has(o("WAWebMsgType").MSG_TYPE.IMAGE) &&
              o("WAWebABProps").getABPropConfigValue(
                "web_attach_menu_add_drawing_enabled",
              ))
          ) {
            var le;
            (t[90] !== n || t[91] !== I || t[92] !== D
              ? ((le = s.jsx(r("WAWebAttachMenuPopupItemDrawing.react"), {
                  onDrawingClick: function () {
                    (o(
                      "WAWebAttachmentMenuLogger",
                    ).AttachmentMenuLogger.logAttachMenuClick(
                      n,
                      o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                        .DRAWING,
                    ),
                      I(),
                      D({
                        attachments: [
                          o(
                            "WAWebMediaEditorUtilsCreateBlankCanvas",
                          ).createBlankCanvasAttachment(),
                        ],
                        openTrigger: o("WAWebMediaEditorOpenTrigger")
                          .MediaEditorOpenTrigger.DrawingMenu,
                        onSend: function () {
                          o(
                            "WAWebAttachmentMenuLogger",
                          ).AttachmentMenuLogger.logAttachmentSend(
                            n,
                            o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                              .DRAWING,
                          );
                        },
                        onCancel: function () {
                          o(
                            "WAWebAttachmentMenuLogger",
                          ).AttachmentMenuLogger.logAttachmentCancel(
                            n,
                            o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                              .DRAWING,
                          );
                        },
                      }));
                  },
                })),
                (t[90] = n),
                (t[91] = I),
                (t[92] = D),
                (t[93] = le))
              : (le = t[93]),
              B.push(le));
          }
        } else {
          var se = o(
              "WAWebQuestionsGatingUtils",
            ).getEnabledAttachmentTypesForQuestionType(d),
            ue;
          if (
            (se.has(o("WAWebMsgType").MSG_TYPE.IMAGE)
              ? se.has(o("WAWebMsgType").MSG_TYPE.VIDEO)
                ? (ue = o("WAWebAttachMenuPopupItemPhotos.react")
                    .MediaSelectionType.PHOTOS_AND_VIDEOS)
                : (ue = o("WAWebAttachMenuPopupItemPhotos.react")
                    .MediaSelectionType.PHOTOS)
              : se.has(o("WAWebMsgType").MSG_TYPE.VIDEO) &&
                (ue = o("WAWebAttachMenuPopupItemPhotos.react")
                  .MediaSelectionType.VIDEOS),
            ue != null)
          ) {
            var ce;
            t[94] !== n || t[95] !== D
              ? ((ce = function (t) {
                  (o("WAWebModalManager").ModalManager.close(),
                    D({
                      attachments: t,
                      onSend: function () {
                        o(
                          "WAWebAttachmentMenuLogger",
                        ).AttachmentMenuLogger.logAttachmentSend(
                          n,
                          o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                            .PHOTO_AND_VIDEO_LIBRARY,
                        );
                      },
                      onCancel: function () {
                        o(
                          "WAWebAttachmentMenuLogger",
                        ).AttachmentMenuLogger.logAttachmentCancel(
                          n,
                          o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                            .PHOTO_AND_VIDEO_LIBRARY,
                        );
                      },
                    }));
                }),
                (t[94] = n),
                (t[95] = D),
                (t[96] = ce))
              : (ce = t[96]);
            var de;
            (t[97] !== n || t[98] !== I || t[99] !== ue || t[100] !== ce
              ? ((de = s.jsx(
                  o("WAWebAttachMenuPopupItemPhotos.react")
                    .AttachMenuPopupItemPhotos,
                  {
                    chat: n,
                    dismissMenu: I,
                    multiple: !1,
                    onMediaPick: ce,
                    mediaSelectionType: ue,
                  },
                )),
                (t[97] = n),
                (t[98] = I),
                (t[99] = ue),
                (t[100] = ce),
                (t[101] = de))
              : (de = t[101]),
              B.push(de));
          }
          if (se.has(o("WAWebMsgType").MSG_TYPE.IMAGE)) {
            var me;
            t[102] !== l || t[103] !== u || t[104] !== d || t[105] !== m
              ? ((me = function () {
                  o("WAWebCmd").Cmd.openCaptureMedia({
                    onMenuComplete: l,
                    questionType: d,
                    questionReplyQuotedMessage: u,
                    threadId: m,
                  });
                }),
                (t[102] = l),
                (t[103] = u),
                (t[104] = d),
                (t[105] = m),
                (t[106] = me))
              : (me = t[106]);
            var pe;
            (t[107] !== n || t[108] !== me
              ? ((pe = s.jsx(r("WAWebAttachMenuPopupItemCamera.react"), {
                  chat: n,
                  onCaptureClick: me,
                })),
                (t[107] = n),
                (t[108] = me),
                (t[109] = pe))
              : (pe = t[109]),
              B.push(pe));
          }
        }
        ((t[23] = n),
          (t[24] = I),
          (t[25] = a),
          (t[26] = L),
          (t[27] = y),
          (t[28] = v),
          (t[29] = f),
          (t[30] = l),
          (t[31] = D),
          (t[32] = u),
          (t[33] = d),
          (t[34] = m),
          (t[35] = B));
      } else B = t[35];
      var _e;
      t[110] !== O
        ? ((_e = O && s.jsx(c, {})), (t[110] = O), (t[111] = _e))
        : (_e = t[111]);
      var fe;
      t[112] !== n || t[113] !== I
        ? ((fe =
            o("WAWebPixAttachmentTrayFeature").shouldShowPixInAttachmentTray(
              n,
            ) &&
            s.jsx(r("WAWebAttachMenuPopupPix.react"), {
              chat: n,
              dismissMenu: I,
            })),
          (t[112] = n),
          (t[113] = I),
          (t[114] = fe))
        : (fe = t[114]);
      var ge;
      t[115] !== n || t[116] !== I || t[117] !== N
        ? ((ge =
            N &&
            s.jsx(r("WAWebAttachMenuPopupItemCatalog.react"), {
              chat: n,
              disabled: $,
              dismissMenu: I,
            })),
          (t[115] = n),
          (t[116] = I),
          (t[117] = N),
          (t[118] = ge))
        : (ge = t[118]);
      var he;
      t[119] !== n || t[120] !== I || t[121] !== w
        ? ((he =
            w &&
            s.jsx(r("WAWebAttachMenuPopupItemQuickReplies.react"), {
              chat: n,
              dismissMenu: I,
            })),
          (t[119] = n),
          (t[120] = I),
          (t[121] = w),
          (t[122] = he))
        : (he = t[122]);
      var ye;
      t[123] !== n || t[124] !== I || t[125] !== F
        ? ((ye =
            F &&
            s.jsx(r("WAWebAttachMenuPopupItemOrders.react"), {
              chat: n,
              dismissMenu: I,
            })),
          (t[123] = n),
          (t[124] = I),
          (t[125] = F),
          (t[126] = ye))
        : (ye = t[126]);
      var Ce;
      if (
        t[127] !== B ||
        t[128] !== _e ||
        t[129] !== fe ||
        t[130] !== ge ||
        t[131] !== he ||
        t[132] !== ye
      ) {
        var be = s.jsxs(s.Fragment, { children: [B, _e, fe, ge, he, ye] });
        ((Ce = s.jsx(r("WDSMenu.react"), { children: be })),
          (t[127] = B),
          (t[128] = _e),
          (t[129] = fe),
          (t[130] = ge),
          (t[131] = he),
          (t[132] = ye),
          (t[133] = Ce));
      } else Ce = t[133];
      return Ce;
    }
    function c() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s.jsx(r("WDSMenuItem.react"), { type: "separator" })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    l.default = u;
  },
  98,
);
