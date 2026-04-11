__d(
  "WAWebSchemaBroadcastMetadata",
  [
    "WAWebAudienceExpressionTypes",
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addUserDefinedPrimaryKey;
      e.add("broadcast-metadata")
        .version(
          o("WAWebModelStorageVersions").broadcastMetadataCreateTable(),
          [
            r("id"),
            n("audienceExpression"),
            n("recipients"),
            n("labels"),
            n("senderKeyDevices"),
            n("senderKeyRotate"),
            n("isWebCreatedList"),
          ],
        )
        .view(function (e) {
          if (e.audienceExpression != null) return e;
          var t;
          return (
            e.labels.length > 0
              ? (t = o(
                  "WAWebAudienceExpressionTypes",
                ).createLabelPredicateExpression(e.labels))
              : e.recipients.length > 0
                ? (t = o(
                    "WAWebAudienceExpressionTypes",
                  ).createExplicitExpression(e.recipients))
                : (t = o(
                    "WAWebAudienceExpressionTypes",
                  ).DEFAULT_AUDIENCE_EXPRESSION),
            babelHelpers.extends({}, e, { audienceExpression: t })
          );
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("broadcast-metadata");
    }
    ((l.addTable = e), (l.getBroadcastMetadataTable = s));
  },
  98,
);
