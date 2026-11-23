__d(
  "MAWTryRegisterLegacy",
  [
    "MAWCurrentUser",
    "MAWDeviceRegistrationCommon",
    "MAWDeviceRegistrationUtilWorker",
    "WADbDeviceRegistration",
    "WADbRegistrationApi",
    "WAIdentityApi",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t, n, r) {
      var a = o("MAWDeviceRegistrationCommon").createCombinedQplFlow(n, r);
      o("MAWDeviceRegistrationCommon").deviceRegistrationLogger.DEBUG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "Beginning device registration",
          ])),
      );
      var i = await o(
        "MAWDeviceRegistrationUtilWorker",
      ).createNewRegistrationMeta();
      (a.addPoint("registration_created"),
        n.addAnnotations({ string: { unique_device_id: i.deviceUUID } }),
        await o("WADbRegistrationApi").saveRegistrationMeta(
          o("MAWCurrentUser").getID(),
          i,
        ),
        a.addPoint("registration_saved"));
      var l = o("MAWCurrentUser").getID(),
        s = o("MAWDeviceRegistrationCommon").getRegistrationAppId();
      if (s == null)
        return o("MAWDeviceRegistrationCommon").handleRegistrationError(
          "appId is null, cannot register to WhatsApp",
        );
      if (l === "0")
        return o("MAWDeviceRegistrationCommon").handleRegistrationError(
          o("WADbDeviceRegistration").DEVICE_REGISTER_ERROR_ZERO_AS_USER_ID,
        );
      var u = await o("MAWDeviceRegistrationCommon").callWaRegister(
        t,
        i,
        l,
        s,
        a,
      );
      if (!u.success) return u.error;
      var c = u.value;
      return (
        o("MAWDeviceRegistrationCommon").maybeLinkDeviceToSession(i.deviceUUID),
        await o("WADbRegistrationApi").saveDeviceId(c),
        n.addPoint("device_saved"),
        await o("WAIdentityApi").saveIdentity(
          o("MAWDeviceRegistrationCommon").buildIdentityRow(l, c, i),
        ),
        n.addPoint("identity_saved"),
        o("MAWDeviceRegistrationCommon").registrationSucceeded(i)
      );
    }
    l.tryRegisterLegacy = s;
  },
  98,
);
