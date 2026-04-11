__d(
  "WAWebLabelsBridgeApi",
  [
    "Promise",
    "WAWebBIzLabelReorderAction",
    "WAWebBizGatingUtils",
    "WAWebBizLabelUtils",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebLabelCollection",
    "WAWebListsGatingUtils",
    "WAWebModelStorageUtils",
    "WAWebSchemaLabel",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        applyLabelAssociationChanges: function (t) {
          var e = t.additions,
            n = t.removals;
          for (var r of n) {
            var a = r.labelId,
              i = r.parentId,
              l = r.parentType;
            o("WAWebBizLabelUtils").removeLabelFromCollection(i, a, l);
          }
          for (var s of e) {
            var u = s.labels,
              c = s.parentId,
              d = s.parentType;
            o("WAWebBizLabelUtils").addToLabelCollection(c, u, d);
          }
        },
        reorderLabels: function (t) {
          var e = t.sortedLabelIds;
          o("WAWebBIzLabelReorderAction").reorderLabelsAction(e);
        },
        restoreLabels: function () {
          return o("WAWebBizGatingUtils").canDisplayLabel() ||
            o("WAWebListsGatingUtils").isListsEnabled()
            ? o("WAWebSchemaLabel")
                .getLabelTable()
                .all()
                .then(function (e) {
                  o("WAWebLabelCollection").LabelCollection.initializeFromCache(
                    e,
                  );
                })
            : (e || (e = n("Promise"))).resolve();
        },
        restoreLabelAssociations: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (
              o("WAWebBizGatingUtils").canDisplayLabel() ||
              o("WAWebListsGatingUtils").isListsEnabled()
            ) {
              var t = [];
              (yield o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  ["label", "label-association", "chat"],
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var n = e[0],
                          r = yield n.all(),
                          a = r.map(function (e) {
                            return e.id;
                          }),
                          i = yield o(
                            "WAWebDBLabelAssociationDatabaseApi",
                          ).queryLabelAssociationsForLabelIds(a);
                        t.push.apply(t, i);
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
                t.length > 0 &&
                  o(
                    "WAWebLabelCollection",
                  ).LabelCollection.initializeAssociationsFromCache(t));
            }
            return (e || (e = n("Promise"))).resolve();
          });
          function r() {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      };
    l.LabelsBridgeApi = s;
  },
  98,
);
