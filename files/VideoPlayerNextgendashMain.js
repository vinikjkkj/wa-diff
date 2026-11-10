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
          u = n.onPrefetchCacheResult,
          d = n.onSendHaltedToWorkerChanged,
          m = n.onVideoRepresentationChanged,
          f = n.playerInstanceKey,
          R = n.playerSubOrigin,
          I = n.prefetchResultInitial,
          T = n.videoFBID,
          D = n.workerPortFactories,
          x = t.env,
          $ = t.event,
          N = t.makeChildSm,
          Y = t.sendToOther,
          J = t.sendToSelf,
          Z = t.state,
          ee = t.unexpectedEvent;
        if (Z.state !== "__disposed__" && $.type === "debug_config")
          return Z.state === "linked_to_worker"
            ? C(
                x,
                f,
                babelHelpers.extends({}, Z, {
                  shouldSendPlayerStateForDebug:
                    $.shouldSendPlayerStateForDebug,
                }),
                $.type,
              )
            : babelHelpers.extends({}, Z, {
                shouldSendPlayerStateForDebug: $.shouldSendPlayerStateForDebug,
              });
        if (Z.state !== "__disposed__" && $.type === "_log_player_warning")
          return (ne($.warning), Z);
        if (
          Z.state !== "__disposed__" &&
          $.type === "update_player_viewport_dimensions"
        )
          return babelHelpers.extends({}, Z, {
            playerViewportDimensions: $.playerViewportDimensions,
          });
        if (
          Z.state !== "__disposed__" &&
          $.type === "update_expired_video_url_refresh_handler"
        ) {
          Y(Z.dashManifestParsed, {
            expiredVideoUrlRefreshHandlerState:
              $.expiredVideoUrlRefreshHandlerState,
            type: "update_expired_video_url_refresh_handler",
          });
          return;
        }
        if (
          Z.state !== "__disposed__" &&
          $.type === "update_scroll_position_api"
        ) {
          Z.scrollPositionSubscription != null &&
            Z.scrollPositionSubscription.remove();
          var te = null;
          return (
            (te = $.scrollPositionAPI.subscribe(function () {
              J({ type: "_send_state_to_worker" });
            })),
            Z.state === "linked_to_worker"
              ? C(
                  x,
                  f,
                  babelHelpers.extends({}, Z, {
                    scrollPositionAPI: $.scrollPositionAPI,
                    scrollPositionSubscription: te,
                  }),
                  $.type,
                )
              : babelHelpers.extends({}, Z, {
                  scrollPositionAPI: $.scrollPositionAPI,
                  scrollPositionSubscription: te,
                })
          );
        }
        function ne(e) {
          Z.state !== "__disposed__" &&
            x.logging.log(x, {
              error: o("nextgendasherr").nextgendasherrFromCause(
                x,
                e,
                "VideoPlayerNextgendashMainWith" + Z.workerType,
              ),
              type: "generic_error_as_warning",
            });
        }
        function re(e) {
          var t = o(
            "VideoPlayerNextgendashConnectionMainToWorker",
          ).connectToWorker(x, D, e, f, function (e) {
            if (e.type === "from_worker_to_main_prefetch_cache_result") {
              u == null ||
                u({
                  hit: e.hit,
                  prefetchKey: e.prefetchKey,
                  representationID: e.representationID,
                });
              return;
            }
            J(e);
          });
          return (d == null || d(t.sendHaltedToWorker), t);
        }
        function oe(e, t) {
          (d == null || d(null),
            e.sendToWorker({
              eventToWorker: {
                playerInstanceKey: f,
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
                x,
                t,
                "VideoPlayerNextgendashMainWith" +
                  Z.workerType +
                  "/FallbackToVirtualWorker",
                "Fallback to VirtualWorker from " + Z.workerType,
              );
            x.logging.log(x, { error: r, type: "generic_error" });
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
        function ue(e, t, n, r) {
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
            (x.host.mediaSinkReceivedSourceHandle == null ||
              x.host.mediaSinkReceivedSourceHandle(x, r)),
            Y(e, o));
        }
        function ge(e, t) {
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
            x.workQueue.enqueueWork(function () {
              m(o, a);
            });
        }
        function he(e, t) {
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
            l = null,
            s = null;
          if (n != null) {
            ((s = x.host.clock().perfMs), (i += 1));
            var u = {
              qplName: "dash_manifest_from_url",
              requestCreatedClock: x.host.clock(),
              requestID: "dash_manifest_from_url_" + i,
              requestInfo: n,
              responseMode: "text",
            };
            ((l = N(
              "dashManifestFromUrl",
              o("VideoPlayerNextgendashFetchedResource")
                .VideoPlayerNextgendashFetchedResourceSM,
              {
                onNetworkDiagnostics: r("emptyFunction"),
                onTransitioned: x.config.releasePastStateMachineStates
                  ? _(J)
                  : function (e, t, n) {
                      J(
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
              Y(l, { type: "start" }));
          }
          return babelHelpers.extends({}, e, {
            dashManifestFromUrl: l,
            dashManifestFromUrlRequestIndex: i,
            dashManifestFromUrlStartedPerfMs: s,
            lastDashManifestUrl: n != null ? n : e.lastDashManifestUrl,
          });
        }
        switch (Z.state) {
          case "waiting_worker_connection":
            switch ($.type) {
              case "__enter": {
                var ve = re(Z.workerType);
                return (
                  ve.sendToWorker({
                    eventToWorker: {
                      nextgendashInstanceIndex: a,
                      playerInstanceKey: f,
                      playerStateFromMain: p(x, Z),
                      playerSubOrigin: R,
                      prefetchKey:
                        T != null
                          ? o(
                              "VideoPlayerNextgendashWorkerPrefetchCache",
                            ).getVideoPlayerNextgendashPrefetchKeyForSink(
                              T,
                              x.config.mediaSinkType,
                            )
                          : null,
                      prefetchResultInitial: I,
                      type: "from_main_to_worker_link_player",
                      videoFBID: T,
                    },
                    type: "send_to_worker",
                  }),
                  babelHelpers.extends({}, Z, {
                    state: "waiting_linked_to_worker",
                    workerConnection: ve,
                  })
                );
              }
              case "__exception":
                return ae($.exception);
              case "__dispose":
                return;
              case "debug_config":
                return;
              case "update_expired_video_url_refresh_handler":
                return;
              case "update_player_viewport_dimensions":
                return;
              case "update_dash_manifest":
                return x.config.handleUpdateDashManifestInWaitingStates
                  ? he(Z, $)
                  : (Z.pendingEvents.push($), Z);
              case "update_scroll_position_api":
                return;
              default:
                return ($.type, Z.pendingEvents.push($), Z);
            }
          case "waiting_linked_to_worker":
            switch ($.type) {
              case "__enter": {
                var Re = Z.pendingEvents.reduce(
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
                  Le = Re.nextStatePendingEvents,
                  Ee = Re.thisStatePendingEvents;
                return (
                  Ee.forEach(function (e) {
                    J(e);
                  }),
                  babelHelpers.extends({}, Z, { pendingEvents: Le })
                );
              }
              case "__exception":
                return ae($.exception);
              case "__dispose":
                return;
              case "debug_config":
                return;
              case "update_expired_video_url_refresh_handler":
                return;
              case "update_player_viewport_dimensions":
                return;
              case "from_worker_to_main_player_new_media_source": {
                if ($.workerType !== Z.workerType || $.playerInstanceKey !== f)
                  return;
                ue(
                  Z.mediaElement,
                  $.mediaSourceIndex,
                  $.mediaSource,
                  $.mediaSourceHandle,
                );
                var ke = Z.pendingEvents,
                  Ie = babelHelpers.objectWithoutPropertiesLoose(Z, s);
                return (
                  ke.forEach(function (e) {
                    J(e);
                  }),
                  babelHelpers.extends({}, Ie, {
                    playerStateForDebug: h(
                      $.playerStateForDebug,
                      Z.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromMainSent: null,
                    playerStateFromWorker: o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject($.playerStateFromWorker),
                    state: "linked_to_worker",
                  })
                );
              }
              case "from_worker_to_main_player_unlinked": {
                if ($.workerType !== Z.workerType || $.playerInstanceKey !== f)
                  return;
                J({
                  exception:
                    $.exceptionSnapshot != null
                      ? o("nextgendasherr").nextgendasherrFromCause(
                          x,
                          o("nextgendasherr").nextgendasherrFromSnapshot(
                            $.exceptionSnapshot,
                          ),
                          "VideoPlayerNextgendashMainUnexpectedUnlinkedBeforeLinked",
                        )
                      : o("nextgendasherr").nextgendasherr(
                          x,
                          "VideoPlayerNextgendashMainUnexpectedUnlinkedBeforeLinked",
                        ),
                  type: "__exception",
                });
                return;
              }
              case "from_worker_to_main_player_warning": {
                if ($.workerType !== Z.workerType || $.playerInstanceKey !== f)
                  return;
                ne(
                  o("nextgendasherr").nextgendasherrFromSnapshot(
                    $.warningErrorSnapshot,
                  ),
                );
                return;
              }
              case "from_worker_to_main_player_fatal_error": {
                if ($.workerType !== Z.workerType || $.playerInstanceKey !== f)
                  return;
                J({
                  exception: o("nextgendasherr").nextgendasherrFromCause(
                    x,
                    o("nextgendasherr").nextgendasherrFromSnapshot(
                      $.errorSnapshot,
                    ),
                    "VideoPlayerNextgendashMainFatalFromWorkerPlayerBeforeLinked",
                  ),
                  type: "__exception",
                });
                return;
              }
              case "update_dash_manifest":
                return x.config.handleUpdateDashManifestInWaitingStates
                  ? he(Z, $)
                  : (Z.pendingEvents.push($), Z);
              case "update_scroll_position_api":
                return;
              default:
                return ($.type, Z.pendingEvents.push($), Z);
            }
          case "linked_to_worker":
            switch ($.type) {
              case "__enter": {
                ge($.prevState.playerStateFromWorker, Z.playerStateFromWorker);
                return;
              }
              case "__exception":
                return x.config.isLivePlayback &&
                  $.exception.name.includes("DashManifest")
                  ? (x.logging.log(x, {
                      error: $.exception,
                      format:
                        "live manifest-refresh __exception absorbed in linked_to_worker",
                      type: "generic_error_as_warning",
                    }),
                    Z)
                  : void 0;
              case "__dispose": {
                g(
                  x,
                  "explicit",
                  Z.liveManifestRefreshTimerHandle,
                  Z.liveNoProgressWatchdogTimerHandle,
                );
                return;
              }
              case "_dash_manifest_from_url_transitioned": {
                if (
                  (v(x, $.fromState, $.toState, Z.dashManifestParsed, J, Y),
                  x.config.enableLive &&
                    Z.lastDashManifestUrl != null &&
                    $.toState.state === "failed")
                ) {
                  Z.liveManifestRefreshTimerHandle != null &&
                    x.host.timers.clearTimeout(
                      Z.liveManifestRefreshTimerHandle,
                    );
                  var Te = Z.liveManifestRefreshRetryCount,
                    De = o(
                      "VideoPlayerNextgendashRetryLogic",
                    ).calculateExponentialDelayWithJitter(
                      de,
                      Te,
                      x.host.random.random,
                    ),
                    xe = x.host.timers.setTimeout(function () {
                      J({ type: "_manifest_refresh_timer_fired" });
                    }, De);
                  return babelHelpers.extends({}, Z, {
                    liveManifestRefreshRetryCount: Te + 1,
                    liveManifestRefreshTimerHandle: xe,
                  });
                }
                return;
              }
              case "_dash_manifest_parsed_transitioned": {
                var $e = S(x, Z, $.fromState, $.toState, J, l),
                  Pe = $e != null ? $e : Z;
                if ($.toState.state === "parsed") {
                  var Ne,
                    Me = ye(x, Pe, $.toState),
                    we =
                      Me.liveManifestRefreshRetryCount > 0
                        ? babelHelpers.extends({}, Me, {
                            liveManifestRefreshRetryCount: 0,
                          })
                        : Me,
                    Ae = (Ne = me(x, we, $.toState, J)) != null ? Ne : we,
                    Fe = X(x, Ae, J);
                  return x.config.isLivePlayback ? C(x, f, Fe, $.type) : Fe;
                }
                if (
                  x.config.isLivePlayback &&
                  x.config.enableLive &&
                  Pe.lastDashManifestUrl != null &&
                  $.toState.state === "failed_to_parse"
                ) {
                  Pe.liveManifestRefreshTimerHandle != null &&
                    x.host.timers.clearTimeout(
                      Pe.liveManifestRefreshTimerHandle,
                    );
                  var Oe = Pe.liveManifestRefreshRetryCount,
                    Be = o(
                      "VideoPlayerNextgendashRetryLogic",
                    ).calculateExponentialDelayWithJitter(
                      de,
                      Oe,
                      x.host.random.random,
                    ),
                    We = x.host.timers.setTimeout(function () {
                      J({ type: "_manifest_refresh_timer_fired" });
                    }, Be);
                  return babelHelpers.extends({}, Pe, {
                    liveManifestRefreshRetryCount: Oe + 1,
                    liveManifestRefreshTimerHandle: We,
                  });
                }
                return $e;
              }
              case "_manifest_refresh_timer_fired": {
                var qe = Z.lastDashManifestUrl,
                  Ue = Z.dashManifestParsed.state;
                if (
                  !x.config.enableLive ||
                  qe == null ||
                  Ue.state !== "parsed" ||
                  Ue.data.metadata.manifestType !== "dynamic"
                )
                  return Z.liveManifestRefreshTimerHandle != null
                    ? (x.host.timers.clearTimeout(
                        Z.liveManifestRefreshTimerHandle,
                      ),
                      babelHelpers.extends({}, Z, {
                        liveManifestRefreshTimerHandle: null,
                      }))
                    : void 0;
                var Ve = x.host.timers.setTimeout(
                    function () {
                      J({ type: "_manifest_refresh_timer_fired" });
                    },
                    pe(x, Ue.data),
                  ),
                  He = x.host.clock().perfMs,
                  Ge = _e(Z.dashManifestFromUrl);
                if (
                  !fe({
                    fetchInFlight: Ge,
                    fetchStartedPerfMs: Z.dashManifestFromUrlStartedPerfMs,
                    fetchTimeoutMs: ce,
                    nowPerfMs: He,
                  })
                )
                  return babelHelpers.extends({}, Z, {
                    liveManifestRefreshTimerHandle: Ve,
                  });
                Ge &&
                  x.logging.log(x, {
                    format:
                      "live manifest refresh fetch did not finish within %sms, replacing it",
                    params: [String(ce)],
                    type: "generic_warning",
                  });
                var ze = he(Z, {
                  dashManifestUrl: qe,
                  dashManifestXmlString: null,
                  type: "update_dash_manifest",
                });
                return babelHelpers.extends({}, ze, {
                  liveManifestRefreshTimerHandle: Ve,
                });
              }
              case "_live_no_progress_watchdog_tick": {
                var je, Ke, Qe, Xe, Ye, Je, Ze, et, tt, nt;
                if (
                  !x.config.isLivePlayback ||
                  !x.config.enableLive ||
                  x.config.liveNoProgressWatchdogThresholdSec <= 0
                )
                  return Z.liveNoProgressWatchdogTimerHandle != null
                    ? (x.host.timers.clearTimeout(
                        Z.liveNoProgressWatchdogTimerHandle,
                      ),
                      babelHelpers.extends({}, Z, {
                        liveNoProgressWatchdogTimerHandle: null,
                      }))
                    : void 0;
                var rt = Z.mediaElement.state.mediaElementSnapshot,
                  ot = c(x, Z),
                  at = x.host.clock().perfMs,
                  it = O(Z.playheadLastSeenTimeSec, ot, E),
                  lt = (je = rt == null ? void 0 : rt.paused) != null ? je : !0,
                  st = lt
                    ? {
                        forceKickPlayheadLastMovedAtPerfMs: at,
                        forceKickPlayheadLastSeenTimeSec:
                          ot != null ? ot : Z.forceKickPlayheadLastSeenTimeSec,
                      }
                    : null,
                  ut = F({
                    currentTimeSec: ot,
                    lastMovedAtPerfMs: Z.playheadLastMovedAtPerfMs,
                    lastSeenTimeSec: Z.playheadLastSeenTimeSec,
                    nowPerfMs: at,
                    paused: lt,
                    progressed: it,
                  }),
                  ct = ut.lastMovedAtPerfMs,
                  dt = ut.lastSeenTimeSec,
                  mt = rt != null ? B(rt.buffered, ot) : null,
                  pt = rt != null ? W(rt.buffered, ot) : null,
                  _t = se({
                    currentTimeSec: ot,
                    liveEdgeOffsetSec: Se,
                    liveEdgeTimeSec: Z.playerStateFromWorker.liveEdgeTimeSec,
                    maxSeekTargetSec: pt,
                    minBehindLiveEdgeSec: le,
                  }),
                  ft = q({
                    bufferedAheadSec: mt,
                    ended:
                      (Ke = rt == null ? void 0 : rt.ended) != null ? Ke : !1,
                    hasError: (rt == null ? void 0 : rt.error) != null,
                    lastMovedAtPerfMs: ct,
                    liveCatchUpSeekTargetSec: _t,
                    nowPerfMs: at,
                    paused:
                      (Qe = rt == null ? void 0 : rt.paused) != null ? Qe : !0,
                    seeking:
                      (Xe = rt == null ? void 0 : rt.seeking) != null ? Xe : !1,
                    starvationBufferAheadSec: L,
                    thresholdSec: x.config.liveNoProgressWatchdogThresholdSec,
                  }),
                  gt = Q(x, J),
                  ht = V(Z.liveConsecutiveWatchdogKicks, it, ft),
                  yt = j(
                    (Ye =
                      (Je = Z.playerStateFromWorker) == null
                        ? void 0
                        : Je.liveEdgeTimeSec) != null
                      ? Ye
                      : null,
                    ot,
                    x.config.liveFellBehindEdgeReseekDriftSec,
                  ),
                  Ct = H(
                    (Ze =
                      (et = Z.playerStateFromWorker) == null
                        ? void 0
                        : et.liveEdgeTimeSec) != null
                      ? Ze
                      : null,
                    ot,
                    k,
                    P,
                  ),
                  bt =
                    x.config.liveProactiveEdgeReseekToIslandEnabled &&
                    rt != null &&
                    ot != null
                      ? G(rt.buffered, ot, Ct)
                      : null,
                  vt =
                    x.config.liveProactiveEdgeReseekEnabled &&
                    K({
                      followEdgeActive: x.config.liveFollowEdgeActive,
                      largeDrift: yt,
                      paused:
                        (tt = rt == null ? void 0 : rt.paused) != null
                          ? tt
                          : !0,
                      seeking:
                        (nt = rt == null ? void 0 : rt.seeking) != null
                          ? nt
                          : !1,
                      shouldKick: ft,
                    }),
                  St = z({
                    bufferedAheadSec: mt,
                    islandGateEnabled:
                      x.config.liveProactiveEdgeReseekToIslandEnabled,
                    islandTargetSec: bt,
                    nowPerfMs: at,
                    reseekWanted: vt,
                    waitingSincePerfMs: Z.liveEdgeIslandWaitingSincePerfMs,
                  }),
                  Rt = vt && St.canReseek;
                if (
                  (ft &&
                    (yt || U(ht, x.config.liveStallReseekToEdgeAfterKicks))) ||
                  Rt
                ) {
                  var Lt,
                    Et = !ft && bt != null ? bt : Ct,
                    kt =
                      (Lt = Z.mediaElement) == null || (Lt = Lt.state) == null
                        ? void 0
                        : Lt.mediaElement;
                  if (Et != null && kt != null)
                    return (
                      x.logging.log(x, {
                        format:
                          "live no-progress watchdog: recovering in-engine by re-seeking the playhead to the live edge (largeDrift=%s proactive=%s)",
                        params: [String(yt), String(Rt)],
                        type: "generic_warning",
                      }),
                      x.host.mediaElementSetPlayhead(x, kt, Et),
                      babelHelpers.extends({}, Z, {
                        liveConsecutiveWatchdogKicks: 0,
                        liveEdgeIslandWaitingSincePerfMs: null,
                        liveNoProgressWatchdogTimerHandle: gt,
                        playheadLastMovedAtPerfMs: at,
                        playheadLastSeenTimeSec: ot,
                      })
                    );
                }
                var It = Z.mediaElement.state.mediaElement,
                  Tt = null;
                if (
                  (ft &&
                    _t != null &&
                    It != null &&
                    (x.host.mediaElementSetPlayhead(x, It, _t), (Tt = _t)),
                  Tt != null)
                ) {
                  var Dt;
                  x.logging.log(x, {
                    format:
                      "live no-progress watchdog: playhead frozen (starved or stale-live), seeking toward the live edge. %s %s %s %s",
                    params: [
                      "currentTimeSec=" + (ot != null ? ot : "unknown"),
                      "liveEdgeTimeSec=" +
                        ((Dt = Z.playerStateFromWorker.liveEdgeTimeSec) != null
                          ? Dt
                          : "unknown"),
                      "bufferedEndSec=" + (pt != null ? pt : "unknown"),
                      "seekTargetSec=" + Tt,
                    ],
                    type: "generic_warning",
                  });
                }
                return babelHelpers.extends({}, Z, st, {
                  liveConsecutiveWatchdogKicks: ht,
                  liveEdgeIslandWaitingSincePerfMs: St.waitingSincePerfMs,
                  liveNoProgressWatchdogTimerHandle: gt,
                  playheadLastMovedAtPerfMs: Tt != null ? at : ct,
                  playheadLastSeenTimeSec: Tt != null ? Tt : dt,
                });
              }
              case "_media_element_transitioned": {
                var xt,
                  $t,
                  Pt,
                  Nt,
                  Mt = Z.dashManifestParsed.state;
                if (
                  be({
                    currentTimeSec: c(x, Z),
                    isLivePlayback: x.config.isLivePlayback,
                    isManifestDynamic:
                      Mt.state === "parsed" &&
                      Mt.data.metadata.manifestType === "dynamic",
                    startTimestampSec: x.config.startTimestampSec,
                  })
                ) {
                  var wt,
                    At =
                      (wt = Z.mediaElement) == null || (wt = wt.state) == null
                        ? void 0
                        : wt.mediaElement;
                  if (At != null) {
                    if (
                      Z.liveStartTimestampSecIsManifestDerived &&
                      Mt.state === "parsed"
                    ) {
                      var Ft;
                      x.config.startTimestampSec =
                        (Ft = Ce(Mt.data)) != null
                          ? Ft
                          : x.config.startTimestampSec;
                    }
                    x.host.mediaElementSetPlayhead(
                      x,
                      At,
                      x.config.startTimestampSec,
                    );
                  }
                }
                var Ot = Z.mediaElement.state.mediaElementSnapshot,
                  Bt = c(x, Z),
                  Wt = x.host.clock().perfMs,
                  qt = ie(x, Z, Bt, Wt),
                  Ut = O(Z.forceKickPlayheadLastSeenTimeSec, Bt, E),
                  Vt = (xt = Ot == null ? void 0 : Ot.paused) != null ? xt : !0,
                  Ht =
                    x.config.isLivePlayback && (Vt || Z.liveWatchdogWasPaused),
                  Gt = F({
                    currentTimeSec: Bt,
                    lastMovedAtPerfMs: Z.forceKickPlayheadLastMovedAtPerfMs,
                    lastSeenTimeSec: Z.forceKickPlayheadLastSeenTimeSec,
                    nowPerfMs: Wt,
                    paused: Ht,
                    progressed: Ut,
                  }),
                  zt = Gt.lastMovedAtPerfMs,
                  jt = Gt.lastSeenTimeSec,
                  Kt = F({
                    currentTimeSec: Bt,
                    lastMovedAtPerfMs: Z.playheadLastMovedAtPerfMs,
                    lastSeenTimeSec: Z.playheadLastSeenTimeSec,
                    nowPerfMs: Wt,
                    paused: Ht,
                    progressed: !1,
                  }),
                  Qt = Kt.lastMovedAtPerfMs,
                  Xt = Kt.lastSeenTimeSec,
                  Yt = {
                    liveWatchdogWasPaused: Vt,
                    playheadLastMovedAtPerfMs: Qt,
                    playheadLastSeenTimeSec: Xt,
                  },
                  Jt = A({
                    currentTimeSec: Bt,
                    enabled: x.config.liveForceWorkerKickOnStallEnabled,
                    ended:
                      ($t = Ot == null ? void 0 : Ot.ended) != null ? $t : !1,
                    frozenThresholdMs: w,
                    hasError: (Ot == null ? void 0 : Ot.error) != null,
                    isLivePlayback: x.config.isLivePlayback,
                    lastForcedWorkerKickPerfMs: Z.lastForcedWorkerKickPerfMs,
                    minIntervalMs: M,
                    nowPerfMs: Wt,
                    paused:
                      (Pt = Ot == null ? void 0 : Ot.paused) != null ? Pt : !0,
                    playheadLastMovedAtPerfMs: zt,
                    seeking:
                      (Nt = Ot == null ? void 0 : Ot.seeking) != null ? Nt : !1,
                  });
                return Jt
                  ? babelHelpers.extends(
                      {},
                      b(x, f, Z, $.type + ":force_worker_kick_on_stall"),
                      Yt,
                      {
                        forceKickPlayheadLastMovedAtPerfMs: zt,
                        forceKickPlayheadLastSeenTimeSec: jt,
                        lastForcedWorkerKickPerfMs: Wt,
                        liveLatencyPlaybackRate: qt,
                      },
                    )
                  : babelHelpers.extends({}, C(x, f, Z, $.type), Yt, {
                      forceKickPlayheadLastMovedAtPerfMs: zt,
                      forceKickPlayheadLastSeenTimeSec: jt,
                      liveLatencyPlaybackRate: qt,
                    });
              }
              case "_request_recovery_from_source_reset": {
                Z.workerConnection.sendToWorker({
                  eventToWorker: {
                    mediaSourceIndex: $.mediaSourceIndex,
                    playerInstanceKey: f,
                    type: "from_main_to_worker_request_recovery_from_source_reset",
                  },
                  type: "send_to_worker",
                });
                return;
              }
              case "_notify_deliberate_detach_for_unmount": {
                Z.workerConnection.sendToWorker({
                  eventToWorker: {
                    mediaSourceIndex: $.mediaSourceIndex,
                    playerInstanceKey: f,
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
                return he(Z, $);
              case "_send_state_to_worker":
                return C(x, f, Z, $.type);
              case "update_media_element":
                return (
                  Y(Z.mediaElement, {
                    mediaElement: $.mediaElement,
                    type: "update_media_element",
                  }),
                  x.config.eagerResyncOnMediaElementAttach &&
                  $.mediaElement != null
                    ? y(x, f, Z, $.type)
                    : void 0
                );
              case "update_config_from_env":
                return b(x, f, Z, $.type);
              case "select_video_quality":
                return C(
                  x,
                  f,
                  babelHelpers.extends({}, Z, {
                    selectedVideoQualityDisplayLabel:
                      $.videoQualityDisplayLabel,
                  }),
                  $.type,
                );
              case "select_media_variant":
                return C(
                  x,
                  f,
                  babelHelpers.extends({}, Z, {
                    selectedMediaVariant: $.mediaVariant,
                  }),
                  $.type,
                );
              case "debug_log_stall_details": {
                Z.workerConnection.sendToWorker({
                  eventToWorker: {
                    mediaElementSnapshotFromMain:
                      Z.mediaElement.state.mediaElementSnapshot,
                    playerInstanceKey: f,
                    stallStartClock: $.stallStartClock,
                    type: "from_main_to_worker_debug_log_stall_details",
                  },
                  type: "send_to_worker",
                });
                return;
              }
              case "from_worker_to_main_player_new_media_source": {
                if ($.workerType !== Z.workerType || $.playerInstanceKey !== f)
                  return;
                ue(
                  Z.mediaElement,
                  $.mediaSourceIndex,
                  $.mediaSource,
                  $.mediaSourceHandle,
                );
                var Zt = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject($.playerStateFromWorker);
                return (
                  ge(Z.playerStateFromWorker, Zt),
                  babelHelpers.extends({}, Z, {
                    playerStateForDebug: h(
                      $.playerStateForDebug,
                      Z.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromWorker: Zt,
                  })
                );
              }
              case "from_worker_to_main_player_unlinked": {
                if ($.workerType !== Z.workerType || $.playerInstanceKey !== f)
                  return;
                var en =
                  $.exceptionSnapshot != null
                    ? o("nextgendasherr").nextgendasherrFromCause(
                        x,
                        o("nextgendasherr").nextgendasherrFromSnapshot(
                          $.exceptionSnapshot,
                        ),
                        "VideoPlayerNextgendashMainUnexpectedUnlinkedFromWorker",
                        "Reason: " + $.reason,
                      )
                    : o("nextgendasherr").nextgendasherr(
                        x,
                        "VideoPlayerNextgendashMainUnexpectedUnlinkedFromWorker",
                        "Reason: " + $.reason,
                      );
                if (
                  (Z.workerType === "RealWorker" ||
                    Z.workerType === "RealWorkerV2") &&
                  !x.config.disableFallbackFromRealWorkerAfterLinked
                )
                  return ae(en);
                J({ exception: en, type: "__exception" });
                return;
              }
              case "from_worker_to_main_player_warning": {
                if ($.workerType !== Z.workerType || $.playerInstanceKey !== f)
                  return;
                ne(
                  o("nextgendasherr").nextgendasherrFromSnapshot(
                    $.warningErrorSnapshot,
                  ),
                );
                var tn = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject($.playerStateFromWorker);
                return (
                  ge(Z.playerStateFromWorker, tn),
                  babelHelpers.extends({}, Z, {
                    playerStateForDebug: h(
                      $.playerStateForDebug,
                      Z.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromWorker: tn,
                  })
                );
              }
              case "from_worker_to_main_player_fatal_error": {
                if ($.workerType !== Z.workerType || $.playerInstanceKey !== f)
                  return;
                J({
                  exception: o("nextgendasherr").nextgendasherrFromCause(
                    x,
                    o("nextgendasherr").nextgendasherrFromSnapshot(
                      $.errorSnapshot,
                    ),
                    "VideoPlayerNextgendashMainFatalFromWorkerPlayer",
                  ),
                  type: "__exception",
                });
                var nn = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject($.playerStateFromWorker);
                return (
                  ge(Z.playerStateFromWorker, nn),
                  babelHelpers.extends({}, Z, {
                    playerStateForDebug: h(
                      $.playerStateForDebug,
                      Z.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromWorker: nn,
                  })
                );
              }
              case "from_worker_to_main_playback_loop_state": {
                if ($.workerType !== Z.workerType || $.playerInstanceKey !== f)
                  return;
                var rn = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject($.playerStateFromWorker);
                return (
                  ge(Z.playerStateFromWorker, rn),
                  babelHelpers.extends({}, Z, { playerStateFromWorker: rn })
                );
              }
              case "from_worker_to_main_player_state_for_debug":
                return $.workerType !== Z.workerType ||
                  $.playerInstanceKey !== f
                  ? void 0
                  : babelHelpers.extends({}, Z, {
                      playerStateForDebug: h(
                        $.playerStateForDebug,
                        Z.mediaElement.state.mediaElementSnapshot,
                      ),
                    });
              case "from_worker_to_main_refresh_urls": {
                Z.dashManifestParsed.sendEvent({
                  type: "handle_worker_url_refresh_request",
                  urls: $.urls,
                });
                return;
              }
              case "update_scroll_position_api":
                return;
              default:
                $.type;
                return;
            }
          case "__disposed__":
            switch ($.type) {
              case "__enter": {
                var on = $.prevState;
                g(
                  x,
                  "terminal",
                  on.liveManifestRefreshTimerHandle,
                  on.liveNoProgressWatchdogTimerHandle,
                );
                var an =
                    "VideoPlayerNextgendashMainWith" +
                    on.workerType +
                    "/Disposed[" +
                    Z.reason +
                    "@" +
                    on.state +
                    "]",
                  ln =
                    "Disposed: " +
                    Z.reason +
                    "@" +
                    on.state +
                    "; playerStateFromWorker=%s",
                  sn = function () {
                    var e;
                    return (e = JSON.stringify(on.playerStateFromWorker)) !=
                      null
                      ? e
                      : "undefined";
                  },
                  un =
                    Z.exception != null
                      ? o("nextgendasherr").nextgendasherrFromCause(
                          x,
                          Z.exception,
                          an,
                          ln,
                          sn(),
                        )
                      : null;
                (on.workerConnection != null &&
                  oe(
                    on.workerConnection,
                    un != null
                      ? un
                      : function () {
                          return o("nextgendasherr").nextgendasherr(
                            x,
                            an,
                            ln,
                            sn(),
                          );
                        },
                  ),
                  on.scrollPositionSubscription != null &&
                    on.scrollPositionSubscription.remove(),
                  un != null && i(un));
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
      oe = 1e3;
    function ae(e) {
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
    function ie(e, t, n, r) {
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
        g = ae({
          active: e.config.liveFollowEdgeActive && f && !l.ended && r >= u,
          appliedRate: o.appliedRate,
          bufferedAheadSec: B(p, n),
          changedAtPerfMs: o.changedAtPerfMs,
          currentRate: l.playbackRate,
          inNewestBufferedRange:
            n != null && _ != null && _[0] <= n && n <= _[1],
          isManifestDynamic: f && !l.ended,
          isPausedOrSeeking: l.paused || l.seeking,
          latencySec: m != null && n != null ? m - n : null,
          nowPerfMs: r,
          preferredLatencySec: c ? te : ee,
        });
      return g == null
        ? u === o.holdUntilPerfMs && c === o.hadInPlayStall
          ? o
          : babelHelpers.extends({}, o, {
              hadInPlayStall: c,
              holdUntilPerfMs: u,
            })
        : (e.host.mediaElementSetPlaybackRate(e, i, g),
          e.logging.log(e, {
            format: "live latency control: playbackRate %s -> %s",
            params: [String(l.playbackRate), String(g)],
            type: "generic_info",
          }),
          {
            appliedRate: g,
            changedAtPerfMs: r,
            hadInPlayStall: c,
            holdUntilPerfMs: u,
          });
    }
    var le = 15;
    function se(e) {
      var t = e.currentTimeSec,
        n = e.liveEdgeOffsetSec,
        r = e.liveEdgeTimeSec,
        o = e.maxSeekTargetSec,
        a = e.minBehindLiveEdgeSec;
      if (t == null || r == null || o == null || r - t < a) return null;
      var i = Math.min(Math.max(0, r - n), o);
      return i > t ? i : null;
    }
    var ue = 2e3,
      ce = 1e4,
      de = Object.freeze({
        backoffMultiplier: 2,
        initialDelayMs: 200,
        jitterPercent: 0.2,
        maxDelayMs: 1e4,
        retryBehavior: "exponential",
        retryCount: 1 / 0,
      });
    function me(e, t, n, r) {
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
        pe(e, n.data),
      );
      return babelHelpers.extends({}, t, { liveManifestRefreshTimerHandle: o });
    }
    function pe(e, t) {
      var n;
      return e.config.liveManifestRefreshIntervalMs > 0
        ? e.config.liveManifestRefreshIntervalMs
        : (n = t.metadata.minimumUpdatePeriodMs) != null
          ? n
          : ue;
    }
    function _e(e) {
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
    function fe(e) {
      var t = e.fetchInFlight,
        n = e.fetchStartedPerfMs,
        r = e.fetchTimeoutMs,
        o = e.nowPerfMs;
      return t ? n == null || o - n >= r : !0;
    }
    function ge(e) {
      var t = e.enableLive,
        n = e.isManifestParsed,
        r = e.manifestType;
      return t && n && r === "dynamic";
    }
    function he(e) {
      ((e.isLivePlayback = !0),
        e.liveReleasePastStateMachineStates &&
          (e.releasePastStateMachineStates = !0));
    }
    function ye(e, t, n) {
      var r;
      if (
        !ge({
          enableLive: e.config.enableLive,
          isManifestParsed: n.state === "parsed",
          manifestType:
            n.state === "parsed" ? n.data.metadata.manifestType : null,
        }) ||
        n.state !== "parsed"
      )
        return t;
      he(e.config);
      var o = t.liveStartTimestampSecIsManifestDerived;
      if (
        ve({
          isManifestDerived: o,
          playheadSec: (r = c(e, t)) != null ? r : 0,
          startTimestampSec: e.config.startTimestampSec,
        })
      ) {
        var a = Ce(n.data);
        a != null && ((e.config.startTimestampSec = a), (o = !0));
      }
      return o === t.liveStartTimestampSecIsManifestDerived
        ? t
        : babelHelpers.extends({}, t, {
            liveStartTimestampSecIsManifestDerived: o,
          });
    }
    function Ce(e) {
      var t = e.manifestRepresentations,
        n = e.metadata;
      return ke({
        audioWindow: Ee(t.audio),
        minBufferTimeSec: n.minBufferTimeSec,
        suggestedPresentationDelaySec: n.suggestedPresentationDelaySec,
        videoWindow: Ee(t.video),
      });
    }
    function be(e) {
      var t = e.currentTimeSec,
        n = e.isLivePlayback,
        r = e.isManifestDynamic,
        o = e.startTimestampSec;
      return n && r && o > 0 && t === 0;
    }
    function ve(e) {
      var t = e.isManifestDerived,
        n = e.playheadSec,
        r = e.startTimestampSec;
      return r === 0 ? !0 : t && n === 0;
    }
    var Se = 5,
      Re = 5,
      Le = 3;
    function Ee(e) {
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
    function ke(e) {
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
            ? (u = Math.max(s * Le, n != null ? n : 0))
            : (u = Re),
        (u = Math.max(u, Re)),
        Math.min(Math.max(i - u, l), i)
      );
    }
    function Ie(e) {
      var t = e.state;
      if (t.state === "__null__" || t.state === "__disposed__") return null;
      var n = t.dashManifestParsed.state;
      return n.state !== "parsed" ? null : n;
    }
    function Te(e) {
      var t = Ie(e);
      return t == null
        ? null
        : t.data.metadata.manifestIsMixedCodecVideo ||
            t.data.metadata.manifestIsMixedCodecAudio;
    }
    function De(e) {
      var t, n;
      return (t =
        (n = Ie(e)) == null ? void 0 : n.data.metadata.manifestIdentifier) !=
        null
        ? t
        : null;
    }
    function xe(e) {
      var t = Ie(e);
      return t == null
        ? null
        : t.data.manifestRepresentations.video.some(function (e) {
            return (
              e.segmentsInfo.type === "SegmentTemplate" &&
              e.segmentsInfo.segmentTimelinePredictive != null
            );
          });
    }
    function $e(e) {
      var t = e.state;
      return t.state === "linked_to_worker" ? t.playerStateFromWorker : null;
    }
    function Pe(e) {
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
    function Ne(e) {
      var t,
        n = Ie(e);
      return (t = n == null ? void 0 : n.data.manifestRepresentations.video) !=
        null
        ? t
        : [];
    }
    function Me(e) {
      var t,
        n = Ie(e);
      return (t = n == null ? void 0 : n.data.manifestRepresentations.audio) !=
        null
        ? t
        : [];
    }
    function we(e, t) {
      var n,
        r,
        o = $e(e),
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
    function Ae(e) {
      return we(e, Ne(e));
    }
    function Fe(e, t) {
      var n,
        r,
        o = $e(e),
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
    function Oe(e) {
      return Fe(e, Me(e));
    }
    function Be(e, t) {
      var n,
        r,
        o = $e(e),
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
    function We(e, t, n) {
      return o(
        "VideoPlayerNextgendashMediaUtils",
      ).findTimeRangeAnnotationAtMediaTime(e, t, n);
    }
    function qe(e, t) {
      var n,
        r = $e(e),
        o = t === void 0 ? Pe(e) : t,
        a = We(
          o,
          r == null || (n = r.bufferedRangesWithRepIds) == null
            ? void 0
            : n.audio,
          r == null ? void 0 : r.targetRepresentationId.audio,
        ),
        i = Me(e).find(function (e) {
          return e.representationId === a;
        });
      return i;
    }
    function Ue(e, t) {
      var n,
        r = $e(e),
        o = t === void 0 ? Pe(e) : t,
        a = We(
          o,
          r == null || (n = r.bufferedRangesWithRepIds) == null
            ? void 0
            : n.video,
          r == null ? void 0 : r.targetRepresentationId.video,
        ),
        i = Ne(e).find(function (e) {
          return e.representationId === a;
        });
      return i;
    }
    function Ve(e) {
      var t = Pe(e);
      return { audio: qe(e, t), video: Ue(e, t) };
    }
    function He(e, t) {
      var n,
        r = $e(e),
        o = We(
          t,
          r == null || (n = r.bufferedRangesWithRepIds) == null
            ? void 0
            : n.video,
          null,
        );
      return Ne(e).find(function (e) {
        return e.representationId === o;
      });
    }
    function Ge(e) {
      var t = $e(e),
        n = t == null ? void 0 : t.targetRepresentationId.audio,
        r = Me(e).find(function (e) {
          return e.representationId === n;
        });
      return r;
    }
    function ze(e) {
      var t = $e(e),
        n = t == null ? void 0 : t.targetRepresentationId.video,
        r = Ne(e).find(function (e) {
          return e.representationId === n;
        });
      return r;
    }
    function je(e) {
      var t = e.state,
        n =
          t.state === "__null__" || t.state === "__disposed__"
            ? null
            : t.selectedMediaVariant;
      return n;
    }
    function Ke(e) {
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
      (l.internal_getLiveLatencyPlaybackRate = ae),
      (l.internal_getLiveCatchUpSeekTargetSec = se),
      (l.internal_shouldStartLiveManifestRefreshFetch = fe),
      (l.internal_shouldMarkLivePlayback = ge),
      (l.internal_markConfigLivePlayback = he),
      (l.internal_shouldSeekToLiveStartPosition = be),
      (l.internal_shouldUpdateLiveStartTimestampSec = ve),
      (l.internal_getLiveStreamWindow = Ee),
      (l.internal_computeLiveStartPositionSec = ke),
      (l.getIsMixedCodecManifest = Te),
      (l.getManifestIdentifier = De),
      (l.getIsPredictiveDash = xe),
      (l.getAvailableVideoRepresentations = Ae),
      (l.getAvailableAudioRepresentations = Oe),
      (l.filterVideoRepresentationsByTargetVariant = Be),
      (l.internal_findCurrentPlayingRepresentationID = We),
      (l.getCurrentPlayingAudioRepresentation = qe),
      (l.getCurrentPlayingVideoRepresentation = Ue),
      (l.getCurrentPlayingRepresentations = Ve),
      (l.getVideoRepresentationAtMediaTime = He),
      (l.getCurrentTargetAudioRepresentation = Ge),
      (l.getCurrentTargetVideoRepresentation = ze),
      (l.getSelectedMediaVariant = je),
      (l.getSelectedVideoQualityDisplayLabel = Ke));
  },
  98,
);
