__d(
  "WAWebVoipOwnDeviceJids",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebSendMsgDatabaseJob",
    "WAWebUserUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      if (
        !(
          t.type !== "web" ||
          o("WAWebABProps").getABPropConfigValue(
            "enable_1on1_call_transfer_switchable",
          ) !== !0
        )
      )
        try {
          var n = await o("WAWebSendMsgDatabaseJob").getFanOutListJob([
              o("WAWebUserUtils").getMeLidUserOrThrow(),
            ]),
            a = n
              .filter(function (e) {
                return e.isLid();
              })
              .map(function (e) {
                return e.toString({ legacy: !0, formatIncludeDevice: !0 });
              });
          await t.setOwnOtherDeviceJids(a);
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
    }
    l.refreshOwnOtherDeviceJidsForCallTransfer = s;
  },
  98,
);
