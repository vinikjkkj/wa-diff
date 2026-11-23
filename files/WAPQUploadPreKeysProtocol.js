__d(
  "WAPQUploadPreKeysProtocol",
  [
    "WACryptoLibraryConfig",
    "WAPromiseRetryLoop",
    "WAResultOrError",
    "WARetryUtils",
    "WASmaxPreKeysAddRPC",
    "WASmaxPreKeysSetRPC",
    "WATagsLogger",
    "WAWap",
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
      h = o("WATagsLogger").TAGS(["pqUploadPreKeysProtocol"]),
      y = { category: "client-precondition", code: null };
    function C(t, n) {
      var r =
        o("WACryptoLibraryConfig").getCryptoLibraryConfig()
          .isPqKeysUploadEnabled === !0;
      if (!r)
        return Promise.resolve(o("WAResultOrError").makeError("request-error"));
      if (t.length === 0)
        return (
          h.WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "No PQ prekeys to upload",
              ])),
          ),
          Promise.resolve(o("WAResultOrError").makeError("request-error"))
        );
      var a = {
          identityKeyOrPQKeyBundleMixinGroupArgs: {
            pQKeyBundle: {
              keyArgs: t.map(v),
              keyIDMixinArgs: {
                idElementValue: o("WAWap").BIG_ENDIAN_CONTENT(n.id, 3),
              },
              pQKeyDataMixinArgs: { anyElementValue: n.keyPair.publicKey },
              signatureElementValue: n.signature,
            },
          },
        },
        i = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
          name: "uploadPQKeys",
          timer: o("WARetryUtils").fibonacciBackoff(!1),
          code: async function (t) {
            h.LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Attempt to upload PQ keys",
                ])),
            );
            var e = await o("WASmaxPreKeysSetRPC").sendSetRPC(a);
            switch (e.name) {
              case "SetResponseSuccess": {
                (h.LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "PQ keys uploaded successfully",
                    ])),
                ),
                  t(o("WAResultOrError").makeResult(void 0)));
                return;
              }
              case "SetResponseRequestError": {
                (h.WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "PQ upload request error",
                    ])),
                ),
                  t(o("WAResultOrError").makeError("request-error")));
                return;
              }
              default:
                (e.name,
                  h.WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "PQ upload error: ",
                        ", will retry",
                      ])),
                    e.name,
                  ));
            }
          },
        });
      return (i.start(), i.promise());
    }
    function b(e) {
      if (
        o("WACryptoLibraryConfig").getCryptoLibraryConfig()
          .isPqKeysUploadEnabled !== !0
      )
        return Promise.resolve(o("WAResultOrError").makeError(y));
      if (e.length === 0)
        return (
          h.WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "No PQ prekeys to add",
              ])),
          ),
          Promise.resolve(o("WAResultOrError").makeError(y))
        );
      var t = { pQPreKeyListMixinArgs: { keyArgs: e.map(v) } },
        n = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
          name: "addPQKeys",
          timer: o("WARetryUtils").fibonacciBackoff(!1),
          code: async function (r) {
            h.LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "Attempt to add PQ keys (batch of ",
                  ")",
                ])),
              e.length,
            );
            var n = await o("WASmaxPreKeysAddRPC").sendAddRPC(t);
            switch (n.name) {
              case "AddResponseSuccess": {
                (h.LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "PQ keys added successfully",
                    ])),
                ),
                  r(o("WAResultOrError").makeResult(void 0)));
                return;
              }
              case "AddResponseRequestError": {
                var a = n.value.errorRequestErrors,
                  i = a.name,
                  l = a.value;
                (h.WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "PQ add request error: ",
                      " (",
                      ")",
                    ])),
                  i,
                  l.code,
                ),
                  r(
                    o("WAResultOrError").makeError({
                      category: i,
                      code: l.code,
                    }),
                  ));
                return;
              }
              default:
                (n.name,
                  h.WARN(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "PQ add error: ",
                        ", will retry",
                      ])),
                    n.name,
                  ));
            }
          },
        });
      return (n.start(), n.promise());
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
