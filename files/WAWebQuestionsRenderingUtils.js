__d(
  "WAWebQuestionsRenderingUtils",
  [
    "fbt",
    "WAJids",
    "WALogger",
    "WAWebChatUnreadCount.react",
    "WAWebDBUpdateMessageTable",
    "WAWebDrawerManager",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebQuestions.flow",
    "WAWebQuestionsAdminGatingUtils",
    "WAWebQuestionsCreateResponseModalLoadable",
    "WAWebQuestionsGatingUtils",
    "WAWebQuestionsMyResponsesGatingUtils",
    "WAWebQuestionsMyResponsesModalLoadable",
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
            _;
          p
            ? (_ =
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
            : (_ = s._(/*BTDS*/ "Respond"));
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
                ? f(n, m)
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
          return { label: _, testid: g, onClick: h, disabled: y };
        }
      }
    }
    function m(e) {
      var t = e.serverId;
      if (
        !o("WAWebMsgGetters").getIsNewsletterMsg(e) ||
        e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN ||
        o("WAWebMsgGetters").getIsForwarded(e) ||
        !o("WAWebMsgGetters").getIsQuestion(e) ||
        t == null ||
        !o(
          "WAWebQuestionsMyResponsesGatingUtils",
        ).isQuestionViewYourResponsesEnabled()
      )
        return null;
      var n = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(e.id, !0);
      if (n == null) return null;
      var r = o("WAJids").toNewsletterJid(n.id.toJid()),
        a = n.newsletterMetadata;
      return r == null || a == null || a.iAmAdminOrOwner()
        ? null
        : {
            label: s._(/*BTDS*/ "View your responses"),
            testid: "view-your-question-responses-cta",
            onClick: function () {
              return o("WAWebModalManager").ModalManager.open(
                c.jsx(
                  o("WAWebQuestionsMyResponsesModalLoadable")
                    .MyQuestionResponsesModalLoadable,
                  {
                    questionMsgKey: e.id,
                    questionServerId: t,
                    newsletterJid: r,
                  },
                ),
              );
            },
          };
    }
    function p(e) {
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
    function _(e) {
      switch (e) {
        case o("WAWebQuestions.flow").QuestionType.Question:
          return s._(/*BTDS*/ "Create question");
        case o("WAWebQuestions.flow").QuestionType.Reply:
          return s._(/*BTDS*/ "Reply");
        case o("WAWebQuestions.flow").QuestionType.Response:
          return s._(/*BTDS*/ "Respond");
      }
    }
    function f(e, t) {
      g(e);
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
    function g(e) {
      return (
        (e.readQuestionResponsesCount = e.questionResponsesCount),
        o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, {
          readQuestionResponsesCount: e.questionResponsesCount,
        })
      );
    }
    ((l.getQuestionAction = d),
      (l.getMyQuestionResponsesAction = m),
      (l.getResponsesFilterLabel = p),
      (l.getModalTitleFromQuestionType = _));
  },
  226,
);
