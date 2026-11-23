__d(
  "MAWHandleFailure",
  [
    "MAWBridge",
    "MAWQplProxy",
    "MAWRotateCAT",
    "WADbDeviceRegistration",
    "WAHandleFailureUtils",
    "WALogger",
    "WAOdsEnums",
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
      g = async function (n) {
        var t = n.reason;
        switch (
          (o("MAWBridge")
            .getBridge()
            .fireAndForget("event", "odsBumpEntityKey", {
              entity: o("WAOdsEnums").Entity.STREAM_ERROR,
              key: "failure." + t,
            }),
          o("MAWQplProxy").sendQplPointThroughBridge(
            r("qpl")._(1056839232, "112"),
            "wai_login_error",
            { annotations: { double: { waiLoginError: Number(t) } } },
          ),
          t)
        ) {
          case o("WAHandleFailureUtils").FAILURE_CODES.BANNED:
            (o("WALogger")
              .COUNT(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "DeregisterPhone.",
                    "",
                  ])),
                t,
              )
              .tags("login_failure"),
              await o("WAHandleFailureUtils").deregisterPhone());
            break;
          case o("WAHandleFailureUtils").FAILURE_CODES.TEMP_BANNED:
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "handleFailure: got failure code ",
                  "",
                ])),
              t,
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
                t,
              )
              .tags("login_failure"),
              await o("WAHandleFailureUtils").deregisterPhone());
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
                t,
              )
              .tags("login_failure"),
              await o("WAHandleFailureUtils").reregisterPhone());
            break;
          case o("WAHandleFailureUtils").FAILURE_CODES.CAT_SESSION_INVALID:
            return (
              o("WALogger")
                .COUNT(
                  d || (d = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  t,
                )
                .tags("login_failure"),
              o("WALogger").ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "failure reason ",
                    " not implemented yet",
                  ])),
                t,
              ),
              Promise.reject("failure reason " + t + " not implemented yet")
            );
          case o("WAHandleFailureUtils").FAILURE_CODES.CAT_EXPIRED:
          case o("WAHandleFailureUtils").FAILURE_CODES.CAT_INVALID:
            (o("WALogger")
              .COUNT(
                p || (p = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                t,
              )
              .tags("login_failure"),
              await o("MAWRotateCAT").tryRotateCAT({
                initiator: "MAWHandleFailure::handleLoginFailure",
                qplAnnotations: { string: { reason: t } },
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
              t,
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
                t,
              ),
              Promise.reject("failure reason " + t + " not implemented yet")
            );
        }
        return Promise.resolve("NO_ACK");
      };
    l.handleLoginFailure = g;
  },
  98,
);
