__d(
  "WAWebMexNewsletterLabelAiContentJob",
  [
    "WALogger",
    "WAWebMexClient",
    "WAWebMexNewsletterLabelAiContentJobMutation.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebMexNewsletterLabelAiContentJobMutation.graphql"));
    async function c(e, t, n) {
      var r,
        a = await o("WAWebMexClient").fetchQuery(u, {
          newsletter_id: e,
          server_id: t,
          message_type: n,
        });
      return (a == null || (r = a.xwa2_newsletter_label_ai_content) == null
        ? void 0
        : r.id) == null
        ? (o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter][sgi-ai-content][mex] label ai content - null resp",
                ])),
            )
            .tags("GQL", "MEX", "sgi", "wa-ice", "wa-spice-web")
            .sendLogs("newsletter-label-ai-content-mex-failed"),
          !1)
        : !0;
    }
    l.mexNewsletterLabelAiContentJob = c;
  },
  98,
);
