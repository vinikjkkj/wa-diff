__d(
  "WAWebNewsletterDeleteChatJob",
  [
    "WALogger",
    "WAWebChatDeleteBridge",
    "WAWebNewsletterDeleteMessageAddOns",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaNewsletterMetadata",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
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
              Promise.resolve());
        })
        .waitUntilCompleted();
    }
    async function u(e) {
      var t = e.map(function (e) {
        return e.toJid();
      });
      (await Promise.all(
        e.map(function (e) {
          return o(
            "WAWebNewsletterDeleteMessageAddOns",
          ).deleteNewsletterMessageAddOns(e);
        }),
      ),
        await Promise.all(
          e.map(function (e) {
            return o("WAWebChatDeleteBridge").deleteFromStorage(e);
          }),
        ),
        await o("WAWebSchemaNewsletterMetadata")
          .getNewsletterMetadataTable()
          .bulkRemove(t));
    }
    ((l.deleteNewsletterChat = s), (l.bulkDeleteNewsletterChats = u));
  },
  98,
);
