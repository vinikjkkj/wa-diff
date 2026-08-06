__d(
  "WAWebCoexV2RelayEligibility",
  [
    "WALogger",
    "WAWebApiDeviceList",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2HostedContactUtils",
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
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!e.isUser() || e.isBot() || e.isFbidBot()) return !1;
          var t =
            ((yield o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(e)) &&
              !(yield o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(
                e,
              ))) ||
            (yield c());
          return t ? o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() : !1;
        })),
        u.apply(this, arguments)
      );
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebUserPrefsMeUser").getMaybeMeLidUser() == null) return !1;
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
                      "[coexv2] relay-eligibility: failed to read self device list",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("coexv2-self-device-list-read-failed"),
              !1
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.genIsCoexV2RelayEligibleSend = s;
  },
  98,
);
