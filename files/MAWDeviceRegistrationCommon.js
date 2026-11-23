__d(
  "MAWDeviceRegistrationCommon",
  [
    "IGDWebUtils",
    "MAWCurrentUser",
    "MAWDeviceRegistrationSessionUtil",
    "MAWDeviceRegistrationUtilWorker",
    "MAWJids",
    "MAWLoggerUtils",
    "MAWODSProxy",
    "MAWQplProxy",
    "MWFBLogger",
    "MessengerWebInitData",
    "WADbDeviceRegistration",
    "WAJids",
    "WAOdsEnums",
    "WAPreRegistrationCrypto",
    "WAResultOrError",
    "WASignalKeys",
    "getSafeQplErrorMessage",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("MWFBLogger")
      .MWLogger()
      .tags([o("MAWLoggerUtils").Tag.DeviceRegistration]);
    function s() {
      return o("IGDWebUtils").isInstagramWebSupportedApp(
        Number(o("MAWCurrentUser").getAppID()),
      );
    }
    function u(e, t) {
      return (
        t === void 0 && (t = 400),
        {
          message: e,
          registrationState: {
            type: o("WADbDeviceRegistration").RegistrationStatesEnum.failed,
          },
          status: t,
        }
      );
    }
    function c() {
      var e,
        t = !1;
      return (e = t ? 0x39f22521e351a : o("MAWCurrentUser").getAppID()) == null
        ? void 0
        : e.toString();
    }
    async function d(e, t, n, r, a) {
      var i = o("WAPreRegistrationCrypto").serializeRegistrationData(
          t.signalRegInfo,
        ),
        l = null;
      try {
        var s = await o("MAWDeviceRegistrationUtilWorker").register(
          n,
          e.encrypted_serialized_cat,
          r,
          t.deviceUUID,
          i.regId,
          i.identityPubKeyType,
          i.identityPubKey,
          i.signedPreKey,
        );
        a.addPoint("device_registered");
        var c = s == null ? void 0 : s.type;
        if (
          (c != null &&
            o("MAWODSProxy").odsBumpEntityKey({
              entity: o("WAOdsEnums").Entity.REGISTRATION_TYPE,
              key: c,
            }),
          !s || !(s != null && s.success))
        ) {
          var d, m;
          return o("WAResultOrError").makeError({
            message:
              (d = s == null ? void 0 : s.message) != null
                ? d
                : o("WADbDeviceRegistration").NULL_RESPONSE_FROM_SERVER,
            registrationState: {
              type: o("WADbDeviceRegistration").RegistrationStatesEnum.failed,
            },
            status: (m = s == null ? void 0 : s.status) != null ? m : "400",
          });
        }
        l = s.wa_device_id;
      } catch (e) {
        return o("WAResultOrError").makeError(
          u(o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e)),
        );
      }
      return l == null
        ? o("WAResultOrError").makeError(
            u(o("WADbDeviceRegistration").NULL_RESPONSE_FROM_SERVER),
          )
        : o("WAResultOrError").makeResult(l);
    }
    function m(e, t, n) {
      var r = o("MAWJids").toUserJid(e);
      return {
        deviceJid: o("WAJids").toDeviceJid(r, t),
        identity: o("WASignalKeys").serializeIdentity(
          n.signalRegInfo.identityKeyPair.publicKey,
        ),
        userJid: r,
      };
    }
    function p(e) {
      if (!s()) {
        var t = r("MessengerWebInitData").sessionId;
        t != null &&
          r("promiseDone")(
            o("MAWDeviceRegistrationSessionUtil").linkDeviceToTheSession(e, t),
          );
      }
    }
    function _(e) {
      return {
        message: o("WADbDeviceRegistration").DEVICE_SUCCESSFULLY_REGISTERED,
        registrationState: {
          registrationTime: e.registrationUnixTime,
          type: o("WADbDeviceRegistration").RegistrationStatesEnum.finished,
        },
        status: 200,
      };
    }
    function f(e, t) {
      return {
        addAnnotations: function (r) {
          (e.addAnnotations(r),
            t != null &&
              o("MAWQplProxy").sendQPLAnnotationsThroughBridge(t, r));
        },
        addPoint: function (r, a) {
          (e.addPoint(r, a),
            t != null &&
              o("MAWQplProxy").sendQplPointThroughBridge(
                t,
                "device_registration_" + r,
                { annotations: a },
              ));
        },
        endCancel: function () {},
        endFail: function (t, n) {},
        endSuccess: function () {},
        getQPLAttrs: function () {
          return { instanceKey: 0 };
        },
        isActive: function () {
          return !0;
        },
        start: function () {},
      };
    }
    ((l.deviceRegistrationLogger = e),
      (l.isIGD = s),
      (l.handleRegistrationError = u),
      (l.getRegistrationAppId = c),
      (l.callWaRegister = d),
      (l.buildIdentityRow = m),
      (l.maybeLinkDeviceToSession = p),
      (l.registrationSucceeded = _),
      (l.createCombinedQplFlow = f));
  },
  98,
);
