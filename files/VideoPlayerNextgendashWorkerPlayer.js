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
    var e = o("VideoPlayerNextgendashStateMachine").defineStateMachine(
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
            playerStateFromWorkerSent: null,
            shouldSendPlayerStateForDebug: !1,
            state: "initial",
            videoFBID: u,
          };
        },
        function (e) {
          var t = e.args,
            n = t.playerInstanceKey,
            a = t.sendToMain,
            i = t.workerType,
            l = e.env,
            c = e.event,
            d = e.sendToOther,
            m = e.sendToSelf,
            _ = e.state,
            f =
              _.state !== "__disposed__" &&
              _.playbackLoop.state.state === "playing"
                ? _.playbackLoop.state
                : null;
          function g() {
            a(
              {
                playerInstanceKey: n,
                playerStateForDebug: p(l, f),
                type: "from_worker_to_main_player_state_for_debug",
                workerType: i,
              },
              [],
              !0,
            );
          }
          if (c.type === "update_player_state_from_main")
            return _.state !== "__disposed__"
              ? (Object.assign(l.config, c.playerStateFromMain.configFromMain, {
                  isInWorkerType: l.config.isInWorkerType,
                }),
                d(_.playbackLoop, {
                  playerStateFromMain: c.playerStateFromMain,
                  reason: c.reason,
                  type: "update_player_state_from_main",
                }),
                c.playerStateFromMain.shouldSendPlayerStateForDebug &&
                  c.playerStateFromMain.shouldSendPlayerStateForDebug !==
                    _.shouldSendPlayerStateForDebug &&
                  g(),
                babelHelpers.extends({}, _, {
                  shouldSendPlayerStateForDebug:
                    c.playerStateFromMain.shouldSendPlayerStateForDebug,
                }))
              : void 0;
          if (c.type === "request_recovery_from_source_reset") {
            if (_.state !== "__disposed__") {
              d(_.playbackLoop, {
                mediaSourceIndex: c.mediaSourceIndex,
                type: "request_recovery_from_source_reset",
              });
              return;
            }
            return;
          }
          switch (_.state) {
            case "initial":
              switch (c.type) {
                case "__enter":
                  return;
                case "__exception":
                  return;
                case "__dispose":
                  return;
                case "_playback_loop_transitioned": {
                  var h = null,
                    y = u(f);
                  return (
                    y !== s &&
                      !r("deepEquals")(y, _.playerStateFromWorkerSent) &&
                      (a(
                        {
                          playerInstanceKey: n,
                          playerStateFromWorker: y,
                          type: "from_worker_to_main_playback_loop_state",
                          workerType: i,
                        },
                        [],
                        !0,
                      ),
                      (h = y)),
                    _.playbackLoop.state.state === "__disposed__" &&
                      _.playbackLoop.state.exception != null &&
                      m({
                        exception: _.playbackLoop.state.exception,
                        type: "__exception",
                      }),
                    _.shouldSendPlayerStateForDebug && g(),
                    h != null
                      ? babelHelpers.extends({}, _, {
                          playerStateFromWorkerSent: h,
                        })
                      : void 0
                  );
                }
                case "_send_media_source_to_main": {
                  var C = c.mediaSource,
                    b = c.mediaSourceIndex,
                    v = p(l, f),
                    S = u(f);
                  if (i === "RealWorker" || i === "RealWorkerV2") {
                    var R = l.host.mediaSourceGetHandleInWorker(l, C);
                    a(
                      {
                        mediaSourceHandle: R,
                        mediaSourceIndex: b,
                        playerInstanceKey: n,
                        playerStateForDebug: v,
                        playerStateFromWorker: S,
                        type: "from_worker_to_main_player_new_media_source",
                        workerType: i,
                      },
                      [R],
                    );
                  } else
                    a(
                      {
                        mediaSource: C,
                        mediaSourceIndex: b,
                        playerInstanceKey: n,
                        playerStateForDebug: v,
                        playerStateFromWorker: S,
                        type: "from_worker_to_main_player_new_media_source",
                        workerType: i,
                      },
                      [],
                    );
                  return babelHelpers.extends({}, _, {
                    playerStateFromWorkerSent: S,
                  });
                }
                case "_send_player_warning_to_main": {
                  var L = p(l, f),
                    E = u(f);
                  return (
                    a(
                      {
                        playerInstanceKey: n,
                        playerStateForDebug: L,
                        playerStateFromWorker: E,
                        type: "from_worker_to_main_player_warning",
                        warningErrorSnapshot: o(
                          "nextgendasherr",
                        ).nextgendasherrToSnapshot(c.warningError),
                        workerType: i,
                      },
                      [],
                    ),
                    babelHelpers.extends({}, _, {
                      playerStateFromWorkerSent: E,
                    })
                  );
                }
                case "debug_log_stall_details": {
                  var k,
                    I = l.host.clock(),
                    T = p(l, f),
                    D = u(f),
                    x =
                      f == null
                        ? void 0
                        : f.playerStateFromMain.mediaElementSnapshot,
                    $ = {
                      fetchDemands: f
                        ? o(
                            "VideoPlayerNextgendashPlaybackLoop",
                          ).debugPrepareFetchDemands(f.fetchDemands, !0)
                        : void 0,
                      loopIteration:
                        f == null ? void 0 : f.loopState.loopIteration,
                      loopReasons: f == null ? void 0 : f.loopState.loopReasons,
                      mediaElementSnapshotFromMain:
                        c.mediaElementSnapshotFromMain,
                      mediaElementSnapshotFromPlaybackLoop: r("deepEquals")(
                        x,
                        c.mediaElementSnapshotFromMain,
                      )
                        ? "same"
                        : x,
                      playerStateFromWorker: D,
                      stallDetailsClock: I,
                      stallStartClock: c.stallStartClock,
                      streams: f
                        ? f.streams.map(function (e) {
                            return {
                              sourceBufferRanges:
                                e.appendState.sourceBufferRanges,
                              type: e.type,
                            };
                          })
                        : void 0,
                      waitingForFirstSourceOpen:
                        f == null || (k = f.mediaSourceState) == null
                          ? void 0
                          : k.waitingForFirstSourceopen,
                    },
                    P = o("nextgendasherr").nextgendasherr(
                      l,
                      "VideoPlayerNextgendashDebugStallDetails",
                      "Stall details: %s %s",
                      JSON.stringify($),
                      "debugPlaybackLoopRecentChanges:" +
                        (f == null
                          ? "undefined"
                          : "\n " +
                            f.debugPlaybackLoopRecentChanges.join("\n ")),
                    );
                  return (
                    a(
                      {
                        playerInstanceKey: n,
                        playerStateForDebug: T,
                        playerStateFromWorker: D,
                        type: "from_worker_to_main_player_warning",
                        warningErrorSnapshot:
                          o("nextgendasherr").nextgendasherrToSnapshot(P),
                        workerType: i,
                      },
                      [],
                    ),
                    babelHelpers.extends({}, _, {
                      playerStateFromWorkerSent: D,
                    })
                  );
                }
                default:
                  c.type;
                  return;
              }
            case "__disposed__":
              switch (c.type) {
                case "__enter": {
                  if (_.exception != null) {
                    var N,
                      M = o("nextgendasherr").nextgendasherrToSnapshot(
                        _.exception,
                      ),
                      w =
                        c.prevState.playbackLoop.state.state === "playing"
                          ? c.prevState.playbackLoop.state
                          : null,
                      A = u(w),
                      F =
                        A === s &&
                        (N = c.prevState.playerStateFromWorkerSent) != null
                          ? N
                          : A;
                    a(
                      {
                        errorSnapshot: M,
                        playerInstanceKey: n,
                        playerStateForDebug: p(l, w),
                        playerStateFromWorker: F,
                        type: "from_worker_to_main_player_fatal_error",
                        workerType: i,
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
              _.state;
              return;
            }
          }
        },
      ),
      s = o(
        "VideoPlayerNextgendashStateMachine",
      ).skipAutoDisposeInsideThisObject({
        blockedRepresentationIds: { audio: [], video: [] },
        bufferedRangesWithRepIds: { audio: null, video: null },
        liveEdgeTimeSec: null,
        targetRepresentationId: { audio: null, video: null },
        targetVariantRepresentationIds: { audio: [], video: [] },
        workaroundForSegmentBufferedInsufficientlyMediaTimeRanges: [],
      });
    function u(e) {
      var t, n, r, a, i, l, u;
      if (e == null) return s;
      var c = e.streams.find(function (e) {
          return e.type === "audio";
        }),
        d = e.streams.find(function (e) {
          return e.type === "video";
        });
      if (c == null && d == null) return s;
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
            (u = d == null ? void 0 : d.targetVariantRepresentationIds) != null
              ? u
              : [],
        },
        workaroundForSegmentBufferedInsufficientlyMediaTimeRanges:
          _.length > 0 ? _ : void 0,
      });
    }
    function c(e, t, n, r) {
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
    function d(e) {
      return e.map(function (e) {
        return { endTime: e[1], startTime: e[0] };
      });
    }
    function m(e, t, n) {
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
    function p(e, t, n) {
      var r, a, i, l, s, u, p;
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
          y = m(
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
          C = m(
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
            (p = t.playerStateFromMain) == null ||
            (p = p.mediaElementSnapshot) == null
              ? void 0
              : p.bufferedForDebug,
          v = d(b != null ? b : []),
          S = c(_, f, t == null ? void 0 : t.fetchDemands, n),
          R = c(g, h, t == null ? void 0 : t.fetchDemands, n),
          L = t == null ? void 0 : t.volatilityState,
          E = null;
        if (L != null) {
          var k = Date.now(),
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
    l.VideoPlayerNextgendashWorkerPlayerSM = e;
  },
  98,
);
