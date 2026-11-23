__d(
  "WAWebBizProfileFacebookPagesAction",
  ["WALogger", "WAWebBizProfileFacebookPagesJob", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
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
        var n = await o(
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
    }
    l.fetchFacebookPages = u;
  },
  98,
);
