__d(
  "MAWHandleFailure",
  [
    "MAWBridge",
    "MAWQplProxy",
    "MAWRotateCAT",
    "Promise",
    "WADbDeviceRegistration",
    "WAHandleFailureUtils",
    "WALogger",
    "WAOdsEnums",
    "asyncToGeneratorRuntime",
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
      h = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.reason;
          switch (
            (o("MAWBridge")
              .getBridge()
              .fireAndForget("event", "odsBumpEntityKey", {
                entity: o("WAOdsEnums").Entity.STREAM_ERROR,
                key: "failure." + a,
              }),
            o("MAWQplProxy").sendQplPointThroughBridge(
              r("qpl")._(1056839232, "112"),
              "wai_login_error",
              { annotations: { double: { waiLoginError: Number(a) } } },
            ),
            a)
          ) {
            case o("WAHandleFailureUtils").FAILURE_CODES.BANNED:
              (o("WALogger")
                .COUNT(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "DeregisterPhone.",
                      "",
                    ])),
                  a,
                )
                .tags("login_failure"),
                yield o("WAHandleFailureUtils").deregisterPhone());
              break;
            case o("WAHandleFailureUtils").FAILURE_CODES.TEMP_BANNED:
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "handleFailure: got failure code ",
                    "",
                  ])),
                a,
              );
              break;
            case o("WAHandleFailureUtils").FAILURE_CODES.NOT_FOUND:
              (o("WALogger")
                .COUNT(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "DeregisterPhone.",
                      "",
                    ])),
                  a,
                )
                .tags("login_failure"),
                yield o("WAHandleFailureUtils").deregisterPhone());
              break;
            case o("WAHandleFailureUtils").FAILURE_CODES.GENERIC_FAILURE:
            case o("WAHandleFailureUtils").FAILURE_CODES.NOT_AUTHORIZED:
              (o("WALogger")
                .COUNT(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "ReregisterPhone.",
                      "",
                    ])),
                  a,
                )
                .tags("login_failure"),
                yield o("WAHandleFailureUtils").reregisterPhone());
              break;
            case o("WAHandleFailureUtils").FAILURE_CODES.CAT_SESSION_INVALID:
              return (
                o("WALogger")
                  .COUNT(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                    a,
                  )
                  .tags("login_failure"),
                o("WALogger").ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "failure reason ",
                      " not implemented yet",
                    ])),
                  a,
                ),
                (g || (g = n("Promise"))).reject(
                  "failure reason " + a + " not implemented yet",
                )
              );
            case o("WAHandleFailureUtils").FAILURE_CODES.CAT_EXPIRED:
            case o("WAHandleFailureUtils").FAILURE_CODES.CAT_INVALID:
              (o("WALogger")
                .COUNT(
                  p || (p = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  a,
                )
                .tags("login_failure"),
                yield o("MAWRotateCAT").tryRotateCAT({
                  initiator: "MAWHandleFailure::handleLoginFailure",
                  qplAnnotations: { string: { reason: a } },
                  retries: o("WADbDeviceRegistration")
                    .MAX_ROTATE_CRYPTO_AUTH_TOKEN_RETRIES,
                }));
              break;
            case o("WAHandleFailureUtils").FAILURE_CODES.INTERNAL_ERROR:
            case o("WAHandleFailureUtils").FAILURE_CODES.SERVER_UNAVAILABLE:
              o("WALogger").ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "handleFailure: got failure code ",
                    "",
                  ])),
                a,
              );
              break;
            default:
              return (
                o("WALogger").ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "failure reason ",
                      " not implemented yet",
                    ])),
                  a,
                ),
                (g || (g = n("Promise"))).reject(
                  "failure reason " + a + " not implemented yet",
                )
              );
          }
          return (g || (g = n("Promise"))).resolve("NO_ACK");
        });
        return function (n) {
          return t.apply(this, arguments);
        };
      })();
    l.handleLoginFailure = h;
  },
  98,
);
