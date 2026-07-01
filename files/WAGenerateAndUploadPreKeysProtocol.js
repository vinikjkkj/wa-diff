__d(
  "WAGenerateAndUploadPreKeysProtocol",
  [
    "WACryptoManager",
    "WAGetKeysForUpload",
    "WAGlobals",
    "WAMakeSignedPreKeyMixin",
    "WAPromiseRetryLoop",
    "WAResultOrError",
    "WARetryUtils",
    "WASmaxPreKeysSetRPC",
    "WATagsLogger",
    "WAWap",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = o("WATagsLogger").TAGS(["generateAndUploadPreKeysProtocol"]);
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WAGlobals")
              .getWaOneQueue()
              .enqueue(
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var n = t.cryptoManager,
                        r = yield o("WACryptoManager").generatePreKeys(n);
                      return r.success
                        ? (m
                            .LOG(
                              e ||
                                (e = babelHelpers.taggedTemplateLiteralLoose([
                                  "About to upload pre keys",
                                ])),
                            )
                            .devConsole("generation " + r.value),
                          o("WAGetKeysForUpload").getKeysForUpload(n, r.value))
                        : r;
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
                { operationType: "generate_prekeys", flush: !0, afterInit: !0 },
              ),
            r = t.value,
            a = r.preKeys,
            i = r.regInfo,
            l = r.signedPreKey,
            p = {
              identityKeyOrPQKeyBundleMixinGroupArgs: {
                identityKeyBundle: babelHelpers.extends(
                  {
                    registrationElementValue: o("WAWap").BIG_ENDIAN_CONTENT(
                      i.regId,
                    ),
                    anyElementValue: i.staticKeyPair.publicKey,
                    keyArgs: a.map(f),
                    hasKeyType: !0,
                  },
                  o("WAMakeSignedPreKeyMixin").makeSignedPreKeyMixin(l),
                ),
              },
            },
            _ = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
              name: "uploadKeys",
              timer: o("WARetryUtils").fibonacciBackoff(!1),
              code: (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    m.LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "Attempt to upload keys",
                        ])),
                    );
                    var t = yield o("WASmaxPreKeysSetRPC").sendSetRPC(p);
                    switch (t.name) {
                      case "SetResponseSuccess": {
                        (m.LOG(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "Keys are successfully uploaded",
                            ])),
                        ),
                          e(o("WAResultOrError").makeResult({ preKeys: a })));
                        return;
                      }
                      case "SetResponseRequestError": {
                        (m.WARN(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "Got Malformed upload keys IQ on upload pre keys attempt",
                            ])),
                        ),
                          e(o("WAResultOrError").makeError("request-error")));
                        return;
                      }
                      default:
                        (t.name,
                          m.WARN(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
                                "Got unexpected error: ",
                                ", will retry after backoff",
                              ])),
                            t.name,
                          ));
                    }
                  },
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            });
          return (_.start(), _.promise());
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      var t = { idElementValue: o("WAWap").BIG_ENDIAN_CONTENT(e.id, 3) },
        n = { anyElementValue: e.keyPair.publicKey };
      return { keyIDMixinArgs: t, keyDataMixinArgs: n };
    }
    l.generateAndUploadPreKeysProtocol = p;
  },
  98,
);
