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
    async function R(e) {
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
      (c != null && (i = babelHelpers.extends({}, i, c)), L());
      var d = await o("WAWebBackendApi").frontendSendAndReceive(
        "consumeAudioPlaybackMetrics",
      );
      return (d != null && (i = babelHelpers.extends({}, i, d)), i);
    }
    function L() {
      (o("WAWebVoipFocusTracker").resetFocusStats(),
        o("WAWebVoipBrowserMetrics").resetBrowserMetrics(),
        o("WAWebVoipWindowMetrics").resetWindowMetrics(),
        o("WAWebVoipBatteryDiagnostics").resetBatteryDiagnostics());
    }
    async function E(t) {
      o("WAWebVoipCallRatingStore").setPendingFieldstatsJsonStr(t);
      var n = await o("WAWebVoipStackInterface").getVoipStackInterface();
      if (n == null || n.type !== "web") {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [Fieldstats] stack unavailable, dropping",
            ])),
        );
        return;
      }
      var r = n.parsers.parseFieldstatsData(t),
        a = r.stats.groupCallSegmentIdx,
        i = r.stats.fieldStatsRowType,
        l = r.isLastFieldStatsReport;
      if (l) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [Fieldstats] last segment stored for rating",
            ])),
        );
        return;
      }
      await o("WAWebReleaseToEventLoop").releaseToEventLoop();
      var u =
          i === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF ||
          i === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH,
        c = u ? await R(r.stats) : babelHelpers.extends({}, r.stats);
      r.eventType ===
        o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
        c.callTermReason === S &&
        delete c.callTermReason;
      var d = typeof c.callId == "string" ? c.callId : null,
        m = o("WAWebVoipLobbyEntryPointStore").getLobbyEntryPointForCall(d);
      m != null && (c.lobbyEntryPoint = m);
      var p =
        r.eventType ===
        o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
          ? new (o("WAWebCallWamEvent").CallWamEvent)(c)
          : k(c);
      p.commit();
    }
    function k(e) {
      var t = new (o("WAWebJoinableCallWamEvent").JoinableCallWamEvent)();
      return (t.set(e), t);
    }
    async function I(e) {
      var t = o("WAWebVoipCallRatingStore").consumePendingFieldstatsJsonStr();
      if (t == null) {
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: No pending fieldstats to send",
            ])),
        );
        return;
      }
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "voip: Sending stored fieldstats with rating: ",
            "",
          ])),
        e != null ? e : "none",
      );
      var n = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
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
        var s = await R(i),
          C = o("WAWebVoipBatteryDiagnostics").getBatteryLevelAtCallStart();
        if (C != null) {
          var b = s.browserBatteryLevelEndPct;
          ((s.callStartBatteryPct = C),
            (s.callEndBatteryPct = b),
            typeof b == "number" && (s.callBatteryChangePct = b - C));
        }
        (o("WAWebVoipFocusTracker").stopVoipFocusTracking(),
          await o("WAWebVoipBrowserMetrics").stopBrowserMetrics(),
          o("WAWebVoipWindowMetrics").stopWindowMetrics(),
          await o("WAWebVoipBatteryDiagnostics").stopBatteryDiagnostics());
        var v = await o("WAWebBackendApi").frontendSendAndReceive(
          "consumeAVSyncMetrics",
        );
        v != null && (s = babelHelpers.extends({}, s, v));
        var S = await o("WAWebBackendApi").frontendSendAndReceive(
          "consumeWebCodecsFatalErrorCount",
        );
        (S != null && (s.videoWebcodecsDecFatalErrorNum = S),
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebCodecs] video_webcodecs_dec_fatal_error_num=",
                "",
              ])),
            S != null ? S : 0,
          ));
        var L = await n.consumeVideoCaptureFps();
        L != null &&
          ((s = babelHelpers.extends({}, s, L)),
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [VideoCapture] video_capture_avg_fps=",
                "",
              ])),
            L.videoCaptureAvgFps,
          ));
        var E = typeof s.callId == "string" ? s.callId : null,
          I = o("WAWebVoipLobbyEntryPointStore").getLobbyEntryPointForCall(E);
        I != null &&
          ((s.lobbyEntryPoint = I),
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Fieldstats] lobby_entry_point=",
                "",
              ])),
            I,
          ));
        var T =
          await o("WAWebBackendApi").frontendSendAndReceive("consumeAnrCount");
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: ANR count for this call: ",
              "",
            ])),
          T != null ? T : 0,
        );
        var D = null,
          x = null,
          $ = null,
          P = null,
          N = null;
        if (T != null && T > 0) {
          var M = await o("WAWebBackendApi").frontendSendAndReceive(
            "consumeActivityData",
          );
          M != null &&
            ((D = M.lastVoipActivity),
            (x = M.lastVoipActivityTimestampSec),
            ($ = M.timeFirstAnrSinceCallStartSec),
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ANR data act=",
                  " actT=",
                  "s firstAnrT=",
                  "s",
                ])),
              D != null ? D : "none",
              x != null ? x : "none",
              $ != null ? $ : "none",
            ));
          var w = await o("WAWebBackendApi").frontendSendAndReceive(
            "consumeUiActivityData",
          );
          w != null &&
            ((P = w.lastVoipUiActivity),
            (N = w.lastVoipUiActivityTimestampSec),
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
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
          (T != null && (O.numAnrs = T),
            D != null && (O.lastVoipActivity = D),
            x != null && (O.lastVoipActivityTimestampSec = x),
            $ != null && (O.timeFirstAnrSinceCallStartSec = $),
            P != null && (O.lastVoipUiActivity = P),
            N != null && (O.lastVoipUiActivityTimestampSec = N),
            r("isEmptyObject")(O) ||
              (F.set(O),
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: ANR fields set n=",
                    " act=",
                    " actT=",
                    "s firstT=",
                    " uiAct=",
                    " uiActT=",
                    "s",
                  ])),
                T != null ? T : "null",
                D != null ? D : "null",
                x != null ? x : "null",
                $ != null ? $ : "null",
                P != null ? P : "null",
                N != null ? N : "null",
              )),
            (A = F));
        } else A = k(s);
        (a.uploadInRealtime ? await A.commitAndWaitForFlush() : A.commit(),
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Fieldstats sent successfully with user rating: ",
                "",
              ])),
            e != null ? e : "none",
          ));
      }
    }
    async function T() {
      try {
        var e =
          await o("WAWebBackendApi").frontendSendAndReceive(
            "initializeVoipWasm",
          );
        e.cleanupUnfinishedCallStats();
      } catch (e) {
        o("WALogger")
          .ERROR(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Failed to cleanup fieldstats after normal call end",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    function D() {
      o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
        var e = Date.now();
        o("WAWebBackendApi")
          .frontendSendAndReceive("initializeVoipWasm")
          .then(function (e) {
            return o("WAWebVoipPersistentFS").syncPersistentFS(e);
          })
          .then(function () {
            var t = Date.now() - e;
            o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [IDBFS] Successfully synced filesystem in ",
                  "ms",
                ])),
              t,
            );
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [IDBFS] Failed to sync filesystem",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          });
      });
    }
    ((l.handleFieldstatsReady = E),
      (l.sendStoredFieldstats = I),
      (l.cleanupFieldstatsAfterNormalEnd = T),
      (l.syncVoipPersistentFSWithIdleCallback = D));
  },
  98,
);
