__d(
  "WAWebCoexBusinessRequest",
  [
    "WALogger",
    "WAWebFetchWithAdAccountToken",
    "WAWebMobilePlatforms",
    "WAWebNetworkStatus",
    "WAWebUserPrefsMeUser",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n) {
      var a;
      if (!o("WAWebMobilePlatforms").isSMB())
        return { type: "failed", reason: "not_business_account" };
      var i =
        (a = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
          ? void 0
          : a.user;
      if (i == null) return { type: "failed", reason: "no_phone_number" };
      await r("WAWebNetworkStatus").waitIfOffline();
      try {
        var l = await o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken(
          function (e) {
            return t({ phoneNumber: i, token: e });
          },
        );
        return { type: "success", value: l };
      } catch (t) {
        return t instanceof
          o("WAWebFetchWithAdAccountToken").FetchAdAccountTokenError
          ? (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "sendCoexBusinessRequest: token unavailable, ",
                  "",
                ])),
              t.tokenResult.type,
            ),
            { type: "failed", reason: "token_unavailable" })
          : (o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "sendCoexBusinessRequest: request failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs(n),
            { type: "failed", reason: "request_failed" });
      }
    }
    l.sendCoexBusinessRequest = u;
  },
  98,
);
