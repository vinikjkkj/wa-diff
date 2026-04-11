__d(
  "WAWebQuestionsRenderingUtils",
  [
    "fbt",
    "WAWebChatUnreadCount.react",
    "WAWebDrawerManager",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterMembershipUtil",
    "WAWebQuestions.flow",
    "WAWebQuestionsAdminGatingUtils",
    "WAWebQuestionsCreateResponseModalLoadable",
    "WAWebQuestionsGatingUtils",
    "WAWebQuestionsSenderGatingUtils",
    "WAWebResponsesListDrawerLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      if (
        !(
          e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN ||
          !o("WAWebMsgGetters").getIsQuestion(e)
        )
      ) {
        var n = o("WAWebFrontendMsgGetters").getChat(e.unsafe()),
          r = o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
            n.newsletterMetadata,
          ),
          a;
        r
          ? (a =
              t > 0
                ? s._(/*BTDS*/ "View responses {unread_responses_count}", [
                    s._param(
                      "unread_responses_count",
                      u.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
                        count: t,
                        theme: o("WAWebChatUnreadCount.react").UnreadCountTheme
                          .QuestionResponses,
                      }),
                    ),
                  ])
                : s._(/*BTDS*/ "View responses"))
          : (a = s._(/*BTDS*/ "Respond"));
        var i = r ? "view-question-responses-cta" : "respond-to-question-cta",
          l = r
            ? function () {
                return p(e, n);
              }
            : function () {
                return o("WAWebModalManager").ModalManager.open(
                  u.jsx(
                    o("WAWebQuestionsCreateResponseModalLoadable")
                      .CreateQuestionResponseModalLoadable,
                    { question: e, chat: n },
                  ),
                );
              },
          c = r
            ? !o(
                "WAWebQuestionsAdminGatingUtils",
              ).isQuestionsFeatureEnabledForAdmins(n)
            : !o(
                "WAWebQuestionsGatingUtils",
              ).isQuestionsFeatureEnabledForFollowers(e);
        return { label: a, testid: i, onClick: l, disabled: c };
      }
    }
    function d(e) {
      switch (e) {
        case o("WAWebQuestions.flow").ResponsesFilterType.ALL:
          return s._(/*BTDS*/ "All");
        case o("WAWebQuestions.flow").ResponsesFilterType.CONTACTS:
          return s._(/*BTDS*/ "Contacts");
        case o("WAWebQuestions.flow").ResponsesFilterType.REPLIED:
          return s._(/*BTDS*/ "Replied");
      }
    }
    function m(e) {
      switch (e) {
        case o("WAWebQuestions.flow").QuestionType.Question:
          return s._(/*BTDS*/ "Create question");
        case o("WAWebQuestions.flow").QuestionType.Reply:
          return s._(/*BTDS*/ "Reply");
        case o("WAWebQuestions.flow").QuestionType.Response:
          return s._(/*BTDS*/ "Respond");
      }
    }
    function p(e, t) {
      e.updateReadQuestionResponsesCount();
      var n = !o(
        "WAWebQuestionsSenderGatingUtils",
      ).isQuestionReplySenderEnabled(t);
      o("WAWebDrawerManager").DrawerManager.openDrawerRight(
        u.jsx(
          o("WAWebResponsesListDrawerLoadable").ResponsesListDrawerLoadable,
          { question: e, isReplyDisabled: n },
        ),
        { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
      );
    }
    ((l.getQuestionAction = c),
      (l.getResponsesFilterLabel = d),
      (l.getModalTitleFromQuestionType = m));
  },
  226,
);
