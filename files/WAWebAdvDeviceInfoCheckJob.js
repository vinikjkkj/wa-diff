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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 25 * o("WATimeUtils").HOUR_SECONDS,
      p = (function () {
        function t(e) {
          this.advToSystemBridge = e;
        }
        var r = t.prototype;
        return (
          (r.run = (function () {
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
                  r = yield n.getUsersForExpiration(t),
                  a = r.usersCloseToExpiration,
                  i = r.usersExpired;
                (n.removeCompanions(i),
                  n.sendADVStoredTimestampExpiredEvents(i, t));
                var l = Array.from(i.keys())
                  .concat(Array.from(a.keys()))
                  .filter(function (e) {
                    return !n.canRemoveUserDevices(e);
                  });
                return (
                  n.sendOrQueueDeviceUsyncQuery(l).catch(function (e) {}),
                  n.recordLocalTimestamp()
                );
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          t
        );
      })(),
      _ = (function () {
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
                      v(n) ||
                      (S(e, a, n, r)
                        ? i.set(
                            o("WAWebWidFactory").createUserWidOrThrow(n.id),
                            n,
                          )
                        : R(
                            e,
                            a -
                              t.getNumDaysBeforeDeviceExpiryCheck() *
                                o("WATimeUtils").DAY_SECONDS,
                            n,
                          ) &&
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
                return (
                  t.user ===
                  o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().user
                );
              });
            return r &&
              o("WAWebABProps").getABPropConfigValue(
                "web_adv_logout_on_self_device_list_expired",
              )
              ? (o("WAWebCurrentUser").isEmployee()
                  ? o("WALogger")
                      .LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[adv] logging out due to own expired device",
                          ])),
                      )
                      .sendLogs("web-own-device-list-expired")
                  : o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[adv] logging out due to own expired device",
                        ])),
                    ),
                o("WAWebCoreActionsODS").logSessionForcedLogout(),
                o("WAWebSocketLogoutJob").socketLogout(
                  o("WAWebLogoutReasonConstants").LogoutReason.InvalidAdvStatus,
                ),
                (d || (d = n("Promise"))).resolve())
              : (d || (d = n("Promise"))).all(
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
            return (d || (d = n("Promise"))).resolve();
          }),
          e
        );
      })(),
      f = "advDeviceInfoCheck",
      g;
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          g != null && (self.clearTimeout(g), (g = null));
          var e = o("WATimeUtils").unixTimeWithoutClockSkewCorrection(),
            t = yield o(
              "WAWebLastADVCheckTimeApi",
            ).getLastADVDeviceInfoCheckTime(),
            r = 0,
            a = function () {
              return (d || (d = n("Promise"))).resolve();
            };
          (t != null &&
            ((r = Math.max(o("WATimeUtils").DAY_SECONDS - (e - t), 0)),
            (a = function () {
              return b();
            })),
            (g = self.setTimeout(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  yield a();
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "error running the adv device check job",
                        ])),
                    )
                    .tags("automated-device-verification");
                }
                g = null;
                var e = o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
                (o("WAWebLastADVCheckTimeApi").setLastADVDeviceInfoCheckTime(e),
                  o("WAWebApiTasksScheduledTime").updateTaskScheduledTime(
                    f,
                    o("WATimeUtils").castToUnixTime(e),
                  ),
                  h());
              }),
              r * 1e3,
            )));
        })),
        y.apply(this, arguments)
      );
    }
    var C;
    function b() {
      return (
        C == null && (C = new p(new _())),
        C.run(o("WATimeUtils").unixTimeWithoutClockSkewCorrection())
      );
    }
    function v(e) {
      return (
        e.devices.length === 1 &&
        e.devices[0].id === o("WAJids").DEFAULT_DEVICE_ID
      );
    }
    function S(e, t, n, r) {
      return e - n.timestamp >= t
        ? !0
        : n.expectedTsUpdateTs != null
          ? e - n.expectedTsUpdateTs >= m && n.expectedTsLastDeviceJobTs !== r
          : !1;
    }
    function R(e, t, n) {
      return e - n.timestamp >= t
        ? !0
        : n.expectedTs != null
          ? n.expectedTs > n.timestamp
          : !1;
    }
    ((l.AdvToSystemBridgeImpl = _),
      (l.scheduleAdvDeviceInfoCheck = h),
      (l.runAdvDeviceInfoCheck = b));
  },
  98,
);
