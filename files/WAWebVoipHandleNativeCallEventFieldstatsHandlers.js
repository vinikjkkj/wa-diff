__d(
  "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebBrowserApi",
    "WAWebCallWamEvent",
    "WAWebJoinableCallWamEvent",
    "WAWebPonyfillsIdleCallback",
    "WAWebReleaseToEventLoop",
    "WAWebVoipBatteryDiagnostics",
    "WAWebVoipBrowserMetrics",
    "WAWebVoipCallRatingStore",
    "WAWebVoipDeviceClassUtils",
    "WAWebVoipFocusTracker",
    "WAWebVoipGatingUtils",
    "WAWebVoipJsonParserPayloads",
    "WAWebVoipLobbyEntryPointStore",
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
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S = 0;
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebBrowserApi").getNumCpu(),
            n = o("WAWebBrowserApi").getMemClass(),
            r = n != null ? Math.round(n / 1e3) : null,
            a = o("WAWebVoipDeviceClassUtils").computeDeviceClass(t, r),
            i = babelHelpers.extends({}, e);
          (t != null && (i.numCpuCores = t),
            r != null && (i.totalMemoryGb = r),
            a != null && (i.deviceClass = a),
            (i.webTransportUsed = o(
              "WAWebVoipGatingUtils",
            ).isWebTransportEnabled()));
          var l = o("WAWebVoipFocusTracker").snapshotFocusStats();
          l != null && (i = babelHelpers.extends({}, i, l));
          var s = o("WAWebVoipBrowserMetrics").snapshotBrowserMetrics();
          s != null && (i = babelHelpers.extends({}, i, s));
          var u = o("WAWebVoipWindowMetrics").snapshotWindowMetrics();
          u != null && (i = babelHelpers.extends({}, i, u));
          var c = o("WAWebVoipBatteryDiagnostics").snapshotBatteryDiagnostics();
          (c != null && (i = babelHelpers.extends({}, i, c)), E());
          var d = yield o("WAWebBackendApi").frontendSendAndReceive(
            "consumeAudioPlaybackMetrics",
          );
          return (d != null && (i = babelHelpers.extends({}, i, d)), i);
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      (o("WAWebVoipFocusTracker").resetFocusStats(),
        o("WAWebVoipBrowserMetrics").resetBrowserMetrics(),
        o("WAWebVoipWindowMetrics").resetWindowMetrics(),
        o("WAWebVoipBatteryDiagnostics").resetBatteryDiagnostics());
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WAWebVoipCallRatingStore").setPendingFieldstatsJsonStr(e);
          var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if (t == null || t.type !== "web") {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] stack unavailable, dropping",
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
          yield o("WAWebReleaseToEventLoop").releaseToEventLoop();
          var l =
              a ===
                o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF ||
              a ===
                o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH,
            s = l ? yield R(n.stats) : babelHelpers.extends({}, n.stats);
          n.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
            s.callTermReason === S &&
            delete s.callTermReason;
          var d = typeof s.callId == "string" ? s.callId : null,
            m = o("WAWebVoipLobbyEntryPointStore").getLobbyEntryPointForCall(d);
          m != null && (s.lobbyEntryPoint = m);
          var p =
            n.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
              ? new (o("WAWebCallWamEvent").CallWamEvent)(s)
              : T(s);
          p.commit();
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      var t = new (o("WAWebJoinableCallWamEvent").JoinableCallWamEvent)();
      return (t.set(e), t);
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            var s = yield R(i),
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
            var v = yield o("WAWebBackendApi").frontendSendAndReceive(
              "consumeAVSyncMetrics",
            );
            v != null && (s = babelHelpers.extends({}, s, v));
            var S = yield o("WAWebBackendApi").frontendSendAndReceive(
              "consumeWebCodecsFatalErrorCount",
            );
            (S != null && (s.videoWebcodecsDecFatalErrorNum = S),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebCodecs] video_webcodecs_dec_fatal_error_num=",
                    "",
                  ])),
                S != null ? S : 0,
              ));
            var L = yield n.consumeVideoCaptureFps();
            L != null &&
              ((s = babelHelpers.extends({}, s, L)),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VideoCapture] video_capture_avg_fps=",
                    "",
                  ])),
                L.videoCaptureAvgFps,
              ));
            var E = typeof s.callId == "string" ? s.callId : null,
              k = o("WAWebVoipLobbyEntryPointStore").getLobbyEntryPointForCall(
                E,
              );
            k != null &&
              ((s.lobbyEntryPoint = k),
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] lobby_entry_point=",
                    "",
                  ])),
                k,
              ));
            var I =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeAnrCount",
              );
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ANR count for this call: ",
                  "",
                ])),
              I != null ? I : 0,
            );
            var D = null,
              x = null,
              $ = null,
              P = null,
              N = null;
            if (I != null && I > 0) {
              var M = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeActivityData",
              );
              M != null &&
                ((D = M.lastVoipActivity),
                (x = M.lastVoipActivityTimestampSec),
                ($ = M.timeFirstAnrSinceCallStartSec),
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR data act=",
                      " actT=",
                      "s firstAnrT=",
                      "s",
                    ])),
                  D != null ? D : "none",
                  x != null ? x : "none",
                  $ != null ? $ : "none",
                ));
              var w = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeUiActivityData",
              );
              w != null &&
                ((P = w.lastVoipUiActivity),
                (N = w.lastVoipUiActivityTimestampSec),
                o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR uiAct=",
                      " uiActT=",
                      "s",
                    ])),
                  P != null ? P : "none",
                  N != null ? N : "none",
                ));
            } else
              o("WAWebBackendApi").frontendFireAndForget(
                "clearAllActivityTracking",
                {},
              );
            var A;
            if (
              a.eventType ===
              o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
            ) {
              var F = new (o("WAWebCallWamEvent").CallWamEvent)(s),
                O = {};
              (I != null && (O.numAnrs = I),
                D != null && (O.lastVoipActivity = D),
                x != null && (O.lastVoipActivityTimestampSec = x),
                $ != null && (O.timeFirstAnrSinceCallStartSec = $),
                P != null && (O.lastVoipUiActivity = P),
                N != null && (O.lastVoipUiActivityTimestampSec = N),
                r("isEmptyObject")(O) ||
                  (F.set(O),
                  o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: ANR fields set n=",
                        " act=",
                        " actT=",
                        "s firstT=",
                        " uiAct=",
                        " uiActT=",
                        "s",
                      ])),
                    I != null ? I : "null",
                    D != null ? D : "null",
                    x != null ? x : "null",
                    $ != null ? $ : "null",
                    P != null ? P : "null",
                    N != null ? N : "null",
                  )),
                (A = F));
            } else A = T(s);
            (a.uploadInRealtime ? yield A.commitAndWaitForFlush() : A.commit(),
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Fieldstats sent successfully with user rating: ",
                    "",
                  ])),
                e != null ? e : "none",
              ));
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "initializeVoipWasm",
              );
            e.cleanupUnfinishedCallStats();
          } catch (e) {
            o("WALogger")
              .ERROR(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Failed to cleanup fieldstats after normal call end",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        })),
        P.apply(this, arguments)
      );
    }
    function N() {
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
    ((l.handleFieldstatsReady = k),
      (l.sendStoredFieldstats = D),
      (l.cleanupFieldstatsAfterNormalEnd = $),
      (l.syncVoipPersistentFSWithIdleCallback = N));
  },
  98,
);
