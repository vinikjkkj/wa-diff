__d(
  "WAWebSyncdMetrics",
  [
    "$InternalEnum",
    "WALogger",
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
    var e,
      s,
      u = n("$InternalEnum").Mirrored(["SNAPSHOT_USED", "SNAPSHOT_NOT_USED"]),
      c = n("$InternalEnum").Mirrored([
        "APP_STATE_SYNC_KEY_EXPIRY",
        "DEVICE_DEREGISTERATION",
        "NO_KEYS",
      ]);
    function d(e) {
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
    function m(e, t, n) {
      o("WAWebCollectionHandlerWamMutation").logMetricsForDataApplied(e, t, n);
    }
    function p(e) {
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
    function _(e, t, n) {
      var r = new (o("WAWebMdCriticalEventWamEvent").MdCriticalEventWamEvent)({
        mdCriticalEventCode: e,
      });
      (t != null && (r.collection = p(t)),
        n != null && (r.mutationActionName = n),
        r.commit());
    }
    function f(e) {
      new (o(
        "WAWebMdAppStateKeyRotationWamEvent",
      ).MdAppStateKeyRotationWamEvent)({
        mdAppStateKeyRotationReason: g(e),
      }).commit();
    }
    function g(e) {
      return e === c.APP_STATE_SYNC_KEY_EXPIRY
        ? o("WAWebWamEnumMdAppStateKeyRotationReasonCode")
            .MD_APP_STATE_KEY_ROTATION_REASON_CODE.APP_STATE_SYNC_KEY_EXPIRY
        : e === c.DEVICE_DEREGISTERATION
          ? o("WAWebWamEnumMdAppStateKeyRotationReasonCode")
              .MD_APP_STATE_KEY_ROTATION_REASON_CODE.DEVICE_DEREGISTERATION
          : e === c.NO_KEYS
            ? o("WAWebWamEnumMdAppStateKeyRotationReasonCode")
                .MD_APP_STATE_KEY_ROTATION_REASON_CODE.NO_KEYS
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function h(t) {
      var n,
        r =
          t == null || (n = t.string) == null ? void 0 : n.keyRotationEventCode;
      if (r == null)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: missing error code for key rotation event",
              ])),
          ),
          null
        );
      var a = c.cast(r);
      return a == null
        ? (o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: unknown error code: ",
                " for key rotation event",
              ])),
            r,
          ),
          null)
        : { type: a };
    }
    function y(e) {
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
    var C = (function () {
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
          this.syncdQpl.markAnnotations(t, y(n));
        }),
        e
      );
    })();
    ((l.SyncdBootstrapDataAppliedSnapshotUsed = u),
      (l.SyncdKeyRotationEventType = c),
      (l.reportSyncdBootstrapAppStateDownloadMetric = d),
      (l.reportSyncdBootstrapDataApplied = m),
      (l.collectionNameToMetric = p),
      (l.uploadMdCriticalEventMetric = _),
      (l.reportSyncdKeyRotationEvent = f),
      (l.convertSyncdKeyRotationEventFromAnnotations = h),
      (l.constructAnnotationsFromContext = y),
      (l.SyncdEventFlow = C));
  },
  98,
);
