__d(
  "JSScheduler",
  ["SchedulerFb-Internals_DO_NOT_USE"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = {
        unstable_Idle: (e = n("SchedulerFb-Internals_DO_NOT_USE"))
          .unstable_IdlePriority,
        unstable_Immediate: e.unstable_ImmediatePriority,
        unstable_Low: e.unstable_LowPriority,
        unstable_Normal: e.unstable_NormalPriority,
        unstable_UserBlocking: e.unstable_UserBlockingPriority,
      },
      s = !1,
      u = e.unstable_scheduleCallback,
      c = e.unstable_cancelCallback,
      d = {
        cancelCallback: function (t) {
          c(t);
        },
        cancelDelayedCallback_DO_NOT_USE: function (t) {
          var e = t;
          return c(e);
        },
        defer: function (t) {
          var e = d.getCurrentPriorityLevel();
          return u(e, t);
        },
        deferUserBlockingRunAtCurrentPri_DO_NOT_USE: function (t) {
          var e = d.getCurrentPriorityLevel();
          return u(l.unstable_UserBlocking, function () {
            n("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority(
              e,
              t,
            );
          });
        },
        getCallbackScheduler: function () {
          var e = d.getCurrentPriorityLevel();
          return function (t) {
            return u(e, t);
          };
        },
        getCurrentPriorityLevel: e.unstable_getCurrentPriorityLevel,
        getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE:
          function () {
            var e = d.getCurrentPriorityLevel();
            return function (t) {
              return u(l.unstable_UserBlocking, function () {
                n("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority(
                  e,
                  t,
                );
              });
            };
          },
        makeSchedulerGlobalEntry: function (r, o, a) {
          (r === void 0 && (r = null),
            o === void 0 && (o = !1),
            a === void 0 && (a = !1),
            r != null &&
              n("SchedulerFb-Internals_DO_NOT_USE").unstable_forceFrameRate(r),
            o && d.startEventProfiling(),
            a !== !0 &&
              (t.ScheduleJSWork = function (e) {
                return function () {
                  for (
                    var t = arguments.length, n = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    n[r] = arguments[r];
                  s
                    ? e.apply(void 0, n)
                    : d.deferUserBlockingRunAtCurrentPri_DO_NOT_USE(
                        function () {
                          s = !0;
                          try {
                            e.apply(void 0, n);
                          } finally {
                            s = !1;
                          }
                        },
                      );
                };
              }));
        },
        priorities: l,
        runWithPriority: e.unstable_runWithPriority,
        runWithPriority_DO_NOT_USE: e.unstable_runWithPriority,
        scheduleDelayedCallback_DO_NOT_USE: function (t, n, r) {
          var e = u(t, r, { delay: n });
          return e;
        },
        scheduleImmediatePriCallback: function (t) {
          return u(l.unstable_Immediate, t);
        },
        scheduleLoggingPriCallback: function (t) {
          return u(l.unstable_Low, t);
        },
        scheduleNormalPriCallback: function (t) {
          return u(l.unstable_Normal, t);
        },
        scheduleSpeculativeCallback: function (t) {
          return u(l.unstable_Idle, t);
        },
        scheduleUserBlockingPriCallback: function (t) {
          return u(l.unstable_UserBlocking, t);
        },
        shouldYield: e.unstable_shouldYield,
        startEventProfiling: function () {
          var e,
            t =
              (e = n("SchedulerFb-Internals_DO_NOT_USE").unstable_Profiling) ==
              null
                ? void 0
                : e.startLoggingProfilingEvents;
          typeof t == "function" && t();
        },
        stopEventProfiling: function () {
          var e,
            t =
              (e = n("SchedulerFb-Internals_DO_NOT_USE").unstable_Profiling) ==
              null
                ? void 0
                : e.stopLoggingProfilingEvents;
          return typeof t == "function" ? t() : null;
        },
      };
    a.exports = d;
  },
  null,
);
