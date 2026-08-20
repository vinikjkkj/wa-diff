__d(
  "VideoPlayerNextgendashWorkerPrefetchTaskQueue",
  [
    "VideoPlayerNextgendashStateMachine",
    "VideoPlayerNextgendashWorkerPrefetchCache",
    "nextgendasherr",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0;
    function s() {
      return e++;
    }
    function u() {
      e = 0;
    }
    var c = "__default__";
    function d(e, t) {
      var n = e.get(t);
      return (n == null && ((n = []), e.set(t, n)), n);
    }
    function m(e, t, n) {
      var r = d(t, n),
        o = [];
      (e.forEach(function (e) {
        (e.abort(), o.push(e.task));
      }),
        e.clear(),
        o.length > 0 && r.unshift.apply(r, o));
    }
    var p = o("VideoPlayerNextgendashStateMachine").defineStateMachine(
      null,
      function (e) {
        var t = e.env;
        return { groupQueues: new Map(), state: "inactive" };
      },
      function (e) {
        var t = e.args,
          n = e.env,
          r = e.event,
          a = e.sendToSelf,
          i = e.state;
        function l(e) {
          var t;
          try {
            t = o(
              "VideoPlayerNextgendashWorkerPrefetchCache",
            ).processPrefetchTask({ env: n, task: e });
          } catch (e) {
            return (
              n.logging.log(n, {
                error: o("nextgendasherr").nextgendasherrFromCause(
                  n,
                  e,
                  "VideoPlayerNextgendashProcessPrefetchTaskException",
                ),
                type: "generic_error_as_warning",
              }),
              null
            );
          }
          if (t == null) return null;
          var r = t,
            i = r.abort,
            l = r.promise,
            u = s();
          return (
            l.finally(function () {
              a({ taskID: u, type: "task_completed" });
            }),
            { abort: i, promise: l, task: e, taskID: u }
          );
        }
        function u(e, t, r) {
          var o = t.get(r);
          if (o != null)
            for (
              ;
              e.size < n.config.maxConcurrentPrefetchTasks && o.length > 0;
            ) {
              var a = o.shift();
              if (a != null) {
                var i = l(a);
                i != null && e.set(i.taskID, i);
              }
            }
        }
        switch (i.state) {
          case "inactive":
            switch (r.type) {
              case "__enter":
                return;
              case "__exception":
                return;
              case "__dispose":
                return;
              case "enqueue_tasks": {
                var p,
                  _ = (p = r.groupId) != null ? p : c,
                  f = d(i.groupQueues, _);
                return (f.push.apply(f, r.tasks), i);
              }
              case "task_completed":
                return;
              case "start_group": {
                var g = new Map();
                return (
                  u(g, i.groupQueues, r.groupId),
                  {
                    activeGroupId: r.groupId,
                    activeTasks: g,
                    groupQueues: i.groupQueues,
                    state: "active",
                  }
                );
              }
              case "stop_group":
                return;
              default: {
                r.type;
                return;
              }
            }
          case "active":
            switch (r.type) {
              case "__enter":
                return;
              case "__exception":
                return;
              case "__dispose":
                return;
              case "enqueue_tasks": {
                var h,
                  y = (h = r.groupId) != null ? h : c,
                  C = d(i.groupQueues, y);
                return (
                  C.push.apply(C, r.tasks),
                  y === i.activeGroupId &&
                    u(i.activeTasks, i.groupQueues, i.activeGroupId),
                  i
                );
              }
              case "task_completed": {
                var b = i.activeTasks.get(r.taskID);
                return (
                  i.activeTasks.delete(r.taskID),
                  b != null && t.onTaskCompleted(b.task.prefetchKey),
                  u(i.activeTasks, i.groupQueues, i.activeGroupId),
                  i
                );
              }
              case "start_group": {
                if (r.groupId === i.activeGroupId) return;
                m(i.activeTasks, i.groupQueues, i.activeGroupId);
                var v = new Map();
                return (
                  u(v, i.groupQueues, r.groupId),
                  {
                    activeGroupId: r.groupId,
                    activeTasks: v,
                    groupQueues: i.groupQueues,
                    state: "active",
                  }
                );
              }
              case "stop_group":
                return (
                  m(i.activeTasks, i.groupQueues, i.activeGroupId),
                  { groupQueues: i.groupQueues, state: "inactive" }
                );
              default: {
                r.type;
                return;
              }
            }
          case "__disposed__":
            switch (r.type) {
              case "__enter": {
                r.prevState.state === "active" &&
                  r.prevState.activeTasks.forEach(function (e) {
                    e.abort();
                  });
                return;
              }
              default:
                return;
            }
          default: {
            i.state;
            return;
          }
        }
      },
    );
    ((l.resetTaskIDCounterForTestingOnly = u),
      (l.DEFAULT_PREFETCH_GROUP_ID = c),
      (l.VideoPlayerNextgendashWorkerPrefetchTaskQueueSM = p));
  },
  98,
);
