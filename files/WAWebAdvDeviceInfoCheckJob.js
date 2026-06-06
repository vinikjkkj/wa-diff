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
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 25 * o("WATimeUtils").HOUR_SECONDS,
      m = (function () {
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
              r = await t.getUsersForExpiration(n),
              a = r.usersCloseToExpiration,
              i = r.usersExpired;
            (t.removeCompanions(i),
              t.sendADVStoredTimestampExpiredEvents(i, n));
            var l = Array.from(i.keys())
              .concat(Array.from(a.keys()))
              .filter(function (e) {
                return !t.canRemoveUserDevices(e);
              });
            return (
              t.sendOrQueueDeviceUsyncQuery(l).catch(function (e) {}),
              t.recordLocalTimestamp()
            );
          }),
          t
        );
      })(),
      p = (function () {
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
                  C(n) ||
                  (b(t, a, n, r)
                    ? i.set(o("WAWebWidFactory").createUserWidOrThrow(n.id), n)
                    : v(
                        t,
                        a -
                          e.getNumDaysBeforeDeviceExpiryCheck() *
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
                return t.user === o("WAWebUserPrefsMeUser").getMeUser().user;
              });
            return n &&
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
      _ = "advDeviceInfoCheck",
      f;
    async function g() {
      f != null && (self.clearTimeout(f), (f = null));
      var e = o("WATimeUtils").unixTimeWithoutClockSkewCorrection(),
        t = await o("WAWebLastADVCheckTimeApi").getLastADVDeviceInfoCheckTime(),
        n = 0,
        r = function () {
          return Promise.resolve();
        };
      (t != null &&
        ((n = Math.max(o("WATimeUtils").DAY_SECONDS - (e - t), 0)),
        (r = function () {
          return y();
        })),
        (f = self.setTimeout(async function () {
          try {
            await r();
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
          f = null;
          var e = o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
          (o("WAWebLastADVCheckTimeApi").setLastADVDeviceInfoCheckTime(e),
            o("WAWebApiTasksScheduledTime").updateTaskScheduledTime(
              _,
              o("WATimeUtils").castToUnixTime(e),
            ),
            g());
        }, n * 1e3)));
    }
    var h;
    function y() {
      return (
        h == null && (h = new m(new p())),
        h.run(o("WATimeUtils").unixTimeWithoutClockSkewCorrection())
      );
    }
    function C(e) {
      return (
        e.devices.length === 1 &&
        e.devices[0].id === o("WAJids").DEFAULT_DEVICE_ID
      );
    }
    function b(e, t, n, r) {
      return e - n.timestamp >= t
        ? !0
        : n.expectedTsUpdateTs != null
          ? e - n.expectedTsUpdateTs >= d && n.expectedTsLastDeviceJobTs !== r
          : !1;
    }
    function v(e, t, n) {
      return e - n.timestamp >= t
        ? !0
        : n.expectedTs != null
          ? n.expectedTs > n.timestamp
          : !1;
    }
    ((l.AdvToSystemBridgeImpl = p),
      (l.scheduleAdvDeviceInfoCheck = g),
      (l.runAdvDeviceInfoCheck = y));
  },
  98,
);
