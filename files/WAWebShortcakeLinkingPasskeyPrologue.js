__d(
  "WAWebShortcakeLinkingPasskeyPrologue",
  [
    "WABase64",
    "WALogger",
    "WASmaxMdGetRefRPC",
    "WASmaxMdSetPasskeyPrologueRPC",
    "WAWebCompanionPlatformType",
    "WAWebShortcakeLinkingApi",
    "WAWebShortcakeLinkingHandoffProof",
    "WAWebShortcakeLinkingRequestOptionsCache",
    "err",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    async function m(t) {
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
      var u = await a.get({ publicKey: l });
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
            clientDataJSON: o("WABase64").encodeB64UrlSafe(m.clientDataJSON),
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
    }
    async function p() {
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "Shortcake prologue: requesting CompanionRef",
          ])),
      );
      var e = await o("WASmaxMdGetRefRPC").sendGetRefRPC();
      if (e.name !== "GetRefResponseSuccess")
        throw r("err")("Shortcake prologue: GetRef IQ failed");
      var t = e.value.refElementValue;
      return new TextDecoder().decode(t);
    }
    async function _() {
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "Shortcake prologue: starting",
          ])),
      );
      try {
        var e = await o(
            "WAWebShortcakeLinkingRequestOptionsCache",
          ).getRequestOptions(),
          t = await m(e),
          n = t.assertionJson,
          a = t.credentialId,
          i = await p(),
          l = await o("WAWebShortcakeLinkingApi").initializeShortcakeLinking(
            i,
            r("WAWebCompanionPlatformType")(),
          ),
          s = o("WAWebShortcakeLinkingHandoffProof")
            .getHandoffKeyHolder()
            .peek(),
          _ = void 0;
        if (s != null) {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake prologue: including pairing handoff proof",
              ])),
          );
          var f = await o(
            "WAWebShortcakeLinkingHandoffProof",
          ).computePairingHandoffProof(s, l);
          _ = { pairingHandoffProofElementValue: new Uint8Array(f) };
        }
        (await o("WASmaxMdSetPasskeyPrologueRPC").sendSetPasskeyPrologueRPC({
          credentialIdElementValue: a,
          webauthnAssertionElementValue: n,
          prologuePayloadElementValue: new Uint8Array(l),
          pairingHandoffProofArgs: _,
        }),
          s != null &&
            (o("WAWebShortcakeLinkingApi").setSkipHandoffUx(),
            o("WAWebShortcakeLinkingHandoffProof")
              .getHandoffKeyHolder()
              .clear()),
          o("WAWebShortcakeLinkingApi").markPrologueSent(),
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake prologue: IQ sent -> WaitingForPrimaryIdentity",
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
    }
    l.executePasskeyPrologue = _;
  },
  98,
);
