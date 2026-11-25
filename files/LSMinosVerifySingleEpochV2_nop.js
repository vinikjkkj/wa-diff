__d(
  "LSMinosVerifySingleEpochV2.nop",
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
        "LSMinosVerifySingleEpochV2.nop",
      ),
      c = function (a, i, l, c, d, m, p, _, f, g) {
        if (!(r("gkx")("20879") || r("gkx")("17219")))
          return (s || (s = n("Promise"))).resolve([!1]);
        var t = o("EBMinosQplFlow").startMinosVerifySingleEpochQpl({
          entryPoint: "verify-single-epoch-v2-native-op",
        });
        try {
          var h,
            y = (h = o(
              "EBMinosInterfaceTypes",
            )).unsafeCastToBase64StringIntToEpochNumber(l),
            C = h.unsafeCastToMailboxAuthPK(p),
            b = h.unsafeCastToMailboxEncryptionPK(m),
            v = h.unsafeCastToMailboxSigningPK(d),
            S = h.unsafeCastToUserFbId((e || (e = o("I64"))).to_string(c));
          return u.load().then(function (e) {
            return e.minosVerifySingleEpochV2(
              y,
              S,
              v,
              b,
              C,
              _ != null
                ? o("EBMinosInterfaceTypes").unsafeCastToEpochHead(_)
                : void 0,
              o("EBMinosInterfaceTypes").unsafeCastToEpochSelfSig(f),
              o("EBMinosInterfaceTypes").unsafeCastToEpochHead(g),
              t,
            );
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
    ((c.__nop_name__ = "LSMinosVerifySingleEpochV2"), (l.default = c));
  },
  98,
);
