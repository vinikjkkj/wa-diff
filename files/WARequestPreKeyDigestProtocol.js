__d(
  "WARequestPreKeyDigestProtocol",
  [
    "WABinary",
    "WAConvertRegistrationIdMixin",
    "WAConvertSignedPreKeyMixin",
    "WACryptoDependencies",
    "WACryptoUtils",
    "WAParsableXmlNode",
    "WAResultOrError",
    "WASignalKeys",
    "WASmaxPreKeysFetchDigestRPC",
    "WATagsLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("WATagsLogger").TAGS(["requestPreKeyDigestProtocol"]);
    function c(t) {
      return o("WASmaxPreKeysFetchDigestRPC")
        .sendFetchDigestRPC({ withoutRetry: !1 })
        .then(function (n) {
          switch (n.name) {
            case "FetchDigestResponseServerError": {
              var r = n.value.errorServerErrors.name;
              return (
                u.ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      ": ",
                      "",
                    ])),
                  n.name,
                  r,
                ),
                o("WAResultOrError").makeError({
                  type: "server-error",
                  payload: r,
                })
              );
            }
            case "FetchDigestResponseRequestError": {
              var a = n.value.errorRequestErrorsFetchDigest.name;
              return (
                u.ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      ": ",
                      "",
                    ])),
                  n.name,
                  a,
                ),
                o("WAResultOrError").makeError({
                  type: "request-error",
                  payload: a,
                })
              );
            }
            default: {
              n.name;
              var i = d(n.value.digestIdentityDigestBundleMixin);
              return m(i, t).then(function (e) {
                return e === "ok"
                  ? o("WAResultOrError").makeResult()
                  : o("WAResultOrError").makeError({
                      type: "compare-error",
                      payload: e,
                    });
              });
            }
          }
        });
    }
    function d(e) {
      var t = o("WAConvertRegistrationIdMixin").registrationIdMixin(e),
        n = o("WAConvertSignedPreKeyMixin").convertSignedPreKeyMixin(e),
        r = e.listId.map(function (e) {
          return o("WASignalKeys").castToPreKeyId(
            o("WAParsableXmlNode").convertBytesToUint(e.elementValue, 3),
          );
        }),
        a = e.keysHashLegacyOnlyOrPQSupportMixinGroup,
        i = a.value.hashElementValue,
        l = a.name === "KeysHashPQSupport",
        s =
          e.pQPreKeyIDListMixin != null
            ? e.pQPreKeyIDListMixin.pqListId.map(function (e) {
                return o("WAParsableXmlNode").convertBytesToUint(
                  e.elementValue,
                  3,
                );
              })
            : null,
        u =
          e.pQLastResortKeyIDMixin != null
            ? o("WAParsableXmlNode").convertBytesToUint(
                e.pQLastResortKeyIDMixin.elementValue,
                3,
              )
            : null;
      return {
        regId: t,
        skeyId: n.id,
        preKeyIds: r,
        hash: i,
        isPQHash: l,
        pqPreKeyIds: s,
        pqLastResortKeyId: u,
      };
    }
    async function m(e, t) {
      if (e.regId !== t.regInfo.regId) return "RegIdMismatch";
      if (e.skeyId !== t.signedPreKey.id) return "SignedPreKeyIdMismatch";
      var n = new Map();
      t.preKeys.forEach(function (e) {
        return n.set(e.id, e);
      });
      var r = e.preKeyIds.some(function (e) {
        return !n.has(e);
      });
      if (r) return "UnknownPreKey";
      var a = [];
      e.preKeyIds.forEach(function (e) {
        var t = n.get(e);
        t != null && a.push(t);
      });
      var i = t;
      if (e.isPQHash) {
        var l,
          s,
          u = new Map();
        ((l = t.kyberPreKeys) != null ? l : []).forEach(function (e) {
          u.set(e.keyId, e);
        });
        var c = [],
          d = ((s = e.pqPreKeyIds) != null ? s : []).some(function (e) {
            var t = u.get(e);
            return t == null ? !0 : (c.push(t), !1);
          });
        if (d) return "UnknownPreKey";
        var m = null,
          g = e.pqLastResortKeyId;
        if (g != null && ((m = p(t, g)), m == null)) return "UnknownPreKey";
        i = babelHelpers.extends({}, t, {
          kyberPreKeys: c,
          kyberLastResortKey: m,
        });
      }
      var h = e.isPQHash ? await f(i, a) : await _(t, a);
      return o("WACryptoUtils").uint8ArraysEqual(h, e.hash)
        ? "ok"
        : "HashMismatch";
    }
    function p(e, t) {
      var n = e.kyberLastResortKeys;
      if (n != null) {
        var r = n.find(function (e) {
          return e.keyId === t;
        });
        if (r != null) return r;
      }
      var o = e.kyberLastResortKey;
      return (o == null ? void 0 : o.keyId) === t ? o : null;
    }
    function _(e, t) {
      var n = new (o("WABinary").Binary)();
      return (
        n.writeByteArray(e.regInfo.staticKeyPair.publicKey),
        n.writeByteArray(e.signedPreKey.keyPair.publicKey),
        n.writeByteArray(e.signedPreKey.signature),
        t.forEach(function (e) {
          n.writeByteArray(e.keyPair.publicKey);
        }),
        o("WACryptoDependencies")
          .getCrypto()
          .subtle.digest("SHA-1", n.readByteArrayView())
          .then(function (e) {
            return new Uint8Array(e);
          })
      );
    }
    function f(e, t) {
      var n = new (o("WABinary").Binary)();
      (n.writeByteArray(e.regInfo.staticKeyPair.publicKey),
        n.writeByteArray(e.signedPreKey.keyPair.publicKey),
        n.writeByteArray(e.signedPreKey.signature),
        t.forEach(function (e) {
          n.writeByteArray(e.keyPair.publicKey);
        }));
      var r = e.kyberLastResortKey;
      r != null &&
        (n.writeByteArray(r.publicKey), n.writeByteArray(r.signature));
      var a = e.kyberPreKeys;
      if (a != null) {
        var i = [].concat(a).sort(function (e, t) {
          return e.keyId - t.keyId;
        });
        i.forEach(function (e) {
          n.writeByteArray(e.publicKey);
        });
      }
      return o("WACryptoDependencies")
        .getCrypto()
        .subtle.digest("SHA-256", n.readByteArrayView())
        .then(function (e) {
          return new Uint8Array(e);
        });
    }
    ((l.requestPreKeyDigestProtocol = c), (l.compareData = m));
  },
  98,
);
