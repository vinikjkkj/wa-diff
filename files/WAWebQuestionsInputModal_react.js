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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(35),
        n = e.chat,
        a = e.getComposeBoxEditorRef,
        i = e.onSend,
        l = e.questionReplyQuotedMessage,
        c = e.questionType,
        d = m(null),
        f;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = function (t) {
            var e = d.current;
            if (e != null) {
              var n;
              e.style.paddingTop = ((n = t.overlay) != null ? n : 0) + "px";
            }
          }),
          (t[0] = f))
        : (f = t[0]);
      var g = f,
        h = p(!1),
        y = h[0],
        C = h[1],
        b = o(
          "WAWebQuestionsPrivacyBanner.react",
        ).useNewsletterQuestionsPrivacyBanner(
          o("WAWebQuestions.flow").QuestionType.Question,
        ),
        v;
      t[1] !== n || t[2] !== y
        ? ((v = function () {
            var e,
              t =
                ((e = n.getComposeContents()) == null ? void 0 : e.text) !== "";
            t ? y || C(!0) : o("WAWebModalManager").closeModalManager();
          }),
          (t[1] = n),
          (t[2] = y),
          (t[3] = v))
        : (v = t[3]);
      var S = v,
        R;
      t[4] !== c
        ? ((R = o("WAWebQuestionsRenderingUtils").getModalTitleFromQuestionType(
            c,
          )),
          (t[4] = c),
          (t[5] = R))
        : (R = t[5]);
      var L;
      t[6] !== S || t[7] !== R
        ? ((L = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: R,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.FLYOUT,
            onCancel: S,
          })),
          (t[6] = S),
          (t[7] = R),
          (t[8] = L))
        : (L = t[8]);
      var E;
      t[9] !== c || t[10] !== b
        ? ((E =
            b &&
            u.jsx(
              o("WAWebQuestionsPrivacyBanner.react")
                .WAWebQuestionsPrivacyBanner,
              { questionType: c },
            )),
          (t[9] = c),
          (t[10] = b),
          (t[11] = E))
        : (E = t[11]);
      var k;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = [_.paddingHoriz8, _.paddingBottom8]), (t[12] = k))
        : (k = t[12]);
      var I;
      t[13] !== n || t[14] !== a || t[15] !== i || t[16] !== l || t[17] !== c
        ? ((I = u.jsx(r("WAWebFlexItem.react"), {
            xstyle: k,
            ref: d,
            children: u.jsx(r("WAWebQuestionsInputComposeBox.react"), {
              chat: n,
              getComposeBoxEditorRef: a,
              questionType: c,
              questionReplyQuotedMessage: l,
              onComposeHeightChange: g,
              onSend: i,
            }),
          })),
          (t[13] = n),
          (t[14] = a),
          (t[15] = i),
          (t[16] = l),
          (t[17] = c),
          (t[18] = I))
        : (I = t[18]);
      var T;
      t[19] !== L || t[20] !== E || t[21] !== I
        ? ((T = u.jsxs(r("WAWebDrawer.react"), {
            xstyle: _.drawer,
            children: [L, E, I],
          })),
          (t[19] = L),
          (t[20] = E),
          (t[21] = I),
          (t[22] = T))
        : (T = t[22]);
      var D;
      t[23] !== S || t[24] !== T
        ? ((D = u.jsx(o("WAWebModal.react").Modal, {
            type: o("WAWebModal.react").ModalTheme.Questions,
            testid: void 0,
            onOverlayClick: S,
            children: T,
          })),
          (t[23] = S),
          (t[24] = T),
          (t[25] = D))
        : (D = t[25]);
      var x;
      t[26] !== S || t[27] !== y
        ? ((x =
            y &&
            u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              cancelButtonType: "warning-secondary",
              title: s._(/*BTDS*/ "Leave question?"),
              okText: s._(/*BTDS*/ "Keep editing"),
              onOK: function () {
                var e;
                C(!1);
                var t =
                  (e = d.current) == null
                    ? void 0
                    : e.querySelector('[contenteditable="true"]');
                t instanceof HTMLElement && t.focus();
              },
              cancelText: s._(/*BTDS*/ "Leave"),
              onCancel: o("WAWebModalManager").closeModalManager,
              onOverlayClick: S,
              children: s._(/*BTDS*/ "Your edits won't be saved."),
            })),
          (t[26] = S),
          (t[27] = y),
          (t[28] = x))
        : (x = t[28]);
      var $;
      t[29] !== x || t[30] !== D
        ? (($ = u.jsxs(u.Fragment, { children: [D, x] })),
          (t[29] = x),
          (t[30] = D),
          (t[31] = $))
        : ($ = t[31]);
      var P;
      return (
        t[32] !== S || t[33] !== $
          ? ((P = u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "QuestionsInputModal",
              escapable: !0,
              requestDismiss: S,
              children: $,
            })),
            (t[32] = S),
            (t[33] = $),
            (t[34] = P))
          : (P = t[34]),
        P
      );
    }
    l.QuestionsInputModal = f;
  },
  226,
);
