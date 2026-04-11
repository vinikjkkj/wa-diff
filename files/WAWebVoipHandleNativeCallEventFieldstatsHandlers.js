__d(
  "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
  [
    "WALogger",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isEmptyObject",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g, h;
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WAWebVoipCallRatingStore").setPendingFieldstatsJsonStr(e),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: Fieldstats ready, stored for later",
                ])),
            ));
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      var t = new (o("WAWebJoinableCallWamEvent").JoinableCallWamEvent)();
      return (t.set(e), t);
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebVoipCallRatingStore",
          ).consumePendingFieldstatsJsonStr();
          if (t == null) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: No pending fieldstats to send",
                ])),
            );
            return;
          }
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
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
            var s = o("WAWebBrowserApi").getNumCpu(),
              u = o("WAWebBrowserApi").getMemClass();
            (s != null && (i.numCpuCores = s),
              u != null && (i.totalMemoryGb = Math.round(u / 1e3)));
            var h = u != null ? Math.round(u / 1e3) : null,
              y = o("WAWebVoipDeviceClassUtils").computeDeviceClass(s, h);
            (y != null && (i.deviceClass = y),
              o("WAWebVoipFocusTracker").stopVoipFocusTracking());
            var C = o("WAWebVoipFocusTracker").consumeVoipFocusStats();
            (C != null &&
              ((i.mainTabVisibleMsT = C.mainTabVisibleMs),
              (i.mainTabHiddenMsT = C.mainTabHiddenMs),
              (i.popoutWebWindowMsT = C.popoutWindowMs),
              (i.pipWebWindowMsT = C.pipWindowMs),
              (i.jsHaltCount = C.jsHaltCount),
              (i.jsHaltTotalMsT = C.jsHaltTotalMs)),
              yield o("WAWebVoipBrowserMetrics").stopBrowserMetrics());
            var v = o("WAWebVoipBrowserMetrics").consumeBrowserMetrics();
            o("WAWebVoipWindowMetrics").stopWindowMetrics();
            var S = o("WAWebVoipWindowMetrics").consumeWindowMetrics();
            yield o("WAWebVoipBatteryDiagnostics").stopBatteryDiagnostics();
            var R = o(
                "WAWebVoipBatteryDiagnostics",
              ).consumeBatteryDiagnostics(),
              L = i;
            (v != null && (L = babelHelpers.extends({}, L, v)),
              S != null && (L = babelHelpers.extends({}, L, S)),
              R != null && (L = babelHelpers.extends({}, L, R)));
            var E =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeAnrCount",
              );
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ANR count for this call: ",
                  "",
                ])),
              E != null ? E : 0,
            );
            var k = null,
              I = null,
              T = null,
              D = null,
              x = null;
            if (E != null && E > 0) {
              var $ = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeActivityData",
              );
              $ != null &&
                ((k = $.lastVoipActivity),
                (I = $.lastVoipActivityTimestampSec),
                (T = $.timeFirstAnrSinceCallStartSec),
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR data act=",
                      " actT=",
                      "s firstAnrT=",
                      "s",
                    ])),
                  k != null ? k : "none",
                  I != null ? I : "none",
                  T != null ? T : "none",
                ));
              var P = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeUiActivityData",
              );
              P != null &&
                ((D = P.lastVoipUiActivity),
                (x = P.lastVoipUiActivityTimestampSec),
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR uiAct=",
                      " uiActT=",
                      "s",
                    ])),
                  D != null ? D : "none",
                  x != null ? x : "none",
                ));
            } else
              o("WAWebBackendApi").frontendFireAndForget(
                "clearAllActivityTracking",
                {},
              );
            var N;
            if (
              a.eventType ===
              o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
            ) {
              var M = new (o("WAWebCallWamEvent").CallWamEvent)(L),
                w = {};
              (E != null && (w.numAnrs = E),
                k != null && (w.lastVoipActivity = k),
                I != null && (w.lastVoipActivityTimestampSec = I),
                T != null && (w.timeFirstAnrSinceCallStartSec = T),
                D != null && (w.lastVoipUiActivity = D),
                x != null && (w.lastVoipUiActivityTimestampSec = x),
                r("isEmptyObject")(w) ||
                  (M.set(w),
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: ANR fields set n=",
                        " act=",
                        " actT=",
                        "s firstT=",
                        " uiAct=",
                        " uiActT=",
                        "s",
                      ])),
                    E != null ? E : "null",
                    k != null ? k : "null",
                    I != null ? I : "null",
                    T != null ? T : "null",
                    D != null ? D : "null",
                    x != null ? x : "null",
                  )),
                (N = M));
            } else N = b(L);
            (a.uploadInRealtime ? yield N.commitAndWaitForFlush() : N.commit(),
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Fieldstats sent successfully with user rating: ",
                    "",
                  ])),
                e != null ? e : "none",
              ));
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "initializeVoipWasm",
              );
            e.cleanupUnfinishedCallStats();
          } catch (e) {
            o("WALogger")
              .ERROR(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Failed to cleanup fieldstats after normal call end",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
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
    ((l.handleFieldstatsReady = y),
      (l.sendStoredFieldstats = v),
      (l.cleanupFieldstatsAfterNormalEnd = R),
      (l.syncVoipPersistentFSWithIdleCallback = E));
  },
  98,
);
