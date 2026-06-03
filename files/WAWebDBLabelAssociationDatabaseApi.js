__d(
  "WAWebDBLabelAssociationDatabaseApi",
  [
    "WAWebLidMigrationDbUtils",
    "WAWebSchemaLabelAssociation",
    "WAWebUserPrefsLabelAssociationsLidMigration",
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
            ? [].concat(yield f(e), e)
            : e;
          yield o("WAWebSchemaLabelAssociation")
            .getLabelAssociationTable()
            .bulkRemove(t);
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
          var t = o(
            "WAWebUserPrefsLabelAssociationsLidMigration",
          ).isLabelAssociationsMigrationComplete()
            ? yield h(e)
            : e;
          yield o("WAWebSchemaLabelAssociation")
            .getLabelAssociationTable()
            .bulkCreateOrReplace(t);
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
          var t = yield o("WAWebSchemaLabelAssociation")
            .getLabelAssociationTable()
            .anyOf(["labelId"], e);
          return o(
            "WAWebUserPrefsLabelAssociationsLidMigration",
          ).isLabelAssociationsMigrationComplete()
            ? v(t)
            : t;
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
              "WAWebUserPrefsLabelAssociationsLidMigration",
            ).isLabelAssociationsMigrationComplete()
              ? yield C(e)
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
            ? v(n)
            : n;
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
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(
              o("WAWebSchemaLabelAssociation").createLabelAssociationPrimaryKey,
            ),
            n = yield f(t);
          return n.map(
            o("WAWebSchemaLabelAssociation")
              .createLabelAssociationRowFromPrimaryKey,
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(function (e) {
              return o(
                "WAWebSchemaLabelAssociation",
              ).createLabelAssociationPrimaryKey({
                associationId: e.associationId,
                type: e.type,
                labelId: "1",
              });
            }),
            n = yield f(t);
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
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        S.apply(this, arguments)
      );
    }
    ((l.removeLabelAssociations = e),
      (l.addOrEditLabelAssociations = u),
      (l.queryLabelAssociationsForLabelIds = d),
      (l.queryLocalLabelAssociations = p));
  },
  98,
);
