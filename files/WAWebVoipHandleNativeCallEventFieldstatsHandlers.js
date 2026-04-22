__d(
  "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAWebBackendApi",
    "WAWebBrowserApi",
    "WAWebCallWamEvent",
    "WAWebJoinableCallWamEvent",
    "WAWebPonyfillsIdleCallback",
    "WAWebVoipBatteryDiagnostics",
    "WAWebVoipBrowserMetrics",
    "WAWebVoipCallRatingStore",
    "WAWebVoipDeviceClassUtils",
    "WAWebVoipFocusTracker",
    "WAWebVoipJsonParserPayloads",
    "WAWebVoipPersistentFS",
    "WAWebVoipStackInterface",
    "WAWebVoipWindowMetrics",
    "WAWebWamEnumFieldStatsRowType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isEmptyObject",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g, h, y;
    function C(e) {
      var t = o("WAWebBrowserApi").getNumCpu(),
        n = o("WAWebBrowserApi").getMemClass(),
        r = n != null ? Math.round(n / 1e3) : null,
        a = o("WAWebVoipDeviceClassUtils").computeDeviceClass(t, r),
        i = babelHelpers.extends({}, e);
      (t != null && (i.numCpuCores = t),
        r != null && (i.totalMemoryGb = r),
        a != null && (i.deviceClass = a));
      var l = o("WAWebVoipFocusTracker").snapshotFocusStats();
      l != null && (i = babelHelpers.extends({}, i, l));
      var s = o("WAWebVoipBrowserMetrics").snapshotBrowserMetrics();
      s != null && (i = babelHelpers.extends({}, i, s));
      var u = o("WAWebVoipWindowMetrics").snapshotWindowMetrics();
      u != null && (i = babelHelpers.extends({}, i, u));
      var c = o("WAWebVoipBatteryDiagnostics").snapshotBatteryDiagnostics();
      return (c != null && (i = babelHelpers.extends({}, i, c)), i);
    }
    function b() {
      (o("WAWebVoipFocusTracker").resetFocusStats(),
        o("WAWebVoipBrowserMetrics").resetBrowserMetrics(),
        o("WAWebVoipWindowMetrics").resetWindowMetrics(),
        o("WAWebVoipBatteryDiagnostics").resetBatteryDiagnostics());
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WAWebVoipCallRatingStore").setPendingFieldstatsJsonStr(e);
          var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if (t == null || t.type !== "web") {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] voipStackInterface unavailable, dropping event",
                ])),
            );
            return;
          }
          var n = t.parsers.parseFieldstatsData(e),
            r = n.stats.groupCallSegmentIdx,
            a = n.stats.fieldStatsRowType,
            i = n.isLastFieldStatsReport;
          if (i) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] last segment stored for rating",
                ])),
            );
            return;
          }
          yield o("WAPromiseDelays").releaseToEventLoop();
          var l =
              a ===
                o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF ||
              a ===
                o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH,
            s = l ? C(n.stats) : babelHelpers.extends({}, n.stats);
          l && b();
          var d =
            n.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
              ? new (o("WAWebCallWamEvent").CallWamEvent)(s)
              : R(s);
          d.commit();
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      var t = new (o("WAWebJoinableCallWamEvent").JoinableCallWamEvent)();
      return (t.set(e), t);
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebVoipCallRatingStore",
          ).consumePendingFieldstatsJsonStr();
          if (t == null) {
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: No pending fieldstats to send",
                ])),
            );
            return;
          }
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Sending stored fieldstats with rating: ",
                "",
              ])),
            e != null ? e : "none",
          );
          var n = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (n.type === "web") {
            var a = n.parsers.parseFieldstatsData(t),
              i = babelHelpers.extends({}, a.stats);
            if (
              e != null &&
              a.eventType ===
                o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
            ) {
              var l = i.call_ended_stats;
              l != null && typeof l == "object"
                ? (i.call_ended_stats = babelHelpers.extends({}, l, {
                    userRating: e,
                  }))
                : (i.userRating = e);
            }
            var s = C(i),
              u = o("WAWebVoipBatteryDiagnostics").getBatteryLevelAtCallStart();
            if (u != null) {
              var c = s.browserBatteryLevelEndPct;
              ((s.callStartBatteryPct = u),
                (s.callEndBatteryPct = c),
                typeof c == "number" && (s.callBatteryChangePct = c - u));
            }
            (o("WAWebVoipFocusTracker").stopVoipFocusTracking(),
              yield o("WAWebVoipBrowserMetrics").stopBrowserMetrics(),
              o("WAWebVoipWindowMetrics").stopWindowMetrics(),
              yield o("WAWebVoipBatteryDiagnostics").stopBatteryDiagnostics());
            var y = yield o("WAWebBackendApi").frontendSendAndReceive(
              "consumeAVSyncMetrics",
            );
            y != null && (s = babelHelpers.extends({}, s, y));
            var b =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeAnrCount",
              );
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ANR count for this call: ",
                  "",
                ])),
              b != null ? b : 0,
            );
            var v = null,
              S = null,
              L = null,
              E = null,
              k = null;
            if (b != null && b > 0) {
              var I = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeActivityData",
              );
              I != null &&
                ((v = I.lastVoipActivity),
                (S = I.lastVoipActivityTimestampSec),
                (L = I.timeFirstAnrSinceCallStartSec),
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR data act=",
                      " actT=",
                      "s firstAnrT=",
                      "s",
                    ])),
                  v != null ? v : "none",
                  S != null ? S : "none",
                  L != null ? L : "none",
                ));
              var T = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeUiActivityData",
              );
              T != null &&
                ((E = T.lastVoipUiActivity),
                (k = T.lastVoipUiActivityTimestampSec),
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR uiAct=",
                      " uiActT=",
                      "s",
                    ])),
                  E != null ? E : "none",
                  k != null ? k : "none",
                ));
            } else
              o("WAWebBackendApi").frontendFireAndForget(
                "clearAllActivityTracking",
                {},
              );
            var D;
            if (
              a.eventType ===
              o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
            ) {
              var x = new (o("WAWebCallWamEvent").CallWamEvent)(s),
                $ = {};
              (b != null && ($.numAnrs = b),
                v != null && ($.lastVoipActivity = v),
                S != null && ($.lastVoipActivityTimestampSec = S),
                L != null && ($.timeFirstAnrSinceCallStartSec = L),
                E != null && ($.lastVoipUiActivity = E),
                k != null && ($.lastVoipUiActivityTimestampSec = k),
                r("isEmptyObject")($) ||
                  (x.set($),
                  o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: ANR fields set n=",
                        " act=",
                        " actT=",
                        "s firstT=",
                        " uiAct=",
                        " uiActT=",
                        "s",
                      ])),
                    b != null ? b : "null",
                    v != null ? v : "null",
                    S != null ? S : "null",
                    L != null ? L : "null",
                    E != null ? E : "null",
                    k != null ? k : "null",
                  )),
                (D = x));
            } else D = R(s);
            (a.uploadInRealtime ? yield D.commitAndWaitForFlush() : D.commit(),
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Fieldstats sent successfully with user rating: ",
                    "",
                  ])),
                e != null ? e : "none",
              ));
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "initializeVoipWasm",
              );
            e.cleanupUnfinishedCallStats();
          } catch (e) {
            o("WALogger")
              .ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Failed to cleanup fieldstats after normal call end",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
        var t = Date.now();
        o("WAWebBackendApi")
          .frontendSendAndReceive("initializeVoipWasm")
          .then(function (e) {
            return o("WAWebVoipPersistentFS").syncPersistentFS(e);
          })
          .then(function () {
            var n = Date.now() - t;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [IDBFS] Successfully synced filesystem in ",
                  "ms",
                ])),
              n,
            );
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [IDBFS] Failed to sync filesystem",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          });
      });
    }
    ((l.handleFieldstatsReady = v),
      (l.sendStoredFieldstats = L),
      (l.cleanupFieldstatsAfterNormalEnd = k),
      (l.syncVoipPersistentFSWithIdleCallback = T));
  },
  98,
);
