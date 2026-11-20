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
        function ae(e) {
          var t = re(e.workerType);
          return (
            t.sendToWorker({
              eventToWorker: {
                nextgendashInstanceIndex: a,
                playerInstanceKey: f,
                playerStateFromMain: p(x, e),
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
            babelHelpers.extends({}, e, {
              state: "waiting_linked_to_worker",
              workerConnection: t,
            })
          );
        }
        function ie(t) {
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
            throw ee(
              "throw",
              "Expected either mediaSourceHandle or mediaSource from Worker.",
            );
          (r != null &&
            (x.host.mediaSinkReceivedSourceHandle == null ||
              x.host.mediaSinkReceivedSourceHandle(x, r)),
            Y(e, o));
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
            x.workQueue.enqueueWork(function () {
              m(o, a);
            });
        }
        function ue(e, t) {
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
              case "__enter":
                return ae(Z);
              case "__exception": {
                var ce = ie($.exception);
                return x.config.connectVirtualWorkerOnFallbackWhileWaiting &&
                  ce.state === "waiting_worker_connection"
                  ? ae(ce)
                  : ce;
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
                return x.config.handleUpdateDashManifestInWaitingStates
                  ? ue(Z, $)
                  : (Z.pendingEvents.push($), Z);
              case "update_scroll_position_api":
                return;
              default:
                return ($.type, Z.pendingEvents.push($), Z);
            }
          case "waiting_linked_to_worker":
            switch ($.type) {
              case "__enter": {
                var de = Z.pendingEvents.reduce(
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
                    J(e);
                  }),
                  babelHelpers.extends({}, Z, { pendingEvents: me })
                );
              }
              case "__exception":
                return ie($.exception);
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
                le(
                  Z.mediaElement,
                  $.mediaSourceIndex,
                  $.mediaSource,
                  $.mediaSourceHandle,
                );
                var he = Z.pendingEvents,
                  ve = babelHelpers.objectWithoutPropertiesLoose(Z, s);
                return (
                  he.forEach(function (e) {
                    J(e);
                  }),
                  babelHelpers.extends({}, ve, {
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
                  ? ue(Z, $)
                  : (Z.pendingEvents.push($), Z);
              case "update_scroll_position_api":
                return;
              default:
                return ($.type, Z.pendingEvents.push($), Z);
            }
          case "linked_to_worker":
            switch ($.type) {
              case "__enter": {
                se($.prevState.playerStateFromWorker, Z.playerStateFromWorker);
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
                  var Ee = Z.liveManifestRefreshRetryCount,
                    ke = o(
                      "VideoPlayerNextgendashRetryLogic",
                    ).calculateExponentialDelayWithJitter(
                      Ce,
                      Ee,
                      x.host.random.random,
                    ),
                    De = x.host.timers.setTimeout(function () {
                      J({ type: "_manifest_refresh_timer_fired" });
                    }, ke);
                  return babelHelpers.extends({}, Z, {
                    liveManifestRefreshRetryCount: Ee + 1,
                    liveManifestRefreshTimerHandle: De,
                  });
                }
                return;
              }
              case "_dash_manifest_parsed_transitioned": {
                var Pe = S(x, Z, $.fromState, $.toState, J, l),
                  Ne = Pe != null ? Pe : Z;
                if ($.toState.state === "parsed") {
                  var Me,
                    Fe = Ie(
                      x,
                      Ne,
                      Te({
                        current: Ne.dashManifestParsed.state,
                        transitionedTo: $.toState,
                        useCurrent:
                          x.config.liveStartFromLatestParsedManifestEnabled,
                      }),
                    ),
                    Be =
                      Fe.liveManifestRefreshRetryCount > 0
                        ? babelHelpers.extends({}, Fe, {
                            liveManifestRefreshRetryCount: 0,
                          })
                        : Fe,
                    We = (Me = be(x, Be, $.toState, J)) != null ? Me : Be,
                    qe = X(x, We, J);
                  return x.config.isLivePlayback ||
                    x.config.mediaSinkType === "MSE_TRACK_REUSE"
                    ? C(x, f, qe, $.type)
                    : qe;
                }
                if (
                  x.config.isLivePlayback &&
                  x.config.enableLive &&
                  Ne.lastDashManifestUrl != null &&
                  $.toState.state === "failed_to_parse"
                ) {
                  Ne.liveManifestRefreshTimerHandle != null &&
                    x.host.timers.clearTimeout(
                      Ne.liveManifestRefreshTimerHandle,
                    );
                  var Ue = Ne.liveManifestRefreshRetryCount,
                    Ve = o(
                      "VideoPlayerNextgendashRetryLogic",
                    ).calculateExponentialDelayWithJitter(
                      Ce,
                      Ue,
                      x.host.random.random,
                    ),
                    He = x.host.timers.setTimeout(function () {
                      J({ type: "_manifest_refresh_timer_fired" });
                    }, Ve);
                  return babelHelpers.extends({}, Ne, {
                    liveManifestRefreshRetryCount: Ue + 1,
                    liveManifestRefreshTimerHandle: He,
                  });
                }
                return Pe;
              }
              case "_manifest_refresh_timer_fired": {
                var Ge = Z.lastDashManifestUrl,
                  ze = Z.dashManifestParsed.state;
                if (
                  !x.config.enableLive ||
                  Ge == null ||
                  ze.state !== "parsed" ||
                  ze.data.metadata.manifestType !== "dynamic"
                )
                  return Z.liveManifestRefreshTimerHandle != null
                    ? (x.host.timers.clearTimeout(
                        Z.liveManifestRefreshTimerHandle,
                      ),
                      babelHelpers.extends({}, Z, {
                        liveManifestRefreshTimerHandle: null,
                      }))
                    : void 0;
                var je = x.host.timers.setTimeout(
                    function () {
                      J({ type: "_manifest_refresh_timer_fired" });
                    },
                    Se(x, ze.data),
                  ),
                  Ke = x.host.clock().perfMs,
                  Qe = Re(Z.dashManifestFromUrl);
                if (
                  !Le({
                    fetchInFlight: Qe,
                    fetchStartedPerfMs: Z.dashManifestFromUrlStartedPerfMs,
                    fetchTimeoutMs: ye,
                    nowPerfMs: Ke,
                  })
                )
                  return babelHelpers.extends({}, Z, {
                    liveManifestRefreshTimerHandle: je,
                  });
                Qe &&
                  x.logging.log(x, {
                    format:
                      "live manifest refresh fetch did not finish within %sms, replacing it",
                    params: [String(ye)],
                    type: "generic_warning",
                  });
                var Xe = ue(Z, {
                  dashManifestUrl: Ge,
                  dashManifestXmlString: null,
                  type: "update_dash_manifest",
                });
                return babelHelpers.extends({}, Xe, {
                  liveManifestRefreshTimerHandle: je,
                });
              }
              case "_live_no_progress_watchdog_tick": {
                var Ye, Je, Ze, et, tt, nt, rt, ot, at, it;
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
                var lt = Z.mediaElement.state.mediaElementSnapshot,
                  st = c(x, Z),
                  ut = x.host.clock().perfMs,
                  ct = O(Z.playheadLastSeenTimeSec, st, E),
                  dt = (Ye = lt == null ? void 0 : lt.paused) != null ? Ye : !0,
                  mt = dt
                    ? {
                        forceKickPlayheadLastMovedAtPerfMs: ut,
                        forceKickPlayheadLastSeenTimeSec:
                          st != null ? st : Z.forceKickPlayheadLastSeenTimeSec,
                      }
                    : null,
                  pt = F({
                    currentTimeSec: st,
                    lastMovedAtPerfMs: Z.playheadLastMovedAtPerfMs,
                    lastSeenTimeSec: Z.playheadLastSeenTimeSec,
                    nowPerfMs: ut,
                    paused: dt,
                    progressed: ct,
                  }),
                  _t = pt.lastMovedAtPerfMs,
                  ft = pt.lastSeenTimeSec,
                  gt = lt != null ? B(lt.buffered, st) : null,
                  ht = lt != null ? W(lt.buffered, st) : null,
                  yt = ge({
                    currentTimeSec: st,
                    liveEdgeOffsetSec: Oe,
                    liveEdgeTimeSec: Z.playerStateFromWorker.liveEdgeTimeSec,
                    maxSeekTargetSec: ht,
                    minBehindLiveEdgeSec: fe,
                  }),
                  Ct = q({
                    bufferedAheadSec: gt,
                    ended:
                      (Je = lt == null ? void 0 : lt.ended) != null ? Je : !1,
                    hasError: (lt == null ? void 0 : lt.error) != null,
                    lastMovedAtPerfMs: _t,
                    liveCatchUpSeekTargetSec: yt,
                    nowPerfMs: ut,
                    paused:
                      (Ze = lt == null ? void 0 : lt.paused) != null ? Ze : !0,
                    seeking:
                      (et = lt == null ? void 0 : lt.seeking) != null ? et : !1,
                    starvationBufferAheadSec: L,
                    thresholdSec: x.config.liveNoProgressWatchdogThresholdSec,
                  }),
                  bt = Q(x, J),
                  vt = V(Z.liveConsecutiveWatchdogKicks, ct, Ct),
                  St = j(
                    (tt =
                      (nt = Z.playerStateFromWorker) == null
                        ? void 0
                        : nt.liveEdgeTimeSec) != null
                      ? tt
                      : null,
                    st,
                    x.config.liveFellBehindEdgeReseekDriftSec,
                  ),
                  Rt = H(
                    (rt =
                      (ot = Z.playerStateFromWorker) == null
                        ? void 0
                        : ot.liveEdgeTimeSec) != null
                      ? rt
                      : null,
                    st,
                    k,
                    P,
                  ),
                  Lt =
                    x.config.liveProactiveEdgeReseekToIslandEnabled &&
                    lt != null &&
                    st != null
                      ? G(lt.buffered, st, Rt)
                      : null,
                  Et =
                    x.config.liveProactiveEdgeReseekEnabled &&
                    K({
                      followEdgeActive: x.config.liveFollowEdgeActive,
                      largeDrift: St,
                      paused:
                        (at = lt == null ? void 0 : lt.paused) != null
                          ? at
                          : !0,
                      seeking:
                        (it = lt == null ? void 0 : lt.seeking) != null
                          ? it
                          : !1,
                      shouldKick: Ct,
                    }),
                  kt = z({
                    bufferedAheadSec: gt,
                    islandGateEnabled:
                      x.config.liveProactiveEdgeReseekToIslandEnabled,
                    islandTargetSec: Lt,
                    nowPerfMs: ut,
                    reseekWanted: Et,
                    waitingSincePerfMs: Z.liveEdgeIslandWaitingSincePerfMs,
                  }),
                  It = Et && kt.canReseek;
                if (
                  (Ct &&
                    (St || U(vt, x.config.liveStallReseekToEdgeAfterKicks))) ||
                  It
                ) {
                  var Tt,
                    Dt = !Ct && Lt != null ? Lt : Rt,
                    xt =
                      (Tt = Z.mediaElement) == null || (Tt = Tt.state) == null
                        ? void 0
                        : Tt.mediaElement;
                  if (Dt != null && xt != null)
                    return (
                      x.logging.log(x, {
                        format:
                          "live no-progress watchdog: recovering in-engine by re-seeking the playhead to the live edge (largeDrift=%s proactive=%s)",
                        params: [String(St), String(It)],
                        type: "generic_warning",
                      }),
                      x.host.mediaElementSetPlayhead(x, xt, Dt),
                      babelHelpers.extends({}, Z, {
                        liveConsecutiveWatchdogKicks: 0,
                        liveEdgeIslandWaitingSincePerfMs: null,
                        liveNoProgressWatchdogTimerHandle: bt,
                        playheadLastMovedAtPerfMs: ut,
                        playheadLastSeenTimeSec: st,
                      })
                    );
                }
                var $t = Z.mediaElement.state.mediaElement,
                  Pt = null;
                if (
                  (Ct &&
                    yt != null &&
                    $t != null &&
                    (x.host.mediaElementSetPlayhead(x, $t, yt), (Pt = yt)),
                  Pt != null)
                ) {
                  var Nt;
                  x.logging.log(x, {
                    format:
                      "live no-progress watchdog: playhead frozen (starved or stale-live), seeking toward the live edge. %s %s %s %s",
                    params: [
                      "currentTimeSec=" + (st != null ? st : "unknown"),
                      "liveEdgeTimeSec=" +
                        ((Nt = Z.playerStateFromWorker.liveEdgeTimeSec) != null
                          ? Nt
                          : "unknown"),
                      "bufferedEndSec=" + (ht != null ? ht : "unknown"),
                      "seekTargetSec=" + Pt,
                    ],
                    type: "generic_warning",
                  });
                }
                return babelHelpers.extends({}, Z, mt, {
                  liveConsecutiveWatchdogKicks: vt,
                  liveEdgeIslandWaitingSincePerfMs: kt.waitingSincePerfMs,
                  liveNoProgressWatchdogTimerHandle: bt,
                  playheadLastMovedAtPerfMs: Pt != null ? ut : _t,
                  playheadLastSeenTimeSec: Pt != null ? Pt : ft,
                });
              }
              case "_media_element_transitioned": {
                var Mt,
                  wt,
                  At,
                  Ft,
                  Ot,
                  Bt,
                  Wt,
                  qt = Z.dashManifestParsed.state,
                  Ut = Z.mediaElement.state.mediaElementSnapshot,
                  Vt = we({
                    currentTimeSec:
                      (Mt = Ut == null ? void 0 : Ut.currentTime) != null
                        ? Mt
                        : null,
                    isLivePlayback: x.config.isLivePlayback,
                    pending: x.config.vodStartTimestampPending,
                    readyState:
                      (wt = Ut == null ? void 0 : Ut.readyState) != null
                        ? wt
                        : null,
                  }),
                  Ht =
                    (At = Z.mediaElement) == null || (At = At.state) == null
                      ? void 0
                      : At.mediaElement;
                if (
                  (Vt === "seek" && Ht != null
                    ? x.host.mediaElementSetPlayhead(
                        x,
                        Ht,
                        x.config.startTimestampSec,
                      )
                    : Vt === "finish" &&
                      (x.config.vodStartTimestampPending = !1),
                  Ae({
                    currentTimeSec: c(x, Z),
                    isLivePlayback: x.config.isLivePlayback,
                    isManifestDynamic:
                      qt.state === "parsed" &&
                      qt.data.metadata.manifestType === "dynamic",
                    startTimestampSec: x.config.startTimestampSec,
                  }))
                ) {
                  var Gt,
                    zt =
                      (Gt = Z.mediaElement) == null || (Gt = Gt.state) == null
                        ? void 0
                        : Gt.mediaElement;
                  zt != null &&
                    xe(
                      x,
                      zt,
                      qt.state === "parsed" ? qt.data : null,
                      Z.liveStartTimestampSecIsManifestDerived,
                    );
                }
                var jt = Z.mediaElement.state.mediaElementSnapshot,
                  Kt = c(x, Z),
                  Qt = x.host.clock().perfMs,
                  Xt = _e(x, Z, Kt, Qt),
                  Yt = O(Z.forceKickPlayheadLastSeenTimeSec, Kt, E),
                  Jt = (Ft = jt == null ? void 0 : jt.paused) != null ? Ft : !0,
                  Zt =
                    x.config.isLivePlayback && (Jt || Z.liveWatchdogWasPaused),
                  en = F({
                    currentTimeSec: Kt,
                    lastMovedAtPerfMs: Z.forceKickPlayheadLastMovedAtPerfMs,
                    lastSeenTimeSec: Z.forceKickPlayheadLastSeenTimeSec,
                    nowPerfMs: Qt,
                    paused: Zt,
                    progressed: Yt,
                  }),
                  tn = en.lastMovedAtPerfMs,
                  nn = en.lastSeenTimeSec,
                  rn = F({
                    currentTimeSec: Kt,
                    lastMovedAtPerfMs: Z.playheadLastMovedAtPerfMs,
                    lastSeenTimeSec: Z.playheadLastSeenTimeSec,
                    nowPerfMs: Qt,
                    paused: Zt,
                    progressed: !1,
                  }),
                  on = rn.lastMovedAtPerfMs,
                  an = rn.lastSeenTimeSec,
                  ln = {
                    liveWatchdogWasPaused: Jt,
                    playheadLastMovedAtPerfMs: on,
                    playheadLastSeenTimeSec: an,
                  },
                  sn = A({
                    currentTimeSec: Kt,
                    enabled: x.config.liveForceWorkerKickOnStallEnabled,
                    ended:
                      (Ot = jt == null ? void 0 : jt.ended) != null ? Ot : !1,
                    frozenThresholdMs: w,
                    hasError: (jt == null ? void 0 : jt.error) != null,
                    isLivePlayback: x.config.isLivePlayback,
                    lastForcedWorkerKickPerfMs: Z.lastForcedWorkerKickPerfMs,
                    minIntervalMs: M,
                    nowPerfMs: Qt,
                    paused:
                      (Bt = jt == null ? void 0 : jt.paused) != null ? Bt : !0,
                    playheadLastMovedAtPerfMs: tn,
                    seeking:
                      (Wt = jt == null ? void 0 : jt.seeking) != null ? Wt : !1,
                  });
                return sn
                  ? babelHelpers.extends(
                      {},
                      b(x, f, Z, $.type + ":force_worker_kick_on_stall"),
                      ln,
                      {
                        forceKickPlayheadLastMovedAtPerfMs: tn,
                        forceKickPlayheadLastSeenTimeSec: nn,
                        lastForcedWorkerKickPerfMs: Qt,
                        liveLatencyPlaybackRate: Xt,
                      },
                    )
                  : babelHelpers.extends({}, C(x, f, Z, $.type), ln, {
                      forceKickPlayheadLastMovedAtPerfMs: tn,
                      forceKickPlayheadLastSeenTimeSec: nn,
                      liveLatencyPlaybackRate: Xt,
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
                return ue(Z, $);
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
                le(
                  Z.mediaElement,
                  $.mediaSourceIndex,
                  $.mediaSource,
                  $.mediaSourceHandle,
                );
                var un = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject($.playerStateFromWorker);
                return (
                  se(Z.playerStateFromWorker, un),
                  babelHelpers.extends({}, Z, {
                    playerStateForDebug: h(
                      $.playerStateForDebug,
                      Z.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromWorker: un,
                  })
                );
              }
              case "from_worker_to_main_player_unlinked": {
                if ($.workerType !== Z.workerType || $.playerInstanceKey !== f)
                  return;
                var cn =
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
                  return ie(cn);
                J({ exception: cn, type: "__exception" });
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
                var dn = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject($.playerStateFromWorker);
                return (
                  se(Z.playerStateFromWorker, dn),
                  babelHelpers.extends({}, Z, {
                    playerStateForDebug: h(
                      $.playerStateForDebug,
                      Z.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromWorker: dn,
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
                var mn = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject($.playerStateFromWorker);
                return (
                  se(Z.playerStateFromWorker, mn),
                  babelHelpers.extends({}, Z, {
                    playerStateForDebug: h(
                      $.playerStateForDebug,
                      Z.mediaElement.state.mediaElementSnapshot,
                    ),
                    playerStateFromWorker: mn,
                  })
                );
              }
              case "from_worker_to_main_playback_loop_state": {
                var pn;
                if ($.workerType !== Z.workerType || $.playerInstanceKey !== f)
                  return;
                var _n = o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject($.playerStateFromWorker);
                se(Z.playerStateFromWorker, _n);
                var fn =
                    (pn = Z.mediaElement) == null || (pn = pn.state) == null
                      ? void 0
                      : pn.mediaElement,
                  gn = Z.dashManifestParsed.state;
                return (
                  x.config.liveStartSeekWhenBufferedEnabled &&
                    fn != null &&
                    c(x, Z) === 0 &&
                    Ae({
                      currentTimeSec: 0,
                      isLivePlayback: x.config.isLivePlayback,
                      isManifestDynamic:
                        gn.state === "parsed" &&
                        gn.data.metadata.manifestType === "dynamic",
                      startTimestampSec: x.config.startTimestampSec,
                    }) &&
                    $e(x.host.mediaElementCollectSnapshot(x, fn)) &&
                    xe(
                      x,
                      fn,
                      gn.state === "parsed" ? gn.data : null,
                      Z.liveStartTimestampSecIsManifestDerived,
                    ),
                  babelHelpers.extends({}, Z, { playerStateFromWorker: _n })
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
                var hn = $.prevState;
                g(
                  x,
                  "terminal",
                  hn.liveManifestRefreshTimerHandle,
                  hn.liveNoProgressWatchdogTimerHandle,
                );
                var yn =
                    "VideoPlayerNextgendashMainWith" +
                    hn.workerType +
                    "/Disposed[" +
                    Z.reason +
                    "@" +
                    hn.state +
                    "]",
                  Cn =
                    "Disposed: " +
                    Z.reason +
                    "@" +
                    hn.state +
                    "; playerStateFromWorker=%s",
                  bn = function () {
                    var e;
                    return (e = JSON.stringify(hn.playerStateFromWorker)) !=
                      null
                      ? e
                      : "undefined";
                  },
                  vn =
                    Z.exception != null
                      ? o("nextgendasherr").nextgendasherrFromCause(
                          x,
                          Z.exception,
                          yn,
                          Cn,
                          bn(),
                        )
                      : null;
                (hn.workerConnection != null &&
                  oe(
                    hn.workerConnection,
                    vn != null
                      ? vn
                      : function () {
                          return o("nextgendasherr").nextgendasherr(
                            x,
                            yn,
                            Cn,
                            bn(),
                          );
                        },
                  ),
                  hn.scrollPositionSubscription != null &&
                    hn.scrollPositionSubscription.remove(),
                  vn != null && i(vn));
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
