__d(
  "WAWebShortcakeLinkingPasskeyPrologue",
  [
    "WABase64",
    "WALogger",
    "WASmaxMdGetRefRPC",
    "WASmaxMdSetPasskeyPrologueRPC",
    "WAWebProtobufsCompanionReg.pb",
    "WAWebShortcakeLinkingApi",
    "WAWebShortcakeLinkingHandoffProof",
    "WAWebShortcakeLinkingRequestOptionsCache",
    "asyncToGeneratorRuntime",
    "err",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake prologue: starting WebAuthn assertion",
              ])),
          );
          var a = (n = self.navigator) == null ? void 0 : n.credentials;
          if (a == null)
            throw r("err")("Shortcake prologue: WebAuthn not available");
          var i = new TextDecoder().decode(t),
            l = JSON.parse(i);
          if (
            (l.challenge != null &&
              (l.challenge = o("WABase64").decodeB64UrlSafe(l.challenge)),
            Array.isArray(l.allowCredentials))
          )
            for (var s of l.allowCredentials)
              s.id != null && (s.id = o("WABase64").decodeB64UrlSafe(s.id));
          var u = yield a.get({ publicKey: l });
          if (u == null || u.type !== "public-key")
            throw r("err")(
              "Shortcake prologue: WebAuthn ceremony returned no credential",
            );
          var c = r("unsafeCast")(u),
            d = c.rawId,
            m = c.response,
            p = {
              id: c.id,
              rawId: o("WABase64").encodeB64UrlSafe(d),
              type: c.type,
              response: {
                clientDataJSON: o("WABase64").encodeB64UrlSafe(
                  m.clientDataJSON,
                ),
                authenticatorData: o("WABase64").encodeB64UrlSafe(
                  m.authenticatorData,
                ),
                signature: o("WABase64").encodeB64UrlSafe(m.signature),
                userHandle: m.userHandle
                  ? o("WABase64").encodeB64UrlSafe(m.userHandle)
                  : null,
              },
            },
            _ = new TextEncoder().encode(JSON.stringify(p));
          return { assertionJson: _, credentialId: new Uint8Array(d) };
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake prologue: requesting CompanionRef",
              ])),
          );
          var e = yield o("WASmaxMdGetRefRPC").sendGetRefRPC();
          if (e.name !== "GetRefResponseSuccess")
            throw r("err")("Shortcake prologue: GetRef IQ failed");
          var t = e.value.refElementValue;
          return new TextDecoder().decode(t);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (e === void 0 &&
            (e = o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType
              .CHROME),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Shortcake prologue: starting",
                ])),
            ));
          try {
            var t = yield o(
                "WAWebShortcakeLinkingRequestOptionsCache",
              ).getRequestOptions(),
              n = yield m(t),
              r = n.assertionJson,
              a = n.credentialId,
              i = yield _(),
              l = yield o(
                "WAWebShortcakeLinkingApi",
              ).initializeShortcakeLinking(i, e),
              s = o("WAWebShortcakeLinkingHandoffProof")
                .getHandoffKeyHolder()
                .peek(),
              p = void 0;
            if (s != null) {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Shortcake prologue: including pairing handoff proof",
                  ])),
              );
              var f = yield o(
                "WAWebShortcakeLinkingHandoffProof",
              ).computePairingHandoffProof(s, l);
              p = { pairingHandoffProofElementValue: new Uint8Array(f) };
            }
            (yield o("WASmaxMdSetPasskeyPrologueRPC").sendSetPasskeyPrologueRPC(
              {
                credentialIdElementValue: a,
                webauthnAssertionElementValue: r,
                prologuePayloadElementValue: new Uint8Array(l),
                pairingHandoffProofArgs: p,
              },
            ),
              s != null &&
                (o("WAWebShortcakeLinkingApi").setSkipHandoffUx(),
                o("WAWebShortcakeLinkingHandoffProof")
                  .getHandoffKeyHolder()
                  .clear()),
              o("WAWebShortcakeLinkingApi").markPrologueSent(),
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "Shortcake prologue: IQ sent, state machine at WaitingForPrimaryIdentity",
                  ])),
              ));
          } catch (e) {
            throw (
              o(
                "WAWebShortcakeLinkingRequestOptionsCache",
              ).clearCachedRequestOptions(),
              o("WAWebShortcakeLinkingApi").cancelShortcakeLinking(),
              e
            );
          }
        })),
        h.apply(this, arguments)
      );
    }
    ((l.performWebAuthnAssertion = m), (l.executePasskeyPrologue = g));
  },
  98,
);
