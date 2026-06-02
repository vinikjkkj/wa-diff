__d(
  "WAWebDBCustomerDataDatabaseApi",
  ["WAWebSchemaCustomerData"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      return o("WAWebSchemaCustomerData")
        .getCustomerDataTable()
        .createOrReplace(e);
    }
    async function s(e) {
      var t = await o("WAWebSchemaCustomerData")
        .getCustomerDataTable()
        .equals(["chatJid"], e);
      return t.length > 0 ? t[0] : null;
    }
    async function u(e) {
      return o("WAWebSchemaCustomerData")
        .getCustomerDataTable()
        .bulkRemoveByIndex(["chatJid"], [e]);
    }
    async function c(e) {
      return o("WAWebSchemaCustomerData")
        .getCustomerDataTable()
        .bulkMergeOnly(e);
    }
    ((l.addOrEditCustomerData = e),
      (l.getCustomerDataByChatJid = s),
      (l.removeCustomerDataByChatJid = u),
      (l.bulkUpdateCustomerData = c));
  },
  98,
);
