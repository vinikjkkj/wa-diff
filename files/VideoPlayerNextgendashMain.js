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
    function m(e) {
      return e.enableLive && e.manifestType === "dynamic" && !e.isLivePlayback;
    }
    function p(e, t) {
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
        p = d({
          currentTimeAbsoluteMs: c,
          debugOverlay: l.debugOverlay,
          snapshot: s,
        }),
        _ = (a = t.scrollPositionAPI) == null ? void 0 : a.getCurrent(),
        f = t.state === "linked_to_worker" ? t.dashManifestParsed.state : null,
        g =
          (f == null ? void 0 : f.state) === "parsed" &&
          !m({
            enableLive: l.enableLive,
            isLivePlayback: l.isLivePlayback,
            manifestType: f.data.metadata.manifestType,
          })
            ? f.data
            : null,
        h = 1,
        y = !1;
      if ((u || (u = r("ExecutionEnvironment"))).canUseDOM) {
        var C;
        ((h = (C = window.devicePixelRatio) != null ? C : 1),
          (y = document.hidden));
      }
      return {
        abrConfig: t.abrConfig,
        configFromMain: l,
        dashManifestData: g,
        devicePixelRatio: h,
        isDocumentHidden: y,
        mediaElementSnapshot: p,
        mediaSourceIndexApplied:
          (i = t.mediaElement.state.mediaSourceIndex) != null ? i : null,
        playerViewportDimensions: t.playerViewportDimensions,
        scrollPositionInfo: _,
        selectedMediaVariant: t.selectedMediaVariant,
        selectedVideoQualityDisplayLabel: t.selectedVideoQualityDisplayLabel,
        shouldSendPlayerStateForDebug: t.shouldSendPlayerStateForDebug,
      };
    }
    function _(e) {
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
    var f = o("VideoPlayerNextgendashStateMachine").defineStateMachine(
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
          liveEdgeIslandWaitingSincePerfMs: null,
          liveLatencyPlaybackRate: {
            appliedRate: 1,
            catchUpBudgetLastObservation: null,
            catchUpBudgetSec: 0,
            catchUpFrozenSincePerfMs: null,
            catchUpSeekedAtPerfMs: null,
            changedAtPerfMs: null,
            hadInPlayStall: !1,
            holdUntilPerfMs: 0,
          },
          liveManifestRefreshRetryCount: 0,
          liveManifestRefreshTimerHandle: null,
          liveNoProgressWatchdogTimerHandle: null,
          liveStartTimestampSecIsManifestDerived: !1,
          liveWatchdogWasPaused: !0,
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
          u = n.onMP4InspectorCapture,
          d = n.onPrefetchCacheResult,
          m = n.onSendHaltedToWorkerChanged,
          f = n.onVideoRepresentationChanged,
          R = n.playerInstanceKey,
          I = n.playerSubOrigin,
          T = n.prefetchResultInitial,
          D = n.videoFBID,
          x = n.workerPortFactories,
          $ = t.env,
          N = t.event,
          Y = t.makeChildSm,
          J = t.sendToOther,
          Z = t.sendToSelf,
          ee = t.state,
          te = t.unexpectedEvent;
        if (ee.state !== "__disposed__" && N.type === "debug_config")
          return ee.state === "linked_to_worker"
            ? C(
                $,
                R,
                babelHelpers.extends({}, ee, {
                  shouldSendPlayerStateForDebug:
                    N.shouldSendPlayerStateForDebug,
                }),
                N.type,
              )
            : babelHelpers.extends({}, ee, {
                shouldSendPlayerStateForDebug: N.shouldSendPlayerStateForDebug,
              });
        if (ee.state !== "__disposed__" && N.type === "_log_player_warning")
          return (re(N.warning), ee);
        if (
          ee.state !== "__disposed__" &&
          N.type === "update_player_viewport_dimensions"
        )
          return babelHelpers.extends({}, ee, {
            playerViewportDimensions: N.playerViewportDimensions,
          });
        if (
          ee.state !== "__disposed__" &&
          N.type === "update_expired_video_url_refresh_handler"
        ) {
          J(ee.dashManifestParsed, {
            expiredVideoUrlRefreshHandlerState:
              N.expiredVideoUrlRefreshHandlerState,
            type: "update_expired_video_url_refresh_handler",
          });
          return;
        }
        if (
          ee.state !== "__disposed__" &&
          N.type === "update_scroll_position_api"
        ) {
          ee.scrollPositionSubscription != null &&
            ee.scrollPositionSubscription.remove();
          var ne = null;
          return (
            (ne = N.scrollPositionAPI.subscribe(function () {
              Z({ type: "_send_state_to_worker" });
            })),
            ee.state === "linked_to_worker"
              ? C(
                  $,
                  R,
                  babelHelpers.extends({}, ee, {
                    scrollPositionAPI: N.scrollPositionAPI,
                    scrollPositionSubscription: ne,
                  }),
                  N.type,
                )
              : babelHelpers.extends({}, ee, {
                  scrollPositionAPI: N.scrollPositionAPI,
                  scrollPositionSubscription: ne,
                })
          );
        }
        function re(e) {
          ee.state !== "__disposed__" &&
            $.logging.log($, {
              error: o("nextgendasherr").nextgendasherrFromCause(
                $,
                e,
                "VideoPlayerNextgendashMainWith" + ee.workerType,
              ),
              type: "generic_error_as_warning",
            });
        }
        function oe(e) {
          var t = o(
            "VideoPlayerNextgendashConnectionMainToWorker",
          ).connectToWorker($, x, e, R, function (e) {
            if (e.type === "from_worker_to_main_mp4_capture") {
              if (
                e.playerInstanceKey === R &&
                e.sessionId === $.config.mp4InspectorCaptureSessionId
              )
                try {
                  u == null || u(e);
                } catch (e) {}
              return;
            }
            if (e.type === "from_worker_to_main_prefetch_cache_result") {
              d == null ||
                d({
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
                playerInstanceKey: R,
                type: "from_main_to_worker_unlink_player",
              },
              type: "send_to_worker",
            }),
            e.disconnectFromWorker(t));
        }
        function ie(e) {
          var t = oe(e.workerType);
          return (
            t.sendToWorker({
              eventToWorker: {
                nextgendashInstanceIndex: a,
                playerInstanceKey: R,
                playerStateFromMain: p($, e),
                playerSubOrigin: I,
                prefetchKey:
                  D != null
                    ? o(
                        "VideoPlayerNextgendashWorkerPrefetchCache",
                      ).getVideoPlayerNextgendashPrefetchKeyForSink(
                        D,
                        $.config.mediaSinkType,
                      )
                    : null,
                prefetchResultInitial: T,
                type: "from_main_to_worker_link_player",
                videoFBID: D,
              },
              type: "send_to_worker",
            }),
            babelHelpers.extends({}, e, {
              state: "waiting_linked_to_worker",
              workerConnection: t,
            })
          );
        }
        function le(t) {
          if (
            ee.state !== "__disposed__" &&
            (ee.workerType === "RealWorker" || ee.workerType === "RealWorkerV2")
          ) {
            var n,
              r = o("nextgendasherr").nextgendasherrFromCause(
                $,
                t,
                "VideoPlayerNextgendashMainWith" +
                  ee.workerType +
                  "/FallbackToVirtualWorker",
                "Fallback to VirtualWorker from " + ee.workerType,
              );
            $.logging.log($, { error: r, type: "generic_error" });
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
            throw te(
              "throw",
              "Expected either mediaSourceHandle or mediaSource from Worker.",
            );
          (r != null &&
            ($.host.mediaSinkReceivedSourceHandle == null ||
              $.host.mediaSinkReceivedSourceHandle($, r)),
            J(e, o));
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
            $.workQueue.enqueueWork(function () {
              f(o, a);
            });
        }
        function ce(e, t) {
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
            l = null,
            s = null;
          if (n != null) {
            ((s = $.host.clock().perfMs), (i += 1));
            var u = {
              qplName: "dash_manifest_from_url",
              requestCreatedClock: $.host.clock(),
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
                onTransitioned: $.config.releasePastStateMachineStates
                  ? _(Z)
                  : function (e, t, n) {
                      Z(
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
              J(l, { type: "start" }));
          }
          return babelHelpers.extends({}, e, {
            dashManifestFromUrl: l,
            dashManifestFromUrlRequestIndex: i,
            dashManifestFromUrlStartedPerfMs: s,
            lastDashManifestUrl: n != null ? n : e.lastDashManifestUrl,
          });
        }
        switch (ee.state) {
          case "waiting_worker_connection":
            switch (N.type) {
              case "__enter":
                return ie(ee);
              case "__exception": {
                var de = le(N.exception);
                return $.config.connectVirtualWorkerOnFallbackWhileWaiting &&
                  de.state === "waiting_worker_connection"
                  ? ie(de)
                  : de;
              }
              case "__dispose":
                return;
              case "debug_config":
                return;
              case "update_expired_video_url_refresh_handler":
                return;
              case "update_player_viewport_dimensions":
                return;
              case "update_dash_manifest":
                return $.config.handleUpdateDashManifestInWaitingStates
                  ? ce(ee, N)
                  : (ee.pendingEvents.push(N), ee);
              case "update_scroll_position_api":
                return;
              default:
                return (N.type, ee.pendingEvents.push(N), ee);
            }
          case "waiting_linked_to_worker":
            switch (N.type) {
              case "__enter": {
                var me = ee.pendingEvents.reduce(
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
                  he = me.thisStatePendingEvents;
                return (
                  he.forEach(function (e) {
                    Z(e);
                  }),
                  babelHelpers.extends({}, ee, { pendingEvents: pe })
                );
              }
              case "__exception":
                return le(N.exception);
              case "__dispose":
                return;
              case "debug_config":
                return;
              case "update_expired_video_url_refresh_handler":
                return;
              case "update_player_viewport_dimensions":
                return;
              case "from_worker_to_main_player_new_media_source": {
                if (N.workerType !== ee.workerType || N.playerInstanceKey !== R)
                  return;
                se(
                  ee.mediaElement,
                  N.mediaSourceIndex,
                  N.mediaSource,
                  N.mediaSourceHandle,
                );
                var ve = ee.pendingEvents,
                  Ee = babelHelpers.objectWithoutPropertiesLoose(ee, s);
                return (
                  ve.forEach(function (e) {
                    Z(e);
                  }),
                  babelHelpers.extends({}, Ee, {
                    playerStateForDebug: h(
                      N.playerStateForDebug,
                      ee.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromMainSent: null,
                    playerStateFromWorker: o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(N.playerStateFromWorker),
                    state: "linked_to_worker",
                  })
                );
              }
              case "from_worker_to_main_player_unlinked": {
                if (N.workerType !== ee.workerType || N.playerInstanceKey !== R)
                  return;
                Z({
                  exception:
                    N.exceptionSnapshot != null
                      ? o("nextgendasherr").nextgendasherrFromCause(
                          $,
                          o("nextgendasherr").nextgendasherrFromSnapshot(
                            N.exceptionSnapshot,
                          ),
                          "VideoPlayerNextgendashMainUnexpectedUnlinkedBeforeLinked",
                        )
                      : o("nextgendasherr").nextgendasherr(
                          $,
                          "VideoPlayerNextgendashMainUnexpectedUnlinkedBeforeLinked",
                        ),
                  type: "__exception",
                });
                return;
              }
              case "from_worker_to_main_player_warning": {
                if (N.workerType !== ee.workerType || N.playerInstanceKey !== R)
                  return;
                re(
                  o("nextgendasherr").nextgendasherrFromSnapshot(
                    N.warningErrorSnapshot,
                  ),
                );
                return;
              }
              case "from_worker_to_main_player_fatal_error": {
                if (N.workerType !== ee.workerType || N.playerInstanceKey !== R)
                  return;
                Z({
                  exception: o("nextgendasherr").nextgendasherrFromCause(
                    $,
                    o("nextgendasherr").nextgendasherrFromSnapshot(
                      N.errorSnapshot,
                    ),
                    "VideoPlayerNextgendashMainFatalFromWorkerPlayerBeforeLinked",
                  ),
                  type: "__exception",
                });
                return;
              }
              case "update_dash_manifest":
                return $.config.handleUpdateDashManifestInWaitingStates
                  ? ce(ee, N)
                  : (ee.pendingEvents.push(N), ee);
              case "update_scroll_position_api":
                return;
              default:
                return (N.type, ee.pendingEvents.push(N), ee);
            }
          case "linked_to_worker":
            switch (N.type) {
              case "__enter": {
                ue(N.prevState.playerStateFromWorker, ee.playerStateFromWorker);
                return;
              }
              case "__exception":
                return $.config.isLivePlayback &&
                  N.exception.name.includes("DashManifest")
                  ? ($.logging.log($, {
                      error: N.exception,
                      format:
                        "live manifest-refresh __exception absorbed in linked_to_worker",
                      type: "generic_error_as_warning",
                    }),
                    ee)
                  : void 0;
              case "__dispose": {
                g(
                  $,
                  "explicit",
                  ee.liveManifestRefreshTimerHandle,
                  ee.liveNoProgressWatchdogTimerHandle,
                );
                return;
              }
              case "_dash_manifest_from_url_transitioned": {
                if (
                  (v($, N.fromState, N.toState, ee.dashManifestParsed, Z, J),
                  $.config.enableLive &&
                    ee.lastDashManifestUrl != null &&
                    N.toState.state === "failed")
                ) {
                  ee.liveManifestRefreshTimerHandle != null &&
                    $.host.timers.clearTimeout(
                      ee.liveManifestRefreshTimerHandle,
                    );
                  var ke = ee.liveManifestRefreshRetryCount,
                    De = o(
                      "VideoPlayerNextgendashRetryLogic",
                    ).calculateExponentialDelayWithJitter(
                      Ce,
                      ke,
                      $.host.random.random,
                    ),
                    Pe = $.host.timers.setTimeout(function () {
                      Z({ type: "_manifest_refresh_timer_fired" });
                    }, De);
                  return babelHelpers.extends({}, ee, {
                    liveManifestRefreshRetryCount: ke + 1,
                    liveManifestRefreshTimerHandle: Pe,
                  });
                }
                return;
              }
              case "_dash_manifest_parsed_transitioned": {
                var Ne = S($, ee, N.fromState, N.toState, Z, l),
                  Me = Ne != null ? Ne : ee;
                if (N.toState.state === "parsed") {
                  var Fe,
                    Be = Ie(
                      $,
                      Me,
                      Te({
                        current: Me.dashManifestParsed.state,
                        transitionedTo: N.toState,
                        useCurrent:
                          $.config.liveStartFromLatestParsedManifestEnabled,
                      }),
                    ),
                    We =
                      Be.liveManifestRefreshRetryCount > 0
                        ? babelHelpers.extends({}, Be, {
                            liveManifestRefreshRetryCount: 0,
                          })
                        : Be,
                    qe = (Fe = be($, We, N.toState, Z)) != null ? Fe : We,
                    Ue = X($, qe, Z);
                  return $.config.isLivePlayback ||
                    $.config.mediaSinkType === "MSE_TRACK_REUSE"
                    ? C($, R, Ue, N.type)
                    : Ue;
                }
                if (
                  $.config.isLivePlayback &&
                  $.config.enableLive &&
                  Me.lastDashManifestUrl != null &&
                  N.toState.state === "failed_to_parse"
                ) {
                  Me.liveManifestRefreshTimerHandle != null &&
                    $.host.timers.clearTimeout(
                      Me.liveManifestRefreshTimerHandle,
                    );
                  var Ve = Me.liveManifestRefreshRetryCount,
                    He = o(
                      "VideoPlayerNextgendashRetryLogic",
                    ).calculateExponentialDelayWithJitter(
                      Ce,
                      Ve,
                      $.host.random.random,
                    ),
                    Ge = $.host.timers.setTimeout(function () {
                      Z({ type: "_manifest_refresh_timer_fired" });
                    }, He);
                  return babelHelpers.extends({}, Me, {
                    liveManifestRefreshRetryCount: Ve + 1,
                    liveManifestRefreshTimerHandle: Ge,
                  });
                }
                return Ne;
              }
              case "_manifest_refresh_timer_fired": {
                var ze = ee.lastDashManifestUrl,
                  je = ee.dashManifestParsed.state;
                if (
                  !$.config.enableLive ||
                  ze == null ||
                  je.state !== "parsed" ||
                  je.data.metadata.manifestType !== "dynamic"
                )
                  return ee.liveManifestRefreshTimerHandle != null
                    ? ($.host.timers.clearTimeout(
                        ee.liveManifestRefreshTimerHandle,
                      ),
                      babelHelpers.extends({}, ee, {
                        liveManifestRefreshTimerHandle: null,
                      }))
                    : void 0;
                var Ke = $.host.timers.setTimeout(
                    function () {
                      Z({ type: "_manifest_refresh_timer_fired" });
                    },
                    Se($, je.data),
                  ),
                  Qe = $.host.clock().perfMs,
                  Xe = Re(ee.dashManifestFromUrl);
                if (
                  !Le({
                    fetchInFlight: Xe,
                    fetchStartedPerfMs: ee.dashManifestFromUrlStartedPerfMs,
                    fetchTimeoutMs: ye,
                    nowPerfMs: Qe,
                  })
                )
                  return babelHelpers.extends({}, ee, {
                    liveManifestRefreshTimerHandle: Ke,
                  });
                Xe &&
                  $.logging.log($, {
                    format:
                      "live manifest refresh fetch did not finish within %sms, replacing it",
                    params: [String(ye)],
                    type: "generic_warning",
                  });
                var Ye = ce(ee, {
                  dashManifestUrl: ze,
                  dashManifestXmlString: null,
                  type: "update_dash_manifest",
                });
                return babelHelpers.extends({}, Ye, {
                  liveManifestRefreshTimerHandle: Ke,
                });
              }
              case "_live_no_progress_watchdog_tick": {
                var Je, Ze, et, tt, nt, rt, ot, at, it, lt;
                if (
                  !$.config.isLivePlayback ||
                  !$.config.enableLive ||
                  $.config.liveNoProgressWatchdogThresholdSec <= 0
                )
                  return ee.liveNoProgressWatchdogTimerHandle != null
                    ? ($.host.timers.clearTimeout(
                        ee.liveNoProgressWatchdogTimerHandle,
                      ),
                      babelHelpers.extends({}, ee, {
                        liveNoProgressWatchdogTimerHandle: null,
                      }))
                    : void 0;
                var st = ee.mediaElement.state.mediaElementSnapshot,
                  ut = c($, ee),
                  ct = $.host.clock().perfMs,
                  dt = O(ee.playheadLastSeenTimeSec, ut, E),
                  mt = (Je = st == null ? void 0 : st.paused) != null ? Je : !0,
                  pt = mt
                    ? {
                        forceKickPlayheadLastMovedAtPerfMs: ct,
                        forceKickPlayheadLastSeenTimeSec:
                          ut != null ? ut : ee.forceKickPlayheadLastSeenTimeSec,
                      }
                    : null,
                  _t = F({
                    currentTimeSec: ut,
                    lastMovedAtPerfMs: ee.playheadLastMovedAtPerfMs,
                    lastSeenTimeSec: ee.playheadLastSeenTimeSec,
                    nowPerfMs: ct,
                    paused: mt,
                    progressed: dt,
                  }),
                  ft = _t.lastMovedAtPerfMs,
                  gt = _t.lastSeenTimeSec,
                  ht = st != null ? B(st.buffered, ut) : null,
                  yt = st != null ? W(st.buffered, ut) : null,
                  Ct = ge({
                    currentTimeSec: ut,
                    liveEdgeOffsetSec: Oe,
                    liveEdgeTimeSec: ee.playerStateFromWorker.liveEdgeTimeSec,
                    maxSeekTargetSec: yt,
                    minBehindLiveEdgeSec: fe,
                  }),
                  bt = q({
                    bufferedAheadSec: ht,
                    ended:
                      (Ze = st == null ? void 0 : st.ended) != null ? Ze : !1,
                    hasError: (st == null ? void 0 : st.error) != null,
                    lastMovedAtPerfMs: ft,
                    liveCatchUpSeekTargetSec: Ct,
                    nowPerfMs: ct,
                    paused:
                      (et = st == null ? void 0 : st.paused) != null ? et : !0,
                    seeking:
                      (tt = st == null ? void 0 : st.seeking) != null ? tt : !1,
                    starvationBufferAheadSec: L,
                    thresholdSec: $.config.liveNoProgressWatchdogThresholdSec,
                  }),
                  vt = Q($, Z),
                  St = V(ee.liveConsecutiveWatchdogKicks, dt, bt),
                  Rt = j(
                    (nt =
                      (rt = ee.playerStateFromWorker) == null
                        ? void 0
                        : rt.liveEdgeTimeSec) != null
                      ? nt
                      : null,
                    ut,
                    $.config.liveFellBehindEdgeReseekDriftSec,
                  ),
                  Lt = H(
                    (ot =
                      (at = ee.playerStateFromWorker) == null
                        ? void 0
                        : at.liveEdgeTimeSec) != null
                      ? ot
                      : null,
                    ut,
                    k,
                    P,
                  ),
                  Et =
                    $.config.liveProactiveEdgeReseekToIslandEnabled &&
                    st != null &&
                    ut != null
                      ? G(st.buffered, ut, Lt)
                      : null,
                  kt =
                    $.config.liveProactiveEdgeReseekEnabled &&
                    K({
                      followEdgeActive: $.config.liveFollowEdgeActive,
                      largeDrift: Rt,
                      paused:
                        (it = st == null ? void 0 : st.paused) != null
                          ? it
                          : !0,
                      seeking:
                        (lt = st == null ? void 0 : st.seeking) != null
                          ? lt
                          : !1,
                      shouldKick: bt,
                    }),
                  It = z({
                    bufferedAheadSec: ht,
                    islandGateEnabled:
                      $.config.liveProactiveEdgeReseekToIslandEnabled,
                    islandTargetSec: Et,
                    nowPerfMs: ct,
                    reseekWanted: kt,
                    waitingSincePerfMs: ee.liveEdgeIslandWaitingSincePerfMs,
                  }),
                  Tt = kt && It.canReseek;
                if (
                  (bt &&
                    (Rt || U(St, $.config.liveStallReseekToEdgeAfterKicks))) ||
                  Tt
                ) {
                  var Dt,
                    xt = !bt && Et != null ? Et : Lt,
                    $t =
                      (Dt = ee.mediaElement) == null || (Dt = Dt.state) == null
                        ? void 0
                        : Dt.mediaElement;
                  if (xt != null && $t != null)
                    return (
                      $.logging.log($, {
                        format:
                          "live no-progress watchdog: recovering in-engine by re-seeking the playhead to the live edge (largeDrift=%s proactive=%s)",
                        params: [String(Rt), String(Tt)],
                        type: "generic_warning",
                      }),
                      $.host.mediaElementSetPlayhead($, $t, xt),
                      babelHelpers.extends({}, ee, {
                        liveConsecutiveWatchdogKicks: 0,
                        liveEdgeIslandWaitingSincePerfMs: null,
                        liveNoProgressWatchdogTimerHandle: vt,
                        playheadLastMovedAtPerfMs: ct,
                        playheadLastSeenTimeSec: ut,
                      })
                    );
                }
                var Pt = ee.mediaElement.state.mediaElement,
                  Nt = null;
                if (
                  (bt &&
                    Ct != null &&
                    Pt != null &&
                    ($.host.mediaElementSetPlayhead($, Pt, Ct), (Nt = Ct)),
                  Nt != null)
                ) {
                  var Mt;
                  $.logging.log($, {
                    format:
                      "live no-progress watchdog: playhead frozen (starved or stale-live), seeking toward the live edge. %s %s %s %s",
                    params: [
                      "currentTimeSec=" + (ut != null ? ut : "unknown"),
                      "liveEdgeTimeSec=" +
                        ((Mt = ee.playerStateFromWorker.liveEdgeTimeSec) != null
                          ? Mt
                          : "unknown"),
                      "bufferedEndSec=" + (yt != null ? yt : "unknown"),
                      "seekTargetSec=" + Nt,
                    ],
                    type: "generic_warning",
                  });
                }
                return babelHelpers.extends({}, ee, pt, {
                  liveConsecutiveWatchdogKicks: St,
                  liveEdgeIslandWaitingSincePerfMs: It.waitingSincePerfMs,
                  liveNoProgressWatchdogTimerHandle: vt,
                  playheadLastMovedAtPerfMs: Nt != null ? ct : ft,
                  playheadLastSeenTimeSec: Nt != null ? Nt : gt,
                });
              }
              case "_media_element_transitioned": {
                var wt,
                  At,
                  Ft,
                  Ot,
                  Bt,
                  Wt,
                  qt,
                  Ut = ee.dashManifestParsed.state,
                  Vt = ee.mediaElement.state.mediaElementSnapshot,
                  Ht = we({
                    currentTimeSec:
                      (wt = Vt == null ? void 0 : Vt.currentTime) != null
                        ? wt
                        : null,
                    isLivePlayback: $.config.isLivePlayback,
                    pending: $.config.vodStartTimestampPending,
                    readyState:
                      (At = Vt == null ? void 0 : Vt.readyState) != null
                        ? At
                        : null,
                  }),
                  Gt =
                    (Ft = ee.mediaElement) == null || (Ft = Ft.state) == null
                      ? void 0
                      : Ft.mediaElement;
                if (
                  (Ht === "seek" && Gt != null
                    ? $.host.mediaElementSetPlayhead(
                        $,
                        Gt,
                        $.config.startTimestampSec,
                      )
                    : Ht === "finish" &&
                      ($.config.vodStartTimestampPending = !1),
                  Ae({
                    currentTimeSec: c($, ee),
                    isLivePlayback: $.config.isLivePlayback,
                    isManifestDynamic:
                      Ut.state === "parsed" &&
                      Ut.data.metadata.manifestType === "dynamic",
                    startTimestampSec: $.config.startTimestampSec,
                  }))
                ) {
                  var zt,
                    jt =
                      (zt = ee.mediaElement) == null || (zt = zt.state) == null
                        ? void 0
                        : zt.mediaElement;
                  jt != null &&
                    xe(
                      $,
                      jt,
                      Ut.state === "parsed" ? Ut.data : null,
                      ee.liveStartTimestampSecIsManifestDerived,
                    );
                }
                var Kt = ee.mediaElement.state.mediaElementSnapshot,
                  Qt = c($, ee),
                  Xt = $.host.clock().perfMs,
                  Yt = _e($, ee, Qt, Xt),
                  Jt = O(ee.forceKickPlayheadLastSeenTimeSec, Qt, E),
                  Zt = (Ot = Kt == null ? void 0 : Kt.paused) != null ? Ot : !0,
                  en =
                    $.config.isLivePlayback && (Zt || ee.liveWatchdogWasPaused),
                  tn = F({
                    currentTimeSec: Qt,
                    lastMovedAtPerfMs: ee.forceKickPlayheadLastMovedAtPerfMs,
                    lastSeenTimeSec: ee.forceKickPlayheadLastSeenTimeSec,
                    nowPerfMs: Xt,
                    paused: en,
                    progressed: Jt,
                  }),
                  nn = tn.lastMovedAtPerfMs,
                  rn = tn.lastSeenTimeSec,
                  on = F({
                    currentTimeSec: Qt,
                    lastMovedAtPerfMs: ee.playheadLastMovedAtPerfMs,
                    lastSeenTimeSec: ee.playheadLastSeenTimeSec,
                    nowPerfMs: Xt,
                    paused: en,
                    progressed: !1,
                  }),
                  an = on.lastMovedAtPerfMs,
                  ln = on.lastSeenTimeSec,
                  sn = {
                    liveWatchdogWasPaused: Zt,
                    playheadLastMovedAtPerfMs: an,
                    playheadLastSeenTimeSec: ln,
                  },
                  un = A({
                    currentTimeSec: Qt,
                    enabled: $.config.liveForceWorkerKickOnStallEnabled,
                    ended:
                      (Bt = Kt == null ? void 0 : Kt.ended) != null ? Bt : !1,
                    frozenThresholdMs: w,
                    hasError: (Kt == null ? void 0 : Kt.error) != null,
                    isLivePlayback: $.config.isLivePlayback,
                    lastForcedWorkerKickPerfMs: ee.lastForcedWorkerKickPerfMs,
                    minIntervalMs: M,
                    nowPerfMs: Xt,
                    paused:
                      (Wt = Kt == null ? void 0 : Kt.paused) != null ? Wt : !0,
                    playheadLastMovedAtPerfMs: nn,
                    seeking:
                      (qt = Kt == null ? void 0 : Kt.seeking) != null ? qt : !1,
                  });
                return un
                  ? babelHelpers.extends(
                      {},
                      b($, R, ee, N.type + ":force_worker_kick_on_stall"),
                      sn,
                      {
                        forceKickPlayheadLastMovedAtPerfMs: nn,
                        forceKickPlayheadLastSeenTimeSec: rn,
                        lastForcedWorkerKickPerfMs: Xt,
                        liveLatencyPlaybackRate: Yt,
                      },
                    )
                  : babelHelpers.extends({}, C($, R, ee, N.type), sn, {
                      forceKickPlayheadLastMovedAtPerfMs: nn,
                      forceKickPlayheadLastSeenTimeSec: rn,
                      liveLatencyPlaybackRate: Yt,
                    });
              }
              case "_request_recovery_from_source_reset": {
                ee.workerConnection.sendToWorker({
                  eventToWorker: {
                    mediaSourceIndex: N.mediaSourceIndex,
                    playerInstanceKey: R,
                    type: "from_main_to_worker_request_recovery_from_source_reset",
                  },
                  type: "send_to_worker",
                });
                return;
              }
              case "_notify_deliberate_detach_for_unmount": {
                ee.workerConnection.sendToWorker({
                  eventToWorker: {
                    mediaSourceIndex: N.mediaSourceIndex,
                    playerInstanceKey: R,
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
                return ce(ee, N);
              case "_send_state_to_worker":
                return C($, R, ee, N.type);
              case "update_media_element":
                return (
                  J(ee.mediaElement, {
                    mediaElement: N.mediaElement,
                    type: "update_media_element",
                  }),
                  $.config.eagerResyncOnMediaElementAttach &&
                  N.mediaElement != null
                    ? y($, R, ee, N.type)
                    : void 0
                );
              case "update_config_from_env":
                return b($, R, ee, N.type);
              case "select_video_quality":
                return C(
                  $,
                  R,
                  babelHelpers.extends({}, ee, {
                    selectedVideoQualityDisplayLabel:
                      N.videoQualityDisplayLabel,
                  }),
                  N.type,
                );
              case "select_media_variant":
                return C(
                  $,
                  R,
                  babelHelpers.extends({}, ee, {
                    selectedMediaVariant: N.mediaVariant,
                  }),
                  N.type,
                );
              case "debug_log_stall_details": {
                ee.workerConnection.sendToWorker({
                  eventToWorker: {
                    mediaElementSnapshotFromMain:
                      ee.mediaElement.state.mediaElementSnapshot,
                    playerInstanceKey: R,
                    stallStartClock: N.stallStartClock,
                    type: "from_main_to_worker_debug_log_stall_details",
                  },
                  type: "send_to_worker",
                });
                return;
              }
              case "from_worker_to_main_player_new_media_source": {
                if (N.workerType !== ee.workerType || N.playerInstanceKey !== R)
                  return;
                se(
                  ee.mediaElement,
                  N.mediaSourceIndex,
                  N.mediaSource,
                  N.mediaSourceHandle,
                );
                var cn = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject(N.playerStateFromWorker);
                return (
                  ue(ee.playerStateFromWorker, cn),
                  babelHelpers.extends({}, ee, {
                    playerStateForDebug: h(
                      N.playerStateForDebug,
                      ee.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromWorker: cn,
                  })
                );
              }
              case "from_worker_to_main_player_unlinked": {
                if (N.workerType !== ee.workerType || N.playerInstanceKey !== R)
                  return;
                var dn =
                  N.exceptionSnapshot != null
                    ? o("nextgendasherr").nextgendasherrFromCause(
                        $,
                        o("nextgendasherr").nextgendasherrFromSnapshot(
                          N.exceptionSnapshot,
                        ),
                        "VideoPlayerNextgendashMainUnexpectedUnlinkedFromWorker",
                        "Reason: " + N.reason,
                      )
                    : o("nextgendasherr").nextgendasherr(
                        $,
                        "VideoPlayerNextgendashMainUnexpectedUnlinkedFromWorker",
                        "Reason: " + N.reason,
                      );
                if (
                  (ee.workerType === "RealWorker" ||
                    ee.workerType === "RealWorkerV2") &&
                  !$.config.disableFallbackFromRealWorkerAfterLinked
                )
                  return le(dn);
                Z({ exception: dn, type: "__exception" });
                return;
              }
              case "from_worker_to_main_player_warning": {
                if (N.workerType !== ee.workerType || N.playerInstanceKey !== R)
                  return;
                re(
                  o("nextgendasherr").nextgendasherrFromSnapshot(
                    N.warningErrorSnapshot,
                  ),
                );
                var mn = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject(N.playerStateFromWorker);
                return (
                  ue(ee.playerStateFromWorker, mn),
                  babelHelpers.extends({}, ee, {
                    playerStateForDebug: h(
                      N.playerStateForDebug,
                      ee.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromWorker: mn,
                  })
                );
              }
              case "from_worker_to_main_player_fatal_error": {
                if (N.workerType !== ee.workerType || N.playerInstanceKey !== R)
                  return;
                Z({
                  exception: o("nextgendasherr").nextgendasherrFromCause(
                    $,
                    o("nextgendasherr").nextgendasherrFromSnapshot(
                      N.errorSnapshot,
                    ),
                    "VideoPlayerNextgendashMainFatalFromWorkerPlayer",
                  ),
                  type: "__exception",
                });
                var pn = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject(N.playerStateFromWorker);
                return (
                  ue(ee.playerStateFromWorker, pn),
                  babelHelpers.extends({}, ee, {
                    playerStateForDebug: h(
                      N.playerStateForDebug,
                      ee.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromWorker: pn,
                  })
                );
              }
              case "from_worker_to_main_playback_loop_state": {
                var _n;
                if (N.workerType !== ee.workerType || N.playerInstanceKey !== R)
                  return;
                var fn = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject(N.playerStateFromWorker);
                ue(ee.playerStateFromWorker, fn);
                var gn =
                    (_n = ee.mediaElement) == null || (_n = _n.state) == null
                      ? void 0
                      : _n.mediaElement,
                  hn = ee.dashManifestParsed.state;
                return (
                  $.config.liveStartSeekWhenBufferedEnabled &&
                    gn != null &&
                    c($, ee) === 0 &&
                    Ae({
                      currentTimeSec: 0,
                      isLivePlayback: $.config.isLivePlayback,
                      isManifestDynamic:
                        hn.state === "parsed" &&
                        hn.data.metadata.manifestType === "dynamic",
                      startTimestampSec: $.config.startTimestampSec,
                    }) &&
                    $e($.host.mediaElementCollectSnapshot($, gn)) &&
                    xe(
                      $,
                      gn,
                      hn.state === "parsed" ? hn.data : null,
                      ee.liveStartTimestampSecIsManifestDerived,
                    ),
                  babelHelpers.extends({}, ee, { playerStateFromWorker: fn })
                );
              }
              case "from_worker_to_main_player_state_for_debug":
                return N.workerType !== ee.workerType ||
                  N.playerInstanceKey !== R
                  ? void 0
                  : babelHelpers.extends({}, ee, {
                      playerStateForDebug: h(
                        N.playerStateForDebug,
                        ee.mediaElement.state.mediaElementSnapshot,
                      ),
                    });
              case "from_worker_to_main_refresh_urls": {
                ee.dashManifestParsed.sendEvent({
                  type: "handle_worker_url_refresh_request",
                  urls: N.urls,
                });
                return;
              }
              case "update_scroll_position_api":
                return;
              default:
                N.type;
                return;
            }
          case "__disposed__":
            switch (N.type) {
              case "__enter": {
                var yn = N.prevState;
                g(
                  $,
                  "terminal",
                  yn.liveManifestRefreshTimerHandle,
                  yn.liveNoProgressWatchdogTimerHandle,
                );
                var Cn =
                    "VideoPlayerNextgendashMainWith" +
                    yn.workerType +
                    "/Disposed[" +
                    ee.reason +
                    "@" +
                    yn.state +
                    "]",
                  bn =
                    "Disposed: " +
                    ee.reason +
                    "@" +
                    yn.state +
                    "; playerStateFromWorker=%s",
                  vn = function () {
                    var e;
                    return (e = JSON.stringify(yn.playerStateFromWorker)) !=
                      null
                      ? e
                      : "undefined";
                  },
                  Sn =
                    ee.exception != null
                      ? o("nextgendasherr").nextgendasherrFromCause(
                          $,
                          ee.exception,
                          Cn,
                          bn,
                          vn(),
                        )
                      : null;
                (yn.workerConnection != null &&
                  ae(
                    yn.workerConnection,
                    Sn != null
                      ? Sn
                      : function () {
                          return o("nextgendasherr").nextgendasherr(
                            $,
                            Cn,
                            bn,
                            vn(),
                          );
                        },
                  ),
                  yn.scrollPositionSubscription != null &&
                    yn.scrollPositionSubscription.remove(),
                  Sn != null && i(Sn));
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
    function g(e, t, n, r) {
      var o = e.config.enableDisposalResourceCleanup
        ? t === "terminal"
        : t === "explicit";
      o &&
        (n != null && e.host.timers.clearTimeout(n),
        r != null && e.host.timers.clearTimeout(r));
    }
    function h(e, t) {
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
    function y(e, t, n, r) {
      var o = p(e, n),
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
    function C(e, t, n, o) {
      var a = p(e, n);
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
    function b(e, t, n, r) {
      var o = p(e, n);
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
    function v(e, t, n, r, a, i) {
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
    function S(e, t, n, r, a, i) {
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
    var R = 0.001,
      L = 0.5,
      E = 1,
      k = 2,
      I = 1,
      T = 8,
      D = 0.1,
      x = 1e4,
      $ = 1.5,
      P = 4,
      N = 2e3,
      M = 1e3,
      w = 2e3;
    function A(e) {
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
    function F(e) {
      if (e.progressed || e.paused) {
        var t;
        return {
          lastMovedAtPerfMs: e.nowPerfMs,
          lastSeenTimeSec:
            (t = e.currentTimeSec) != null ? t : e.lastSeenTimeSec,
        };
      }
      return {
        lastMovedAtPerfMs: e.lastMovedAtPerfMs,
        lastSeenTimeSec: e.lastSeenTimeSec,
      };
    }
    function O(e, t, n) {
      return t == null ? !1 : e == null || t < e - R ? !0 : t - e >= n;
    }
    function B(e, t) {
      if (t == null) return null;
      var n = W(e, t);
      return n != null ? Math.max(0, n - t) : 0;
    }
    function W(e, t) {
      if (t == null) return null;
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (r[0] <= t && t <= r[1]) return r[1];
      }
      return null;
    }
    function q(e) {
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
    function U(e, t) {
      return t > 0 && e >= t;
    }
    function V(e, t, n) {
      return t ? 0 : n ? e + 1 : e;
    }
    function H(e, t, n, r) {
      if (e == null || t == null || e - t < r) return null;
      var o = e - n;
      return o > t ? o : null;
    }
    function G(e, t, n) {
      if (n == null) return null;
      for (var r = e.length - 1; r >= 0; r--) {
        var o = e[r],
          a = o[0],
          i = o[1];
        if (a <= t) return null;
        if (i - a >= I && i >= n - T)
          return Math.max(a + D, Math.min(n, i - I));
      }
      return null;
    }
    function z(e) {
      var t = e.bufferedAheadSec,
        n = e.islandGateEnabled,
        r = e.islandTargetSec,
        o = e.nowPerfMs,
        a = e.reseekWanted,
        i = e.waitingSincePerfMs;
      if (!a || !n || r != null)
        return { canReseek: !0, waitingSincePerfMs: null };
      var l = i != null ? i : o;
      return {
        canReseek: o - l >= x || (t != null && t < $),
        waitingSincePerfMs: l,
      };
    }
    function j(e, t, n) {
      return n > 0 && e != null && t != null && e - t > n;
    }
    function K(e) {
      var t = e.followEdgeActive,
        n = e.largeDrift,
        r = e.paused,
        o = e.seeking,
        a = e.shouldKick;
      return n && !a && t && !r && !o;
    }
    function Q(e, t) {
      return e.host.timers.setTimeout(function () {
        t({ type: "_live_no_progress_watchdog_tick" });
      }, N);
    }
    function X(e, t, n) {
      return !e.config.isLivePlayback ||
        !e.config.enableLive ||
        e.config.liveNoProgressWatchdogThresholdSec <= 0 ||
        t.liveNoProgressWatchdogTimerHandle != null
        ? t
        : babelHelpers.extends({}, t, {
            liveNoProgressWatchdogTimerHandle: Q(e, n),
          });
    }
    var Y = 0.8,
      J = 1.1,
      Z = 1,
      ee = 10,
      te = 18,
      ne = 4e3,
      re = 2e3,
      oe = 1e3,
      ae = ee,
      ie = 3,
      le = 4,
      se = 1e4,
      ue = 0.05,
      ce = 0.5;
    function de(e) {
      var t = e.budgetSec,
        n = e.frozenSincePerfMs,
        r = e.last,
        o = e.now,
        a = e.state;
      if (a === "paused")
        return { budgetSec: 0, frozenSincePerfMs: null, last: null };
      if (a === "transient") {
        var i;
        return {
          budgetSec: t,
          frozenSincePerfMs:
            (i = n != null ? n : r == null ? void 0 : r.perfMs) != null
              ? i
              : null,
          last: r,
        };
      }
      if (r == null) return { budgetSec: t, frozenSincePerfMs: null, last: o };
      var l = o.currentTimeSec - r.currentTimeSec;
      if (l < 0) return { budgetSec: 0, frozenSincePerfMs: null, last: o };
      if (l < ue)
        return {
          budgetSec: t,
          frozenSincePerfMs: n != null ? n : r.perfMs,
          last: o,
        };
      var s = (o.perfMs - (n != null ? n : r.perfMs)) / 1e3 - l;
      return {
        budgetSec: Math.max(0, s < 0 || (n != null && s >= ce) ? t + s : t),
        frozenSincePerfMs: null,
        last: o,
      };
    }
    function me(e) {
      var t = e.active,
        n = e.budgetSec,
        r = e.bufferedEndSec,
        o = e.catchUpSeekedAtPerfMs,
        a = e.currentTimeSec,
        i = e.latencySec,
        l = e.nowPerfMs;
      if (
        !t ||
        r == null ||
        a == null ||
        i == null ||
        i <= ae + ie ||
        n < ie ||
        (o != null && l - o < se)
      )
        return null;
      var s = Math.min(a + Math.min(n, i - ae), r - le);
      return s - a >= ie ? s : null;
    }
    function pe(e) {
      var t = e.active,
        n = e.appliedRate,
        r = e.bufferedAheadSec,
        o = e.changedAtPerfMs,
        a = e.currentRate,
        i = e.inNewestBufferedRange,
        l = e.isManifestDynamic,
        s = e.isPausedOrSeeking,
        u = e.latencySec,
        c = e.nowPerfMs,
        d = e.preferredLatencySec;
      if (a !== 1 && a !== n)
        return a > 1 &&
          l &&
          !s &&
          u != null &&
          u <= d &&
          i &&
          r != null &&
          r < Z
          ? 1
          : null;
      var m = 1;
      if (
        (t &&
          i &&
          r != null &&
          u != null &&
          (r < Z ? (m = Y) : u > d && (m = J)),
        m === a)
      )
        return null;
      var p = o != null ? c - o : 1 / 0;
      return (m === 1 && t && p < re) || (m === J && a === 1 && p < oe)
        ? null
        : m;
    }
    function _e(e, t, n, r) {
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
        u = l.paused || l.seeking || s ? r + ne : o.holdUntilPerfMs,
        c = o.hadInPlayStall || (s && a.isBufferingInitial === !1),
        d = t.dashManifestParsed.state,
        m = t.playerStateFromWorker.liveEdgeTimeSec,
        p = l.buffered,
        _ = p.length > 0 ? p[p.length - 1] : null,
        f = d.state === "parsed" && d.data.metadata.manifestType === "dynamic",
        g = e.config.liveFollowEdgeActive && f && !l.ended && r >= u,
        h = m != null && n != null ? m - n : null,
        y =
          n != null
            ? de({
                budgetSec: o.catchUpBudgetSec,
                frozenSincePerfMs: o.catchUpFrozenSincePerfMs,
                last: o.catchUpBudgetLastObservation,
                now: { currentTimeSec: n, perfMs: r },
                state:
                  l.paused || l.ended
                    ? "paused"
                    : l.seeking || (s && a.isBufferingInitial !== !1)
                      ? "transient"
                      : "playing",
              })
            : {
                budgetSec: o.catchUpBudgetSec,
                frozenSincePerfMs: o.catchUpFrozenSincePerfMs,
                last: o.catchUpBudgetLastObservation,
              },
        C = y.budgetSec,
        b = e.config.liveLatencyCatchUpSeekEnabled
          ? me({
              active: g,
              budgetSec: C,
              bufferedEndSec: W(p, n),
              catchUpSeekedAtPerfMs: o.catchUpSeekedAtPerfMs,
              currentTimeSec: n,
              latencySec: h,
              nowPerfMs: r,
            })
          : null;
      if (b != null && n != null)
        return (
          e.host.mediaElementSetPlayhead(e, i, b),
          e.logging.log(e, {
            format:
              "live latency control: seek %s -> %s to catch up (latency %s)",
            params: [String(n), String(b), String(h)],
            type: "generic_info",
          }),
          babelHelpers.extends({}, o, {
            catchUpBudgetLastObservation: { currentTimeSec: b, perfMs: r },
            catchUpBudgetSec: Math.max(0, C - (b - n)),
            catchUpFrozenSincePerfMs: null,
            catchUpSeekedAtPerfMs: r,
            hadInPlayStall: c,
            holdUntilPerfMs: r + ne,
          })
        );
      var v = pe({
        active: g,
        appliedRate: o.appliedRate,
        bufferedAheadSec: B(p, n),
        changedAtPerfMs: o.changedAtPerfMs,
        currentRate: l.playbackRate,
        inNewestBufferedRange: n != null && _ != null && _[0] <= n && n <= _[1],
        isManifestDynamic: f && !l.ended,
        isPausedOrSeeking: l.paused || l.seeking,
        latencySec: h,
        nowPerfMs: r,
        preferredLatencySec: c ? te : ee,
      });
      return v == null
        ? u === o.holdUntilPerfMs &&
          c === o.hadInPlayStall &&
          C === o.catchUpBudgetSec &&
          y.last === o.catchUpBudgetLastObservation &&
          y.frozenSincePerfMs === o.catchUpFrozenSincePerfMs
          ? o
          : babelHelpers.extends({}, o, {
              catchUpBudgetLastObservation: y.last,
              catchUpBudgetSec: C,
              catchUpFrozenSincePerfMs: y.frozenSincePerfMs,
              hadInPlayStall: c,
              holdUntilPerfMs: u,
            })
        : (e.host.mediaElementSetPlaybackRate(e, i, v),
          e.logging.log(e, {
            format: "live latency control: playbackRate %s -> %s",
            params: [String(l.playbackRate), String(v)],
            type: "generic_info",
          }),
          {
            appliedRate: v,
            catchUpBudgetLastObservation: y.last,
            catchUpBudgetSec: C,
            catchUpFrozenSincePerfMs: y.frozenSincePerfMs,
            catchUpSeekedAtPerfMs: o.catchUpSeekedAtPerfMs,
            changedAtPerfMs: r,
            hadInPlayStall: c,
            holdUntilPerfMs: u,
          });
    }
    var fe = 15;
    function ge(e) {
      var t = e.currentTimeSec,
        n = e.liveEdgeOffsetSec,
        r = e.liveEdgeTimeSec,
        o = e.maxSeekTargetSec,
        a = e.minBehindLiveEdgeSec;
      if (t == null || r == null || o == null || r - t < a) return null;
      var i = Math.min(Math.max(0, r - n), o);
      return i > t ? i : null;
    }
    var he = 2e3,
      ye = 1e4,
      Ce = Object.freeze({
        backoffMultiplier: 2,
        initialDelayMs: 200,
        jitterPercent: 0.2,
        maxDelayMs: 1e4,
        retryBehavior: "exponential",
        retryCount: 1 / 0,
      });
    function be(e, t, n, r) {
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
        ve({
          intervalMs: Se(e, n.data),
          isInlineManifest: t.dashManifestFromUrlStartedPerfMs == null,
          refreshInlineManifestImmediately:
            e.config.liveRefreshInlineManifestImmediatelyEnabled,
        }),
      );
      return babelHelpers.extends({}, t, { liveManifestRefreshTimerHandle: o });
    }
    function ve(e) {
      return e.refreshInlineManifestImmediately && e.isInlineManifest
        ? 0
        : e.intervalMs;
    }
    function Se(e, t) {
      var n;
      return e.config.liveManifestRefreshIntervalMs > 0
        ? e.config.liveManifestRefreshIntervalMs
        : (n = t.metadata.minimumUpdatePeriodMs) != null
          ? n
          : he;
    }
    function Re(e) {
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
    function Le(e) {
      var t = e.fetchInFlight,
        n = e.fetchStartedPerfMs,
        r = e.fetchTimeoutMs,
        o = e.nowPerfMs;
      return t ? n == null || o - n >= r : !0;
    }
    function Ee(e) {
      var t = e.enableLive,
        n = e.isManifestParsed,
        r = e.manifestType;
      return t && n && r === "dynamic";
    }
    function ke(e) {
      ((e.isLivePlayback = !0),
        e.liveReleasePastStateMachineStates &&
          (e.releasePastStateMachineStates = !0));
    }
    function Ie(e, t, n) {
      var r;
      if (
        !Ee({
          enableLive: e.config.enableLive,
          isManifestParsed: n.state === "parsed",
          manifestType:
            n.state === "parsed" ? n.data.metadata.manifestType : null,
        }) ||
        n.state !== "parsed"
      )
        return t;
      ke(e.config);
      var o = t.liveStartTimestampSecIsManifestDerived;
      if (
        Fe({
          isManifestDerived: o,
          playheadSec: (r = c(e, t)) != null ? r : 0,
          startTimestampSec: e.config.startTimestampSec,
        })
      ) {
        var a = De(e, n.data);
        a != null && ((e.config.startTimestampSec = a), (o = !0));
      }
      return o === t.liveStartTimestampSecIsManifestDerived
        ? t
        : babelHelpers.extends({}, t, {
            liveStartTimestampSecIsManifestDerived: o,
          });
    }
    function Te(e) {
      return e.useCurrent ? e.current : e.transitionedTo;
    }
    function De(e, t) {
      var n = t.manifestRepresentations,
        r = t.metadata,
        o = Ue({
          audioWindow: qe(n.audio),
          minBufferTimeSec: r.minBufferTimeSec,
          suggestedPresentationDelaySec: r.suggestedPresentationDelaySec,
          videoWindow: qe(n.video),
        });
      return o != null && e.config.liveStartPositionNearSegmentStartEnabled
        ? Ne(n.video, o)
        : o;
    }
    function xe(e, t, n, r) {
      if (r && n != null) {
        var o;
        e.config.startTimestampSec =
          (o = De(e, n)) != null ? o : e.config.startTimestampSec;
      }
      e.host.mediaElementSetPlayhead(e, t, e.config.startTimestampSec);
    }
    function $e(e) {
      return (
        e != null && e.currentTime === 0 && !e.seeking && e.buffered.length > 0
      );
    }
    var Pe = 0.3;
    function Ne(e, t) {
      var n = e.find(function (e) {
        return (
          e.segmentsInfo.type === "SegmentTemplate" &&
          e.segmentsInfo.segmentTimeline.length > 0 &&
          e.segmentsInfo.timescale > 0
        );
      });
      if (n == null || n.segmentsInfo.type !== "SegmentTemplate") return t;
      var r = n.segmentsInfo,
        o = r.segmentTimeline,
        a = r.timescale;
      for (var i of o)
        for (var l = 0; l <= i.r; l++) {
          var s = (i.t + l * i.d) / a;
          if (s <= t && t < s + i.d / a) return Math.min(s + Pe, t);
        }
      return t;
    }
    var Me = 1;
    function we(e) {
      var t = e.currentTimeSec,
        n = e.isLivePlayback,
        r = e.pending,
        o = e.readyState;
      return !r || n || t == null
        ? "none"
        : t === 0
          ? "seek"
          : o != null && o >= Me
            ? "finish"
            : "none";
    }
    function Ae(e) {
      var t = e.currentTimeSec,
        n = e.isLivePlayback,
        r = e.isManifestDynamic,
        o = e.startTimestampSec;
      return n && r && o > 0 && t === 0;
    }
    function Fe(e) {
      var t = e.isManifestDerived,
        n = e.playheadSec,
        r = e.startTimestampSec;
      return r === 0 ? !0 : t && n === 0;
    }
    var Oe = 5,
      Be = 5,
      We = 3;
    function qe(e) {
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
    function Ue(e) {
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
            ? (u = Math.max(s * We, n != null ? n : 0))
            : (u = Be),
        (u = Math.max(u, Be)),
        Math.min(Math.max(i - u, l), i)
      );
    }
    function Ve(e) {
      var t = e.state;
      if (t.state === "__null__" || t.state === "__disposed__") return null;
      var n = t.dashManifestParsed.state;
      return n.state !== "parsed" ? null : n;
    }
    function He(e) {
      var t = Ve(e);
      return t == null
        ? null
        : t.data.metadata.manifestIsMixedCodecVideo ||
            t.data.metadata.manifestIsMixedCodecAudio;
    }
    function Ge(e) {
      var t, n;
      return (t =
        (n = Ve(e)) == null ? void 0 : n.data.metadata.manifestIdentifier) !=
        null
        ? t
        : null;
    }
    function ze(e) {
      var t = Ve(e);
      return t == null
        ? null
        : t.data.manifestRepresentations.video.some(function (e) {
            return (
              e.segmentsInfo.type === "SegmentTemplate" &&
              e.segmentsInfo.segmentTimelinePredictive != null
            );
          });
    }
    function je(e) {
      var t = e.state;
      return t.state === "linked_to_worker" ? t.playerStateFromWorker : null;
    }
    function Ke(e) {
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
    function Qe(e) {
      var t,
        n = Ve(e);
      return (t = n == null ? void 0 : n.data.manifestRepresentations.video) !=
        null
        ? t
        : [];
    }
    function Xe(e) {
      var t,
        n = Ve(e);
      return (t = n == null ? void 0 : n.data.manifestRepresentations.audio) !=
        null
        ? t
        : [];
    }
    function Ye(e, t) {
      var n,
        r,
        o = je(e),
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
    function Je(e) {
      return Ye(e, Qe(e));
    }
    function Ze(e, t) {
      var n,
        r,
        o = je(e),
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
    function et(e) {
      return Ze(e, Xe(e));
    }
    function tt(e, t) {
      var n,
        r,
        o = je(e),
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
    function nt(e, t, n) {
      return o(
        "VideoPlayerNextgendashMediaUtils",
      ).findTimeRangeAnnotationAtMediaTime(e, t, n);
    }
    function rt(e, t) {
      var n,
        r = je(e),
        o = t === void 0 ? Ke(e) : t,
        a = nt(
          o,
          r == null || (n = r.bufferedRangesWithRepIds) == null
            ? void 0
            : n.audio,
          r == null ? void 0 : r.targetRepresentationId.audio,
        ),
        i = Xe(e).find(function (e) {
          return e.representationId === a;
        });
      return i;
    }
    function ot(e, t) {
      var n,
        r = je(e),
        o = t === void 0 ? Ke(e) : t,
        a = nt(
          o,
          r == null || (n = r.bufferedRangesWithRepIds) == null
            ? void 0
            : n.video,
          r == null ? void 0 : r.targetRepresentationId.video,
        ),
        i = Qe(e).find(function (e) {
          return e.representationId === a;
        });
      return i;
    }
    function at(e) {
      var t = Ke(e);
      return { audio: rt(e, t), video: ot(e, t) };
    }
    function it(e, t) {
      var n,
        r = je(e),
        o = nt(
          t,
          r == null || (n = r.bufferedRangesWithRepIds) == null
            ? void 0
            : n.video,
          null,
        );
      return Qe(e).find(function (e) {
        return e.representationId === o;
      });
    }
    function lt(e) {
      var t = je(e),
        n = t == null ? void 0 : t.targetRepresentationId.audio,
        r = Xe(e).find(function (e) {
          return e.representationId === n;
        });
      return r;
    }
    function st(e) {
      var t = je(e),
        n = t == null ? void 0 : t.targetRepresentationId.video,
        r = Qe(e).find(function (e) {
          return e.representationId === n;
        });
      return r;
    }
    function ut(e) {
      var t = e.state,
        n =
          t.state === "__null__" || t.state === "__disposed__"
            ? null
            : t.selectedMediaVariant;
      return n;
    }
    function ct(e) {
      var t = e.state,
        n =
          t.state === "__null__" || t.state === "__disposed__"
            ? null
            : t.selectedVideoQualityDisplayLabel;
      return n;
    }
    ((l.internal_collectMediaElementSnapshotForWorker = d),
      (l.internal_shouldWithholdManifestFromWorker = m),
      (l.VideoPlayerNextgendashMainSM = f),
      (l.internal_clearLivePlaybackTimers = g),
      (l.internal_shouldForceWorkerKickOnStall = A),
      (l.internal_getLiveWatchdogPlayheadAnchors = F),
      (l.internal_didPlayheadMakeProgress = O),
      (l.internal_getBufferedAheadSec = B),
      (l.internal_getBufferedEndSec = W),
      (l.internal_shouldKickStalledPlaybackWatchdog = q),
      (l.internal_shouldRecoverAfterKick = U),
      (l.internal_getNextConsecutiveWatchdogKicks = V),
      (l.internal_getLiveEdgeReseekTargetSec = H),
      (l.internal_getBufferedLiveEdgeIslandTargetSec = G),
      (l.internal_getLiveEdgeIslandWait = z),
      (l.internal_shouldReseekToEdgeImmediatelyForLargeDrift = j),
      (l.internal_shouldProactivelyReseekToEdgeForLargeDrift = K),
      (l.internal_updateLiveLatencyCatchUpBudget = de),
      (l.internal_getLiveLatencyCatchUpSeekTargetSec = me),
      (l.internal_getLiveLatencyPlaybackRate = pe),
      (l.internal_getLiveCatchUpSeekTargetSec = ge),
      (l.internal_getLiveManifestRefreshDelayMs = ve),
      (l.internal_shouldStartLiveManifestRefreshFetch = Le),
      (l.internal_shouldMarkLivePlayback = Ee),
      (l.internal_markConfigLivePlayback = ke),
      (l.internal_getParsedManifestStateForLiveStart = Te),
      (l.internal_canSeekToLiveStartPositionNow = $e),
      (l.internal_getLiveStartPositionNearSegmentStartSec = Ne),
      (l.internal_getVodStartTimestampStep = we),
      (l.internal_shouldSeekToLiveStartPosition = Ae),
      (l.internal_shouldUpdateLiveStartTimestampSec = Fe),
      (l.internal_getLiveStreamWindow = qe),
      (l.internal_computeLiveStartPositionSec = Ue),
      (l.getIsMixedCodecManifest = He),
      (l.getManifestIdentifier = Ge),
      (l.getIsPredictiveDash = ze),
      (l.getAvailableVideoRepresentations = Je),
      (l.getAvailableAudioRepresentations = et),
      (l.filterVideoRepresentationsByTargetVariant = tt),
      (l.internal_findCurrentPlayingRepresentationID = nt),
      (l.getCurrentPlayingAudioRepresentation = rt),
      (l.getCurrentPlayingVideoRepresentation = ot),
      (l.getCurrentPlayingRepresentations = at),
      (l.getVideoRepresentationAtMediaTime = it),
      (l.getCurrentTargetAudioRepresentation = lt),
      (l.getCurrentTargetVideoRepresentation = st),
      (l.getSelectedMediaVariant = ut),
      (l.getSelectedVideoQualityDisplayLabel = ct));
  },
  98,
);
