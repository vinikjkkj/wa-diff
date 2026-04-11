__d(
  "WAWebDBReplaceUnknownAssociations",
  ["WAWebMessageAssociation.flow", "WAWebSchemaMessageAssociation"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = [];
      if (e.length) {
        var n = e.map(function (e) {
          return [
            e.msgKey,
            o("WAWebMessageAssociation.flow").MessageAssociationType.UNKNOWN,
          ];
        });
        (t.push(
          o("WAWebSchemaMessageAssociation")
            .getMessageAssociationTable()
            .bulkRemove(n),
        ),
          t.push(
            o("WAWebSchemaMessageAssociation")
              .getMessageAssociationTable()
              .bulkCreateOrReplace(e),
          ));
      }
      return t;
    }
    l.replaceUnknownAssociations = e;
  },
  98,
);
