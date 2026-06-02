__d(
  "WAWebMexUpdateNewsletterUserSetting",
  [
    "WAWebMexClient",
    "WAWebMexNewsletterUtils",
    "WAWebMexUpdateNewsletterUserSettingJobMutation.graphql",
    "WAWebNewsletterRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexUpdateNewsletterUserSettingJobMutation.graphql"));
    async function u(e) {
      var t = await o("WAWebNewsletterRpcUtils").runWithBackoff(function () {
          return c(e);
        }),
        n = o("WAWebMexNewsletterUtils").convertMutationResponse(
          t.xwa2_newsletter_update_user_setting,
        );
      return [n];
    }
    async function c(e) {
      var t = { input: e },
        n = await o("WAWebMexClient").fetchQuery(s, t);
      return n;
    }
    l.mexUpdateNewsletterUserSetting = u;
  },
  98,
);
