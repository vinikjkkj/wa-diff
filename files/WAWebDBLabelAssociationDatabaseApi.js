__d(
  "WAWebDBLabelAssociationDatabaseApi",
  [
    "WAWebApiContact",
    "WAWebLidMigrationDbUtils",
    "WAWebModelStorageUtils",
    "WAWebSchemaLabelAssociation",
    "WAWebUserPrefsLabelAssociationsLidMigration",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebUserPrefsLabelAssociationsLidMigration",
          ).isLabelAssociationsMigrationComplete()
            ? [].concat(yield R(e), e)
            : e;
          yield o("WAWebSchemaLabelAssociation")
            .getLabelAssociationTable()
            .bulkRemove([].concat(t, S(e)));
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebSchemaLabelAssociation")
            .getLabelAssociationTable()
            .bulkCreateOrReplace(yield b(e));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield b(e);
          t.length !== 0 &&
            (yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["label-association"],
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var n = e[0],
                        r = n,
                        a = yield r.bulkGet(
                          t.map(
                            o("WAWebSchemaLabelAssociation")
                              .createLabelAssociationPrimaryKey,
                          ),
                        ),
                        i = new Map();
                      (a.forEach(function (e) {
                        e != null && i.set(C(e), e);
                      }),
                        yield r.bulkCreateOrReplace(
                          t.map(function (e) {
                            var t;
                            return babelHelpers.extends(
                              {},
                              (t = i.get(C(e))) != null ? t : {},
                              e,
                            );
                          }),
                        ));
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o(
              "WAWebSchemaLabelAssociation",
            ).createLabelAssociationPrimaryKey({
              associationId: t,
              labelId: e,
              type: o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid,
            }),
            r = o(
              "WAWebUserPrefsLabelAssociationsLidMigration",
            ).isLabelAssociationsMigrationComplete()
              ? yield R([n])
              : [n],
            a = r[0];
          yield o("WAWebSchemaLabelAssociation")
            .getLabelAssociationTable()
            .merge(a, { pendingImportLeadStage: null });
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaLabelAssociation")
            .getLabelAssociationTable()
            .anyOf(["labelId"], e);
          return o(
            "WAWebUserPrefsLabelAssociationsLidMigration",
          ).isLabelAssociationsMigrationComplete()
            ? D(t)
            : t;
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
              "WAWebUserPrefsLabelAssociationsLidMigration",
            ).isLabelAssociationsMigrationComplete()
              ? yield I(e)
              : e,
            n = yield o("WAWebSchemaLabelAssociation")
              .getLabelAssociationTable()
              .anyOf(
                ["associationId", "type"],
                t.map(function (e) {
                  var t = e.associationId,
                    n = e.type;
                  return [t, n];
                }),
              );
          return o(
            "WAWebUserPrefsLabelAssociationsLidMigration",
          ).isLabelAssociationsMigrationComplete()
            ? D(n)
            : n;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return [e.labelId, e.associationId, e.type].join("\0");
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o(
            "WAWebUserPrefsLabelAssociationsLidMigration",
          ).isLabelAssociationsMigrationComplete()
            ? E(e)
            : e;
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      var t = [];
      for (var n of e)
        if (
          o("WAWebSchemaLabelAssociation").getAssociationTypeFromPrimaryKey(
            n,
          ) === o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
        ) {
          var r = o("WAWebWidFactory").createWid(
            o("WAWebSchemaLabelAssociation").getAssociationIdFromPrimaryKey(n),
          );
          if (!(!r.isRegularUser() || !r.isLid())) {
            var a = o("WAWebApiContact").getPnIfLidIsLatestMapping(
              o("WAWebWidFactory").asUserLidOrThrow(r),
            );
            a != null &&
              t.push(
                o(
                  "WAWebSchemaLabelAssociation",
                ).replaceAssociationIdInPrimaryKey(n, a.toString()),
              );
          }
        }
      return t;
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Set(
              e
                .filter(function (e) {
                  return (
                    o(
                      "WAWebSchemaLabelAssociation",
                    ).getAssociationTypeFromPrimaryKey(e) ===
                    o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
                  );
                })
                .map(
                  o("WAWebSchemaLabelAssociation")
                    .getAssociationIdFromPrimaryKey,
                ),
            ),
            n = yield o("WAWebLidMigrationDbUtils").findAccountLidsForPnChatIds(
              Array.from(t),
            );
          return e.map(function (e) {
            var t = n.get(
              o("WAWebSchemaLabelAssociation").getAssociationIdFromPrimaryKey(
                e,
              ),
            );
            return t == null
              ? e
              : o(
                  "WAWebSchemaLabelAssociation",
                ).replaceAssociationIdInPrimaryKey(e, t);
          });
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(
              o("WAWebSchemaLabelAssociation").createLabelAssociationPrimaryKey,
            ),
            n = yield R(t);
          return n.map(function (t, n) {
            return babelHelpers.extends({}, e[n], {
              associationId: o(
                "WAWebSchemaLabelAssociation",
              ).getAssociationIdFromPrimaryKey(t),
            });
          });
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(function (e) {
              return o(
                "WAWebSchemaLabelAssociation",
              ).createLabelAssociationPrimaryKey({
                associationId: e.associationId,
                type: e.type,
                labelId: "1",
              });
            }),
            n = yield R(t);
          return n.map(function (e) {
            return {
              associationId: o(
                "WAWebSchemaLabelAssociation",
              ).getAssociationIdFromPrimaryKey(e),
              type: o(
                "WAWebSchemaLabelAssociation",
              ).getAssociationTypeFromPrimaryKey(e),
            };
          });
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Set(
              e
                .filter(function (e) {
                  return (
                    e.type ===
                    o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
                  );
                })
                .map(function (e) {
                  return e.associationId;
                }),
            ),
            n = yield o("WAWebLidMigrationDbUtils").findChatIdsForAccountLids(
              Array.from(t),
            );
          return e.map(function (e) {
            var t;
            return babelHelpers.extends({}, e, {
              associationId:
                (t = n.get(e.associationId)) != null ? t : e.associationId,
            });
          });
        })),
        x.apply(this, arguments)
      );
    }
    ((l.removeLabelAssociations = e),
      (l.addOrEditLabelAssociations = u),
      (l.mergeReceivedLabelAssociations = d),
      (l.clearPendingImportLeadStage = p),
      (l.queryLabelAssociationsForLabelIds = f),
      (l.queryLocalLabelAssociations = h));
  },
  98,
);
