__d(
  "VideoPlayerNextgendashWorker",
  [
    "VideoPlayerNextgendashConnectionWorkerToMain",
    "VideoPlayerNextgendashFetchPoolSM",
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
        var t = e.args.workerType,
          n = e.env,
          r = e.event,
          a = e.eventClock,
          i = e.makeChildSm,
          l = e.sendToOther,
          s = e.sendToSelf,
          u = e.state;
        switch (u.state) {
          case "port_to_main_ready":
            switch (r.type) {
              case "__enter":
                return;
              case "__exception":
                return;
              case "__dispose":
                return;
              case "_worker_player_disposed": {
                var c = u.players,
                  d = c.get(r.playerInstanceKey);
                return d
                  ? (c.delete(r.playerInstanceKey),
                    u.fetchPool != null &&
                      l(u.fetchPool, {
                        playerInstanceKey: r.playerInstanceKey,
                        type: "unregister_player",
                      }),
                    u.mainConnection.sendToMain({
                      eventToMain: {
                        exceptionSnapshot:
                          r.exception != null
                            ? o("nextgendasherr").nextgendasherrToSnapshot(
                                r.exception,
                              )
                            : void 0,
                        playerInstanceKey: r.playerInstanceKey,
                        reason:
                          r.exception != null
                            ? "VideoPlayerNextgendashWorkerPlayer_exception"
                            : "VideoPlayerNextgendashWorkerPlayer_disposed",
                        type: "from_worker_to_main_player_unlinked",
                        workerType: t,
                      },
                      type: "send_to_main",
                    }),
                    u)
                  : void 0;
              }
              case "_prefetch_task_completed": {
                n.config.enablePrefetchTaskCompletionNotification &&
                  u.mainConnection.sendToMain({
                    eventToMain: {
                      prefetchKey: r.prefetchKey,
                      type: "from_worker_to_main_prefetch_task_complete",
                      workerType: t,
                    },
                    type: "send_to_main",
                  });
                return;
              }
              case "from_main_to_worker_link_player": {
                var m = u.players,
                  p = m.get(r.playerInstanceKey);
                if (!p) {
                  var _ =
                      r.prefetchKey != null
                        ? o(
                            "VideoPlayerNextgendashWorkerPrefetchCache",
                          ).getCachedRepresentationsForPrefetchKey(
                            n,
                            r.prefetchKey,
                          )
                        : null,
                    f = _ != null ? _ : r.prefetchResultInitial;
                  if (
                    n.config.enablePrefetchCacheResultNotification &&
                    r.prefetchKey != null
                  ) {
                    var g;
                    u.mainConnection.sendToMain({
                      eventToMain: {
                        hit: _ != null,
                        playerInstanceKey: r.playerInstanceKey,
                        prefetchKey: r.prefetchKey,
                        representationID:
                          (g =
                            _ == null
                              ? void 0
                              : _.prefetchedRepresentationIds[0]) != null
                            ? g
                            : null,
                        type: "from_worker_to_main_prefetch_cache_result",
                        workerType: t,
                      },
                      type: "send_to_main",
                    });
                  }
                  var h = r.playerInstanceKey,
                    y = u.fetchPool,
                    C =
                      y != null
                        ? o(
                            "VideoPlayerNextgendashFetchPoolSM",
                          ).makeFetchPoolAPI(y, h, function (e) {
                            return l(y, e);
                          })
                        : null;
                  p = i(
                    "player-" + r.playerInstanceKey,
                    o("VideoPlayerNextgendashWorkerPlayer")
                      .VideoPlayerNextgendashWorkerPlayerSM,
                    {
                      fetchPoolAPI: C,
                      linkedAt: a,
                      nextgendashInstanceIndex: r.nextgendashInstanceIndex,
                      onDisposed: function (t, n, o) {
                        s({
                          exception: n.exception,
                          playerInstanceKey: r.playerInstanceKey,
                          prefetchKey: r.prefetchKey,
                          type: "_worker_player_disposed",
                        });
                      },
                      playerInstanceKey: r.playerInstanceKey,
                      playerStateFromMain: o(
                        "VideoPlayerNextgendashStateMachine",
                      ).skipAutoDisposeInsideThisObject(r.playerStateFromMain),
                      playerSubOrigin: r.playerSubOrigin,
                      prefetchKey: r.prefetchKey,
                      prefetchResult: f,
                      sendToMain: function (t, n, r) {
                        u.mainConnection.sendToMain({
                          canSendOnlyLatestOfTypeIfThrottled: r,
                          eventToMain: t,
                          transferList: n,
                          type: "send_to_main",
                        });
                      },
                      videoFBID: r.videoFBID,
                      workerType: t,
                    },
                  );
                }
                return (m.set(r.playerInstanceKey, p), u);
              }
              case "from_main_to_worker_unlink_player": {
                var b = u.players;
                return (
                  b.delete(r.playerInstanceKey),
                  u.fetchPool != null &&
                    l(u.fetchPool, {
                      playerInstanceKey: r.playerInstanceKey,
                      type: "unregister_player",
                    }),
                  u
                );
              }
              case "from_main_to_worker_sync_state": {
                var v = u.players,
                  S = v.get(r.playerInstanceKey);
                if (!S) return;
                l(S, {
                  playerStateFromMain: r.playerStateFromMain,
                  reason: r.reason,
                  type: "update_player_state_from_main",
                });
                return;
              }
              case "from_main_to_worker_debug_log_stall_details": {
                var R = u.players,
                  L = R.get(r.playerInstanceKey);
                if (!L) return;
                l(L, {
                  mediaElementSnapshotFromMain: r.mediaElementSnapshotFromMain,
                  stallStartClock: r.stallStartClock,
                  type: "debug_log_stall_details",
                });
                return;
              }
              case "from_main_to_worker_request_recovery_from_source_reset": {
                var E = u.players,
                  k = E.get(r.playerInstanceKey);
                if (!k) return;
                l(k, {
                  mediaSourceIndex: r.mediaSourceIndex,
                  type: "request_recovery_from_source_reset",
                });
                return;
              }
              case "from_main_to_worker_prefetch": {
                if (n.config.maxConcurrentPrefetchTasks < 1) {
                  o(
                    "VideoPlayerNextgendashWorkerPrefetchCache",
                  ).initiatePrefetch(n, r.prefetchInfo, r.initialAbrParams);
                  return;
                }
                var I;
                try {
                  I = o(
                    "VideoPlayerNextgendashWorkerPrefetchCache",
                  ).getPrefetchTasks(n, r.prefetchInfo, r.initialAbrParams);
                } catch (e) {
                  n.logging.log(n, {
                    error: o("nextgendasherr").nextgendasherrFromCause(
                      n,
                      e,
                      "VideoPlayerNextgendashGetPrefetchTasksException",
                    ),
                    type: "generic_error_as_warning",
                  });
                  return;
                }
                if (I.length === 0) return;
                var T = u.prefetchTaskQueue;
                return (
                  T ||
                    (T = i(
                      "prefetch-task-queue",
                      o("VideoPlayerNextgendashWorkerPrefetchTaskQueue")
                        .VideoPlayerNextgendashWorkerPrefetchTaskQueueSM,
                      {
                        onTaskCompleted: function (t) {
                          s({
                            prefetchKey: t,
                            type: "_prefetch_task_completed",
                          });
                        },
                      },
                    )),
                  l(T, { groupId: r.groupId, tasks: I, type: "enqueue_tasks" }),
                  babelHelpers.extends({}, u, { prefetchTaskQueue: T })
                );
              }
              case "from_main_to_worker_prefetch_group_action": {
                var D = u.prefetchTaskQueue;
                return (
                  D == null &&
                    (D = i(
                      "prefetch-task-queue",
                      o("VideoPlayerNextgendashWorkerPrefetchTaskQueue")
                        .VideoPlayerNextgendashWorkerPrefetchTaskQueueSM,
                      {
                        onTaskCompleted: function (t) {
                          s({
                            prefetchKey: t,
                            type: "_prefetch_task_completed",
                          });
                        },
                      },
                    )),
                  r.prefetchGroupAction.type === "stop"
                    ? l(D, { type: "stop_group" })
                    : l(D, {
                        groupId: r.prefetchGroupAction.groupId,
                        type: "start_group",
                      }),
                  babelHelpers.extends({}, u, { prefetchTaskQueue: D })
                );
              }
              case "from_main_to_worker_release_prefetch_key": {
                o(
                  "VideoPlayerNextgendashWorkerPrefetchCache",
                ).releasePrefetchKey(r.prefetchKey);
                return;
              }
              default:
                r.type;
                return;
            }
          case "__disposed__":
            switch (r.type) {
              case "__enter": {
                var x = r.prevState;
                if (x.state === "port_to_main_ready") {
                  var $ = x.mainConnection.disconnectFromMain;
                  $ != null &&
                    $(
                      u.exception != null
                        ? o("nextgendasherr").nextgendasherrFromCause(
                            n,
                            u.exception,
                            "VideoPlayerNextgendashWorkerDisposed",
                          )
                        : o("nextgendasherr").nextgendasherr(
                            n,
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
            u.state;
            return;
          }
        }
      },
    );
    l.VideoPlayerNextgendashWorkerSM = e;
  },
  98,
);
