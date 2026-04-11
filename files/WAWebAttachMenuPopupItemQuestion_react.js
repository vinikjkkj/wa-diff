__d(
  "WAWebAttachMenuPopupItemQuestion.react",
  [
    "WAWebAttachMenuPopupItem.react",
    "WAWebAttachMenuStrings",
    "WAWebModalManager",
    "WAWebPrepareMessageSendingAction",
    "WAWebQuestions.flow",
    "WAWebQuestionsInputModalLoadable",
    "WDSIconIcHelpFilled.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { icon: { color: "x11i6shi", $$css: !0 } };
    function c(e) {
      var t = e.chat,
        n = e.getComposeBoxEditorRef,
        a = function () {
          (o("WAWebModalManager").ModalManager.open(
            s.jsx(
              o("WAWebQuestionsInputModalLoadable").QuestionsInputModalLoadable,
              {
                chat: t,
                getComposeBoxEditorRef: n,
                questionType: o("WAWebQuestions.flow").QuestionType.Question,
              },
            ),
          ),
            o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(
              t,
            ));
        },
        i = function () {
          a();
        },
        l = function (t) {
          return (t.preventDefault(), a(), !0);
        };
      return s.jsx(r("WAWebAttachMenuPopupItem.react"), {
        testid: void 0,
        action: l,
        onPress: i,
        Icon: r("WDSIconIcHelpFilled.react"),
        iconXstyle: u.icon,
        text: o("WAWebAttachMenuStrings").QuestionText(),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
