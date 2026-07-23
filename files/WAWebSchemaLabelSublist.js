__d(
  "WAWebSchemaLabelSublist",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.chatJid,
        n = e.predefinedId;
      return [n, t];
    }
    function s(e) {
      return e[0];
    }
    function u(e) {
      return e[1];
    }
    function c(e, t) {
      return { predefinedId: e[0], chatJid: e[1], subListId: t };
    }
    function d() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addCompositePrimaryKey,
        a = t.addIndex;
      e.add("label_sublist")
        .version(o("WAWebModelStorageVersions").labelSublistCreateTable(), [
          r(["predefinedId", "chatJid"]),
          n("subListId"),
          a("predefinedId"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function m() {
      return o("WAWebModelStorageUtils").getStorage().table("label_sublist");
    }
    ((l.createLabelSublistPrimaryKey = e),
      (l.getPredefinedIdFromPrimaryKey = s),
      (l.getChatJidFromPrimaryKey = u),
      (l.createLabelSublistRowFromPrimaryKey = c),
      (l.addTable = d),
      (l.getLabelSublistTable = m));
  },
  98,
);
