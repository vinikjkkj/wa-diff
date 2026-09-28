__d(
  "WAWebGalaxyFlowsUnifiedEncryptionVerifier",
  [
    "Promise",
    "WABase64",
    "WALogger",
    "WAWebApiDeviceList",
    "WAWebCryptoCurve25519",
    "WAWebCryptoCurve25519VerifySignature",
    "WAWebGalaxyFlowsError",
    "WAWebGalaxyFlowsIdentityFetcher",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (function () {
        function t() {}
        var a = t.prototype;
        return (
          (a.arePublicKeyWithSignatureValid = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.callback,
                  n = e.contactId,
                  r = e.publicKeyPem,
                  o = e.publicKeySignature,
                  a = yield this.$1(n),
                  i = yield this.$2({
                    identityWids: a,
                    publicKeyPem: r,
                    publicKeySignature: o,
                  });
                i === "valid" ? t.onComplete(!0) : yield this.$3(a, r, o, t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$3 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, r, a) {
                var i = this;
                return new (c || (c = n("Promise")))(function (l, s) {
                  o("WAWebGalaxyFlowsIdentityFetcher")
                    .GalaxyFlowsIdentityFetcher.fetchIdentitiesFor(e, {
                      onComplete: (function () {
                        var o = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* () {
                            try {
                              (yield i.$4(e, t, r, a), l());
                            } catch (e) {
                              s(e);
                            }
                          },
                        );
                        function u() {
                          return o.apply(this, arguments);
                        }
                        return u;
                      })(),
                    })
                    .catch(s);
                });
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$4 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r) {
                var a = yield this.$2({
                  identityWids: e,
                  publicKeyPem: t,
                  publicKeySignature: n,
                });
                if (a === "missing_identity_key")
                  throw new (o("WAWebGalaxyFlowsError").WaeGalaxyFlowError)(
                    o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors
                      .MISSING_IDENTITY_KEY,
                  );
                if (a === "identity_key_load_error")
                  throw new (o("WAWebGalaxyFlowsError").WaeGalaxyFlowError)(
                    o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors
                      .PUBLIC_KEY_SIGNATURE_VERIFICATION_EXCEPTION,
                  );
                var i = a === "valid";
                try {
                  r.onComplete(i);
                } catch (e) {
                  throw e;
                }
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$1 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield m(e);
                if (t == null) return [e];
                var n = t.devices
                  .map(function (e) {
                    return o("WAWebWidFactory").createDeviceWidFromDeviceListPk(
                      t.id,
                      e.id,
                      e.isHosted,
                    );
                  })
                  .filter(function (e) {
                    return e.isHosted();
                  });
                return n.length > 0 ? n : [e];
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$2 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = t.identityWids,
                  i = t.publicKeyPem,
                  l = t.publicKeySignature;
                if (i == null || l == null) return "invalid";
                try {
                  var s = yield (c || (c = n("Promise"))).all(a.map(_)),
                    u = new Uint8Array(o("WABase64").decodeB64(i)),
                    d = new Uint8Array(o("WABase64").decodeB64(l)),
                    m = !1,
                    p = !1;
                  for (var f of s) {
                    if (f.status === "failed") {
                      p = !0;
                      continue;
                    }
                    var g = f.value;
                    if (g != null) {
                      m = !0;
                      var h = o("WAWebCryptoCurve25519").toCurveKeyPubKey(
                        o("WAWebSignalCommonUtils").strToBuffer(g),
                      );
                      if (
                        o(
                          "WAWebCryptoCurve25519VerifySignature",
                        ).verifySignature(new Uint8Array(h), u, d)
                      )
                        return "valid";
                    }
                  }
                  return p
                    ? "identity_key_load_error"
                    : m
                      ? "invalid"
                      : "missing_identity_key";
                } catch (t) {
                  throw (
                    o("WALogger")
                      .WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[GALAXY_FLOW] Public key signature verification failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(t))
                      .sendLogs("galaxy-flow-public-key-verification-failed"),
                    new (o("WAWebGalaxyFlowsError").WaeGalaxyFlowError)(
                      o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors
                        .PUBLIC_KEY_SIGNATURE_VERIFICATION_EXCEPTION,
                    )
                  );
                }
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          t
        );
      })();
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebApiDeviceList").getDeviceIds([e], !0),
              n = t[0];
            return n;
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[GALAXY_FLOW] Device list lookup failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("galaxy-flow-device-list-lookup-failed"),
              null
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return {
              status: "loaded",
              value: yield o("WAWebSignalProtocolStore")
                .getPersistSignalProtocolStore()
                .loadIdentityKey(
                  o("WAWebSignalCommonUtils").createSignalAddress(e).toString(),
                ),
            };
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[GALAXY_FLOW] Identity key load failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("galaxy-flow-identity-key-load-failed"),
              { status: "failed" }
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    var g = new d();
    l.UnifiedEncryptionVerifier = g;
  },
  98,
);
