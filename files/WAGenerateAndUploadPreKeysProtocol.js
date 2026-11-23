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
    "WASignalKeys",
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
      m = o("WATagsLogger").TAGS(["generateAndUploadPreKeysProtocol"]);
    async function p() {
      var t = await o("WAGlobals")
          .getWaOneQueue()
          .enqueue(
            async function (t) {
              var n = t.cryptoManager,
                r = await o("WACryptoManager").generatePreKeys(n);
              return r.success
                ? (m
                    .LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "About to upload pre keys",
                        ])),
                    )
                    .devConsole("generation " + String(r.value)),
                  o("WAGetKeysForUpload").getKeysForUpload(n, r.value))
                : r;
            },
            { operationType: "generate_prekeys", flush: !0, afterInit: !0 },
          ),
        n = t.value,
        r = n.preKeys,
        a = n.regInfo,
        i = n.signedPreKey,
        l = {
          identityKeyOrPQKeyBundleMixinGroupArgs: {
            identityKeyBundle: babelHelpers.extends(
              {
                registrationElementValue: o("WAWap").BIG_ENDIAN_CONTENT(
                  a.regId,
                ),
                anyElementValue: a.staticKeyPair.publicKey,
                keyArgs: r.map(_),
                keyTypeMixinArgs: {
                  typeElementValue: new Uint8Array([
                    o("WASignalKeys").KEY_TYPE,
                  ]),
                },
              },
              o("WAMakeSignedPreKeyMixin").makeSignedPreKeyMixin(i),
            ),
          },
        },
        p = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
          name: "uploadKeys",
          timer: o("WARetryUtils").fibonacciBackoff(!1),
          code: async function (t) {
            m.LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Attempt to upload keys",
                ])),
            );
            var e = await o("WASmaxPreKeysSetRPC").sendSetRPC(l);
            switch (e.name) {
              case "SetResponseSuccess": {
                (m.LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Keys are successfully uploaded",
                    ])),
                ),
                  t(o("WAResultOrError").makeResult({ preKeys: r })));
                return;
              }
              case "SetResponseRequestError": {
                (m.WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "Got Malformed upload keys IQ on upload pre keys attempt",
                    ])),
                ),
                  t(o("WAResultOrError").makeError("request-error")));
                return;
              }
              default:
                (e.name,
                  m.WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Got unexpected error: ",
                        ", will retry after backoff",
                      ])),
                    e.name,
                  ));
            }
          },
        });
      return (p.start(), p.promise());
    }
    function _(e) {
      var t = { idElementValue: o("WAWap").BIG_ENDIAN_CONTENT(e.id, 3) },
        n = { anyElementValue: e.keyPair.publicKey };
      return { keyIDMixinArgs: t, keyDataMixinArgs: n };
    }
    l.generateAndUploadPreKeysProtocol = p;
  },
  98,
);
