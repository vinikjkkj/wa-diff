__d(
  "WAWebGetIdentityKeysJob",
  [
    "Promise",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebCryptoCurve25519",
    "WAWebJidToWid",
    "WAWebProcessKeyBundle",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "asyncToGeneratorRuntime",
    "cr:475",
    "cr:510",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = new (r("WADeprecatedWapParser"))("identityKeysParser", function (e) {
        return e.child("list").mapChildren(function (e) {
          if (e.hasChild("error")) {
            var t = e.child("error"),
              a = t.attrInt("code"),
              i = t.attrString("text");
            throw r("err")("identityKeysParser bad response: " + a + " " + i);
          } else {
            var l;
            return {
              aeaEvidence:
                (l =
                  n("cr:475") == null
                    ? void 0
                    : n("cr:475").parseAeaEvidenceFromIdentity(e)) != null
                  ? l
                  : null,
              type: e.child("type").contentBytes(1),
              identity: e.child("identity").contentBytes(32),
              user: o("WAWebJidToWid").deviceJidToDeviceWid(
                e.attrDeviceJid("jid"),
              ),
            };
          }
        });
      });
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o("WAWebSignalProtocolStore")
              .getPersistSignalProtocolStore()
              .bulkLoadIdentityKey(
                t.map(function (e) {
                  return String(
                    o("WAWebSignalCommonUtils").createSignalAddress(e),
                  );
                }),
              ),
            r = t.filter(function (e, t) {
              return n[t] == null;
            });
          if (r.length === 0) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "getAndStoreIdentityKeys: got 0 missing keys",
                ])),
            );
            return;
          }
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "getAndStoreIdentityKeys: query ",
                " missing keys for ",
                " contacts",
              ])),
            r.length,
            t.length,
          );
          var a = yield f(r),
            i = a.map(function (e) {
              var t = e.identity,
                n = o("WAWebCryptoCurve25519").toSignalCurvePubKey(
                  t.buffer.slice(t.byteOffset, t.byteLength + t.byteOffset),
                ),
                r = o("WAWebSignalCommonUtils").bufferToStr(n),
                a = o("WAWebSignalCommonUtils").createSignalAddress(e.user);
              return { identityKey: r, identifier: a.toString() };
            }),
            l = yield o("WAWebProcessKeyBundle").prepareAeaKeyResponses(
              a.map(function (e) {
                var t = e.aeaEvidence,
                  n = e.identity,
                  r = e.user;
                return { aeaEvidence: t, identity: n, wid: r };
              }),
            );
          (yield o("WAWebSignalProtocolStore")
            .getPersistSignalProtocolStore()
            .bulkCreateIdentity(i),
            yield h(l));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.map(function (e) {
              return o("WAWap").wap("user", {
                jid: o("WAWebCommsWapMd").DEVICE_JID(e),
              });
            }),
            a = (t = o("WAWap")).wap(
              "iq",
              {
                xmlns: "encrypt",
                type: "get",
                to: t.S_WHATSAPP_NET,
                id: t.generateId(),
              },
              t.wap("identity", null, n),
            ),
            i = yield o("WADeprecatedSendIq").deprecatedSendIq(a, m);
          if (!i.success)
            throw r("err")("getIdentityKeys bad response " + String(i));
          return i.result;
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = n("cr:510");
          if (
            !(
              t == null ||
              e.every(function (e) {
                return e == null;
              })
            )
          ) {
            yield (d || (d = n("Promise"))).all(
              e.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      if (e != null)
                        try {
                          yield t.commitAeaKeyResponse(e);
                        } catch (e) {
                          o("WALogger")
                            .WARN(
                              u ||
                                (u = babelHelpers.taggedTemplateLiteralLoose([
                                  "[aea] failed to store identity response result",
                                ])),
                            )
                            .catching(r("getErrorSafe")(e))
                            .sendLogs("aea-get-identities-commit-fail");
                        }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            );
            try {
              yield o("WAWebSignalProtocolStore")
                .getPersistSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode();
            } catch (e) {
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[aea] failed to flush identity response results",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("aea-get-identities-flush-fail");
            }
          }
        })),
        y.apply(this, arguments)
      );
    }
    l.getAndStoreIdentityKeys = p;
  },
  98,
);
