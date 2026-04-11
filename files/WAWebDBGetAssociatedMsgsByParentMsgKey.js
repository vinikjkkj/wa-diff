__d(
  "WAWebDBGetAssociatedMsgsByParentMsgKey",
  ["WAWebSchemaMessageAssociation"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebSchemaMessageAssociation")
        .getMessageAssociationTable()
        .anyOf(["parentMsgKey"], e.map(String));
    }
    l.bulkGetMessagesByParentMsgKey = e;
  },
  98,
);
