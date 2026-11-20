__d(
  "WAWebBizProfileLinkedFacebookPageAction",
  [
    "Promise",
    "WALogger",
    "WAWebBizProfileLinkedFacebookPageJob",
    "WAWebFetchWithAdAccountToken",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            return yield o(
              "WAWebFetchWithAdAccountToken",
            ).fetchWithAdAccountToken(function (e) {
              return e.type === "WAA"
                ? o(
                    "WAWebBizProfileLinkedFacebookPageJob",
                  ).queryLinkedFacebookPage(e.token)
                : (u || (u = n("Promise"))).resolve({ type: "unresolved" });
            });
          } catch (t) {
            return t instanceof
              o("WAWebFetchWithAdAccountToken").FetchAdAccountTokenError &&
              t.tokenResult.type === "recovery-required"
              ? (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Linked Facebook Page fetch has no WhatsApp business token: ",
                      "",
                    ])),
                  t.tokenResult.type,
                ),
                { type: "unresolved" })
              : (o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Linked Facebook Page fetch failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("biz-profile-linked-facebook-page-fetch-failed"),
                { type: "unresolved" });
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.fetchLinkedFacebookPage = c;
  },
  98,
);
