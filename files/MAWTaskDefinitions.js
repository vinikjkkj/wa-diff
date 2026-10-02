__d(
  "MAWTaskDefinitions",
  [
    "MAWDeleteOldLogsFromDisk",
    "MAWLoggingSwitches",
    "MAWPreKeysCleaner",
    "MAWRotateCAT",
    "MWFBLogger",
    "Promise",
    "WAAPI",
    "WAAbPropsInit",
    "WADbTasks",
    "WAGlobals",
    "WATaskScheduleApi",
    "WATaskScheduler",
    "WATimeUtils",
    "asyncToGeneratorRuntime",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = r("requireDeferred")("WARotateSignedPreKey").__setRef(
        "MAWTaskDefinitions",
      ),
      h = o("MWFBLogger").MWLogger().tags(["MAWTaskDefinitions"]),
      y = 27 * (f = o("WATimeUtils")).DAY_SECONDS,
      C = 7 * f.DAY_SECONDS,
      b = f.DAY_SECONDS / 2,
      v = f.MINUTE_SECONDS * 5,
      S = f.MINUTE_SECONDS * 4,
      R = Object.keys(o("WADbTasks").Tasks);
    function L() {
      return {
        scheduledTimeResolver: {
          get: function (t) {
            return o("WATaskScheduleApi").getTaskScheduledTime(t);
          },
          set: function (t, n) {
            return o("WATaskScheduleApi").setTaskScheduledTime(t, n);
          },
        },
      };
    }
    function E(e) {
      (o("WATaskScheduler").startScheduler(L()),
        R.forEach(function (t) {
          var n = k(t, e);
          o("WATaskScheduler").registerTask(t, n);
        }));
    }
    function k(t, a) {
      switch (t) {
        case "rotateKey":
          return function (t) {
            var r;
            return (
              t
                ? (h.DEBUG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "RotateKeyTask skip first run",
                      ])),
                  ),
                  (r = (_ || (_ = n("Promise"))).resolve()))
                : (r = a
                    .then(function () {
                      return g.load();
                    })
                    .then(function (e) {
                      var t = e.rotateSignedPreKey;
                      return t();
                    })),
              r.then(function () {
                return y;
              })
            );
          };
        case "syncAbProps":
          return function (e) {
            var t = !e;
            return a.then(function () {
              return r("WAAPI")
                .syncAbProps({ sendHash: t })
                .then(function () {
                  return o("WAAbPropsInit").getRefreshSecs();
                });
            });
          };
        case "deleteExpiredKeys":
          return function (e) {
            var t;
            return (
              e
                ? (h.DEBUG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "DeleteExpiredPreKeys skip first run",
                      ])),
                  ),
                  (t = (_ || (_ = n("Promise"))).resolve()))
                : (t = o("MAWPreKeysCleaner").clearExpiredPreKeys()),
              t.then(function () {
                return C;
              })
            );
          };
        case "rotateCAT":
          return function (e) {
            var t;
            return (
              e
                ? (h.DEBUG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "rotateCAT skip first run",
                      ])),
                  ),
                  (t = (_ || (_ = n("Promise"))).resolve()))
                : (t = o("MAWRotateCAT").tryRotateCAT({
                    initiator: "MAWTaskDefinitions::rotateCAT",
                  })),
              t.then(function () {
                return b;
              })
            );
          };
        case "generatePrekeys":
          return function (e) {
            var t;
            return (
              e
                ? (t = r("WAAPI").generateAndUploadPreKeys({
                    reason: "on start",
                  }))
                : (t = (_ || (_ = n("Promise"))).resolve()),
              t.then(function () {
                return o("WATimeUtils").DEFAULT_UNIXTIME;
              })
            );
          };
        case "queryGroups":
          return function (e) {
            return (_ || (_ = n("Promise"))).resolve().then(function () {
              return o("WATimeUtils").DEFAULT_UNIXTIME;
            });
          };
        case "notifyDeviceRegistration":
          return function (e) {
            if (!e)
              return (_ || (_ = n("Promise"))).resolve(
                o("WATimeUtils").DEFAULT_UNIXTIME,
              );
            var t = o("WAGlobals").getMyUserJid();
            return o("WAGlobals")
              .getDependencies()
              .loadRecentParticipants(
                o("WAGlobals").getConfig().maxUsersForNotifyDeviceChange(),
                t,
              )
              .then(function (e) {
                if (e.size === 0) return (_ || (_ = n("Promise"))).resolve();
                var t = o("MWFBLogger")
                  .MWLogger()
                  .tags(["notifyDeviceRegistration"]);
                return r("WAAPI")
                  .notifyDeviceChange({ users: e })
                  .then(function () {
                    t.DEBUG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "Notified ",
                          " contacts of device change",
                        ])),
                      e.size,
                    );
                  })
                  .catch(function (n) {
                    (t.DEBUG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to notify ",
                          " contacts of device change",
                        ])),
                      e.size,
                    ),
                      t.MUSTFIX(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            "",
                          ])),
                        String(n),
                      ));
                  });
              })
              .then(function () {
                return o("WATimeUtils").DEFAULT_UNIXTIME;
              });
          };
        case "cleanupExcessiveLogs":
          return (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return o("MAWLoggingSwitches").removeLoggingFromBridge
                  ? (e
                      ? yield o(
                          "MAWDeleteOldLogsFromDisk",
                        ).deleteOldLogsOnStartup()
                      : yield o("MAWDeleteOldLogsFromDisk").deleteOldLogs(),
                    v)
                  : o("WATimeUtils").DEFAULT_UNIXTIME;
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        case "syncMedia":
          return (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return (
                  e &&
                    h.DEBUG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "syncMedia task: skip first run",
                        ])),
                    ),
                  S
                );
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
      }
    }
    ((l.ROTATE_SIGNED_PRE_KEY_TIMESPAN = y),
      (l.DELETE_EXPIRED_KEYS_TIMESPAN = C),
      (l.ROTATE_CAT_TIMESPAN = b),
      (l.DO_NOT_RESCHEDULE = f.DEFAULT_UNIXTIME),
      (l.TASK_TYPES = R),
      (l.getSchedulerOptions = L),
      (l.registerTasks = E),
      (l.getTaskExecution = k));
  },
  98,
);
