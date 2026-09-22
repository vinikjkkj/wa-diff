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
      p = 25 * o("WATimeUtils").HOUR_SECONDS,
      _ = (function () {
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
      f = (function () {
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
                      S(n) ||
                      (R(e, a, n, r)
                        ? i.set(
                            o("WAWebWidFactory").createUserWidOrThrow(n.id),
                            n,
                          )
                        : L({
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
                return E(t);
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
                (m || (m = n("Promise"))).resolve())
              : (m || (m = n("Promise"))).all(
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
            return (m || (m = n("Promise"))).resolve();
          }),
          e
        );
      })(),
      g = "advDeviceInfoCheck",
      h;
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          h != null && (self.clearTimeout(h), (h = null));
          var e = o("WATimeUtils").unixTimeWithoutClockSkewCorrection(),
            t = yield o(
              "WAWebLastADVCheckTimeApi",
            ).getLastADVDeviceInfoCheckTime(),
            r = 0,
            a = function () {
              return (m || (m = n("Promise"))).resolve();
            };
          (t != null &&
            ((r = Math.max(o("WATimeUtils").DAY_SECONDS - (e - t), 0)),
            (a = function () {
              return v();
            })),
            (h = self.setTimeout(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  yield a();
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
                h = null;
                var e = o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
                (o("WAWebLastADVCheckTimeApi").setLastADVDeviceInfoCheckTime(e),
                  o("WAWebApiTasksScheduledTime").updateTaskScheduledTime(
                    g,
                    o("WATimeUtils").castToUnixTime(e),
                  ),
                  yield y());
              }),
              r * 1e3,
            )));
        })),
        C.apply(this, arguments)
      );
    }
    var b;
    function v() {
      return (
        b == null && (b = new _(new f())),
        b.run(o("WATimeUtils").unixTimeWithoutClockSkewCorrection())
      );
    }
    function S(e) {
      return (
        e.devices.length === 1 &&
        e.devices[0].id === o("WAJids").DEFAULT_DEVICE_ID
      );
    }
    function R(e, t, n, r) {
      return e - n.timestamp >= t
        ? !0
        : n.expectedTsUpdateTs != null
          ? e - n.expectedTsUpdateTs >= p && n.expectedTsLastDeviceJobTs !== r
          : !1;
    }
    function L(e) {
      var t = e.currentTs,
        n = e.deviceListRow,
        r = e.numSecondsCloseExpiration;
      return t - n.timestamp >= r
        ? !0
        : n.expectedTs != null
          ? n.expectedTs > n.timestamp
          : !1;
    }
    function E(e) {
      return o("WAWebUserPrefsMeUser").isMeAccount(e)
        ? o("WAWebABProps").getABPropConfigValue("web_self_adv_daily_use_lid")
          ? e.equals(o("WAWebUserPrefsMeUser").getMeLidUserOrThrow())
          : !0
        : !1;
    }
    ((l.AdvToSystemBridgeImpl = f),
      (l.scheduleAdvDeviceInfoCheck = y),
      (l.runAdvDeviceInfoCheck = v));
  },
  98,
);
