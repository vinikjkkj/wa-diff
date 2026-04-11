__d(
  "WAWebNewsletterDeleteAction",
  [
    "WAJids",
    "WALogger",
    "WAWebChatGetters",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterDeleteJob",
    "WAWebNewsletterQueues",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      return o("WAWebNewsletterQueues").newsletterDeleteQueue.enqueue(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!o("WAWebChatGetters").getIsNewsletter(t)) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletters][deleteNewsletterAction] not a newsletter",
                  ])),
              )
              .tags("newsletter")
              .sendLogs("delete-not-a-newsletter");
            return;
          }
          var n = o("WAJids").toNewsletterJid(t.id.toJid());
          try {
            (yield o("WAWebNewsletterDeleteJob").deleteNewsletter(n),
              o(
                "WAWebNewsletterBridgeApi",
              ).NewsletterBridgeApi.deleteNewsletter({ id: t.id, keep: !1 }));
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletters][deleteNewsletterAction] Failed to delete",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("newsletter-failed-to-delete"),
              e
            );
          }
        }),
      );
    }
    l.deleteNewsletterAction = u;
  },
  98,
);
