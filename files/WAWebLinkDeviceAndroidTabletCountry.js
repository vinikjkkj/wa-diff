__d(
  "WAWebLinkDeviceAndroidTabletCountry",
  [
    "Promise",
    "WALogger",
    "WASmaxMdGetCountryCodeRPC",
    "WAWebConnModel",
    "WAWebLinkDeviceQplHelpLinkEvent",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield d();
          n != null &&
            o(
              "WAWebLinkDeviceQplHelpLinkEvent",
            ).WAWebLinkDeviceQplHelpLinkEvent(
              o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType
                .ANDROID_TABLET_OVERLAY_COUNTRY,
              e,
              void 0,
              t,
              n,
            );
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            yield p();
            var t = yield o(
              "WASmaxMdGetCountryCodeRPC",
            ).sendGetCountryCodeRPC();
            return t.name === "GetCountryCodeResponseGetCountryCodeResponse"
              ? t.value.countryCodeIso
              : null;
          } catch (t) {
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[android-tablet-overlay] country lookup failed: ",
                    "",
                  ])),
                t,
              ),
              null
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return o("WAWebConnModel").Conn.ref != null &&
        o("WAWebConnModel").Conn.ref !== ""
        ? (s || (s = n("Promise"))).resolve()
        : new (s || (s = n("Promise")))(function (e) {
            o("WAWebConnModel").Conn.once("change:ref", function () {
              return e();
            });
          });
    }
    l.logAndroidTabletOverlayCountry = u;
  },
  98,
);
