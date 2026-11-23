__d(
  "WAWebQuestionsRenderingUtils",
  [
    "fbt",
    "WAJids",
    "WALogger",
    "WAWebBackendRuntime",
    "WAWebChatUnreadCount.react",
    "WAWebDBUpdateMessageTable",
    "WAWebDrawerManager",
    "WAWebFbtCommon",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardTabUtils",
    "WAWebMessageStoreService",
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
    "WAWebToast.react",
    "WAWebToastManager",
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
                        s._(/*BTDS*/ ""),
                        c.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
                          count: r,
                          theme: o("WAWebChatUnreadCount.react")
                            .UnreadCountTheme.QuestionResponses,
                        }),
                      ],
                    })
                  : s._(/*BTDS*/ ""))
            : (_ = s._(/*BTDS*/ ""));
          var f = p ? "view-question-responses-cta" : "respond-to-question-cta",
            g = function () {
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
                ? y(n, m)
                : o("WAWebModalManager").ModalManager.open(
                    c.jsx(
                      o("WAWebQuestionsCreateResponseModalLoadable")
                        .CreateQuestionResponseModalLoadable,
                      { question: n, chat: m },
                    ),
                  );
            },
            h = p
              ? !o(
                  "WAWebQuestionsAdminGatingUtils",
                ).isQuestionsFeatureEnabledForAdmins(m)
              : !o(
                  "WAWebQuestionsGatingUtils",
                ).isQuestionsFeatureEnabledForFollowersFor({
                  isNewsletterMsg: l,
                  type: d,
                });
          return { label: _, testid: f, onClick: g, disabled: h };
        }
      }
    }
    function m(e) {
      var t = b(e);
      return t == null
        ? null
        : {
            label: s._(/*BTDS*/ ""),
            testid: "view-your-question-responses-cta",
            onClick: function () {
              return o("WAWebModalManager").ModalManager.open(t);
            },
          };
    }
    function p(e) {
      var t = b(e);
      t != null && o("WAWebModalManager").ModalManager.open(t);
    }
    function _(e) {
      switch (e) {
        case o("WAWebQuestions.flow").ResponsesFilterType.ALL:
          return s._(/*BTDS*/ "");
        case o("WAWebQuestions.flow").ResponsesFilterType.CONTACTS:
          return s._(/*BTDS*/ "");
        case o("WAWebQuestions.flow").ResponsesFilterType.REPLIED:
          return s._(/*BTDS*/ "");
        case o("WAWebQuestions.flow").ResponsesFilterType.STARRED:
          return s._(/*BTDS*/ "");
      }
    }
    function f(e) {
      switch (e) {
        case o("WAWebQuestions.flow").QuestionType.Question:
          return s._(/*BTDS*/ "");
        case o("WAWebQuestions.flow").QuestionType.Reply:
          return s._(/*BTDS*/ "");
        case o("WAWebQuestions.flow").QuestionType.Response:
          return s._(/*BTDS*/ "");
      }
    }
    function g(e) {
      var t = o("WAWebToast.react").genId(),
        n = e ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: n, id: t }),
      );
    }
    function h(e, t) {
      var n = o("WAWebToast.react").genId(),
        a = e ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""),
        i =
          t == null
            ? null
            : {
                actionText: r("WAWebFbtCommon")("Try again"),
                onAction: function () {
                  (o("WAWebToastManager").ToastManager.close(n), t());
                },
              };
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: a, id: n, action: i }),
      );
    }
    function y(e, t) {
      C(e);
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
    function C(e) {
      return (
        (e.readQuestionResponsesCount = e.questionResponsesCount),
        (o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime").runtime(
              o("WAWebMessageStoreService").MessageStoreService,
            ).updateMessageTable
          : o("WAWebDBUpdateMessageTable").updateMessageTable)(e.id, {
          readQuestionResponsesCount: e.questionResponsesCount,
        })
      );
    }
    function b(e) {
      var t = v(e);
      return t == null
        ? null
        : c.jsx(
            o("WAWebQuestionsMyResponsesModalLoadable")
              .MyQuestionResponsesModalLoadable,
            {
              questionMsgKey: e.id,
              questionServerId: t.myQuestionResponsesServerId,
              newsletterJid: t.newsletterJid,
            },
          );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.serverId;
      if (t == null || !S(e)) return null;
      var n = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(e.id, !0);
      if (n == null) return null;
      var r = o("WAJids").toNewsletterJid(n.id.toJid()),
        a = n.newsletterMetadata;
      return r == null ||
        a == null ||
        a.iAmAdminOrOwner() ||
        !o(
          "WAWebQuestionsMyResponsesGatingUtils",
        ).isQuestionViewYourResponsesEnabled()
        ? null
        : { newsletterJid: r, myQuestionResponsesServerId: t };
    }
    function S(e) {
      return (
        o("WAWebMsgGetters").getIsNewsletterMsg(e) &&
        e.type !== o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
        !o("WAWebMsgGetters").getIsForwarded(e) &&
        o("WAWebMsgGetters").getIsQuestion(e)
      );
    }
    ((l.getQuestionAction = d),
      (l.getMyQuestionResponsesAction = m),
      (l.maybeOpenMyQuestionResponses = p),
      (l.getResponsesFilterLabel = _),
      (l.getModalTitleFromQuestionType = f),
      (l.showStarFailureToast = g),
      (l.showLikeFailureToast = h),
      (l.getMyQuestionResponsesQueryArgs = v));
  },
  226,
);
