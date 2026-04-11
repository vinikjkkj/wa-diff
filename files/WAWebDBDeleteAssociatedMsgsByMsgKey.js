__d(
  "WAWebDBDeleteAssociatedMsgsByMsgKey",
  ["WAWebSchemaMessageAssociation"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebSchemaMessageAssociation")
        .getMessageAssociationTable()
        .bulkRemove(e);
    }
    function s(e) {
      return o("WAWebSchemaMessageAssociation")
        .getMessageAssociationTable()
        .bulkRemoveByIndex(["msgKey"], e);
    }
    ((l.bulkDeleteMessagesByMsgKeyAndAssociationType = e),
      (l.bulkDeleteMessagesByMsgKeys = s));
  },
  98,
);
