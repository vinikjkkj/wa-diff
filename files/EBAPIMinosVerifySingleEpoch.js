__d(
  "EBAPIMinosVerifySingleEpoch",
  [
    "EBMinosLogger",
    "EBMinosWasmVerifySingleEpoch",
    "WACryptoUtils",
    "getSafeQplErrorMessage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = ["epochHead"];
    function d(e) {
      return p(e, null);
    }
    function m(e) {
      var t = e.epochHead,
        n = babelHelpers.objectWithoutPropertiesLoose(e, c);
      return p(n, t);
    }
    async function p(t, n) {
      o("EBMinosLogger").minosLogger.DEV(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "minosVerifySingleEpoch start",
          ])),
      );
      var r = t.qplFlow,
        a = t.minosEpochAnonId,
        i = t.minosMailboxAuthPublicKey,
        l = t.minosMailboxEncryptionPublicKey,
        c = t.minosMailboxSigningPublicKey,
        d = t.userId,
        m = t.selfEpochSignature;
      try {
        var p = {
          epochNumber: a,
          mailboxAuthPk: i,
          mailboxEncryptionPk: l,
          mailboxSigningPk: c,
          previousEpochHead:
            t.previousEpochHead == null ? void 0 : t.previousEpochHead,
          userFbid: d,
        };
        r.addPoint("verify_single_epoch_start");
        var _ = await o("EBMinosWasmVerifySingleEpoch").verifySingleEpoch({
          epochPublicData: p,
          signature: m,
        });
        if ((r.addPoint("verify_single_epoch_end"), _.success)) {
          var f = _.value,
            g = f.epochHead,
            h = f.valid;
          return h &&
            n != null &&
            (g == null || !o("WACryptoUtils").arrayBuffersEqual(g, n))
            ? (o("EBMinosLogger").minosLogger.ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Epoch head for ",
                    " does not match its signed epoch",
                  ])),
                d,
              ),
              r.endFailWithError("epoch-head-mismatch"),
              !1)
            : (r.endSuccess(), h);
        }
        return (
          o("EBMinosLogger").minosLogger.ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Unable to verify epoch - WASM error ",
                "",
              ])),
            _.error,
          ),
          r.endFailWithError("invalid-result", _.error),
          !1
        );
      } catch (e) {
        return (
          r.endFailWithError(
            "runtime-error",
            o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e),
          ),
          !1
        );
      }
    }
    ((l.minosVerifySingleEpoch = d),
      (l.minosVerifySingleEpochWithEpochHead = m));
  },
  98,
);
