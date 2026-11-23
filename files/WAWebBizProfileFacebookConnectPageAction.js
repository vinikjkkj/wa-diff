__d(
  "WAWebBizProfileFacebookConnectPageAction",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBizProfileFacebookConnectPageJob",
    "WAWebFetchAdAccountToken",
    "WAWebFetchWithAdAccountToken",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t, n) {
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
        var a = await o("WAPromiseTimeout").promiseTimeout(
          o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken(
            function (e) {
              if (e.type !== "WAA") throw new p();
              return o(
                "WAWebBizProfileFacebookConnectPageJob",
              ).requestWhatsAppAccountProof(e.token);
            },
          ),
          m(),
        );
        return (
          await o(
            "WAWebBizProfileFacebookConnectPageJob",
          ).connectFacebookPageToWhatsApp(t.token, n, a),
          { type: "connected" }
        );
      } catch (e) {
        return e instanceof o("WACustomError").TimeoutError
          ? (o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Facebook Page connect timed out before the account proof",
                  ])),
              )
              .sendLogs("biz-profile-facebook-connect-page-proof-timeout"),
            { type: "error" })
          : e instanceof
                o("WAWebFetchWithAdAccountToken").FetchAdAccountTokenError ||
              e instanceof p
            ? (o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Facebook Page connect has no WhatsApp business token",
                    ])),
                )
                .sendLogs(
                  "biz-profile-facebook-connect-page-no-business-token",
                ),
              { type: "error" })
            : (o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "Facebook Page connect failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("biz-profile-facebook-connect-page-failed"),
              { type: "error" });
      }
    }
    function m() {
      return (
        2 *
        o("WAWebFetchAdAccountToken").getMaximumAdAccountFetchTimeoutSeconds() *
        1e3
      );
    }
    var p = (function (e) {
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
    l.connectFacebookPage = d;
  },
  98,
);
