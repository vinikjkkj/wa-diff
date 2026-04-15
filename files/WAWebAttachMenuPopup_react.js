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
      var t = o("react-compiler-runtime").c(137),
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
            t[36] !== n.id
              ? ((q = o("WAWebMediaGatingUtils").supportsMultipleUploads(
                  n.id,
                  "document",
                )),
                (t[36] = n.id),
                (t[37] = q))
              : (q = t[37]);
            var U;
            t[38] !== n || t[39] !== D
              ? ((U = function (t) {
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
                (t[38] = n),
                (t[39] = D),
                (t[40] = U))
              : (U = t[40]);
            var V;
            (t[41] !== n || t[42] !== I || t[43] !== q || t[44] !== U
              ? ((V = s.jsx(r("WAWebAttachMenuPopupItemDocuments.react"), {
                  chat: n,
                  dismissMenu: I,
                  multiple: q,
                  onDocumentPick: U,
                })),
                (t[41] = n),
                (t[42] = I),
                (t[43] = q),
                (t[44] = U),
                (t[45] = V))
              : (V = t[45]),
              B.push(V));
          }
          var H;
          t[46] !== n.id
            ? ((H = o("WAWebAttachMenuPopupUtils").getMediaSelectionType(n.id)),
              (t[46] = n.id),
              (t[47] = H))
            : (H = t[47]);
          var G = H;
          if (G != null) {
            var z;
            t[48] !== n.id
              ? ((z = o("WAWebMediaGatingUtils").supportsMultipleUploads(
                  n.id,
                  "image",
                )),
                (t[48] = n.id),
                (t[49] = z))
              : (z = t[49]);
            var j;
            t[50] !== n || t[51] !== D
              ? ((j = function (t) {
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
                (t[50] = n),
                (t[51] = D),
                (t[52] = j))
              : (j = t[52]);
            var K;
            (t[53] !== n ||
            t[54] !== I ||
            t[55] !== G ||
            t[56] !== z ||
            t[57] !== j
              ? ((K = s.jsx(
                  o("WAWebAttachMenuPopupItemPhotos.react")
                    .AttachMenuPopupItemPhotos,
                  {
                    chat: n,
                    dismissMenu: I,
                    multiple: z,
                    onMediaPick: j,
                    mediaSelectionType: G,
                  },
                )),
                (t[53] = n),
                (t[54] = I),
                (t[55] = G),
                (t[56] = z),
                (t[57] = j),
                (t[58] = K))
              : (K = t[58]),
              B.push(K));
          }
          if (W.has(o("WAWebMsgType").MSG_TYPE.IMAGE)) {
            var Q;
            t[59] !== l || t[60] !== m
              ? ((Q = function () {
                  o("WAWebCmd").Cmd.openCaptureMedia({
                    onMenuComplete: l,
                    threadId: m,
                  });
                }),
                (t[59] = l),
                (t[60] = m),
                (t[61] = Q))
              : (Q = t[61]);
            var X;
            (t[62] !== n || t[63] !== Q
              ? ((X = s.jsx(r("WAWebAttachMenuPopupItemCamera.react"), {
                  chat: n,
                  onCaptureClick: Q,
                })),
                (t[62] = n),
                (t[63] = Q),
                (t[64] = X))
              : (X = t[64]),
              B.push(X));
          }
          if (o("WAWebQuestionsSenderGatingUtils").isQuestionSenderEnabled(n)) {
            var Y;
            (t[65] !== n || t[66] !== a
              ? ((Y = s.jsx(r("WAWebAttachMenuPopupItemQuestion.react"), {
                  chat: n,
                  getComposeBoxEditorRef: a,
                })),
                (t[65] = n),
                (t[66] = a),
                (t[67] = Y))
              : (Y = t[67]),
              B.push(Y));
          }
          if (
            (f &&
              o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterAudioFileSendingEnabled()) ||
            (!f && !y && !v && !L)
          ) {
            var J;
            t[68] !== n.id
              ? ((J = o("WAWebMediaGatingUtils").supportsMultipleUploads(n.id)),
                (t[68] = n.id),
                (t[69] = J))
              : (J = t[69]);
            var Z;
            t[70] !== n || t[71] !== D
              ? ((Z = function (t) {
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
                (t[70] = n),
                (t[71] = D),
                (t[72] = Z))
              : (Z = t[72]);
            var ee;
            (t[73] !== n || t[74] !== I || t[75] !== J || t[76] !== Z
              ? ((ee = s.jsx(r("WAWebAttachMenuPopupItemAudio.react"), {
                  chat: n,
                  dismissMenu: I,
                  multiple: J,
                  onMediaPick: Z,
                })),
                (t[73] = n),
                (t[74] = I),
                (t[75] = J),
                (t[76] = Z),
                (t[77] = ee))
              : (ee = t[77]),
              B.push(ee));
          }
          if (!f && !y && !v && !o("WAWebBotUtils").isManusBot(n.id)) {
            var te;
            (t[78] !== n || t[79] !== l
              ? ((te = s.jsx(r("WAWebAttachMenuPopupItemContacts.react"), {
                  chat: n,
                  onMenuComplete: l,
                })),
                (t[78] = n),
                (t[79] = l),
                (t[80] = te))
              : (te = t[80]),
              B.push(te));
          }
          if (n.canSendPolls()) {
            var ne;
            (t[81] !== n || t[82] !== a
              ? ((ne = s.jsx(r("WAWebAttachMenuPopupItemPolls.react"), {
                  chat: n,
                  getComposeBoxEditorRef: a,
                })),
                (t[81] = n),
                (t[82] = a),
                (t[83] = ne))
              : (ne = t[83]),
              B.push(ne));
          }
          if (
            f &&
            o("WAWebNewsletterGatingUtils").isNewsletterQuizSenderEnabled()
          ) {
            var re;
            (t[84] !== n || t[85] !== a
              ? ((re = s.jsx(
                  o("WAWebAttachMenuPopupItemQuiz.react")
                    .AttachMenuPopupItemQuiz,
                  { chat: n, getComposeBoxEditorRef: a },
                )),
                (t[84] = n),
                (t[85] = a),
                (t[86] = re))
              : (re = t[86]),
              B.push(re));
          }
          var oe = W.has(o("WAWebMsgType").MSG_TYPE.STICKER)
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
            ae;
          t[87] !== n || t[88] !== L
            ? ((ae =
                o("WAWebChatGetters").getIsGroup(n) ||
                (o("WAWebChatGetters").getIsUser(n) &&
                  !o("WAWebChatGetters").getIsMetaAiBot(n) &&
                  !L)
                  ? s.jsx(r("WAWebAttachMenuPopupItemEvents.react"), {
                      chat: n,
                    })
                  : null),
              (t[87] = n),
              (t[88] = L),
              (t[89] = ae))
            : (ae = t[89]);
          var ie = ae,
            le;
          if (
            (t[90] !== ie || t[91] !== oe
              ? ((le = [ie, oe]), (t[90] = ie), (t[91] = oe), (t[92] = le))
              : (le = t[92]),
            B.push(le),
            W.has(o("WAWebMsgType").MSG_TYPE.IMAGE) &&
              o("WAWebABProps").getABPropConfigValue(
                "web_attach_menu_add_drawing_enabled",
              ))
          ) {
            var se;
            (t[93] !== n || t[94] !== I || t[95] !== D
              ? ((se = s.jsx(r("WAWebAttachMenuPopupItemDrawing.react"), {
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
                (t[93] = n),
                (t[94] = I),
                (t[95] = D),
                (t[96] = se))
              : (se = t[96]),
              B.push(se));
          }
        } else {
          var ue = o(
              "WAWebQuestionsGatingUtils",
            ).getEnabledAttachmentTypesForQuestionType(d),
            ce;
          if (
            (ue.has(o("WAWebMsgType").MSG_TYPE.IMAGE)
              ? ue.has(o("WAWebMsgType").MSG_TYPE.VIDEO)
                ? (ce = o("WAWebAttachMenuPopupItemPhotos.react")
                    .MediaSelectionType.PHOTOS_AND_VIDEOS)
                : (ce = o("WAWebAttachMenuPopupItemPhotos.react")
                    .MediaSelectionType.PHOTOS)
              : ue.has(o("WAWebMsgType").MSG_TYPE.VIDEO) &&
                (ce = o("WAWebAttachMenuPopupItemPhotos.react")
                  .MediaSelectionType.VIDEOS),
            ce != null)
          ) {
            var de;
            t[97] !== n || t[98] !== D
              ? ((de = function (t) {
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
                (t[97] = n),
                (t[98] = D),
                (t[99] = de))
              : (de = t[99]);
            var me;
            (t[100] !== n || t[101] !== I || t[102] !== ce || t[103] !== de
              ? ((me = s.jsx(
                  o("WAWebAttachMenuPopupItemPhotos.react")
                    .AttachMenuPopupItemPhotos,
                  {
                    chat: n,
                    dismissMenu: I,
                    multiple: !1,
                    onMediaPick: de,
                    mediaSelectionType: ce,
                  },
                )),
                (t[100] = n),
                (t[101] = I),
                (t[102] = ce),
                (t[103] = de),
                (t[104] = me))
              : (me = t[104]),
              B.push(me));
          }
          if (ue.has(o("WAWebMsgType").MSG_TYPE.IMAGE)) {
            var pe;
            t[105] !== l || t[106] !== u || t[107] !== d || t[108] !== m
              ? ((pe = function () {
                  o("WAWebCmd").Cmd.openCaptureMedia({
                    onMenuComplete: l,
                    questionType: d,
                    questionReplyQuotedMessage: u,
                    threadId: m,
                  });
                }),
                (t[105] = l),
                (t[106] = u),
                (t[107] = d),
                (t[108] = m),
                (t[109] = pe))
              : (pe = t[109]);
            var _e;
            (t[110] !== n || t[111] !== pe
              ? ((_e = s.jsx(r("WAWebAttachMenuPopupItemCamera.react"), {
                  chat: n,
                  onCaptureClick: pe,
                })),
                (t[110] = n),
                (t[111] = pe),
                (t[112] = _e))
              : (_e = t[112]),
              B.push(_e));
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
      var fe;
      t[113] !== O
        ? ((fe = O && s.jsx(c, {})), (t[113] = O), (t[114] = fe))
        : (fe = t[114]);
      var ge;
      t[115] !== n || t[116] !== I
        ? ((ge =
            o("WAWebPixAttachmentTrayFeature").shouldShowPixInAttachmentTray(
              n,
            ) &&
            s.jsx(r("WAWebAttachMenuPopupPix.react"), {
              chat: n,
              dismissMenu: I,
            })),
          (t[115] = n),
          (t[116] = I),
          (t[117] = ge))
        : (ge = t[117]);
      var he;
      t[118] !== n || t[119] !== I || t[120] !== N
        ? ((he =
            N &&
            s.jsx(r("WAWebAttachMenuPopupItemCatalog.react"), {
              chat: n,
              disabled: $,
              dismissMenu: I,
            })),
          (t[118] = n),
          (t[119] = I),
          (t[120] = N),
          (t[121] = he))
        : (he = t[121]);
      var ye;
      t[122] !== n || t[123] !== I || t[124] !== w
        ? ((ye =
            w &&
            s.jsx(r("WAWebAttachMenuPopupItemQuickReplies.react"), {
              chat: n,
              dismissMenu: I,
            })),
          (t[122] = n),
          (t[123] = I),
          (t[124] = w),
          (t[125] = ye))
        : (ye = t[125]);
      var Ce;
      t[126] !== n || t[127] !== I || t[128] !== F
        ? ((Ce =
            F &&
            s.jsx(r("WAWebAttachMenuPopupItemOrders.react"), {
              chat: n,
              dismissMenu: I,
            })),
          (t[126] = n),
          (t[127] = I),
          (t[128] = F),
          (t[129] = Ce))
        : (Ce = t[129]);
      var be;
      if (
        t[130] !== B ||
        t[131] !== fe ||
        t[132] !== ge ||
        t[133] !== he ||
        t[134] !== ye ||
        t[135] !== Ce
      ) {
        var ve = s.jsxs(s.Fragment, { children: [B, fe, ge, he, ye, Ce] });
        ((be = s.jsx(r("WDSMenu.react"), { children: ve })),
          (t[130] = B),
          (t[131] = fe),
          (t[132] = ge),
          (t[133] = he),
          (t[134] = ye),
          (t[135] = Ce),
          (t[136] = be));
      } else be = t[136];
      return be;
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
