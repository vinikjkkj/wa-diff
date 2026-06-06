__d(
  "WAWebDBLabelAssociationDatabaseApi",
  [
    "WAWebLidMigrationDbUtils",
    "WAWebSchemaLabelAssociation",
    "WAWebUserPrefsLabelAssociationsLidMigration",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o(
        "WAWebUserPrefsLabelAssociationsLidMigration",
      ).isLabelAssociationsMigrationComplete()
        ? [].concat(await d(e), e)
        : e;
      await o("WAWebSchemaLabelAssociation")
        .getLabelAssociationTable()
        .bulkRemove(t);
    }
    async function s(e) {
      var t = o(
        "WAWebUserPrefsLabelAssociationsLidMigration",
      ).isLabelAssociationsMigrationComplete()
        ? await m(e)
        : e;
      await o("WAWebSchemaLabelAssociation")
        .getLabelAssociationTable()
        .bulkCreateOrReplace(t);
    }
    async function u(e) {
      var t = await o("WAWebSchemaLabelAssociation")
        .getLabelAssociationTable()
        .anyOf(["labelId"], e);
      return o(
        "WAWebUserPrefsLabelAssociationsLidMigration",
      ).isLabelAssociationsMigrationComplete()
        ? _(t)
        : t;
    }
    async function c(e) {
      var t = o(
          "WAWebUserPrefsLabelAssociationsLidMigration",
        ).isLabelAssociationsMigrationComplete()
          ? await p(e)
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
        ? _(n)
        : n;
    }
    async function d(e) {
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
    async function m(e) {
      var t = e.map(
          o("WAWebSchemaLabelAssociation").createLabelAssociationPrimaryKey,
        ),
        n = await d(t);
      return n.map(
        o("WAWebSchemaLabelAssociation")
          .createLabelAssociationRowFromPrimaryKey,
      );
    }
    async function p(e) {
      var t = e.map(function (e) {
          return o(
            "WAWebSchemaLabelAssociation",
          ).createLabelAssociationPrimaryKey({
            associationId: e.associationId,
            type: e.type,
            labelId: "1",
          });
        }),
        n = await d(t);
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
    async function _(e) {
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
      (l.queryLabelAssociationsForLabelIds = u),
      (l.queryLocalLabelAssociations = c));
  },
  98,
);
