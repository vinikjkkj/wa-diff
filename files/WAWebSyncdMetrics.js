__d(
  "WAWebSyncdMetrics",
  [
    "$InternalEnum",
    "WALogger",
    "WASyncdConst",
    "WAWebAppTracker",
    "WAWebCollectionHandlerWamMutation",
    "WAWebCollectionHandlerWamSyncUtil",
    "WAWebMdAppStateKeyRotationWamEvent",
    "WAWebMdCriticalEventWamEvent",
    "WAWebSyncdQpl",
    "WAWebWamEnumCollection",
    "WAWebWamEnumMdAppStateKeyRotationReasonCode",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = n("$InternalEnum").Mirrored(["MISSING_MUTATION_TO_REMOVE"]),
      m = n("$InternalEnum").Mirrored(["SNAPSHOT_USED", "SNAPSHOT_NOT_USED"]),
      p = n("$InternalEnum").Mirrored([
        "APP_STATE_SYNC_KEY_EXPIRY",
        "DEVICE_DEREGISTERATION",
        "NO_KEYS",
      ]);
    function _(e) {
      o(
        "WAWebCollectionHandlerWamSyncUtil",
      ).commitBootstrapAppStateDownloadMetric(
        e.collection,
        e.downloadStartTs,
        e.downloadSize,
        e.isSuccess,
      );
    }
    function f(e, t, n) {
      o("WAWebCollectionHandlerWamMutation").logMetricsForDataApplied(e, t, n);
    }
    function g(e) {
      return e === o("WASyncdConst").CollectionName.CriticalBlock
        ? o("WAWebWamEnumCollection").COLLECTION.CRITICAL_BLOCK
        : e === o("WASyncdConst").CollectionName.CriticalUnblockLow
          ? o("WAWebWamEnumCollection").COLLECTION.CRITICAL_UNBLOCK_LOW
          : e === o("WASyncdConst").CollectionName.Regular
            ? o("WAWebWamEnumCollection").COLLECTION.REGULAR
            : e === o("WASyncdConst").CollectionName.RegularHigh
              ? o("WAWebWamEnumCollection").COLLECTION.REGULAR_HIGH
              : e === o("WASyncdConst").CollectionName.RegularLow
                ? o("WAWebWamEnumCollection").COLLECTION.REGULAR_LOW
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    function h(e, t, n) {
      var r = new (o("WAWebMdCriticalEventWamEvent").MdCriticalEventWamEvent)({
        mdCriticalEventCode: e,
      });
      (t != null && (r.collection = g(t)),
        n != null && (r.mutationActionName = n),
        r.commit());
    }
    function y(e) {
      new (o(
        "WAWebMdAppStateKeyRotationWamEvent",
      ).MdAppStateKeyRotationWamEvent)({
        mdAppStateKeyRotationReason: C(e),
      }).commit();
    }
    function C(e) {
      return e === p.APP_STATE_SYNC_KEY_EXPIRY
        ? o("WAWebWamEnumMdAppStateKeyRotationReasonCode")
            .MD_APP_STATE_KEY_ROTATION_REASON_CODE.APP_STATE_SYNC_KEY_EXPIRY
        : e === p.DEVICE_DEREGISTERATION
          ? o("WAWebWamEnumMdAppStateKeyRotationReasonCode")
              .MD_APP_STATE_KEY_ROTATION_REASON_CODE.DEVICE_DEREGISTERATION
          : e === p.NO_KEYS
            ? o("WAWebWamEnumMdAppStateKeyRotationReasonCode")
                .MD_APP_STATE_KEY_ROTATION_REASON_CODE.NO_KEYS
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function b(t) {
      var n,
        r,
        a = t == null || (n = t.string) == null ? void 0 : n.criticalEventCode;
      if (a == null)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: missing error code for critical event",
              ])),
          ),
          null
        );
      var i = d.cast(a);
      return i == null
        ? (o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: unknown error code: ",
                " for critical event",
              ])),
            a,
          ),
          null)
        : {
            type: i,
            collection: o("WASyncdConst").CollectionName.cast(
              t == null || (r = t.string) == null ? void 0 : r.collection,
            ),
          };
    }
    function v(e) {
      var t,
        n =
          e == null || (t = e.string) == null ? void 0 : t.keyRotationEventCode;
      if (n == null)
        return (
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: missing error code for key rotation event",
              ])),
          ),
          null
        );
      var r = p.cast(n);
      return r == null
        ? (o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: unknown error code: ",
                " for key rotation event",
              ])),
            n,
          ),
          null)
        : { type: r };
    }
    function S(e) {
      var t = {};
      return (
        Object.keys(e).forEach(function (n) {
          typeof e[n] == "number"
            ? (t.int == null && (t.int = {}), (t.int[n] = e[n]))
            : typeof e[n] == "string" &&
              (t.string == null && (t.string = {}), (t.string[n] = e[n]));
        }),
        r("isEmptyObject")(t) ? void 0 : t
      );
    }
    var R = (function () {
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
          this.syncdQpl.markAnnotations(t, S(n));
        }),
        e
      );
    })();
    ((l.SyncdCriticalEventType = d),
      (l.SyncdBootstrapDataAppliedSnapshotUsed = m),
      (l.SyncdKeyRotationEventType = p),
      (l.reportSyncdBootstrapAppStateDownloadMetric = _),
      (l.reportSyncdBootstrapDataApplied = f),
      (l.collectionNameToMetric = g),
      (l.uploadMdCriticalEventMetric = h),
      (l.reportSyncdKeyRotationEvent = y),
      (l.convertSyncdCriticalEventFromAnnotations = b),
      (l.convertSyncdKeyRotationEventFromAnnotations = v),
      (l.constructAnnotationsFromContext = S),
      (l.SyncdEventFlow = R));
  },
  98,
);
