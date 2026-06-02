__d(
  "WAWebDBOutContactDatabaseApi",
  ["WAWebSchemaOutContact"],
  function (t, n, r, o, a, i, l) {
    async function e() {
      return o("WAWebSchemaOutContact").getOutContactTable().all();
    }
    async function s(e) {
      await o("WAWebSchemaOutContact")
        .getOutContactTable()
        .bulkCreateOrReplace(e);
    }
    async function u(e) {
      await o("WAWebSchemaOutContact").getOutContactTable().remove(e);
    }
    async function c(e) {
      await o("WAWebSchemaOutContact").getOutContactTable().bulkRemove(e);
    }
    ((l.getAllOutContacts = e),
      (l.putOutContactBatch = s),
      (l.removeOutContact = u),
      (l.removeOutContactBatch = c));
  },
  98,
);
