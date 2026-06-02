__d(
  "WAWebNewsletterCleanupTasks",
  [
    "WAWebBackendApi",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterDeleteChatJob",
    "WAWebNewsletterStorageUtils",
    "WAWebSchemaNewsletterMetadata",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o(
      "WAWebNewsletterStorageUtils",
    ).mapNewsletterMembershipTypeForStorage(
      o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest,
    );
    async function s() {
      var t = await o("WAWebBackendApi").frontendSendAndReceive(
          "getActiveNewsletter",
        ),
        n = t == null ? void 0 : t.toJid(),
        r = await o("WAWebSchemaNewsletterMetadata")
          .getNewsletterMetadataTable()
          .all(),
        a = r
          .filter(function (t) {
            return t.membershipType === e && t.id !== n;
          })
          .map(function (e) {
            return e.id;
          });
      await o("WAWebNewsletterDeleteChatJob").bulkDeleteNewsletterChats(
        a.map(o("WAWebWidFactory").createWid),
      );
    }
    l.deletePreviewNewsletters = s;
  },
  98,
);
