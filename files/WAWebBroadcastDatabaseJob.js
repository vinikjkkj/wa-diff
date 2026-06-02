__d(
  "WAWebBroadcastDatabaseJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebAudienceExpressionTypes",
    "WAWebAudienceResolver",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaBroadcastMetadata",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getBroadcastMetadata",
          async function (e) {
            var t,
              n,
              r,
              a = await o("WAWebSchemaBroadcastMetadata")
                .getBroadcastMetadataTable()
                .get(String(e.broadcastWid));
            if (!a) return null;
            var i = a.audienceExpression,
              l = await o("WAWebAudienceResolver").resolveAudienceExpression(i);
            return {
              audienceExpression: i,
              id: a.id,
              isWebCreatedList: (t = a.isWebCreatedList) != null ? t : !1,
              labels: Array.from(
                o("WAWebAudienceExpressionTypes").getLabelIdsFromExpression(i),
              ),
              recipients: l,
              senderKeyDevices: (n = a.senderKeyDevices) != null ? n : [],
              senderKeyRotate: (r = a.senderKeyRotate) != null ? r : !1,
            };
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted({ broadcastWid: e });
    }
    l.getBroadcastMetadataJob = e;
  },
  98,
);
