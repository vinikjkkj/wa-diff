__d(
  "MAWDeviceRegistrationInitWorker",
  [
    "BackendInitLoggingUtils",
    "BrowserLockManager",
    "FBLogger",
    "MAWDeviceRegistrationODSBump",
    "MAWDeviceRegistrationWorker",
    "MAWHMACKey",
    "MAWQplProxy",
    "MAWRotateCAT",
    "MWFBLogger",
    "WADbDeviceRegistration",
    "WADbRegistrationApi",
    "WAGetRegistrationInfoApi",
    "WAPromiseRetryLoop",
    "WARetryUtils",
    "getErrorSafe",
    "justknobx",
    "memoizeOneWithArgs",
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
      g,
      h,
      y = o("MWFBLogger")
        .MWLogger()
        .tags(["backend", "init", "deviceRegistration"]);
    function C(t) {
      return (
        t === void 0 && (t = !0),
        r("BrowserLockManager") != null
          ? o("BackendInitLoggingUtils").measureMawInit(
              "request_maw_registration_lock",
              function () {
                return new Promise(function (n, o) {
                  r("promiseDone")(
                    r("BrowserLockManager").request(
                      "maw_registration_lock",
                      async function () {
                        r("FBLogger")("wmi")
                          .tags(["backend", "init", "deviceRegistration"])
                          .DEBUG(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "Running registerDevice with lock",
                              ])),
                          );
                        try {
                          var a = await b(t);
                          n(a);
                        } catch (e) {
                          o(e);
                        }
                      },
                    ),
                  );
                });
              },
            )
          : (r("FBLogger")("wmi")
              .tags(["backend", "init", "deviceRegistration"])
              .DEBUG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Running registerDevice without lock",
                  ])),
              ),
            b(t))
      );
    }
    var b = r("memoizeOneWithArgs")(async function (e) {
      var t = await o("BackendInitLoggingUtils").measureMawInit(
          "init_device_reg_overall",
          function () {
            return v();
          },
        ),
        n = t.message,
        a = t.registrationState;
      if (a.type === o("WADbDeviceRegistration").RegistrationStatesEnum.failed)
        throw y.mustfixThrow("registration_failed: " + n);
      if (!e) {
        y.DEBUG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "Skipping HMAC generation and registration data loading",
            ])),
        );
        return;
      }
      r("FBLogger")("wmi")
        .tags(["backend", "init", "deviceRegistration"])
        .DEBUG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "Generating HMAC and loading registration data",
            ])),
        );
      var i = await Promise.all([
          o("BackendInitLoggingUtils").measureMawInit(
            "load_reg_in_txn",
            function () {
              return o(
                "WADbRegistrationApi",
              ).loadAllRegistrationMetaInTransaction();
            },
          ),
          o("BackendInitLoggingUtils").measureMawInit(
            "gen_insert_hmac",
            function () {
              return o("MAWHMACKey").generateAndInsertHMACKey();
            },
          ),
        ]),
        l = i[0],
        s = i[1];
      return { hmacKey: s, regData: l };
    });
    function v() {
      var e = 0,
        t = new Set(),
        n = 0,
        a = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
          code: async function (i) {
            if (
              (e++,
              e > o("WADbDeviceRegistration").MAX_DEVICE_REGISTRATION_RETRIES)
            ) {
              o(
                "MAWDeviceRegistrationWorker",
              ).logDeviceRegistrationRetryFailure(t);
              var a = o("MAWDeviceRegistrationWorker").handleRegistrationError(
                o("WADbDeviceRegistration").FAILED_REGISTRATION_RETRIES,
              );
              i(a);
              return;
            }
            try {
              var l = null;
              switch (n) {
                case 414:
                case 413:
                case 418: {
                  (y.DEBUG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "DeviceRegistration ",
                        ". Rotate CAT",
                      ])),
                    n,
                  ),
                    (l = await o("MAWRotateCAT").rotateCAT({
                      initiator:
                        "MAWDeviceRegistrationInitWorker::initDeviceRegistration",
                      qplAnnotations: { int: { prevStatusCode: n } },
                    })));
                  break;
                }
                case 400:
                case 401: {
                  (y.MUSTFIX(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "DeviceRegistration ",
                        ": User should re-login",
                      ])),
                    n,
                  ),
                    r("justknobx")._("3526") &&
                      (l = await o("MAWRotateCAT").rotateCAT({
                        initiator:
                          "MAWDeviceRegistrationInitWorker::initDeviceRegistration",
                        qplAnnotations: { int: { prevStatusCode: n } },
                      })));
                  break;
                }
                case 415: {
                  y.MUSTFIX(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "DeviceRegistration 415: User should take action to  re-register to WAI",
                      ])),
                  );
                  break;
                }
                case 403: {
                  y.MUSTFIX(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "DeviceRegistration 403: User is banned",
                      ])),
                  );
                  break;
                }
                case 500: {
                  y.MUSTFIX(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "DeviceRegistration 500: Retry is needed",
                      ])),
                  );
                  break;
                }
              }
              var s = e === 1 ? r("qpl")._(25310776, "6155") : null,
                u = await o(
                  "MAWDeviceRegistrationWorker",
                ).setupDeviceRegistration(s, l);
              ((n = u.status),
                r("MAWDeviceRegistrationODSBump")(
                  "attempt." + e + ".result." + u.registrationState.type,
                ),
                u.registrationState.type ===
                  o("WADbDeviceRegistration").RegistrationStatesEnum.finished &&
                  (u.registrationState.registrationTime != null &&
                    r("MAWDeviceRegistrationODSBump")("success"),
                  y.DEBUG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "Registration finished, ending device registration promise retry loop",
                      ])),
                  ),
                  i(u)),
                t.add(u.message),
                o("MAWQplProxy").sendQPLAnnotationsThroughBridge(
                  r("qpl")._(25310776, "6155"),
                  {
                    int: { deviceRegistrationLastAttemptCount: e },
                    string: {
                      deviceRegistrationLastAttemptMessages:
                        Array.from(t).join(", "),
                    },
                  },
                ));
            } catch (n) {
              var c = r("getErrorSafe")(n),
                C = "Uncaught device registration error - " + c.message;
              (y.WARN(
                h || (h = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                C,
              ),
                t.add("" + C),
                o("MAWQplProxy").sendQPLAnnotationsThroughBridge(
                  r("qpl")._(25310776, "6155"),
                  {
                    int: { deviceRegistrationLastAttemptCount: e },
                    string: {
                      deviceRegistrationLastAttemptMessages:
                        Array.from(t).join(", "),
                    },
                  },
                ));
            }
          },
          name: "deviceRegistration",
          timer: o("WARetryUtils").fibonacciBackoff(!0),
        });
      return (
        a.start(),
        a.promise().then(function (e) {
          return (
            e.registrationState.type ===
              o("WADbDeviceRegistration").RegistrationStatesEnum.finished &&
              r("promiseDone")(
                o("WAGetRegistrationInfoApi").updateRegistrationHistory(
                  e.registrationState.registrationTime,
                ),
              ),
            e
          );
        })
      );
    }
    ((l.registerDevice = C), (l.initDeviceRegistration = v));
  },
  98,
);
