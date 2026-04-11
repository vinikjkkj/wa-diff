__d(
  "WAWebQuestionsSenderGatingUtils",
  [
    "WAWebMsgType",
    "WAWebQuestionsAdminGatingUtils",
    "WAWebQuestionsGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        o("WAWebQuestionsAdminGatingUtils").isQuestionsFeatureEnabledForAdmins(
          e,
        ) &&
        o("WAWebQuestionsGatingUtils").isQuestionSenderEnabledForMsgType(
          o("WAWebMsgType").MSG_TYPE.CHAT,
        )
      );
    }
    function s(e) {
      return (
        o("WAWebQuestionsAdminGatingUtils").isQuestionsFeatureEnabledForAdmins(
          e,
        ) &&
        o("WAWebQuestionsGatingUtils").isQuestionReplySenderEnabledForMsgType(
          o("WAWebMsgType").MSG_TYPE.CHAT,
        )
      );
    }
    ((l.isQuestionSenderEnabled = e), (l.isQuestionReplySenderEnabled = s));
  },
  98,
);
