__d(
  "WAWebPersistedJobOdsBridgeApi",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    var e = {
      logPersistedJobJobsStoreTriggered: function (t) {
        var e = t.type;
        e: {
          if (e === "deleteAddOns") {
            r("WAWebODS").incr(
              "web.persisted_job.jobs_store_triggered.deleteAddOns",
            );
            break e;
          }
          if (e === "deleteReactions") {
            r("WAWebODS").incr(
              "web.persisted_job.jobs_store_triggered.deleteReactions",
            );
            break e;
          }
          if (e === "deleteReactionsV2") {
            r("WAWebODS").incr(
              "web.persisted_job.jobs_store_triggered.deleteReactionsV2",
            );
            break e;
          }
          if (e === "dismissQuickPromotion") {
            r("WAWebODS").incr(
              "web.persisted_job.jobs_store_triggered.dismissQuickPromotion",
            );
            break e;
          }
          if (e === "getPublicKey") {
            r("WAWebODS").incr(
              "web.persisted_job.jobs_store_triggered.getPublicKey",
            );
            break e;
          }
          if (e === "getSignedUserInfo") {
            r("WAWebODS").incr(
              "web.persisted_job.jobs_store_triggered.getSignedUserInfo",
            );
            break e;
          }
          if (e === "impressionOnQuickPromotion") {
            r("WAWebODS").incr(
              "web.persisted_job.jobs_store_triggered.impressionOnQuickPromotion",
            );
            break e;
          }
          if (e === "incrementNewsletterForwardCounter") {
            r("WAWebODS").incr(
              "web.persisted_job.jobs_store_triggered.incrementNewsletterForwardCounter",
            );
            break e;
          }
          if (e === "primaryActionClickInQuickPromotion") {
            r("WAWebODS").incr(
              "web.persisted_job.jobs_store_triggered.primaryActionClickInQuickPromotion",
            );
            break e;
          }
          if (e === "queryAndUpdateGroupsMetadataByJids") {
            r("WAWebODS").incr(
              "web.persisted_job.jobs_store_triggered.queryAndUpdateGroupsMetadataByJids",
            );
            break e;
          }
          if (e === "queryProductList") {
            r("WAWebODS").incr(
              "web.persisted_job.jobs_store_triggered.queryProductList",
            );
            break e;
          }
          if (e === "resendGroupMsg") {
            r("WAWebODS").incr(
              "web.persisted_job.jobs_store_triggered.resendGroupMsg",
            );
            break e;
          }
          if (e === "resendUserMsg") {
            r("WAWebODS").incr(
              "web.persisted_job.jobs_store_triggered.resendUserMsg",
            );
            break e;
          }
          if (e === "rotateKey") {
            r("WAWebODS").incr(
              "web.persisted_job.jobs_store_triggered.rotateKey",
            );
            break e;
          }
          if (e === "sendRequestedKeyShare") {
            r("WAWebODS").incr(
              "web.persisted_job.jobs_store_triggered.sendRequestedKeyShare",
            );
            break e;
          }
          if (e === "setAbout") {
            r("WAWebODS").incr(
              "web.persisted_job.jobs_store_triggered.setAbout",
            );
            break e;
          }
          if (e === "setTextStatus") {
            r("WAWebODS").incr(
              "web.persisted_job.jobs_store_triggered.setTextStatus",
            );
            break e;
          }
          if (e === "userExposureToQuickPromotion") {
            r("WAWebODS").incr(
              "web.persisted_job.jobs_store_triggered.userExposureToQuickPromotion",
            );
            break e;
          }
          if (e === "verifyPostcode") {
            r("WAWebODS").incr(
              "web.persisted_job.jobs_store_triggered.verifyPostcode",
            );
            break e;
          }
          {
            r("WAWebODS").incr(
              "web.persisted_job.jobs_store_triggered.unknown",
            );
            break e;
          }
        }
      },
    };
    l.PersistedJobOdsBridgeApi = e;
  },
  98,
);
