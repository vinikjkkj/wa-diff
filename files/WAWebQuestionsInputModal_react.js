__d(
  "WAWebQuestionsInputModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebDrawer.react",
    "WAWebDrawerHeader.react",
    "WAWebFlexItem.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebQuestions.flow",
    "WAWebQuestionsInputComposeBox.react",
    "WAWebQuestionsPrivacyBanner.react",
    "WAWebQuestionsRenderingUtils",
    "WAWebUimUie.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useRef,
      p = c.useState,
      _ = {
        drawer: { position: "x1n2onr6", $$css: !0 },
        paddingHoriz8: {
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        paddingBottom8: { paddingBottom: "x12xbjc7", $$css: !0 },
      };
    function f(e) {
      var t = e.chat,
        n = e.getComposeBoxEditorRef,
        a = e.onSend,
        i = e.questionReplyQuotedMessage,
        l = e.questionType,
        c = m(null),
        f = d(function (e) {
          var t = c.current;
          if (t != null) {
            var n;
            t.style.paddingTop = ((n = e.overlay) != null ? n : 0) + "px";
          }
        }, []),
        g = p(!1),
        h = g[0],
        y = g[1],
        C = o(
          "WAWebQuestionsPrivacyBanner.react",
        ).useNewsletterQuestionsPrivacyBanner(
          o("WAWebQuestions.flow").QuestionType.Question,
        ),
        b = function () {
          var e,
            n = ((e = t.getComposeContents()) == null ? void 0 : e.text) !== "";
          n ? h || y(!0) : o("WAWebModalManager").closeModalManager();
        };
      return u.jsx(o("WAWebUimUie.react").UIE, {
        displayName: "QuestionsInputModal",
        escapable: !0,
        requestDismiss: b,
        children: u.jsxs(u.Fragment, {
          children: [
            u.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.Questions,
              testid: void 0,
              onOverlayClick: b,
              children: u.jsxs(r("WAWebDrawer.react"), {
                xstyle: _.drawer,
                children: [
                  u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                    title: o(
                      "WAWebQuestionsRenderingUtils",
                    ).getModalTitleFromQuestionType(l),
                    type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE
                      .FLYOUT,
                    onCancel: b,
                  }),
                  C &&
                    u.jsx(
                      o("WAWebQuestionsPrivacyBanner.react")
                        .WAWebQuestionsPrivacyBanner,
                      { questionType: l },
                    ),
                  u.jsx(r("WAWebFlexItem.react"), {
                    xstyle: [_.paddingHoriz8, _.paddingBottom8],
                    ref: c,
                    children: u.jsx(r("WAWebQuestionsInputComposeBox.react"), {
                      chat: t,
                      getComposeBoxEditorRef: n,
                      questionType: l,
                      questionReplyQuotedMessage: i,
                      onComposeHeightChange: f,
                      onSend: a,
                    }),
                  }),
                ],
              }),
            }),
            h &&
              u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                cancelButtonType: "warning-secondary",
                title: s._(/*BTDS*/ "Leave question?"),
                okText: s._(/*BTDS*/ "Keep editing"),
                onOK: function () {
                  var e;
                  y(!1);
                  var t =
                    (e = c.current) == null
                      ? void 0
                      : e.querySelector('[contenteditable="true"]');
                  t instanceof HTMLElement && t.focus();
                },
                cancelText: s._(/*BTDS*/ "Leave"),
                onCancel: o("WAWebModalManager").closeModalManager,
                onOverlayClick: b,
                children: s._(/*BTDS*/ "Your edits won't be saved."),
              }),
          ],
        }),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.QuestionsInputModal = f));
  },
  226,
);
