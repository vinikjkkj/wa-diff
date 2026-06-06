__d(
  "WAWebBroadcastDatabaseJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebAudienceExpressionTypes",
    "WAWebAudienceResolver",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaBroadcastMetadata",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getBroadcastMetadata",
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n,
                  r,
                  a = yield o("WAWebSchemaBroadcastMetadata")
                    .getBroadcastMetadataTable()
                    .get(String(e.broadcastWid));
                if (!a) return null;
                var i = a.audienceExpression,
                  l = yield o(
                    "WAWebAudienceResolver",
                  ).resolveAudienceExpression(i);
                return {
                  audienceExpression: i,
                  id: a.id,
                  isWebCreatedList: (t = a.isWebCreatedList) != null ? t : !1,
                  labels: Array.from(
                    o("WAWebAudienceExpressionTypes").getLabelIdsFromExpression(
                      i,
                    ),
                  ),
                  recipients: l,
                  senderKeyDevices: (n = a.senderKeyDevices) != null ? n : [],
                  senderKeyRotate: (r = a.senderKeyRotate) != null ? r : !1,
                };
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted({ broadcastWid: e });
    }
    l.getBroadcastMetadataJob = e;
  },
  98,
);
