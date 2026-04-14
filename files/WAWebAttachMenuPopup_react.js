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
    "useWAWebChatValues",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n,
        a = e.chat,
        i = e.getComposeBoxEditorRef,
        l = e.getComposeContents,
        u = e.onMenuComplete,
        d = e.questionReplyQuotedMessage,
        m = e.questionType,
        p = e.threadId,
        _ = (t = o("useWAWebChatValues")).useChatValues(a.id, [
          (n = o("WAWebChatGetters")).getIsNewsletter,
        ]),
        f = _[0],
        g = t.useChatValues(a.id, [n.getIsBroadcast]),
        h = g[0],
        y = t.useChatValues(a.id, [n.getIsMetaAiBot]),
        C = y[0],
        b = t.useChatValues(a.id, [n.getIsBotChannel]),
        v = b[0],
        S = r("useWAWebUIM")(),
        R = function () {
          S == null || S.requestDismiss();
        },
        L = function (t) {
          var e = t.attachments,
            n = t.onCancel,
            r = t.onSend,
            i = t.openTrigger,
            s = t.sendAsSticker,
            c = s === void 0 ? !1 : s;
          o("WAWebCmd").Cmd.attachMediaDrawer({
            chat: a,
            attachments: e,
            fileOrigin: o("WAWebWamEnumMediaPickerOriginType")
              .MEDIA_PICKER_ORIGIN_TYPE.CHAT_PHOTO_LIBRARY,
            initCaption: l == null ? void 0 : l(),
            onComplete: function (t, n) {
              u(t, n);
            },
            onSend: r,
            onCancel: n,
            openTrigger: i,
            sendAsSticker: c,
            isQuestion: m === o("WAWebQuestions.flow").QuestionType.Question,
            questionReplyQuotedMessage: d,
            threadId: p,
          });
        },
        E = o("WAWebAttachMenuUtils").shouldShowDisabledCatalogOption(),
        k = o("WAWebAttachMenuUtils").shouldShowCatalogOption(a) && !v,
        I = o("WAWebBizGatingUtils").canSendQuickReplyInChat(a) && !v,
        T =
          o("WAWebAttachMenuUtils").canSendOrder(a) &&
          !o("WAWebContactGetters").getIsMe(a.contact) &&
          !v,
        D = k || I || T,
        x = o("WAWebMediaGatingUtils").getSupportedMediaTypesForChat(a),
        $ = [];
      if (m == null) {
        x.has(o("WAWebMsgType").MSG_TYPE.DOCUMENT) &&
          $.push(
            s.jsx(r("WAWebAttachMenuPopupItemDocuments.react"), {
              chat: a,
              dismissMenu: R,
              multiple: !C,
              onDocumentPick: function (t) {
                L({
                  attachments: t,
                  onSend: function () {
                    o(
                      "WAWebAttachmentMenuLogger",
                    ).AttachmentMenuLogger.logAttachmentSend(
                      a,
                      o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                        .DOCUMENT,
                    );
                  },
                  onCancel: function () {
                    o(
                      "WAWebAttachmentMenuLogger",
                    ).AttachmentMenuLogger.logAttachmentCancel(
                      a,
                      o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                        .DOCUMENT,
                    );
                  },
                });
              },
            }),
          );
        var P = o("WAWebAttachMenuPopupUtils").getMediaSelectionType(a.id);
        (P != null &&
          $.push(
            s.jsx(
              o("WAWebAttachMenuPopupItemPhotos.react")
                .AttachMenuPopupItemPhotos,
              {
                chat: a,
                dismissMenu: R,
                multiple: o("WAWebMediaGatingUtils").supportsMultipleUploads(
                  a.id,
                ),
                onMediaPick: function (t) {
                  L({
                    attachments: t,
                    onSend: function () {
                      o(
                        "WAWebAttachmentMenuLogger",
                      ).AttachmentMenuLogger.logAttachmentSend(
                        a,
                        o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                          .PHOTO_AND_VIDEO_LIBRARY,
                      );
                    },
                    onCancel: function () {
                      o(
                        "WAWebAttachmentMenuLogger",
                      ).AttachmentMenuLogger.logAttachmentCancel(
                        a,
                        o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                          .PHOTO_AND_VIDEO_LIBRARY,
                      );
                    },
                  });
                },
                mediaSelectionType: P,
              },
            ),
          ),
          x.has(o("WAWebMsgType").MSG_TYPE.IMAGE) &&
            $.push(
              s.jsx(r("WAWebAttachMenuPopupItemCamera.react"), {
                chat: a,
                onCaptureClick: function () {
                  o("WAWebCmd").Cmd.openCaptureMedia({
                    onMenuComplete: u,
                    threadId: p,
                  });
                },
              }),
            ),
          o("WAWebQuestionsSenderGatingUtils").isQuestionSenderEnabled(a) &&
            $.push(
              s.jsx(r("WAWebAttachMenuPopupItemQuestion.react"), {
                chat: a,
                getComposeBoxEditorRef: i,
              }),
            ),
          ((f &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isNewsletterAudioFileSendingEnabled()) ||
            (!f && !h && !C && !v)) &&
            $.push(
              s.jsx(r("WAWebAttachMenuPopupItemAudio.react"), {
                chat: a,
                dismissMenu: R,
                multiple: o("WAWebMediaGatingUtils").supportsMultipleUploads(
                  a.id,
                ),
                onMediaPick: function (t) {
                  L({
                    attachments: t,
                    onSend: function () {
                      o(
                        "WAWebAttachmentMenuLogger",
                      ).AttachmentMenuLogger.logAttachmentSend(
                        a,
                        o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                          .AUDIO,
                      );
                    },
                    onCancel: function () {
                      o(
                        "WAWebAttachmentMenuLogger",
                      ).AttachmentMenuLogger.logAttachmentCancel(
                        a,
                        o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                          .AUDIO,
                      );
                    },
                  });
                },
              }),
            ),
          !f &&
            !h &&
            !C &&
            !o("WAWebBotUtils").isManusBot(a.id) &&
            $.push(
              s.jsx(r("WAWebAttachMenuPopupItemContacts.react"), {
                chat: a,
                onMenuComplete: u,
              }),
            ),
          a.canSendPolls() &&
            $.push(
              s.jsx(r("WAWebAttachMenuPopupItemPolls.react"), {
                chat: a,
                getComposeBoxEditorRef: i,
              }),
            ),
          f &&
            o("WAWebNewsletterGatingUtils").isNewsletterQuizSenderEnabled() &&
            $.push(
              s.jsx(
                o("WAWebAttachMenuPopupItemQuiz.react").AttachMenuPopupItemQuiz,
                { chat: a, getComposeBoxEditorRef: i },
              ),
            ));
        var N = x.has(o("WAWebMsgType").MSG_TYPE.STICKER)
            ? s.jsx(r("WAWebAttachMenuPopupItemStickers.react"), {
                chat: a,
                dismissMenu: R,
                onMediaPick: function (t) {
                  L({
                    attachments: t,
                    sendAsSticker: !0,
                    onSend: function () {
                      o(
                        "WAWebAttachmentMenuLogger",
                      ).AttachmentMenuLogger.logAttachmentSend(
                        a,
                        o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                          .STICKER_MAKER,
                      );
                    },
                    onCancel: function () {
                      o(
                        "WAWebAttachmentMenuLogger",
                      ).AttachmentMenuLogger.logAttachmentCancel(
                        a,
                        o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                          .STICKER_MAKER,
                      );
                    },
                  });
                },
              })
            : null,
          M =
            o("WAWebChatGetters").getIsGroup(a) ||
            (o("WAWebChatGetters").getIsUser(a) &&
              !o("WAWebChatGetters").getIsMetaAiBot(a) &&
              !v)
              ? s.jsx(r("WAWebAttachMenuPopupItemEvents.react"), { chat: a })
              : null;
        ($.push([M, N]),
          x.has(o("WAWebMsgType").MSG_TYPE.IMAGE) &&
            o("WAWebABProps").getABPropConfigValue(
              "web_attach_menu_add_drawing_enabled",
            ) &&
            $.push(
              s.jsx(r("WAWebAttachMenuPopupItemDrawing.react"), {
                onDrawingClick: function () {
                  (o(
                    "WAWebAttachmentMenuLogger",
                  ).AttachmentMenuLogger.logAttachMenuClick(
                    a,
                    o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.DRAWING,
                  ),
                    R(),
                    L({
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
                          a,
                          o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                            .DRAWING,
                        );
                      },
                      onCancel: function () {
                        o(
                          "WAWebAttachmentMenuLogger",
                        ).AttachmentMenuLogger.logAttachmentCancel(
                          a,
                          o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                            .DRAWING,
                        );
                      },
                    }));
                },
              }),
            ));
      } else {
        var w = o(
            "WAWebQuestionsGatingUtils",
          ).getEnabledAttachmentTypesForQuestionType(m),
          A;
        (w.has(o("WAWebMsgType").MSG_TYPE.IMAGE)
          ? w.has(o("WAWebMsgType").MSG_TYPE.VIDEO)
            ? (A = o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType
                .PHOTOS_AND_VIDEOS)
            : (A = o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType
                .PHOTOS)
          : w.has(o("WAWebMsgType").MSG_TYPE.VIDEO) &&
            (A = o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType
              .VIDEOS),
          A != null &&
            $.push(
              s.jsx(
                o("WAWebAttachMenuPopupItemPhotos.react")
                  .AttachMenuPopupItemPhotos,
                {
                  chat: a,
                  dismissMenu: R,
                  multiple: !1,
                  onMediaPick: function (t) {
                    (o("WAWebModalManager").ModalManager.close(),
                      L({
                        attachments: t,
                        onSend: function () {
                          o(
                            "WAWebAttachmentMenuLogger",
                          ).AttachmentMenuLogger.logAttachmentSend(
                            a,
                            o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                              .PHOTO_AND_VIDEO_LIBRARY,
                          );
                        },
                        onCancel: function () {
                          o(
                            "WAWebAttachmentMenuLogger",
                          ).AttachmentMenuLogger.logAttachmentCancel(
                            a,
                            o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                              .PHOTO_AND_VIDEO_LIBRARY,
                          );
                        },
                      }));
                  },
                  mediaSelectionType: A,
                },
              ),
            ),
          w.has(o("WAWebMsgType").MSG_TYPE.IMAGE) &&
            $.push(
              s.jsx(r("WAWebAttachMenuPopupItemCamera.react"), {
                chat: a,
                onCaptureClick: function () {
                  o("WAWebCmd").Cmd.openCaptureMedia({
                    onMenuComplete: u,
                    questionType: m,
                    questionReplyQuotedMessage: d,
                    threadId: p,
                  });
                },
              }),
            ));
      }
      var F = s.jsxs(s.Fragment, {
        children: [
          $,
          D && s.jsx(c, {}),
          o("WAWebPixAttachmentTrayFeature").shouldShowPixInAttachmentTray(a) &&
            s.jsx(r("WAWebAttachMenuPopupPix.react"), {
              chat: a,
              dismissMenu: R,
            }),
          k &&
            s.jsx(r("WAWebAttachMenuPopupItemCatalog.react"), {
              chat: a,
              disabled: E,
              dismissMenu: R,
            }),
          I &&
            s.jsx(r("WAWebAttachMenuPopupItemQuickReplies.react"), {
              chat: a,
              dismissMenu: R,
            }),
          T &&
            s.jsx(r("WAWebAttachMenuPopupItemOrders.react"), {
              chat: a,
              dismissMenu: R,
            }),
        ],
      });
      return s.jsx(r("WDSMenu.react"), { children: F });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c() {
      return s.jsx(r("WDSMenuItem.react"), { type: "separator" });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
