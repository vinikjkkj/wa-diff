__d(
  "MAWTaskDefinitions",
  [
    "MAWDeleteOldLogsFromDisk",
    "MAWLoggingSwitches",
    "MAWPreKeysCleaner",
    "MAWRotateCAT",
    "MAWTaskScheduledTimeResolver",
    "MWFBLogger",
    "WAAPI",
    "WAAbPropsInit",
    "WADbTasks",
    "WAGlobals",
    "WATaskScheduler",
    "WATimeUtils",
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
      _ = r("requireDeferred")("WARotateSignedPreKey").__setRef(
        "MAWTaskDefinitions",
      ),
      f = o("MWFBLogger").MWLogger().tags(["MAWTaskDefinitions"]),
      g = 27 * (p = o("WATimeUtils")).DAY_SECONDS,
      h = 7 * p.DAY_SECONDS,
      y = p.DAY_SECONDS / 2,
      C = p.MINUTE_SECONDS * 5,
      b = Object.keys(o("WADbTasks").Tasks);
    function v() {
      return {
        scheduledTimeResolver: o("MAWTaskScheduledTimeResolver")
          .scheduledTimeResolver,
      };
    }
    function S(e, t) {
      return async function (n) {
        o("MAWTaskScheduledTimeResolver").bumpRecurringTaskCounter(
          e + "." + (n ? "first_run" : "run"),
        );
        try {
          return await t(n);
        } catch (t) {
          throw (
            o("MAWTaskScheduledTimeResolver").bumpRecurringTaskCounter(
              e + ".fail",
            ),
            t
          );
        }
      };
    }
    function R(e) {
      (o("WATaskScheduler").startScheduler(v()),
        o("MAWTaskScheduledTimeResolver").bumpRecurringTaskCounter("register"),
        b.forEach(function (t) {
          var n = L(t, e);
          o("WATaskScheduler").registerTask(t, S(t, n));
        }));
    }
    function L(t, n) {
      switch (t) {
        case "rotateKey":
          return function (t) {
            var r;
            return (
              t
                ? (f.DEBUG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "RotateKeyTask skip first run",
                      ])),
                  ),
                  (r = Promise.resolve()))
                : (r = n
                    .then(function () {
                      return _.load();
                    })
                    .then(function (e) {
                      var t = e.rotateSignedPreKey;
                      return t();
                    })),
              r.then(function () {
                return g;
              })
            );
          };
        case "syncAbProps":
          return function (e) {
            var t = !e;
            return n.then(function () {
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
                ? (f.DEBUG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "DeleteExpiredPreKeys skip first run",
                      ])),
                  ),
                  (t = Promise.resolve()))
                : (t = o("MAWPreKeysCleaner").clearExpiredPreKeys()),
              t.then(function () {
                return h;
              })
            );
          };
        case "rotateCAT":
          return function (e) {
            var t;
            return (
              e
                ? (f.DEBUG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "rotateCAT skip first run",
                      ])),
                  ),
                  (t = Promise.resolve()))
                : (t = o("MAWRotateCAT").tryRotateCAT({
                    initiator: "MAWTaskDefinitions::rotateCAT",
                  })),
              t.then(function () {
                return y;
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
                : (t = Promise.resolve()),
              t.then(function () {
                return o("WATimeUtils").DEFAULT_UNIXTIME;
              })
            );
          };
        case "notifyDeviceRegistration":
          return function (e) {
            if (!e) return Promise.resolve(o("WATimeUtils").DEFAULT_UNIXTIME);
            var t = o("WAGlobals").getMyUserJid();
            return o("WAGlobals")
              .getDependencies()
              .loadRecentParticipants(
                o("WAGlobals").getConfig().maxUsersForNotifyDeviceChange(),
                t,
              )
              .then(function (e) {
                if (e.size === 0) return Promise.resolve();
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
          return async function (e) {
            return o("MAWLoggingSwitches").removeLoggingFromBridge
              ? (e
                  ? await o("MAWDeleteOldLogsFromDisk").deleteOldLogsOnStartup()
                  : await o("MAWDeleteOldLogsFromDisk").deleteOldLogs(),
                C)
              : o("WATimeUtils").DEFAULT_UNIXTIME;
          };
      }
    }
    ((l.ROTATE_SIGNED_PRE_KEY_TIMESPAN = g),
      (l.DELETE_EXPIRED_KEYS_TIMESPAN = h),
      (l.ROTATE_CAT_TIMESPAN = y),
      (l.DO_NOT_RESCHEDULE = p.DEFAULT_UNIXTIME),
      (l.TASK_TYPES = b),
      (l.getSchedulerOptions = v),
      (l.registerTasks = R),
      (l.getTaskExecution = L));
  },
  98,
);
