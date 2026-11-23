__d(
  "WAWebDBLabelAssociationDatabaseApi",
  [
    "WAWebApiContact",
    "WAWebLidMigrationDbUtils",
    "WAWebModelStorageUtils",
    "WAWebSchemaLabelAssociation",
    "WAWebUserPrefsLabelAssociationsLidMigration",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o(
        "WAWebUserPrefsLabelAssociationsLidMigration",
      ).isLabelAssociationsMigrationComplete()
        ? [].concat(await g(e), e)
        : e;
      await o("WAWebSchemaLabelAssociation")
        .getLabelAssociationTable()
        .bulkRemove([].concat(t, f(e)));
    }
    async function s(e) {
      await o("WAWebSchemaLabelAssociation")
        .getLabelAssociationTable()
        .bulkCreateOrReplace(await _(e));
    }
    async function u(e) {
      var t = await _(e);
      t.length !== 0 &&
        (await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["label-association"], async function (e) {
            var n = e[0],
              r = n,
              a = await r.bulkGet(
                t.map(
                  o("WAWebSchemaLabelAssociation")
                    .createLabelAssociationPrimaryKey,
                ),
              ),
              i = new Map();
            (a.forEach(function (e) {
              e != null && i.set(p(e), e);
            }),
              await r.bulkCreateOrReplace(
                t.map(function (e) {
                  var t;
                  return babelHelpers.extends(
                    {},
                    (t = i.get(p(e))) != null ? t : {},
                    e,
                  );
                }),
              ));
          }));
    }
    async function c(e, t) {
      var n = o("WAWebSchemaLabelAssociation").createLabelAssociationPrimaryKey(
          {
            associationId: t,
            labelId: e,
            type: o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid,
          },
        ),
        r = o(
          "WAWebUserPrefsLabelAssociationsLidMigration",
        ).isLabelAssociationsMigrationComplete()
          ? await g([n])
          : [n],
        a = r[0];
      await o("WAWebSchemaLabelAssociation")
        .getLabelAssociationTable()
        .merge(a, { pendingImportLeadStage: null });
    }
    async function d(e) {
      var t = await o("WAWebSchemaLabelAssociation")
        .getLabelAssociationTable()
        .anyOf(["labelId"], e);
      return o(
        "WAWebUserPrefsLabelAssociationsLidMigration",
      ).isLabelAssociationsMigrationComplete()
        ? C(t)
        : t;
    }
    async function m(e) {
      var t = o(
          "WAWebUserPrefsLabelAssociationsLidMigration",
        ).isLabelAssociationsMigrationComplete()
          ? await y(e)
          : e,
        n = await o("WAWebSchemaLabelAssociation")
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
        ? C(n)
        : n;
    }
    function p(e) {
      return [e.labelId, e.associationId, e.type].join("\0");
    }
    async function _(e) {
      return o(
        "WAWebUserPrefsLabelAssociationsLidMigration",
      ).isLabelAssociationsMigrationComplete()
        ? h(e)
        : e;
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
    async function g(e) {
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
              o("WAWebSchemaLabelAssociation").getAssociationIdFromPrimaryKey,
            ),
        ),
        n = await o("WAWebLidMigrationDbUtils").findAccountLidsForPnChatIds(
          Array.from(t),
        );
      return e.map(function (e) {
        var t = n.get(
          o("WAWebSchemaLabelAssociation").getAssociationIdFromPrimaryKey(e),
        );
        return t == null
          ? e
          : o("WAWebSchemaLabelAssociation").replaceAssociationIdInPrimaryKey(
              e,
              t,
            );
      });
    }
    async function h(e) {
      var t = e.map(
          o("WAWebSchemaLabelAssociation").createLabelAssociationPrimaryKey,
        ),
        n = await g(t);
      return n.map(function (t, n) {
        return babelHelpers.extends({}, e[n], {
          associationId: o(
            "WAWebSchemaLabelAssociation",
          ).getAssociationIdFromPrimaryKey(t),
        });
      });
    }
    async function y(e) {
      var t = e.map(function (e) {
          return o(
            "WAWebSchemaLabelAssociation",
          ).createLabelAssociationPrimaryKey({
            associationId: e.associationId,
            type: e.type,
            labelId: "1",
          });
        }),
        n = await g(t);
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
    }
    async function C(e) {
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
        n = await o("WAWebLidMigrationDbUtils").findChatIdsForAccountLids(
          Array.from(t),
        );
      return e.map(function (e) {
        var t;
        return babelHelpers.extends({}, e, {
          associationId:
            (t = n.get(e.associationId)) != null ? t : e.associationId,
        });
      });
    }
    ((l.removeLabelAssociations = e),
      (l.addOrEditLabelAssociations = s),
      (l.mergeReceivedLabelAssociations = u),
      (l.clearPendingImportLeadStage = c),
      (l.queryLabelAssociationsForLabelIds = d),
      (l.queryLocalLabelAssociations = m));
  },
  98,
);
