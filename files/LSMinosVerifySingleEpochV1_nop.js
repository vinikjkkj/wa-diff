__d(
  "LSMinosVerifySingleEpochV1.nop",
  [
    "EBMinosInterfaceTypes",
    "EBMinosQplFlow",
    "I64",
    "Promise",
    "getSafeQplErrorMessage",
    "gkx",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("requireDeferred")("EBMinosVerifySingleEpoch").__setRef(
        "LSMinosVerifySingleEpochV1.nop",
      ),
      c = function (a, i, l, c, d, m, p, _, f) {
        if (!(r("gkx")("20879") || r("gkx")("17219")))
          return (s || (s = n("Promise"))).resolve([!1]);
        var t = o("EBMinosQplFlow").startMinosVerifySingleEpochQpl({
          entryPoint: "verify-single-epoch-native-op",
        });
        try {
          var g,
            h = (g = o(
              "EBMinosInterfaceTypes",
            )).unsafeCastToBase64StringIntToEpochNumber(l),
            y = g.unsafeCastToMailboxAuthPK(p),
            C = g.unsafeCastToMailboxEncryptionPK(m),
            b = g.unsafeCastToMailboxSigningPK(d),
            v = g.unsafeCastToUserFbId((e || (e = o("I64"))).to_string(c)),
            S = o("EBMinosInterfaceTypes").unsafeCastToEpochSelfSig(f),
            R =
              _ != null
                ? o("EBMinosInterfaceTypes").unsafeCastToEpochHead(_)
                : void 0;
          return u.load().then(function (e) {
            return e.minosVerifySingleEpoch(h, v, b, C, y, R, S, t);
          });
        } catch (e) {
          return (
            t.endFailWithError(
              "runtime-error",
              o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e),
            ),
            (s || (s = n("Promise"))).resolve([!1])
          );
        }
      };
    ((c.__nop_name__ = "LSMinosVerifySingleEpoch"), (l.default = c));
  },
  98,
);
