__d(
  "WAWebSyncActionStore",
  ["WALogger", "WAWebSchemaSyncActions", "WAWebSyncdDb"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.count = function () {
            return o("WAWebSchemaSyncActions").getSyncActionsTable().count();
          }),
          (n.get = async function (t) {
            var e = await o("WAWebSyncdDb").getSyncAction(t);
            return e == null
              ? null
              : o("WAWebSchemaSyncActions").convertToSyncActionFromRow(e);
          }),
          (n.getByCollections = async function (t) {
            var e = await o("WAWebSyncdDb").getSyncActionsRows(
              ["collection"],
              t,
            );
            return e.map(
              o("WAWebSchemaSyncActions").convertToSyncActionFromRow,
            );
          }),
          (n.getByIndexMacs = async function (t) {
            return t.length < 7
              ? this.getByIndexMacsMultiQuery(t)
              : this.getByIndexMacsSingleQuery(t);
          }),
          (n.getByCollectionAndIndex = async function (n, r) {
            var t = await o("WAWebSyncdDb").getSyncActionsRows(["index"], r),
              a = t.filter(function (e) {
                return e.collection === n;
              });
            return (
              t.length !== a.length &&
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] collection mismatch for mutation index: ",
                        "",
                      ])),
                    n,
                  )
                  .sendLogs("index-in-wrong-collection"),
              a.map(o("WAWebSchemaSyncActions").convertToSyncActionFromRow)
            );
          }),
          (n.getByIndexMacsMultiQuery = async function (t) {
            var e = await Promise.all(
              t.map(function (e) {
                return o("WAWebSyncdDb").getSyncActionsRows(["indexMac"], [e]);
              }),
            );
            return e
              .flat()
              .map(o("WAWebSchemaSyncActions").convertToSyncActionFromRow);
          }),
          (n.getByIndexMacsSingleQuery = async function (t) {
            var e = await o("WAWebSyncdDb").getSyncActionsRows(["indexMac"], t);
            return e.map(
              o("WAWebSchemaSyncActions").convertToSyncActionFromRow,
            );
          }),
          (n.getByActionStates = async function (t) {
            var e = await o("WAWebSyncdDb").getSyncActionsRows(
              ["actionState"],
              t,
            );
            return e.map(
              o("WAWebSchemaSyncActions").convertToSyncActionFromRow,
            );
          }),
          (n.getByModelInfos = async function (t) {
            var e = await o("WAWebSyncdDb").getSyncActionsRows(
              ["modelId", "modelType", "actionState"],
              t,
            );
            return e.map(
              o("WAWebSchemaSyncActions").convertToSyncActionFromRow,
            );
          }),
          (n.getAll = function () {
            return o("WAWebSchemaSyncActions")
              .getSyncActionsTable()
              .all()
              .then(function (e) {
                return e.map(
                  o("WAWebSchemaSyncActions").convertToSyncActionFromRow,
                );
              });
          }),
          (n.bulkSet = function (t) {
            return o("WAWebSyncdDb").setSyncActionRows(
              t.map(o("WAWebSchemaSyncActions").convertFromSyncActionToRow),
            );
          }),
          (n.bulkUpdate = function (t) {
            return o("WAWebSyncdDb").updateSyncActionRows(
              t.map(o("WAWebSchemaSyncActions").convertFromSyncActionToRow),
            );
          }),
          (n.bulkRemove = function (t) {
            return o("WAWebSyncdDb").deleteSyncActionRows(t);
          }),
          (n.clear = function () {
            return o("WAWebSchemaSyncActions").getSyncActionsTable().clear();
          }),
          t
        );
      })();
    ((s.locks = ["sync-actions"]), (l.WAWebSyncActionStore = s));
  },
  98,
);
