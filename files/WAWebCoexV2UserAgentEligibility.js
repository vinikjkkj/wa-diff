__d(
  "WAWebCoexV2UserAgentEligibility",
  [
    "WALogger",
    "WAWebApiDeviceList",
    "WAWebCoexV2BotWid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return (
        e.isFbidBot() && !e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID)
      );
    }
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = yield o("WAWebApiDeviceList").getMyDeviceList();
            return t.devices.some(function (e) {
              return e.isHosted === !0;
            });
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] gate: failed to read self device list",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("coexv2-self-device-list-read-failed"),
              !1
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    ((l.isCoexV2UserAgentTarget = s), (l.isSelfCoexV2Hosted = u));
  },
  98,
);
