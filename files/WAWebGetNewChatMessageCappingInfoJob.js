__d(
  "WAWebGetNewChatMessageCappingInfoJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebBackendApi",
    "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebMexFetchNewChatMessageCappingInfoJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebUserPrefsIndexedDBStorage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null;
    function u() {
      if (
        !o(
          "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
        ).isIndividualNewChatMessageCappingEnabled()
      )
        return Promise.resolve();
      var e = s;
      if (e != null) return e;
      var t = c();
      return (
        (s = t),
        t.catch(function () {
          s === t && (s = null);
        }),
        t
      );
    }
    async function c() {
      var e = await d();
      if (e != null) {
        var t,
          n = o(
            "WAWebIndividualNewChatMessageCappingLimitUtils",
          ).getCappingStatusType(e == null ? void 0 : e.capping_status),
          r = e.subscription_status;
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
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
    }
    function d() {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewChatMessageCapping",
          async function () {
            try {
              return await o(
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
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.fetchOrUpdateCapStatus = u;
  },
  98,
);
