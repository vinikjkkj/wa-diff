__d(
  "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
  [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WAWebBackendApi",
    "WAWebBrowserApi",
    "WAWebCallRandomIdStore",
    "WAWebCallUserJourneyGating",
    "WAWebCallWamEvent",
    "WAWebCoreActionsODS",
    "WAWebJoinableCallWamEvent",
    "WAWebPonyfillsIdleCallback",
    "WAWebReleaseToEventLoop",
    "WAWebVoipAppInBgWhenCallStartsStore",
    "WAWebVoipBatteryDiagnostics",
    "WAWebVoipBrowserMetrics",
    "WAWebVoipCallEnterPipModeCountStore",
    "WAWebVoipCallFromUiStore",
    "WAWebVoipCallRatingStore",
    "WAWebVoipCalleeOfferToRingStore",
    "WAWebVoipDeviceClassUtils",
    "WAWebVoipErrorLogUpload",
    "WAWebVoipFocusTracker",
    "WAWebVoipGatingUtils",
    "WAWebVoipHardwareInfo",
    "WAWebVoipIncomingCallUiActionStore",
    "WAWebVoipJsonParserPayloads",
    "WAWebVoipLabMetricsFile",
    "WAWebVoipLobbyEntryPointStore",
    "WAWebVoipPersistentFS",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoEncoderType",
    "WAWebVoipWebTransportCallSummary",
    "WAWebVoipWindowMetrics",
    "WAWebWamEnumCallSide",
    "WAWebWamEnumFieldStatsRowType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isEmptyObject",
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
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A,
      F,
      O,
      B = 0,
      W = 6,
      q = 10,
      U = 15,
      V = 17,
      H = 3e4,
      G = 15e3,
      z = 2e3,
      j = 2e3;
    function K() {
      return o("WAWebVoipGatingUtils").isGuestViewer() ? G : H;
    }
    var Q = new WeakSet(),
      X = new WeakMap(),
      Y = new WeakMap(),
      J = null,
      Z = null;
    function ee(e, t) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebBrowserApi").getNumCpu(),
            r = o("WAWebBrowserApi").getMemClass(),
            a = r != null ? Math.round(r / 1e3) : null,
            i = o("WAWebVoipDeviceClassUtils").computeDeviceClass(n, a),
            l = babelHelpers.extends({}, e);
          (n != null && (l.numCpuCores = n),
            a != null && (l.totalMemoryGb = a),
            i != null && (l.deviceClass = i),
            (l = ne(l)),
            (l = re(l, t)));
          var s = o("WAWebVoipFocusTracker").snapshotFocusStats();
          s != null && (l = babelHelpers.extends({}, l, s));
          var u = o("WAWebVoipBrowserMetrics").snapshotBrowserMetrics();
          u != null && (l = babelHelpers.extends({}, l, u));
          var c = o("WAWebVoipWindowMetrics").snapshotWindowMetrics();
          c != null && (l = babelHelpers.extends({}, l, c));
          var d = o("WAWebVoipBatteryDiagnostics").snapshotBatteryDiagnostics();
          (d != null && (l = babelHelpers.extends({}, l, d)), oe());
          var m = yield o("WAWebBackendApi").frontendSendAndReceive(
            "consumeAudioPlaybackMetrics",
          );
          m != null && (l = babelHelpers.extends({}, l, m));
          var p = yield o("WAWebBackendApi").frontendSendAndReceive(
            "consumeAudioCaptureMetrics",
          );
          return (p != null && (l = babelHelpers.extends({}, l, p)), l);
        })),
        te.apply(this, arguments)
      );
    }
    function ne(e) {
      var t = o("WAWebVoipHardwareInfo").getCachedHardwareInfo(),
        n = babelHelpers.extends({}, e);
      return (
        t.cpuArch != null && (n.cpuArch = t.cpuArch),
        t.gpuName != null && (n.gpuName = t.gpuName),
        t.gpuVendor != null && (n.gpuVendor = t.gpuVendor),
        t.gpuCount != null && (n.gpuCount = t.gpuCount),
        n
      );
    }
    function re(e, t) {
      if (t == null) return babelHelpers.extends({}, e);
      var n = babelHelpers.extends({}, e, {
        webTransportUsed: t.relayTrafficSent,
        webTransportConnectAttempted: t.connectAttempted,
        webTransportConnectOpened: t.connectOpened,
        webTransportRelayTrafficSent: t.relayTrafficSent,
        webTransportFallbackTriggered: t.fallbackTriggered,
        webTransportFallbackPhase: t.fallbackPhase,
        webTransportFallbackReason: t.fallbackReason,
        webTransportFallbackSinceCallStartMs: t.fallbackSinceCallStartMs,
        webTransportFallbackSinceAcceptMs: t.fallbackSinceAcceptMs,
        webTransportFallbackSctpStartMs: t.fallbackSctpStartMs,
        webTransportFallbackSctpConnectedMs: t.fallbackSctpConnectedMs,
        webTransportFallbackToFirstActiveMs: t.fallbackToFirstActiveMs,
      });
      return (
        t.configEnabled != null &&
          (n = babelHelpers.extends({}, n, {
            webTransportConfigEnabled: t.configEnabled,
          })),
        t.runtimeEligible != null &&
          (n = babelHelpers.extends({}, n, {
            webTransportRuntimeEligible: t.runtimeEligible,
          })),
        n
      );
    }
    function oe() {
      (o("WAWebVoipFocusTracker").resetFocusStats(),
        o("WAWebVoipBrowserMetrics").resetBrowserMetrics(),
        o("WAWebVoipWindowMetrics").resetWindowMetrics(),
        o("WAWebVoipBatteryDiagnostics").resetBatteryDiagnostics());
    }
    function ae(e) {
      try {
        var t = JSON.parse(e);
        return t.is_last_field_stats_report === !0;
      } catch (e) {
        return !1;
      }
    }
    function ie(e) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = he(e);
          (delete e.micPermission, delete e.cameraPermission);
          var r = yield (O || (O = n("Promise"))).all([
              se(
                o("WAWebBackendApi").frontendSendAndReceive(
                  "getVoipMicPermissionGranted",
                ),
                "mic_permission",
              ),
              t
                ? se(
                    o("WAWebBackendApi").frontendSendAndReceive(
                      "getVoipCameraPermissionGranted",
                    ),
                    "camera_permission",
                  )
                : (O || (O = n("Promise"))).resolve(null),
            ]),
            a = r[0],
            i = r[1];
          (a != null &&
            ((e.micPermission = a),
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] mic_permission=",
                  "",
                ])),
              String(a),
            )),
            i != null &&
              ((e.cameraPermission = i),
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] camera_permission=",
                    "",
                  ])),
                String(i),
              )));
        })),
        le.apply(this, arguments)
      );
    }
    function se(t, n) {
      return o("WAPromiseDelays").withTimeout(
        t.then(
          function (e) {
            return e;
          },
          function (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] ",
                      " lookup failed",
                    ])),
                  n,
                )
                .catching(r("getErrorSafe")(t)),
              null
            );
          },
        ),
        z,
        function () {
          return (
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] ",
                  " lookup timed out",
                ])),
              n,
            ),
            null
          );
        },
      );
    }
    function ue(e) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = o(
              "WAWebVoipWebTransportCallSummary",
            ).getWtCurrentCallTelemetry(),
            r = o("WAWebVoipCallRatingStore").setPendingFieldstatsJsonStr({
              calleeOfferToRingT: o(
                "WAWebVoipCalleeOfferToRingStore",
              ).getCalleeOfferToRingT(),
              callEnterPipModeCount: _e(),
              callFromUi: o("WAWebVoipCallFromUiStore").getCallFromUi(),
              callRandomId: o(
                "WAWebCallRandomIdStore",
              ).getCurrentCallRandomId(),
              incomingCallUiAction: o(
                "WAWebVoipIncomingCallUiActionStore",
              ).getIncomingCallUiAction(),
              isAppInBgWhenCallStarts: o(
                "WAWebVoipAppInBgWhenCallStartsStore",
              ).getAppInBgWhenCallStarts(),
              jsonDataStr: e,
              lobbyEntryPoint: o(
                "WAWebVoipLobbyEntryPointStore",
              ).getCurrentLobbyEntryPoint(),
            });
          ((Z = r), n != null && X.set(r, n), De(r));
          var a = ae(e);
          a && ke(r);
          var i = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if (i == null || i.type !== "web") {
            o("WALogger").WARN(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] stack unavailable, dropping",
                ])),
            );
            return;
          }
          var l = i.parsers.parseFieldstatsData(e),
            s = l.stats.groupCallSegmentIdx,
            u = l.stats.fieldStatsRowType,
            c = l.isLastFieldStatsReport;
          if ((fe(l.eventType, u), c)) {
            (o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint(),
              o(
                "WAWebVoipIncomingCallUiActionStore",
              ).resetIncomingCallUiAction(),
              o("WAWebVoipCallFromUiStore").resetCallFromUi(),
              o(
                "WAWebVoipAppInBgWhenCallStartsStore",
              ).resetAppInBgWhenCallStarts(),
              o(
                "WAWebVoipCallEnterPipModeCountStore",
              ).resetCallEnterPipModeCount(),
              o("WAWebVoipCalleeOfferToRingStore").resetCalleeOfferToRing(),
              o("WAWebCoreActionsODS").logCallFieldstatsFinalReceived(),
              a || ke(r),
              l.eventType ===
                o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
                (Ce(l.stats), ve(l.stats)),
              Z === r && (yield Pe(r)),
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] last segment stored for rating",
                  ])),
              ));
            return;
          }
          (a && Te(r), yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
          var d = ye(u)
            ? yield ee(l.stats, (t = X.get(r)) != null ? t : null)
            : babelHelpers.extends({}, l.stats);
          l.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
            d.callTermReason === B &&
            delete d.callTermReason;
          var m = r.lobbyEntryPoint;
          if (
            (m != null && (d.lobbyEntryPoint = m),
            o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled())
          ) {
            var p = r.callRandomId;
            p != null && (d.callRandomId = p);
          }
          if (
            l.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
          ) {
            (o(
              "WAWebCallUserJourneyGating",
            ).isCallUserJourneyLoggingEnabled() &&
              (delete d.micPermission, delete d.cameraPermission),
              de(d, r.callFromUi),
              me(d, r.isAppInBgWhenCallStarts),
              ge(d, r.callEnterPipModeCount));
            var _ = yield o("WAWebBackendApi").frontendSendAndReceive(
              "getUnifiedSessionId",
            );
            _ != null && (d.unifiedSessionId = _);
          }
          var f =
            l.eventType ===
            o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
              ? new (o("WAWebCallWamEvent").CallWamEvent)(d)
              : Se(d);
          f.commit();
        })),
        ce.apply(this, arguments)
      );
    }
    function de(e, t) {
      t != null &&
        e.callSide === o("WAWebWamEnumCallSide").CALL_SIDE.CALLER &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
        (e.callFromUi = t);
    }
    function me(e, t) {
      t != null &&
        ye(e.fieldStatsRowType) &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
        (e.isAppInBgWhenCallStarts = t);
    }
    function pe(e, t) {
      t != null &&
        e.callSide === o("WAWebWamEnumCallSide").CALL_SIDE.CALLEE &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
        (e.calleeOfferToRingT = t);
    }
    function _e() {
      return o("WAWebVoipGatingUtils").isDocPipEnabled()
        ? o("WAWebVoipCallEnterPipModeCountStore").getCallEnterPipModeCount()
        : null;
    }
    function fe(e, t) {
      e === o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call &&
        t === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF &&
        o("WAWebVoipCallEnterPipModeCountStore").resetCallEnterPipModeCount();
    }
    function ge(e, t) {
      t != null &&
        ye(e.fieldStatsRowType) &&
        he(e) &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
        (e.callEnterPipModeCount = t);
    }
    function he(e) {
      return e.videoEnabled === !0 || e.videoEnabledAtCallStart === !0;
    }
    function ye(e) {
      return (
        e === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF ||
        e === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH
      );
    }
    function Ce(e) {
      var t = e.callEndReconnecting,
        n = e.callResult,
        r = e.groupCallIsLastSegment,
        a = e.maxConnectedParticipants;
      if (
        !(
          typeof t != "boolean" ||
          typeof n != "number" ||
          typeof r != "boolean" ||
          typeof a != "number"
        )
      ) {
        var i = e.callId,
          l = e.callT,
          s = e.groupCallSegmentIdx,
          u = e.groupCallTotalCallTSinceCallStart;
        o("WAWebVoipErrorLogUpload").maybeUploadGroupCallCerLogs({
          callEndReconnecting: t,
          callId: typeof i == "string" ? i : null,
          callResult: n,
          callT: typeof l == "number" ? l : null,
          groupCallIsLastSegment: r,
          groupCallSegmentIdx: typeof s == "number" ? s : null,
          groupCallTotalCallTSinceCallStart: typeof u == "number" ? u : null,
          maxConnectedParticipants: a,
        });
      }
    }
    function be(e, t) {
      return e === q
        ? "anc"
        : e === W && (t === U || t === V)
          ? "relay_bind"
          : null;
    }
    function ve(e) {
      var t = typeof e.callId == "string" ? e.callId : null,
        n = o("WAWebVoipWebTransportCallSummary").getWtCallSummaryForCall(t);
      if (n != null) {
        var r = e.callResult,
          a = e.callSetupErrorType,
          i = e.maxConnectedParticipants;
        if (
          !(
            e.groupCallIsLastSegment !== !0 ||
            typeof r != "number" ||
            typeof i != "number"
          )
        ) {
          var l = be(r, a);
          l != null &&
            (o("WAWebCoreActionsODS").logCallWebtransportGroupCallAnc(),
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WtGroupCallAnc] kind=",
                    " callId=",
                    " callResult=",
                    " callSetupErrorType=",
                    " maxConnectedParticipants=",
                    " numRelayAttempts=",
                    " numOpened=",
                    " attempts=",
                    "",
                  ])),
                l,
                String(t),
                r,
                String(a != null ? a : "n/a"),
                i,
                n.numRelayAttempts,
                n.numOpened,
                JSON.stringify(n.attempts),
              )
              .sendLogs("webtransport-group-call-anc"));
        }
      }
    }
    function Se(e) {
      var t = new (o("WAWebJoinableCallWamEvent").JoinableCallWamEvent)();
      return (
        t.set(
          o("WAWebVoipGatingUtils").isGuestViewer()
            ? babelHelpers.extends({}, e, { isGuestParticipant: !0 })
            : e,
        ),
        t
      );
    }
    function Re(e) {
      var t = o("WAWebVoipCallRatingStore").getPendingFieldstats();
      return t == null
        ? (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: No pending fieldstats to send",
              ])),
          ),
          (O || (O = n("Promise"))).resolve())
        : Le(t, e);
    }
    function Le(e, t) {
      var n = Y.get(e);
      if (n != null) return n;
      var r = Ae(e, t);
      return (
        Y.set(e, r),
        r.then(
          function () {
            Y.get(e) === r && Y.delete(e);
          },
          function () {
            Y.get(e) === r && Y.delete(e);
          },
        ),
        r
      );
    }
    function Ee(e) {
      Re(e).catch(function (e) {
        o("WALogger")
          .WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Fieldstats] send request failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      });
    }
    function ke(e) {
      if (!Q.has(e)) {
        J != null && window.clearTimeout(J.timeoutId);
        var t = window.setTimeout(function () {
          var t;
          if (((t = J) == null ? void 0 : t.fieldstats) === e) {
            J = null;
            var n = Y.get(e);
            if (n != null) {
              n.catch(function () {
                Ie(e);
              });
              return;
            }
            (o("WAWebCoreActionsODS").logCallFieldstatsWatchdogSend(),
              Le(e).catch(function (t) {
                (o("WALogger")
                  .WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [Fieldstats] watchdog send failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)),
                  Ie(e));
              }));
          }
        }, K());
        J = { fieldstats: e, timeoutId: t };
      }
    }
    function Ie(e) {
      !Q.has(e) &&
        o("WAWebVoipCallRatingStore").getPendingFieldstats() === e &&
        ke(e);
    }
    function Te(e) {
      var t = J;
      t != null &&
        t.fieldstats === e &&
        (window.clearTimeout(t.timeoutId), (J = null));
    }
    function De(e) {
      var t = J;
      t != null &&
        t.fieldstats !== e &&
        (window.clearTimeout(t.timeoutId), (J = null));
    }
    var xe = new WeakMap(),
      $e = new WeakMap();
    function Pe(e) {
      var t = $e.get(e);
      if (t != null) return t;
      var n = Ne(e);
      $e.set(e, n);
      var r = function () {
        $e.get(e) === n && $e.delete(e);
      };
      return (n.then(r, r), n);
    }
    function Ne(e) {
      return Me.apply(this, arguments);
    }
    function Me() {
      return (
        (Me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = xe.get(e);
          if (t == null) {
            var r = {};
            (xe.set(e, r), (t = r));
          }
          var a = t;
          return (
            yield (O || (O = n("Promise"))).all([
              a.avSyncMetrics === void 0
                ? we(
                    o("WAWebBackendApi").frontendSendAndReceive(
                      "consumeAVSyncMetrics",
                    ),
                    "consumeAVSyncMetrics",
                  ).then(function (e) {
                    e !== void 0 && (a.avSyncMetrics = e);
                  })
                : null,
              a.webCodecsFatalErrors === void 0
                ? we(
                    o("WAWebBackendApi").frontendSendAndReceive(
                      "consumeWebCodecsFatalErrorCount",
                    ),
                    "consumeWebCodecsFatalErrorCount",
                  ).then(function (e) {
                    e !== void 0 && (a.webCodecsFatalErrors = e);
                  })
                : null,
              a.decodeOrderMetrics === void 0
                ? we(
                    o("WAWebBackendApi").frontendSendAndReceive(
                      "consumeWebCodecsDecodeOrderMetrics",
                    ),
                    "consumeWebCodecsDecodeOrderMetrics",
                  ).then(function (e) {
                    e !== void 0 && (a.decodeOrderMetrics = e);
                  })
                : null,
            ]),
            a
          );
        })),
        Me.apply(this, arguments)
      );
    }
    function we(e, t) {
      return o("WAPromiseDelays").withTimeout(
        e.then(
          function (e) {
            return e != null ? e : null;
          },
          function (e) {
            o("WALogger")
              .WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] ",
                    " failed, omitting its fields",
                  ])),
                t,
              )
              .catching(r("getErrorSafe")(e));
          },
        ),
        j,
        function () {
          return (
            o("WALogger").WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Fieldstats] ",
                  " timed out, omitting its fields",
                ])),
              t,
            ),
            null
          );
        },
      );
    }
    function Ae(e, t) {
      return Fe.apply(this, arguments);
    }
    function Fe() {
      return (
        (Fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.jsonDataStr;
          o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Sending stored fieldstats with rating: ",
                "",
              ])),
            t != null ? t : "none",
          );
          try {
            var a,
              i = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (i == null || i.type !== "web") {
              (o("WALogger").WARN(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] web stack unavailable, skipping pending fieldstats",
                  ])),
              ),
                Ie(e));
              return;
            }
            var l = i.parsers.parseFieldstatsData(n),
              s = babelHelpers.extends({}, l.stats);
            if (
              t != null &&
              l.eventType ===
                o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
            ) {
              var u = s.call_ended_stats;
              u != null && typeof u == "object"
                ? (s.call_ended_stats = babelHelpers.extends({}, u, {
                    userRating: t,
                  }))
                : (s.userRating = t);
            }
            var c = yield ee(s, (a = X.get(e)) != null ? a : null),
              d = o("WAWebVoipBatteryDiagnostics").getBatteryLevelAtCallStart();
            if (d != null) {
              var m = c.browserBatteryLevelEndPct;
              ((c.callStartBatteryPct = d),
                (c.callEndBatteryPct = m),
                typeof m == "number" && (c.callBatteryChangePct = m - d));
            }
            (o("WAWebVoipFocusTracker").stopVoipFocusTracking(),
              yield o("WAWebVoipBrowserMetrics").stopBrowserMetrics(),
              o("WAWebVoipWindowMetrics").stopWindowMetrics(),
              yield o("WAWebVoipBatteryDiagnostics").stopBatteryDiagnostics());
            var p =
                l.eventType ===
                o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call,
              _ = p ? yield Pe(e) : {},
              f = _.avSyncMetrics,
              g = _.decodeOrderMetrics,
              h = _.webCodecsFatalErrors;
            if (
              (f != null && (c = babelHelpers.extends({}, c, f)),
              h != null && (c.videoWebcodecsDecFatalErrorNum = h),
              o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebCodecs] video_webcodecs_dec_fatal_error_num=",
                    "",
                  ])),
                h != null ? h : 0,
              ),
              p && g != null)
            ) {
              var y;
              ((c = babelHelpers.extends({}, c, g)),
                o("WALogger").LOG(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebCodecs] decode_order mode=",
                      " out_of_order_frames=",
                      " ref_chain_breaks=",
                      " ref_chain_broken_t=",
                      "ms render_freezes=",
                      " render_freeze_t=",
                      "ms av_sync_reorders=",
                      "",
                    ])),
                  g.webVideoDecOrderingMode,
                  g.webVideoDecOutOfOrderFrames,
                  g.webVideoDecRefChainBreakCount,
                  g.webVideoDecRefChainBrokenT,
                  g.webVideoRenderNumFreezes,
                  g.webVideoRenderFreezeT,
                  (y = f == null ? void 0 : f.webAvSyncReorderCount) != null
                    ? y
                    : "n/a",
                ));
            }
            var C = yield i.consumeVideoCaptureFps();
            C != null &&
              ((c = babelHelpers.extends({}, c, C)),
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VideoCapture] video_capture_avg_fps=",
                    "",
                  ])),
                C.videoCaptureAvgFps,
              ));
            var b = o("WAWebVoipVideoEncoderType").getActiveVideoEncoderType();
            b != null &&
              ((c.webVideoEncoderType = b),
              o("WALogger").LOG(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VideoEncoder] web_video_encoder_type=",
                    "",
                  ])),
                b,
              ));
            var A = typeof c.callId == "string" ? c.callId : null,
              F = e.lobbyEntryPoint;
            if (
              (F != null &&
                ((c.lobbyEntryPoint = F),
                o("WALogger").LOG(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] lobby_entry_point=",
                      "",
                    ])),
                  F,
                )),
              o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled())
            ) {
              var O = e.callRandomId;
              O != null && (c.callRandomId = O);
            }
            if (
              l.eventType ===
              o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
            ) {
              var B = yield o("WAWebBackendApi").frontendSendAndReceive(
                "getUnifiedSessionId",
              );
              B != null && (c.unifiedSessionId = B);
              var W = e.incomingCallUiAction;
              (W != null &&
                o(
                  "WAWebCallUserJourneyGating",
                ).isCallUserJourneyLoggingEnabled() &&
                ((c.incomingCallUiAction = W),
                o("WALogger").LOG(
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] incoming_call_ui_action=",
                      "",
                    ])),
                  W,
                )),
                de(c, e.callFromUi),
                me(c, e.isAppInBgWhenCallStarts),
                ge(c, e.callEnterPipModeCount),
                pe(c, e.calleeOfferToRingT),
                o(
                  "WAWebCallUserJourneyGating",
                ).isCallUserJourneyLoggingEnabled() && (yield ie(c)));
              var q = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeOutgoingCallSetupActiveMs",
                { callId: A },
              );
              q != null &&
                ((c.outgoingCallSetupActiveMs = q),
                o("WALogger").LOG(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] outgoing_call_setup_active_ms=",
                      "",
                    ])),
                  q,
                ));
            }
            var U =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeAnrCount",
              );
            o("WALogger").LOG(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ANR count for this call: ",
                  "",
                ])),
              U != null ? U : 0,
            );
            var V = null,
              H = null,
              G = null,
              z = null,
              j = null;
            if (U != null && U > 0) {
              var K = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeActivityData",
              );
              K != null &&
                ((V = K.lastVoipActivity),
                (H = K.lastVoipActivityTimestampSec),
                (G = K.timeFirstAnrSinceCallStartSec),
                o("WALogger").LOG(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR data act=",
                      " actT=",
                      "s firstAnrT=",
                      "s",
                    ])),
                  V != null ? V : "none",
                  H != null ? H : "none",
                  G != null ? G : "none",
                ));
              var Y = yield o("WAWebBackendApi").frontendSendAndReceive(
                "consumeUiActivityData",
              );
              Y != null &&
                ((z = Y.lastVoipUiActivity),
                (j = Y.lastVoipUiActivityTimestampSec),
                o("WALogger").LOG(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR uiAct=",
                      " uiActT=",
                      "s",
                    ])),
                  z != null ? z : "none",
                  j != null ? j : "none",
                ));
            } else
              o("WAWebBackendApi").frontendFireAndForget(
                "clearAllActivityTracking",
                {},
              );
            var J = {};
            (U != null && (J.numAnrs = U),
              V != null && (J.lastVoipActivity = V),
              H != null && (J.lastVoipActivityTimestampSec = H),
              G != null && (J.timeFirstAnrSinceCallStartSec = G),
              z != null && (J.lastVoipUiActivity = z),
              j != null && (J.lastVoipUiActivityTimestampSec = j));
            var Z;
            if (
              l.eventType ===
              o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call
            ) {
              var te = new (o("WAWebCallWamEvent").CallWamEvent)(c);
              (r("isEmptyObject")(J) ||
                (te.set(J),
                o("WALogger").LOG(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ANR fields set n=",
                      " act=",
                      " actT=",
                      "s firstT=",
                      " uiAct=",
                      " uiActT=",
                      "s",
                    ])),
                  U != null ? U : "null",
                  V != null ? V : "null",
                  H != null ? H : "null",
                  G != null ? G : "null",
                  z != null ? z : "null",
                  j != null ? j : "null",
                )),
                (Z = te));
            } else Z = Se(c);
            yield Z.commitAndWaitForFlush(l.uploadInRealtime);
            var ne = p
              ? babelHelpers.extends({}, c, J)
              : babelHelpers.extends({}, c);
            (t != null && p && (ne.userRating = t),
              yield o("WAWebVoipLabMetricsFile").patchLabMetricsSelfRow(ne),
              o("WAWebVoipCallRatingStore").markPersistedFieldstatsHandedOff(n),
              Q.add(e),
              Te(e),
              o("WAWebVoipCallRatingStore").clearPendingFieldstats(e),
              o("WAWebCoreActionsODS").logCallFieldstatsHandoffCompleted(),
              o("WALogger").LOG(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Fieldstats sent successfully with user rating: ",
                    "",
                  ])),
                t != null ? t : "none",
              ),
              yield Oe());
          } catch (e) {
            throw (
              o("WAWebCoreActionsODS").logCallFieldstatsHandoffFailed(),
              o("WALogger")
                .ERROR(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] terminal WAM handoff failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-fieldstats-wam-handoff-failed", {
                  employeeSampling: 1,
                  sampling: 0.01,
                  sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                }),
              e
            );
          }
        })),
        Fe.apply(this, arguments)
      );
    }
    function Oe() {
      return Be.apply(this, arguments);
    }
    function Be() {
      return (
        (Be = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "initializeVoipWasm",
              );
            (e.cleanupUnfinishedCallStats(),
              yield o("WAWebVoipPersistentFS").syncPersistentFS(e),
              o("WALogger").LOG(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Fieldstats] cleaned up persisted fieldstats after WAM handoff",
                  ])),
              ));
          } catch (e) {
            (o(
              "WAWebCoreActionsODS",
            ).logCallFieldstatsPersistenceCleanupFailed(),
              o("WALogger")
                .ERROR(
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] failed to clean up persisted fieldstats after WAM handoff",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-fieldstats-persistence-cleanup-failed", {
                  employeeSampling: 1,
                  sampling: 0.01,
                  sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                }));
          }
        })),
        Be.apply(this, arguments)
      );
    }
    function We() {
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
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [IDBFS] Successfully synced filesystem in ",
                  "ms",
                ])),
              t,
            );
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [IDBFS] Failed to sync filesystem",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          });
      });
    }
    ((l.MEDIA_PERMISSION_LOOKUP_TIMEOUT_MS = z),
      (l.FRONTEND_VIDEO_SNAPSHOT_TIMEOUT_MS = j),
      (l.handleFieldstatsReady = ue),
      (l.sendStoredFieldstats = Re),
      (l.requestStoredFieldstatsSend = Ee),
      (l.syncVoipPersistentFSWithIdleCallback = We));
  },
  98,
);
