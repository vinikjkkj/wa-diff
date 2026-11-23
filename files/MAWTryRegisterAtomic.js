__d(
  "MAWTryRegisterAtomic",
  [
    "MAWCurrentUser",
    "MAWDeviceRegistrationCommon",
    "MAWDeviceRegistrationUtilWorker",
    "WACommitRegistrationApi",
    "WADbDeviceRegistration",
    "getSafeQplErrorMessage",
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
      var i = o("MAWCurrentUser").getID(),
        l = o("MAWDeviceRegistrationCommon").getRegistrationAppId();
      if (l == null)
        return o("MAWDeviceRegistrationCommon").handleRegistrationError(
          "appId is null, cannot register to WhatsApp",
        );
      if (i === "0")
        return o("MAWDeviceRegistrationCommon").handleRegistrationError(
          o("WADbDeviceRegistration").DEVICE_REGISTER_ERROR_ZERO_AS_USER_ID,
        );
      var s = await o(
        "MAWDeviceRegistrationUtilWorker",
      ).createNewRegistrationMeta();
      (a.addPoint("registration_created"),
        n.addAnnotations({ string: { unique_device_id: s.deviceUUID } }));
      var u = await o("MAWDeviceRegistrationCommon").callWaRegister(
        t,
        s,
        i,
        l,
        a,
      );
      if (!u.success) return u.error;
      var c = u.value;
      try {
        await o("WACommitRegistrationApi").commitRegistration(
          i,
          s,
          c,
          o("MAWDeviceRegistrationCommon").buildIdentityRow(i, c, s),
          t,
        );
      } catch (e) {
        return o("MAWDeviceRegistrationCommon").handleRegistrationError(
          o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e),
          500,
        );
      }
      return (
        o("MAWDeviceRegistrationCommon").maybeLinkDeviceToSession(s.deviceUUID),
        n.addPoint("registration_committed"),
        o("MAWDeviceRegistrationCommon").registrationSucceeded(s)
      );
    }
    l.tryRegisterAtomic = s;
  },
  98,
);
