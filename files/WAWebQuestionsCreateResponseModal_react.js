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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(14),
        n = e.chat,
        a = e.question,
        i;
      t[0] !== a
        ? ((i = function (t) {
            var e = t == null ? void 0 : t.trim();
            e == null ||
              e === "" ||
              (o("WAWebModalManager").ModalManager.close(),
              o("WAWebToast.react").openUndoToast({
                msg: s._(/*BTDS*/ "Sending response..."),
                action: function () {
                  o("WAWebNewsletterSendQuestionResponseAction")
                    .sendNewsletterQuestionResponse(a, e)
                    .then(_)
                    .catch(p);
                },
              }));
          }),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        d = o(
          "WAWebQuestionsPrivacyBanner.react",
        ).useNewsletterQuestionsPrivacyBanner(
          o("WAWebQuestions.flow").QuestionType.Response,
        ),
        f;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { esc: m }), (t[2] = f))
        : (f = t[2]);
      var g;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: o(
              "WAWebQuestionsRenderingUtils",
            ).getModalTitleFromQuestionType(
              o("WAWebQuestions.flow").QuestionType.Response,
            ),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.FLYOUT,
            onCancel: o("WAWebModalManager").closeModalManager,
          })),
          (t[3] = g))
        : (g = t[3]);
      var h;
      t[4] !== d
        ? ((h =
            d &&
            u.jsx(
              o("WAWebQuestionsPrivacyBanner.react")
                .WAWebQuestionsPrivacyBanner,
              { questionType: o("WAWebQuestions.flow").QuestionType.Response },
            )),
          (t[4] = d),
          (t[5] = h))
        : (h = t[5]);
      var y;
      t[6] !== n.name
        ? ((y = s._(/*BTDS*/ "Respond to {channel-name}", [
            s._param("channel-name", n.name),
          ])),
          (t[6] = n.name),
          (t[7] = y))
        : (y = t[7]);
      var C;
      t[8] !== l || t[9] !== y
        ? ((C = u.jsx(r("WAWebFlexItem.react"), {
            xstyle: c.textFieldWrapper,
            children: u.jsx(o("WAWebRichTextField.react").RichTextField, {
              testid: void 0,
              focusOnMount: !0,
              hideFloatingLabel: !0,
              showRemaining: !0,
              emojiBtnPosition: "side",
              textFormatEnabled: !0,
              maxVisibleLines: 5,
              placeholder: y,
              showSendBtn: !0,
              onSend: l,
              maxLength: 256,
            }),
          })),
          (t[8] = l),
          (t[9] = y),
          (t[10] = C))
        : (C = t[10]);
      var b;
      return (
        t[11] !== h || t[12] !== C
          ? ((b = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              handlers: f,
              children: u.jsx(o("WAWebModal.react").Modal, {
                type: o("WAWebModal.react").ModalTheme.Questions,
                testid: void 0,
                onOverlayClick: o("WAWebModalManager").closeModalManager,
                children: u.jsxs(r("WAWebDrawer.react"), {
                  xstyle: c.drawer,
                  children: [g, h, C],
                }),
              }),
            })),
            (t[11] = h),
            (t[12] = C),
            (t[13] = b))
          : (b = t[13]),
        b
      );
    }
    function m(e) {
      (e.stopPropagation(), o("WAWebModalManager").closeModalManager());
    }
    function p() {
      f();
    }
    function _(e) {
      e === o("WAWebSendMsgResultAction").SendMsgResult.OK
        ? o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              msg: s._(/*BTDS*/ "Response sent"),
            }),
          )
        : e === o("WAWebSendMsgResultAction").SendMsgResult.ERROR_RATE_LIMIT
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
          : f();
    }
    function f() {
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
