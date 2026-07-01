__d(
  "WAPQUploadPreKeysProtocol",
  [
    "Promise",
    "WACryptoLibraryConfig",
    "WAPromiseRetryLoop",
    "WAResultOrError",
    "WARetryUtils",
    "WASmaxPreKeysAddRPC",
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
      m,
      p,
      _,
      f,
      g,
      h,
      y = o("WATagsLogger").TAGS(["pqUploadPreKeysProtocol"]);
    function C(t, r) {
      var a =
        o("WACryptoLibraryConfig").getCryptoLibraryConfig()
          .isPqKeysUploadEnabled === !0;
      if (!a)
        return (h || (h = n("Promise"))).resolve(
          o("WAResultOrError").makeError("request-error"),
        );
      if (t.length === 0)
        return (
          y.WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "No PQ prekeys to upload",
              ])),
          ),
          (h || (h = n("Promise"))).resolve(
            o("WAResultOrError").makeError("request-error"),
          )
        );
      var i = {
          identityKeyOrPQKeyBundleMixinGroupArgs: {
            pQKeyBundle: {
              keyArgs: t.map(v),
              keyIDMixinArgs: {
                idElementValue: o("WAWap").BIG_ENDIAN_CONTENT(r.id, 3),
              },
              pQKeyDataMixinArgs: { anyElementValue: r.keyPair.publicKey },
              signatureElementValue: r.signature,
            },
          },
        },
        l = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
          name: "uploadPQKeys",
          timer: o("WARetryUtils").fibonacciBackoff(!1),
          code: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                y.LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Attempt to upload PQ keys",
                    ])),
                );
                var t = yield o("WASmaxPreKeysSetRPC").sendSetRPC(i);
                switch (t.name) {
                  case "SetResponseSuccess": {
                    (y.LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "PQ keys uploaded successfully",
                        ])),
                    ),
                      e(o("WAResultOrError").makeResult(void 0)));
                    return;
                  }
                  case "SetResponseRequestError": {
                    (y.WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "PQ upload request error",
                        ])),
                    ),
                      e(o("WAResultOrError").makeError("request-error")));
                    return;
                  }
                  default:
                    (t.name,
                      y.WARN(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "PQ upload error: ",
                            ", will retry",
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
      return (l.start(), l.promise());
    }
    function b(e) {
      if (
        o("WACryptoLibraryConfig").getCryptoLibraryConfig()
          .isPqKeysUploadEnabled !== !0
      )
        return (h || (h = n("Promise"))).resolve(
          o("WAResultOrError").makeError("request-error"),
        );
      if (e.length === 0)
        return (
          y.WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "No PQ prekeys to add",
              ])),
          ),
          (h || (h = n("Promise"))).resolve(
            o("WAResultOrError").makeError("request-error"),
          )
        );
      var t = { pQPreKeyListMixinArgs: { keyArgs: e.map(v) } },
        r = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
          name: "addPQKeys",
          timer: o("WARetryUtils").fibonacciBackoff(!1),
          code: (function () {
            var r = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (n) {
                y.LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "Attempt to add PQ keys (batch of ",
                      ")",
                    ])),
                  e.length,
                );
                var r = yield o("WASmaxPreKeysAddRPC").sendAddRPC(t);
                switch (r.name) {
                  case "AddResponseSuccess": {
                    (y.LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "PQ keys added successfully",
                        ])),
                    ),
                      n(o("WAResultOrError").makeResult(void 0)));
                    return;
                  }
                  case "AddResponseRequestError": {
                    (y.WARN(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "PQ add request error",
                        ])),
                    ),
                      n(o("WAResultOrError").makeError("request-error")));
                    return;
                  }
                  default:
                    (r.name,
                      y.WARN(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "PQ add error: ",
                            ", will retry",
                          ])),
                        r.name,
                      ));
                }
              },
            );
            function a(e) {
              return r.apply(this, arguments);
            }
            return a;
          })(),
        });
      return (r.start(), r.promise());
    }
    function v(e) {
      return {
        keyIDMixinArgs: {
          idElementValue: o("WAWap").BIG_ENDIAN_CONTENT(e.id, 3),
        },
        pQKeyDataMixinArgs: { anyElementValue: e.keyPair.publicKey },
        signatureElementValue: e.signature,
      };
    }
    ((l.uploadPQPreKeysProtocol = C), (l.addPQPreKeysProtocol = b));
  },
  98,
);
