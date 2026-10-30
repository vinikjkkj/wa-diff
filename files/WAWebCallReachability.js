__d(
  "WAWebCallReachability",
  [
    "Promise",
    "WAWebMediaPermissionsUtils",
    "WAWebWamEnumWebPermissionState",
    "WAWebWamEnumWebSettingState",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 2e3;
    function u(e) {
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
    function c(e) {
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
    function d(e) {
      return e === !0
        ? o("WAWebWamEnumWebSettingState").WEB_SETTING_STATE.ON
        : e === !1
          ? o("WAWebWamEnumWebSettingState").WEB_SETTING_STATE.OFF
          : o("WAWebWamEnumWebSettingState").WEB_SETTING_STATE.UNKNOWN;
    }
    function m() {
      var e;
      return c((e = globalThis.Notification) == null ? void 0 : e.permission);
    }
    function p(t, r) {
      return new (e || (e = n("Promise")))(function (e) {
        var n = self.setTimeout(function () {
          return e(
            o("WAWebWamEnumWebPermissionState").WEB_PERMISSION_STATE
              .UNSUPPORTED,
          );
        }, s);
        o("WAWebMediaPermissionsUtils")
          .queryMediaPermissionStateStrict(t, r)
          .catch(function () {
            return "unknown";
          })
          .then(function (t) {
            (self.clearTimeout(n), e(u(t)));
          });
      });
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = yield (e || (e = n("Promise"))).all([
              p("camera"),
              p("microphone"),
            ]),
            o = r[0],
            a = r[1];
          return {
            webAtCallPermissionCamera: o,
            webAtCallPermissionMic: a,
            webAtCallPermissionNotification: m(),
            webAtCallSettingBackgroundSync: d(t.backgroundSync),
            webAtCallSettingCallNotifications: d(t.callNotifications),
            webAtCallSettingCallSound: d(t.callSound),
          };
        })),
        f.apply(this, arguments)
      );
    }
    ((l.PERMISSION_QUERY_TIMEOUT_MS = s),
      (l.toMediaWebPermissionState = u),
      (l.toNotificationWebPermissionState = c),
      (l.toWebSettingState = d),
      (l.readNotificationWebPermissionState = m),
      (l.readMediaWebPermissionState = p),
      (l.readCallReachability = _));
  },
  98,
);
