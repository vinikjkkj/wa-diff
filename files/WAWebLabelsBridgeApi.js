__d(
  "WAWebLabelsBridgeApi",
  [
    "WAWebBIzLabelReorderAction",
    "WAWebBizLabelUtils",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebLabelCollection",
    "WAWebListsGatingUtils",
    "WAWebListsLabelGatingUtils",
    "WAWebModelStorageUtils",
    "WAWebSchemaLabel",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
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
        return o("WAWebListsLabelGatingUtils").canDisplayLabel() ||
          o("WAWebListsGatingUtils").isListsEnabled()
          ? o("WAWebSchemaLabel")
              .getLabelTable()
              .all()
              .then(function (e) {
                o("WAWebLabelCollection").LabelCollection.initializeFromCache(
                  e,
                );
              })
          : Promise.resolve();
      },
      restoreLabelAssociations: async function () {
        if (
          o("WAWebListsLabelGatingUtils").canDisplayLabel() ||
          o("WAWebListsGatingUtils").isListsEnabled()
        ) {
          var e = [];
          (await o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["label", "label-association", "chat"], async function (t) {
              var n = t[0],
                r = await n.all(),
                a = r.map(function (e) {
                  return e.id;
                }),
                i = await o(
                  "WAWebDBLabelAssociationDatabaseApi",
                ).queryLabelAssociationsForLabelIds(a);
              e.push.apply(e, i);
            }),
            e.length > 0 &&
              o(
                "WAWebLabelCollection",
              ).LabelCollection.initializeAssociationsFromCache(e));
        }
        return Promise.resolve();
      },
    };
    l.LabelsBridgeApi = e;
  },
  98,
);
