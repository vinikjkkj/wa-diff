__d(
  "EBAPIMinosVerifySingleEpoch",
  [
    "EBMinosLogger",
    "EBMinosWasmVerifySingleEpoch",
    "asyncToGeneratorRuntime",
    "getSafeQplErrorMessage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          o("EBMinosLogger").minosLogger.DEV(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "minosVerifySingleEpoch start",
              ])),
          );
          var n = t.qplFlow,
            r = t.minosEpochAnonId,
            a = t.minosMailboxAuthPublicKey,
            i = t.minosMailboxEncryptionPublicKey,
            l = t.minosMailboxSigningPublicKey,
            u = t.userId,
            c = t.selfEpochSignature;
          try {
            var d = {
              epochNumber: r,
              mailboxAuthPk: a,
              mailboxEncryptionPk: i,
              mailboxSigningPk: l,
              previousEpochHead:
                t.previousEpochHead == null ? void 0 : t.previousEpochHead,
              userFbid: u,
            };
            n.addPoint("verify_single_epoch_start");
            var m = yield o("EBMinosWasmVerifySingleEpoch").verifySingleEpoch({
              epochPublicData: d,
              signature: c,
            });
            return (
              n.addPoint("verify_single_epoch_end"),
              m.success
                ? (n.endSuccess(), m.value.valid)
                : (o("EBMinosLogger").minosLogger.ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Unable to verify epoch - WASM error ",
                        "",
                      ])),
                    m.error,
                  ),
                  n.endFailWithError("invalid-result", m.error),
                  !1)
            );
          } catch (e) {
            return (
              n.endFailWithError(
                "runtime-error",
                o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e),
              ),
              !1
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.minosVerifySingleEpoch = u;
  },
  98,
);
