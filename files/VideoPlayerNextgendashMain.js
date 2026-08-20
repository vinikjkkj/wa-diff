__d(
  "VideoPlayerNextgendashMain",
  [
    "VideoPlayerNextgendashConnectionMainToWorker",
    "VideoPlayerNextgendashFetchedResource",
    "VideoPlayerNextgendashMediaElement",
    "VideoPlayerNextgendashMediaUtils",
    "VideoPlayerNextgendashParsedManifest",
    "VideoPlayerNextgendashRetryLogic",
    "VideoPlayerNextgendashStateMachine",
    "deepEquals",
    "emptyFunction",
    "nextgendasherr",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "playerStateForDebug",
        "playerStateFromMainSent",
        "playerStateFromWorker",
        "workerConnection",
      ],
      s = ["pendingEvents"];
    function u(e, t) {
      var n,
        r,
        a,
        i,
        l,
        s = e.config,
        u = t.mediaElement.state.mediaElementSnapshot,
        c =
          s.playheadPredictIntervalMs > 0
            ? e.host.clockPerfOriginMs +
              ((n =
                (r = t.mediaElement.state.mediaElementSnapshotClock) == null
                  ? void 0
                  : r.perfMs) != null
                ? n
                : e.host.clock().perfMs)
            : 0,
        d =
          u != null
            ? s.debugOverlay
              ? {
                  bufferedForDebug: u.buffered,
                  bufferedFully: o(
                    "VideoPlayerNextgendashMediaUtils",
                  ).isFullyBuffered(u),
                  currentTime: u.currentTime,
                  currentTimeAbsoluteMs: c,
                  duration: u.duration,
                  error: u.error,
                  paused: u.paused,
                  playbackRate: u.playbackRate,
                  readyState: u.readyState,
                }
              : {
                  bufferedFully: o(
                    "VideoPlayerNextgendashMediaUtils",
                  ).isFullyBuffered(u),
                  currentTime: u.currentTime,
                  currentTimeAbsoluteMs: c,
                  duration: u.duration,
                  error: u.error,
                  paused: u.paused,
                  playbackRate: u.playbackRate,
                  readyState: u.readyState,
                }
            : null,
        m = (a = t.scrollPositionAPI) == null ? void 0 : a.getCurrent();
      return {
        abrConfig: t.abrConfig,
        configFromMain: s,
        dashManifestData:
          t.state === "linked_to_worker" &&
          t.dashManifestParsed.state.state === "parsed"
            ? t.dashManifestParsed.state.data
            : null,
        devicePixelRatio: (i = window.devicePixelRatio) != null ? i : 1,
        isDocumentHidden: document.hidden,
        mediaElementSnapshot: d,
        mediaSourceIndexApplied:
          (l = t.mediaElement.state.mediaSourceIndex) != null ? l : null,
        playerViewportDimensions: t.playerViewportDimensions,
        scrollPositionInfo: m,
        selectedMediaVariant: t.selectedMediaVariant,
        selectedVideoQualityDisplayLabel: t.selectedVideoQualityDisplayLabel,
        shouldSendPlayerStateForDebug: t.shouldSendPlayerStateForDebug,
      };
    }
    var c = o("VideoPlayerNextgendashStateMachine").defineStateMachine(
      null,
      function (e) {
        var t = e.args,
          n = t.abrConfig,
          r = t.audioOnly,
          a = t.initialExpiredVideoUrlRefreshHandlerState,
          i = t.initialMediaVariantIfLangExistsInManifest,
          l = t.onBufferingChanged,
          s = t.onMediaSourceAttachedChanged,
          u = t.playerViewportDimensionsInitial,
          c = t.workerTypeInitial,
          d = e.makeChildSm,
          m = e.sendToSelf,
          p = e.thisSm;
        return {
          abrConfig: n,
          audioOnly: r,
          dashManifestFromUrl: null,
          dashManifestFromUrlRequestIndex: 0,
          dashManifestParsed: d(
            "dashManifestParsed",
            o("VideoPlayerNextgendashParsedManifest")
              .VideoPlayerNextgendashParsedManifestSM,
            {
              audioOnly: r,
              initialExpiredVideoUrlRefreshHandlerState: a,
              onTransitioned: function (t, n, r) {
                m(
                  {
                    fromState: t,
                    toState: n,
                    type: "_dash_manifest_parsed_transitioned",
                  },
                  r,
                );
              },
            },
          ),
          forceKickPlayheadLastMovedAtPerfMs: null,
          forceKickPlayheadLastSeenTimeSec: null,
          initialMediaVariantIfLangExistsInManifest: i,
          lastDashManifestUrl: null,
          lastForcedWorkerKickPerfMs: null,
          liveConsecutiveWatchdogKicks: 0,
          liveManifestRefreshRetryCount: 0,
          liveManifestRefreshTimerHandle: null,
          liveNoProgressWatchdogTimerHandle: null,
          liveStartTimestampSecIsManifestDerived: !1,
          mediaElement: d(
            "mediaElement",
            o("VideoPlayerNextgendashMediaElement")
              .VideoPlayerNextgendashMediaElementSM,
            {
              getWorkaroundForSegmentBufferedInsufficientlyMediaTimeRanges:
                function () {
                  var e;
                  return (e = p.state.playerStateFromWorker) == null
                    ? void 0
                    : e.workaroundForSegmentBufferedInsufficientlyMediaTimeRanges;
                },
              logPlayerWarning: function (t) {
                m({ type: "_log_player_warning", warning: t });
              },
              onBufferingChanged: l,
              onMediaSourceAttachedChanged: s,
              onRequestRecoveryFromSourceReset: function (t) {
                m({
                  mediaSourceIndex: t,
                  type: "_request_recovery_from_source_reset",
                });
              },
              onTransitioned: function (t, n, r) {
                m({ type: "_media_element_transitioned" }, r);
              },
            },
          ),
          pendingEvents: o(
            "VideoPlayerNextgendashStateMachine",
          ).skipAutoDisposeInsideThisObject([]),
          playerViewportDimensions: u,
          playheadLastMovedAtPerfMs: null,
          playheadLastSeenTimeSec: null,
          scrollPositionAPI: null,
          scrollPositionSubscription: null,
          selectedMediaVariant: null,
          selectedVideoQualityDisplayLabel: null,
          shouldSendPlayerStateForDebug: !1,
          state: "waiting_worker_connection",
          workerType: c,
        };
      },
      function (t) {
        var n = t.args,
          a = n.nextgendashInstanceIndex,
          i = n.onError,
          l = n.onManifestUpdated,
          c = n.onPrefetchCacheResult,
          h = n.onSendHaltedToWorkerChanged,
          S = n.onVideoRepresentationChanged,
          B = n.playerInstanceKey,
          U = n.playerSubOrigin,
          H = n.prefetchResultInitial,
          z = n.videoFBID,
          j = n.workerPortFactories,
          K = t.env,
          Q = t.event,
          X = t.makeChildSm,
          Y = t.sendToOther,
          J = t.sendToSelf,
          Z = t.state,
          ee = t.unexpectedEvent;
        if (Z.state !== "__disposed__" && Q.type === "debug_config")
          return Z.state === "linked_to_worker"
            ? p(
                K,
                B,
                babelHelpers.extends({}, Z, {
                  shouldSendPlayerStateForDebug:
                    Q.shouldSendPlayerStateForDebug,
                }),
                Q.type,
              )
            : babelHelpers.extends({}, Z, {
                shouldSendPlayerStateForDebug: Q.shouldSendPlayerStateForDebug,
              });
        if (Z.state !== "__disposed__" && Q.type === "_log_player_warning")
          return (ne(Q.warning), Z);
        if (
          Z.state !== "__disposed__" &&
          Q.type === "update_player_viewport_dimensions"
        )
          return babelHelpers.extends({}, Z, {
            playerViewportDimensions: Q.playerViewportDimensions,
          });
        if (
          Z.state !== "__disposed__" &&
          Q.type === "update_expired_video_url_refresh_handler"
        ) {
          Y(Z.dashManifestParsed, {
            expiredVideoUrlRefreshHandlerState:
              Q.expiredVideoUrlRefreshHandlerState,
            type: "update_expired_video_url_refresh_handler",
          });
          return;
        }
        if (
          Z.state !== "__disposed__" &&
          Q.type === "update_scroll_position_api"
        ) {
          Z.scrollPositionSubscription != null &&
            Z.scrollPositionSubscription.remove();
          var te = null;
          return (
            (te = Q.scrollPositionAPI.subscribe(function () {
              J({ type: "_send_state_to_worker" });
            })),
            Z.state === "linked_to_worker"
              ? p(
                  K,
                  B,
                  babelHelpers.extends({}, Z, {
                    scrollPositionAPI: Q.scrollPositionAPI,
                    scrollPositionSubscription: te,
                  }),
                  Q.type,
                )
              : babelHelpers.extends({}, Z, {
                  scrollPositionAPI: Q.scrollPositionAPI,
                  scrollPositionSubscription: te,
                })
          );
        }
        function ne(e) {
          Z.state !== "__disposed__" &&
            K.logging.log(K, {
              error: o("nextgendasherr").nextgendasherrFromCause(
                K,
                e,
                "VideoPlayerNextgendashMainWith" + Z.workerType,
              ),
              type: "generic_error_as_warning",
            });
        }
        function re(e) {
          var t = o(
            "VideoPlayerNextgendashConnectionMainToWorker",
          ).connectToWorker(K, j, e, B, function (e) {
            if (e.type === "from_worker_to_main_prefetch_cache_result") {
              c == null ||
                c({
                  hit: e.hit,
                  prefetchKey: e.prefetchKey,
                  representationID: e.representationID,
                });
              return;
            }
            J(e);
          });
          return (h == null || h(t.sendHaltedToWorker), t);
        }
        function oe(e, t) {
          (h == null || h(null),
            e.sendToWorker({
              eventToWorker: {
                playerInstanceKey: B,
                type: "from_main_to_worker_unlink_player",
              },
              type: "send_to_worker",
            }),
            e.disconnectFromWorker(t));
        }
        function ae(t) {
          if (
            Z.state !== "__disposed__" &&
            (Z.workerType === "RealWorker" || Z.workerType === "RealWorkerV2")
          ) {
            var n,
              r = o("nextgendasherr").nextgendasherrFromCause(
                K,
                t,
                "VideoPlayerNextgendashMainWith" +
                  Z.workerType +
                  "/FallbackToVirtualWorker",
                "Fallback to VirtualWorker from " + Z.workerType,
              );
            K.logging.log(K, { error: r, type: "generic_error" });
            var a = Z.playerStateForDebug,
              i = Z.playerStateFromMainSent,
              l = Z.playerStateFromWorker,
              s = Z.workerConnection,
              u = babelHelpers.objectWithoutPropertiesLoose(Z, e);
            return (
              s != null && oe(s, r),
              babelHelpers.extends({}, u, {
                pendingEvents: (n = u.pendingEvents) != null ? n : [],
                state: "waiting_worker_connection",
                workerType: "VirtualWorker",
              })
            );
          } else throw t;
        }
        function ie(e, t, n, r) {
          var o =
            r != null
              ? {
                  mediaSourceHandle: r,
                  mediaSourceIndex: t,
                  type: "update_media_source",
                }
              : n != null
                ? {
                    mediaSource: n,
                    mediaSourceIndex: t,
                    type: "update_media_source",
                  }
                : null;
          if (o == null)
            throw ee(
              "throw",
              "Expected either mediaSourceHandle or mediaSource from Worker.",
            );
          Y(e, o);
        }
        function le(e, t) {
          var n,
            r,
            o =
              (n = e == null ? void 0 : e.targetRepresentationId.video) != null
                ? n
                : null,
            a =
              (r = t == null ? void 0 : t.targetRepresentationId.video) != null
                ? r
                : null;
          a !== o &&
            K.workQueue.enqueueWork(function () {
              S(o, a);
            });
        }
        function se(e, t) {
          var n = t.dashManifestUrl,
            a = t.dashManifestXmlString;
          if (a != null)
            return (
              Y(e.dashManifestParsed, {
                baseURLFallback: n,
                dashManifestXmlString: a,
                type: "parse_dash_manifest_xml",
              }),
              babelHelpers.extends({}, e, {
                dashManifestFromUrl: null,
                lastDashManifestUrl: n != null ? n : e.lastDashManifestUrl,
              })
            );
          var i = e.dashManifestFromUrlRequestIndex,
            l = null;
          if (n != null) {
            i += 1;
            var s = {
              qplName: "dash_manifest_from_url",
              requestCreatedClock: K.host.clock(),
              requestID: "dash_manifest_from_url_" + i,
              requestInfo: n,
              responseMode: "text",
            };
            ((l = X(
              "dashManifestFromUrl",
              o("VideoPlayerNextgendashFetchedResource")
                .VideoPlayerNextgendashFetchedResourceSM,
              {
                onNetworkDiagnostics: r("emptyFunction"),
                onTransitioned: function (t, n, r) {
                  J(
                    {
                      fromState: t,
                      toState: n,
                      type: "_dash_manifest_from_url_transitioned",
                    },
                    r,
                  );
                },
                request: s,
              },
            )),
              Y(l, { type: "start" }));
          }
          return babelHelpers.extends({}, e, {
            dashManifestFromUrl: l,
            dashManifestFromUrlRequestIndex: i,
            lastDashManifestUrl: n != null ? n : e.lastDashManifestUrl,
          });
        }
        switch (Z.state) {
          case "waiting_worker_connection":
            switch (Q.type) {
              case "__enter": {
                var ue = re(Z.workerType);
                return (
                  ue.sendToWorker({
                    eventToWorker: {
                      nextgendashInstanceIndex: a,
                      playerInstanceKey: B,
                      playerStateFromMain: u(K, Z),
                      playerSubOrigin: U,
                      prefetchKey: z,
                      prefetchResultInitial: H,
                      type: "from_main_to_worker_link_player",
                      videoFBID: z,
                    },
                    type: "send_to_worker",
                  }),
                  babelHelpers.extends({}, Z, {
                    state: "waiting_linked_to_worker",
                    workerConnection: ue,
                  })
                );
              }
              case "__exception":
                return ae(Q.exception);
              case "__dispose":
                return;
              case "debug_config":
                return;
              case "update_expired_video_url_refresh_handler":
                return;
              case "update_player_viewport_dimensions":
                return;
              case "update_dash_manifest":
                return K.config.handleUpdateDashManifestInWaitingStates
                  ? se(Z, Q)
                  : (Z.pendingEvents.push(Q), Z);
              case "update_scroll_position_api":
                return;
              default:
                return (Q.type, Z.pendingEvents.push(Q), Z);
            }
          case "waiting_linked_to_worker":
            switch (Q.type) {
              case "__enter": {
                var ce = Z.pendingEvents.reduce(
                    function (e, t) {
                      return (
                        t.type ===
                          "from_worker_to_main_player_new_media_source" ||
                        t.type === "from_worker_to_main_player_unlinked" ||
                        t.type === "from_worker_to_main_player_warning" ||
                        t.type === "from_worker_to_main_player_fatal_error" ||
                        t.type === "debug_config" ||
                        t.type === "update_player_viewport_dimensions"
                          ? e.thisStatePendingEvents.push(t)
                          : e.nextStatePendingEvents.push(t),
                        e
                      );
                    },
                    {
                      nextStatePendingEvents: o(
                        "VideoPlayerNextgendashStateMachine",
                      ).skipAutoDisposeInsideThisObject([]),
                      thisStatePendingEvents: [],
                    },
                  ),
                  de = ce.nextStatePendingEvents,
                  me = ce.thisStatePendingEvents;
                return (
                  me.forEach(function (e) {
                    J(e);
                  }),
                  babelHelpers.extends({}, Z, { pendingEvents: de })
                );
              }
              case "__exception":
                return ae(Q.exception);
              case "__dispose":
                return;
              case "debug_config":
                return;
              case "update_expired_video_url_refresh_handler":
                return;
              case "update_player_viewport_dimensions":
                return;
              case "from_worker_to_main_player_new_media_source": {
                if (Q.workerType !== Z.workerType || Q.playerInstanceKey !== B)
                  return;
                ie(
                  Z.mediaElement,
                  Q.mediaSourceIndex,
                  Q.mediaSource,
                  Q.mediaSourceHandle,
                );
                var pe = Z.pendingEvents,
                  _e = babelHelpers.objectWithoutPropertiesLoose(Z, s);
                return (
                  pe.forEach(function (e) {
                    J(e);
                  }),
                  babelHelpers.extends({}, _e, {
                    playerStateForDebug: m(
                      Q.playerStateForDebug,
                      Z.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromMainSent: null,
                    playerStateFromWorker: o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(Q.playerStateFromWorker),
                    state: "linked_to_worker",
                  })
                );
              }
              case "from_worker_to_main_player_unlinked": {
                if (Q.workerType !== Z.workerType || Q.playerInstanceKey !== B)
                  return;
                J({
                  exception:
                    Q.exceptionSnapshot != null
                      ? o("nextgendasherr").nextgendasherrFromCause(
                          K,
                          o("nextgendasherr").nextgendasherrFromSnapshot(
                            Q.exceptionSnapshot,
                          ),
                          "VideoPlayerNextgendashMainUnexpectedUnlinkedBeforeLinked",
                        )
                      : o("nextgendasherr").nextgendasherr(
                          K,
                          "VideoPlayerNextgendashMainUnexpectedUnlinkedBeforeLinked",
                        ),
                  type: "__exception",
                });
                return;
              }
              case "from_worker_to_main_player_warning": {
                if (Q.workerType !== Z.workerType || Q.playerInstanceKey !== B)
                  return;
                ne(
                  o("nextgendasherr").nextgendasherrFromSnapshot(
                    Q.warningErrorSnapshot,
                  ),
                );
                return;
              }
              case "from_worker_to_main_player_fatal_error": {
                if (Q.workerType !== Z.workerType || Q.playerInstanceKey !== B)
                  return;
                J({
                  exception: o("nextgendasherr").nextgendasherrFromCause(
                    K,
                    o("nextgendasherr").nextgendasherrFromSnapshot(
                      Q.errorSnapshot,
                    ),
                    "VideoPlayerNextgendashMainFatalFromWorkerPlayerBeforeLinked",
                  ),
                  type: "__exception",
                });
                return;
              }
              case "update_dash_manifest":
                return K.config.handleUpdateDashManifestInWaitingStates
                  ? se(Z, Q)
                  : (Z.pendingEvents.push(Q), Z);
              case "update_scroll_position_api":
                return;
              default:
                return (Q.type, Z.pendingEvents.push(Q), Z);
            }
          case "linked_to_worker":
            switch (Q.type) {
              case "__enter": {
                le(Q.prevState.playerStateFromWorker, Z.playerStateFromWorker);
                return;
              }
              case "__exception":
                return K.config.isLivePlayback &&
                  Q.exception.name.includes("DashManifest")
                  ? (K.logging.log(K, {
                      error: Q.exception,
                      format:
                        "live manifest-refresh __exception absorbed in linked_to_worker",
                      type: "generic_error_as_warning",
                    }),
                    Z)
                  : void 0;
              case "__dispose": {
                d(
                  K,
                  "explicit",
                  Z.liveManifestRefreshTimerHandle,
                  Z.liveNoProgressWatchdogTimerHandle,
                );
                return;
              }
              case "_dash_manifest_from_url_transitioned": {
                if (
                  (f(K, Q.fromState, Q.toState, Z.dashManifestParsed, J, Y),
                  K.config.enableLive &&
                    Z.lastDashManifestUrl != null &&
                    Q.toState.state === "failed")
                ) {
                  Z.liveManifestRefreshTimerHandle != null &&
                    K.host.timers.clearTimeout(
                      Z.liveManifestRefreshTimerHandle,
                    );
                  var fe = Z.liveManifestRefreshRetryCount,
                    ge = o(
                      "VideoPlayerNextgendashRetryLogic",
                    ).calculateExponentialDelayWithJitter(W, fe),
                    he = K.host.timers.setTimeout(function () {
                      J({ type: "_manifest_refresh_timer_fired" });
                    }, ge);
                  return babelHelpers.extends({}, Z, {
                    liveManifestRefreshRetryCount: fe + 1,
                    liveManifestRefreshTimerHandle: he,
                  });
                }
                return;
              }
              case "_dash_manifest_parsed_transitioned": {
                var ye = g(K, Z, Q.fromState, Q.toState, J, l),
                  Ce = ye != null ? ye : Z;
                if (Q.toState.state === "parsed") {
                  var be,
                    ve = V(K, Ce, Q.toState),
                    Se =
                      ve.liveManifestRefreshRetryCount > 0
                        ? babelHelpers.extends({}, ve, {
                            liveManifestRefreshRetryCount: 0,
                          })
                        : ve,
                    Re = (be = q(K, Se, Q.toState, J)) != null ? be : Se;
                  return A(K, Re, J);
                }
                if (
                  K.config.isLivePlayback &&
                  K.config.enableLive &&
                  Ce.lastDashManifestUrl != null &&
                  Q.toState.state === "failed_to_parse"
                ) {
                  Ce.liveManifestRefreshTimerHandle != null &&
                    K.host.timers.clearTimeout(
                      Ce.liveManifestRefreshTimerHandle,
                    );
                  var Le = Ce.liveManifestRefreshRetryCount,
                    Ee = o(
                      "VideoPlayerNextgendashRetryLogic",
                    ).calculateExponentialDelayWithJitter(W, Le),
                    ke = K.host.timers.setTimeout(function () {
                      J({ type: "_manifest_refresh_timer_fired" });
                    }, Ee);
                  return babelHelpers.extends({}, Ce, {
                    liveManifestRefreshRetryCount: Le + 1,
                    liveManifestRefreshTimerHandle: ke,
                  });
                }
                return ye;
              }
              case "_manifest_refresh_timer_fired": {
                if (!K.config.enableLive || Z.lastDashManifestUrl == null)
                  return Z.liveManifestRefreshTimerHandle != null
                    ? (K.host.timers.clearTimeout(
                        Z.liveManifestRefreshTimerHandle,
                      ),
                      babelHelpers.extends({}, Z, {
                        liveManifestRefreshTimerHandle: null,
                      }))
                    : void 0;
                var Ie = se(Z, {
                  dashManifestUrl: Z.lastDashManifestUrl,
                  dashManifestXmlString: null,
                  type: "update_dash_manifest",
                });
                return babelHelpers.extends({}, Ie != null ? Ie : Z, {
                  liveManifestRefreshTimerHandle: null,
                });
              }
              case "_live_no_progress_watchdog_tick": {
                var Te, De, xe, $e, Pe, Ne, Me, we, Ae;
                if (
                  !K.config.isLivePlayback ||
                  !K.config.enableLive ||
                  K.config.liveNoProgressWatchdogThresholdSec <= 0
                )
                  return Z.liveNoProgressWatchdogTimerHandle != null
                    ? (K.host.timers.clearTimeout(
                        Z.liveNoProgressWatchdogTimerHandle,
                      ),
                      babelHelpers.extends({}, Z, {
                        liveNoProgressWatchdogTimerHandle: null,
                      }))
                    : void 0;
                var Fe = Z.mediaElement.state.mediaElementSnapshot,
                  Oe =
                    (Te = Fe == null ? void 0 : Fe.currentTime) != null
                      ? Te
                      : null,
                  Be = K.host.clock().perfMs,
                  We = k(Z.playheadLastSeenTimeSec, Oe, C),
                  qe = We ? Be : Z.playheadLastMovedAtPerfMs,
                  Ue = We ? Oe : Z.playheadLastSeenTimeSec,
                  Ve = Fe != null ? I(Fe.buffered, Oe) : null,
                  He = Fe != null ? T(Fe.buffered, Oe) : null,
                  Ge = O({
                    currentTimeSec: Oe,
                    liveEdgeOffsetSec: G,
                    liveEdgeTimeSec: Z.playerStateFromWorker.liveEdgeTimeSec,
                    maxSeekTargetSec: He,
                    minBehindLiveEdgeSec: F,
                  }),
                  ze = D({
                    bufferedAheadSec: Ve,
                    ended:
                      (De = Fe == null ? void 0 : Fe.ended) != null ? De : !1,
                    hasError: (Fe == null ? void 0 : Fe.error) != null,
                    lastMovedAtPerfMs: qe,
                    liveCatchUpSeekTargetSec: Ge,
                    nowPerfMs: Be,
                    paused:
                      (xe = Fe == null ? void 0 : Fe.paused) != null ? xe : !0,
                    seeking:
                      ($e = Fe == null ? void 0 : Fe.seeking) != null ? $e : !1,
                    starvationBufferAheadSec: y,
                    thresholdSec: K.config.liveNoProgressWatchdogThresholdSec,
                  }),
                  je = Z.lastDashManifestUrl,
                  Ke = Z.dashManifestFromUrl != null,
                  Qe = ze && je != null && !Ke,
                  Xe = w(K, J),
                  Ye = $(Z.liveConsecutiveWatchdogKicks, We, ze),
                  Je = N(
                    (Pe =
                      (Ne = Z.playerStateFromWorker) == null
                        ? void 0
                        : Ne.liveEdgeTimeSec) != null
                      ? Pe
                      : null,
                    Oe,
                    K.config.liveFellBehindEdgeReseekDriftSec,
                  ),
                  Ze =
                    K.config.liveProactiveEdgeReseekEnabled &&
                    M({
                      followEdgeActive: K.config.liveFollowEdgeActive,
                      largeDrift: Je,
                      paused:
                        (Me = Fe == null ? void 0 : Fe.paused) != null
                          ? Me
                          : !0,
                      seeking:
                        (we = Fe == null ? void 0 : Fe.seeking) != null
                          ? we
                          : !1,
                      shouldKick: ze,
                    });
                if (
                  (ze &&
                    (Je || x(Ye, K.config.liveStallReseekToEdgeAfterKicks))) ||
                  Ze
                ) {
                  var et,
                    tt,
                    nt,
                    rt = P(
                      (et =
                        (tt = Z.playerStateFromWorker) == null
                          ? void 0
                          : tt.liveEdgeTimeSec) != null
                        ? et
                        : null,
                      Oe,
                      b,
                      v,
                    ),
                    ot =
                      (nt = Z.mediaElement) == null || (nt = nt.state) == null
                        ? void 0
                        : nt.mediaElement;
                  if (rt != null && ot != null)
                    return (
                      K.logging.log(K, {
                        format:
                          "live no-progress watchdog: recovering in-engine by re-seeking the playhead to the live edge (largeDrift=%s proactive=%s)",
                        params: [String(Je), String(Ze)],
                        type: "generic_warning",
                      }),
                      K.host.mediaElementSetPlayhead(K, ot, rt),
                      babelHelpers.extends({}, Z, {
                        liveConsecutiveWatchdogKicks: 0,
                        liveNoProgressWatchdogTimerHandle: Xe,
                        playheadLastMovedAtPerfMs: Be,
                        playheadLastSeenTimeSec: Oe,
                      })
                    );
                }
                var at = Z.mediaElement.state.mediaElement,
                  it = null;
                ze &&
                  Ge != null &&
                  at != null &&
                  (K.host.mediaElementSetPlayhead(K, at, Ge), (it = Ge));
                var lt = it != null ? it : Oe;
                if (!Qe) {
                  if (it != null) {
                    var st;
                    K.logging.log(K, {
                      format:
                        "live no-progress watchdog: playhead frozen (starved or stale-live), seeking without manifest refresh. %s %s %s %s",
                      params: [
                        "currentTimeSec=" + (Oe != null ? Oe : "unknown"),
                        "liveEdgeTimeSec=" +
                          ((st = Z.playerStateFromWorker.liveEdgeTimeSec) !=
                          null
                            ? st
                            : "unknown"),
                        "bufferedEndSec=" + (He != null ? He : "unknown"),
                        "seekTargetSec=" + it,
                      ],
                      type: "generic_warning",
                    });
                  }
                  return babelHelpers.extends({}, Z, {
                    liveConsecutiveWatchdogKicks: Ye,
                    liveNoProgressWatchdogTimerHandle: Xe,
                    playheadLastMovedAtPerfMs: it != null ? Be : qe,
                    playheadLastSeenTimeSec: it != null ? it : Ue,
                  });
                }
                (K.logging.log(K, {
                  format:
                    "live no-progress watchdog: playhead frozen (starved or stale-live), forcing manifest refresh. %s %s %s %s",
                  params: [
                    "currentTimeSec=" + (Oe != null ? Oe : "unknown"),
                    "liveEdgeTimeSec=" +
                      ((Ae = Z.playerStateFromWorker.liveEdgeTimeSec) != null
                        ? Ae
                        : "unknown"),
                    "bufferedEndSec=" + (He != null ? He : "unknown"),
                    "seekTargetSec=" + (Ge != null ? Ge : "none"),
                  ],
                  type: "generic_warning",
                }),
                  Z.liveManifestRefreshTimerHandle != null &&
                    K.host.timers.clearTimeout(
                      Z.liveManifestRefreshTimerHandle,
                    ));
                var ut = se(Z, {
                  dashManifestUrl: je,
                  dashManifestXmlString: null,
                  type: "update_dash_manifest",
                });
                return babelHelpers.extends({}, ut, {
                  liveConsecutiveWatchdogKicks: Ye,
                  liveManifestRefreshTimerHandle: null,
                  liveNoProgressWatchdogTimerHandle: Xe,
                  playheadLastMovedAtPerfMs: Be,
                  playheadLastSeenTimeSec: lt,
                });
              }
              case "_media_element_transitioned": {
                var ct, dt, mt, pt;
                if (K.config.isLivePlayback && K.config.startTimestampSec > 0) {
                  var _t,
                    ft =
                      (_t = Z.mediaElement) == null ||
                      (_t = _t.state) == null ||
                      (_t = _t.mediaElementSnapshot) == null
                        ? void 0
                        : _t.currentTime;
                  if (ft != null && ft < K.config.startTimestampSec - 1) {
                    var gt,
                      ht =
                        (gt = Z.mediaElement) == null || (gt = gt.state) == null
                          ? void 0
                          : gt.mediaElement;
                    ht != null &&
                      K.host.mediaElementSetPlayhead(
                        K,
                        ht,
                        K.config.startTimestampSec,
                      );
                  }
                }
                var yt = Z.mediaElement.state.mediaElementSnapshot,
                  Ct =
                    (ct = yt == null ? void 0 : yt.currentTime) != null
                      ? ct
                      : null,
                  bt = K.host.clock().perfMs,
                  vt = k(Z.forceKickPlayheadLastSeenTimeSec, Ct, C),
                  St = vt ? bt : Z.forceKickPlayheadLastMovedAtPerfMs,
                  Rt = vt ? Ct : Z.forceKickPlayheadLastSeenTimeSec,
                  Lt = E({
                    currentTimeSec: Ct,
                    enabled: K.config.liveForceWorkerKickOnStallEnabled,
                    ended:
                      (dt = yt == null ? void 0 : yt.ended) != null ? dt : !1,
                    frozenThresholdMs: L,
                    hasError: (yt == null ? void 0 : yt.error) != null,
                    isLivePlayback: K.config.isLivePlayback,
                    lastForcedWorkerKickPerfMs: Z.lastForcedWorkerKickPerfMs,
                    minIntervalMs: R,
                    nowPerfMs: bt,
                    paused:
                      (mt = yt == null ? void 0 : yt.paused) != null ? mt : !0,
                    playheadLastMovedAtPerfMs: St,
                    seeking:
                      (pt = yt == null ? void 0 : yt.seeking) != null ? pt : !1,
                  });
                return Lt
                  ? babelHelpers.extends(
                      {},
                      _(K, B, Z, Q.type + ":force_worker_kick_on_stall"),
                      {
                        forceKickPlayheadLastMovedAtPerfMs: St,
                        forceKickPlayheadLastSeenTimeSec: Rt,
                        lastForcedWorkerKickPerfMs: bt,
                      },
                    )
                  : babelHelpers.extends({}, p(K, B, Z, Q.type), {
                      forceKickPlayheadLastMovedAtPerfMs: St,
                      forceKickPlayheadLastSeenTimeSec: Rt,
                    });
              }
              case "_request_recovery_from_source_reset": {
                Z.workerConnection.sendToWorker({
                  eventToWorker: {
                    mediaSourceIndex: Q.mediaSourceIndex,
                    playerInstanceKey: B,
                    type: "from_main_to_worker_request_recovery_from_source_reset",
                  },
                  type: "send_to_worker",
                });
                return;
              }
              case "debug_config":
                return;
              case "update_player_viewport_dimensions":
                return;
              case "update_dash_manifest":
                return se(Z, Q);
              case "_send_state_to_worker":
                return p(K, B, Z, Q.type);
              case "update_media_element":
                return (
                  Y(Z.mediaElement, {
                    mediaElement: Q.mediaElement,
                    type: "update_media_element",
                  }),
                  K.config.eagerResyncOnMediaElementAttach &&
                  Q.mediaElement != null
                    ? p(K, B, Z, Q.type)
                    : void 0
                );
              case "update_config_from_env":
                return p(K, B, Z, Q.type);
              case "select_video_quality":
                return p(
                  K,
                  B,
                  babelHelpers.extends({}, Z, {
                    selectedVideoQualityDisplayLabel:
                      Q.videoQualityDisplayLabel,
                  }),
                  Q.type,
                );
              case "select_media_variant":
                return p(
                  K,
                  B,
                  babelHelpers.extends({}, Z, {
                    selectedMediaVariant: Q.mediaVariant,
                  }),
                  Q.type,
                );
              case "debug_log_stall_details": {
                Z.workerConnection.sendToWorker({
                  eventToWorker: {
                    mediaElementSnapshotFromMain:
                      Z.mediaElement.state.mediaElementSnapshot,
                    playerInstanceKey: B,
                    stallStartClock: Q.stallStartClock,
                    type: "from_main_to_worker_debug_log_stall_details",
                  },
                  type: "send_to_worker",
                });
                return;
              }
              case "from_worker_to_main_player_new_media_source": {
                if (Q.workerType !== Z.workerType || Q.playerInstanceKey !== B)
                  return;
                ie(
                  Z.mediaElement,
                  Q.mediaSourceIndex,
                  Q.mediaSource,
                  Q.mediaSourceHandle,
                );
                var Et = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject(Q.playerStateFromWorker);
                return (
                  le(Z.playerStateFromWorker, Et),
                  babelHelpers.extends({}, Z, {
                    playerStateForDebug: m(
                      Q.playerStateForDebug,
                      Z.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromWorker: Et,
                  })
                );
              }
              case "from_worker_to_main_player_unlinked": {
                if (Q.workerType !== Z.workerType || Q.playerInstanceKey !== B)
                  return;
                var kt =
                  Q.exceptionSnapshot != null
                    ? o("nextgendasherr").nextgendasherrFromCause(
                        K,
                        o("nextgendasherr").nextgendasherrFromSnapshot(
                          Q.exceptionSnapshot,
                        ),
                        "VideoPlayerNextgendashMainUnexpectedUnlinkedFromWorker",
                        "Reason: " + Q.reason,
                      )
                    : o("nextgendasherr").nextgendasherr(
                        K,
                        "VideoPlayerNextgendashMainUnexpectedUnlinkedFromWorker",
                        "Reason: " + Q.reason,
                      );
                if (
                  (Z.workerType === "RealWorker" ||
                    Z.workerType === "RealWorkerV2") &&
                  !K.config.disableFallbackFromRealWorkerAfterLinked
                )
                  return ae(kt);
                J({ exception: kt, type: "__exception" });
                return;
              }
              case "from_worker_to_main_player_warning": {
                if (Q.workerType !== Z.workerType || Q.playerInstanceKey !== B)
                  return;
                ne(
                  o("nextgendasherr").nextgendasherrFromSnapshot(
                    Q.warningErrorSnapshot,
                  ),
                );
                var It = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject(Q.playerStateFromWorker);
                return (
                  le(Z.playerStateFromWorker, It),
                  babelHelpers.extends({}, Z, {
                    playerStateForDebug: m(
                      Q.playerStateForDebug,
                      Z.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromWorker: It,
                  })
                );
              }
              case "from_worker_to_main_player_fatal_error": {
                if (Q.workerType !== Z.workerType || Q.playerInstanceKey !== B)
                  return;
                J({
                  exception: o("nextgendasherr").nextgendasherrFromCause(
                    K,
                    o("nextgendasherr").nextgendasherrFromSnapshot(
                      Q.errorSnapshot,
                    ),
                    "VideoPlayerNextgendashMainFatalFromWorkerPlayer",
                  ),
                  type: "__exception",
                });
                var Tt = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject(Q.playerStateFromWorker);
                return (
                  le(Z.playerStateFromWorker, Tt),
                  babelHelpers.extends({}, Z, {
                    playerStateForDebug: m(
                      Q.playerStateForDebug,
                      Z.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromWorker: Tt,
                  })
                );
              }
              case "from_worker_to_main_playback_loop_state": {
                if (Q.workerType !== Z.workerType || Q.playerInstanceKey !== B)
                  return;
                var Dt = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject(Q.playerStateFromWorker);
                return (
                  le(Z.playerStateFromWorker, Dt),
                  babelHelpers.extends({}, Z, { playerStateFromWorker: Dt })
                );
              }
              case "from_worker_to_main_player_state_for_debug":
                return Q.workerType !== Z.workerType ||
                  Q.playerInstanceKey !== B
                  ? void 0
                  : babelHelpers.extends({}, Z, {
                      playerStateForDebug: m(
                        Q.playerStateForDebug,
                        Z.mediaElement.state.mediaElementSnapshot,
                      ),
                    });
              case "from_worker_to_main_refresh_urls": {
                Z.dashManifestParsed.sendEvent({
                  type: "handle_worker_url_refresh_request",
                  urls: Q.urls,
                });
                return;
              }
              case "update_scroll_position_api":
                return;
              default:
                Q.type;
                return;
            }
          case "__disposed__":
            switch (Q.type) {
              case "__enter": {
                var xt,
                  $t = Q.prevState;
                d(
                  K,
                  "terminal",
                  $t.liveManifestRefreshTimerHandle,
                  $t.liveNoProgressWatchdogTimerHandle,
                );
                var Pt =
                    "VideoPlayerNextgendashMainWith" +
                    $t.workerType +
                    "/Disposed[" +
                    Z.reason +
                    "@" +
                    $t.state +
                    "]",
                  Nt =
                    "Disposed: " +
                    Z.reason +
                    "@" +
                    $t.state +
                    "; playerStateFromWorker=%s",
                  Mt = [
                    (xt = JSON.stringify($t.playerStateFromWorker)) != null
                      ? xt
                      : "undefined",
                  ],
                  wt =
                    Z.exception != null
                      ? o("nextgendasherr").nextgendasherrFromCause.apply(
                          void 0,
                          [K, Z.exception, Pt, Nt].concat(Mt),
                        )
                      : null;
                ($t.workerConnection != null &&
                  oe(
                    $t.workerConnection,
                    wt != null
                      ? wt
                      : o("nextgendasherr").nextgendasherr.apply(
                          void 0,
                          [K, Pt, Nt].concat(Mt),
                        ),
                  ),
                  $t.scrollPositionSubscription != null &&
                    $t.scrollPositionSubscription.remove(),
                  wt != null && i(wt));
                return;
              }
              default:
                return;
            }
          default:
            Z.state;
            return;
        }
      },
    );
    function d(e, t, n, r) {
      var o = e.config.enableDisposalResourceCleanup
        ? t === "terminal"
        : t === "explicit";
      o &&
        (n != null && e.host.timers.clearTimeout(n),
        r != null && e.host.timers.clearTimeout(r));
    }
    function m(e, t) {
      return e == null || t == null
        ? e
        : o(
            "VideoPlayerNextgendashStateMachine",
          ).skipAutoDisposeInsideThisObject(
            babelHelpers.extends({}, e, {
              bufferedRanges: babelHelpers.extends({}, e.bufferedRanges, {
                combo: t.buffered.map(function (e) {
                  return { endTime: e[1], startTime: e[0] };
                }),
              }),
            }),
          );
    }
    function p(e, t, n, o) {
      var a = u(e, n);
      return r("deepEquals")(a, n.playerStateFromMainSent)
        ? n
        : (n.workerConnection.sendToWorker({
            canSendOnlyLatestOfTypeIfThrottled: !0,
            eventToWorker: {
              playerInstanceKey: t,
              playerStateFromMain: a,
              reason: o,
              type: "from_main_to_worker_sync_state",
            },
            type: "send_to_worker",
          }),
          babelHelpers.extends({}, n, { playerStateFromMainSent: a }));
    }
    function _(e, t, n, r) {
      var o = u(e, n);
      return (
        n.workerConnection.sendToWorker({
          eventToWorker: {
            playerInstanceKey: t,
            playerStateFromMain: o,
            reason: r,
            type: "from_main_to_worker_sync_state",
          },
          type: "send_to_worker",
        }),
        babelHelpers.extends({}, n, { playerStateFromMainSent: o })
      );
    }
    function f(e, t, n, r, a, i) {
      if (n.state !== t.state)
        switch (n.state) {
          case "completed": {
            var l = n.responseData.state;
            switch (l.state) {
              case "done_text": {
                i(r, {
                  baseURLFallback: n.request.requestInfo,
                  dashManifestXmlString: l.text,
                  type: "parse_dash_manifest_xml",
                });
                return;
              }
              default:
                a({
                  exception: o("nextgendasherr").nextgendasherr(
                    e,
                    "VideoPlayerNextgendashMainDashManifestFetchUnexpectedState",
                    'Unexpected response data state "' +
                      l.state +
                      '" when DASH manifest request is completed.',
                  ),
                  type: "__exception",
                });
                return;
            }
          }
          case "failed": {
            a({
              exception: o("nextgendasherr").nextgendasherrFromCause(
                e,
                n.error,
                "VideoPlayerNextgendashMainDashManifestFetchFailed",
              ),
              type: "__exception",
            });
            return;
          }
          case "aborted": {
            a({
              exception: o("nextgendasherr").nextgendasherr(
                e,
                "VideoPlayerNextgendashMainDashManifestFetchAborted",
              ),
              type: "__exception",
            });
            return;
          }
          default: {
            n.state;
            return;
          }
        }
    }
    function g(e, t, n, r, a, i) {
      var l, s;
      if (
        r.state !== n.state ||
        (e.config.enableCdnUrlRefresh &&
          n.state === "parsed" &&
          r.state === "parsed" &&
          n.data.createdAt.perfMs !== r.data.createdAt.perfMs) ||
        (r.state !== "__null__" &&
          r.state !== "__disposed__" &&
          n.state !== "__null__" &&
          n.state !== "__disposed__" &&
          ((l = r.parseRequestedAt) == null ? void 0 : l.perfMs) !==
            ((s = n.parseRequestedAt) == null ? void 0 : s.perfMs))
      )
        switch (r.state) {
          case "failed_to_parse": {
            a({
              exception: o("nextgendasherr").nextgendasherrFromCause(
                e,
                r.error,
                "VideoPlayerNextgendashMainDashManifestParseFailed",
              ),
              type: "__exception",
            });
            return;
          }
          case "parsed": {
            i();
            var u = t.initialMediaVariantIfLangExistsInManifest;
            return t.selectedMediaVariant == null &&
              u != null &&
              r.data.manifestRepresentations.audio.some(function (e) {
                return e.lang === u.audioLang;
              })
              ? babelHelpers.extends({}, t, {
                  initialMediaVariantIfLangExistsInManifest: null,
                  selectedMediaVariant: u,
                })
              : void 0;
          }
          default:
            r.state;
            return;
        }
    }
    var h = 0.001,
      y = 0.5,
      C = 1,
      b = 2,
      v = 4,
      S = 2e3,
      R = 1e3,
      L = 1e3;
    function E(e) {
      var t = e.currentTimeSec,
        n = e.enabled,
        r = e.ended,
        o = e.frozenThresholdMs,
        a = e.hasError,
        i = e.isLivePlayback,
        l = e.lastForcedWorkerKickPerfMs,
        s = e.minIntervalMs,
        u = e.nowPerfMs,
        c = e.paused,
        d = e.playheadLastMovedAtPerfMs,
        m = e.seeking;
      if (!n || !i || t == null || c || r || m || a) return !1;
      var p = d != null && u - d >= o;
      return !(!p || (l != null && u - l < s));
    }
    function k(e, t, n) {
      return t == null ? !1 : e == null || t < e - h ? !0 : t - e >= n;
    }
    function I(e, t) {
      if (t == null) return null;
      var n = T(e, t);
      return n != null ? Math.max(0, n - t) : 0;
    }
    function T(e, t) {
      if (t == null) return null;
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (r[0] <= t && t <= r[1]) return r[1];
      }
      return null;
    }
    function D(e) {
      var t = e.bufferedAheadSec,
        n = e.ended,
        r = e.hasError,
        o = e.lastMovedAtPerfMs,
        a = e.liveCatchUpSeekTargetSec,
        i = e.nowPerfMs,
        l = e.paused,
        s = e.seeking,
        u = e.starvationBufferAheadSec,
        c = e.thresholdSec;
      if (l || n || r || o == null) return !1;
      var d = t != null && t <= u,
        m = a != null,
        p = i - o >= c * 1e3;
      return s && !(p && d) ? !1 : p && (d || m);
    }
    function x(e, t) {
      return t > 0 && e >= t;
    }
    function $(e, t, n) {
      return t ? 0 : n ? e + 1 : e;
    }
    function P(e, t, n, r) {
      if (e == null || t == null || e - t < r) return null;
      var o = e - n;
      return o > t ? o : null;
    }
    function N(e, t, n) {
      return n > 0 && e != null && t != null && e - t > n;
    }
    function M(e) {
      var t = e.followEdgeActive,
        n = e.largeDrift,
        r = e.paused,
        o = e.seeking,
        a = e.shouldKick;
      return n && !a && t && !r && !o;
    }
    function w(e, t) {
      return e.host.timers.setTimeout(function () {
        t({ type: "_live_no_progress_watchdog_tick" });
      }, S);
    }
    function A(e, t, n) {
      return !e.config.isLivePlayback ||
        !e.config.enableLive ||
        e.config.liveNoProgressWatchdogThresholdSec <= 0 ||
        t.liveNoProgressWatchdogTimerHandle != null
        ? t
        : babelHelpers.extends({}, t, {
            liveNoProgressWatchdogTimerHandle: w(e, n),
          });
    }
    var F = 15;
    function O(e) {
      var t = e.currentTimeSec,
        n = e.liveEdgeOffsetSec,
        r = e.liveEdgeTimeSec,
        o = e.maxSeekTargetSec,
        a = e.minBehindLiveEdgeSec;
      if (t == null || r == null || o == null || r - t < a) return null;
      var i = Math.min(Math.max(0, r - n), o);
      return i > t ? i : null;
    }
    var B = 2e3,
      W = Object.freeze({
        backoffMultiplier: 2,
        initialDelayMs: 200,
        jitterPercent: 0.2,
        maxDelayMs: 1e4,
        retryBehavior: "exponential",
        retryCount: 1 / 0,
      });
    function q(e, t, n, r) {
      if (
        (t.liveManifestRefreshTimerHandle != null &&
          e.host.timers.clearTimeout(t.liveManifestRefreshTimerHandle),
        !e.config.enableLive ||
          n.state !== "parsed" ||
          n.data.metadata.manifestType !== "dynamic" ||
          t.lastDashManifestUrl == null)
      )
        return t.liveManifestRefreshTimerHandle != null
          ? babelHelpers.extends({}, t, {
              liveManifestRefreshTimerHandle: null,
            })
          : void 0;
      var o = n.data.metadata.minimumUpdatePeriodMs,
        a =
          e.config.liveManifestRefreshIntervalMs > 0
            ? e.config.liveManifestRefreshIntervalMs
            : o != null
              ? o
              : B,
        i = e.host.timers.setTimeout(function () {
          r({ type: "_manifest_refresh_timer_fired" });
        }, a);
      return babelHelpers.extends({}, t, { liveManifestRefreshTimerHandle: i });
    }
    function U(e) {
      var t = e.enableLive,
        n = e.isManifestParsed,
        r = e.manifestType;
      return t && n && r === "dynamic";
    }
    function V(e, t, n) {
      var r, o;
      if (
        !U({
          enableLive: e.config.enableLive,
          isManifestParsed: n.state === "parsed",
          manifestType:
            n.state === "parsed" ? n.data.metadata.manifestType : null,
        }) ||
        n.state !== "parsed"
      )
        return t;
      e.config.isLivePlayback = !0;
      var a = t.liveStartTimestampSecIsManifestDerived;
      if (
        H({
          isManifestDerived: a,
          playheadSec:
            (r =
              (o = t.mediaElement.state.mediaElementSnapshot) == null
                ? void 0
                : o.currentTime) != null
              ? r
              : 0,
          startTimestampSec: e.config.startTimestampSec,
        })
      ) {
        var i = n.data,
          l = i.manifestRepresentations,
          s = i.metadata,
          u = Q({
            audioWindow: K(l.audio),
            minBufferTimeSec: s.minBufferTimeSec,
            suggestedPresentationDelaySec: s.suggestedPresentationDelaySec,
            videoWindow: K(l.video),
          });
        u != null && ((e.config.startTimestampSec = u), (a = !0));
      }
      return a === t.liveStartTimestampSecIsManifestDerived
        ? t
        : babelHelpers.extends({}, t, {
            liveStartTimestampSecIsManifestDerived: a,
          });
    }
    function H(e) {
      var t = e.isManifestDerived,
        n = e.playheadSec,
        r = e.startTimestampSec;
      return r === 0 ? !0 : t && n === 0;
    }
    var G = 5,
      z = 5,
      j = 3;
    function K(e) {
      var t = null,
        n = null,
        r = 0;
      for (var o of e)
        if (o.segmentsInfo.type === "SegmentTemplate") {
          var a = o.segmentsInfo,
            i = a.segmentTimeline,
            l = a.timescale;
          if (!(i.length === 0 || l <= 0)) {
            var s = i[0],
              u = i[i.length - 1],
              c = s.t / l,
              d = (u.t + (u.r + 1) * u.d) / l;
            ((t == null || c < t) && (t = c), (n == null || d > n) && (n = d));
            for (var m of i) {
              var p = m.d / l;
              p > r && (r = p);
            }
          }
        }
      return t == null || n == null
        ? null
        : { earliestStartSec: t, latestEndSec: n, maxSegmentDurationSec: r };
    }
    function Q(e) {
      var t = e.audioWindow,
        n = e.minBufferTimeSec,
        r = e.suggestedPresentationDelaySec,
        o = e.videoWindow,
        a = [];
      if ((o != null && a.push(o), t != null && a.push(t), a.length === 0))
        return null;
      var i = Math.min.apply(
          Math,
          a.map(function (e) {
            return e.latestEndSec;
          }),
        ),
        l = Math.max.apply(
          Math,
          a.map(function (e) {
            return e.earliestStartSec;
          }),
        );
      if (!(i > 0) || l > i) return null;
      var s = Math.max.apply(
          Math,
          a.map(function (e) {
            return e.maxSegmentDurationSec;
          }),
        ),
        u;
      return (
        r != null && r > 0
          ? (u = r)
          : s > 0
            ? (u = Math.max(s * j, n != null ? n : 0))
            : (u = z),
        (u = Math.max(u, z)),
        Math.min(Math.max(i - u, l), i)
      );
    }
    function X(e) {
      var t = e.state;
      if (t.state === "__null__" || t.state === "__disposed__") return null;
      var n = t.dashManifestParsed.state;
      return n.state !== "parsed" ? null : n;
    }
    function Y(e) {
      var t = X(e);
      return t == null
        ? null
        : t.data.metadata.manifestIsMixedCodecVideo ||
            t.data.metadata.manifestIsMixedCodecAudio;
    }
    function J(e) {
      var t = X(e);
      return t == null
        ? null
        : t.data.manifestRepresentations.video.some(function (e) {
            return (
              e.segmentsInfo.type === "SegmentTemplate" &&
              e.segmentsInfo.segmentTimelinePredictive != null
            );
          });
    }
    function Z(e) {
      var t = e.state;
      return t.state === "linked_to_worker" ? t.playerStateFromWorker : null;
    }
    function ee(e) {
      var t = e.state;
      return t.state !== "__null__" &&
        t.state !== "__disposed__" &&
        t.mediaElement.state.state !== "__null__" &&
        t.mediaElement.state.state !== "__disposed__" &&
        t.mediaElement.state.mediaElement != null
        ? t.mediaElement.env.host.mediaElementCollectOnlyPlayheadMediaTimeSec(
            t.mediaElement.env,
            t.mediaElement.state.mediaElement,
          )
        : null;
    }
    function te(e) {
      var t,
        n = X(e);
      return (t = n == null ? void 0 : n.data.manifestRepresentations.video) !=
        null
        ? t
        : [];
    }
    function ne(e) {
      var t,
        n = X(e);
      return (t = n == null ? void 0 : n.data.manifestRepresentations.audio) !=
        null
        ? t
        : [];
    }
    function re(e, t) {
      var n,
        r,
        o = Z(e),
        a = new Set(
          (n =
            o == null || (r = o.blockedRepresentationIds) == null
              ? void 0
              : r.video) != null
            ? n
            : [],
        );
      return t.filter(function (e) {
        return !a.has(e.representationId);
      });
    }
    function oe(e) {
      return re(e, te(e));
    }
    function ae(e, t) {
      var n,
        r,
        o = Z(e),
        a = new Set(
          (n =
            o == null || (r = o.blockedRepresentationIds) == null
              ? void 0
              : r.audio) != null
            ? n
            : [],
        );
      return t.filter(function (e) {
        return !a.has(e.representationId);
      });
    }
    function ie(e) {
      return ae(e, ne(e));
    }
    function le(e, t) {
      var n,
        r,
        o = Z(e),
        a = new Set(
          (n =
            o == null || (r = o.targetVariantRepresentationIds) == null
              ? void 0
              : r.video) != null
            ? n
            : [],
        );
      return t.filter(function (e) {
        return a.has(e.representationId);
      });
    }
    function se(e, t, n) {
      return o(
        "VideoPlayerNextgendashMediaUtils",
      ).findTimeRangeAnnotationAtMediaTime(e, t, n);
    }
    function ue(e) {
      var t,
        n = Z(e),
        r = ee(e),
        o = se(
          r,
          n == null || (t = n.bufferedRangesWithRepIds) == null
            ? void 0
            : t.audio,
          n == null ? void 0 : n.targetRepresentationId.audio,
        ),
        a = ne(e).find(function (e) {
          return e.representationId === o;
        });
      return a;
    }
    function ce(e) {
      var t,
        n = Z(e),
        r = ee(e),
        o = se(
          r,
          n == null || (t = n.bufferedRangesWithRepIds) == null
            ? void 0
            : t.video,
          n == null ? void 0 : n.targetRepresentationId.video,
        ),
        a = te(e).find(function (e) {
          return e.representationId === o;
        });
      return a;
    }
    function de(e) {
      var t = Z(e),
        n = t == null ? void 0 : t.targetRepresentationId.audio,
        r = ne(e).find(function (e) {
          return e.representationId === n;
        });
      return r;
    }
    function me(e) {
      var t = Z(e),
        n = t == null ? void 0 : t.targetRepresentationId.video,
        r = te(e).find(function (e) {
          return e.representationId === n;
        });
      return r;
    }
    function pe(e) {
      var t = e.state,
        n =
          t.state === "__null__" || t.state === "__disposed__"
            ? null
            : t.selectedMediaVariant;
      return n;
    }
    function _e(e) {
      var t = e.state,
        n =
          t.state === "__null__" || t.state === "__disposed__"
            ? null
            : t.selectedVideoQualityDisplayLabel;
      return n;
    }
    ((l.VideoPlayerNextgendashMainSM = c),
      (l.internal_clearLivePlaybackTimers = d),
      (l.internal_shouldForceWorkerKickOnStall = E),
      (l.internal_didPlayheadMakeProgress = k),
      (l.internal_getBufferedAheadSec = I),
      (l.internal_getBufferedEndSec = T),
      (l.internal_shouldKickStalledPlaybackWatchdog = D),
      (l.internal_shouldRecoverAfterKick = x),
      (l.internal_getNextConsecutiveWatchdogKicks = $),
      (l.internal_getLiveEdgeReseekTargetSec = P),
      (l.internal_shouldReseekToEdgeImmediatelyForLargeDrift = N),
      (l.internal_shouldProactivelyReseekToEdgeForLargeDrift = M),
      (l.internal_getLiveCatchUpSeekTargetSec = O),
      (l.internal_shouldMarkLivePlayback = U),
      (l.internal_shouldUpdateLiveStartTimestampSec = H),
      (l.internal_getLiveStreamWindow = K),
      (l.internal_computeLiveStartPositionSec = Q),
      (l.getIsMixedCodecManifest = Y),
      (l.getIsPredictiveDash = J),
      (l.getAvailableVideoRepresentations = oe),
      (l.getAvailableAudioRepresentations = ie),
      (l.filterVideoRepresentationsByTargetVariant = le),
      (l.getCurrentPlayingAudioRepresentation = ue),
      (l.getCurrentPlayingVideoRepresentation = ce),
      (l.getCurrentTargetAudioRepresentation = de),
      (l.getCurrentTargetVideoRepresentation = me),
      (l.getSelectedMediaVariant = pe),
      (l.getSelectedVideoQualityDisplayLabel = _e));
  },
  98,
);
