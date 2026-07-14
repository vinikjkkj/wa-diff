__d(
  "WAWebCoexV2RelayEligibility",
  [
    "WALogger",
    "WAWebApiDeviceList",
    "WAWebCoexV2GatingUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            !t.isUser() ||
            t.isBot() ||
            t.isFbidBot() ||
            o("WAWebUserPrefsMeUser").getMaybeMeLidUser() == null
          )
            return !1;
          var n = !1;
          try {
            var a = yield o("WAWebApiDeviceList").getMyDeviceList();
            n = a.devices.some(function (e) {
              return e.isHosted === !0;
            });
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] relay-eligibility: failed to read self device list",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("coexv2-self-device-list-read-failed"),
              !1
            );
          }
          return n ? o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() : !1;
        })),
        u.apply(this, arguments)
      );
    }
    l.genIsCoexV2RelayEligibleSend = s;
  },
  98,
);
