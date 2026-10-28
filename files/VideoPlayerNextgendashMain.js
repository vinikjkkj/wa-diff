__d(
  "VideoPlayerNextgendashMain",
  [
    "ExecutionEnvironment",
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
      s = ["pendingEvents"],
      u;
    function c(e, t) {
      var n,
        r,
        o,
        a,
        i = t.mediaElement.state;
      return (n =
        (r = e.config.mediaElementSkipFullWatchdogSnapshotsWhilePlaybackMoves
          ? (o = i.playheadLastObserved) == null
            ? void 0
            : o.mediaTimeSec
          : null) != null
          ? r
          : (a = i.mediaElementSnapshot) == null
            ? void 0
            : a.currentTime) != null
        ? n
        : null;
    }
    function d(e, t) {
      var n,
        a,
        i,
        l,
        s = e.config,
        c = t.mediaElement.state.mediaElementSnapshot,
        d =
          s.playheadPredictIntervalMs > 0
            ? e.host.clockPerfOriginMs +
              ((n =
                (a = t.mediaElement.state.mediaElementSnapshotClock) == null
                  ? void 0
                  : a.perfMs) != null
                ? n
                : e.host.clock().perfMs)
            : 0,
        m =
          c != null
            ? s.debugOverlay
              ? {
                  bufferedForDebug: c.buffered,
                  bufferedFully: o(
                    "VideoPlayerNextgendashMediaUtils",
                  ).isFullyBuffered(c),
                  currentTime: c.currentTime,
                  currentTimeAbsoluteMs: d,
                  duration: c.duration,
                  error: c.error,
                  paused: c.paused,
                  playbackRate: c.playbackRate,
                  readyState: c.readyState,
                }
              : {
                  bufferedFully: o(
                    "VideoPlayerNextgendashMediaUtils",
                  ).isFullyBuffered(c),
                  currentTime: c.currentTime,
                  currentTimeAbsoluteMs: d,
                  duration: c.duration,
                  error: c.error,
                  paused: c.paused,
                  playbackRate: c.playbackRate,
                  readyState: c.readyState,
                }
            : null,
        p = (i = t.scrollPositionAPI) == null ? void 0 : i.getCurrent(),
        _ = 1,
        f = !1;
      if ((u || (u = r("ExecutionEnvironment"))).canUseDOM) {
        var g;
        ((_ = (g = window.devicePixelRatio) != null ? g : 1),
          (f = document.hidden));
      }
      return {
        abrConfig: t.abrConfig,
        configFromMain: s,
        dashManifestData:
          t.state === "linked_to_worker" &&
          t.dashManifestParsed.state.state === "parsed"
            ? t.dashManifestParsed.state.data
            : null,
        devicePixelRatio: _,
        isDocumentHidden: f,
        mediaElementSnapshot: m,
        mediaSourceIndexApplied:
          (l = t.mediaElement.state.mediaSourceIndex) != null ? l : null,
        playerViewportDimensions: t.playerViewportDimensions,
        scrollPositionInfo: p,
        selectedMediaVariant: t.selectedMediaVariant,
        selectedVideoQualityDisplayLabel: t.selectedVideoQualityDisplayLabel,
        shouldSendPlayerStateForDebug: t.shouldSendPlayerStateForDebug,
      };
    }
    var m = o("VideoPlayerNextgendashStateMachine").defineStateMachine(
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
              onDeliberateDetachForUnmount: function (t) {
                m({
                  mediaSourceIndex: t,
                  type: "_notify_deliberate_detach_for_unmount",
                });
              },
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
          u = n.onPrefetchCacheResult,
          m = n.onSendHaltedToWorkerChanged,
          C = n.onVideoRepresentationChanged,
          L = n.playerInstanceKey,
          q = n.playerSubOrigin,
          H = n.prefetchResultInitial,
          z = n.videoFBID,
          K = n.workerPortFactories,
          Q = t.env,
          X = t.event,
          Y = t.makeChildSm,
          J = t.sendToOther,
          Z = t.sendToSelf,
          ee = t.state,
          te = t.unexpectedEvent;
        if (ee.state !== "__disposed__" && X.type === "debug_config")
          return ee.state === "linked_to_worker"
            ? f(
                Q,
                L,
                babelHelpers.extends({}, ee, {
                  shouldSendPlayerStateForDebug:
                    X.shouldSendPlayerStateForDebug,
                }),
                X.type,
              )
            : babelHelpers.extends({}, ee, {
                shouldSendPlayerStateForDebug: X.shouldSendPlayerStateForDebug,
              });
        if (ee.state !== "__disposed__" && X.type === "_log_player_warning")
          return (re(X.warning), ee);
        if (
          ee.state !== "__disposed__" &&
          X.type === "update_player_viewport_dimensions"
        )
          return babelHelpers.extends({}, ee, {
            playerViewportDimensions: X.playerViewportDimensions,
          });
        if (
          ee.state !== "__disposed__" &&
          X.type === "update_expired_video_url_refresh_handler"
        ) {
          J(ee.dashManifestParsed, {
            expiredVideoUrlRefreshHandlerState:
              X.expiredVideoUrlRefreshHandlerState,
            type: "update_expired_video_url_refresh_handler",
          });
          return;
        }
        if (
          ee.state !== "__disposed__" &&
          X.type === "update_scroll_position_api"
        ) {
          ee.scrollPositionSubscription != null &&
            ee.scrollPositionSubscription.remove();
          var ne = null;
          return (
            (ne = X.scrollPositionAPI.subscribe(function () {
              Z({ type: "_send_state_to_worker" });
            })),
            ee.state === "linked_to_worker"
              ? f(
                  Q,
                  L,
                  babelHelpers.extends({}, ee, {
                    scrollPositionAPI: X.scrollPositionAPI,
                    scrollPositionSubscription: ne,
                  }),
                  X.type,
                )
              : babelHelpers.extends({}, ee, {
                  scrollPositionAPI: X.scrollPositionAPI,
                  scrollPositionSubscription: ne,
                })
          );
        }
        function re(e) {
          ee.state !== "__disposed__" &&
            Q.logging.log(Q, {
              error: o("nextgendasherr").nextgendasherrFromCause(
                Q,
                e,
                "VideoPlayerNextgendashMainWith" + ee.workerType,
              ),
              type: "generic_error_as_warning",
            });
        }
        function oe(e) {
          var t = o(
            "VideoPlayerNextgendashConnectionMainToWorker",
          ).connectToWorker(Q, K, e, L, function (e) {
            if (e.type === "from_worker_to_main_prefetch_cache_result") {
              u == null ||
                u({
                  hit: e.hit,
                  prefetchKey: e.prefetchKey,
                  representationID: e.representationID,
                });
              return;
            }
            Z(e);
          });
          return (m == null || m(t.sendHaltedToWorker), t);
        }
        function ae(e, t) {
          (m == null || m(null),
            e.sendToWorker({
              eventToWorker: {
                playerInstanceKey: L,
                type: "from_main_to_worker_unlink_player",
              },
              type: "send_to_worker",
            }),
            e.disconnectFromWorker(t));
        }
        function ie(t) {
          if (
            ee.state !== "__disposed__" &&
            (ee.workerType === "RealWorker" || ee.workerType === "RealWorkerV2")
          ) {
            var n,
              r = o("nextgendasherr").nextgendasherrFromCause(
                Q,
                t,
                "VideoPlayerNextgendashMainWith" +
                  ee.workerType +
                  "/FallbackToVirtualWorker",
                "Fallback to VirtualWorker from " + ee.workerType,
              );
            Q.logging.log(Q, { error: r, type: "generic_error" });
            var a = ee.playerStateForDebug,
              i = ee.playerStateFromMainSent,
              l = ee.playerStateFromWorker,
              s = ee.workerConnection,
              u = babelHelpers.objectWithoutPropertiesLoose(ee, e);
            return (
              s != null && ae(s, r),
              babelHelpers.extends({}, u, {
                pendingEvents: (n = u.pendingEvents) != null ? n : [],
                state: "waiting_worker_connection",
                workerType: "VirtualWorker",
              })
            );
          } else throw t;
        }
        function le(e, t, n, r) {
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
            throw te(
              "throw",
              "Expected either mediaSourceHandle or mediaSource from Worker.",
            );
          (r != null &&
            (Q.host.mediaSinkReceivedSourceHandle == null ||
              Q.host.mediaSinkReceivedSourceHandle(Q, r)),
            J(e, o));
        }
        function se(e, t) {
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
            Q.workQueue.enqueueWork(function () {
              C(o, a);
            });
        }
        function ue(e, t) {
          var n = t.dashManifestUrl,
            a = t.dashManifestXmlString;
          if (a != null)
            return (
              J(e.dashManifestParsed, {
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
              requestCreatedClock: Q.host.clock(),
              requestID: "dash_manifest_from_url_" + i,
              requestInfo: n,
              responseMode: "text",
            };
            ((l = Y(
              "dashManifestFromUrl",
              o("VideoPlayerNextgendashFetchedResource")
                .VideoPlayerNextgendashFetchedResourceSM,
              {
                onNetworkDiagnostics: r("emptyFunction"),
                onTransitioned: function (t, n, r) {
                  Z(
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
              J(l, { type: "start" }));
          }
          return babelHelpers.extends({}, e, {
            dashManifestFromUrl: l,
            dashManifestFromUrlRequestIndex: i,
            lastDashManifestUrl: n != null ? n : e.lastDashManifestUrl,
          });
        }
        switch (ee.state) {
          case "waiting_worker_connection":
            switch (X.type) {
              case "__enter": {
                var ce = oe(ee.workerType);
                return (
                  ce.sendToWorker({
                    eventToWorker: {
                      nextgendashInstanceIndex: a,
                      playerInstanceKey: L,
                      playerStateFromMain: d(Q, ee),
                      playerSubOrigin: q,
                      prefetchKey: z,
                      prefetchResultInitial: H,
                      type: "from_main_to_worker_link_player",
                      videoFBID: z,
                    },
                    type: "send_to_worker",
                  }),
                  babelHelpers.extends({}, ee, {
                    state: "waiting_linked_to_worker",
                    workerConnection: ce,
                  })
                );
              }
              case "__exception":
                return ie(X.exception);
              case "__dispose":
                return;
              case "debug_config":
                return;
              case "update_expired_video_url_refresh_handler":
                return;
              case "update_player_viewport_dimensions":
                return;
              case "update_dash_manifest":
                return Q.config.handleUpdateDashManifestInWaitingStates
                  ? ue(ee, X)
                  : (ee.pendingEvents.push(X), ee);
              case "update_scroll_position_api":
                return;
              default:
                return (X.type, ee.pendingEvents.push(X), ee);
            }
          case "waiting_linked_to_worker":
            switch (X.type) {
              case "__enter": {
                var de = ee.pendingEvents.reduce(
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
                  me = de.nextStatePendingEvents,
                  pe = de.thisStatePendingEvents;
                return (
                  pe.forEach(function (e) {
                    Z(e);
                  }),
                  babelHelpers.extends({}, ee, { pendingEvents: me })
                );
              }
              case "__exception":
                return ie(X.exception);
              case "__dispose":
                return;
              case "debug_config":
                return;
              case "update_expired_video_url_refresh_handler":
                return;
              case "update_player_viewport_dimensions":
                return;
              case "from_worker_to_main_player_new_media_source": {
                if (X.workerType !== ee.workerType || X.playerInstanceKey !== L)
                  return;
                le(
                  ee.mediaElement,
                  X.mediaSourceIndex,
                  X.mediaSource,
                  X.mediaSourceHandle,
                );
                var _e = ee.pendingEvents,
                  fe = babelHelpers.objectWithoutPropertiesLoose(ee, s);
                return (
                  _e.forEach(function (e) {
                    Z(e);
                  }),
                  babelHelpers.extends({}, fe, {
                    playerStateForDebug: _(
                      X.playerStateForDebug,
                      ee.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromMainSent: null,
                    playerStateFromWorker: o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(X.playerStateFromWorker),
                    state: "linked_to_worker",
                  })
                );
              }
              case "from_worker_to_main_player_unlinked": {
                if (X.workerType !== ee.workerType || X.playerInstanceKey !== L)
                  return;
                Z({
                  exception:
                    X.exceptionSnapshot != null
                      ? o("nextgendasherr").nextgendasherrFromCause(
                          Q,
                          o("nextgendasherr").nextgendasherrFromSnapshot(
                            X.exceptionSnapshot,
                          ),
                          "VideoPlayerNextgendashMainUnexpectedUnlinkedBeforeLinked",
                        )
                      : o("nextgendasherr").nextgendasherr(
                          Q,
                          "VideoPlayerNextgendashMainUnexpectedUnlinkedBeforeLinked",
                        ),
                  type: "__exception",
                });
                return;
              }
              case "from_worker_to_main_player_warning": {
                if (X.workerType !== ee.workerType || X.playerInstanceKey !== L)
                  return;
                re(
                  o("nextgendasherr").nextgendasherrFromSnapshot(
                    X.warningErrorSnapshot,
                  ),
                );
                return;
              }
              case "from_worker_to_main_player_fatal_error": {
                if (X.workerType !== ee.workerType || X.playerInstanceKey !== L)
                  return;
                Z({
                  exception: o("nextgendasherr").nextgendasherrFromCause(
                    Q,
                    o("nextgendasherr").nextgendasherrFromSnapshot(
                      X.errorSnapshot,
                    ),
                    "VideoPlayerNextgendashMainFatalFromWorkerPlayerBeforeLinked",
                  ),
                  type: "__exception",
                });
                return;
              }
              case "update_dash_manifest":
                return Q.config.handleUpdateDashManifestInWaitingStates
                  ? ue(ee, X)
                  : (ee.pendingEvents.push(X), ee);
              case "update_scroll_position_api":
                return;
              default:
                return (X.type, ee.pendingEvents.push(X), ee);
            }
          case "linked_to_worker":
            switch (X.type) {
              case "__enter": {
                se(X.prevState.playerStateFromWorker, ee.playerStateFromWorker);
                return;
              }
              case "__exception":
                return Q.config.isLivePlayback &&
                  X.exception.name.includes("DashManifest")
                  ? (Q.logging.log(Q, {
                      error: X.exception,
                      format:
                        "live manifest-refresh __exception absorbed in linked_to_worker",
                      type: "generic_error_as_warning",
                    }),
                    ee)
                  : void 0;
              case "__dispose": {
                p(
                  Q,
                  "explicit",
                  ee.liveManifestRefreshTimerHandle,
                  ee.liveNoProgressWatchdogTimerHandle,
                );
                return;
              }
              case "_dash_manifest_from_url_transitioned": {
                if (
                  (h(Q, X.fromState, X.toState, ee.dashManifestParsed, Z, J),
                  Q.config.enableLive &&
                    ee.lastDashManifestUrl != null &&
                    X.toState.state === "failed")
                ) {
                  ee.liveManifestRefreshTimerHandle != null &&
                    Q.host.timers.clearTimeout(
                      ee.liveManifestRefreshTimerHandle,
                    );
                  var ge = ee.liveManifestRefreshRetryCount,
                    he = o(
                      "VideoPlayerNextgendashRetryLogic",
                    ).calculateExponentialDelayWithJitter(
                      U,
                      ge,
                      Q.host.random.random,
                    ),
                    ye = Q.host.timers.setTimeout(function () {
                      Z({ type: "_manifest_refresh_timer_fired" });
                    }, he);
                  return babelHelpers.extends({}, ee, {
                    liveManifestRefreshRetryCount: ge + 1,
                    liveManifestRefreshTimerHandle: ye,
                  });
                }
                return;
              }
              case "_dash_manifest_parsed_transitioned": {
                var Ce = y(Q, ee, X.fromState, X.toState, Z, l),
                  be = Ce != null ? Ce : ee;
                if (X.toState.state === "parsed") {
                  var ve,
                    Se = G(Q, be, X.toState),
                    Re =
                      Se.liveManifestRefreshRetryCount > 0
                        ? babelHelpers.extends({}, Se, {
                            liveManifestRefreshRetryCount: 0,
                          })
                        : Se,
                    Le = (ve = V(Q, Re, X.toState, Z)) != null ? ve : Re;
                  return O(Q, Le, Z);
                }
                if (
                  Q.config.isLivePlayback &&
                  Q.config.enableLive &&
                  be.lastDashManifestUrl != null &&
                  X.toState.state === "failed_to_parse"
                ) {
                  be.liveManifestRefreshTimerHandle != null &&
                    Q.host.timers.clearTimeout(
                      be.liveManifestRefreshTimerHandle,
                    );
                  var Ee = be.liveManifestRefreshRetryCount,
                    ke = o(
                      "VideoPlayerNextgendashRetryLogic",
                    ).calculateExponentialDelayWithJitter(
                      U,
                      Ee,
                      Q.host.random.random,
                    ),
                    Ie = Q.host.timers.setTimeout(function () {
                      Z({ type: "_manifest_refresh_timer_fired" });
                    }, ke);
                  return babelHelpers.extends({}, be, {
                    liveManifestRefreshRetryCount: Ee + 1,
                    liveManifestRefreshTimerHandle: Ie,
                  });
                }
                return Ce;
              }
              case "_manifest_refresh_timer_fired": {
                if (!Q.config.enableLive || ee.lastDashManifestUrl == null)
                  return ee.liveManifestRefreshTimerHandle != null
                    ? (Q.host.timers.clearTimeout(
                        ee.liveManifestRefreshTimerHandle,
                      ),
                      babelHelpers.extends({}, ee, {
                        liveManifestRefreshTimerHandle: null,
                      }))
                    : void 0;
                var Te = ue(ee, {
                  dashManifestUrl: ee.lastDashManifestUrl,
                  dashManifestXmlString: null,
                  type: "update_dash_manifest",
                });
                return babelHelpers.extends({}, Te != null ? Te : ee, {
                  liveManifestRefreshTimerHandle: null,
                });
              }
              case "_live_no_progress_watchdog_tick": {
                var De, xe, $e, Pe, Ne, Me, we, Ae;
                if (
                  !Q.config.isLivePlayback ||
                  !Q.config.enableLive ||
                  Q.config.liveNoProgressWatchdogThresholdSec <= 0
                )
                  return ee.liveNoProgressWatchdogTimerHandle != null
                    ? (Q.host.timers.clearTimeout(
                        ee.liveNoProgressWatchdogTimerHandle,
                      ),
                      babelHelpers.extends({}, ee, {
                        liveNoProgressWatchdogTimerHandle: null,
                      }))
                    : void 0;
                var Fe = ee.mediaElement.state.mediaElementSnapshot,
                  Oe = c(Q, ee),
                  Be = Q.host.clock().perfMs,
                  We = T(ee.playheadLastSeenTimeSec, Oe, v),
                  qe = We ? Be : ee.playheadLastMovedAtPerfMs,
                  Ue = We ? Oe : ee.playheadLastSeenTimeSec,
                  Ve = Fe != null ? D(Fe.buffered, Oe) : null,
                  He = Fe != null ? x(Fe.buffered, Oe) : null,
                  Ge = W({
                    currentTimeSec: Oe,
                    liveEdgeOffsetSec: j,
                    liveEdgeTimeSec: ee.playerStateFromWorker.liveEdgeTimeSec,
                    maxSeekTargetSec: He,
                    minBehindLiveEdgeSec: B,
                  }),
                  ze = $({
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
                    starvationBufferAheadSec: b,
                    thresholdSec: Q.config.liveNoProgressWatchdogThresholdSec,
                  }),
                  je = ee.lastDashManifestUrl,
                  Ke = ee.dashManifestFromUrl != null,
                  Qe = ze && je != null && !Ke,
                  Xe = F(Q, Z),
                  Ye = N(ee.liveConsecutiveWatchdogKicks, We, ze),
                  Je = w(
                    (Pe =
                      (Ne = ee.playerStateFromWorker) == null
                        ? void 0
                        : Ne.liveEdgeTimeSec) != null
                      ? Pe
                      : null,
                    Oe,
                    Q.config.liveFellBehindEdgeReseekDriftSec,
                  ),
                  Ze =
                    Q.config.liveProactiveEdgeReseekEnabled &&
                    A({
                      followEdgeActive: Q.config.liveFollowEdgeActive,
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
                    (Je || P(Ye, Q.config.liveStallReseekToEdgeAfterKicks))) ||
                  Ze
                ) {
                  var et,
                    tt,
                    nt,
                    rt = M(
                      (et =
                        (tt = ee.playerStateFromWorker) == null
                          ? void 0
                          : tt.liveEdgeTimeSec) != null
                        ? et
                        : null,
                      Oe,
                      S,
                      R,
                    ),
                    ot =
                      (nt = ee.mediaElement) == null || (nt = nt.state) == null
                        ? void 0
                        : nt.mediaElement;
                  if (rt != null && ot != null)
                    return (
                      Q.logging.log(Q, {
                        format:
                          "live no-progress watchdog: recovering in-engine by re-seeking the playhead to the live edge (largeDrift=%s proactive=%s)",
                        params: [String(Je), String(Ze)],
                        type: "generic_warning",
                      }),
                      Q.host.mediaElementSetPlayhead(Q, ot, rt),
                      babelHelpers.extends({}, ee, {
                        liveConsecutiveWatchdogKicks: 0,
                        liveNoProgressWatchdogTimerHandle: Xe,
                        playheadLastMovedAtPerfMs: Be,
                        playheadLastSeenTimeSec: Oe,
                      })
                    );
                }
                var at = ee.mediaElement.state.mediaElement,
                  it = null;
                ze &&
                  Ge != null &&
                  at != null &&
                  (Q.host.mediaElementSetPlayhead(Q, at, Ge), (it = Ge));
                var lt = it != null ? it : Oe;
                if (!Qe) {
                  if (it != null) {
                    var st;
                    Q.logging.log(Q, {
                      format:
                        "live no-progress watchdog: playhead frozen (starved or stale-live), seeking without manifest refresh. %s %s %s %s",
                      params: [
                        "currentTimeSec=" + (Oe != null ? Oe : "unknown"),
                        "liveEdgeTimeSec=" +
                          ((st = ee.playerStateFromWorker.liveEdgeTimeSec) !=
                          null
                            ? st
                            : "unknown"),
                        "bufferedEndSec=" + (He != null ? He : "unknown"),
                        "seekTargetSec=" + it,
                      ],
                      type: "generic_warning",
                    });
                  }
                  return babelHelpers.extends({}, ee, {
                    liveConsecutiveWatchdogKicks: Ye,
                    liveNoProgressWatchdogTimerHandle: Xe,
                    playheadLastMovedAtPerfMs: it != null ? Be : qe,
                    playheadLastSeenTimeSec: it != null ? it : Ue,
                  });
                }
                (Q.logging.log(Q, {
                  format:
                    "live no-progress watchdog: playhead frozen (starved or stale-live), forcing manifest refresh. %s %s %s %s",
                  params: [
                    "currentTimeSec=" + (Oe != null ? Oe : "unknown"),
                    "liveEdgeTimeSec=" +
                      ((Ae = ee.playerStateFromWorker.liveEdgeTimeSec) != null
                        ? Ae
                        : "unknown"),
                    "bufferedEndSec=" + (He != null ? He : "unknown"),
                    "seekTargetSec=" + (Ge != null ? Ge : "none"),
                  ],
                  type: "generic_warning",
                }),
                  ee.liveManifestRefreshTimerHandle != null &&
                    Q.host.timers.clearTimeout(
                      ee.liveManifestRefreshTimerHandle,
                    ));
                var ut = ue(ee, {
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
                var ct, dt, mt;
                if (Q.config.isLivePlayback && Q.config.startTimestampSec > 0) {
                  var pt = c(Q, ee);
                  if (pt != null && pt < Q.config.startTimestampSec - 1) {
                    var _t,
                      ft =
                        (_t = ee.mediaElement) == null ||
                        (_t = _t.state) == null
                          ? void 0
                          : _t.mediaElement;
                    ft != null &&
                      Q.host.mediaElementSetPlayhead(
                        Q,
                        ft,
                        Q.config.startTimestampSec,
                      );
                  }
                }
                var gt = ee.mediaElement.state.mediaElementSnapshot,
                  ht = c(Q, ee),
                  yt = Q.host.clock().perfMs,
                  Ct = T(ee.forceKickPlayheadLastSeenTimeSec, ht, v),
                  bt = Ct ? yt : ee.forceKickPlayheadLastMovedAtPerfMs,
                  vt = Ct ? ht : ee.forceKickPlayheadLastSeenTimeSec,
                  St = I({
                    currentTimeSec: ht,
                    enabled: Q.config.liveForceWorkerKickOnStallEnabled,
                    ended:
                      (ct = gt == null ? void 0 : gt.ended) != null ? ct : !1,
                    frozenThresholdMs: k,
                    hasError: (gt == null ? void 0 : gt.error) != null,
                    isLivePlayback: Q.config.isLivePlayback,
                    lastForcedWorkerKickPerfMs: ee.lastForcedWorkerKickPerfMs,
                    minIntervalMs: E,
                    nowPerfMs: yt,
                    paused:
                      (dt = gt == null ? void 0 : gt.paused) != null ? dt : !0,
                    playheadLastMovedAtPerfMs: bt,
                    seeking:
                      (mt = gt == null ? void 0 : gt.seeking) != null ? mt : !1,
                  });
                return St
                  ? babelHelpers.extends(
                      {},
                      g(Q, L, ee, X.type + ":force_worker_kick_on_stall"),
                      {
                        forceKickPlayheadLastMovedAtPerfMs: bt,
                        forceKickPlayheadLastSeenTimeSec: vt,
                        lastForcedWorkerKickPerfMs: yt,
                      },
                    )
                  : babelHelpers.extends({}, f(Q, L, ee, X.type), {
                      forceKickPlayheadLastMovedAtPerfMs: bt,
                      forceKickPlayheadLastSeenTimeSec: vt,
                    });
              }
              case "_request_recovery_from_source_reset": {
                ee.workerConnection.sendToWorker({
                  eventToWorker: {
                    mediaSourceIndex: X.mediaSourceIndex,
                    playerInstanceKey: L,
                    type: "from_main_to_worker_request_recovery_from_source_reset",
                  },
                  type: "send_to_worker",
                });
                return;
              }
              case "_notify_deliberate_detach_for_unmount": {
                ee.workerConnection.sendToWorker({
                  eventToWorker: {
                    mediaSourceIndex: X.mediaSourceIndex,
                    playerInstanceKey: L,
                    type: "from_main_to_worker_notify_deliberate_detach_for_unmount",
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
                return ue(ee, X);
              case "_send_state_to_worker":
                return f(Q, L, ee, X.type);
              case "update_media_element":
                return (
                  J(ee.mediaElement, {
                    mediaElement: X.mediaElement,
                    type: "update_media_element",
                  }),
                  Q.config.eagerResyncOnMediaElementAttach &&
                  X.mediaElement != null
                    ? f(Q, L, ee, X.type)
                    : void 0
                );
              case "update_config_from_env":
                return g(Q, L, ee, X.type);
              case "select_video_quality":
                return f(
                  Q,
                  L,
                  babelHelpers.extends({}, ee, {
                    selectedVideoQualityDisplayLabel:
                      X.videoQualityDisplayLabel,
                  }),
                  X.type,
                );
              case "select_media_variant":
                return f(
                  Q,
                  L,
                  babelHelpers.extends({}, ee, {
                    selectedMediaVariant: X.mediaVariant,
                  }),
                  X.type,
                );
              case "debug_log_stall_details": {
                ee.workerConnection.sendToWorker({
                  eventToWorker: {
                    mediaElementSnapshotFromMain:
                      ee.mediaElement.state.mediaElementSnapshot,
                    playerInstanceKey: L,
                    stallStartClock: X.stallStartClock,
                    type: "from_main_to_worker_debug_log_stall_details",
                  },
                  type: "send_to_worker",
                });
                return;
              }
              case "from_worker_to_main_player_new_media_source": {
                if (X.workerType !== ee.workerType || X.playerInstanceKey !== L)
                  return;
                le(
                  ee.mediaElement,
                  X.mediaSourceIndex,
                  X.mediaSource,
                  X.mediaSourceHandle,
                );
                var Rt = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject(X.playerStateFromWorker);
                return (
                  se(ee.playerStateFromWorker, Rt),
                  babelHelpers.extends({}, ee, {
                    playerStateForDebug: _(
                      X.playerStateForDebug,
                      ee.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromWorker: Rt,
                  })
                );
              }
              case "from_worker_to_main_player_unlinked": {
                if (X.workerType !== ee.workerType || X.playerInstanceKey !== L)
                  return;
                var Lt =
                  X.exceptionSnapshot != null
                    ? o("nextgendasherr").nextgendasherrFromCause(
                        Q,
                        o("nextgendasherr").nextgendasherrFromSnapshot(
                          X.exceptionSnapshot,
                        ),
                        "VideoPlayerNextgendashMainUnexpectedUnlinkedFromWorker",
                        "Reason: " + X.reason,
                      )
                    : o("nextgendasherr").nextgendasherr(
                        Q,
                        "VideoPlayerNextgendashMainUnexpectedUnlinkedFromWorker",
                        "Reason: " + X.reason,
                      );
                if (
                  (ee.workerType === "RealWorker" ||
                    ee.workerType === "RealWorkerV2") &&
                  !Q.config.disableFallbackFromRealWorkerAfterLinked
                )
                  return ie(Lt);
                Z({ exception: Lt, type: "__exception" });
                return;
              }
              case "from_worker_to_main_player_warning": {
                if (X.workerType !== ee.workerType || X.playerInstanceKey !== L)
                  return;
                re(
                  o("nextgendasherr").nextgendasherrFromSnapshot(
                    X.warningErrorSnapshot,
                  ),
                );
                var Et = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject(X.playerStateFromWorker);
                return (
                  se(ee.playerStateFromWorker, Et),
                  babelHelpers.extends({}, ee, {
                    playerStateForDebug: _(
                      X.playerStateForDebug,
                      ee.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromWorker: Et,
                  })
                );
              }
              case "from_worker_to_main_player_fatal_error": {
                if (X.workerType !== ee.workerType || X.playerInstanceKey !== L)
                  return;
                Z({
                  exception: o("nextgendasherr").nextgendasherrFromCause(
                    Q,
                    o("nextgendasherr").nextgendasherrFromSnapshot(
                      X.errorSnapshot,
                    ),
                    "VideoPlayerNextgendashMainFatalFromWorkerPlayer",
                  ),
                  type: "__exception",
                });
                var kt = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject(X.playerStateFromWorker);
                return (
                  se(ee.playerStateFromWorker, kt),
                  babelHelpers.extends({}, ee, {
                    playerStateForDebug: _(
                      X.playerStateForDebug,
                      ee.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromWorker: kt,
                  })
                );
              }
              case "from_worker_to_main_playback_loop_state": {
                if (X.workerType !== ee.workerType || X.playerInstanceKey !== L)
                  return;
                var It = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject(X.playerStateFromWorker);
                return (
                  se(ee.playerStateFromWorker, It),
                  babelHelpers.extends({}, ee, { playerStateFromWorker: It })
                );
              }
              case "from_worker_to_main_player_state_for_debug":
                return X.workerType !== ee.workerType ||
                  X.playerInstanceKey !== L
                  ? void 0
                  : babelHelpers.extends({}, ee, {
                      playerStateForDebug: _(
                        X.playerStateForDebug,
                        ee.mediaElement.state.mediaElementSnapshot,
                      ),
                    });
              case "from_worker_to_main_refresh_urls": {
                ee.dashManifestParsed.sendEvent({
                  type: "handle_worker_url_refresh_request",
                  urls: X.urls,
                });
                return;
              }
              case "update_scroll_position_api":
                return;
              default:
                X.type;
                return;
            }
          case "__disposed__":
            switch (X.type) {
              case "__enter": {
                var Tt = X.prevState;
                p(
                  Q,
                  "terminal",
                  Tt.liveManifestRefreshTimerHandle,
                  Tt.liveNoProgressWatchdogTimerHandle,
                );
                var Dt =
                    "VideoPlayerNextgendashMainWith" +
                    Tt.workerType +
                    "/Disposed[" +
                    ee.reason +
                    "@" +
                    Tt.state +
                    "]",
                  xt =
                    "Disposed: " +
                    ee.reason +
                    "@" +
                    Tt.state +
                    "; playerStateFromWorker=%s",
                  $t = function () {
                    var e;
                    return (e = JSON.stringify(Tt.playerStateFromWorker)) !=
                      null
                      ? e
                      : "undefined";
                  },
                  Pt =
                    ee.exception != null
                      ? o("nextgendasherr").nextgendasherrFromCause(
                          Q,
                          ee.exception,
                          Dt,
                          xt,
                          $t(),
                        )
                      : null;
                (Tt.workerConnection != null &&
                  ae(
                    Tt.workerConnection,
                    Pt != null
                      ? Pt
                      : function () {
                          return o("nextgendasherr").nextgendasherr(
                            Q,
                            Dt,
                            xt,
                            $t(),
                          );
                        },
                  ),
                  Tt.scrollPositionSubscription != null &&
                    Tt.scrollPositionSubscription.remove(),
                  Pt != null && i(Pt));
                return;
              }
              default:
                return;
            }
          default:
            ee.state;
            return;
        }
      },
    );
    function p(e, t, n, r) {
      var o = e.config.enableDisposalResourceCleanup
        ? t === "terminal"
        : t === "explicit";
      o &&
        (n != null && e.host.timers.clearTimeout(n),
        r != null && e.host.timers.clearTimeout(r));
    }
    function _(e, t) {
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
    function f(e, t, n, o) {
      var a = d(e, n);
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
    function g(e, t, n, r) {
      var o = d(e, n);
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
    function h(e, t, n, r, a, i) {
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
    function y(e, t, n, r, a, i) {
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
    var C = 0.001,
      b = 0.5,
      v = 1,
      S = 2,
      R = 4,
      L = 2e3,
      E = 1e3,
      k = 1e3;
    function I(e) {
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
    function T(e, t, n) {
      return t == null ? !1 : e == null || t < e - C ? !0 : t - e >= n;
    }
    function D(e, t) {
      if (t == null) return null;
      var n = x(e, t);
      return n != null ? Math.max(0, n - t) : 0;
    }
    function x(e, t) {
      if (t == null) return null;
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (r[0] <= t && t <= r[1]) return r[1];
      }
      return null;
    }
    function $(e) {
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
    function P(e, t) {
      return t > 0 && e >= t;
    }
    function N(e, t, n) {
      return t ? 0 : n ? e + 1 : e;
    }
    function M(e, t, n, r) {
      if (e == null || t == null || e - t < r) return null;
      var o = e - n;
      return o > t ? o : null;
    }
    function w(e, t, n) {
      return n > 0 && e != null && t != null && e - t > n;
    }
    function A(e) {
      var t = e.followEdgeActive,
        n = e.largeDrift,
        r = e.paused,
        o = e.seeking,
        a = e.shouldKick;
      return n && !a && t && !r && !o;
    }
    function F(e, t) {
      return e.host.timers.setTimeout(function () {
        t({ type: "_live_no_progress_watchdog_tick" });
      }, L);
    }
    function O(e, t, n) {
      return !e.config.isLivePlayback ||
        !e.config.enableLive ||
        e.config.liveNoProgressWatchdogThresholdSec <= 0 ||
        t.liveNoProgressWatchdogTimerHandle != null
        ? t
        : babelHelpers.extends({}, t, {
            liveNoProgressWatchdogTimerHandle: F(e, n),
          });
    }
    var B = 15;
    function W(e) {
      var t = e.currentTimeSec,
        n = e.liveEdgeOffsetSec,
        r = e.liveEdgeTimeSec,
        o = e.maxSeekTargetSec,
        a = e.minBehindLiveEdgeSec;
      if (t == null || r == null || o == null || r - t < a) return null;
      var i = Math.min(Math.max(0, r - n), o);
      return i > t ? i : null;
    }
    var q = 2e3,
      U = Object.freeze({
        backoffMultiplier: 2,
        initialDelayMs: 200,
        jitterPercent: 0.2,
        maxDelayMs: 1e4,
        retryBehavior: "exponential",
        retryCount: 1 / 0,
      });
    function V(e, t, n, r) {
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
              : q,
        i = e.host.timers.setTimeout(function () {
          r({ type: "_manifest_refresh_timer_fired" });
        }, a);
      return babelHelpers.extends({}, t, { liveManifestRefreshTimerHandle: i });
    }
    function H(e) {
      var t = e.enableLive,
        n = e.isManifestParsed,
        r = e.manifestType;
      return t && n && r === "dynamic";
    }
    function G(e, t, n) {
      var r;
      if (
        !H({
          enableLive: e.config.enableLive,
          isManifestParsed: n.state === "parsed",
          manifestType:
            n.state === "parsed" ? n.data.metadata.manifestType : null,
        }) ||
        n.state !== "parsed"
      )
        return t;
      e.config.isLivePlayback = !0;
      var o = t.liveStartTimestampSecIsManifestDerived;
      if (
        z({
          isManifestDerived: o,
          playheadSec: (r = c(e, t)) != null ? r : 0,
          startTimestampSec: e.config.startTimestampSec,
        })
      ) {
        var a = n.data,
          i = a.manifestRepresentations,
          l = a.metadata,
          s = Y({
            audioWindow: X(i.audio),
            minBufferTimeSec: l.minBufferTimeSec,
            suggestedPresentationDelaySec: l.suggestedPresentationDelaySec,
            videoWindow: X(i.video),
          });
        s != null && ((e.config.startTimestampSec = s), (o = !0));
      }
      return o === t.liveStartTimestampSecIsManifestDerived
        ? t
        : babelHelpers.extends({}, t, {
            liveStartTimestampSecIsManifestDerived: o,
          });
    }
    function z(e) {
      var t = e.isManifestDerived,
        n = e.playheadSec,
        r = e.startTimestampSec;
      return r === 0 ? !0 : t && n === 0;
    }
    var j = 5,
      K = 5,
      Q = 3;
    function X(e) {
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
    function Y(e) {
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
            ? (u = Math.max(s * Q, n != null ? n : 0))
            : (u = K),
        (u = Math.max(u, K)),
        Math.min(Math.max(i - u, l), i)
      );
    }
    function J(e) {
      var t = e.state;
      if (t.state === "__null__" || t.state === "__disposed__") return null;
      var n = t.dashManifestParsed.state;
      return n.state !== "parsed" ? null : n;
    }
    function Z(e) {
      var t = J(e);
      return t == null
        ? null
        : t.data.metadata.manifestIsMixedCodecVideo ||
            t.data.metadata.manifestIsMixedCodecAudio;
    }
    function ee(e) {
      var t, n;
      return (t =
        (n = J(e)) == null ? void 0 : n.data.metadata.manifestIdentifier) !=
        null
        ? t
        : null;
    }
    function te(e) {
      var t = J(e);
      return t == null
        ? null
        : t.data.manifestRepresentations.video.some(function (e) {
            return (
              e.segmentsInfo.type === "SegmentTemplate" &&
              e.segmentsInfo.segmentTimelinePredictive != null
            );
          });
    }
    function ne(e) {
      var t = e.state;
      return t.state === "linked_to_worker" ? t.playerStateFromWorker : null;
    }
    function re(e) {
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
    function oe(e) {
      var t,
        n = J(e);
      return (t = n == null ? void 0 : n.data.manifestRepresentations.video) !=
        null
        ? t
        : [];
    }
    function ae(e) {
      var t,
        n = J(e);
      return (t = n == null ? void 0 : n.data.manifestRepresentations.audio) !=
        null
        ? t
        : [];
    }
    function ie(e, t) {
      var n,
        r,
        o = ne(e),
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
    function le(e) {
      return ie(e, oe(e));
    }
    function se(e, t) {
      var n,
        r,
        o = ne(e),
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
    function ue(e) {
      return se(e, ae(e));
    }
    function ce(e, t) {
      var n,
        r,
        o = ne(e),
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
    function de(e, t, n) {
      return o(
        "VideoPlayerNextgendashMediaUtils",
      ).findTimeRangeAnnotationAtMediaTime(e, t, n);
    }
    function me(e) {
      var t,
        n = ne(e),
        r = re(e),
        o = de(
          r,
          n == null || (t = n.bufferedRangesWithRepIds) == null
            ? void 0
            : t.audio,
          n == null ? void 0 : n.targetRepresentationId.audio,
        ),
        a = ae(e).find(function (e) {
          return e.representationId === o;
        });
      return a;
    }
    function pe(e) {
      var t,
        n = ne(e),
        r = re(e),
        o = de(
          r,
          n == null || (t = n.bufferedRangesWithRepIds) == null
            ? void 0
            : t.video,
          n == null ? void 0 : n.targetRepresentationId.video,
        ),
        a = oe(e).find(function (e) {
          return e.representationId === o;
        });
      return a;
    }
    function _e(e, t) {
      var n,
        r = ne(e),
        o = de(
          t,
          r == null || (n = r.bufferedRangesWithRepIds) == null
            ? void 0
            : n.video,
          null,
        );
      return oe(e).find(function (e) {
        return e.representationId === o;
      });
    }
    function fe(e) {
      var t = ne(e),
        n = t == null ? void 0 : t.targetRepresentationId.audio,
        r = ae(e).find(function (e) {
          return e.representationId === n;
        });
      return r;
    }
    function ge(e) {
      var t = ne(e),
        n = t == null ? void 0 : t.targetRepresentationId.video,
        r = oe(e).find(function (e) {
          return e.representationId === n;
        });
      return r;
    }
    function he(e) {
      var t = e.state,
        n =
          t.state === "__null__" || t.state === "__disposed__"
            ? null
            : t.selectedMediaVariant;
      return n;
    }
    function ye(e) {
      var t = e.state,
        n =
          t.state === "__null__" || t.state === "__disposed__"
            ? null
            : t.selectedVideoQualityDisplayLabel;
      return n;
    }
    ((l.VideoPlayerNextgendashMainSM = m),
      (l.internal_clearLivePlaybackTimers = p),
      (l.internal_shouldForceWorkerKickOnStall = I),
      (l.internal_didPlayheadMakeProgress = T),
      (l.internal_getBufferedAheadSec = D),
      (l.internal_getBufferedEndSec = x),
      (l.internal_shouldKickStalledPlaybackWatchdog = $),
      (l.internal_shouldRecoverAfterKick = P),
      (l.internal_getNextConsecutiveWatchdogKicks = N),
      (l.internal_getLiveEdgeReseekTargetSec = M),
      (l.internal_shouldReseekToEdgeImmediatelyForLargeDrift = w),
      (l.internal_shouldProactivelyReseekToEdgeForLargeDrift = A),
      (l.internal_getLiveCatchUpSeekTargetSec = W),
      (l.internal_shouldMarkLivePlayback = H),
      (l.internal_shouldUpdateLiveStartTimestampSec = z),
      (l.internal_getLiveStreamWindow = X),
      (l.internal_computeLiveStartPositionSec = Y),
      (l.getIsMixedCodecManifest = Z),
      (l.getManifestIdentifier = ee),
      (l.getIsPredictiveDash = te),
      (l.getAvailableVideoRepresentations = le),
      (l.getAvailableAudioRepresentations = ue),
      (l.filterVideoRepresentationsByTargetVariant = ce),
      (l.internal_findCurrentPlayingRepresentationID = de),
      (l.getCurrentPlayingAudioRepresentation = me),
      (l.getCurrentPlayingVideoRepresentation = pe),
      (l.getVideoRepresentationAtMediaTime = _e),
      (l.getCurrentTargetAudioRepresentation = fe),
      (l.getCurrentTargetVideoRepresentation = ge),
      (l.getSelectedMediaVariant = he),
      (l.getSelectedVideoQualityDisplayLabel = ye));
  },
  98,
);
