__d(
  "WAWebHatchScheduledTasksStream",
  [
    "WALogger",
    "WAWebHatchFrontendGating",
    "WAWebHatchJsonReaders",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchVmConnection",
    "WAWebHatchVmSubscription",
    "WAWebHatchVmTransport",
    "WAWebNetworkStatus",
    "WAWebNullFunc",
    "WAWebReadHatchScheduledTasks",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = { generation: null, syncState: "idle", tasks: null },
      u = "tasks.updated",
      c = 0,
      d = s,
      m = 0,
      p = null,
      _ = !1,
      f = null,
      g = !1,
      h = !1,
      y = new Set(),
      C = new Set();
    function b() {
      (w(), A(), c++, c === 1 && (D(), k()));
      var e = !1;
      return function () {
        e || ((e = !0), c--, c === 0 && (x(), T()));
      };
    }
    function v() {
      k();
    }
    function S(e, t) {
      var n;
      d.generation === t &&
        (T(),
        O({
          tasks:
            (n = d.tasks) == null
              ? void 0
              : n.filter(function (t) {
                  return t.id !== e;
                }),
        }),
        k());
    }
    function R() {
      return d;
    }
    function L(e) {
      var t = { listener: e };
      return (
        y.add(t),
        function () {
          y.delete(t);
        }
      );
    }
    function E(e) {
      var t = { listener: e };
      return (
        C.add(t),
        function () {
          C.delete(t);
        }
      );
    }
    function k() {
      if (
        !(
          c === 0 ||
          r("WAWebHatchLinkedStatusManager").isUnlinked() ||
          !o("WAWebHatchFrontendGating").isHatchScheduledTasksEnabled()
        )
      ) {
        if (p != null) {
          _ = !0;
          return;
        }
        var t = new AbortController(),
          n = ++m;
        ((p = t),
          d.tasks == null && O({ syncState: "loading" }),
          o("WAWebReadHatchScheduledTasks")
            .readHatchScheduledTasks(t.signal)
            .then(
              function (e) {
                n === m && I(e);
              },
              function (t) {
                n === m &&
                  (o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "hatch-scheduled-tasks/read-threw",
                        ])),
                    )
                    .catching(r("getErrorSafe")(t))
                    .sendLogs("hatch-scheduled-tasks-read-threw"),
                  I({ kind: "failed" }));
              },
            ));
      }
    }
    function I(e) {
      ((p = null),
        O(
          e.kind === "ok"
            ? { generation: e.generation, syncState: "loaded", tasks: e.tasks }
            : { syncState: e.kind },
        ),
        _ && ((_ = !1), k()));
    }
    function T() {
      var e;
      ((e = p) == null || e.abort(), (p = null), (_ = !1), m++);
    }
    function D() {
      if (
        !(
          c === 0 ||
          r("WAWebHatchLinkedStatusManager").isUnlinked() ||
          !o("WAWebHatchFrontendGating").isHatchScheduledTasksEnabled()
        )
      ) {
        var e = new (r("WAWebHatchVmSubscription"))({
          connect: function () {
            return $(e);
          },
          kind: "tasks",
          onEvent: P,
          onResubscribed: k,
          open: function (t, n) {
            return t.openEventSubscription(
              o("WAWebHatchVmTransport").JarvisPaths.SCHEDULED_TASKS_SUBSCRIBE,
              n,
            );
          },
        });
        ((f = e), e.start());
      }
    }
    function x() {
      var e;
      ((e = f) == null || e.stop(), (f = null));
    }
    async function $(e) {
      return f !== e ||
        !o("WAWebHatchFrontendGating").isHatchScheduledTasksEnabled()
        ? null
        : o("WAWebHatchVmConnection")
            .connectHatchVmApi()
            .catch(o("WAWebNullFunc").returnNull);
    }
    function P(e) {
      if (e.name === u) {
        var t = N(e.payload);
        M(t) || k();
        for (var n of Array.from(C)) n.listener(t);
      }
    }
    function N(e) {
      return {
        jobID: o("WAWebHatchJsonReaders").readNonEmptyString(e, "job_id"),
        kind: o("WAWebHatchJsonReaders").readNonEmptyString(e, "kind"),
      };
    }
    function M(e) {
      var t = e.jobID,
        n = e.kind,
        r = d,
        o = r.syncState,
        a = r.tasks;
      return (
        p == null &&
        n === "runs" &&
        t != null &&
        o === "loaded" &&
        a != null &&
        !a.some(function (e) {
          return e.id === t;
        })
      );
    }
    function w() {
      g ||
        ((g = !0),
        o("WAWebHatchVmConnection").subscribeToHatchVmAccountChange(F));
    }
    function A() {
      h ||
        ((h = !0),
        r("WAWebNetworkStatus").on("change:online", function () {
          r("WAWebNetworkStatus").online && k();
        }));
    }
    function F() {
      (x(), T(), O(s));
    }
    function O(e) {
      var t = babelHelpers.extends({}, d, e);
      if (
        !(
          t.generation === d.generation &&
          t.syncState === d.syncState &&
          t.tasks === d.tasks
        )
      ) {
        d = t;
        for (var n of Array.from(y)) n.listener();
      }
    }
    ((l.retainHatchScheduledTasks = b),
      (l.refreshHatchScheduledTasks = v),
      (l.forgetHatchScheduledTask = S),
      (l.getHatchScheduledTasksSnapshot = R),
      (l.subscribeToHatchScheduledTasks = L),
      (l.subscribeToHatchScheduledTaskUpdates = E));
  },
  98,
);
