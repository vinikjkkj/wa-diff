__d(
  "WAWebBizProfileFacebookPageVisibilityAction",
  [
    "Promise",
    "WALogger",
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
      d = (c || (c = n("Promise"))).resolve(!0);
    function m(e) {
      var t = d.then(function () {
        return p(e);
      });
      return ((d = t), t);
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = yield o(
              "WAWebFetchWithAdAccountToken",
            ).fetchWithAdAccountToken(function (e) {
              if (e.type !== "WAA") throw new f();
              return o(
                "WAWebBizProfileFacebookPageVisibilityJob",
              ).updateFacebookPageVisibleOnProfile(e.token, t);
            });
            return n !== t
              ? (o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Linked Facebook Page visibility update was not applied",
                      ])),
                  )
                  .sendLogs("biz-profile-facebook-page-visibility-not-applied"),
                !1)
              : !0;
          } catch (e) {
            return e instanceof
              o("WAWebFetchWithAdAccountToken").FetchAdAccountTokenError ||
              e instanceof f
              ? (o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Linked Facebook Page visibility update has no WhatsApp business token",
                      ])),
                  )
                  .sendLogs(
                    "biz-profile-facebook-page-visibility-no-business-token",
                  ),
                !1)
              : (o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
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
        _.apply(this, arguments)
      );
    }
    var f = (function (e) {
      function t() {
        var t;
        return (
          (t =
            e.call(
              this,
              "The ad account token is not a WhatsApp business token",
            ) || this),
          (t.name = "NotABusinessTokenError"),
          t
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    l.updateLinkedFacebookPageShownOnProfile = m;
  },
  98,
);
