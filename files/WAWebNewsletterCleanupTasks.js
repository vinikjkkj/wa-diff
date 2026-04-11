__d(
  "WAWebNewsletterCleanupTasks",
  [
    "WAWebBackendApi",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterDeleteChatJob",
    "WAWebNewsletterStorageUtils",
    "WAWebSchemaNewsletterMetadata",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o(
      "WAWebNewsletterStorageUtils",
    ).mapNewsletterMembershipTypeForStorage(
      o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest,
    );
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WAWebBackendApi").frontendSendAndReceive(
              "getActiveNewsletter",
            ),
            n = t == null ? void 0 : t.toJid(),
            r = yield o("WAWebSchemaNewsletterMetadata")
              .getNewsletterMetadataTable()
              .all(),
            a = r
              .filter(function (t) {
                return t.membershipType === e && t.id !== n;
              })
              .map(function (e) {
                return e.id;
              });
          yield o("WAWebNewsletterDeleteChatJob").bulkDeleteNewsletterChats(
            a.map(o("WAWebWidFactory").createWid),
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.deletePreviewNewsletters = s;
  },
  98,
);
