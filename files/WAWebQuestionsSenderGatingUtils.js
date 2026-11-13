__d(
  "WAWebQuestionsSenderGatingUtils",
  [
    "WAWebMsgType",
    "WAWebQuestionsAdminGatingUtils",
    "WAWebQuestionsGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s({ chatId: e.id, newsletterMetadata: e.newsletterMetadata });
    }
    function s(e) {
      var t = e.chatId,
        n = e.newsletterMetadata;
      return (
        !t.isAiHub() &&
        o(
          "WAWebQuestionsAdminGatingUtils",
        ).isQuestionsFeatureEnabledForAdminsFor(n) &&
        o("WAWebQuestionsGatingUtils").isQuestionSenderEnabledForMsgType(
          o("WAWebMsgType").MSG_TYPE.CHAT,
        )
      );
    }
    function u(e) {
      return (
        o("WAWebQuestionsAdminGatingUtils").isQuestionsFeatureEnabledForAdmins(
          e,
        ) &&
        o("WAWebQuestionsGatingUtils").isQuestionReplySenderEnabledForMsgType(
          o("WAWebMsgType").MSG_TYPE.CHAT,
        )
      );
    }
    ((l.isQuestionSenderEnabled = e),
      (l.isQuestionSenderEnabledFor = s),
      (l.isQuestionReplySenderEnabled = u));
  },
  98,
);
