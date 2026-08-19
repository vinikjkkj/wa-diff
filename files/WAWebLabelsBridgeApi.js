__d(
  "WAWebLabelsBridgeApi",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebBIzLabelReorderAction",
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
                var t = e.aeModelMetadataEmission;
                return t != null;
              })
            ) {
              var p = yield r("JSResourceForInteraction")(
                  "WAWebSmbMarkAsXLabelAction",
                )
                  .__setRef("WAWebLabelsBridgeApi")
                  .load(),
                _ = p.emitAeModelMetadataConversionOnReceive;
              for (var f of t) {
                var g = f.aeModelMetadataEmission,
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
          return o("WAWebListsGatingUtils").isListsEnabled()
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
            if (o("WAWebListsGatingUtils").isListsEnabled()) {
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
