__d(
  "WAWebBizProfileFacebookUnlinkPageAction",
  [
    "WALogger",
    "WAWebBizProfileBusinessTokenWrite",
    "WAWebBizProfileFacebookUnlinkPageJob",
    "WAWebFetchWithAdAccountToken",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t) {
      try {
        var n = await o(
          "WAWebBizProfileBusinessTokenWrite",
        ).writeWithBusinessToken(function (e) {
          return o(
            "WAWebBizProfileFacebookUnlinkPageJob",
          ).unlinkFacebookPageFromWhatsApp(e, t);
        }, "biz-profile-facebook-page-unlink-late-failure");
        return n.type === "token_timed_out"
          ? (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Facebook Page unlink timed out waiting for the business token",
                  ])),
              )
              .sendLogs("biz-profile-facebook-page-unlink-token-timeout"),
            !1)
          : (n.value ||
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Facebook Page unlink was not successful",
                    ])),
                )
                .sendLogs("biz-profile-facebook-page-unlink-not-successful"),
            n.value);
      } catch (e) {
        return e instanceof
          o("WAWebFetchWithAdAccountToken").FetchAdAccountTokenError ||
          e instanceof
            o("WAWebBizProfileBusinessTokenWrite").NotABusinessTokenError
          ? (o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Facebook Page unlink has no WhatsApp business token",
                  ])),
              )
              .sendLogs("biz-profile-facebook-page-unlink-no-business-token"),
            !1)
          : (o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Facebook Page unlink failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("biz-profile-facebook-page-unlink-failed"),
            !1);
      }
    }
    l.unlinkLinkedFacebookPage = d;
  },
  98,
);
