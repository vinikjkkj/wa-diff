__d(
  "WAWebSyncActionStore",
  [
    "Promise",
    "WALogger",
    "WAWebSchemaSyncActions",
    "WAWebSyncdDb",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function () {
        function t() {}
        var r = t.prototype;
        return (
          (r.count = function () {
            return o("WAWebSchemaSyncActions").getSyncActionsTable().count();
          }),
          (r.get = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield o("WAWebSyncdDb").getSyncAction(e);
                return t == null
                  ? null
                  : o("WAWebSchemaSyncActions").convertToSyncActionFromRow(t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.getByCollections = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield o("WAWebSyncdDb").getSyncActionsRows(
                  ["collection"],
                  e,
                );
                return t.map(
                  o("WAWebSchemaSyncActions").convertToSyncActionFromRow,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.getByIndexMacs = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return e.length < 7
                  ? this.getByIndexMacsMultiQuery(e)
                  : this.getByIndexMacsSingleQuery(e);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.getByCollectionAndIndex = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n) {
                var r = yield o("WAWebSyncdDb").getSyncActionsRows(
                    ["index"],
                    n,
                  ),
                  a = r.filter(function (e) {
                    return e.collection === t;
                  });
                return (
                  r.length !== a.length &&
                    o("WALogger")
                      .WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[syncd] collection mismatch for mutation index: ",
                            "",
                          ])),
                        t,
                      )
                      .sendLogs("index-in-wrong-collection"),
                  a.map(o("WAWebSchemaSyncActions").convertToSyncActionFromRow)
                );
              },
            );
            function r(e, n) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (r.getByIndexMacsMultiQuery = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield (s || (s = n("Promise"))).all(
                  e.map(function (e) {
                    return o("WAWebSyncdDb").getSyncActionsRows(
                      ["indexMac"],
                      [e],
                    );
                  }),
                );
                return t
                  .flat()
                  .map(o("WAWebSchemaSyncActions").convertToSyncActionFromRow);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.getByIndexMacsSingleQuery = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield o("WAWebSyncdDb").getSyncActionsRows(
                  ["indexMac"],
                  e,
                );
                return t.map(
                  o("WAWebSchemaSyncActions").convertToSyncActionFromRow,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.getByActionStates = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield o("WAWebSyncdDb").getSyncActionsRows(
                  ["actionState"],
                  e,
                );
                return t.map(
                  o("WAWebSchemaSyncActions").convertToSyncActionFromRow,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.getByModelInfos = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield o("WAWebSyncdDb").getSyncActionsRows(
                  ["modelId", "modelType", "actionState"],
                  e,
                );
                return t.map(
                  o("WAWebSchemaSyncActions").convertToSyncActionFromRow,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.getAll = function () {
            return o("WAWebSchemaSyncActions")
              .getSyncActionsTable()
              .all()
              .then(function (e) {
                return e.map(
                  o("WAWebSchemaSyncActions").convertToSyncActionFromRow,
                );
              });
          }),
          (r.bulkSet = function (t) {
            return o("WAWebSyncdDb").setSyncActionRows(
              t.map(o("WAWebSchemaSyncActions").convertFromSyncActionToRow),
            );
          }),
          (r.bulkUpdate = function (t) {
            return o("WAWebSyncdDb").updateSyncActionRows(
              t.map(o("WAWebSchemaSyncActions").convertFromSyncActionToRow),
            );
          }),
          (r.bulkRemove = function (t) {
            return o("WAWebSyncdDb").deleteSyncActionRows(t);
          }),
          (r.clear = function () {
            return o("WAWebSchemaSyncActions").getSyncActionsTable().clear();
          }),
          t
        );
      })();
    ((u.locks = ["sync-actions"]), (l.WAWebSyncActionStore = u));
  },
  98,
);
