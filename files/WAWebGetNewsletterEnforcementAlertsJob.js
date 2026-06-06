__d(
  "WAWebGetNewsletterEnforcementAlertsJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebCommonNewsletterEnums",
    "WAWebMexFetchNewsletterEnforcementsJob",
    "WAWebNewsletterEnforcementAlertModelUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaNewsletterMetadata",
    "WAWebSuspendInformDataModelUtils",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("requireDeferred")(
      "WAWebEnforcementStatusMsgModelUtils",
    ).__setRef("WAWebGetNewsletterEnforcementAlertsJob");
    function s(t, n, r) {
      return (
        r === void 0 &&
          (r = o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION),
        o("WAWebOrchestratorNonPersistedJob")
          .createNonPersistedJob(
            "getNewsletterEnforcementAlerts",
            async function () {
              var r = await o("WAWebSchemaNewsletterMetadata")
                .getNewsletterMetadataTable()
                .get(t);
              if (r != null) {
                var a = await o(
                    "WAWebMexFetchNewsletterEnforcementsJob",
                  ).mexFetchNewsletterEnforcements(t, n),
                  i = d(a),
                  l = i.msgIds,
                  s = i.statusIds,
                  u = await Promise.all([
                    o("WAWebSuspendInformDataModelUtils").populateMsgModels(
                      Array.from(l),
                      t,
                    ),
                    e.load().then(function (e) {
                      var n = e.populateStatusMsgModelsForEnforcement;
                      return n(s, t);
                    }),
                  ]),
                  c = u[0],
                  m = u[1];
                return {
                  enforcementData:
                    a != null
                      ? o(
                          "WAWebNewsletterEnforcementAlertModelUtils",
                        ).convertNewsletterBaseEnforcementTypeToNewsletterAlert(
                          a,
                          c,
                          m,
                          t,
                        )
                      : [],
                  msgModelMap: c,
                };
              }
            },
            { priority: r },
          )
          .waitUntilCompleted()
      );
    }
    function u(e) {
      var t = [],
        n = [];
      return (
        e == null ||
          e.forEach(function (e) {
            var r,
              a =
                (r = e.enforcementExtraData) == null
                  ? void 0
                  : r.enforcementTargetData;
            a != null &&
              (a.contentType ===
              o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS
                ? n.push(a.serverId)
                : t.push(a.serverId));
          }),
        { msgIds: t, statusIds: n }
      );
    }
    function c(e) {
      var t = [],
        n = [];
      return (
        e == null ||
          e.forEach(function (e) {
            var r = e.violatingContentData;
            r.contentType ===
            o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS
              ? n.push(r.serverId)
              : t.push(r.serverId);
          }),
        { msgIds: t, statusIds: n }
      );
    }
    function d(e) {
      if (e == null) return { msgIds: new Set(), statusIds: new Set() };
      var t = e.geoSuspensions,
        n = e.suspensions,
        r = e.violatingMessages,
        o = u(n),
        a = c(r),
        i = u(t);
      return {
        msgIds: new Set([].concat(o.msgIds, a.msgIds, i.msgIds)),
        statusIds: new Set([].concat(a.statusIds, o.statusIds, i.statusIds)),
      };
    }
    l.getNewsletterEnforcementAlerts = s;
  },
  98,
);
