__d(
  "WAWebSchemaLabelAssociation",
  [
    "$InternalEnum",
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({ Jid: "jid" });
    function s(e) {
      var t = e.associationId,
        n = e.labelId,
        r = e.type;
      return [n, t, r];
    }
    function u(e) {
      return e[1];
    }
    function c(e) {
      return e[2];
    }
    function d(e) {
      return { labelId: e[0], associationId: e[1], type: e[2] };
    }
    function m(e, t) {
      return [e[0], t, e[2]];
    }
    function p() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addCompositeIndex,
        r = t.addCompositePrimaryKey,
        a = t.addIndex;
      e.add("label-association")
        .version(o("WAWebModelStorageVersions").labelAssociationCreateTable(), [
          r(["labelId", "associationId", "type"]),
          a("labelId"),
          n(["associationId", "type"]),
        ])
        .view(function (e) {
          return e;
        });
    }
    function _() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("label-association");
    }
    ((l.LabelAssociationType = e),
      (l.createLabelAssociationPrimaryKey = s),
      (l.getAssociationIdFromPrimaryKey = u),
      (l.getAssociationTypeFromPrimaryKey = c),
      (l.createLabelAssociationRowFromPrimaryKey = d),
      (l.replaceAssociationIdInPrimaryKey = m),
      (l.addTable = p),
      (l.getLabelAssociationTable = _));
  },
  98,
);
