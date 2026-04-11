__d(
  "WAWebSchemaSyncActions",
  [
    "WALogger",
    "WASyncdKeyTypes",
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
    "WAWebSyncdCollectionHandlerTypesConverter",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n = t.action,
        a = t.actionState,
        i = t.binarySyncAction,
        l = t.collection,
        s = t.index,
        u = t.indexMac,
        c = t.keyId,
        d = t.modelId,
        m = t.modelType,
        p = t.timestamp,
        _ = t.valueMac,
        f = t.version,
        g = t.binarySyncData;
      if (g == null) {
        if (i == null)
          throw (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] binarySyncAction null when binarySyncData null",
                  ])),
              )
              .tags("syncd")
              .sendLogs(
                "syncd: syncd binarySyncAction should not be null when binarySyncData is null",
              ),
            r("err")(
              "syncd: binarySyncAction should not be null when binarySyncData is null",
            )
          );
        g = o("WAWebSyncdCollectionHandlerTypesConverter").syncActionToSyncData(
          i,
        );
      }
      return {
        index: s,
        binarySyncData: g,
        actionState: a,
        version: f,
        keyId: c,
        modelId: d,
        modelType: m,
        indexMac: u,
        valueMac: _,
        collection: l,
        timestamp: p,
        action: n,
      };
    }
    function u(e) {
      var t = e.keyId;
      return babelHelpers.extends({}, e, {
        keyId: o("WASyncdKeyTypes").toSyncKeyId(t),
      });
    }
    function c(e) {
      var t = babelHelpers.extends({}, e);
      return (
        t.keyId != null &&
          (t.keyId = o("WASyncdKeyTypes").fromSyncKeyId(t.keyId)),
        t
      );
    }
    function d() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addCompositeIndex,
        a = t.addIndex,
        i = t.addUserDefinedPrimaryKey;
      e.add("sync-actions")
        .version(o("WAWebModelStorageVersions").syncActionsCreateTable(), [
          i("index"),
          n("keyId"),
          n("version"),
          n("actionState"),
          a("actionState"),
          n("modelId"),
          n("modelType"),
          r(["modelId", "modelType", "actionState"]),
          n("valueMac"),
          n("indexMac"),
          a("indexMac"),
          n("collection"),
          a("collection"),
          n("timestamp"),
          n("action"),
          a("action"),
          n("binarySyncAction"),
          n("binarySyncData"),
        ])
        .view(s);
    }
    function m() {
      return o("WAWebModelStorageUtils").getStorage().table("sync-actions");
    }
    ((l.convertToSyncActionFromRow = u),
      (l.convertFromSyncActionToRow = c),
      (l.addTable = d),
      (l.getSyncActionsTable = m));
  },
  98,
);
