__d(
  "WAWebNewsletterFaqUrl",
  ["WAWebFaqUrl", "WAWebNewsletterGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled()
        ? o("WAWebFaqUrl").getNewsletterPrivacyMultiAdminFaqUrl()
        : o("WAWebFaqUrl").getNewsletterPrivacyLegacyFaqUrl();
    }
    function s() {
      return o(
        "WAWebFaqUrl",
      ).getNewsletterQuestionResponsePrivacyBannerFAQUrl();
    }
    ((l.getNewsletterPrivacyFaqUrl = e),
      (l.getNewsletterQuestionResponsePrivacyFaqUrl = s));
  },
  98,
);
