__d(
  "WAWebCoexBusinessRequest",
  [
    "WALogger",
    "WAWebFetchWithAdAccountToken",
    "WAWebMobilePlatforms",
    "WAWebNetworkStatus",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a;
          if (!o("WAWebMobilePlatforms").isSMB())
            return { type: "failed", reason: "not_business_account" };
          var i =
            (a = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
              ? void 0
              : a.user;
          if (i == null) return { type: "failed", reason: "no_phone_number" };
          yield r("WAWebNetworkStatus").waitIfOffline();
          try {
            var l = yield o(
              "WAWebFetchWithAdAccountToken",
            ).fetchWithAdAccountToken(function (e) {
              return t({ phoneNumber: i, token: e });
            });
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
        })),
        c.apply(this, arguments)
      );
    }
    l.sendCoexBusinessRequest = u;
  },
  98,
);
