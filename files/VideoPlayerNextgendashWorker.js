__d(
  "VideoPlayerNextgendashWorker",
  [
    "VideoPlayerNextgendashConnectionWorkerToMain",
    "VideoPlayerNextgendashFetchPoolSM",
    "VideoPlayerNextgendashMP4Capture",
    "VideoPlayerNextgendashStateMachine",
    "VideoPlayerNextgendashWorkerPlayer",
    "VideoPlayerNextgendashWorkerPrefetchCache",
    "VideoPlayerNextgendashWorkerPrefetchTaskQueue",
    "nextgendasherr",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("VideoPlayerNextgendashStateMachine").defineStateMachine(
      null,
      function (e) {
        var t = e.args,
          n = t.portToMain,
          r = t.subscribeToDebugHalt,
          a = t.workerType,
          i = e.env,
          l = e.makeChildSm,
          s = e.sendToSelf,
          u = o("VideoPlayerNextgendashConnectionWorkerToMain").connectToMain(
            i,
            a,
            n,
            r,
            function (e) {
              s(e);
            },
          ),
          c = i.config.enableFetchPool
            ? l(
                "fetch-pool",
                o("VideoPlayerNextgendashFetchPoolSM")
                  .VideoPlayerNextgendashFetchPoolSM,
                {},
              )
            : null;
        return {
          fetchPool: c,
          mainConnection: u,
          players: new Map(),
          prefetchTaskQueue: null,
          state: "port_to_main_ready",
        };
      },
      function (e) {
        var t = e.args,
          n = t.portToMain,
          r = t.workerType,
          a = e.env,
          i = e.event,
          l = e.eventClock,
          s = e.makeChildSm,
          u = e.sendToOther,
          c = e.sendToSelf,
          d = e.state;
        switch (d.state) {
          case "port_to_main_ready":
            switch (i.type) {
              case "__enter":
                return;
              case "__exception":
                return;
              case "__dispose":
                return;
              case "_worker_player_disposed": {
                var m = d.players,
                  p = m.get(i.playerInstanceKey);
                return p
                  ? (m.delete(i.playerInstanceKey),
                    d.fetchPool != null &&
                      u(d.fetchPool, {
                        playerInstanceKey: i.playerInstanceKey,
                        type: "unregister_player",
                      }),
                    d.mainConnection.sendToMain({
                      eventToMain: {
                        exceptionSnapshot:
                          i.exception != null
                            ? o("nextgendasherr").nextgendasherrToSnapshot(
                                i.exception,
                              )
                            : void 0,
                        playerInstanceKey: i.playerInstanceKey,
                        reason:
                          i.exception != null
                            ? "VideoPlayerNextgendashWorkerPlayer_exception"
                            : "VideoPlayerNextgendashWorkerPlayer_disposed",
                        type: "from_worker_to_main_player_unlinked",
                        workerType: r,
                      },
                      type: "send_to_main",
                    }),
                    d)
                  : void 0;
              }
              case "_prefetch_task_completed": {
                a.config.enablePrefetchTaskCompletionNotification &&
                  d.mainConnection.sendToMain({
                    eventToMain: {
                      prefetchKey: i.prefetchKey,
                      type: "from_worker_to_main_prefetch_task_complete",
                      workerType: r,
                    },
                    type: "send_to_main",
                  });
                return;
              }
              case "from_main_to_worker_link_player": {
                var _ = d.players,
                  f = _.get(i.playerInstanceKey);
                if (!f) {
                  var g =
                      i.prefetchKey != null
                        ? o(
                            "VideoPlayerNextgendashWorkerPrefetchCache",
                          ).getCachedRepresentationsForPrefetchKey(
                            a,
                            i.prefetchKey,
                          )
                        : null,
                    h = g != null ? g : i.prefetchResultInitial;
                  if (
                    a.config.enablePrefetchCacheResultNotification &&
                    i.prefetchKey != null
                  ) {
                    var y;
                    d.mainConnection.sendToMain({
                      eventToMain: {
                        hit: g != null,
                        playerInstanceKey: i.playerInstanceKey,
                        prefetchKey: i.prefetchKey,
                        representationID:
                          (y =
                            g == null
                              ? void 0
                              : g.prefetchedRepresentationIds[0]) != null
                            ? y
                            : null,
                        type: "from_worker_to_main_prefetch_cache_result",
                        workerType: r,
                      },
                      type: "send_to_main",
                    });
                  }
                  var C = i.playerInstanceKey,
                    b = d.fetchPool,
                    v =
                      b != null
                        ? o(
                            "VideoPlayerNextgendashFetchPoolSM",
                          ).makeFetchPoolAPI(b, C, function (e) {
                            return u(b, e);
                          })
                        : null;
                  f = s(
                    "player-" + i.playerInstanceKey,
                    o("VideoPlayerNextgendashWorkerPlayer")
                      .VideoPlayerNextgendashWorkerPlayerSM,
                    {
                      fetchPoolAPI: v,
                      linkedAt: l,
                      nextgendashInstanceIndex: i.nextgendashInstanceIndex,
                      onDisposed: function (t, n, r) {
                        c({
                          exception: n.exception,
                          playerInstanceKey: i.playerInstanceKey,
                          prefetchKey: i.prefetchKey,
                          type: "_worker_player_disposed",
                        });
                      },
                      playerInstanceKey: i.playerInstanceKey,
                      playerStateFromMain: o(
                        "VideoPlayerNextgendashStateMachine",
                      ).skipAutoDisposeInsideThisObject(i.playerStateFromMain),
                      playerSubOrigin: i.playerSubOrigin,
                      prefetchKey: i.prefetchKey,
                      prefetchResult: h,
                      sendMP4InspectorCapture: o(
                        "VideoPlayerNextgendashMP4Capture",
                      ).createMP4CapturePortSender(n),
                      sendToMain: function (t, n, r) {
                        d.mainConnection.sendToMain({
                          canSendOnlyLatestOfTypeIfThrottled: r,
                          eventToMain: t,
                          transferList: n,
                          type: "send_to_main",
                        });
                      },
                      videoFBID: i.videoFBID,
                      workerType: r,
                    },
                  );
                }
                return (_.set(i.playerInstanceKey, f), d);
              }
              case "from_main_to_worker_unlink_player": {
                var S = d.players;
                return (
                  S.delete(i.playerInstanceKey),
                  d.fetchPool != null &&
                    u(d.fetchPool, {
                      playerInstanceKey: i.playerInstanceKey,
                      type: "unregister_player",
                    }),
                  d
                );
              }
              case "from_main_to_worker_sync_media_element_state": {
                var R = d.players,
                  L = R.get(i.playerInstanceKey);
                if (!L) return;
                u(L, {
                  mediaElementStateFromMain: i.mediaElementStateFromMain,
                  reason: i.reason,
                  type: "update_media_element_state_from_main",
                });
                return;
              }
              case "from_main_to_worker_sync_state": {
                var E = d.players,
                  k = E.get(i.playerInstanceKey);
                if (!k) return;
                u(k, {
                  playerStateFromMain: i.playerStateFromMain,
                  reason: i.reason,
                  type: "update_player_state_from_main",
                });
                return;
              }
              case "from_main_to_worker_debug_log_stall_details": {
                var I = d.players,
                  T = I.get(i.playerInstanceKey);
                if (!T) return;
                u(T, {
                  mediaElementSnapshotFromMain: i.mediaElementSnapshotFromMain,
                  stallStartClock: i.stallStartClock,
                  type: "debug_log_stall_details",
                });
                return;
              }
              case "from_main_to_worker_request_recovery_from_source_reset": {
                var D = d.players,
                  x = D.get(i.playerInstanceKey);
                if (!x) return;
                u(x, {
                  mediaSourceIndex: i.mediaSourceIndex,
                  type: "request_recovery_from_source_reset",
                });
                return;
              }
              case "from_main_to_worker_notify_deliberate_detach_for_unmount": {
                var $ = d.players,
                  P = $.get(i.playerInstanceKey);
                if (!P) return;
                u(P, {
                  mediaSourceIndex: i.mediaSourceIndex,
                  type: "notify_deliberate_detach_for_unmount",
                });
                return;
              }
              case "from_main_to_worker_prefetch": {
                if (a.config.maxConcurrentPrefetchTasks < 1) {
                  o(
                    "VideoPlayerNextgendashWorkerPrefetchCache",
                  ).initiatePrefetch(a, i.prefetchInfo, i.initialAbrParams);
                  return;
                }
                var N;
                try {
                  N = o(
                    "VideoPlayerNextgendashWorkerPrefetchCache",
                  ).getPrefetchTasks(a, i.prefetchInfo, i.initialAbrParams);
                } catch (e) {
                  a.logging.log(a, {
                    error: o("nextgendasherr").nextgendasherrFromCause(
                      a,
                      e,
                      "VideoPlayerNextgendashGetPrefetchTasksException",
                    ),
                    type: "generic_error_as_warning",
                  });
                  return;
                }
                if (N.length === 0) {
                  c({
                    prefetchKey: i.prefetchInfo.prefetchKey,
                    type: "_prefetch_task_completed",
                  });
                  return;
                }
                var M = d.prefetchTaskQueue;
                return (
                  M ||
                    (M = s(
                      "prefetch-task-queue",
                      o("VideoPlayerNextgendashWorkerPrefetchTaskQueue")
                        .VideoPlayerNextgendashWorkerPrefetchTaskQueueSM,
                      {
                        onTaskCompleted: function (t) {
                          c({
                            prefetchKey: t,
                            type: "_prefetch_task_completed",
                          });
                        },
                      },
                    )),
                  u(M, { groupId: i.groupId, tasks: N, type: "enqueue_tasks" }),
                  babelHelpers.extends({}, d, { prefetchTaskQueue: M })
                );
              }
              case "from_main_to_worker_prefetch_group_action": {
                var w = d.prefetchTaskQueue;
                return (
                  w == null &&
                    (w = s(
                      "prefetch-task-queue",
                      o("VideoPlayerNextgendashWorkerPrefetchTaskQueue")
                        .VideoPlayerNextgendashWorkerPrefetchTaskQueueSM,
                      {
                        onTaskCompleted: function (t) {
                          c({
                            prefetchKey: t,
                            type: "_prefetch_task_completed",
                          });
                        },
                      },
                    )),
                  i.prefetchGroupAction.type === "stop"
                    ? u(w, { type: "stop_group" })
                    : u(w, {
                        groupId: i.prefetchGroupAction.groupId,
                        type: "start_group",
                      }),
                  babelHelpers.extends({}, d, { prefetchTaskQueue: w })
                );
              }
              case "from_main_to_worker_release_prefetch_key": {
                o(
                  "VideoPlayerNextgendashWorkerPrefetchCache",
                ).releasePrefetchKey(i.prefetchKey);
                return;
              }
              default:
                i.type;
                return;
            }
          case "__disposed__":
            switch (i.type) {
              case "__enter": {
                var A = i.prevState;
                if (A.state === "port_to_main_ready") {
                  var F = A.mainConnection.disconnectFromMain;
                  F != null &&
                    F(
                      d.exception != null
                        ? o("nextgendasherr").nextgendasherrFromCause(
                            a,
                            d.exception,
                            "VideoPlayerNextgendashWorkerDisposed",
                          )
                        : o("nextgendasherr").nextgendasherr(
                            a,
                            "VideoPlayerNextgendashWorkerDisposed",
                          ),
                    );
                }
                return;
              }
              default:
                return;
            }
          default: {
            d.state;
            return;
          }
        }
      },
    );
    l.VideoPlayerNextgendashWorkerSM = e;
  },
  98,
);
