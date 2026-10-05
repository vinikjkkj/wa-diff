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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      applyLabelAssociationChanges: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.additions,
            n = e.removals;
          for (var a of n) {
            var i = a.labelId,
              l = a.parentId,
              s = a.parentType;
            o("WAWebBizLabelUtils").removeLabelFromCollection(l, i, s);
          }
          for (var u of t) {
            var c = u.labels,
              d = u.parentId,
              m = u.parentType;
            o("WAWebBizLabelUtils").addToLabelCollection(d, c, m);
          }
          if (
            t.some(function (e) {
              var t = e.detectedOutcomeSignalEmission;
              return t != null;
            })
          ) {
            var p = yield r("JSResourceForInteraction")(
                "WAWebSmbMarkAsXLabelAction",
              )
                .__setRef("WAWebLabelsBridgeApi")
                .load(),
              _ = p.emitDetectedOutcomeSignalsOnReceive;
            for (var f of t) {
              var g = f.detectedOutcomeSignalEmission,
                h = f.parentId;
              g != null && _(h, g);
            }
          }
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
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
      restoreLabelAssociations: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = [];
          (yield o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["label", "label-association", "chat"],
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n = t[0],
                      r = yield n.all(),
                      a = r.map(function (e) {
                        return e.id;
                      }),
                      i = yield o(
                        "WAWebDBLabelAssociationDatabaseApi",
                      ).queryLabelAssociationsForLabelIds(a);
                    e.push.apply(e, i);
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
            e.length > 0 &&
              o(
                "WAWebLabelCollection",
              ).LabelCollection.initializeAssociationsFromCache(e));
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
    };
    l.LabelsBridgeApi = e;
  },
  98,
);
