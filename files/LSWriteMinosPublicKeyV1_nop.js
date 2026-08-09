__d(
  "LSWriteMinosPublicKeyV1.nop",
  [
    "EBMinosInterfaceTypes",
    "EBMinosQplFlow",
    "FBLogger",
    "I64",
    "JSResourceForInteraction",
    "Promise",
    "WALongInt",
    "WATimeUtils",
    "cr:12497",
    "getErrorSafe",
    "getSafeQplErrorMessage",
    "gkx",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = r("JSResourceForInteraction")(
        "EBWriteMinosMailboxKeysToCache",
      ).__setRef("LSWriteMinosPublicKeyV1.nop"),
      d = function (a, i, l, d, m, p, _, f, g, h, y, C) {
        if (!(r("gkx")("20879") || r("gkx")("17219")) || _ == null)
          return (u || (u = n("Promise"))).resolve();
        var t = o("EBMinosQplFlow").startMinosWritePublicKeysQpl();
        return (
          n("cr:12497") != null &&
            t.addAnnotations({
              bool: {
                isBackendSetupInProgress:
                  n("cr:12497").isBackendSetupInProgress(),
                isBackendSetupSuccessful:
                  n("cr:12497").isBackendSetupSuccessful(),
              },
              string: { entry_point: "LSWriteMinosPublicKeyV1" },
            }),
          d == null || m == null || p == null || f == null
            ? (t.endFailWithError("missing_required_values"),
              (u || (u = n("Promise"))).resolve())
            : (t.addPoint("mailbox_to_cache_deferred_load_start"),
              r("promiseDone")(
                c.load().then(function (e) {
                  var n;
                  return (
                    t.addPoint("mailbox_to_cache_deferred_load_end"),
                    e.writeMinosMailboxKeysToCache({
                      contactId: (n = o(
                        "EBMinosInterfaceTypes",
                      )).unsafeCastToUserFbId(
                        (s || (s = o("I64"))).to_string(l),
                      ),
                      encryptionPublicKey: o(
                        "EBMinosInterfaceTypes",
                      ).unsafeCastToMailboxEncryptionPK(p),
                      epochAnonId: o(
                        "EBMinosInterfaceTypes",
                      ).unsafeCastToBase64StringIntToEpochNumber(d),
                      epochHead: o(
                        "EBMinosInterfaceTypes",
                      ).unsafeCastToEpochHead(_),
                      epochHeadCreationTime: o(
                        "EBMinosInterfaceTypes",
                      ).unsafeCastToEpochCreationTime(
                        o("WATimeUtils").castLongIntToUnixTime(
                          o("WALongInt").decimalStringToLongInt(s.to_string(m)),
                        ),
                      ),
                      publicKeyFbid: o(
                        "EBMinosInterfaceTypes",
                      ).unsafeCastToMailboxFbId(
                        o("WALongInt").decimalStringToLongInt(s.to_string(f)),
                      ),
                      qplFlow: t,
                    })
                  );
                }),
                function () {},
                function (n) {
                  var a = r("getErrorSafe")(n);
                  (t.endFailWithError(
                    "runtime-error",
                    o("getSafeQplErrorMessage").getSafeQPLErrorMessage(a),
                  ),
                    r("FBLogger")("wmi").MUSTFIX(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[labyrinth_web minos] Error writing minos public keys to cache: ",
                          "",
                        ])),
                      a.message,
                    ));
                },
              ),
              (u || (u = n("Promise"))).resolve())
        );
      };
    ((d.__nop_name__ = "LSWriteMinosPublicKey"), (l.default = d));
  },
  98,
);
