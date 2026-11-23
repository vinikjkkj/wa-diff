__d(
  "MAWDeviceRegistrationActions",
  [
    "MAWLoggerUtils",
    "MAWODSProxy",
    "MWFBLogger",
    "MessengerWebInitData",
    "WADbSignal",
    "WADeviceRegistrationGating",
    "WAGetRegistrationInfoApi",
    "WAGetRegistrationInfoSingleTxnApi",
    "WAOdsEnums",
    "WASignedKeyApi",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = "Device registration meta is incomplete: ",
      g = o("MWFBLogger")
        .MWLogger()
        .tags([o("MAWLoggerUtils").Tag.DeviceRegistration]);
    function h(t, n, r, a, i) {
      (t != null || n != null || r != null || a != null || i != null) &&
        (t == null &&
          g.MUSTFIX(
            e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ": ", ""])),
            f,
            o("WADbSignal").MetaKeysEnum.lastSignedPrekeyId,
          ),
        n == null &&
          g.MUSTFIX(
            s || (s = babelHelpers.taggedTemplateLiteralLoose(["", ": ", ""])),
            f,
            o("WADbSignal").MetaKeysEnum.deviceUUID,
          ),
        r == null &&
          g.MUSTFIX(
            u || (u = babelHelpers.taggedTemplateLiteralLoose(["", ": ", ""])),
            f,
            o("WADbSignal").MetaKeysEnum.regId,
          ),
        a == null &&
          g.MUSTFIX(
            c || (c = babelHelpers.taggedTemplateLiteralLoose(["", ": ", ""])),
            f,
            o("WADbSignal").MetaKeysEnum.identityKeyPair,
          ),
        i == null &&
          g.MUSTFIX(
            d || (d = babelHelpers.taggedTemplateLiteralLoose(["", ": ", ""])),
            f,
            o("WADbSignal").MetaKeysEnum.fbid,
          ));
    }
    async function y() {
      var e,
        t = o("WADeviceRegistrationGating").isAtomicDeviceRegistrationEnabled()
          ? await o(
              "WAGetRegistrationInfoSingleTxnApi",
            ).getRegistrationInfoWithSignedPreKey()
          : null,
        n =
          (e = t == null ? void 0 : t.info) != null
            ? e
            : await o("WAGetRegistrationInfoApi").getRegistrationInfo(),
        a = n.deviceId,
        i = n.deviceUUID,
        l = n.fbid,
        s = n.identityCompareResult,
        u = n.identityKeyPair,
        c = n.lastSessionDeviceWasLinkedTo,
        d = n.lastSignedPrekeyId,
        y = n.regId,
        C = n.registrationUnixTime,
        b = n.registrationVersion;
      if (
        (s ||
          o("MAWODSProxy").odsBumpEntityKey({
            entity: o("WAOdsEnums").Entity.COMPARE_IDENTITY,
            key: "meta_identity_mismatch",
          }),
        d == null || i == null || y == null || u == null || l == null)
      )
        return (h(d, i, y, u, l), null);
      if (
        (r("MessengerWebInitData").sessionId == null &&
          g.MUSTFIX(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "MAWDeviceRegistrationActions: sessionId is null",
              ])),
          ),
        a != null && typeof a != "number")
      )
        return (
          g.MUSTFIX(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[Device Registration Meta Check] Device Id should be a number",
              ])),
          ),
          null
        );
      var v =
        t != null ? t.signedPreKey : await o("WASignedKeyApi").getSignedKey(d);
      return v == null
        ? (g.MUSTFIX(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "",
                ": signedPrekey}",
              ])),
            f,
          ),
          null)
        : {
            deviceId: a,
            deviceUUID: i,
            identityCompareResult: s,
            lastSessionDeviceWasLinkedTo: c,
            lastSignedPrekeyId: d,
            registrationUnixTime: C,
            registrationVersion: b != null ? b : void 0,
            signalRegInfo: { identityKeyPair: u, regId: y, signedPreKey: v },
          };
    }
    l.getRegistrationMetaWorm = y;
  },
  98,
);
