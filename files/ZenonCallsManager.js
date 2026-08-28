__d(
  "ZenonCallsManager",
  [
    "invariant",
    "FBLogger",
    "JSResourceForInteraction",
    "OverlayConfigManagerWithServerLayer",
    "PersistedQueue",
    "Promise",
    "RTWebIncomingRingConfiguration",
    "ZenonActorHooks",
    "ZenonAppProvider",
    "ZenonAuditedCheckpointLogId",
    "ZenonCallLogger",
    "ZenonChildClientPerfQPLLogProcessor",
    "ZenonChildQPLLogProcessor",
    "ZenonChildSWConnectFunnelLogProcessor",
    "ZenonCollisionContext",
    "ZenonConnectionStateManager",
    "ZenonConstants",
    "ZenonDGWSharedWorkerUtils",
    "ZenonDGWUtils",
    "ZenonDeviceId",
    "ZenonDismissReason",
    "ZenonE2ee",
    "ZenonE2eeMandatedStateManager",
    "ZenonEdgerayDNSCache",
    "ZenonEncryptionKeysManagerState",
    "ZenonGraphQLMWThriftMessageSender",
    "ZenonInfraActionsLogger",
    "ZenonLSCallStartEventLogProcessor",
    "ZenonLSCallSummaryLogProcessor",
    "ZenonLSE2EEStatsLogProcessor",
    "ZenonLSPeerConnectionSummaryLogProcessor",
    "ZenonLSStarRatingsLogProcessor",
    "ZenonLastCallLogProcessor",
    "ZenonLocalMediaSDK",
    "ZenonLoggingEventTypes",
    "ZenonMWThriftMessageTranslator",
    "ZenonMediaStatsUtil",
    "ZenonMessageSenderChain",
    "ZenonMqttMWThriftMessageSender",
    "ZenonODSLogger",
    "ZenonPeerConnectionConfig",
    "ZenonProductConnectFunnelLogProcessor",
    "ZenonProtocolConfiguration",
    "ZenonRTWebBrowserFeatureSupport",
    "ZenonReliabilityQPLLogProcessor",
    "ZenonRenderResolutionTracker",
    "ZenonRequestedMediaType",
    "ZenonSCTPConstants",
    "ZenonSDKRateLimiter",
    "ZenonSignalingChildTransport",
    "ZenonSignalingClient",
    "ZenonSignalingClientManager",
    "ZenonSignalingModel",
    "ZenonSignalingProtocol",
    "ZenonSimulcastUtils",
    "ZenonTransportEventEmitter",
    "ZenonTransportType",
    "ZenonTurnDiscovery",
    "ZenonULLCSignalingClient",
    "asyncToGeneratorRuntime",
    "fb-error",
    "filterMap",
    "findInMap",
    "getErrorSafe",
    "getZenonMqttChannel",
    "getZenonNavigationType",
    "isEmployeeTestUserZenonLogging",
    "promiseDone",
    "qex",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = (u = r("JSResourceForInteraction"))(
        "setE2eeIsMandatedForZenonLoggers",
      ).__setRef("ZenonCallsManager"),
      d = u("FallbackMQTTSignalingListener").__setRef("ZenonCallsManager"),
      m = u("IgSignalingListener").__setRef("ZenonCallsManager"),
      p = u("ZenonDGWMWThriftMessageSender").__setRef("ZenonCallsManager"),
      _ = u("ZenonDGWStreamManager").__setRef("ZenonCallsManager"),
      f = (function () {
        function t(t) {
          var a = this;
          ((this.$4 = new Map()),
            (this.$5 = null),
            (this.$7 = null),
            (this.$8 = new (r("ZenonRenderResolutionTracker"))()),
            (this.$9 = null),
            (this.$11 = new Map()),
            (this.$12 = new Map()));
          var i = t.getRelayEnvironment();
          ((this.$7 = new (r("ZenonSDKRateLimiter"))()),
            (this.$1 = new Map()),
            (this.$2 = t));
          var l = new (r("ZenonMessageSenderChain"))(
            [].concat(
              i && !o("ZenonDGWUtils").shouldUseDGW()
                ? [new (r("ZenonGraphQLMWThriftMessageSender"))(i)]
                : [],
            ),
          );
          if (
            (o("ZenonDGWUtils").shouldUseDGW() && r("qex")._("4380")
              ? (this.$10 = new (e || (e = n("Promise")))(function (e) {
                  o("ZenonDGWSharedWorkerUtils").setupDGWSharedWorker(
                    "CHILD",
                    l,
                    function (t) {
                      ((a.$9 = t), e());
                    },
                  );
                }))
              : o("ZenonDGWUtils").shouldUseDGW() && !r("qex")._("4380")
                ? ((this.$10 = (e || (e = n("Promise"))).resolve()),
                  r("promiseDone")(_.load(), function (e) {
                    (e.getManagerInstance().setWindowContext("CHILD"),
                      e
                        .getManagerInstance()
                        .setStreamOptions({
                          deviceId: o("ZenonDeviceId").getSignalingDeviceId(),
                          loggingId: r("uuidv4")(),
                          serviceId: "rpsignaling",
                        }));
                  }),
                  r("promiseDone")(p.load(), function (e) {
                    return l.addMessageSender(new e());
                  }))
                : ((this.$10 = (e || (e = n("Promise"))).resolve()),
                  l.addMessageSender(
                    new (r("ZenonMqttMWThriftMessageSender"))(),
                  )),
            (this.$3 = new (r("ZenonSignalingClientManager"))(
              r("ZenonSignalingClient"),
              function (e, t, n) {
                return a.onInviteReceived(e, t, n);
              },
              l,
              t,
            )),
            (this.$6 = this.$13()),
            o("ZenonEdgerayDNSCache").isEnabled())
          ) {
            var s = t.getEdgerayHostname();
            o("ZenonEdgerayDNSCache").warmUp(s != null ? s : void 0);
          }
        }
        var a = t.prototype;
        return (
          (a.$13 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
                callType: "mw",
                checkpoint: "[ZP] starting TURN discovery",
              });
              var e = Date.now();
              try {
                var t = yield o("ZenonTurnDiscovery").requestTurnCreds(
                  "ZenonPlatform",
                  "MW_PEER_ID",
                );
                if (
                  (r("ZenonPeerConnectionConfig").setTurnCredentials(t),
                  r("isEmployeeTestUserZenonLogging")())
                ) {
                  var n = {
                    ip: t.ip,
                    ip_6: t.ip_6,
                    ssl_tcp_port: t.ssl_tcp_port,
                    tcp_port: t.tcp_port,
                    udp_port: t.udp_port,
                  };
                  r("ZenonInfraActionsLogger").logCheckpoint({
                    callType: "mw",
                    checkpoint:
                      "[ZP] successfully acquired TURN credentials: " +
                      JSON.stringify(n) +
                      ". Took " +
                      (Date.now() - e) +
                      " ms.",
                  });
                } else
                  r("ZenonInfraActionsLogger").logCheckpoint({
                    auditId: r("ZenonAuditedCheckpointLogId")
                      .RP_ROOMS_INFRA_WWW__PLATFORM,
                    callType: "mw",
                    checkpoint:
                      "[ZP] successfully acquired TURN credentials. Took " +
                      (Date.now() - e) +
                      " ms.",
                  });
              } catch (t) {
                var a = r("getErrorSafe")(t);
                r("ZenonInfraActionsLogger").logError({
                  auditId: r("ZenonAuditedCheckpointLogId")
                    .RP_ROOMS_INFRA_WWW__ERROR,
                  callType: "mw",
                  checkpoint:
                    "[ZP] failed to get TURN credentials. Took " +
                    (Date.now() - e) +
                    " ms. Error message: " +
                    a.message,
                  errorDomain: "ZenonCallsManager_fetchTurnCredentials",
                });
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getLogProcessors = function () {
            var e = [
              o("ZenonLSCallSummaryLogProcessor")
                .ZenonLSCallSummaryLogProcessorConfig,
              o("ZenonChildQPLLogProcessor").ZenonChildQPLLogProcessorConfig,
              o("ZenonLSPeerConnectionSummaryLogProcessor")
                .ZenonLSPeerConnectionSummaryLogProcessorConfig,
              o("ZenonLSE2EEStatsLogProcessor")
                .ZenonLSE2EEStatsLogProcessorConfig,
              o("ZenonLSStarRatingsLogProcessor")
                .ZenonLSStarRatingsLogProcessorConfig,
              o("ZenonLastCallLogProcessor").ZenonLastCallLogProcessorConfig,
              o("ZenonChildClientPerfQPLLogProcessor")
                .ZenonChildClientPerfQPLLogProcessorConfig,
              o("ZenonLSCallStartEventLogProcessor")
                .ZenonLSCallStartEventLogProcessorConfig,
              o("ZenonReliabilityQPLLogProcessor")
                .ZenonReliabilityQPLLogProcessorConfig,
              o("ZenonChildSWConnectFunnelLogProcessor")
                .ZenonChildSWConnectFunnelLogProcessorConfig,
            ];
            return (
              (o("ZenonAppProvider").isMetaAI() ||
                o("ZenonAppProvider").isMessengerWebApp() ||
                o("ZenonAppProvider").isBizWebApp() ||
                o("ZenonAppProvider").isWidgetLiveChatApp() ||
                o("ZenonAppProvider").isMDCApp()) &&
                e.push(
                  o("ZenonProductConnectFunnelLogProcessor")
                    .ZenonProductConnectFunnelLogProcessorConfig,
                ),
              e
            );
          }),
          (a.onInviteReceived = function (t, n, a) {
            var e = this.$2
                .getConfigManager()
                .getZenonMultiCallSupportConfig()
                .getMaxConnectedCalls(),
              i = r("filterMap")(this.$1, function (e) {
                return e.getConnectionState() !== "terminated";
              }),
              l = r("filterMap")(i, function (e) {
                var n;
                return (
                  e.getRemoteSignalingID() ===
                  ((n = t.roomInfo.context) == null ? void 0 : n.serverInfoData)
                );
              });
            if (l.size > 0) {
              r("promiseDone")(a.respondToInvite("OK"));
              return;
            }
            var s =
              r("findInMap")(i, function (e) {
                return e.getRemoteSignalingID() == null;
              }) != null;
            i.size >= e &&
              (i.size > e &&
                r("FBLogger")("rtc_www").warn(
                  "We have more than supported number of calls occurring",
                ),
              o("ZenonActorHooks").ZenonActor.getAppID() ===
              (436761779744620).toString()
                ? r("promiseDone")(
                    a.sendDismiss(
                      o("ZenonDismissReason").ZenonDismissReason.InAnotherCall,
                    ),
                  )
                : r("promiseDone")(a.respondToInvite("IN_ANOTHER_CALL")),
              s ||
                r("promiseDone")(
                  a.sendDismiss(
                    o("ZenonDismissReason").ZenonDismissReason.InAnotherCall,
                  ),
                ));
          }),
          (a.join = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n = this,
                  a;
                if (e.ullcCallContext != null) return this.$14(e);
                r("PersistedQueue").eventEmitter.emit("active", null);
                var i = e.peerID;
                (i != null || s(0, 18600),
                  e.roomID != null ||
                    !o("ZenonCollisionContext").isCollisionContextEmpty(
                      e.joiningContext,
                    ) ||
                    s(0, 69267));
                var l = { userID: i },
                  u = e.actorID,
                  c = e.callMedia,
                  d = e.callTrigger,
                  m = e.clientCallID,
                  p = e.isSecondaryJoinRole,
                  _ = p === void 0 ? !1 : p,
                  f = e.joiningContext,
                  g = e.mwThriftRingRequest,
                  h = e.roomID,
                  y = h === void 0 ? null : h,
                  C = e.setE2eeModel,
                  b = e.signalingID,
                  v = e.usersToRing,
                  S = _
                    ? o("ZenonLoggingEventTypes").ZenonJoinMode.Secondary
                    : o("ZenonLoggingEventTypes").ZenonJoinMode.Primary,
                  R = { context: babelHelpers.extends({}, f), name: y };
                if (
                  (g != null &&
                    (g.messageHeader.clientSessionId = b != null ? b : ""),
                  g == null)
                ) {
                  var L = b == null || b === "" || b === "null",
                    E = "caller_join_signaling_id_present";
                  (L &&
                    (E =
                      "caller_join_signaling_id_missing__" +
                      r("getZenonNavigationType")()),
                    r("ZenonInfraActionsLogger").logCheckpoint({
                      auditId: r("ZenonAuditedCheckpointLogId")
                        .RP_ROOMS_INFRA_WWW__PLATFORM,
                      callTrigger: d,
                      checkpoint: E,
                      isCaller: !0,
                    }));
                }
                if (this.$1.get(m) != null) {
                  var k =
                    "Call ID already exists. Use a new clientCallID/clientSessionID if rejoining.";
                  r("FBLogger")("rtc_www")
                    .catching(r("fb-error").err(k))
                    .mustfixThrow("Call ID already exists.");
                  return;
                }
                r(
                  "ZenonE2eeMandatedStateManager",
                ).processE2eeMandatedStateFromProductAndRing(
                  (t = e.isE2eeMandated) != null ? t : !1,
                );
                var I = null;
                b != null && (I = this.$3.getSignalingClient(b));
                var T = null;
                if (u != null) T = u;
                else if (g != null) {
                  var D, x;
                  T =
                    (D =
                      (x = g.messageHeader.receiver) == null
                        ? void 0
                        : x.actorId) != null
                      ? D
                      : null;
                }
                I == null
                  ? (I = this.$3.createSignalingClient(
                      b,
                      l,
                      e.serverInfoData,
                      r("ZenonSignalingProtocol").MWPP,
                      R,
                      T,
                      o("ZenonActorHooks").ZenonActor.getID(),
                    ))
                  : I.getSignalingModel().setActorID(T);
                var $ = I.getSignalingModel(),
                  P = $.getSignalingID();
                (r("ZenonInfraActionsLogger").updateCachedValues({
                  signalingID: P,
                }),
                  e.serverInfoData != null && this.$15(P, e.serverInfoData));
                var N = g == null,
                  M = !1;
                if (g != null) {
                  var w;
                  M =
                    ((w = g.messageBody.ringRequest) == null ||
                    (w = w.offer) == null
                      ? void 0
                      : w.sdpString) != null;
                }
                $.getMediaModeManager().onJoin(N, v.length, M);
                var A = this.$4.get(m);
                if (A == null) {
                  var F,
                    O,
                    B =
                      c === r("ZenonRequestedMediaType").Video ||
                      c === r("ZenonRequestedMediaType").Audiovideo,
                    W = new (r("ZenonCallLogger"))({
                      config: this.$2.getConfigManager(),
                      initLoggerInfo: {
                        appID: o("ZenonActorHooks").ZenonActor.getAppID(),
                        callTrigger: d,
                        conferenceName: e.roomID,
                        disableTsData: r(
                          "ZenonE2eeMandatedStateManager",
                        ).isInfraE2eeMandated(),
                        isCaller: N,
                        isVideo: B,
                        joinMode: S,
                        localCallID:
                          (F =
                            (O = this.$5) == null
                              ? void 0
                              : O.getLocalCallIDFromParent()) != null
                            ? F
                            : r("uuidv4")(),
                        peerID: i,
                        protocol: r("ZenonSignalingProtocol").MWPP,
                        serverInfoData: e.serverInfoData,
                        signalingID: b != null ? b : P,
                      },
                      isE2eeMandated: r(
                        "ZenonE2eeMandatedStateManager",
                      ).isInfraE2eeMandated(),
                      processorConfigs: this.getLogProcessors(),
                      startFromNavigation: !0,
                    });
                  (this.$4.set(m, W),
                    r("promiseDone")(
                      this.$2.getSignalingListener().then(function (e) {
                        e.setLoggingEventHandler(function (e) {
                          return W.log(e);
                        });
                      }),
                    ),
                    (A = W));
                }
                var q = yield o("ZenonLocalMediaSDK").getCurrentPermissions();
                A.log({
                  cameraPermission: q == null ? void 0 : q.cameraState,
                  hasOfferInRingRequest: M,
                  isCaller: N,
                  microphonePermission: q == null ? void 0 : q.microphoneState,
                  name: "callJoinRequest",
                  rtcActorID: T,
                });
                var U = o("ZenonSimulcastUtils").shouldUseSimulcast();
                if (
                  (I != null || s(0, 23327),
                  $.getMediaModeManager().getMediaMode() === "p2p" &&
                    (yield this.$6),
                  o(
                    "ZenonRTWebBrowserFeatureSupport",
                  ).isInsertableStreamsSupported() && C != null)
                ) {
                  r("ZenonInfraActionsLogger").startTimer(
                    "[E2ee] Create E2ee Components",
                  );
                  var V = function (t) {
                      n.endCall(m, "EndToEndEncryptionInvariantViolated", t);
                    },
                    H = function (t, r) {
                      n.sendGenericDataMessage(
                        m,
                        o("ZenonSCTPConstants")
                          .E2EE_DATA_MESSAGE_MEDIA_CHANNEL_TOPIC,
                        r,
                        { recipientIDs: [t] },
                        o("ZenonTransportType").ZenonTransportType.SCTP,
                      );
                    };
                  (yield r("ZenonE2ee").createE2eeComponents(A, I, C, V, H, !1),
                    A.log({
                      isE2eeStackReady: r("ZenonE2ee").isE2eeStackReady(),
                      name: "e2eeComponentCreated",
                    }),
                    r("ZenonInfraActionsLogger").stopTimer(
                      "[E2ee] Create E2ee Components",
                    ));
                }
                r("ZenonE2eeMandatedStateManager").isInfraE2eeMandated() &&
                  !r("ZenonE2ee").isE2eeStackReady() &&
                  (o(
                    "ZenonRTWebBrowserFeatureSupport",
                  ).isInsertableStreamsSupported()
                    ? this.endCall(
                        m,
                        "EndToEndEncryptionInvariantViolated",
                        "e2ee stack is not initialized: " +
                          r(
                            "ZenonE2ee",
                          ).getE2eeComponentCreationFailureMessage(),
                      )
                    : this.endCall(
                        m,
                        "EndToEndEncryptionInvariantViolated",
                        "E2ee is mandated, but Insertable Streams API is not supported",
                      ));
                var G = new (r("OverlayConfigManagerWithServerLayer"))(
                    this.$2.getConfigManager(),
                  ),
                  z = new (r("ZenonConnectionStateManager"))(
                    m,
                    I,
                    N ? "outgoing" : "incoming",
                    G,
                    A,
                    U,
                    this.$8,
                  );
                if (
                  (this.$1.set(m, z),
                  !o(
                    "RTWebIncomingRingConfiguration",
                  ).isSupportedOutboundClient())
                ) {
                  r("promiseDone")(
                    this.endCall(
                      e.clientCallID,
                      "VersionUnsupported",
                      "Browser not supported",
                    ),
                  );
                  return;
                }
                (yield this.$10,
                  r("qex")._("4380") &&
                    A.log({ name: "sharedWorkerSetupComplete" }),
                  yield z.start(e));
                var j = o("ZenonDGWUtils").shouldUseDGW() ? "dgw" : "mqtt",
                  K =
                    (a = o("ZenonActorHooks").ZenonActor.getAppID()) != null
                      ? a
                      : "0";
                if (
                  (r("ZenonODSLogger").logSignalingCounter(
                    "join." + j + "." + K,
                  ),
                  r("ZenonInfraActionsLogger").logCheckpoint({
                    auditId: r("ZenonAuditedCheckpointLogId")
                      .RP_ROOMS_INFRA_WWW__PLATFORM,
                    callType: "mw",
                    checkpoint:
                      "[ZP] ZenonCallsManager_join called, starting connectionStateManager",
                    conferenceName: e.roomID,
                    isCaller: N,
                    signalingID: b,
                  }),
                  g != null)
                ) {
                  var Q = o(
                    "ZenonMWThriftMessageTranslator",
                  ).toSignalingMessage(g);
                  Q != null && this.$3.receiveMessage(Q);
                }
                o("ZenonMediaStatsUtil").shouldUseTSLog()
                  ? r("ZenonInfraActionsLogger").logCheckpoint({
                      auditId: r("ZenonAuditedCheckpointLogId")
                        .RP_ROOMS_INFRA_WWW__PLATFORM,
                      callType: "mw",
                      checkpoint: "[ZP] Eligible for tslog logging",
                      conferenceName: e.roomID,
                      isCaller: N,
                      serverInfoData: e.serverInfoData,
                      signalingID: this.$16(P, m),
                    })
                  : r("ZenonInfraActionsLogger").logCheckpoint({
                      auditId: r("ZenonAuditedCheckpointLogId")
                        .RP_ROOMS_INFRA_WWW__PLATFORM,
                      callType: "mw",
                      checkpoint: "[ZP] Not eligible for tslog logging",
                      conferenceName: e.roomID,
                      isCaller: N,
                      serverInfoData: e.serverInfoData,
                      signalingID: this.$16(P, m),
                    });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$14 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a,
                  i,
                  l = this,
                  u = t.clientCallID,
                  c = t.joiningContext,
                  d = t.peerID,
                  m = t.signalingID,
                  p = t.ullcCallContext,
                  f = t.usersToRing;
                (p != null || s(0, 148301), d != null || s(0, 148302));
                var g = { userID: d },
                  h = { context: babelHelpers.extends({}, c), name: null },
                  y = m != null && m !== "" ? m : r("uuidv4")(),
                  C = new (r("ZenonSignalingModel"))(
                    y,
                    null,
                    { userID: o("ZenonActorHooks").ZenonActor.getID() },
                    g,
                    h,
                    r("ZenonSignalingProtocol").ULLC,
                    null,
                  ),
                  b = new (r("ZenonMessageSenderChain"))([]),
                  v = o("ZenonProtocolConfiguration").getConfiguration(C, b),
                  S = v.eventAggregator,
                  R = v.transactionManager,
                  L = new (r("ZenonULLCSignalingClient"))(
                    C,
                    R,
                    S,
                    function () {},
                    this.$2,
                  );
                L.setAiSessionCallingParams(
                  (a = t.aiSessionCallingParams) != null ? a : null,
                );
                var E = yield L.initializeMediaOnlySdpInfo(p, {
                    enableDtlsInStun: p.enableDtlsInStun,
                  }),
                  k = L.getMediaOnlySdpInfo();
                if (!(!E || k == null)) {
                  var I = new (r("OverlayConfigManagerWithServerLayer"))(
                      this.$2.getConfigManager(),
                    ),
                    T = new (r("ZenonCallLogger"))({
                      config: this.$2.getConfigManager(),
                      initLoggerInfo: {
                        appID: o("ZenonActorHooks").ZenonActor.getAppID(),
                        callTrigger: t.callTrigger,
                        conferenceName: null,
                        disableTsData: !1,
                        isCaller: !0,
                        isVideo: !1,
                        joinMode: o("ZenonLoggingEventTypes").ZenonJoinMode
                          .Primary,
                        localCallID: r("uuidv4")(),
                        peerID: d,
                        protocol: r("ZenonSignalingProtocol").ULLC,
                        rtcActorID:
                          (i = t.actorID) != null
                            ? i
                            : o("ZenonActorHooks").ZenonActor.getID(),
                        serverInfoData: null,
                        signalingID: C.getSignalingID(),
                      },
                      isE2eeMandated: !1,
                      processorConfigs: this.getLogProcessors(),
                      startFromNavigation: !0,
                    });
                  this.$4.set(u, T);
                  var D = new (r("ZenonConnectionStateManager"))(
                    u,
                    L,
                    "outgoing",
                    I,
                    T,
                    !1,
                    this.$8,
                  );
                  this.$1.set(u, D);
                  var x = function (t) {
                      var e;
                      ((e = l.$11.get(u)) == null || e.close(),
                        t == null || t.close(),
                        l.$12.delete(u),
                        l.$11.delete(u),
                        l.$1.delete(u),
                        l.$4.delete(u));
                    },
                    $ = null;
                  try {
                    var P,
                      N = yield (e || (e = n("Promise"))).all([
                        _.load(),
                        r("JSResourceForInteraction")(
                          "ZenonDGWULLCThriftTransport",
                        )
                          .__setRef("ZenonCallsManager")
                          .load(),
                      ]),
                      M = N[0],
                      w = N[1],
                      A = new M();
                    (A.setStreamOptions(
                      babelHelpers.extends(
                        {
                          deviceId: o("ZenonDeviceId").getSignalingDeviceId(),
                          loggingId: r("uuidv4")(),
                        },
                        p.dgwOverrideUrl != null
                          ? { overrideUrl: p.dgwOverrideUrl }
                          : void 0,
                        {
                          serviceId: "rpsignaling",
                          streamGroupAppHeaders: {
                            stargate_rpsignaling_use_gedge: "true",
                            "stream-group": "rpsignaling",
                            useUnifiedStream: "true",
                          },
                        },
                      ),
                    ),
                      ($ = new w(A)),
                      L.setUllcDGWTransport($),
                      this.$12.set(u, $));
                    var F = yield D.startUllc(t, k);
                    if (F == null) {
                      x($);
                      return;
                    }
                    (this.$11.set(u, F),
                      $.setOnDataReceived(function (e, t) {
                        var n,
                          r = t.header.serverInfoData;
                        if (r != null && r !== "") {
                          (T.updateLogIdentifiers({ sharedCallID: r }),
                            T.log({
                              conferenceName: r,
                              name: "setRemoteSignalingID",
                              remoteSignalingID: r,
                            }));
                          var o = L.getSignalingModel();
                          o.getRemoteSignalingID() !== r &&
                            (o.updateRemoteSignalingID(r), o.notify());
                        }
                        var a = (n = t.body) == null ? void 0 : n.joinResponse;
                        if (a != null) {
                          var i = a.edgerayVipUpdatedIpV4 || "",
                            l = a.edgerayVipUpdatedIpV6 || "",
                            s = a.serverUfragUpdated || "",
                            u = {
                              dnsAddress: k.edgerayAddress.dnsAddress,
                              ip4Address: i || k.edgerayAddress.ip4Address,
                              ip6Address: l || k.edgerayAddress.ip6Address,
                              port: k.edgerayAddress.port,
                              vipType: k.edgerayAddress.vipType,
                            };
                          F.connectWithServerResponse(s, u).then(
                            function (e) {},
                          );
                        }
                      }));
                    var O = babelHelpers.extends(
                        {},
                        (P = t.appMessages) != null ? P : {},
                      ),
                      B = t.initialSyncStates;
                    if (B != null) {
                      var W = yield r("JSResourceForInteraction")(
                          "ZenonStateSyncSerializer",
                        )
                          .__setRef("ZenonCallsManager")
                          .load(),
                        q = W.serializeInputState;
                      for (var U of B) {
                        var V = U[0],
                          H = U[1],
                          G = q(V, H);
                        G != null
                          ? L.addBinaryAppMessage(V, G)
                          : (O[V] = JSON.stringify(H));
                      }
                    }
                    (L.sendInvite(f, O), L.sendClientInfo(new Map()));
                  } catch (e) {
                    (r("FBLogger")("rtc_www").warn(
                      "ULLC join failed: %s",
                      e instanceof Error ? e.message : String(e),
                    ),
                      x($));
                  }
                }
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.$16 = function (t, n) {
            return t != null ? t : n;
          }),
          (a.addLocalTrack = function (r, o) {
            var t;
            return (t = this.$17(r, function (e) {
              return e.addLocalTrack(o);
            })) != null
              ? t
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.removeLocalTrack = function (r, o) {
            var t;
            return (t = this.$17(r, function (e) {
              return e.removeLocalTrack(o);
            })) != null
              ? t
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.muteTrack = function (r, o, a) {
            var t;
            return (
              a === void 0 && (a = !1),
              this.$18("muteTrack") &&
              (t = this.$17(r, function (e) {
                return e.muteTrack(o, a);
              })) != null
                ? t
                : (e || (e = n("Promise"))).resolve()
            );
          }),
          (a.unmuteTrack = function (r, o, a) {
            var t;
            return (
              a === void 0 && (a = !1),
              this.$18("unmuteTrack") &&
              (t = this.$17(r, function (e) {
                return e.unmuteTrack(o, a);
              })) != null
                ? t
                : (e || (e = n("Promise"))).resolve()
            );
          }),
          (a.stopLocalTrack = function (r, o) {
            var t;
            return (t = this.$17(r, function (e) {
              return e.stopLocalTrack(o);
            })) != null
              ? t
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.initializeLogging = function (t, n) {
            var e = n.callTrigger,
              a = n.initializeVideo,
              i = n.isE2eeMandated,
              l = n.peerID,
              s = n.roomID,
              u = s === void 0 ? null : s,
              d = n.serverInfoData,
              m = n.signalingID,
              p = n.startFromNavigation;
            if (
              m != null &&
              (i &&
                r("promiseDone")(c.load(), function (e) {
                  return e(m);
                }),
              r("ZenonInfraActionsLogger").updateCachedValues({
                signalingID: String(m),
              }),
              !this.$4.has(t))
            ) {
              var _,
                f,
                g = new (r("ZenonCallLogger"))({
                  config: this.$2.getConfigManager(),
                  initLoggerInfo: {
                    appID: o("ZenonActorHooks").ZenonActor.getAppID(),
                    callTrigger: e,
                    conferenceName: u,
                    isCaller: !0,
                    isVideo: a,
                    localCallID:
                      (_ =
                        (f = this.$5) == null
                          ? void 0
                          : f.getLocalCallIDFromParent()) != null
                        ? _
                        : r("uuidv4")(),
                    peerID: l,
                    protocol: r("ZenonSignalingProtocol").MWPP,
                    serverInfoData: d,
                    signalingID: String(m),
                  },
                  isE2eeMandated: i,
                  processorConfigs: this.getLogProcessors(),
                  startFromNavigation: p,
                });
              (this.$4.set(t, g),
                r("promiseDone")(
                  this.$2.getSignalingListener().then(function (e) {
                    e.setLoggingEventHandler(function (e) {
                      return g.log(e);
                    });
                  }),
                ));
            }
          }),
          (a.initializeSignaling = function (t, n, a, i) {
            var e = this;
            return this.$2.getSignalingListener().then(function (l) {
              if (
                (l.subscribe(
                  function (t) {
                    return e.$3.receiveMessage(t);
                  },
                  function (e) {},
                ),
                o("ZenonDGWUtils").shouldUseMQTTFallback() &&
                  (o("ZenonAppProvider").isInstagramApp()
                    ? (r("getZenonMqttChannel")(),
                      r("promiseDone")(m.load(), function (t) {
                        var n = new t();
                        n.subscribe(
                          function (t) {
                            return e.$3.receiveMessage(t);
                          },
                          function (e) {},
                        );
                      }))
                    : r("promiseDone")(d.load(), function (t) {
                        var n = new t(
                          o("ZenonDeviceId").getSignalingDeviceId(),
                          "CHILD",
                        );
                        n.subscribe(
                          function (t) {
                            return e.$3.receiveMessage(t);
                          },
                          function (e) {},
                        );
                      })),
                !o("ZenonDGWUtils").shouldUseDGW())
              ) {
                var s = r("getZenonMqttChannel")();
                r("ZenonInfraActionsLogger").logCheckpoint({
                  auditId: r("ZenonAuditedCheckpointLogId")
                    .RP_ROOMS_INFRA_WWW__PLATFORM,
                  checkpoint:
                    "[ZP] Subscribed to MQTT channels. MQTT connection state: " +
                    s.getConnectionState(),
                });
              }
              var u = e.$2
                .getConfigManager()
                .getZenonStartCallImmediatelyConfig()
                .isEnabled();
              if (u) r("ZenonTransportEventEmitter").emitJoinReady();
              else if (n != null) {
                var c = e.$2
                  .getConfigManager()
                  .getZenonPlatformSupportConfig()
                  .getParentWindowConnectionTimeoutMs();
                e.$5 = new (r("ZenonSignalingChildTransport"))({
                  onLocalCallIDUpdate: function (n) {
                    e.$4.forEach(function (e) {
                      e.updateLogIdentifiers({ localCallID: n });
                    });
                  },
                  parentNonce: n,
                  peerID: t,
                  roomID: a,
                  serverInfoData: i,
                  timeoutMS: c,
                });
              } else
                r(
                  "ZenonTransportEventEmitter",
                ).emitParentWindowConnectionTimeout();
              e.$5 &&
                r("promiseDone")(e.$5.connect(), function (e) {
                  e.state === "join_ready"
                    ? r("ZenonTransportEventEmitter").emitJoinReady(
                        e.mwThriftRingRequest,
                      )
                    : r(
                        "ZenonTransportEventEmitter",
                      ).emitParentWindowConnectionTimeout();
                });
            });
          }),
          (a.endCall = function (a, i, l) {
            var t = o("ZenonDismissReason").endCallToDismissReason(i),
              s = this.$11.get(a);
            if (s != null) {
              (s.sendDismiss("HANGUP_CALL", l), s.close(), this.$11.delete(a));
              var u = this.$12.get(a);
              u != null && (u.close(), this.$12.delete(a));
            }
            var c = this.$1.get(a);
            if (c) return c.end(t, l);
            var d = this.$4.get(a);
            return (
              d != null
                ? d.log({
                    endCallReason: t,
                    endCallSubreason: l,
                    isRemoteEnded: !1,
                    name: "callEnded",
                  })
                : l !== o("ZenonConstants").DID_NOT_INITIATE &&
                  r("FBLogger")("rtc_www").warn(
                    "ZenonCallLogger missing for endCall",
                  ),
              (e || (e = n("Promise"))).resolve()
            );
          }),
          (a.ringParticipants = function (r, o, a) {
            var t;
            return (t = this.$17(r, function (e) {
              return e.addParticipants(o, a);
            })) != null
              ? t
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.removeParticipants = function (r, o) {
            var t;
            return (t = this.$17(r, function (e) {
              return e.removeParticipants(o);
            })) != null
              ? t
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.replaceLocalTrack = function (r, o, a, i) {
            var t;
            return (
              i === void 0 && (i = !1),
              (t = this.$17(r, function (e) {
                return e.replaceLocalTrack(o, a, i);
              })) != null
                ? t
                : (e || (e = n("Promise"))).resolve()
            );
          }),
          (a.forceEncodingEnabled = function (r, o) {
            var t;
            return (t = this.$17(r, function (e) {
              return e.forceEncodingEnabled(o);
            })) != null
              ? t
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.submitRating = function (t, n, r, o, a, i) {
            (o === void 0 && (o = null),
              a === void 0 && (a = null),
              i === void 0 && (i = null));
            var e = this.$4.get(t);
            e &&
              (n != null &&
                e.log({
                  isBinaryRating: r || !1,
                  name: "callRated",
                  rating: n,
                }),
              (o != null || a != null || i != null) &&
                e.log({
                  feedback: o,
                  name: "callSurveySubmitted",
                  surveyChoice: i,
                  surveyIssue: a,
                }));
          }),
          (a.getCalls = function () {
            return this.$1;
          }),
          (a.setCalls = function (t) {
            this.$1 = t;
          }),
          (a.createDataMessageSubscription = function (r, o, a, i, l) {
            var t;
            return (t = this.$17(r, function (e) {
              return e.createDataMessageSubscription(o, a, i, l);
            })) != null
              ? t
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.removeDataMessageSubscription = function (r, o, a) {
            var t;
            return (t = this.$17(r, function (e) {
              return e.removeDataMessageSubscription(o, a);
            })) != null
              ? t
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.sendGenericDataMessage = function (r, a, i, l, s) {
            var t;
            return s !== o("ZenonTransportType").ZenonTransportType.SCTP &&
              !this.$18("dataMessage-" + a)
              ? (e || (e = n("Promise"))).resolve()
              : (t = this.$17(r, function (e) {
                    return e.sendGenericDataMessage(a, i, l, s);
                  })) != null
                ? t
                : (e || (e = n("Promise"))).resolve();
          }),
          (a.registerDataMessageService = function (r, o, a) {
            var t;
            return (t = this.$17(r, function (e) {
              return e.registerDataMessageService(o, a);
            })) != null
              ? t
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.getLogIdentifiers = function (t) {
            var e;
            return (e = this.$4.get(t)) == null
              ? void 0
              : e.getLogIdentifiers();
          }),
          (a.subscribeToRemoteVideo = function (r, o, a) {
            var t = this.$1.get(r);
            return t != null
              ? t.subscribeToRemoteVideo(o, a)
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.updateStateSyncTopic = function (r, o, a) {
            var t;
            return this.$18("updateStateSync-" + o) &&
              (t = this.$17(r, function (e) {
                return e.updateStateSyncTopic(o, a);
              })) != null
              ? t
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.unsubscribeFromStateSyncTopic = function (r, o) {
            var t;
            return (t = this.$17(r, function (e) {
              return e.unsubscribeFromStateSyncTopic(o);
            })) != null
              ? t
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.approveParticipants = function (r, o) {
            var t;
            return (t = this.$17(r, function (e) {
              return e.approveParticipants(o);
            })) != null
              ? t
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.denyParticipants = function (r, o) {
            var t;
            return (t = this.$17(r, function (e) {
              return e.denyParticipants(o);
            })) != null
              ? t
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.getEncryptionKeysManagerState = function (t) {
            var e = this.$17(t, function (e) {
              return e.getEncryptionKeysManagerState();
            });
            return e === null
              ? o(
                  "ZenonEncryptionKeysManagerState",
                ).ZenonEncryptionKeysManagerState$DefaultConstructor()
              : e;
          }),
          (a.getSignalingProtocol = function (t) {
            var e = this;
            return this.$17(t, function (t) {
              var n;
              return (n = e.$3.getSignalingClient(t.getSignalingID())) == null
                ? void 0
                : n.getSignalingModel().getProtocol();
            });
          }),
          (a.getMediaMode = function (t) {
            var e = this;
            return this.$17(t, function (t) {
              var n;
              return (n = e.$3.getSignalingClient(t.getSignalingID())) == null
                ? void 0
                : n.getSignalingModel().getMediaModeManager().getMediaMode();
            });
          }),
          (a.getSCTPDataChannelState = function (t, n) {
            return this.$17(t, function (e) {
              return e.getSCTPDataChannelState(n);
            });
          }),
          (a.getConferenceName = function (t) {
            var e = this;
            return this.$17(t, function (t) {
              var n;
              return (n = e.$3.getSignalingClient(t.getSignalingID())) == null
                ? void 0
                : n.getSignalingModel().getRoomInfo().name;
            });
          }),
          (a.$18 = function (t) {
            return this.$7 && !this.$7.take(t)
              ? (r("FBLogger")("rtc_www").mustfix(
                  "[ZP] Dropping %s invocation. This SDK method is being called too rapidly.",
                  t,
                ),
                !1)
              : !0;
          }),
          (a.$17 = function (t, n) {
            var e = this.$1.get(t);
            return e != null ? n(e) : null;
          }),
          (a.$15 = function (t, n) {
            var e = this.$3.getSignalingClientsWithRemoteSignalingID(n);
            e.forEach(function (e) {
              e.getSignalingModel().getSignalingID() !== t &&
                r("promiseDone")(e.silentlyTerminate());
            });
          }),
          (a.updateRenderedResolutionMap = function (t) {
            this.$8.setRenderResolutionMap(t);
          }),
          t
        );
      })();
    l.default = f;
  },
  98,
);
