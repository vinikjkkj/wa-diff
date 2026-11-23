__d(
  "MAWDeviceRegistrationWorker",
  [
    "MAWClearSignalAndTempStores",
    "MAWCryptoAuthTokenWrapper",
    "MAWCurrentUser",
    "MAWDeviceRegistrationActions",
    "MAWDeviceRegistrationCommon",
    "MAWDeviceRegistrationODSBump",
    "MAWDeviceRegistrationSessionUtil",
    "MAWDeviceRegistrationUtilWorker",
    "MAWQplProxy",
    "MAWTryRegisterAtomic",
    "MAWTryRegisterLegacy",
    "MessengerWebInitData",
    "UserAgentData",
    "WADbDeviceRegistration",
    "WADbMetaTxns",
    "WADbRegistrationApi",
    "WADeviceRegistrationGating",
    "WAJids",
    "WAMockServerShell",
    "WATimeUtils",
    "WMIRateLimiter",
    "cr:7755",
    "getErrorSafe",
    "getSafeQplErrorMessage",
    "justknobx",
    "promiseDone",
    "qpl",
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
      f,
      g = r("justknobx")._("3282"),
      h = r("justknobx")._("3325"),
      y = { key: "device_registration", limit: h, windowMs: 3600 * 1e3 };
    function C(e) {
      return e === 0x453bf7349370c ||
        e === 936619743392459 ||
        e === 487152425211411 ||
        e === 0x3ae327b82f808
        ? "instagram.com"
        : e === 772021112871879
          ? "messenger.com"
          : e === 0x7e36f3fcc43bc
            ? "facebook.com"
            : "unknown";
    }
    async function b(t, a) {
      var i = o("MAWQplProxy").startQplUserFlow(
          r("qpl")._(25307273, "1410"),
          {
            string: {
              browser_name: r("UserAgentData").browserName,
              device_os: r("UserAgentData").platformName,
              device_os_version: r("UserAgentData").platformVersion,
              interface: C(Number(o("MAWCurrentUser").getAppID())),
            },
          },
          { providedTimeoutInMs: 2e4 },
        ),
        l = function (t, n) {
          return o("MAWQplProxy").measurePerfInQPL(i, t, n);
        };
      try {
        var _ =
          a != null ? a : o("MAWCryptoAuthTokenWrapper").getCryptoAuthToken();
        if (_ == null || _.encrypted_serialized_cat === "")
          return (
            o("MAWDeviceRegistrationCommon").deviceRegistrationLogger.WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Crypto Auth Token was null or incomplete",
                ])),
            ),
            i.endFail("empty_cat_token"),
            o("MAWDeviceRegistrationCommon").handleRegistrationError(
              o("WADbDeviceRegistration").DEVICE_REGISTER_ERROR_EMPTY_CAT_TOKEN,
              414,
            )
          );
        if (
          (t != null &&
            o("MAWQplProxy").sendQPLAnnotationsThroughBridge(t, {
              int: {
                secondsUntilCATExpiration: Math.floor(
                  _.expiration_time_in_seconds -
                    o("WATimeUtils").unixTimeWithoutClockSkewCorrection(),
                ),
              },
            }),
          !o("WATimeUtils").isInFuture(
            o("WATimeUtils").castToUnixTime(_.expiration_time_in_seconds),
          ))
        )
          return (
            i.endFail("expired_cat_token"),
            o("MAWDeviceRegistrationCommon").handleRegistrationError(
              o("WADbDeviceRegistration")
                .DEVICE_REGISTER_ERROR_EXPIRED_CAT_TOKEN,
              413,
            )
          );
        if (o("WAMockServerShell").isMockServerMode) {
          var f = await o(
            "MAWDeviceRegistrationUtilWorker",
          ).createNewRegistrationMeta();
          return (
            await Promise.all([
              o("WADbRegistrationApi").saveRegistrationMeta(
                o("MAWCurrentUser").getID(),
                f,
              ),
              o("WADbRegistrationApi").saveDeviceId(
                o("WAJids").interpretAsDeviceId(1),
              ),
              o("WADbMetaTxns").saveCAT(_),
            ]),
            i.addPoint("wa_device_registration_mock_server"),
            i.endSuccess(),
            {
              message: "Skipping registration because of Mock Server",
              registrationState: {
                registrationTime: f.registrationUnixTime,
                type: o("WADbDeviceRegistration").RegistrationStatesEnum
                  .finished,
              },
              status: 200,
            }
          );
        }
        n("cr:7755") != null &&
          (await n("cr:7755").updateRegDataFromLocalStorage());
        var b = o("MAWDeviceRegistrationActions").getRegistrationMetaWorm(),
          v = await l("get_registration_data", b);
        (i.addAnnotations({
          string: { unique_device_id: v == null ? void 0 : v.deviceUUID },
        }),
          t != null &&
            o("MAWQplProxy").sendQplPointThroughBridge(
              t,
              "device_registration_check",
              {
                annotations: {
                  bool: {
                    identityCompareResult:
                      v == null ? void 0 : v.identityCompareResult,
                  },
                  int: {
                    registrationVersion:
                      v == null ? void 0 : v.registrationVersion,
                  },
                },
              },
            ));
        var S = (v == null ? void 0 : v.identityCompareResult) === !1;
        if (v == null || v.deviceId == null || S) {
          if (
            (i.addAnnotations({ bool: { isNewRegistartion: !0 } }),
            t != null &&
              o("MAWQplProxy").sendQplPointThroughBridge(
                t,
                "device_registration_new_reg_start",
              ),
            o("MAWDeviceRegistrationCommon").deviceRegistrationLogger.DEBUG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "RATE LIMIT SETTINGS LOG ONLY: ",
                  " ENABLED: ",
                  " COUNT: ",
                  "",
                ])),
              r("justknobx")._("3587"),
              g,
              h,
            ),
            g)
          ) {
            var R = await o("WMIRateLimiter").checkAndRecordAttempt(y),
              L = {
                bool: { rateLimitBreached: R.limitBreached },
                int: { rateLimitCount: R.currentCount },
              };
            if (
              (i.addAnnotations(L),
              o("MAWDeviceRegistrationCommon").deviceRegistrationLogger.DEBUG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Client rate limiting check complete. ",
                    "/",
                    " attempts.",
                  ])),
                R.currentCount,
                y.limit,
              ),
              R.limitBreached)
            )
              if (r("justknobx")._("3587"))
                (i.addAnnotations({ bool: { rateLimitLogOnly: !0 } }),
                  o(
                    "MAWDeviceRegistrationCommon",
                  ).deviceRegistrationLogger.MUSTFIX(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Device registration client rate limit exceeded (not skipping). ",
                        "/",
                        " attempts.",
                      ])),
                    R.currentCount,
                    y.limit,
                  ));
              else
                return (
                  o(
                    "MAWDeviceRegistrationCommon",
                  ).deviceRegistrationLogger.MUSTFIX(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Device registration client rate limit exceeded. ",
                        "/",
                        " attempts.",
                      ])),
                    R.currentCount,
                    y.limit,
                  ),
                  i.endFail("client_rate_limit_exceeded"),
                  o("MAWDeviceRegistrationCommon").handleRegistrationError(
                    "client_rate_limit_exceeded",
                    500,
                  )
                );
            o("MAWDeviceRegistrationCommon").deviceRegistrationLogger.DEBUG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "Device registration rate limit check passed",
                ])),
            );
          }
          var E = o(
            "WADeviceRegistrationGating",
          ).isAtomicDeviceRegistrationEnabled();
          i.addAnnotations({ bool: { isAtomicRegistration: E } });
          try {
            (await l(
              "clear_signal_stores",
              o("MAWClearSignalAndTempStores").clearSignalAndTempStores(),
            ),
              t != null &&
                o("MAWQplProxy").sendQplPointThroughBridge(
                  t,
                  "device_registration_signal_temp_stores_cleared",
                ),
              E ||
                (await l("save_cat", o("WADbMetaTxns").saveCAT(_)),
                t != null &&
                  o("MAWQplProxy").sendQplPointThroughBridge(
                    t,
                    "device_registration_cat_saved",
                  )));
          } catch (e) {
            return o("MAWDeviceRegistrationCommon").handleRegistrationError(
              o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e),
            );
          }
          var k = E
              ? o("MAWTryRegisterAtomic").tryRegisterAtomic
              : o("MAWTryRegisterLegacy").tryRegisterLegacy,
            I = await l("try_register", k(_, i, t));
          return (
            I.registrationState.type ===
            o("WADbDeviceRegistration").RegistrationStatesEnum.failed
              ? i.endFail("wa_device_registration_failed", {
                  string: { errorMsg: I.message },
                })
              : (i.addPoint("wa_device_registration_successful"),
                i.endSuccess()),
            t != null &&
              o("MAWQplProxy").sendQplPointThroughBridge(
                t,
                "device_registration_new_reg_end",
              ),
            I
          );
        } else {
          (i.addAnnotations({ bool: { isNewRegistartion: !1 } }),
            t != null &&
              o("MAWQplProxy").sendQplPointThroughBridge(
                t,
                "device_registration_existing_reg_start",
              ),
            await l("save_cat", o("WADbMetaTxns").saveCAT(_)));
          var T = r("MessengerWebInitData").sessionId,
            D =
              v.lastSessionDeviceWasLinkedTo == null ||
              v.lastSessionDeviceWasLinkedTo !== T;
          (T != null &&
            !(v.deviceUUID === T || v.deviceUUID.startsWith(T + "-")) &&
            D &&
            !o("MAWDeviceRegistrationCommon").isIGD() &&
            r("promiseDone")(
              o("MAWDeviceRegistrationSessionUtil").linkDeviceToTheSession(
                v.deviceUUID,
                T,
              ),
            ),
            t != null &&
              o("MAWQplProxy").sendQplPointThroughBridge(
                t,
                "device_registration_existing_reg_end",
              ));
        }
        return (
          r("MAWDeviceRegistrationODSBump")("already_registered"),
          i.addPoint("wa_device_registration_persisted"),
          i.endSuccess(),
          o("MAWDeviceRegistrationCommon").deviceRegistrationLogger.DEBUG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "Skipping device registration",
              ])),
          ),
          {
            message: o("WADbDeviceRegistration").DEVICE_ALREADY_REGISTERED,
            registrationState: {
              type: o("WADbDeviceRegistration").RegistrationStatesEnum.finished,
            },
            status: 200,
          }
        );
      } catch (e) {
        var x,
          $ = r("getErrorSafe")(e);
        throw (
          i.endFail("uncaught_exception", {
            string: {
              errorMsg: (x = $.message) != null ? x : "No error message",
            },
          }),
          $
        );
      }
    }
    function v(e) {
      (r("MAWDeviceRegistrationODSBump")("fail"),
        o("MAWDeviceRegistrationCommon").deviceRegistrationLogger.MUSTFIX(
          _ || (_ = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
          o("WADbDeviceRegistration").FAILED_REGISTRATION_RETRIES,
        ));
      for (var t of e)
        o("MAWDeviceRegistrationCommon").deviceRegistrationLogger.MUSTFIX(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "Device registration failure - ",
              "",
            ])),
          t,
        );
    }
    ((l.handleRegistrationError = o(
      "MAWDeviceRegistrationCommon",
    ).handleRegistrationError),
      (l.setupDeviceRegistration = b),
      (l.logDeviceRegistrationRetryFailure = v));
  },
  98,
);
