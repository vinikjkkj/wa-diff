__d(
  "WAWebLinkDeviceAndroidTabletCountry",
  [
    "WALogger",
    "WASmaxMdGetCountryCodeRPC",
    "WAWebConnModel",
    "WAWebLinkDeviceQplHelpLinkEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e, t) {
      var n = await u();
      n != null &&
        o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(
          o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType
            .ANDROID_TABLET_OVERLAY_COUNTRY,
          e,
          void 0,
          t,
          n,
        );
    }
    async function u() {
      try {
        await c();
        var t = await o("WASmaxMdGetCountryCodeRPC").sendGetCountryCodeRPC();
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
    }
    function c() {
      return o("WAWebConnModel").Conn.ref != null &&
        o("WAWebConnModel").Conn.ref !== ""
        ? Promise.resolve()
        : new Promise(function (e) {
            o("WAWebConnModel").Conn.once("change:ref", function () {
              return e();
            });
          });
    }
    l.logAndroidTabletOverlayCountry = s;
  },
  98,
);
