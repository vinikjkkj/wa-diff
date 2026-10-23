__d(
  "WAWebVoipOwnDeviceJids",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebSendMsgDatabaseJob",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            !(
              t.type !== "web" ||
              o("WAWebABProps").getABPropConfigValue(
                "enable_1on1_call_transfer_switchable",
              ) !== !0
            )
          )
            try {
              var n = yield o("WAWebSendMsgDatabaseJob").getFanOutListJob([
                  o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
                ]),
                a = n
                  .filter(function (e) {
                    return e.isLid();
                  })
                  .map(function (e) {
                    return e.toString({ legacy: !0, formatIncludeDevice: !0 });
                  });
              yield t.setOwnOtherDeviceJids(a);
            } catch (t) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: refreshOwnOtherDeviceJidsForCallTransfer failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("voip-own-device-jids-refresh-failed");
            }
        })),
        u.apply(this, arguments)
      );
    }
    l.refreshOwnOtherDeviceJidsForCallTransfer = s;
  },
  98,
);
