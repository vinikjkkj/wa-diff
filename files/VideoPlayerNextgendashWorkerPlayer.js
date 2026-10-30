__d(
  "VideoPlayerNextgendashWorkerPlayer",
  [
    "VideoPlayerNextgendashManifestParser",
    "VideoPlayerNextgendashPlaybackLoop",
    "VideoPlayerNextgendashStateMachine",
    "VideoPlayerNextgendashWorkerPrefetchCache",
    "deepEquals",
    "nextgendasherr",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends({}, e, t);
    }
    var s = o("VideoPlayerNextgendashStateMachine").defineStateMachine(
        {
          augmentEnv: function (t, n) {
            return babelHelpers.extends({}, t, {
              config: babelHelpers.extends(
                {},
                n.playerStateFromMain.configFromMain,
                { isInWorkerType: t.config.isInWorkerType },
              ),
              loggingState: babelHelpers.extends({}, t.loggingState, {
                logstampPrefix:
                  t.loggingState.logstampPrefix +
                  "::#" +
                  n.nextgendashInstanceIndex +
                  "::" +
                  n.playerInstanceKey,
                logstampTint: (n.nextgendashInstanceIndex % 20) / 20,
                metadata: babelHelpers.extends({}, t.loggingState.metadata, {
                  nextgendashInstanceIndex: n.nextgendashInstanceIndex,
                  playerInstanceKey: n.playerInstanceKey,
                  playerSubOrigin: n.playerSubOrigin,
                  prefetchKey: n.prefetchKey,
                  videoFBID: n.videoFBID,
                }),
              }),
            });
          },
        },
        function (e) {
          var t = e.args,
            n = t.fetchPoolAPI,
            r = t.linkedAt,
            a = t.playerInstanceKey,
            i = t.playerStateFromMain,
            l = t.prefetchResult,
            s = t.sendToMain,
            u = t.videoFBID,
            c = t.workerType,
            d = e.env,
            m = e.makeChildSm,
            p = e.sendToSelf;
          return {
            linkedAt: r,
            playbackLoop: m(
              "playbackLoop",
              o("VideoPlayerNextgendashPlaybackLoop")
                .VideoPlayerNextgendashPlaybackLoopSM,
              {
                fetchPoolAPI: n,
                onTransitioned: function (t, n, r) {
                  p({ type: "_playback_loop_transitioned" }, r);
                },
                playerStateFromMain: i,
                prefetchResult: l,
                requestUrlRefresh: function (t) {
                  s(
                    {
                      playerInstanceKey: a,
                      type: "from_worker_to_main_refresh_urls",
                      urls: t,
                      workerType: c,
                    },
                    [],
                  );
                },
                sendMediaSourceToMain: function (t, n) {
                  p({
                    mediaSource: t,
                    mediaSourceIndex: n,
                    type: "_send_media_source_to_main",
                  });
                },
                sendPlayerWarningToMain: function (t) {
                  (d.logging.log(d, {
                    error: t,
                    format: "sendPlayerWarningToMain",
                    type: "generic_error_as_warning",
                  }),
                    p({
                      type: "_send_player_warning_to_main",
                      warningError: t,
                    }));
                },
              },
            ),
            playerInstanceKey: a,
            playerStateFromMain: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(i),
            playerStateFromWorkerSent: null,
            shouldSendPlayerStateForDebug: !1,
            state: "initial",
            videoFBID: u,
          };
        },
        function (t) {
          var n = t.args,
            a = n.playerInstanceKey,
            i = n.sendToMain,
            l = n.workerType,
            s = t.env,
            d = t.event,
            m = t.sendToOther,
            p = t.sendToSelf,
            f = t.state,
            g =
              f.state !== "__disposed__" &&
              f.playbackLoop.state.state === "playing"
                ? f.playbackLoop.state
                : null;
          function h() {
            i(
              {
                playerInstanceKey: a,
                playerStateForDebug: _(s, g),
                type: "from_worker_to_main_player_state_for_debug",
                workerType: l,
              },
              [],
              !0,
            );
          }
          if (d.type === "update_media_element_state_from_main") {
            if (f.state !== "__disposed__") {
              var y = o(
                "VideoPlayerNextgendashStateMachine",
              ).skipAutoDisposeInsideThisObject(
                e(f.playerStateFromMain, d.mediaElementStateFromMain),
              );
              return (
                m(f.playbackLoop, {
                  playerStateFromMain: y,
                  reason: d.reason,
                  type: "update_player_state_from_main",
                }),
                babelHelpers.extends({}, f, { playerStateFromMain: y })
              );
            }
            return;
          }
          if (d.type === "update_player_state_from_main")
            return f.state !== "__disposed__"
              ? (Object.assign(s.config, d.playerStateFromMain.configFromMain, {
                  isInWorkerType: s.config.isInWorkerType,
                }),
                m(f.playbackLoop, {
                  playerStateFromMain: d.playerStateFromMain,
                  reason: d.reason,
                  type: "update_player_state_from_main",
                }),
                d.playerStateFromMain.shouldSendPlayerStateForDebug &&
                  d.playerStateFromMain.shouldSendPlayerStateForDebug !==
                    f.shouldSendPlayerStateForDebug &&
                  h(),
                babelHelpers.extends({}, f, {
                  playerStateFromMain: o(
                    "VideoPlayerNextgendashStateMachine",
                  ).skipAutoDisposeInsideThisObject(d.playerStateFromMain),
                  shouldSendPlayerStateForDebug:
                    d.playerStateFromMain.shouldSendPlayerStateForDebug,
                }))
              : void 0;
          if (d.type === "request_recovery_from_source_reset") {
            if (f.state !== "__disposed__") {
              m(f.playbackLoop, {
                mediaSourceIndex: d.mediaSourceIndex,
                type: "request_recovery_from_source_reset",
              });
              return;
            }
            return;
          }
          if (d.type === "notify_deliberate_detach_for_unmount") {
            if (f.state === "__disposed__") return;
            m(f.playbackLoop, {
              mediaSourceIndex: d.mediaSourceIndex,
              type: "notify_deliberate_detach_for_unmount",
            });
            return;
          }
          switch (f.state) {
            case "initial":
              switch (d.type) {
                case "__enter":
                  return;
                case "__exception":
                  return;
                case "__dispose":
                  return;
                case "_playback_loop_transitioned": {
                  var C = null,
                    b = c(g);
                  return (
                    b !== u &&
                      !r("deepEquals")(b, f.playerStateFromWorkerSent) &&
                      (i(
                        {
                          playerInstanceKey: a,
                          playerStateFromWorker: b,
                          type: "from_worker_to_main_playback_loop_state",
                          workerType: l,
                        },
                        [],
                        !0,
                      ),
                      (C = b)),
                    f.playbackLoop.state.state === "__disposed__" &&
                      f.playbackLoop.state.exception != null &&
                      p({
                        exception: f.playbackLoop.state.exception,
                        type: "__exception",
                      }),
                    f.shouldSendPlayerStateForDebug && h(),
                    C != null
                      ? babelHelpers.extends({}, f, {
                          playerStateFromWorkerSent: C,
                        })
                      : void 0
                  );
                }
                case "_send_media_source_to_main": {
                  var v = d.mediaSource,
                    S = d.mediaSourceIndex,
                    R = _(s, g),
                    L = c(g);
                  if (l === "RealWorker" || l === "RealWorkerV2") {
                    var E = s.host.mediaSourceGetHandleInWorker(s, v);
                    i(
                      {
                        mediaSourceHandle: E,
                        mediaSourceIndex: S,
                        playerInstanceKey: a,
                        playerStateForDebug: R,
                        playerStateFromWorker: L,
                        type: "from_worker_to_main_player_new_media_source",
                        workerType: l,
                      },
                      [E],
                    );
                  } else
                    i(
                      {
                        mediaSource: v,
                        mediaSourceIndex: S,
                        playerInstanceKey: a,
                        playerStateForDebug: R,
                        playerStateFromWorker: L,
                        type: "from_worker_to_main_player_new_media_source",
                        workerType: l,
                      },
                      [],
                    );
                  return babelHelpers.extends({}, f, {
                    playerStateFromWorkerSent: L,
                  });
                }
                case "_send_player_warning_to_main": {
                  var k = _(s, g),
                    I = c(g);
                  return (
                    i(
                      {
                        playerInstanceKey: a,
                        playerStateForDebug: k,
                        playerStateFromWorker: I,
                        type: "from_worker_to_main_player_warning",
                        warningErrorSnapshot: o(
                          "nextgendasherr",
                        ).nextgendasherrToSnapshot(d.warningError),
                        workerType: l,
                      },
                      [],
                    ),
                    babelHelpers.extends({}, f, {
                      playerStateFromWorkerSent: I,
                    })
                  );
                }
                case "debug_log_stall_details": {
                  var T,
                    D = s.host.clock(),
                    x = _(s, g),
                    $ = c(g),
                    P =
                      g == null
                        ? void 0
                        : g.playerStateFromMain.mediaElementSnapshot,
                    N = {
                      fetchDemands: g
                        ? o(
                            "VideoPlayerNextgendashPlaybackLoop",
                          ).debugPrepareFetchDemands(g.fetchDemands, !0)
                        : void 0,
                      loopIteration:
                        g == null ? void 0 : g.loopState.loopIteration,
                      loopReasons: g == null ? void 0 : g.loopState.loopReasons,
                      mediaElementSnapshotFromMain:
                        d.mediaElementSnapshotFromMain,
                      mediaElementSnapshotFromPlaybackLoop: r("deepEquals")(
                        P,
                        d.mediaElementSnapshotFromMain,
                      )
                        ? "same"
                        : P,
                      playerStateFromWorker: $,
                      stallDetailsClock: D,
                      stallStartClock: d.stallStartClock,
                      streams: g
                        ? g.streams.map(function (e) {
                            return {
                              sourceBufferRanges:
                                e.appendState.sourceBufferRanges,
                              type: e.type,
                            };
                          })
                        : void 0,
                      waitingForFirstSourceOpen:
                        g == null || (T = g.mediaSourceState) == null
                          ? void 0
                          : T.waitingForFirstSourceopen,
                    },
                    M = o("nextgendasherr").nextgendasherr(
                      s,
                      "VideoPlayerNextgendashDebugStallDetails",
                      "Stall details: %s %s",
                      JSON.stringify(N),
                      "debugPlaybackLoopRecentChanges:" +
                        (g == null
                          ? "undefined"
                          : "\n " +
                            g.debugPlaybackLoopRecentChanges.join("\n ")),
                    );
                  return (
                    i(
                      {
                        playerInstanceKey: a,
                        playerStateForDebug: x,
                        playerStateFromWorker: $,
                        type: "from_worker_to_main_player_warning",
                        warningErrorSnapshot:
                          o("nextgendasherr").nextgendasherrToSnapshot(M),
                        workerType: l,
                      },
                      [],
                    ),
                    babelHelpers.extends({}, f, {
                      playerStateFromWorkerSent: $,
                    })
                  );
                }
                default:
                  d.type;
                  return;
              }
            case "__disposed__":
              switch (d.type) {
                case "__enter": {
                  if (f.exception != null) {
                    var w,
                      A = o("nextgendasherr").nextgendasherrToSnapshot(
                        f.exception,
                      ),
                      F =
                        d.prevState.playbackLoop.state.state === "playing"
                          ? d.prevState.playbackLoop.state
                          : null,
                      O = c(F),
                      B =
                        O === u &&
                        (w = d.prevState.playerStateFromWorkerSent) != null
                          ? w
                          : O;
                    i(
                      {
                        errorSnapshot: A,
                        playerInstanceKey: a,
                        playerStateForDebug: _(s, F),
                        playerStateFromWorker: B,
                        type: "from_worker_to_main_player_fatal_error",
                        workerType: l,
                      },
                      [],
                    );
                  }
                  return;
                }
                default:
                  return;
              }
            default: {
              f.state;
              return;
            }
          }
        },
      ),
      u = o(
        "VideoPlayerNextgendashStateMachine",
      ).skipAutoDisposeInsideThisObject({
        blockedRepresentationIds: { audio: [], video: [] },
        bufferedRangesWithRepIds: { audio: null, video: null },
        liveEdgeTimeSec: null,
        targetRepresentationId: { audio: null, video: null },
        targetVariantRepresentationIds: { audio: [], video: [] },
        workaroundForSegmentBufferedInsufficientlyMediaTimeRanges: [],
      });
    function c(e) {
      var t, n, r, a, i, l, s;
      if (e == null) return u;
      var c = e.streams.find(function (e) {
          return e.type === "audio";
        }),
        d = e.streams.find(function (e) {
          return e.type === "video";
        });
      if (c == null && d == null) return u;
      var m = d == null ? void 0 : d.appendState,
        p = c == null ? void 0 : c.appendState,
        _ = [].concat(
          (t =
            m == null
              ? void 0
              : m.workaroundForSegmentBufferedInsufficiently.map(function (e) {
                  return e.segment.mediaTimeRange;
                })) != null
            ? t
            : [],
          (n =
            p == null
              ? void 0
              : p.workaroundForSegmentBufferedInsufficiently.map(function (e) {
                  return e.segment.mediaTimeRange;
                })) != null
            ? n
            : [],
        ),
        f = null;
      if (
        ((r = e.playerStateFromMain.dashManifestData) == null
          ? void 0
          : r.metadata.manifestType) === "dynamic"
      )
        for (var g of e.streams) {
          var h =
              g.targetRepresentationId != null
                ? g.sidxByRepresentationId[g.targetRepresentationId]
                : null,
            y = o(
              "VideoPlayerNextgendashPlaybackLoop",
            ).internal_getConfirmedSidxLiveEdgeTimeSec(h);
          y != null && (f == null || y > f) && (f = y);
        }
      return o(
        "VideoPlayerNextgendashStateMachine",
      ).skipAutoDisposeInsideThisObject({
        blockedRepresentationIds: {
          audio: Object.keys(
            (a = c == null ? void 0 : c.blockedRepresentations) != null
              ? a
              : {},
          ),
          video: Object.keys(
            (i = d == null ? void 0 : d.blockedRepresentations) != null
              ? i
              : {},
          ),
        },
        bufferedRangesWithRepIds: {
          audio: p == null ? void 0 : p.sourceBufferRangesAnnotated,
          video: m == null ? void 0 : m.sourceBufferRangesAnnotated,
        },
        liveEdgeTimeSec: f,
        targetRepresentationId: {
          audio: c == null ? void 0 : c.targetRepresentationId,
          video: d == null ? void 0 : d.targetRepresentationId,
        },
        targetVariantRepresentationIds: {
          audio:
            (l = c == null ? void 0 : c.targetVariantRepresentationIds) != null
              ? l
              : [],
          video:
            (s = d == null ? void 0 : d.targetVariantRepresentationIds) != null
              ? s
              : [],
        },
        workaroundForSegmentBufferedInsufficientlyMediaTimeRanges:
          _.length > 0 ? _ : void 0,
      });
    }
    function d(e, t, n, r) {
      var a,
        i =
          e != null && t != null
            ? e.sidxByRepresentationId[t.representationId]
            : null,
        l =
          t != null && t.type === "audio"
            ? o(
                "VideoPlayerNextgendashManifestParser",
              ).getDisplayLabelFromAudioRepresentation(t)
            : t != null && t.type === "video"
              ? o(
                  "VideoPlayerNextgendashManifestParser",
                ).getDisplayLabelFromVideoRepresentation(t) +
                (t.lang != null ? " - " + t.lang : "") +
                (t.role != null ? " - " + t.role : "")
              : void 0,
        s = t != null ? t.mimeCodecsParsed.codecFamily : void 0;
      return o(
        "VideoPlayerNextgendashStateMachine",
      ).skipAutoDisposeInsideThisObject(
        (a =
          i == null
            ? void 0
            : i.map(function (a) {
                var i,
                  u =
                    e != null && t != null
                      ? o(
                          "VideoPlayerNextgendashPlaybackLoop",
                        ).makeSegmentFetchDataKey(t, a)
                      : null,
                  c =
                    u != null && n != null
                      ? o(
                          "VideoPlayerNextgendashPlaybackLoop",
                        ).findDataForDataKey(n, u, r)
                      : null,
                  d = c == null ? void 0 : c.fetchState,
                  m = c == null ? void 0 : c.responseInfo,
                  p =
                    m != null &&
                    d != null &&
                    d.state !== "__null__" &&
                    d.state !== "__disposed__" &&
                    d.state !== "waiting_start" &&
                    d.state !== "submitted_to_pool"
                      ? d.request.requestInfo +
                        ("#" +
                          m.responseByteRange.byteOffset +
                          "B.." +
                          (m.responseByteRange.byteLength != null
                            ? m.responseByteRange.byteOffset +
                              m.responseByteRange.byteLength -
                              1
                            : "?") +
                          "B")
                      : void 0,
                  _ =
                    d != null
                      ? "" +
                        d.state +
                        (d.responseData != null
                          ? ":" +
                            d.responseData.state.state +
                            (d.responseData.state.state === "reading_stream" ||
                            d.responseData.state.state === "done_stream"
                              ? "[" + d.responseData.state.chunks.length + "]"
                              : "")
                          : "")
                      : void 0,
                  f = a.mediaFileByteRange.byteLength,
                  g =
                    d != null &&
                    d.state !== "__null__" &&
                    d.state !== "__disposed__" &&
                    d.state !== "submitted_to_pool"
                      ? d.request.requestCreatedClock.unixMs
                      : void 0,
                  h =
                    d != null &&
                    (d.state === "waiting_headers" ||
                      d.state === "waiting_data")
                      ? d.requestStartedClock.unixMs
                      : void 0,
                  y =
                    d != null &&
                    d.state !== "__null__" &&
                    d.state !== "__disposed__" &&
                    d.state !== "submitted_to_pool"
                      ? d.prefetchResultState
                      : void 0,
                  C =
                    (d != null &&
                      (d.state === "waiting_data" || d.state === "completed") &&
                      parseInt(
                        (i = d.responseHeader.httpHeaders) == null
                          ? void 0
                          : i.get("Content-Length"),
                        10,
                      )) ||
                    void 0,
                  b =
                    d != null && d.state === "waiting_headers"
                      ? 0
                      : d != null &&
                          (d.state === "waiting_data" ||
                            d.state === "completed")
                        ? d.responseData.state.state === "reading_stream" ||
                          d.responseData.state.state === "done_stream"
                          ? d.responseData.state.dataBytesLengthTotal
                          : d.responseData.state.state === "done_buffer"
                            ? d.responseData.state.buffer.byteLength
                            : d.responseData.state.state === "done_text"
                              ? d.responseData.state.text.length
                              : void 0
                        : void 0;
                return {
                  byteLength: f,
                  dataState:
                    d == null
                      ? "not_ready"
                      : {
                          __disposed__: "disposed",
                          __null__: "not_ready",
                          aborted: "failed",
                          completed: "ready",
                          failed: "failed",
                          submitted_to_pool: "not_ready",
                          waiting_data: "fetching",
                          waiting_headers: "fetching",
                          waiting_retry_or_failed: "retrying",
                          waiting_start: "not_ready",
                          waiting_start_from_retry: "retrying",
                        }[d.state],
                  debugJsonString: JSON.stringify({
                    bytesDownloaded: b,
                    bytesExpected: C,
                    error:
                      d != null && d.state === "aborted"
                        ? String(d.abortReason)
                        : d != null && d.state === "failed"
                          ? String(d.error)
                          : d != null &&
                              d.state === "__disposed__" &&
                              d.exception != null
                            ? String(d.exception)
                            : void 0,
                    label: [l, s].filter(Boolean).join(" / "),
                    prefetchResultState: y,
                    requestCreatedClockUnixMs: g,
                    requestStartedClockUnixMs: h,
                    responseByteRange: m == null ? void 0 : m.responseByteRange,
                    state: _,
                    url: p,
                  }),
                  mediaTimeEnd: a.mediaTimeRange[1],
                  mediaTimeStart: a.mediaTimeRange[0],
                  segmentId: a.segmentId,
                };
              })) != null
          ? a
          : [],
      );
    }
    function m(e) {
      return e.map(function (e) {
        return { endTime: e[1], startTime: e[0] };
      });
    }
    function p(e, t, n) {
      return e.map(function (e) {
        var r =
          t == null
            ? void 0
            : t.find(function (t) {
                return t.representationId === e[2];
              });
        return {
          debugJsonString: JSON.stringify({
            label: r ? n(r) : void 0,
            representationId: e[2],
          }),
          endTime: e[1],
          startTime: e[0],
        };
      });
    }
    function _(e, t, n) {
      var r, a, i, l, s, u, c;
      if (e.config.debugOverlay) {
        var _ =
            t == null
              ? void 0
              : t.streams.find(function (e) {
                  return e.type === "audio";
                }),
          f =
            t == null || (r = t.playerStateFromMain.dashManifestData) == null
              ? void 0
              : r.manifestRepresentations.audio.find(function (e) {
                  return (
                    e.representationId ===
                    (_ == null ? void 0 : _.targetRepresentationId)
                  );
                }),
          g =
            t == null
              ? void 0
              : t.streams.find(function (e) {
                  return e.type === "video";
                }),
          h =
            t == null || (a = t.playerStateFromMain.dashManifestData) == null
              ? void 0
              : a.manifestRepresentations.video.find(function (e) {
                  return (
                    e.representationId ===
                    (g == null ? void 0 : g.targetRepresentationId)
                  );
                }),
          y = p(
            (i =
              _ == null ? void 0 : _.appendState.sourceBufferRangesAnnotated) !=
              null
              ? i
              : [],
            t == null || (l = t.playerStateFromMain.dashManifestData) == null
              ? void 0
              : l.manifestRepresentations.audio,
            o("VideoPlayerNextgendashManifestParser")
              .getDisplayLabelFromAudioRepresentation,
          ),
          C = p(
            (s =
              g == null ? void 0 : g.appendState.sourceBufferRangesAnnotated) !=
              null
              ? s
              : [],
            t == null || (u = t.playerStateFromMain.dashManifestData) == null
              ? void 0
              : u.manifestRepresentations.video,
            o("VideoPlayerNextgendashManifestParser")
              .getDisplayLabelFromVideoRepresentation,
          ),
          b =
            t == null ||
            (c = t.playerStateFromMain) == null ||
            (c = c.mediaElementSnapshot) == null
              ? void 0
              : c.bufferedForDebug,
          v = m(b != null ? b : []),
          S = d(_, f, t == null ? void 0 : t.fetchDemands, n),
          R = d(g, h, t == null ? void 0 : t.fetchDemands, n),
          L = t == null ? void 0 : t.volatilityState,
          E = null;
        if (L != null) {
          var k = e.host.clock().unixMs,
            I = o(
              "VideoPlayerNextgendashPlaybackLoop",
            ).internal_computeABRVolatility(L.abrSwitchTimestamps, k),
            T = o(
              "VideoPlayerNextgendashPlaybackLoop",
            ).internal_computeNetworkVolatility(L.bandwidthSamples, k),
            D = Math.max(I, T),
            x = 22,
            $ = D * 13;
          E = {
            abrSwitchCount: L.abrSwitchTimestamps.length,
            abrSwitchTimestamps: L.abrSwitchTimestamps,
            abrVolatility: I,
            bandwidthSampleCount: L.bandwidthSamples.length,
            bandwidthSamples: L.bandwidthSamples,
            baseTarget: x,
            bufferTarget: x + $,
            maxVolatility: D,
            networkVolatility: T,
            volatilityBonus: $,
          };
        }
        var P =
            (g == null ? void 0 : g.type) === "video" && g.videoABRState != null
              ? {
                  bestRepresentationId: g.videoABRState.bestRepresentationId,
                  bestRepresentationIsPrefetched:
                    g.videoABRState.bestRepresentationIsPrefetched,
                  hasMadeInitialDecision:
                    g.videoABRState.hasMadeInitialDecision,
                  lastEvaluationReason: g.videoABRState.lastEvaluationReason,
                }
              : null,
          N = e.loggingState.metadata.prefetchKey,
          M =
            N != null
              ? o(
                  "VideoPlayerNextgendashWorkerPrefetchCache",
                ).getPrefetchCacheStatsForKey(N)
              : null;
        return o(
          "VideoPlayerNextgendashStateMachine",
        ).skipAutoDisposeInsideThisObject({
          bufferedRanges: { audio: y, captions: [], combo: v, video: C },
          prefetchCacheStats: M,
          segments: { audio: S, captions: [], combo: [], video: R },
          videoABRState: P,
          volatility: E,
        });
      }
    }
    ((l.internal_mergeMediaElementStateFromMain = e),
      (l.VideoPlayerNextgendashWorkerPlayerSM = s));
  },
  98,
);
