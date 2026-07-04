__d(
  "WAWebMexNewsletterBlockUserJob",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexNewsletterBlockUserJobMutation.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r,
            a =
              e !== void 0
                ? e
                : (e = n("WAWebMexNewsletterBlockUserJobMutation.graphql")),
            i = t.newsletterId,
            l = t.responseServerId,
            u = t.serverId,
            c = { newsletter_id: i, server_id: u, response_server_id: l },
            d = yield o("WAWebMexClient").fetchQuery(a, c);
          if (
            (d == null || (r = d.xwa2_newsletter_block_user) == null
              ? void 0
              : r.newsletter_id) == null
          )
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[MEX][NEWSLETTER] block user from newsletter failed",
                    ])),
                )
                .sendLogs("mex-block-user-newsletter-failed")
                .tags("GQL", "MEX", "NEWSLETTER", "RESPONSE"),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                500,
                "unexpected-null-mex-response",
              )
            );
          return { success: !0 };
        })),
        c.apply(this, arguments)
      );
    }
    l.mexNewsletterBlockUser = u;
  },
  98,
);
