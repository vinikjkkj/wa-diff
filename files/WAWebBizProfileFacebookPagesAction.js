__d(
  "WAWebBizProfileFacebookPagesAction",
  [
    "WALogger",
    "WAWebBizProfileFacebookPagesJob",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.type !== "FB")
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Facebook Pages fetch was called without a Facebook identity",
                    ])),
                )
                .sendLogs("biz-profile-facebook-pages-non-facebook-identity"),
              { type: "error" }
            );
          try {
            var n = yield o(
              "WAWebBizProfileFacebookPagesJob",
            ).queryFacebookPagesEligibleForLinking(t.token);
            return n.length === 0
              ? { type: "no_pages" }
              : { pages: n, type: "pages" };
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Facebook Pages fetch failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("biz-profile-facebook-pages-fetch-failed"),
              { type: "error" }
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.fetchFacebookPages = u;
  },
  98,
);
