__d(
  "modularGeneratePTT",
  [
    "PlatformTrustTokenUPLLogger",
    "PlatformTrustTokenUPLLoggerUtils",
    "getPTTUtils",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s) {
      var u = s != null ? s : {},
        c = u.actorID,
        d = u.cacheContext,
        m = u.debugLogger,
        p = u.env,
        _ = u.getServerPublicCryptoKeyHook,
        f = u.keyPairs,
        g = u.logger,
        h = u.oneTimeCheckoutInput,
        y = u.publicKey,
        C = u.receiverID,
        b = u.sessionID,
        v = u.targetAccountID,
        S = u.xeProfileIdentifier,
        R = g;
      (R == null &&
        (R = new (r("PlatformTrustTokenUPLLogger"))(
          void 0,
          b,
          o("PlatformTrustTokenUPLLoggerUtils").convertPaymentTypeToProductType(
            e,
          ),
          void 0,
          v,
        )),
        Object.values(n).some(function (e) {
          return e != null && e !== "";
        })
          ? o("getPTTUtils").getPTTInternalWithEncryption(
              e,
              f,
              t,
              n,
              a,
              i,
              l,
              C,
              b,
              h,
              m,
              c,
              y,
              R,
              _,
              v,
              p,
              d,
              S,
            )
          : r("promiseDone")(
              o("getPTTUtils").getPTTInternal(t, a, f, void 0, y, R),
              i,
              l,
            ));
    }
    l.default = e;
  },
  98,
);
