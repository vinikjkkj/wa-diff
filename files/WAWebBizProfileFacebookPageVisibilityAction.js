__d(
  "WAWebBizProfileFacebookPageVisibilityAction",
  [
    "Promise",
    "WALogger",
    "WAWebBizProfileBusinessTokenWrite",
    "WAWebBizProfileFacebookPageVisibilityJob",
    "WAWebFetchWithAdAccountToken",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = (d || (d = n("Promise"))).resolve(!0);
    function p(e) {
      var t = m.then(function () {
        return _(e);
      });
      return ((m = t), t);
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = yield o(
              "WAWebBizProfileBusinessTokenWrite",
            ).writeWithBusinessToken(function (e) {
              return o(
                "WAWebBizProfileFacebookPageVisibilityJob",
              ).updateFacebookPageVisibleOnProfile(e, t);
            }, "biz-profile-facebook-page-visibility-late-failure");
            if (n.type === "token_timed_out")
              return (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Linked Facebook Page visibility update timed out waiting for the business token",
                      ])),
                  )
                  .sendLogs(
                    "biz-profile-facebook-page-visibility-token-timeout",
                  ),
                !1
              );
            var a = n.value;
            return a !== t
              ? (o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Linked Facebook Page visibility update was not applied",
                      ])),
                  )
                  .sendLogs("biz-profile-facebook-page-visibility-not-applied"),
                !1)
              : !0;
          } catch (e) {
            return e instanceof
              o("WAWebFetchWithAdAccountToken").FetchAdAccountTokenError ||
              e instanceof
                o("WAWebBizProfileBusinessTokenWrite").NotABusinessTokenError
              ? (o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Linked Facebook Page visibility update has no WhatsApp business token",
                      ])),
                  )
                  .sendLogs(
                    "biz-profile-facebook-page-visibility-no-business-token",
                  ),
                !1)
              : (o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Linked Facebook Page visibility update failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs(
                    "biz-profile-facebook-page-visibility-update-failed",
                  ),
                !1);
          }
        })),
        f.apply(this, arguments)
      );
    }
    l.updateLinkedFacebookPageShownOnProfile = p;
  },
  98,
);
