__d(
  "WAWebDBContactManagerMetadataDatabaseApi",
  ["WAJids", "WAWebSchemaContactManagerMetadata", "err"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      await o("WAWebSchemaContactManagerMetadata")
        .getContactManagerMetadataTable()
        .createOrReplace(m(e));
    }
    async function s(e) {
      await o("WAWebSchemaContactManagerMetadata")
        .getContactManagerMetadataTable()
        .bulkCreateOrReplace(e.map(m));
    }
    async function u(e) {
      await o("WAWebSchemaContactManagerMetadata")
        .getContactManagerMetadataTable()
        .bulkRemove(e.map(d));
    }
    async function c() {
      return (
        await o("WAWebSchemaContactManagerMetadata")
          .getContactManagerMetadataTable()
          .all()
      ).map(m);
    }
    function d(e) {
      var t = o("WAJids").interpretAndValidateJid(e);
      if (t.jidType !== "lidUser")
        throw r("err")("Contact Manager metadata requires a LID JID");
      return t.userJid;
    }
    function m(e) {
      return babelHelpers.extends({}, e, { id: d(e.id) });
    }
    ((l.addOrEditContactManagerMetadata = e),
      (l.bulkAddOrEditContactManagerMetadata = s),
      (l.bulkRemoveContactManagerMetadata = u),
      (l.getAllContactManagerMetadata = c),
      (l.parseContactManagerMetadataJid = d));
  },
  98,
);
