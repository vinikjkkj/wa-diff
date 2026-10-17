__d(
  "WAWebQuestionsRenderingUtils",
  [
    "fbt",
    "WALogger",
    "WAWebChatUnreadCount.react",
    "WAWebDBUpdateMessageTable",
    "WAWebDrawerManager",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgType",
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
      u,
      c = u || (u = o("react"));
    function d(t, n, r) {
      var a,
        i,
        l = n.isNewsletterMsg,
        u = n.isQuestion,
        d = n.type;
      if (!(d === o("WAWebMsgType").MSG_TYPE.UNKNOWN || !u)) {
        var m = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(t, l);
        if (m != null) {
          var p =
              (a =
                (i = m.newsletterMetadata) == null
                  ? void 0
                  : i.iAmAdminOrOwner()) != null
                ? a
                : !1,
            f;
          p
            ? (f =
                r > 0
                  ? c.jsxs(c.Fragment, {
                      children: [
                        s._(/*BTDS*/ "View responses"),
                        c.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
                          count: r,
                          theme: o("WAWebChatUnreadCount.react")
                            .UnreadCountTheme.QuestionResponses,
                        }),
                      ],
                    })
                  : s._(/*BTDS*/ "View responses"))
            : (f = s._(/*BTDS*/ "Respond"));
          var g = p ? "view-question-responses-cta" : "respond-to-question-cta",
            h = function () {
              var n = o("WAWebMsgCollection").MsgCollection.get(t);
              if (n == null) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[questions] question action skipped, message left the collection",
                    ])),
                );
                return;
              }
              p
                ? _(n, m)
                : o("WAWebModalManager").ModalManager.open(
                    c.jsx(
                      o("WAWebQuestionsCreateResponseModalLoadable")
                        .CreateQuestionResponseModalLoadable,
                      { question: n, chat: m },
                    ),
                  );
            },
            y = p
              ? !o(
                  "WAWebQuestionsAdminGatingUtils",
                ).isQuestionsFeatureEnabledForAdmins(m)
              : !o(
                  "WAWebQuestionsGatingUtils",
                ).isQuestionsFeatureEnabledForFollowersFor({
                  isNewsletterMsg: l,
                  type: d,
                });
          return { label: f, testid: g, onClick: h, disabled: y };
        }
      }
    }
    function m(e) {
      switch (e) {
        case o("WAWebQuestions.flow").ResponsesFilterType.ALL:
          return s._(/*BTDS*/ "All");
        case o("WAWebQuestions.flow").ResponsesFilterType.CONTACTS:
          return s._(/*BTDS*/ "Contacts");
        case o("WAWebQuestions.flow").ResponsesFilterType.REPLIED:
          return s._(/*BTDS*/ "Replied");
        case o("WAWebQuestions.flow").ResponsesFilterType.STARRED:
          return s._(/*BTDS*/ "Starred");
      }
    }
    function p(e) {
      switch (e) {
        case o("WAWebQuestions.flow").QuestionType.Question:
          return s._(/*BTDS*/ "Create question");
        case o("WAWebQuestions.flow").QuestionType.Reply:
          return s._(/*BTDS*/ "Reply");
        case o("WAWebQuestions.flow").QuestionType.Response:
          return s._(/*BTDS*/ "Respond");
      }
    }
    function _(e, t) {
      f(e);
      var n = !o(
        "WAWebQuestionsSenderGatingUtils",
      ).isQuestionReplySenderEnabled(t);
      o("WAWebDrawerManager").DrawerManager.openDrawerRight(
        c.jsx(
          o("WAWebResponsesListDrawerLoadable").ResponsesListDrawerLoadable,
          { question: e, isReplyDisabled: n },
        ),
        { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
      );
    }
    function f(e) {
      return (
        (e.readQuestionResponsesCount = e.questionResponsesCount),
        o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, {
          readQuestionResponsesCount: e.questionResponsesCount,
        })
      );
    }
    ((l.getQuestionAction = d),
      (l.getResponsesFilterLabel = m),
      (l.getModalTitleFromQuestionType = p));
  },
  226,
);
