__d(
  "WAWebNewsletterDeleteChatJob",
  [
    "Promise",
    "WALogger",
    "WAWebChatDeleteBridge",
    "WAWebNewsletterDeleteMessageAddOns",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaNewsletterMetadata",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob("deleteNewsletterChat", function () {
          return t.isNewsletter()
            ? o("WAWebChatDeleteBridge").deleteFromStorage(t)
            : (o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[deleteNewsletterChat] non-newsletter chat delete \u2717",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("delete-non-newsletter-chat"),
              (s || (s = n("Promise"))).resolve());
        })
        .waitUntilCompleted();
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(function (e) {
            return e.toJid();
          });
          (yield (s || (s = n("Promise"))).all(
            e.map(function (e) {
              return o(
                "WAWebNewsletterDeleteMessageAddOns",
              ).deleteNewsletterMessageAddOns(e);
            }),
          ),
            yield s.all(
              e.map(function (e) {
                return o("WAWebChatDeleteBridge").deleteFromStorage(e);
              }),
            ),
            yield o("WAWebSchemaNewsletterMetadata")
              .getNewsletterMetadataTable()
              .bulkRemove(t));
        })),
        d.apply(this, arguments)
      );
    }
    ((l.deleteNewsletterChat = u), (l.bulkDeleteNewsletterChats = c));
  },
  98,
);
