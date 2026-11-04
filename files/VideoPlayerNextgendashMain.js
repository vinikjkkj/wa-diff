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
    "VideoPlayerNextgendashWorkerPrefetchCache",
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
    function d(e) {
      var t = e.currentTimeAbsoluteMs,
        n = e.debugOverlay,
        r = e.snapshot;
      return r == null
        ? null
        : babelHelpers.extends({}, n ? { bufferedForDebug: r.buffered } : {}, {
            bufferedFully: o(
              "VideoPlayerNextgendashMediaUtils",
            ).isFullyBuffered(r),
            currentTime: r.currentTime,
            currentTimeAbsoluteMs: t,
            duration: r.duration,
            error: r.error,
            paused: r.paused,
            playbackRate: r.playbackRate,
            readyState: r.readyState,
            seeking: r.seeking,
          });
    }
    function m(e, t) {
      var n,
        o,
        a,
        i,
        l = e.config,
        s = t.mediaElement.state.mediaElementSnapshot,
        c =
          l.playheadPredictIntervalMs > 0
            ? e.host.clockPerfOriginMs +
              ((n =
                (o = t.mediaElement.state.mediaElementSnapshotClock) == null
                  ? void 0
                  : o.perfMs) != null
                ? n
                : e.host.clock().perfMs)
            : 0,
        m = d({
          currentTimeAbsoluteMs: c,
          debugOverlay: l.debugOverlay,
          snapshot: s,
        }),
        p = (a = t.scrollPositionAPI) == null ? void 0 : a.getCurrent(),
        _ = 1,
        f = !1;
      if ((u || (u = r("ExecutionEnvironment"))).canUseDOM) {
        var g;
        ((_ = (g = window.devicePixelRatio) != null ? g : 1),
          (f = document.hidden));
      }
      return {
        abrConfig: t.abrConfig,
        configFromMain: l,
        dashManifestData:
          t.state === "linked_to_worker" &&
          t.dashManifestParsed.state.state === "parsed"
            ? t.dashManifestParsed.state.data
            : null,
        devicePixelRatio: _,
        isDocumentHidden: f,
        mediaElementSnapshot: m,
        mediaSourceIndexApplied:
          (i = t.mediaElement.state.mediaSourceIndex) != null ? i : null,
        playerViewportDimensions: t.playerViewportDimensions,
        scrollPositionInfo: p,
        selectedMediaVariant: t.selectedMediaVariant,
        selectedVideoQualityDisplayLabel: t.selectedVideoQualityDisplayLabel,
        shouldSendPlayerStateForDebug: t.shouldSendPlayerStateForDebug,
      };
    }
    function p(e) {
      return function (t, n, r) {
        e(
          {
            fromState: t,
            toState: n,
            type: "_dash_manifest_from_url_transitioned",
          },
          r,
        );
      };
    }
    var _ = o("VideoPlayerNextgendashStateMachine").defineStateMachine(
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
          dashManifestFromUrlStartedPerfMs: null,
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
          liveLatencyPlaybackRate: {
            appliedRate: 1,
            changedAtPerfMs: null,
            hadInPlayStall: !1,
            holdUntilPerfMs: 0,
          },
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
          d = n.onSendHaltedToWorkerChanged,
          _ = n.onVideoRepresentationChanged,
          S = n.playerInstanceKey,
          I = n.playerSubOrigin,
          U = n.prefetchResultInitial,
          V = n.videoFBID,
          H = n.workerPortFactories,
          G = t.env,
          z = t.event,
          j = t.makeChildSm,
          K = t.sendToOther,
          Q = t.sendToSelf,
          X = t.state,
          ee = t.unexpectedEvent;
        if (X.state !== "__disposed__" && z.type === "debug_config")
          return X.state === "linked_to_worker"
            ? y(
                G,
                S,
                babelHelpers.extends({}, X, {
                  shouldSendPlayerStateForDebug:
                    z.shouldSendPlayerStateForDebug,
                }),
                z.type,
              )
            : babelHelpers.extends({}, X, {
                shouldSendPlayerStateForDebug: z.shouldSendPlayerStateForDebug,
              });
        if (X.state !== "__disposed__" && z.type === "_log_player_warning")
          return (de(z.warning), X);
        if (
          X.state !== "__disposed__" &&
          z.type === "update_player_viewport_dimensions"
        )
          return babelHelpers.extends({}, X, {
            playerViewportDimensions: z.playerViewportDimensions,
          });
        if (
          X.state !== "__disposed__" &&
          z.type === "update_expired_video_url_refresh_handler"
        ) {
          K(X.dashManifestParsed, {
            expiredVideoUrlRefreshHandlerState:
              z.expiredVideoUrlRefreshHandlerState,
            type: "update_expired_video_url_refresh_handler",
          });
          return;
        }
        if (
          X.state !== "__disposed__" &&
          z.type === "update_scroll_position_api"
        ) {
          X.scrollPositionSubscription != null &&
            X.scrollPositionSubscription.remove();
          var le = null;
          return (
            (le = z.scrollPositionAPI.subscribe(function () {
              Q({ type: "_send_state_to_worker" });
            })),
            X.state === "linked_to_worker"
              ? y(
                  G,
                  S,
                  babelHelpers.extends({}, X, {
                    scrollPositionAPI: z.scrollPositionAPI,
                    scrollPositionSubscription: le,
                  }),
                  z.type,
                )
              : babelHelpers.extends({}, X, {
                  scrollPositionAPI: z.scrollPositionAPI,
                  scrollPositionSubscription: le,
                })
          );
        }
        function de(e) {
          X.state !== "__disposed__" &&
            G.logging.log(G, {
              error: o("nextgendasherr").nextgendasherrFromCause(
                G,
                e,
                "VideoPlayerNextgendashMainWith" + X.workerType,
              ),
              type: "generic_error_as_warning",
            });
        }
        function pe(e) {
          var t = o(
            "VideoPlayerNextgendashConnectionMainToWorker",
          ).connectToWorker(G, H, e, S, function (e) {
            if (e.type === "from_worker_to_main_prefetch_cache_result") {
              u == null ||
                u({
                  hit: e.hit,
                  prefetchKey: e.prefetchKey,
                  representationID: e.representationID,
                });
              return;
            }
            Q(e);
          });
          return (d == null || d(t.sendHaltedToWorker), t);
        }
        function _e(e, t) {
          (d == null || d(null),
            e.sendToWorker({
              eventToWorker: {
                playerInstanceKey: S,
                type: "from_main_to_worker_unlink_player",
              },
              type: "send_to_worker",
            }),
            e.disconnectFromWorker(t));
        }
        function fe(t) {
          if (
            X.state !== "__disposed__" &&
            (X.workerType === "RealWorker" || X.workerType === "RealWorkerV2")
          ) {
            var n,
              r = o("nextgendasherr").nextgendasherrFromCause(
                G,
                t,
                "VideoPlayerNextgendashMainWith" +
                  X.workerType +
                  "/FallbackToVirtualWorker",
                "Fallback to VirtualWorker from " + X.workerType,
              );
            G.logging.log(G, { error: r, type: "generic_error" });
            var a = X.playerStateForDebug,
              i = X.playerStateFromMainSent,
              l = X.playerStateFromWorker,
              s = X.workerConnection,
              u = babelHelpers.objectWithoutPropertiesLoose(X, e);
            return (
              s != null && _e(s, r),
              babelHelpers.extends({}, u, {
                pendingEvents: (n = u.pendingEvents) != null ? n : [],
                state: "waiting_worker_connection",
                workerType: "VirtualWorker",
              })
            );
          } else throw t;
        }
        function ge(e, t, n, r) {
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
          (r != null &&
            (G.host.mediaSinkReceivedSourceHandle == null ||
              G.host.mediaSinkReceivedSourceHandle(G, r)),
            K(e, o));
        }
        function he(e, t) {
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
            G.workQueue.enqueueWork(function () {
              _(o, a);
            });
        }
        function ye(e, t) {
          var n = t.dashManifestUrl,
            a = t.dashManifestXmlString;
          if (a != null)
            return (
              K(e.dashManifestParsed, {
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
            l = null,
            s = null;
          if (n != null) {
            ((s = G.host.clock().perfMs), (i += 1));
            var u = {
              qplName: "dash_manifest_from_url",
              requestCreatedClock: G.host.clock(),
              requestID: "dash_manifest_from_url_" + i,
              requestInfo: n,
              responseMode: "text",
            };
            ((l = j(
              "dashManifestFromUrl",
              o("VideoPlayerNextgendashFetchedResource")
                .VideoPlayerNextgendashFetchedResourceSM,
              {
                onNetworkDiagnostics: r("emptyFunction"),
                onTransitioned: G.config.releasePastStateMachineStates
                  ? p(Q)
                  : function (e, t, n) {
                      Q(
                        {
                          fromState: e,
                          toState: t,
                          type: "_dash_manifest_from_url_transitioned",
                        },
                        n,
                      );
                    },
                request: u,
              },
            )),
              K(l, { type: "start" }));
          }
          return babelHelpers.extends({}, e, {
            dashManifestFromUrl: l,
            dashManifestFromUrlRequestIndex: i,
            dashManifestFromUrlStartedPerfMs: s,
            lastDashManifestUrl: n != null ? n : e.lastDashManifestUrl,
          });
        }
        switch (X.state) {
          case "waiting_worker_connection":
            switch (z.type) {
              case "__enter": {
                var Ce = pe(X.workerType);
                return (
                  Ce.sendToWorker({
                    eventToWorker: {
                      nextgendashInstanceIndex: a,
                      playerInstanceKey: S,
                      playerStateFromMain: m(G, X),
                      playerSubOrigin: I,
                      prefetchKey:
                        V != null
                          ? o(
                              "VideoPlayerNextgendashWorkerPrefetchCache",
                            ).getVideoPlayerNextgendashPrefetchKeyForSink(
                              V,
                              G.config.mediaSinkType,
                            )
                          : null,
                      prefetchResultInitial: U,
                      type: "from_main_to_worker_link_player",
                      videoFBID: V,
                    },
                    type: "send_to_worker",
                  }),
                  babelHelpers.extends({}, X, {
                    state: "waiting_linked_to_worker",
                    workerConnection: Ce,
                  })
                );
              }
              case "__exception":
                return fe(z.exception);
              case "__dispose":
                return;
              case "debug_config":
                return;
              case "update_expired_video_url_refresh_handler":
                return;
              case "update_player_viewport_dimensions":
                return;
              case "update_dash_manifest":
                return G.config.handleUpdateDashManifestInWaitingStates
                  ? ye(X, z)
                  : (X.pendingEvents.push(z), X);
              case "update_scroll_position_api":
                return;
              default:
                return (z.type, X.pendingEvents.push(z), X);
            }
          case "waiting_linked_to_worker":
            switch (z.type) {
              case "__enter": {
                var be = X.pendingEvents.reduce(
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
                  ve = be.nextStatePendingEvents,
                  Se = be.thisStatePendingEvents;
                return (
                  Se.forEach(function (e) {
                    Q(e);
                  }),
                  babelHelpers.extends({}, X, { pendingEvents: ve })
                );
              }
              case "__exception":
                return fe(z.exception);
              case "__dispose":
                return;
              case "debug_config":
                return;
              case "update_expired_video_url_refresh_handler":
                return;
              case "update_player_viewport_dimensions":
                return;
              case "from_worker_to_main_player_new_media_source": {
                if (z.workerType !== X.workerType || z.playerInstanceKey !== S)
                  return;
                ge(
                  X.mediaElement,
                  z.mediaSourceIndex,
                  z.mediaSource,
                  z.mediaSourceHandle,
                );
                var Re = X.pendingEvents,
                  Le = babelHelpers.objectWithoutPropertiesLoose(X, s);
                return (
                  Re.forEach(function (e) {
                    Q(e);
                  }),
                  babelHelpers.extends({}, Le, {
                    playerStateForDebug: g(
                      z.playerStateForDebug,
                      X.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromMainSent: null,
                    playerStateFromWorker: o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(z.playerStateFromWorker),
                    state: "linked_to_worker",
                  })
                );
              }
              case "from_worker_to_main_player_unlinked": {
                if (z.workerType !== X.workerType || z.playerInstanceKey !== S)
                  return;
                Q({
                  exception:
                    z.exceptionSnapshot != null
                      ? o("nextgendasherr").nextgendasherrFromCause(
                          G,
                          o("nextgendasherr").nextgendasherrFromSnapshot(
                            z.exceptionSnapshot,
                          ),
                          "VideoPlayerNextgendashMainUnexpectedUnlinkedBeforeLinked",
                        )
                      : o("nextgendasherr").nextgendasherr(
                          G,
                          "VideoPlayerNextgendashMainUnexpectedUnlinkedBeforeLinked",
                        ),
                  type: "__exception",
                });
                return;
              }
              case "from_worker_to_main_player_warning": {
                if (z.workerType !== X.workerType || z.playerInstanceKey !== S)
                  return;
                de(
                  o("nextgendasherr").nextgendasherrFromSnapshot(
                    z.warningErrorSnapshot,
                  ),
                );
                return;
              }
              case "from_worker_to_main_player_fatal_error": {
                if (z.workerType !== X.workerType || z.playerInstanceKey !== S)
                  return;
                Q({
                  exception: o("nextgendasherr").nextgendasherrFromCause(
                    G,
                    o("nextgendasherr").nextgendasherrFromSnapshot(
                      z.errorSnapshot,
                    ),
                    "VideoPlayerNextgendashMainFatalFromWorkerPlayerBeforeLinked",
                  ),
                  type: "__exception",
                });
                return;
              }
              case "update_dash_manifest":
                return G.config.handleUpdateDashManifestInWaitingStates
                  ? ye(X, z)
                  : (X.pendingEvents.push(z), X);
              case "update_scroll_position_api":
                return;
              default:
                return (z.type, X.pendingEvents.push(z), X);
            }
          case "linked_to_worker":
            switch (z.type) {
              case "__enter": {
                he(z.prevState.playerStateFromWorker, X.playerStateFromWorker);
                return;
              }
              case "__exception":
                return G.config.isLivePlayback &&
                  z.exception.name.includes("DashManifest")
                  ? (G.logging.log(G, {
                      error: z.exception,
                      format:
                        "live manifest-refresh __exception absorbed in linked_to_worker",
                      type: "generic_error_as_warning",
                    }),
                    X)
                  : void 0;
              case "__dispose": {
                f(
                  G,
                  "explicit",
                  X.liveManifestRefreshTimerHandle,
                  X.liveNoProgressWatchdogTimerHandle,
                );
                return;
              }
              case "_dash_manifest_from_url_transitioned": {
                if (
                  (b(G, z.fromState, z.toState, X.dashManifestParsed, Q, K),
                  G.config.enableLive &&
                    X.lastDashManifestUrl != null &&
                    z.toState.state === "failed")
                ) {
                  X.liveManifestRefreshTimerHandle != null &&
                    G.host.timers.clearTimeout(
                      X.liveManifestRefreshTimerHandle,
                    );
                  var Ee = X.liveManifestRefreshRetryCount,
                    ke = o(
                      "VideoPlayerNextgendashRetryLogic",
                    ).calculateExponentialDelayWithJitter(
                      ne,
                      Ee,
                      G.host.random.random,
                    ),
                    Ie = G.host.timers.setTimeout(function () {
                      Q({ type: "_manifest_refresh_timer_fired" });
                    }, ke);
                  return babelHelpers.extends({}, X, {
                    liveManifestRefreshRetryCount: Ee + 1,
                    liveManifestRefreshTimerHandle: Ie,
                  });
                }
                return;
              }
              case "_dash_manifest_parsed_transitioned": {
                var Te = v(G, X, z.fromState, z.toState, Q, l),
                  De = Te != null ? Te : X;
                if (z.toState.state === "parsed") {
                  var xe,
                    $e = se(G, De, z.toState),
                    Pe =
                      $e.liveManifestRefreshRetryCount > 0
                        ? babelHelpers.extends({}, $e, {
                            liveManifestRefreshRetryCount: 0,
                          })
                        : $e,
                    Ne = (xe = re(G, Pe, z.toState, Q)) != null ? xe : Pe;
                  return q(G, Ne, Q);
                }
                if (
                  G.config.isLivePlayback &&
                  G.config.enableLive &&
                  De.lastDashManifestUrl != null &&
                  z.toState.state === "failed_to_parse"
                ) {
                  De.liveManifestRefreshTimerHandle != null &&
                    G.host.timers.clearTimeout(
                      De.liveManifestRefreshTimerHandle,
                    );
                  var Me = De.liveManifestRefreshRetryCount,
                    we = o(
                      "VideoPlayerNextgendashRetryLogic",
                    ).calculateExponentialDelayWithJitter(
                      ne,
                      Me,
                      G.host.random.random,
                    ),
                    Ae = G.host.timers.setTimeout(function () {
                      Q({ type: "_manifest_refresh_timer_fired" });
                    }, we);
                  return babelHelpers.extends({}, De, {
                    liveManifestRefreshRetryCount: Me + 1,
                    liveManifestRefreshTimerHandle: Ae,
                  });
                }
                return Te;
              }
              case "_manifest_refresh_timer_fired": {
                var Fe = X.lastDashManifestUrl,
                  Oe = X.dashManifestParsed.state;
                if (
                  !G.config.enableLive ||
                  Fe == null ||
                  Oe.state !== "parsed" ||
                  Oe.data.metadata.manifestType !== "dynamic"
                )
                  return X.liveManifestRefreshTimerHandle != null
                    ? (G.host.timers.clearTimeout(
                        X.liveManifestRefreshTimerHandle,
                      ),
                      babelHelpers.extends({}, X, {
                        liveManifestRefreshTimerHandle: null,
                      }))
                    : void 0;
                var Be = G.host.timers.setTimeout(
                    function () {
                      Q({ type: "_manifest_refresh_timer_fired" });
                    },
                    oe(G, Oe.data),
                  ),
                  We = G.host.clock().perfMs,
                  qe = ae(X.dashManifestFromUrl);
                if (
                  !ie({
                    fetchInFlight: qe,
                    fetchStartedPerfMs: X.dashManifestFromUrlStartedPerfMs,
                    fetchTimeoutMs: te,
                    nowPerfMs: We,
                  })
                )
                  return babelHelpers.extends({}, X, {
                    liveManifestRefreshTimerHandle: Be,
                  });
                qe &&
                  G.logging.log(G, {
                    format:
                      "live manifest refresh fetch did not finish within %sms, replacing it",
                    params: [String(te)],
                    type: "generic_warning",
                  });
                var Ue = ye(X, {
                  dashManifestUrl: Fe,
                  dashManifestXmlString: null,
                  type: "update_dash_manifest",
                });
                return babelHelpers.extends({}, Ue, {
                  liveManifestRefreshTimerHandle: Be,
                });
              }
              case "_live_no_progress_watchdog_tick": {
                var Ve, He, Ge, ze, je, Ke, Qe;
                if (
                  !G.config.isLivePlayback ||
                  !G.config.enableLive ||
                  G.config.liveNoProgressWatchdogThresholdSec <= 0
                )
                  return X.liveNoProgressWatchdogTimerHandle != null
                    ? (G.host.timers.clearTimeout(
                        X.liveNoProgressWatchdogTimerHandle,
                      ),
                      babelHelpers.extends({}, X, {
                        liveNoProgressWatchdogTimerHandle: null,
                      }))
                    : void 0;
                var Xe = X.mediaElement.state.mediaElementSnapshot,
                  Ye = c(G, X),
                  Je = G.host.clock().perfMs,
                  Ze = $(X.playheadLastSeenTimeSec, Ye, L),
                  et = Ze ? Je : X.playheadLastMovedAtPerfMs,
                  tt = Ze ? Ye : X.playheadLastSeenTimeSec,
                  nt = Xe != null ? P(Xe.buffered, Ye) : null,
                  rt = Xe != null ? N(Xe.buffered, Ye) : null,
                  ot = Z({
                    currentTimeSec: Ye,
                    liveEdgeOffsetSec: me,
                    liveEdgeTimeSec: X.playerStateFromWorker.liveEdgeTimeSec,
                    maxSeekTargetSec: rt,
                    minBehindLiveEdgeSec: J,
                  }),
                  at = M({
                    bufferedAheadSec: nt,
                    ended:
                      (Ve = Xe == null ? void 0 : Xe.ended) != null ? Ve : !1,
                    hasError: (Xe == null ? void 0 : Xe.error) != null,
                    lastMovedAtPerfMs: et,
                    liveCatchUpSeekTargetSec: ot,
                    nowPerfMs: Je,
                    paused:
                      (He = Xe == null ? void 0 : Xe.paused) != null ? He : !0,
                    seeking:
                      (Ge = Xe == null ? void 0 : Xe.seeking) != null ? Ge : !1,
                    starvationBufferAheadSec: R,
                    thresholdSec: G.config.liveNoProgressWatchdogThresholdSec,
                  }),
                  it = W(G, Q),
                  lt = A(X.liveConsecutiveWatchdogKicks, Ze, at),
                  st = O(
                    (ze =
                      (je = X.playerStateFromWorker) == null
                        ? void 0
                        : je.liveEdgeTimeSec) != null
                      ? ze
                      : null,
                    Ye,
                    G.config.liveFellBehindEdgeReseekDriftSec,
                  ),
                  ut =
                    G.config.liveProactiveEdgeReseekEnabled &&
                    B({
                      followEdgeActive: G.config.liveFollowEdgeActive,
                      largeDrift: st,
                      paused:
                        (Ke = Xe == null ? void 0 : Xe.paused) != null
                          ? Ke
                          : !0,
                      seeking:
                        (Qe = Xe == null ? void 0 : Xe.seeking) != null
                          ? Qe
                          : !1,
                      shouldKick: at,
                    });
                if (
                  (at &&
                    (st || w(lt, G.config.liveStallReseekToEdgeAfterKicks))) ||
                  ut
                ) {
                  var ct,
                    dt,
                    mt,
                    pt = F(
                      (ct =
                        (dt = X.playerStateFromWorker) == null
                          ? void 0
                          : dt.liveEdgeTimeSec) != null
                        ? ct
                        : null,
                      Ye,
                      E,
                      k,
                    ),
                    _t =
                      (mt = X.mediaElement) == null || (mt = mt.state) == null
                        ? void 0
                        : mt.mediaElement;
                  if (pt != null && _t != null)
                    return (
                      G.logging.log(G, {
                        format:
                          "live no-progress watchdog: recovering in-engine by re-seeking the playhead to the live edge (largeDrift=%s proactive=%s)",
                        params: [String(st), String(ut)],
                        type: "generic_warning",
                      }),
                      G.host.mediaElementSetPlayhead(G, _t, pt),
                      babelHelpers.extends({}, X, {
                        liveConsecutiveWatchdogKicks: 0,
                        liveNoProgressWatchdogTimerHandle: it,
                        playheadLastMovedAtPerfMs: Je,
                        playheadLastSeenTimeSec: Ye,
                      })
                    );
                }
                var ft = X.mediaElement.state.mediaElement,
                  gt = null;
                if (
                  (at &&
                    ot != null &&
                    ft != null &&
                    (G.host.mediaElementSetPlayhead(G, ft, ot), (gt = ot)),
                  gt != null)
                ) {
                  var ht;
                  G.logging.log(G, {
                    format:
                      "live no-progress watchdog: playhead frozen (starved or stale-live), seeking toward the live edge. %s %s %s %s",
                    params: [
                      "currentTimeSec=" + (Ye != null ? Ye : "unknown"),
                      "liveEdgeTimeSec=" +
                        ((ht = X.playerStateFromWorker.liveEdgeTimeSec) != null
                          ? ht
                          : "unknown"),
                      "bufferedEndSec=" + (rt != null ? rt : "unknown"),
                      "seekTargetSec=" + gt,
                    ],
                    type: "generic_warning",
                  });
                }
                return babelHelpers.extends({}, X, {
                  liveConsecutiveWatchdogKicks: lt,
                  liveNoProgressWatchdogTimerHandle: it,
                  playheadLastMovedAtPerfMs: gt != null ? Je : et,
                  playheadLastSeenTimeSec: gt != null ? gt : tt,
                });
              }
              case "_media_element_transitioned": {
                var yt,
                  Ct,
                  bt,
                  vt = X.dashManifestParsed.state;
                if (
                  ce({
                    currentTimeSec: c(G, X),
                    isLivePlayback: G.config.isLivePlayback,
                    isManifestDynamic:
                      vt.state === "parsed" &&
                      vt.data.metadata.manifestType === "dynamic",
                    startTimestampSec: G.config.startTimestampSec,
                  })
                ) {
                  var St,
                    Rt =
                      (St = X.mediaElement) == null || (St = St.state) == null
                        ? void 0
                        : St.mediaElement;
                  if (Rt != null) {
                    if (
                      X.liveStartTimestampSecIsManifestDerived &&
                      vt.state === "parsed"
                    ) {
                      var Lt;
                      G.config.startTimestampSec =
                        (Lt = ue(vt.data)) != null
                          ? Lt
                          : G.config.startTimestampSec;
                    }
                    G.host.mediaElementSetPlayhead(
                      G,
                      Rt,
                      G.config.startTimestampSec,
                    );
                  }
                }
                var Et = X.mediaElement.state.mediaElementSnapshot,
                  kt = c(G, X),
                  It = G.host.clock().perfMs,
                  Tt = Y(G, X, kt, It),
                  Dt = $(X.forceKickPlayheadLastSeenTimeSec, kt, L),
                  xt = Dt ? It : X.forceKickPlayheadLastMovedAtPerfMs,
                  $t = Dt ? kt : X.forceKickPlayheadLastSeenTimeSec,
                  Pt = x({
                    currentTimeSec: kt,
                    enabled: G.config.liveForceWorkerKickOnStallEnabled,
                    ended:
                      (yt = Et == null ? void 0 : Et.ended) != null ? yt : !1,
                    frozenThresholdMs: D,
                    hasError: (Et == null ? void 0 : Et.error) != null,
                    isLivePlayback: G.config.isLivePlayback,
                    lastForcedWorkerKickPerfMs: X.lastForcedWorkerKickPerfMs,
                    minIntervalMs: T,
                    nowPerfMs: It,
                    paused:
                      (Ct = Et == null ? void 0 : Et.paused) != null ? Ct : !0,
                    playheadLastMovedAtPerfMs: xt,
                    seeking:
                      (bt = Et == null ? void 0 : Et.seeking) != null ? bt : !1,
                  });
                return Pt
                  ? babelHelpers.extends(
                      {},
                      C(G, S, X, z.type + ":force_worker_kick_on_stall"),
                      {
                        forceKickPlayheadLastMovedAtPerfMs: xt,
                        forceKickPlayheadLastSeenTimeSec: $t,
                        lastForcedWorkerKickPerfMs: It,
                        liveLatencyPlaybackRate: Tt,
                      },
                    )
                  : babelHelpers.extends({}, y(G, S, X, z.type), {
                      forceKickPlayheadLastMovedAtPerfMs: xt,
                      forceKickPlayheadLastSeenTimeSec: $t,
                      liveLatencyPlaybackRate: Tt,
                    });
              }
              case "_request_recovery_from_source_reset": {
                X.workerConnection.sendToWorker({
                  eventToWorker: {
                    mediaSourceIndex: z.mediaSourceIndex,
                    playerInstanceKey: S,
                    type: "from_main_to_worker_request_recovery_from_source_reset",
                  },
                  type: "send_to_worker",
                });
                return;
              }
              case "_notify_deliberate_detach_for_unmount": {
                X.workerConnection.sendToWorker({
                  eventToWorker: {
                    mediaSourceIndex: z.mediaSourceIndex,
                    playerInstanceKey: S,
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
                return ye(X, z);
              case "_send_state_to_worker":
                return y(G, S, X, z.type);
              case "update_media_element":
                return (
                  K(X.mediaElement, {
                    mediaElement: z.mediaElement,
                    type: "update_media_element",
                  }),
                  G.config.eagerResyncOnMediaElementAttach &&
                  z.mediaElement != null
                    ? h(G, S, X, z.type)
                    : void 0
                );
              case "update_config_from_env":
                return C(G, S, X, z.type);
              case "select_video_quality":
                return y(
                  G,
                  S,
                  babelHelpers.extends({}, X, {
                    selectedVideoQualityDisplayLabel:
                      z.videoQualityDisplayLabel,
                  }),
                  z.type,
                );
              case "select_media_variant":
                return y(
                  G,
                  S,
                  babelHelpers.extends({}, X, {
                    selectedMediaVariant: z.mediaVariant,
                  }),
                  z.type,
                );
              case "debug_log_stall_details": {
                X.workerConnection.sendToWorker({
                  eventToWorker: {
                    mediaElementSnapshotFromMain:
                      X.mediaElement.state.mediaElementSnapshot,
                    playerInstanceKey: S,
                    stallStartClock: z.stallStartClock,
                    type: "from_main_to_worker_debug_log_stall_details",
                  },
                  type: "send_to_worker",
                });
                return;
              }
              case "from_worker_to_main_player_new_media_source": {
                if (z.workerType !== X.workerType || z.playerInstanceKey !== S)
                  return;
                ge(
                  X.mediaElement,
                  z.mediaSourceIndex,
                  z.mediaSource,
                  z.mediaSourceHandle,
                );
                var Nt = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject(z.playerStateFromWorker);
                return (
                  he(X.playerStateFromWorker, Nt),
                  babelHelpers.extends({}, X, {
                    playerStateForDebug: g(
                      z.playerStateForDebug,
                      X.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromWorker: Nt,
                  })
                );
              }
              case "from_worker_to_main_player_unlinked": {
                if (z.workerType !== X.workerType || z.playerInstanceKey !== S)
                  return;
                var Mt =
                  z.exceptionSnapshot != null
                    ? o("nextgendasherr").nextgendasherrFromCause(
                        G,
                        o("nextgendasherr").nextgendasherrFromSnapshot(
                          z.exceptionSnapshot,
                        ),
                        "VideoPlayerNextgendashMainUnexpectedUnlinkedFromWorker",
                        "Reason: " + z.reason,
                      )
                    : o("nextgendasherr").nextgendasherr(
                        G,
                        "VideoPlayerNextgendashMainUnexpectedUnlinkedFromWorker",
                        "Reason: " + z.reason,
                      );
                if (
                  (X.workerType === "RealWorker" ||
                    X.workerType === "RealWorkerV2") &&
                  !G.config.disableFallbackFromRealWorkerAfterLinked
                )
                  return fe(Mt);
                Q({ exception: Mt, type: "__exception" });
                return;
              }
              case "from_worker_to_main_player_warning": {
                if (z.workerType !== X.workerType || z.playerInstanceKey !== S)
                  return;
                de(
                  o("nextgendasherr").nextgendasherrFromSnapshot(
                    z.warningErrorSnapshot,
                  ),
                );
                var wt = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject(z.playerStateFromWorker);
                return (
                  he(X.playerStateFromWorker, wt),
                  babelHelpers.extends({}, X, {
                    playerStateForDebug: g(
                      z.playerStateForDebug,
                      X.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromWorker: wt,
                  })
                );
              }
              case "from_worker_to_main_player_fatal_error": {
                if (z.workerType !== X.workerType || z.playerInstanceKey !== S)
                  return;
                Q({
                  exception: o("nextgendasherr").nextgendasherrFromCause(
                    G,
                    o("nextgendasherr").nextgendasherrFromSnapshot(
                      z.errorSnapshot,
                    ),
                    "VideoPlayerNextgendashMainFatalFromWorkerPlayer",
                  ),
                  type: "__exception",
                });
                var At = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject(z.playerStateFromWorker);
                return (
                  he(X.playerStateFromWorker, At),
                  babelHelpers.extends({}, X, {
                    playerStateForDebug: g(
                      z.playerStateForDebug,
                      X.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromWorker: At,
                  })
                );
              }
              case "from_worker_to_main_playback_loop_state": {
                if (z.workerType !== X.workerType || z.playerInstanceKey !== S)
                  return;
                var Ft = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject(z.playerStateFromWorker);
                return (
                  he(X.playerStateFromWorker, Ft),
                  babelHelpers.extends({}, X, { playerStateFromWorker: Ft })
                );
              }
              case "from_worker_to_main_player_state_for_debug":
                return z.workerType !== X.workerType ||
                  z.playerInstanceKey !== S
                  ? void 0
                  : babelHelpers.extends({}, X, {
                      playerStateForDebug: g(
                        z.playerStateForDebug,
                        X.mediaElement.state.mediaElementSnapshot,
                      ),
                    });
              case "from_worker_to_main_refresh_urls": {
                X.dashManifestParsed.sendEvent({
                  type: "handle_worker_url_refresh_request",
                  urls: z.urls,
                });
                return;
              }
              case "update_scroll_position_api":
                return;
              default:
                z.type;
                return;
            }
          case "__disposed__":
            switch (z.type) {
              case "__enter": {
                var Ot = z.prevState;
                f(
                  G,
                  "terminal",
                  Ot.liveManifestRefreshTimerHandle,
                  Ot.liveNoProgressWatchdogTimerHandle,
                );
                var Bt =
                    "VideoPlayerNextgendashMainWith" +
                    Ot.workerType +
                    "/Disposed[" +
                    X.reason +
                    "@" +
                    Ot.state +
                    "]",
                  Wt =
                    "Disposed: " +
                    X.reason +
                    "@" +
                    Ot.state +
                    "; playerStateFromWorker=%s",
                  qt = function () {
                    var e;
                    return (e = JSON.stringify(Ot.playerStateFromWorker)) !=
                      null
                      ? e
                      : "undefined";
                  },
                  Ut =
                    X.exception != null
                      ? o("nextgendasherr").nextgendasherrFromCause(
                          G,
                          X.exception,
                          Bt,
                          Wt,
                          qt(),
                        )
                      : null;
                (Ot.workerConnection != null &&
                  _e(
                    Ot.workerConnection,
                    Ut != null
                      ? Ut
                      : function () {
                          return o("nextgendasherr").nextgendasherr(
                            G,
                            Bt,
                            Wt,
                            qt(),
                          );
                        },
                  ),
                  Ot.scrollPositionSubscription != null &&
                    Ot.scrollPositionSubscription.remove(),
                  Ut != null && i(Ut));
                return;
              }
              default:
                return;
            }
          default:
            X.state;
            return;
        }
      },
    );
    function f(e, t, n, r) {
      var o = e.config.enableDisposalResourceCleanup
        ? t === "terminal"
        : t === "explicit";
      o &&
        (n != null && e.host.timers.clearTimeout(n),
        r != null && e.host.timers.clearTimeout(r));
    }
    function g(e, t) {
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
    function h(e, t, n, r) {
      var o = m(e, n),
        a = {
          mediaElementSnapshot: o.mediaElementSnapshot,
          mediaSourceIndexApplied: o.mediaSourceIndexApplied,
        };
      return (
        n.workerConnection.sendToWorker({
          canSendOnlyLatestOfTypeIfThrottled: !0,
          eventToWorker: {
            mediaElementStateFromMain: a,
            playerInstanceKey: t,
            reason: r,
            type: "from_main_to_worker_sync_media_element_state",
          },
          type: "send_to_worker",
        }),
        babelHelpers.extends({}, n, { playerStateFromMainSent: o })
      );
    }
    function y(e, t, n, o) {
      var a = m(e, n);
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
    function C(e, t, n, r) {
      var o = m(e, n);
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
    function b(e, t, n, r, a, i) {
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
    function v(e, t, n, r, a, i) {
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
    var S = 0.001,
      R = 0.5,
      L = 1,
      E = 2,
      k = 4,
      I = 2e3,
      T = 1e3,
      D = 2e3;
    function x(e) {
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
    function $(e, t, n) {
      return t == null ? !1 : e == null || t < e - S ? !0 : t - e >= n;
    }
    function P(e, t) {
      if (t == null) return null;
      var n = N(e, t);
      return n != null ? Math.max(0, n - t) : 0;
    }
    function N(e, t) {
      if (t == null) return null;
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (r[0] <= t && t <= r[1]) return r[1];
      }
      return null;
    }
    function M(e) {
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
    function w(e, t) {
      return t > 0 && e >= t;
    }
    function A(e, t, n) {
      return t ? 0 : n ? e + 1 : e;
    }
    function F(e, t, n, r) {
      if (e == null || t == null || e - t < r) return null;
      var o = e - n;
      return o > t ? o : null;
    }
    function O(e, t, n) {
      return n > 0 && e != null && t != null && e - t > n;
    }
    function B(e) {
      var t = e.followEdgeActive,
        n = e.largeDrift,
        r = e.paused,
        o = e.seeking,
        a = e.shouldKick;
      return n && !a && t && !r && !o;
    }
    function W(e, t) {
      return e.host.timers.setTimeout(function () {
        t({ type: "_live_no_progress_watchdog_tick" });
      }, I);
    }
    function q(e, t, n) {
      return !e.config.isLivePlayback ||
        !e.config.enableLive ||
        e.config.liveNoProgressWatchdogThresholdSec <= 0 ||
        t.liveNoProgressWatchdogTimerHandle != null
        ? t
        : babelHelpers.extends({}, t, {
            liveNoProgressWatchdogTimerHandle: W(e, n),
          });
    }
    var U = 0.8,
      V = 1.1,
      H = 1,
      G = 10,
      z = 18,
      j = 4e3,
      K = 2e3,
      Q = 1e3;
    function X(e) {
      var t = e.active,
        n = e.appliedRate,
        r = e.bufferedAheadSec,
        o = e.changedAtPerfMs,
        a = e.currentRate,
        i = e.inNewestBufferedRange,
        l = e.latencySec,
        s = e.nowPerfMs,
        u = e.preferredLatencySec;
      if (a !== 1 && a !== n) return null;
      var c = 1;
      if (
        (t &&
          i &&
          r != null &&
          l != null &&
          (r < H ? (c = U) : l > u && (c = V)),
        c === a)
      )
        return null;
      var d = o != null ? s - o : 1 / 0;
      return (c === 1 && t && d < K) || (c === V && a === 1 && d < Q)
        ? null
        : c;
    }
    function Y(e, t, n, r) {
      var o = t.liveLatencyPlaybackRate,
        a = t.mediaElement.state,
        i = a.mediaElement,
        l = a.mediaElementSnapshot;
      if (
        !e.config.liveLatencyPlaybackRateEnabled ||
        !e.config.isLivePlayback ||
        i == null ||
        l == null
      )
        return o;
      var s = a.isBuffering === !0,
        u = l.paused || l.seeking || s ? r + j : o.holdUntilPerfMs,
        c = o.hadInPlayStall || (s && a.isBufferingInitial === !1),
        d = t.dashManifestParsed.state,
        m = t.playerStateFromWorker.liveEdgeTimeSec,
        p = l.buffered,
        _ = p.length > 0 ? p[p.length - 1] : null,
        f = X({
          active:
            e.config.liveFollowEdgeActive &&
            d.state === "parsed" &&
            d.data.metadata.manifestType === "dynamic" &&
            !l.ended &&
            r >= u,
          appliedRate: o.appliedRate,
          bufferedAheadSec: P(p, n),
          changedAtPerfMs: o.changedAtPerfMs,
          currentRate: l.playbackRate,
          inNewestBufferedRange:
            n != null && _ != null && _[0] <= n && n <= _[1],
          latencySec: m != null && n != null ? m - n : null,
          nowPerfMs: r,
          preferredLatencySec: c ? z : G,
        });
      return f == null
        ? u === o.holdUntilPerfMs && c === o.hadInPlayStall
          ? o
          : babelHelpers.extends({}, o, {
              hadInPlayStall: c,
              holdUntilPerfMs: u,
            })
        : (e.host.mediaElementSetPlaybackRate(e, i, f),
          e.logging.log(e, {
            format: "live latency control: playbackRate %s -> %s",
            params: [String(l.playbackRate), String(f)],
            type: "generic_info",
          }),
          {
            appliedRate: f,
            changedAtPerfMs: r,
            hadInPlayStall: c,
            holdUntilPerfMs: u,
          });
    }
    var J = 15;
    function Z(e) {
      var t = e.currentTimeSec,
        n = e.liveEdgeOffsetSec,
        r = e.liveEdgeTimeSec,
        o = e.maxSeekTargetSec,
        a = e.minBehindLiveEdgeSec;
      if (t == null || r == null || o == null || r - t < a) return null;
      var i = Math.min(Math.max(0, r - n), o);
      return i > t ? i : null;
    }
    var ee = 2e3,
      te = 1e4,
      ne = Object.freeze({
        backoffMultiplier: 2,
        initialDelayMs: 200,
        jitterPercent: 0.2,
        maxDelayMs: 1e4,
        retryBehavior: "exponential",
        retryCount: 1 / 0,
      });
    function re(e, t, n, r) {
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
      var o = e.host.timers.setTimeout(
        function () {
          r({ type: "_manifest_refresh_timer_fired" });
        },
        oe(e, n.data),
      );
      return babelHelpers.extends({}, t, { liveManifestRefreshTimerHandle: o });
    }
    function oe(e, t) {
      var n;
      return e.config.liveManifestRefreshIntervalMs > 0
        ? e.config.liveManifestRefreshIntervalMs
        : (n = t.metadata.minimumUpdatePeriodMs) != null
          ? n
          : ee;
    }
    function ae(e) {
      switch (e == null ? void 0 : e.state.state) {
        case "waiting_start":
        case "waiting_headers":
        case "waiting_data":
        case "waiting_retry_or_failed":
        case "waiting_start_from_retry":
          return !0;
        default:
          return !1;
      }
    }
    function ie(e) {
      var t = e.fetchInFlight,
        n = e.fetchStartedPerfMs,
        r = e.fetchTimeoutMs,
        o = e.nowPerfMs;
      return t ? n == null || o - n >= r : !0;
    }
    function le(e) {
      var t = e.enableLive,
        n = e.isManifestParsed,
        r = e.manifestType;
      return t && n && r === "dynamic";
    }
    function se(e, t, n) {
      var r;
      if (
        !le({
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
        de({
          isManifestDerived: o,
          playheadSec: (r = c(e, t)) != null ? r : 0,
          startTimestampSec: e.config.startTimestampSec,
        })
      ) {
        var a = ue(n.data);
        a != null && ((e.config.startTimestampSec = a), (o = !0));
      }
      return o === t.liveStartTimestampSecIsManifestDerived
        ? t
        : babelHelpers.extends({}, t, {
            liveStartTimestampSecIsManifestDerived: o,
          });
    }
    function ue(e) {
      var t = e.manifestRepresentations,
        n = e.metadata;
      return ge({
        audioWindow: fe(t.audio),
        minBufferTimeSec: n.minBufferTimeSec,
        suggestedPresentationDelaySec: n.suggestedPresentationDelaySec,
        videoWindow: fe(t.video),
      });
    }
    function ce(e) {
      var t = e.currentTimeSec,
        n = e.isLivePlayback,
        r = e.isManifestDynamic,
        o = e.startTimestampSec;
      return n && r && o > 0 && t === 0;
    }
    function de(e) {
      var t = e.isManifestDerived,
        n = e.playheadSec,
        r = e.startTimestampSec;
      return r === 0 ? !0 : t && n === 0;
    }
    var me = 5,
      pe = 5,
      _e = 3;
    function fe(e) {
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
    function ge(e) {
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
            ? (u = Math.max(s * _e, n != null ? n : 0))
            : (u = pe),
        (u = Math.max(u, pe)),
        Math.min(Math.max(i - u, l), i)
      );
    }
    function he(e) {
      var t = e.state;
      if (t.state === "__null__" || t.state === "__disposed__") return null;
      var n = t.dashManifestParsed.state;
      return n.state !== "parsed" ? null : n;
    }
    function ye(e) {
      var t = he(e);
      return t == null
        ? null
        : t.data.metadata.manifestIsMixedCodecVideo ||
            t.data.metadata.manifestIsMixedCodecAudio;
    }
    function Ce(e) {
      var t, n;
      return (t =
        (n = he(e)) == null ? void 0 : n.data.metadata.manifestIdentifier) !=
        null
        ? t
        : null;
    }
    function be(e) {
      var t = he(e);
      return t == null
        ? null
        : t.data.manifestRepresentations.video.some(function (e) {
            return (
              e.segmentsInfo.type === "SegmentTemplate" &&
              e.segmentsInfo.segmentTimelinePredictive != null
            );
          });
    }
    function ve(e) {
      var t = e.state;
      return t.state === "linked_to_worker" ? t.playerStateFromWorker : null;
    }
    function Se(e) {
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
    function Re(e) {
      var t,
        n = he(e);
      return (t = n == null ? void 0 : n.data.manifestRepresentations.video) !=
        null
        ? t
        : [];
    }
    function Le(e) {
      var t,
        n = he(e);
      return (t = n == null ? void 0 : n.data.manifestRepresentations.audio) !=
        null
        ? t
        : [];
    }
    function Ee(e, t) {
      var n,
        r,
        o = ve(e),
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
    function ke(e) {
      return Ee(e, Re(e));
    }
    function Ie(e, t) {
      var n,
        r,
        o = ve(e),
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
    function Te(e) {
      return Ie(e, Le(e));
    }
    function De(e, t) {
      var n,
        r,
        o = ve(e),
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
    function xe(e, t, n) {
      return o(
        "VideoPlayerNextgendashMediaUtils",
      ).findTimeRangeAnnotationAtMediaTime(e, t, n);
    }
    function $e(e) {
      var t,
        n = ve(e),
        r = Se(e),
        o = xe(
          r,
          n == null || (t = n.bufferedRangesWithRepIds) == null
            ? void 0
            : t.audio,
          n == null ? void 0 : n.targetRepresentationId.audio,
        ),
        a = Le(e).find(function (e) {
          return e.representationId === o;
        });
      return a;
    }
    function Pe(e) {
      var t,
        n = ve(e),
        r = Se(e),
        o = xe(
          r,
          n == null || (t = n.bufferedRangesWithRepIds) == null
            ? void 0
            : t.video,
          n == null ? void 0 : n.targetRepresentationId.video,
        ),
        a = Re(e).find(function (e) {
          return e.representationId === o;
        });
      return a;
    }
    function Ne(e, t) {
      var n,
        r = ve(e),
        o = xe(
          t,
          r == null || (n = r.bufferedRangesWithRepIds) == null
            ? void 0
            : n.video,
          null,
        );
      return Re(e).find(function (e) {
        return e.representationId === o;
      });
    }
    function Me(e) {
      var t = ve(e),
        n = t == null ? void 0 : t.targetRepresentationId.audio,
        r = Le(e).find(function (e) {
          return e.representationId === n;
        });
      return r;
    }
    function we(e) {
      var t = ve(e),
        n = t == null ? void 0 : t.targetRepresentationId.video,
        r = Re(e).find(function (e) {
          return e.representationId === n;
        });
      return r;
    }
    function Ae(e) {
      var t = e.state,
        n =
          t.state === "__null__" || t.state === "__disposed__"
            ? null
            : t.selectedMediaVariant;
      return n;
    }
    function Fe(e) {
      var t = e.state,
        n =
          t.state === "__null__" || t.state === "__disposed__"
            ? null
            : t.selectedVideoQualityDisplayLabel;
      return n;
    }
    ((l.internal_collectMediaElementSnapshotForWorker = d),
      (l.VideoPlayerNextgendashMainSM = _),
      (l.internal_clearLivePlaybackTimers = f),
      (l.internal_shouldForceWorkerKickOnStall = x),
      (l.internal_didPlayheadMakeProgress = $),
      (l.internal_getBufferedAheadSec = P),
      (l.internal_getBufferedEndSec = N),
      (l.internal_shouldKickStalledPlaybackWatchdog = M),
      (l.internal_shouldRecoverAfterKick = w),
      (l.internal_getNextConsecutiveWatchdogKicks = A),
      (l.internal_getLiveEdgeReseekTargetSec = F),
      (l.internal_shouldReseekToEdgeImmediatelyForLargeDrift = O),
      (l.internal_shouldProactivelyReseekToEdgeForLargeDrift = B),
      (l.internal_getLiveLatencyPlaybackRate = X),
      (l.internal_getLiveCatchUpSeekTargetSec = Z),
      (l.internal_shouldStartLiveManifestRefreshFetch = ie),
      (l.internal_shouldMarkLivePlayback = le),
      (l.internal_shouldSeekToLiveStartPosition = ce),
      (l.internal_shouldUpdateLiveStartTimestampSec = de),
      (l.internal_getLiveStreamWindow = fe),
      (l.internal_computeLiveStartPositionSec = ge),
      (l.getIsMixedCodecManifest = ye),
      (l.getManifestIdentifier = Ce),
      (l.getIsPredictiveDash = be),
      (l.getAvailableVideoRepresentations = ke),
      (l.getAvailableAudioRepresentations = Te),
      (l.filterVideoRepresentationsByTargetVariant = De),
      (l.internal_findCurrentPlayingRepresentationID = xe),
      (l.getCurrentPlayingAudioRepresentation = $e),
      (l.getCurrentPlayingVideoRepresentation = Pe),
      (l.getVideoRepresentationAtMediaTime = Ne),
      (l.getCurrentTargetAudioRepresentation = Me),
      (l.getCurrentTargetVideoRepresentation = we),
      (l.getSelectedMediaVariant = Ae),
      (l.getSelectedVideoQualityDisplayLabel = Fe));
  },
  98,
);
