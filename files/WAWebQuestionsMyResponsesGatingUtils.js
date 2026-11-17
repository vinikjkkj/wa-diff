__d(
  "WAWebQuestionsMyResponsesGatingUtils",
  ["WAWebNewsletterCommonGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_question_view_your_responses_enabled",
      );
    }
    function s() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_question_response_like_follower_enabled",
      );
    }
    ((l.isQuestionViewYourResponsesEnabled = e),
      (l.isQuestionResponseLikesEnabledForFollowers = s));
  },
  98,
);
