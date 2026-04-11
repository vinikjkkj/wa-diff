__d(
  "WAWebHandleDeviceSwitchingNotification",
  [
    "WADeprecatedWapParser",
    "WALogger",
    "WATimeUtils",
    "WAWap",
    "WAWebBackendApi",
    "WAWebUserPrefsMeUser",
    "WAWebWaOldCodeWamEvent",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new (r("WADeprecatedWapParser"))(
        "incomingDeviceSwitchingNotificationParser",
        function (e) {
          e.assertTag("notification");
          var t = e.attrString("id"),
            n = e.attrWapJid("from"),
            r = e.child("wa_old_registration"),
            o = r.attrString("code"),
            a = r.attrTime("expiry_t"),
            i = r.attrTime("ts"),
            l = r.attrString("device_id");
          return {
            stanzaId: t,
            from: n,
            code: o,
            expiryTime: a,
            ts: i,
            deviceId: l,
          };
        },
      );
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = u.parse(t);
          if (n.error)
            throw (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    "",
                  ])),
                n.error.toString(),
              ),
              n.error
            );
          var r = n.success,
            a = o("WAWap").wap("ack", {
              id: o("WAWap").CUSTOM_STRING(r.stanzaId),
              class: "notification",
              type: "registration",
              to: r.from,
            }),
            i = r.expiryTime,
            l = o("WATimeUtils").unixTime();
          if (l > i)
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "OTP code has expired, expiry time: ",
                    " and current time: ",
                    "",
                  ])),
                i,
                l,
              ),
              a
            );
          var c = r.code;
          o("WAWebBackendApi").frontendFireAndForget("showDeviceSwitchOtp", {
            otpCode: c,
          });
          var d = o("WAWebUserPrefsMeUser")
            .getMeDevicePnOrThrow_DO_NOT_USE()
            .getDeviceId()
            .toString();
          return (
            new (o("WAWebWaOldCodeWamEvent").WaOldCodeWamEvent)({
              deviceId: d,
            }).commit(),
            a
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.default = c;
  },
  98,
);
