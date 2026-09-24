__d(
  "WAWebAdvDeviceInfoCheckJob",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAdvStoredTimestampExpiredWamEvent",
    "WAWebApiDeviceList",
    "WAWebApiPendingDeviceSync",
    "WAWebApiTasksScheduledTime",
    "WAWebCoreActionsODS",
    "WAWebCurrentUser",
    "WAWebIdentityUpdateDeviceTableApi",
    "WAWebLastADVCheckTimeApi",
    "WAWebLogoutReasonConstants",
    "WAWebSocketLogoutJob",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 25 * o("WATimeUtils").HOUR_SECONDS,
      f = (function () {
        function t(e) {
          this.advToSystemBridge = e;
        }
        var a = t.prototype;
        return (
          (a.run = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[adv] running device info check with t=",
                      "",
                    ])),
                  t,
                );
                var n = this.advToSystemBridge,
                  a = yield n.getUsersForExpiration(t),
                  i = a.usersCloseToExpiration,
                  l = a.usersExpired;
                (n.removeCompanions(l).catch(function (e) {
                  return o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to remove companions",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("adv-remove-companions-failed");
                }),
                  n.sendADVStoredTimestampExpiredEvents(l, t));
                var u = Array.from(l.keys())
                  .concat(Array.from(i.keys()))
                  .filter(function (e) {
                    return !n.canRemoveUserDevices(e);
                  });
                return (
                  n.sendOrQueueDeviceUsyncQuery(u).catch(function (e) {}),
                  n.recordLocalTimestamp()
                );
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          t
        );
      })(),
      g = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.getNumDaysKeyIndexListExpiration = function () {
            return o("WAWebABProps").getABPropConfigValue(
              "num_days_key_index_list_expiration",
            );
          }),
          (t.getNumDaysBeforeDeviceExpiryCheck = function () {
            return o("WAWebABProps").getABPropConfigValue(
              "num_days_before_device_expiry_check",
            );
          }),
          (t.getUsersForExpiration = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  n = yield o("WAWebApiDeviceList").getAllDeviceLists(),
                  r = yield o(
                    "WAWebLastADVCheckTimeApi",
                  ).getLastADVDeviceInfoCheckTime(),
                  a =
                    this.getNumDaysKeyIndexListExpiration() *
                    o("WATimeUtils").DAY_SECONDS,
                  i = new Map(),
                  l = new Map();
                return (
                  n.forEach(function (n) {
                    n.deleted ||
                      R(n) ||
                      (L(e, a, n, r)
                        ? i.set(
                            o("WAWebWidFactory").createUserWidOrThrow(n.id),
                            n,
                          )
                        : E({
                            currentTs: e,
                            deviceListRow: n,
                            numSecondsCloseExpiration:
                              a -
                              t.getNumDaysBeforeDeviceExpiryCheck() *
                                o("WATimeUtils").DAY_SECONDS,
                          }) &&
                          l.set(
                            o("WAWebWidFactory").createUserWidOrThrow(n.id),
                            n,
                          ));
                  }),
                  { usersExpired: i, usersCloseToExpiration: l }
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.sendADVStoredTimestampExpiredEvents = function (t, n) {
            var e = this;
            t.forEach(function (t) {
              var r =
                n -
                (t.timestamp +
                  e.getNumDaysKeyIndexListExpiration() *
                    o("WATimeUtils").DAY_SECONDS);
              if (!(r < 0)) {
                var a = Math.round(r / o("WATimeUtils").HOUR_SECONDS);
                new (o(
                  "WAWebAdvStoredTimestampExpiredWamEvent",
                ).AdvStoredTimestampExpiredWamEvent)({
                  advExpireTimeInHours: a,
                }).commit();
              }
            });
          }),
          (t.sendOrQueueDeviceUsyncQuery = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return (
                  yield o(
                    "WAWebApiPendingDeviceSync",
                  ).addUserToPendingDeviceSync(
                    e.map(function (e) {
                      return e.toString();
                    }),
                  ),
                  o("WAWebApiPendingDeviceSync").doPendingDeviceSync()
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.canRemoveUserDevices = function (t) {
            return !1;
          }),
          (t.removeCompanions = function (t) {
            var e = Array.from(t.entries()),
              r = e.some(function (e) {
                var t = e[0],
                  n = e[1];
                return k(t);
              });
            return r &&
              o("WAWebABProps").getABPropConfigValue(
                "web_adv_logout_on_self_device_list_expired",
              )
              ? (o("WAWebCurrentUser").isEmployee()
                  ? o("WALogger")
                      .LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[adv] logging out due to own expired device",
                          ])),
                      )
                      .sendLogs("web-own-device-list-expired")
                  : o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[adv] logging out due to own expired device",
                        ])),
                    ),
                o("WAWebCoreActionsODS").logSessionForcedLogout(),
                o("WAWebSocketLogoutJob").socketLogout(
                  o("WAWebLogoutReasonConstants").LogoutReason.InvalidAdvStatus,
                ),
                (p || (p = n("Promise"))).resolve())
              : (p || (p = n("Promise"))).all(
                  Array.from(t.entries(), function (e) {
                    var t = e[0],
                      n = e[1];
                    return o(
                      "WAWebIdentityUpdateDeviceTableApi",
                    ).clearDeviceRecord(t, n.devices);
                  }),
                );
          }),
          (t.recordLocalTimestamp = function () {
            return (p || (p = n("Promise"))).resolve();
          }),
          e
        );
      })(),
      h = "advDeviceInfoCheck",
      y;
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          y != null && (self.clearTimeout(y), (y = null));
          var e = o("WATimeUtils").unixTimeWithoutClockSkewCorrection(),
            t = yield o(
              "WAWebLastADVCheckTimeApi",
            ).getLastADVDeviceInfoCheckTime(),
            a = 0,
            i = function () {
              return (p || (p = n("Promise"))).resolve();
            };
          (t != null &&
            ((a = Math.max(o("WATimeUtils").DAY_SECONDS - (e - t), 0)),
            (i = function () {
              return S();
            })),
            (y = self.setTimeout(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  yield i();
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "error running the adv device check job",
                        ])),
                    )
                    .tags("automated-device-verification");
                }
                y = null;
                var e = o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
                (o("WAWebLastADVCheckTimeApi").setLastADVDeviceInfoCheckTime(e),
                  o("WAWebApiTasksScheduledTime")
                    .updateTaskScheduledTime(
                      h,
                      o("WATimeUtils").castToUnixTime(e),
                    )
                    .catch(function (e) {
                      return o("WALogger")
                        .ERROR(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "Failed to update task scheduled time",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("adv-update-task-scheduled-time-failed");
                    }),
                  yield C());
              }),
              a * 1e3,
            )));
        })),
        b.apply(this, arguments)
      );
    }
    var v;
    function S() {
      return (
        v == null && (v = new f(new g())),
        v.run(o("WATimeUtils").unixTimeWithoutClockSkewCorrection())
      );
    }
    function R(e) {
      return (
        e.devices.length === 1 &&
        e.devices[0].id === o("WAJids").DEFAULT_DEVICE_ID
      );
    }
    function L(e, t, n, r) {
      return e - n.timestamp >= t
        ? !0
        : n.expectedTsUpdateTs != null
          ? e - n.expectedTsUpdateTs >= _ && n.expectedTsLastDeviceJobTs !== r
          : !1;
    }
    function E(e) {
      var t = e.currentTs,
        n = e.deviceListRow,
        r = e.numSecondsCloseExpiration;
      return t - n.timestamp >= r
        ? !0
        : n.expectedTs != null
          ? n.expectedTs > n.timestamp
          : !1;
    }
    function k(e) {
      return o("WAWebUserPrefsMeUser").isMeAccount(e)
        ? o("WAWebABProps").getABPropConfigValue("web_self_adv_daily_use_lid")
          ? e.equals(o("WAWebUserPrefsMeUser").getMeLidUserOrThrow())
          : !0
        : !1;
    }
    ((l.AdvToSystemBridgeImpl = g),
      (l.scheduleAdvDeviceInfoCheck = C),
      (l.runAdvDeviceInfoCheck = S));
  },
  98,
);
