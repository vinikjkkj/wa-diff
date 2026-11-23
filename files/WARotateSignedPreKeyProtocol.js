__d(
  "WARotateSignedPreKeyProtocol",
  [
    "WACryptoManager",
    "WAErrorMessage",
    "WAGlobals",
    "WAHandleFailureUtils",
    "WAMakeSignedPreKeyMixin",
    "WAResultOrError",
    "WASmaxPreKeysRotateSignedRPC",
    "WATagsLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = o("WATagsLogger").TAGS(["rotateSignedPreKeyProtocol"]);
    async function _(t) {
      p.LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "start generating skey...",
          ])),
      );
      try {
        var n = await o("WAGlobals")
          .getWaOneQueue()
          .enqueue(
            function (e) {
              var t = e.cryptoManager;
              return o("WACryptoManager").generateSignedPreKey(t);
            },
            {
              operationType: "generate_signed_prekey",
              flush: !0,
              afterInit: !0,
            },
          );
        p.LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "generated skey. Start rotating skey...",
            ])),
        );
        var r = await o("WASmaxPreKeysRotateSignedRPC").sendRotateSignedRPC({
          signedPreKeyMixinArgs: o(
            "WAMakeSignedPreKeyMixin",
          ).makeSignedPreKeyMixin(n),
          pQLastResortKeyMixinArgs: t != null ? t : void 0,
        });
        switch (r.name) {
          case "RotateSignedResponseValidationError": {
            var a = r.value,
              i = a.errorCode,
              l = a.errorIdentityKeyMixin,
              _ = a.errorText;
            return (
              p.ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "ValidationError: ",
                    " ",
                    "",
                  ])),
                i,
                _,
              ),
              o("WAResultOrError").makeError({
                type: "validation-error",
                identity: l.elementValue,
              })
            );
          }
          case "RotateSignedResponseRequestError": {
            var f = r.value.errorRequestErrors.value.code,
              g = r.value.errorRequestErrors.name;
            return (
              p.ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "RequestError: ",
                    " ",
                    "",
                  ])),
                f,
                g,
              ),
              o("WAResultOrError").makeError({ type: "request-error" })
            );
          }
          case "RotateSignedResponseServerError": {
            var h = r.value.errorServerErrors.value.code,
              y = r.value.errorServerErrors.name;
            return (
              p.ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "ServerError: ",
                    " ",
                    "",
                  ])),
                h,
                y,
              ),
              o("WAResultOrError").makeError({ type: "server-error" })
            );
          }
          default:
            return (
              r.name,
              p.LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "successfully rotated new skey",
                  ])),
              ),
              o("WAResultOrError").makeResult()
            );
        }
      } catch (e) {
        var C = o("WAErrorMessage").maybeGetMessageFromError(e);
        if (C.includes("No lastSignedPrekeyId and registration"))
          return (
            await o("WAHandleFailureUtils").reregisterPhone(),
            o("WAResultOrError").makeError({ type: "no-prekey-reregistered" })
          );
        throw e;
      }
    }
    l.rotateSignedPreKeyProtocol = _;
  },
  98,
);
