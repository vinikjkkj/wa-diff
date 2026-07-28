__d(
  "WAWebMexNewsletterLabelAiContentJob",
  [
    "WALogger",
    "WAWebMexClient",
    "WAWebMexNewsletterLabelAiContentJobMutation.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebMexNewsletterLabelAiContentJobMutation.graphql"));
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a = yield o("WAWebMexClient").fetchQuery(u, {
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
        })),
        d.apply(this, arguments)
      );
    }
    l.mexNewsletterLabelAiContentJob = c;
  },
  98,
);
