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
    var p = o("VideoPlayerNextgendashStateMachine").defineStateMachine(
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
          d = n.onSendHaltedToWorkerChanged,
          p = n.onVideoRepresentationChanged,
          v = n.playerInstanceKey,
          k = n.playerSubOrigin,
          V = n.prefetchResultInitial,
          z = n.videoFBID,
          K = n.workerPortFactories,
          X = t.env,
          Y = t.event,
          J = t.makeChildSm,
          Z = t.sendToOther,
          ee = t.sendToSelf,
          te = t.state,
          ne = t.unexpectedEvent;
        if (te.state !== "__disposed__" && Y.type === "debug_config")
          return te.state === "linked_to_worker"
            ? h(
                X,
                v,
                babelHelpers.extends({}, te, {
                  shouldSendPlayerStateForDebug:
                    Y.shouldSendPlayerStateForDebug,
                }),
                Y.type,
              )
            : babelHelpers.extends({}, te, {
                shouldSendPlayerStateForDebug: Y.shouldSendPlayerStateForDebug,
              });
        if (te.state !== "__disposed__" && Y.type === "_log_player_warning")
          return (oe(Y.warning), te);
        if (
          te.state !== "__disposed__" &&
          Y.type === "update_player_viewport_dimensions"
        )
          return babelHelpers.extends({}, te, {
            playerViewportDimensions: Y.playerViewportDimensions,
          });
        if (
          te.state !== "__disposed__" &&
          Y.type === "update_expired_video_url_refresh_handler"
        ) {
          Z(te.dashManifestParsed, {
            expiredVideoUrlRefreshHandlerState:
              Y.expiredVideoUrlRefreshHandlerState,
            type: "update_expired_video_url_refresh_handler",
          });
          return;
        }
        if (
          te.state !== "__disposed__" &&
          Y.type === "update_scroll_position_api"
        ) {
          te.scrollPositionSubscription != null &&
            te.scrollPositionSubscription.remove();
          var re = null;
          return (
            (re = Y.scrollPositionAPI.subscribe(function () {
              ee({ type: "_send_state_to_worker" });
            })),
            te.state === "linked_to_worker"
              ? h(
                  X,
                  v,
                  babelHelpers.extends({}, te, {
                    scrollPositionAPI: Y.scrollPositionAPI,
                    scrollPositionSubscription: re,
                  }),
                  Y.type,
                )
              : babelHelpers.extends({}, te, {
                  scrollPositionAPI: Y.scrollPositionAPI,
                  scrollPositionSubscription: re,
                })
          );
        }
        function oe(e) {
          te.state !== "__disposed__" &&
            X.logging.log(X, {
              error: o("nextgendasherr").nextgendasherrFromCause(
                X,
                e,
                "VideoPlayerNextgendashMainWith" + te.workerType,
              ),
              type: "generic_error_as_warning",
            });
        }
        function ae(e) {
          var t = o(
            "VideoPlayerNextgendashConnectionMainToWorker",
          ).connectToWorker(X, K, e, v, function (e) {
            if (e.type === "from_worker_to_main_prefetch_cache_result") {
              u == null ||
                u({
                  hit: e.hit,
                  prefetchKey: e.prefetchKey,
                  representationID: e.representationID,
                });
              return;
            }
            ee(e);
          });
          return (d == null || d(t.sendHaltedToWorker), t);
        }
        function ie(e, t) {
          (d == null || d(null),
            e.sendToWorker({
              eventToWorker: {
                playerInstanceKey: v,
                type: "from_main_to_worker_unlink_player",
              },
              type: "send_to_worker",
            }),
            e.disconnectFromWorker(t));
        }
        function le(t) {
          if (
            te.state !== "__disposed__" &&
            (te.workerType === "RealWorker" || te.workerType === "RealWorkerV2")
          ) {
            var n,
              r = o("nextgendasherr").nextgendasherrFromCause(
                X,
                t,
                "VideoPlayerNextgendashMainWith" +
                  te.workerType +
                  "/FallbackToVirtualWorker",
                "Fallback to VirtualWorker from " + te.workerType,
              );
            X.logging.log(X, { error: r, type: "generic_error" });
            var a = te.playerStateForDebug,
              i = te.playerStateFromMainSent,
              l = te.playerStateFromWorker,
              s = te.workerConnection,
              u = babelHelpers.objectWithoutPropertiesLoose(te, e);
            return (
              s != null && ie(s, r),
              babelHelpers.extends({}, u, {
                pendingEvents: (n = u.pendingEvents) != null ? n : [],
                state: "waiting_worker_connection",
                workerType: "VirtualWorker",
              })
            );
          } else throw t;
        }
        function se(e, t, n, r) {
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
            throw ne(
              "throw",
              "Expected either mediaSourceHandle or mediaSource from Worker.",
            );
          (r != null &&
            (X.host.mediaSinkReceivedSourceHandle == null ||
              X.host.mediaSinkReceivedSourceHandle(X, r)),
            Z(e, o));
        }
        function ue(e, t) {
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
            X.workQueue.enqueueWork(function () {
              p(o, a);
            });
        }
        function ce(e, t) {
          var n = t.dashManifestUrl,
            a = t.dashManifestXmlString;
          if (a != null)
            return (
              Z(e.dashManifestParsed, {
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
              requestCreatedClock: X.host.clock(),
              requestID: "dash_manifest_from_url_" + i,
              requestInfo: n,
              responseMode: "text",
            };
            ((l = J(
              "dashManifestFromUrl",
              o("VideoPlayerNextgendashFetchedResource")
                .VideoPlayerNextgendashFetchedResourceSM,
              {
                onNetworkDiagnostics: r("emptyFunction"),
                onTransitioned: function (t, n, r) {
                  ee(
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
              Z(l, { type: "start" }));
          }
          return babelHelpers.extends({}, e, {
            dashManifestFromUrl: l,
            dashManifestFromUrlRequestIndex: i,
            lastDashManifestUrl: n != null ? n : e.lastDashManifestUrl,
          });
        }
        switch (te.state) {
          case "waiting_worker_connection":
            switch (Y.type) {
              case "__enter": {
                var de = ae(te.workerType);
                return (
                  de.sendToWorker({
                    eventToWorker: {
                      nextgendashInstanceIndex: a,
                      playerInstanceKey: v,
                      playerStateFromMain: m(X, te),
                      playerSubOrigin: k,
                      prefetchKey:
                        z != null
                          ? o(
                              "VideoPlayerNextgendashWorkerPrefetchCache",
                            ).getVideoPlayerNextgendashPrefetchKeyForSink(
                              z,
                              X.config.mediaSinkType,
                            )
                          : null,
                      prefetchResultInitial: V,
                      type: "from_main_to_worker_link_player",
                      videoFBID: z,
                    },
                    type: "send_to_worker",
                  }),
                  babelHelpers.extends({}, te, {
                    state: "waiting_linked_to_worker",
                    workerConnection: de,
                  })
                );
              }
              case "__exception":
                return le(Y.exception);
              case "__dispose":
                return;
              case "debug_config":
                return;
              case "update_expired_video_url_refresh_handler":
                return;
              case "update_player_viewport_dimensions":
                return;
              case "update_dash_manifest":
                return X.config.handleUpdateDashManifestInWaitingStates
                  ? ce(te, Y)
                  : (te.pendingEvents.push(Y), te);
              case "update_scroll_position_api":
                return;
              default:
                return (Y.type, te.pendingEvents.push(Y), te);
            }
          case "waiting_linked_to_worker":
            switch (Y.type) {
              case "__enter": {
                var me = te.pendingEvents.reduce(
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
                  pe = me.nextStatePendingEvents,
                  _e = me.thisStatePendingEvents;
                return (
                  _e.forEach(function (e) {
                    ee(e);
                  }),
                  babelHelpers.extends({}, te, { pendingEvents: pe })
                );
              }
              case "__exception":
                return le(Y.exception);
              case "__dispose":
                return;
              case "debug_config":
                return;
              case "update_expired_video_url_refresh_handler":
                return;
              case "update_player_viewport_dimensions":
                return;
              case "from_worker_to_main_player_new_media_source": {
                if (Y.workerType !== te.workerType || Y.playerInstanceKey !== v)
                  return;
                se(
                  te.mediaElement,
                  Y.mediaSourceIndex,
                  Y.mediaSource,
                  Y.mediaSourceHandle,
                );
                var fe = te.pendingEvents,
                  ge = babelHelpers.objectWithoutPropertiesLoose(te, s);
                return (
                  fe.forEach(function (e) {
                    ee(e);
                  }),
                  babelHelpers.extends({}, ge, {
                    playerStateForDebug: f(
                      Y.playerStateForDebug,
                      te.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromMainSent: null,
                    playerStateFromWorker: o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(Y.playerStateFromWorker),
                    state: "linked_to_worker",
                  })
                );
              }
              case "from_worker_to_main_player_unlinked": {
                if (Y.workerType !== te.workerType || Y.playerInstanceKey !== v)
                  return;
                ee({
                  exception:
                    Y.exceptionSnapshot != null
                      ? o("nextgendasherr").nextgendasherrFromCause(
                          X,
                          o("nextgendasherr").nextgendasherrFromSnapshot(
                            Y.exceptionSnapshot,
                          ),
                          "VideoPlayerNextgendashMainUnexpectedUnlinkedBeforeLinked",
                        )
                      : o("nextgendasherr").nextgendasherr(
                          X,
                          "VideoPlayerNextgendashMainUnexpectedUnlinkedBeforeLinked",
                        ),
                  type: "__exception",
                });
                return;
              }
              case "from_worker_to_main_player_warning": {
                if (Y.workerType !== te.workerType || Y.playerInstanceKey !== v)
                  return;
                oe(
                  o("nextgendasherr").nextgendasherrFromSnapshot(
                    Y.warningErrorSnapshot,
                  ),
                );
                return;
              }
              case "from_worker_to_main_player_fatal_error": {
                if (Y.workerType !== te.workerType || Y.playerInstanceKey !== v)
                  return;
                ee({
                  exception: o("nextgendasherr").nextgendasherrFromCause(
                    X,
                    o("nextgendasherr").nextgendasherrFromSnapshot(
                      Y.errorSnapshot,
                    ),
                    "VideoPlayerNextgendashMainFatalFromWorkerPlayerBeforeLinked",
                  ),
                  type: "__exception",
                });
                return;
              }
              case "update_dash_manifest":
                return X.config.handleUpdateDashManifestInWaitingStates
                  ? ce(te, Y)
                  : (te.pendingEvents.push(Y), te);
              case "update_scroll_position_api":
                return;
              default:
                return (Y.type, te.pendingEvents.push(Y), te);
            }
          case "linked_to_worker":
            switch (Y.type) {
              case "__enter": {
                ue(Y.prevState.playerStateFromWorker, te.playerStateFromWorker);
                return;
              }
              case "__exception":
                return X.config.isLivePlayback &&
                  Y.exception.name.includes("DashManifest")
                  ? (X.logging.log(X, {
                      error: Y.exception,
                      format:
                        "live manifest-refresh __exception absorbed in linked_to_worker",
                      type: "generic_error_as_warning",
                    }),
                    te)
                  : void 0;
              case "__dispose": {
                _(
                  X,
                  "explicit",
                  te.liveManifestRefreshTimerHandle,
                  te.liveNoProgressWatchdogTimerHandle,
                );
                return;
              }
              case "_dash_manifest_from_url_transitioned": {
                if (
                  (C(X, Y.fromState, Y.toState, te.dashManifestParsed, ee, Z),
                  X.config.enableLive &&
                    te.lastDashManifestUrl != null &&
                    Y.toState.state === "failed")
                ) {
                  te.liveManifestRefreshTimerHandle != null &&
                    X.host.timers.clearTimeout(
                      te.liveManifestRefreshTimerHandle,
                    );
                  var he = te.liveManifestRefreshRetryCount,
                    ye = o(
                      "VideoPlayerNextgendashRetryLogic",
                    ).calculateExponentialDelayWithJitter(
                      H,
                      he,
                      X.host.random.random,
                    ),
                    Ce = X.host.timers.setTimeout(function () {
                      ee({ type: "_manifest_refresh_timer_fired" });
                    }, ye);
                  return babelHelpers.extends({}, te, {
                    liveManifestRefreshRetryCount: he + 1,
                    liveManifestRefreshTimerHandle: Ce,
                  });
                }
                return;
              }
              case "_dash_manifest_parsed_transitioned": {
                var be = b(X, te, Y.fromState, Y.toState, ee, l),
                  ve = be != null ? be : te;
                if (Y.toState.state === "parsed") {
                  var Se,
                    Re = j(X, ve, Y.toState),
                    Le =
                      Re.liveManifestRefreshRetryCount > 0
                        ? babelHelpers.extends({}, Re, {
                            liveManifestRefreshRetryCount: 0,
                          })
                        : Re,
                    Ee = (Se = G(X, Le, Y.toState, ee)) != null ? Se : Le;
                  return W(X, Ee, ee);
                }
                if (
                  X.config.isLivePlayback &&
                  X.config.enableLive &&
                  ve.lastDashManifestUrl != null &&
                  Y.toState.state === "failed_to_parse"
                ) {
                  ve.liveManifestRefreshTimerHandle != null &&
                    X.host.timers.clearTimeout(
                      ve.liveManifestRefreshTimerHandle,
                    );
                  var ke = ve.liveManifestRefreshRetryCount,
                    Ie = o(
                      "VideoPlayerNextgendashRetryLogic",
                    ).calculateExponentialDelayWithJitter(
                      H,
                      ke,
                      X.host.random.random,
                    ),
                    Te = X.host.timers.setTimeout(function () {
                      ee({ type: "_manifest_refresh_timer_fired" });
                    }, Ie);
                  return babelHelpers.extends({}, ve, {
                    liveManifestRefreshRetryCount: ke + 1,
                    liveManifestRefreshTimerHandle: Te,
                  });
                }
                return be;
              }
              case "_manifest_refresh_timer_fired": {
                if (!X.config.enableLive || te.lastDashManifestUrl == null)
                  return te.liveManifestRefreshTimerHandle != null
                    ? (X.host.timers.clearTimeout(
                        te.liveManifestRefreshTimerHandle,
                      ),
                      babelHelpers.extends({}, te, {
                        liveManifestRefreshTimerHandle: null,
                      }))
                    : void 0;
                var De = ce(te, {
                  dashManifestUrl: te.lastDashManifestUrl,
                  dashManifestXmlString: null,
                  type: "update_dash_manifest",
                });
                return babelHelpers.extends({}, De != null ? De : te, {
                  liveManifestRefreshTimerHandle: null,
                });
              }
              case "_live_no_progress_watchdog_tick": {
                var xe, $e, Pe, Ne, Me, we, Ae, Fe;
                if (
                  !X.config.isLivePlayback ||
                  !X.config.enableLive ||
                  X.config.liveNoProgressWatchdogThresholdSec <= 0
                )
                  return te.liveNoProgressWatchdogTimerHandle != null
                    ? (X.host.timers.clearTimeout(
                        te.liveNoProgressWatchdogTimerHandle,
                      ),
                      babelHelpers.extends({}, te, {
                        liveNoProgressWatchdogTimerHandle: null,
                      }))
                    : void 0;
                var Oe = te.mediaElement.state.mediaElementSnapshot,
                  Be = c(X, te),
                  We = X.host.clock().perfMs,
                  qe = x(te.playheadLastSeenTimeSec, Be, R),
                  Ue = qe ? We : te.playheadLastMovedAtPerfMs,
                  Ve = qe ? Be : te.playheadLastSeenTimeSec,
                  He = Oe != null ? $(Oe.buffered, Be) : null,
                  Ge = Oe != null ? P(Oe.buffered, Be) : null,
                  ze = U({
                    currentTimeSec: Be,
                    liveEdgeOffsetSec: Q,
                    liveEdgeTimeSec: te.playerStateFromWorker.liveEdgeTimeSec,
                    maxSeekTargetSec: Ge,
                    minBehindLiveEdgeSec: q,
                  }),
                  je = N({
                    bufferedAheadSec: He,
                    ended:
                      (xe = Oe == null ? void 0 : Oe.ended) != null ? xe : !1,
                    hasError: (Oe == null ? void 0 : Oe.error) != null,
                    lastMovedAtPerfMs: Ue,
                    liveCatchUpSeekTargetSec: ze,
                    nowPerfMs: We,
                    paused:
                      ($e = Oe == null ? void 0 : Oe.paused) != null ? $e : !0,
                    seeking:
                      (Pe = Oe == null ? void 0 : Oe.seeking) != null ? Pe : !1,
                    starvationBufferAheadSec: S,
                    thresholdSec: X.config.liveNoProgressWatchdogThresholdSec,
                  }),
                  Ke = te.lastDashManifestUrl,
                  Qe = te.dashManifestFromUrl != null,
                  Xe = je && Ke != null && !Qe,
                  Ye = B(X, ee),
                  Je = w(te.liveConsecutiveWatchdogKicks, qe, je),
                  Ze = F(
                    (Ne =
                      (Me = te.playerStateFromWorker) == null
                        ? void 0
                        : Me.liveEdgeTimeSec) != null
                      ? Ne
                      : null,
                    Be,
                    X.config.liveFellBehindEdgeReseekDriftSec,
                  ),
                  et =
                    X.config.liveProactiveEdgeReseekEnabled &&
                    O({
                      followEdgeActive: X.config.liveFollowEdgeActive,
                      largeDrift: Ze,
                      paused:
                        (we = Oe == null ? void 0 : Oe.paused) != null
                          ? we
                          : !0,
                      seeking:
                        (Ae = Oe == null ? void 0 : Oe.seeking) != null
                          ? Ae
                          : !1,
                      shouldKick: je,
                    });
                if (
                  (je &&
                    (Ze || M(Je, X.config.liveStallReseekToEdgeAfterKicks))) ||
                  et
                ) {
                  var tt,
                    nt,
                    rt,
                    ot = A(
                      (tt =
                        (nt = te.playerStateFromWorker) == null
                          ? void 0
                          : nt.liveEdgeTimeSec) != null
                        ? tt
                        : null,
                      Be,
                      L,
                      E,
                    ),
                    at =
                      (rt = te.mediaElement) == null || (rt = rt.state) == null
                        ? void 0
                        : rt.mediaElement;
                  if (ot != null && at != null)
                    return (
                      X.logging.log(X, {
                        format:
                          "live no-progress watchdog: recovering in-engine by re-seeking the playhead to the live edge (largeDrift=%s proactive=%s)",
                        params: [String(Ze), String(et)],
                        type: "generic_warning",
                      }),
                      X.host.mediaElementSetPlayhead(X, at, ot),
                      babelHelpers.extends({}, te, {
                        liveConsecutiveWatchdogKicks: 0,
                        liveNoProgressWatchdogTimerHandle: Ye,
                        playheadLastMovedAtPerfMs: We,
                        playheadLastSeenTimeSec: Be,
                      })
                    );
                }
                var it = te.mediaElement.state.mediaElement,
                  lt = null;
                je &&
                  ze != null &&
                  it != null &&
                  (X.host.mediaElementSetPlayhead(X, it, ze), (lt = ze));
                var st = lt != null ? lt : Be;
                if (!Xe) {
                  if (lt != null) {
                    var ut;
                    X.logging.log(X, {
                      format:
                        "live no-progress watchdog: playhead frozen (starved or stale-live), seeking without manifest refresh. %s %s %s %s",
                      params: [
                        "currentTimeSec=" + (Be != null ? Be : "unknown"),
                        "liveEdgeTimeSec=" +
                          ((ut = te.playerStateFromWorker.liveEdgeTimeSec) !=
                          null
                            ? ut
                            : "unknown"),
                        "bufferedEndSec=" + (Ge != null ? Ge : "unknown"),
                        "seekTargetSec=" + lt,
                      ],
                      type: "generic_warning",
                    });
                  }
                  return babelHelpers.extends({}, te, {
                    liveConsecutiveWatchdogKicks: Je,
                    liveNoProgressWatchdogTimerHandle: Ye,
                    playheadLastMovedAtPerfMs: lt != null ? We : Ue,
                    playheadLastSeenTimeSec: lt != null ? lt : Ve,
                  });
                }
                (X.logging.log(X, {
                  format:
                    "live no-progress watchdog: playhead frozen (starved or stale-live), forcing manifest refresh. %s %s %s %s",
                  params: [
                    "currentTimeSec=" + (Be != null ? Be : "unknown"),
                    "liveEdgeTimeSec=" +
                      ((Fe = te.playerStateFromWorker.liveEdgeTimeSec) != null
                        ? Fe
                        : "unknown"),
                    "bufferedEndSec=" + (Ge != null ? Ge : "unknown"),
                    "seekTargetSec=" + (ze != null ? ze : "none"),
                  ],
                  type: "generic_warning",
                }),
                  te.liveManifestRefreshTimerHandle != null &&
                    X.host.timers.clearTimeout(
                      te.liveManifestRefreshTimerHandle,
                    ));
                var ct = ce(te, {
                  dashManifestUrl: Ke,
                  dashManifestXmlString: null,
                  type: "update_dash_manifest",
                });
                return babelHelpers.extends({}, ct, {
                  liveConsecutiveWatchdogKicks: Je,
                  liveManifestRefreshTimerHandle: null,
                  liveNoProgressWatchdogTimerHandle: Ye,
                  playheadLastMovedAtPerfMs: We,
                  playheadLastSeenTimeSec: st,
                });
              }
              case "_media_element_transitioned": {
                var dt, mt, pt;
                if (X.config.isLivePlayback && X.config.startTimestampSec > 0) {
                  var _t = c(X, te);
                  if (_t != null && _t < X.config.startTimestampSec - 1) {
                    var ft,
                      gt =
                        (ft = te.mediaElement) == null ||
                        (ft = ft.state) == null
                          ? void 0
                          : ft.mediaElement;
                    gt != null &&
                      X.host.mediaElementSetPlayhead(
                        X,
                        gt,
                        X.config.startTimestampSec,
                      );
                  }
                }
                var ht = te.mediaElement.state.mediaElementSnapshot,
                  yt = c(X, te),
                  Ct = X.host.clock().perfMs,
                  bt = x(te.forceKickPlayheadLastSeenTimeSec, yt, R),
                  vt = bt ? Ct : te.forceKickPlayheadLastMovedAtPerfMs,
                  St = bt ? yt : te.forceKickPlayheadLastSeenTimeSec,
                  Rt = D({
                    currentTimeSec: yt,
                    enabled: X.config.liveForceWorkerKickOnStallEnabled,
                    ended:
                      (dt = ht == null ? void 0 : ht.ended) != null ? dt : !1,
                    frozenThresholdMs: T,
                    hasError: (ht == null ? void 0 : ht.error) != null,
                    isLivePlayback: X.config.isLivePlayback,
                    lastForcedWorkerKickPerfMs: te.lastForcedWorkerKickPerfMs,
                    minIntervalMs: I,
                    nowPerfMs: Ct,
                    paused:
                      (mt = ht == null ? void 0 : ht.paused) != null ? mt : !0,
                    playheadLastMovedAtPerfMs: vt,
                    seeking:
                      (pt = ht == null ? void 0 : ht.seeking) != null ? pt : !1,
                  });
                return Rt
                  ? babelHelpers.extends(
                      {},
                      y(X, v, te, Y.type + ":force_worker_kick_on_stall"),
                      {
                        forceKickPlayheadLastMovedAtPerfMs: vt,
                        forceKickPlayheadLastSeenTimeSec: St,
                        lastForcedWorkerKickPerfMs: Ct,
                      },
                    )
                  : babelHelpers.extends({}, h(X, v, te, Y.type), {
                      forceKickPlayheadLastMovedAtPerfMs: vt,
                      forceKickPlayheadLastSeenTimeSec: St,
                    });
              }
              case "_request_recovery_from_source_reset": {
                te.workerConnection.sendToWorker({
                  eventToWorker: {
                    mediaSourceIndex: Y.mediaSourceIndex,
                    playerInstanceKey: v,
                    type: "from_main_to_worker_request_recovery_from_source_reset",
                  },
                  type: "send_to_worker",
                });
                return;
              }
              case "_notify_deliberate_detach_for_unmount": {
                te.workerConnection.sendToWorker({
                  eventToWorker: {
                    mediaSourceIndex: Y.mediaSourceIndex,
                    playerInstanceKey: v,
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
                return ce(te, Y);
              case "_send_state_to_worker":
                return h(X, v, te, Y.type);
              case "update_media_element":
                return (
                  Z(te.mediaElement, {
                    mediaElement: Y.mediaElement,
                    type: "update_media_element",
                  }),
                  X.config.eagerResyncOnMediaElementAttach &&
                  Y.mediaElement != null
                    ? g(X, v, te, Y.type)
                    : void 0
                );
              case "update_config_from_env":
                return y(X, v, te, Y.type);
              case "select_video_quality":
                return h(
                  X,
                  v,
                  babelHelpers.extends({}, te, {
                    selectedVideoQualityDisplayLabel:
                      Y.videoQualityDisplayLabel,
                  }),
                  Y.type,
                );
              case "select_media_variant":
                return h(
                  X,
                  v,
                  babelHelpers.extends({}, te, {
                    selectedMediaVariant: Y.mediaVariant,
                  }),
                  Y.type,
                );
              case "debug_log_stall_details": {
                te.workerConnection.sendToWorker({
                  eventToWorker: {
                    mediaElementSnapshotFromMain:
                      te.mediaElement.state.mediaElementSnapshot,
                    playerInstanceKey: v,
                    stallStartClock: Y.stallStartClock,
                    type: "from_main_to_worker_debug_log_stall_details",
                  },
                  type: "send_to_worker",
                });
                return;
              }
              case "from_worker_to_main_player_new_media_source": {
                if (Y.workerType !== te.workerType || Y.playerInstanceKey !== v)
                  return;
                se(
                  te.mediaElement,
                  Y.mediaSourceIndex,
                  Y.mediaSource,
                  Y.mediaSourceHandle,
                );
                var Lt = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject(Y.playerStateFromWorker);
                return (
                  ue(te.playerStateFromWorker, Lt),
                  babelHelpers.extends({}, te, {
                    playerStateForDebug: f(
                      Y.playerStateForDebug,
                      te.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromWorker: Lt,
                  })
                );
              }
              case "from_worker_to_main_player_unlinked": {
                if (Y.workerType !== te.workerType || Y.playerInstanceKey !== v)
                  return;
                var Et =
                  Y.exceptionSnapshot != null
                    ? o("nextgendasherr").nextgendasherrFromCause(
                        X,
                        o("nextgendasherr").nextgendasherrFromSnapshot(
                          Y.exceptionSnapshot,
                        ),
                        "VideoPlayerNextgendashMainUnexpectedUnlinkedFromWorker",
                        "Reason: " + Y.reason,
                      )
                    : o("nextgendasherr").nextgendasherr(
                        X,
                        "VideoPlayerNextgendashMainUnexpectedUnlinkedFromWorker",
                        "Reason: " + Y.reason,
                      );
                if (
                  (te.workerType === "RealWorker" ||
                    te.workerType === "RealWorkerV2") &&
                  !X.config.disableFallbackFromRealWorkerAfterLinked
                )
                  return le(Et);
                ee({ exception: Et, type: "__exception" });
                return;
              }
              case "from_worker_to_main_player_warning": {
                if (Y.workerType !== te.workerType || Y.playerInstanceKey !== v)
                  return;
                oe(
                  o("nextgendasherr").nextgendasherrFromSnapshot(
                    Y.warningErrorSnapshot,
                  ),
                );
                var kt = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject(Y.playerStateFromWorker);
                return (
                  ue(te.playerStateFromWorker, kt),
                  babelHelpers.extends({}, te, {
                    playerStateForDebug: f(
                      Y.playerStateForDebug,
                      te.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromWorker: kt,
                  })
                );
              }
              case "from_worker_to_main_player_fatal_error": {
                if (Y.workerType !== te.workerType || Y.playerInstanceKey !== v)
                  return;
                ee({
                  exception: o("nextgendasherr").nextgendasherrFromCause(
                    X,
                    o("nextgendasherr").nextgendasherrFromSnapshot(
                      Y.errorSnapshot,
                    ),
                    "VideoPlayerNextgendashMainFatalFromWorkerPlayer",
                  ),
                  type: "__exception",
                });
                var It = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject(Y.playerStateFromWorker);
                return (
                  ue(te.playerStateFromWorker, It),
                  babelHelpers.extends({}, te, {
                    playerStateForDebug: f(
                      Y.playerStateForDebug,
                      te.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromWorker: It,
                  })
                );
              }
              case "from_worker_to_main_playback_loop_state": {
                if (Y.workerType !== te.workerType || Y.playerInstanceKey !== v)
                  return;
                var Tt = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject(Y.playerStateFromWorker);
                return (
                  ue(te.playerStateFromWorker, Tt),
                  babelHelpers.extends({}, te, { playerStateFromWorker: Tt })
                );
              }
              case "from_worker_to_main_player_state_for_debug":
                return Y.workerType !== te.workerType ||
                  Y.playerInstanceKey !== v
                  ? void 0
                  : babelHelpers.extends({}, te, {
                      playerStateForDebug: f(
                        Y.playerStateForDebug,
                        te.mediaElement.state.mediaElementSnapshot,
                      ),
                    });
              case "from_worker_to_main_refresh_urls": {
                te.dashManifestParsed.sendEvent({
                  type: "handle_worker_url_refresh_request",
                  urls: Y.urls,
                });
                return;
              }
              case "update_scroll_position_api":
                return;
              default:
                Y.type;
                return;
            }
          case "__disposed__":
            switch (Y.type) {
              case "__enter": {
                var Dt = Y.prevState;
                _(
                  X,
                  "terminal",
                  Dt.liveManifestRefreshTimerHandle,
                  Dt.liveNoProgressWatchdogTimerHandle,
                );
                var xt =
                    "VideoPlayerNextgendashMainWith" +
                    Dt.workerType +
                    "/Disposed[" +
                    te.reason +
                    "@" +
                    Dt.state +
                    "]",
                  $t =
                    "Disposed: " +
                    te.reason +
                    "@" +
                    Dt.state +
                    "; playerStateFromWorker=%s",
                  Pt = function () {
                    var e;
                    return (e = JSON.stringify(Dt.playerStateFromWorker)) !=
                      null
                      ? e
                      : "undefined";
                  },
                  Nt =
                    te.exception != null
                      ? o("nextgendasherr").nextgendasherrFromCause(
                          X,
                          te.exception,
                          xt,
                          $t,
                          Pt(),
                        )
                      : null;
                (Dt.workerConnection != null &&
                  ie(
                    Dt.workerConnection,
                    Nt != null
                      ? Nt
                      : function () {
                          return o("nextgendasherr").nextgendasherr(
                            X,
                            xt,
                            $t,
                            Pt(),
                          );
                        },
                  ),
                  Dt.scrollPositionSubscription != null &&
                    Dt.scrollPositionSubscription.remove(),
                  Nt != null && i(Nt));
                return;
              }
              default:
                return;
            }
          default:
            te.state;
            return;
        }
      },
    );
    function _(e, t, n, r) {
      var o = e.config.enableDisposalResourceCleanup
        ? t === "terminal"
        : t === "explicit";
      o &&
        (n != null && e.host.timers.clearTimeout(n),
        r != null && e.host.timers.clearTimeout(r));
    }
    function f(e, t) {
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
    function g(e, t, n, r) {
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
    function h(e, t, n, o) {
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
    function y(e, t, n, r) {
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
    function C(e, t, n, r, a, i) {
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
    function b(e, t, n, r, a, i) {
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
    var v = 0.001,
      S = 0.5,
      R = 1,
      L = 2,
      E = 4,
      k = 2e3,
      I = 1e3,
      T = 1e3;
    function D(e) {
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
    function x(e, t, n) {
      return t == null ? !1 : e == null || t < e - v ? !0 : t - e >= n;
    }
    function $(e, t) {
      if (t == null) return null;
      var n = P(e, t);
      return n != null ? Math.max(0, n - t) : 0;
    }
    function P(e, t) {
      if (t == null) return null;
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (r[0] <= t && t <= r[1]) return r[1];
      }
      return null;
    }
    function N(e) {
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
    function M(e, t) {
      return t > 0 && e >= t;
    }
    function w(e, t, n) {
      return t ? 0 : n ? e + 1 : e;
    }
    function A(e, t, n, r) {
      if (e == null || t == null || e - t < r) return null;
      var o = e - n;
      return o > t ? o : null;
    }
    function F(e, t, n) {
      return n > 0 && e != null && t != null && e - t > n;
    }
    function O(e) {
      var t = e.followEdgeActive,
        n = e.largeDrift,
        r = e.paused,
        o = e.seeking,
        a = e.shouldKick;
      return n && !a && t && !r && !o;
    }
    function B(e, t) {
      return e.host.timers.setTimeout(function () {
        t({ type: "_live_no_progress_watchdog_tick" });
      }, k);
    }
    function W(e, t, n) {
      return !e.config.isLivePlayback ||
        !e.config.enableLive ||
        e.config.liveNoProgressWatchdogThresholdSec <= 0 ||
        t.liveNoProgressWatchdogTimerHandle != null
        ? t
        : babelHelpers.extends({}, t, {
            liveNoProgressWatchdogTimerHandle: B(e, n),
          });
    }
    var q = 15;
    function U(e) {
      var t = e.currentTimeSec,
        n = e.liveEdgeOffsetSec,
        r = e.liveEdgeTimeSec,
        o = e.maxSeekTargetSec,
        a = e.minBehindLiveEdgeSec;
      if (t == null || r == null || o == null || r - t < a) return null;
      var i = Math.min(Math.max(0, r - n), o);
      return i > t ? i : null;
    }
    var V = 2e3,
      H = Object.freeze({
        backoffMultiplier: 2,
        initialDelayMs: 200,
        jitterPercent: 0.2,
        maxDelayMs: 1e4,
        retryBehavior: "exponential",
        retryCount: 1 / 0,
      });
    function G(e, t, n, r) {
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
              : V,
        i = e.host.timers.setTimeout(function () {
          r({ type: "_manifest_refresh_timer_fired" });
        }, a);
      return babelHelpers.extends({}, t, { liveManifestRefreshTimerHandle: i });
    }
    function z(e) {
      var t = e.enableLive,
        n = e.isManifestParsed,
        r = e.manifestType;
      return t && n && r === "dynamic";
    }
    function j(e, t, n) {
      var r;
      if (
        !z({
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
        K({
          isManifestDerived: o,
          playheadSec: (r = c(e, t)) != null ? r : 0,
          startTimestampSec: e.config.startTimestampSec,
        })
      ) {
        var a = n.data,
          i = a.manifestRepresentations,
          l = a.metadata,
          s = Z({
            audioWindow: J(i.audio),
            minBufferTimeSec: l.minBufferTimeSec,
            suggestedPresentationDelaySec: l.suggestedPresentationDelaySec,
            videoWindow: J(i.video),
          });
        s != null && ((e.config.startTimestampSec = s), (o = !0));
      }
      return o === t.liveStartTimestampSecIsManifestDerived
        ? t
        : babelHelpers.extends({}, t, {
            liveStartTimestampSecIsManifestDerived: o,
          });
    }
    function K(e) {
      var t = e.isManifestDerived,
        n = e.playheadSec,
        r = e.startTimestampSec;
      return r === 0 ? !0 : t && n === 0;
    }
    var Q = 5,
      X = 5,
      Y = 3;
    function J(e) {
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
    function Z(e) {
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
            ? (u = Math.max(s * Y, n != null ? n : 0))
            : (u = X),
        (u = Math.max(u, X)),
        Math.min(Math.max(i - u, l), i)
      );
    }
    function ee(e) {
      var t = e.state;
      if (t.state === "__null__" || t.state === "__disposed__") return null;
      var n = t.dashManifestParsed.state;
      return n.state !== "parsed" ? null : n;
    }
    function te(e) {
      var t = ee(e);
      return t == null
        ? null
        : t.data.metadata.manifestIsMixedCodecVideo ||
            t.data.metadata.manifestIsMixedCodecAudio;
    }
    function ne(e) {
      var t, n;
      return (t =
        (n = ee(e)) == null ? void 0 : n.data.metadata.manifestIdentifier) !=
        null
        ? t
        : null;
    }
    function re(e) {
      var t = ee(e);
      return t == null
        ? null
        : t.data.manifestRepresentations.video.some(function (e) {
            return (
              e.segmentsInfo.type === "SegmentTemplate" &&
              e.segmentsInfo.segmentTimelinePredictive != null
            );
          });
    }
    function oe(e) {
      var t = e.state;
      return t.state === "linked_to_worker" ? t.playerStateFromWorker : null;
    }
    function ae(e) {
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
    function ie(e) {
      var t,
        n = ee(e);
      return (t = n == null ? void 0 : n.data.manifestRepresentations.video) !=
        null
        ? t
        : [];
    }
    function le(e) {
      var t,
        n = ee(e);
      return (t = n == null ? void 0 : n.data.manifestRepresentations.audio) !=
        null
        ? t
        : [];
    }
    function se(e, t) {
      var n,
        r,
        o = oe(e),
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
    function ue(e) {
      return se(e, ie(e));
    }
    function ce(e, t) {
      var n,
        r,
        o = oe(e),
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
    function de(e) {
      return ce(e, le(e));
    }
    function me(e, t) {
      var n,
        r,
        o = oe(e),
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
    function pe(e, t, n) {
      return o(
        "VideoPlayerNextgendashMediaUtils",
      ).findTimeRangeAnnotationAtMediaTime(e, t, n);
    }
    function _e(e) {
      var t,
        n = oe(e),
        r = ae(e),
        o = pe(
          r,
          n == null || (t = n.bufferedRangesWithRepIds) == null
            ? void 0
            : t.audio,
          n == null ? void 0 : n.targetRepresentationId.audio,
        ),
        a = le(e).find(function (e) {
          return e.representationId === o;
        });
      return a;
    }
    function fe(e) {
      var t,
        n = oe(e),
        r = ae(e),
        o = pe(
          r,
          n == null || (t = n.bufferedRangesWithRepIds) == null
            ? void 0
            : t.video,
          n == null ? void 0 : n.targetRepresentationId.video,
        ),
        a = ie(e).find(function (e) {
          return e.representationId === o;
        });
      return a;
    }
    function ge(e, t) {
      var n,
        r = oe(e),
        o = pe(
          t,
          r == null || (n = r.bufferedRangesWithRepIds) == null
            ? void 0
            : n.video,
          null,
        );
      return ie(e).find(function (e) {
        return e.representationId === o;
      });
    }
    function he(e) {
      var t = oe(e),
        n = t == null ? void 0 : t.targetRepresentationId.audio,
        r = le(e).find(function (e) {
          return e.representationId === n;
        });
      return r;
    }
    function ye(e) {
      var t = oe(e),
        n = t == null ? void 0 : t.targetRepresentationId.video,
        r = ie(e).find(function (e) {
          return e.representationId === n;
        });
      return r;
    }
    function Ce(e) {
      var t = e.state,
        n =
          t.state === "__null__" || t.state === "__disposed__"
            ? null
            : t.selectedMediaVariant;
      return n;
    }
    function be(e) {
      var t = e.state,
        n =
          t.state === "__null__" || t.state === "__disposed__"
            ? null
            : t.selectedVideoQualityDisplayLabel;
      return n;
    }
    ((l.internal_collectMediaElementSnapshotForWorker = d),
      (l.VideoPlayerNextgendashMainSM = p),
      (l.internal_clearLivePlaybackTimers = _),
      (l.internal_shouldForceWorkerKickOnStall = D),
      (l.internal_didPlayheadMakeProgress = x),
      (l.internal_getBufferedAheadSec = $),
      (l.internal_getBufferedEndSec = P),
      (l.internal_shouldKickStalledPlaybackWatchdog = N),
      (l.internal_shouldRecoverAfterKick = M),
      (l.internal_getNextConsecutiveWatchdogKicks = w),
      (l.internal_getLiveEdgeReseekTargetSec = A),
      (l.internal_shouldReseekToEdgeImmediatelyForLargeDrift = F),
      (l.internal_shouldProactivelyReseekToEdgeForLargeDrift = O),
      (l.internal_getLiveCatchUpSeekTargetSec = U),
      (l.internal_shouldMarkLivePlayback = z),
      (l.internal_shouldUpdateLiveStartTimestampSec = K),
      (l.internal_getLiveStreamWindow = J),
      (l.internal_computeLiveStartPositionSec = Z),
      (l.getIsMixedCodecManifest = te),
      (l.getManifestIdentifier = ne),
      (l.getIsPredictiveDash = re),
      (l.getAvailableVideoRepresentations = ue),
      (l.getAvailableAudioRepresentations = de),
      (l.filterVideoRepresentationsByTargetVariant = me),
      (l.internal_findCurrentPlayingRepresentationID = pe),
      (l.getCurrentPlayingAudioRepresentation = _e),
      (l.getCurrentPlayingVideoRepresentation = fe),
      (l.getVideoRepresentationAtMediaTime = ge),
      (l.getCurrentTargetAudioRepresentation = he),
      (l.getCurrentTargetVideoRepresentation = ye),
      (l.getSelectedMediaVariant = Ce),
      (l.getSelectedVideoQualityDisplayLabel = be));
  },
  98,
);
