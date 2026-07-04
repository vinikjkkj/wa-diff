__d(
  "WAWebMexNewsletterUnpinMessagesJob",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexNewsletterParseUtils",
    "WAWebMexNewsletterUnpinMessagesJobMutation.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a,
            i =
              e !== void 0
                ? e
                : (e = n("WAWebMexNewsletterUnpinMessagesJobMutation.graphql")),
            l = { newsletter_id: t, input: { message_ids: r } },
            u = yield o("WAWebMexClient").fetchQuery(i, l),
            c =
              u == null ||
              (a = u.xwa2_newsletter_unpin_messages) == null ||
              (a = a.thread_metadata) == null
                ? void 0
                : a.pinned_messages;
          if (c == null)
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[MEX][NEWSLETTER] unpin messages returned no snapshot",
                    ])),
                )
                .sendLogs("mex-newsletter-unpin-failed")
                .tags("GQL", "MEX", "NEWSLETTER", "PIN"),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                500,
                "unexpected-null-mex-unpin-response",
              )
            );
          return o("WAWebMexNewsletterParseUtils").toPinnedMessagesMixin(c);
        })),
        c.apply(this, arguments)
      );
    }
    l.mexNewsletterUnpinMessages = u;
  },
  98,
);
