__d(
  "WAWebLabelsBridgeApi",
  [
    "JSResourceForInteraction",
    "WAWebBIzLabelReorderAction",
    "WAWebBizLabelUtils",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebLabelCollection",
    "WAWebModelStorageUtils",
    "WAWebSchemaLabel",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      applyLabelAssociationChanges: async function (t) {
        var e = t.additions,
          n = t.removals;
        for (var a of n) {
          var i = a.labelId,
            l = a.parentId,
            s = a.parentType;
          o("WAWebBizLabelUtils").removeLabelFromCollection(l, i, s);
        }
        for (var u of e) {
          var c = u.labels,
            d = u.parentId,
            m = u.parentType;
          o("WAWebBizLabelUtils").addToLabelCollection(d, c, m);
        }
        if (
          e.some(function (e) {
            var t = e.detectedOutcomeSignalEmission;
            return t != null;
          })
        ) {
          var p = await r("JSResourceForInteraction")(
              "WAWebSmbMarkAsXLabelAction",
            )
              .__setRef("WAWebLabelsBridgeApi")
              .load(),
            _ = p.emitDetectedOutcomeSignalsOnReceive;
          for (var f of e) {
            var g = f.detectedOutcomeSignalEmission,
              h = f.parentId;
            g != null && _(h, g);
          }
        }
      },
      reorderLabels: function (t) {
        var e = t.sortedLabelIds;
        o("WAWebBIzLabelReorderAction").reorderLabelsAction(e);
      },
      restoreLabels: function () {
        return o("WAWebSchemaLabel")
          .getLabelTable()
          .all()
          .then(function (e) {
            o("WAWebLabelCollection").LabelCollection.initializeFromCache(e);
          });
      },
      restoreLabelAssociations: async function () {
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
      },
    };
    l.LabelsBridgeApi = e;
  },
  98,
);
