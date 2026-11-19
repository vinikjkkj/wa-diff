__d(
  "WAWebBizProfileFacebookConnectPageAction",
  [
    "WALogger",
    "WAWebBizProfileFacebookConnectPageJob",
    "WAWebFetchWithAdAccountToken",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (t.type !== "FB")
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Facebook Page connect was called without a Facebook identity",
                    ])),
                )
                .sendLogs(
                  "biz-profile-facebook-connect-page-non-facebook-identity",
                ),
              { type: "error" }
            );
          try {
            var a = yield o(
              "WAWebFetchWithAdAccountToken",
            ).fetchWithAdAccountToken(function (e) {
              if (e.type !== "WAA") throw new m();
              return o(
                "WAWebBizProfileFacebookConnectPageJob",
              ).requestWhatsAppAccountProof(e.token);
            });
            return (
              yield o(
                "WAWebBizProfileFacebookConnectPageJob",
              ).connectFacebookPageToWhatsApp(t.token, n, a),
              { type: "connected" }
            );
          } catch (e) {
            return e instanceof
              o("WAWebFetchWithAdAccountToken").FetchAdAccountTokenError ||
              e instanceof m
              ? (o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Facebook Page connect has no WhatsApp business token",
                      ])),
                  )
                  .sendLogs(
                    "biz-profile-facebook-connect-page-no-business-token",
                  ),
                { type: "error" })
              : (o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Facebook Page connect failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("biz-profile-facebook-connect-page-failed"),
                { type: "error" });
          }
        })),
        d.apply(this, arguments)
      );
    }
    var m = (function (e) {
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
    l.connectFacebookPage = c;
  },
  98,
);
