__d(
  "WAWebMexUpdateNewsletterUserSetting",
  [
    "WAWebMexClient",
    "WAWebMexNewsletterUtils",
    "WAWebMexUpdateNewsletterUserSettingJobMutation.graphql",
    "WAWebNewsletterRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexUpdateNewsletterUserSettingJobMutation.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebNewsletterRpcUtils").runWithBackoff(
              function () {
                return d(e);
              },
            ),
            n = o("WAWebMexNewsletterUtils").convertMutationResponse(
              t.xwa2_newsletter_update_user_setting,
            );
          return [n];
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = { input: e },
            n = yield o("WAWebMexClient").fetchQuery(s, t);
          return n;
        })),
        m.apply(this, arguments)
      );
    }
    l.mexUpdateNewsletterUserSetting = u;
  },
  98,
);
