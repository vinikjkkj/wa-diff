__d(
  "WAWebMexNewsletterPinMessagesJob",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexNewsletterParseUtils",
    "WAWebMexNewsletterPinMessagesJobMutation.graphql",
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
                : (e = n("WAWebMexNewsletterPinMessagesJobMutation.graphql")),
            l = { newsletter_id: t, input: { message_ids: r } },
            u = yield o("WAWebMexClient").fetchQuery(i, l),
            c =
              u == null ||
              (a = u.xwa2_newsletter_pin_messages) == null ||
              (a = a.thread_metadata) == null
                ? void 0
                : a.pinned_messages;
          if (c == null)
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[MEX][NEWSLETTER] pin messages returned no snapshot",
                    ])),
                )
                .sendLogs("mex-newsletter-pin-failed")
                .tags("GQL", "MEX", "NEWSLETTER", "PIN"),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                500,
                "unexpected-null-mex-pin-response",
              )
            );
          return o("WAWebMexNewsletterParseUtils").toPinnedMessagesMixin(c);
        })),
        c.apply(this, arguments)
      );
    }
    l.mexNewsletterPinMessages = u;
  },
  98,
);
