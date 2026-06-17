__d(
  "WAWebGetNewsletterEnforcementAlertsJob",
  [
    "Promise",
    "WAJobOrchestratorTypes",
    "WAWebCommonNewsletterEnums",
    "WAWebMexFetchNewsletterEnforcementsJob",
    "WAWebNewsletterEnforcementAlertModelUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaNewsletterMetadata",
    "WAWebSuspendInformDataModelUtils",
    "asyncToGeneratorRuntime",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("requireDeferred")("WAWebEnforcementStatusMsgModelUtils").__setRef(
        "WAWebGetNewsletterEnforcementAlertsJob",
      );
    function u(t) {
      var r = t.locale,
        a = t.newsletterJid,
        i = t.priority,
        l =
          i === void 0 ? o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION : i;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterEnforcementAlerts",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = yield o("WAWebSchemaNewsletterMetadata")
              .getNewsletterMetadataTable()
              .get(a);
            if (t != null) {
              var i = yield o(
                  "WAWebMexFetchNewsletterEnforcementsJob",
                ).mexFetchNewsletterEnforcements(a, r),
                l = m(i),
                u = l.msgIds,
                c = l.statusIds,
                d = yield (e || (e = n("Promise"))).all([
                  o("WAWebSuspendInformDataModelUtils").populateMsgModels(
                    Array.from(u),
                    a,
                  ),
                  s.load().then(function (e) {
                    var t = e.populateStatusMsgModelsForEnforcement;
                    return t(c, a);
                  }),
                ]),
                p = d[0],
                _ = d[1];
              return {
                enforcementData:
                  i != null
                    ? o(
                        "WAWebNewsletterEnforcementAlertModelUtils",
                      ).convertNewsletterBaseEnforcementTypeToNewsletterAlert(
                        i,
                        p,
                        _,
                        a,
                      )
                    : [],
                msgModelMap: p,
              };
            }
          }),
          { priority: l },
        )
        .waitUntilCompleted();
    }
    function c(e) {
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
    function d(e) {
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
    function m(e) {
      if (e == null) return { msgIds: new Set(), statusIds: new Set() };
      var t = e.geoSuspensions,
        n = e.suspensions,
        r = e.violatingMessages,
        o = c(n),
        a = d(r),
        i = c(t);
      return {
        msgIds: new Set([].concat(o.msgIds, a.msgIds, i.msgIds)),
        statusIds: new Set([].concat(a.statusIds, o.statusIds, i.statusIds)),
      };
    }
    l.getNewsletterEnforcementAlerts = u;
  },
  98,
);
