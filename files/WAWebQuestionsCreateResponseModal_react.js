__d(
  "WAWebQuestionsCreateResponseModal.react",
  [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerHeader.react",
    "WAWebFlexItem.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNewsletterSendQuestionResponseAction",
    "WAWebQuestions.flow",
    "WAWebQuestionsGatingUtils",
    "WAWebQuestionsPrivacyBanner.react",
    "WAWebQuestionsRenderingUtils",
    "WAWebRichTextField.react",
    "WAWebSendMsgResultAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        drawer: { position: "x1n2onr6", $$css: !0 },
        textFieldWrapper: {
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingBottom: "x12xbjc7",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.chat,
        n = e.question,
        a = function (t) {
          var e = t == null ? void 0 : t.trim();
          e == null ||
            e === "" ||
            (o("WAWebModalManager").ModalManager.close(),
            o("WAWebToast.react").openUndoToast({
              msg: s._(/*BTDS*/ "Sending response..."),
              action: function () {
                o("WAWebNewsletterSendQuestionResponseAction")
                  .sendNewsletterQuestionResponse(n, e)
                  .then(function (e) {
                    e === o("WAWebSendMsgResultAction").SendMsgResult.OK
                      ? o("WAWebToastManager").ToastManager.open(
                          u.jsx(o("WAWebToast.react").Toast, {
                            msg: s._(/*BTDS*/ "Response sent"),
                          }),
                        )
                      : e ===
                          o("WAWebSendMsgResultAction").SendMsgResult
                            .ERROR_RATE_LIMIT
                        ? o("WAWebToastManager").ToastManager.open(
                            u.jsx(o("WAWebToast.react").Toast, {
                              msg: s._(
                                /*BTDS*/ "Can't send more than {maxResponsesCount} responses",
                                [
                                  s._param(
                                    "maxResponsesCount",
                                    o(
                                      "WAWebQuestionsGatingUtils",
                                    ).getResponsesRateLimitMaxCount(),
                                  ),
                                ],
                              ),
                            }),
                          )
                        : m();
                  })
                  .catch(function () {
                    m();
                  });
              },
            }));
        },
        i = o(
          "WAWebQuestionsPrivacyBanner.react",
        ).useNewsletterQuestionsPrivacyBanner(
          o("WAWebQuestions.flow").QuestionType.Response,
        );
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: {
          esc: function (t) {
            (t.stopPropagation(), o("WAWebModalManager").closeModalManager());
          },
        },
        children: u.jsx(o("WAWebModal.react").Modal, {
          type: o("WAWebModal.react").ModalTheme.Questions,
          testid: void 0,
          onOverlayClick: o("WAWebModalManager").closeModalManager,
          children: u.jsxs(r("WAWebDrawer.react"), {
            xstyle: c.drawer,
            children: [
              u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                title: o(
                  "WAWebQuestionsRenderingUtils",
                ).getModalTitleFromQuestionType(
                  o("WAWebQuestions.flow").QuestionType.Response,
                ),
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.FLYOUT,
                onCancel: o("WAWebModalManager").closeModalManager,
              }),
              i &&
                u.jsx(
                  o("WAWebQuestionsPrivacyBanner.react")
                    .WAWebQuestionsPrivacyBanner,
                  {
                    questionType: o("WAWebQuestions.flow").QuestionType
                      .Response,
                  },
                ),
              u.jsx(r("WAWebFlexItem.react"), {
                xstyle: c.textFieldWrapper,
                children: u.jsx(o("WAWebRichTextField.react").RichTextField, {
                  testid: void 0,
                  focusOnMount: !0,
                  hideFloatingLabel: !0,
                  showRemaining: !0,
                  emojiBtnPosition: "side",
                  textFormatEnabled: !0,
                  maxVisibleLines: 5,
                  placeholder: s._(/*BTDS*/ "Respond to {channel-name}", [
                    s._param("channel-name", t.name),
                  ]),
                  showSendBtn: !0,
                  onSend: a,
                  maxLength: 256,
                }),
              }),
            ],
          }),
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Couldn't send response"),
        }),
      );
    }
    l.CreateQuestionResponseModal = d;
  },
  226,
);
