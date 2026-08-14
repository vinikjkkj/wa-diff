__d(
  "WAWebGetNewChatMessageCappingInfoJob",
  [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebBackendApi",
    "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebMexFetchNewChatMessageCappingInfoJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebUserPrefsIndexedDBStorage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = null;
    function c() {
      if (
        !o(
          "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
        ).isIndividualNewChatMessageCappingEnabled()
      )
        return (s || (s = n("Promise"))).resolve();
      var e = u;
      if (e != null) return e;
      var t = m();
      return (
        (u = t),
        t.catch(function () {
          u === t && (u = null);
        }),
        t
      );
    }
    function d() {
      u = null;
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield _();
          if (e != null) {
            var t,
              n = o(
                "WAWebIndividualNewChatMessageCappingLimitUtils",
              ).getCappingStatusType(e == null ? void 0 : e.capping_status),
              r = e.subscription_status;
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              o("WAWebIndividualNewChatMessageCappingLimitUtils")
                .NEW_CHAT_MESSAGE_CAPPING_IDB_KEY,
              {
                capping_status: n,
                ote_status: o(
                  "WAWebIndividualNewChatMessageCappingLimitUtils",
                ).getCappingOTEStatusType(e == null ? void 0 : e.ote_status),
                mv_status: o(
                  "WAWebIndividualNewChatMessageCappingLimitUtils",
                ).getCappingMVStatusType(e == null ? void 0 : e.mv_status),
                subscription_status:
                  r == null
                    ? void 0
                    : {
                        status: o(
                          "WAWebIndividualNewChatMessageCappingLimitUtils",
                        ).getCappingSubscriptionStatusType(r.status),
                        name: o(
                          "WAWebIndividualNewChatMessageCappingLimitUtils",
                        ).getCappingSubscriptionName(r.name),
                      },
                total_quota: e == null ? void 0 : e.total_quota,
                used_quota: Math.min(
                  Number(e == null ? void 0 : e.used_quota),
                  Number(e == null ? void 0 : e.total_quota),
                ),
                cycle_end_timestamp: Number(
                  e == null ? void 0 : e.cycle_end_timestamp,
                ),
                cycle_start_timestamp: Number(
                  e == null ? void 0 : e.cycle_start_timestamp,
                ),
                server_sent_timestamp: Number(
                  (t = e == null ? void 0 : e.server_sent_timestamp) != null
                    ? t
                    : "0",
                ),
              },
            );
          }
          o("WAWebBackendApi").frontendFireAndForget(
            "individualNewChatMessageCappingStateChange",
            {},
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewChatMessageCapping",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              return yield o(
                "WAWebMexFetchNewChatMessageCappingInfoJob",
              ).mexFetchNewChatMessageCapping();
            } catch (t) {
              throw (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[MEX][wa_biz_tools][CAP] getNewChatMessageCapping err",
                      ])),
                  )
                  .tags("GQL", "MEX", "wa-ice", "RET"),
                t
              );
            }
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    ((l.fetchOrUpdateCapStatus = c), (l.resetCapStatusFetchForTesting = d));
  },
  98,
);
