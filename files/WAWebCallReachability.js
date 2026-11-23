__d(
  "WAWebCallReachability",
  [
    "WAWebMediaPermissionsUtils",
    "WAWebWamEnumWebPermissionState",
    "WAWebWamEnumWebSettingState",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2e3;
    function s(e) {
      return e === "granted"
        ? o("WAWebWamEnumWebPermissionState").WEB_PERMISSION_STATE.GRANTED
        : e === "denied"
          ? o("WAWebWamEnumWebPermissionState").WEB_PERMISSION_STATE.BLOCKED
          : e === "prompt"
            ? o("WAWebWamEnumWebPermissionState").WEB_PERMISSION_STATE
                .NOT_DECIDED
            : o("WAWebWamEnumWebPermissionState").WEB_PERMISSION_STATE
                .UNSUPPORTED;
    }
    function u(e) {
      return e === "granted"
        ? o("WAWebWamEnumWebPermissionState").WEB_PERMISSION_STATE.GRANTED
        : e === "denied"
          ? o("WAWebWamEnumWebPermissionState").WEB_PERMISSION_STATE.BLOCKED
          : e === "default"
            ? o("WAWebWamEnumWebPermissionState").WEB_PERMISSION_STATE
                .NOT_DECIDED
            : o("WAWebWamEnumWebPermissionState").WEB_PERMISSION_STATE
                .UNSUPPORTED;
    }
    function c(e) {
      return e === !0
        ? o("WAWebWamEnumWebSettingState").WEB_SETTING_STATE.ON
        : e === !1
          ? o("WAWebWamEnumWebSettingState").WEB_SETTING_STATE.OFF
          : o("WAWebWamEnumWebSettingState").WEB_SETTING_STATE.UNKNOWN;
    }
    function d() {
      var e;
      return u((e = globalThis.Notification) == null ? void 0 : e.permission);
    }
    function m(t, n) {
      return new Promise(function (r) {
        var a = self.setTimeout(function () {
          return r(
            o("WAWebWamEnumWebPermissionState").WEB_PERMISSION_STATE
              .UNSUPPORTED,
          );
        }, e);
        o("WAWebMediaPermissionsUtils")
          .queryMediaPermissionStateStrict(t, n)
          .catch(function () {
            return "unknown";
          })
          .then(function (e) {
            (self.clearTimeout(a), r(s(e)));
          });
      });
    }
    async function p(e) {
      var t = await Promise.all([m("camera"), m("microphone")]),
        n = t[0],
        r = t[1];
      return {
        webAtCallPermissionCamera: n,
        webAtCallPermissionMic: r,
        webAtCallPermissionNotification: d(),
        webAtCallSettingBackgroundSync: c(e.backgroundSync),
        webAtCallSettingCallNotifications: c(e.callNotifications),
        webAtCallSettingCallSound: c(e.callSound),
      };
    }
    ((l.PERMISSION_QUERY_TIMEOUT_MS = e),
      (l.toMediaWebPermissionState = s),
      (l.toNotificationWebPermissionState = u),
      (l.toWebSettingState = c),
      (l.readNotificationWebPermissionState = d),
      (l.readMediaWebPermissionState = m),
      (l.readCallReachability = p));
  },
  98,
);
