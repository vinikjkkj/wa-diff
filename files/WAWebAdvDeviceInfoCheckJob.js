__d(
  "WAWebAdvDeviceInfoCheckJob",
  [
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
    "WAWebUserUtils",
    "WAWebWidFactory",
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
        var n = t.prototype;
        return (
          (n.run = async function (n) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[adv] running device info check with t=",
                  "",
                ])),
              n,
            );
            var t = this.advToSystemBridge,
              a = await t.getUsersForExpiration(n),
              i = a.usersCloseToExpiration,
              l = a.usersExpired;
            (t.removeCompanions(l).catch(function (e) {
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
              t.sendADVStoredTimestampExpiredEvents(l, n));
            var u = Array.from(l.keys())
              .concat(Array.from(i.keys()))
              .filter(function (e) {
                return !t.canRemoveUserDevices(e);
              });
            return (
              t.sendOrQueueDeviceUsyncQuery(u).catch(function (e) {}),
              t.recordLocalTimestamp()
            );
          }),
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
          (t.getUsersForExpiration = async function (t) {
            var e = this,
              n = await o("WAWebApiDeviceList").getAllDeviceLists(),
              r = await o(
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
                  (S(t, a, n, r)
                    ? i.set(o("WAWebWidFactory").createUserWidOrThrow(n.id), n)
                    : R({
                        currentTs: t,
                        deviceListRow: n,
                        numSecondsCloseExpiration:
                          a -
                          e.getNumDaysBeforeDeviceExpiryCheck() *
                            o("WATimeUtils").DAY_SECONDS,
                      }) &&
                      l.set(
                        o("WAWebWidFactory").createUserWidOrThrow(n.id),
                        n,
                      ));
              }),
              { usersExpired: i, usersCloseToExpiration: l }
            );
          }),
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
          (t.sendOrQueueDeviceUsyncQuery = async function (t) {
            return (
              await o("WAWebApiPendingDeviceSync").addUserToPendingDeviceSync(
                t.map(function (e) {
                  return e.toString();
                }),
              ),
              o("WAWebApiPendingDeviceSync").doPendingDeviceSync()
            );
          }),
          (t.canRemoveUserDevices = function (t) {
            return !1;
          }),
          (t.removeCompanions = function (t) {
            var e = Array.from(t.entries()),
              n = e.some(function (e) {
                var t = e[0],
                  n = e[1];
                return L(t);
              });
            return n &&
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
                Promise.resolve())
              : Promise.all(
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
            return Promise.resolve();
          }),
          e
        );
      })(),
      g = "advDeviceInfoCheck",
      h;
    async function y() {
      h != null && (self.clearTimeout(h), (h = null));
      var e = o("WATimeUtils").unixTimeWithoutClockSkewCorrection(),
        t = await o("WAWebLastADVCheckTimeApi").getLastADVDeviceInfoCheckTime(),
        n = 0,
        a = function () {
          return Promise.resolve();
        };
      (t != null &&
        ((n = Math.max(o("WATimeUtils").DAY_SECONDS - (e - t), 0)),
        (a = function () {
          return b();
        })),
        (h = self.setTimeout(async function () {
          try {
            await a();
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
            o("WAWebApiTasksScheduledTime")
              .updateTaskScheduledTime(g, o("WATimeUtils").castToUnixTime(e))
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
            await y());
        }, n * 1e3)));
    }
    var C;
    function b() {
      return (
        C == null && (C = new _(new f())),
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
          ? e - n.expectedTsUpdateTs >= p && n.expectedTsLastDeviceJobTs !== r
          : !1;
    }
    function R(e) {
      var t = e.currentTs,
        n = e.deviceListRow,
        r = e.numSecondsCloseExpiration;
      return t - n.timestamp >= r
        ? !0
        : n.expectedTs != null
          ? n.expectedTs > n.timestamp
          : !1;
    }
    function L(e) {
      return o("WAWebUserUtils").isMeAccount(e)
        ? o("WAWebABProps").getABPropConfigValue("web_self_adv_daily_use_lid")
          ? e.equals(o("WAWebUserUtils").getMeLidUserOrThrow())
          : !0
        : !1;
    }
    ((l.AdvToSystemBridgeImpl = f), (l.scheduleAdvDeviceInfoCheck = y));
  },
  98,
);
