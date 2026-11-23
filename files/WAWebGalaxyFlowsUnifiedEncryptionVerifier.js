__d(
  "WAWebGalaxyFlowsUnifiedEncryptionVerifier",
  [
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.arePublicKeyWithSignatureValid = async function (t) {
            var e = t.callback,
              n = t.contactId,
              r = t.publicKeyPem,
              o = t.publicKeySignature,
              a = await this.$1(n),
              i = await this.$2({
                identityWids: a,
                publicKeyPem: r,
                publicKeySignature: o,
              });
            i === "valid" ? e.onComplete(!0) : await this.$3(a, r, o, e);
          }),
          (n.$3 = async function (t, n, r, a) {
            var e = this;
            return new Promise(function (i, l) {
              o("WAWebGalaxyFlowsIdentityFetcher")
                .GalaxyFlowsIdentityFetcher.fetchIdentitiesFor(t, {
                  onComplete: async function () {
                    try {
                      (await e.$4(t, n, r, a), i());
                    } catch (e) {
                      l(e);
                    }
                  },
                })
                .catch(l);
            });
          }),
          (n.$4 = async function (t, n, r, a) {
            var e = await this.$2({
              identityWids: t,
              publicKeyPem: n,
              publicKeySignature: r,
            });
            if (e === "missing_identity_key")
              throw new (o("WAWebGalaxyFlowsError").WaeGalaxyFlowError)(
                o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors
                  .MISSING_IDENTITY_KEY,
              );
            if (e === "identity_key_load_error")
              throw new (o("WAWebGalaxyFlowsError").WaeGalaxyFlowError)(
                o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors
                  .PUBLIC_KEY_SIGNATURE_VERIFICATION_EXCEPTION,
              );
            var i = e === "valid";
            try {
              a.onComplete(i);
            } catch (e) {
              throw e;
            }
          }),
          (n.$1 = async function (t) {
            var e = await d(t);
            if (e == null) return [t];
            var n = e.devices
              .map(function (t) {
                return o("WAWebWidFactory").createDeviceWidFromDeviceListPk(
                  e.id,
                  t.id,
                  t.isHosted,
                );
              })
              .filter(function (e) {
                return e.isHosted();
              });
            return n.length > 0 ? n : [t];
          }),
          (n.$2 = async function (n) {
            var t = n.identityWids,
              a = n.publicKeyPem,
              i = n.publicKeySignature;
            if (a == null || i == null) return "invalid";
            try {
              var l = await Promise.all(t.map(m)),
                s = new Uint8Array(o("WABase64").decodeB64(a)),
                u = new Uint8Array(o("WABase64").decodeB64(i)),
                c = !1,
                d = !1;
              for (var p of l) {
                if (p.status === "failed") {
                  d = !0;
                  continue;
                }
                var _ = p.value;
                if (_ != null) {
                  c = !0;
                  var f = o("WAWebCryptoCurve25519").toCurveKeyPubKey(
                    o("WAWebSignalCommonUtils").strToBuffer(_),
                  );
                  if (
                    o("WAWebCryptoCurve25519VerifySignature").verifySignature(
                      new Uint8Array(f),
                      s,
                      u,
                    )
                  )
                    return "valid";
                }
              }
              return d
                ? "identity_key_load_error"
                : c
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
          }),
          t
        );
      })();
    async function d(e) {
      try {
        var t = await o("WAWebApiDeviceList").getDeviceIds([e], !0),
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
    }
    async function m(e) {
      try {
        return {
          status: "loaded",
          value: await o("WAWebSignalProtocolStore")
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
    }
    var p = new c();
    l.UnifiedEncryptionVerifier = p;
  },
  98,
);
