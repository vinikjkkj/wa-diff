__d(
  "WAWebDBLabelAssociationDatabaseApi",
  [
    "WAWebApiContact",
    "WAWebLidMigrationDbUtils",
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
            ? [].concat(yield g(e), e)
            : e;
          yield o("WAWebSchemaLabelAssociation")
            .getLabelAssociationTable()
            .bulkRemove([].concat(t, f(e)));
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
            ? yield y(e)
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
            ? S(t)
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
              ? yield b(e)
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
            ? S(n)
            : n;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
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
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(
              o("WAWebSchemaLabelAssociation").createLabelAssociationPrimaryKey,
            ),
            n = yield g(t);
          return n.map(
            o("WAWebSchemaLabelAssociation")
              .createLabelAssociationRowFromPrimaryKey,
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(function (e) {
              return o(
                "WAWebSchemaLabelAssociation",
              ).createLabelAssociationPrimaryKey({
                associationId: e.associationId,
                type: e.type,
                labelId: "1",
              });
            }),
            n = yield g(t);
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
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        R.apply(this, arguments)
      );
    }
    ((l.removeLabelAssociations = e),
      (l.addOrEditLabelAssociations = u),
      (l.queryLabelAssociationsForLabelIds = d),
      (l.queryLocalLabelAssociations = p));
  },
  98,
);
