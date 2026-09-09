__d(
  "WAWebSyncdMetrics",
  [
    "$InternalEnum",
    "WAWebAppTracker",
    "WAWebCollectionHandlerWamMutation",
    "WAWebCollectionHandlerWamSyncUtil",
    "WAWebMdAppStateKeyRotationWamEvent",
    "WAWebMdCriticalEventWamEvent",
    "WAWebSyncdConst",
    "WAWebSyncdQpl",
    "WAWebWamEnumCollection",
    "WAWebWamEnumMdAppStateKeyRotationReasonCode",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored(["SNAPSHOT_USED", "SNAPSHOT_NOT_USED"]),
      s = n("$InternalEnum").Mirrored([
        "APP_STATE_SYNC_KEY_EXPIRY",
        "DEVICE_DEREGISTERATION",
        "NO_KEYS",
      ]);
    function u(e) {
      o(
        "WAWebCollectionHandlerWamSyncUtil",
      ).commitBootstrapAppStateDownloadMetric({
        collectionName: e.collection,
        downloadSize: e.downloadSize,
        downloadStartTs: e.downloadStartTs,
        failureReason: e.failureReason,
        isSuccess: e.isSuccess,
      });
    }
    function c(e, t, n) {
      o("WAWebCollectionHandlerWamMutation").logMetricsForDataApplied(e, t, n);
    }
    function d(e) {
      return e === o("WAWebSyncdConst").CollectionName.CriticalBlock
        ? o("WAWebWamEnumCollection").COLLECTION.CRITICAL_BLOCK
        : e === o("WAWebSyncdConst").CollectionName.CriticalUnblockLow
          ? o("WAWebWamEnumCollection").COLLECTION.CRITICAL_UNBLOCK_LOW
          : e === o("WAWebSyncdConst").CollectionName.Regular
            ? o("WAWebWamEnumCollection").COLLECTION.REGULAR
            : e === o("WAWebSyncdConst").CollectionName.RegularHigh
              ? o("WAWebWamEnumCollection").COLLECTION.REGULAR_HIGH
              : e === o("WAWebSyncdConst").CollectionName.RegularLow
                ? o("WAWebWamEnumCollection").COLLECTION.REGULAR_LOW
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    function m(e, t, n) {
      var r = new (o("WAWebMdCriticalEventWamEvent").MdCriticalEventWamEvent)({
        mdCriticalEventCode: e,
      });
      (t != null && (r.collection = d(t)),
        n != null && (r.mutationActionName = n),
        r.commit());
    }
    function p(e) {
      new (o(
        "WAWebMdAppStateKeyRotationWamEvent",
      ).MdAppStateKeyRotationWamEvent)({
        mdAppStateKeyRotationReason: _(e),
      }).commit();
    }
    function _(e) {
      return e === s.APP_STATE_SYNC_KEY_EXPIRY
        ? o("WAWebWamEnumMdAppStateKeyRotationReasonCode")
            .MD_APP_STATE_KEY_ROTATION_REASON_CODE.APP_STATE_SYNC_KEY_EXPIRY
        : e === s.DEVICE_DEREGISTERATION
          ? o("WAWebWamEnumMdAppStateKeyRotationReasonCode")
              .MD_APP_STATE_KEY_ROTATION_REASON_CODE.DEVICE_DEREGISTERATION
          : e === s.NO_KEYS
            ? o("WAWebWamEnumMdAppStateKeyRotationReasonCode")
                .MD_APP_STATE_KEY_ROTATION_REASON_CODE.NO_KEYS
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function f(e) {
      var t = {};
      return (
        Object.entries(e).forEach(function (e) {
          var n = e[0],
            r = e[1];
          typeof r == "number"
            ? (t.int == null && (t.int = {}), (t.int[n] = r))
            : typeof r == "string" &&
              (t.string == null && (t.string = {}), (t.string[n] = r));
        }),
        r("isEmptyObject")(t) ? void 0 : t
      );
    }
    var g = (function () {
      function e() {
        ((this.syncdQpl = new (o("WAWebSyncdQpl").SyncdQPL)()),
          this.syncdQpl.start(),
          o("WAWebAppTracker").AppTracker.start(
            o("WAWebAppTracker").AppTrackerType.SyncD,
          ));
      }
      var t = e.prototype;
      return (
        (t.end = function (t) {
          (t === void 0 && (t = !1),
            this.syncdQpl.end(t),
            o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.SyncD,
            ));
        }),
        (t.mark = function (t, n) {
          this.syncdQpl.markAnnotations(t, f(n));
        }),
        e
      );
    })();
    ((l.SyncdBootstrapDataAppliedSnapshotUsed = e),
      (l.SyncdKeyRotationEventType = s),
      (l.reportSyncdBootstrapAppStateDownloadMetric = u),
      (l.reportSyncdBootstrapDataApplied = c),
      (l.collectionNameToMetric = d),
      (l.uploadMdCriticalEventMetric = m),
      (l.reportSyncdKeyRotationEvent = p),
      (l.constructAnnotationsFromContext = f),
      (l.SyncdEventFlow = g));
  },
  98,
);
