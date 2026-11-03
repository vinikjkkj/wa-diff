__d(
  "WAWebAccountLinkingAdminAPI",
  [
    "WALogger",
    "WASmaxWaffleEncryptedPayloadRequestRPC",
    "WASmaxWaffleGenerateAccessTokensRPC",
    "WASmaxWaffleGenerateWAEntACUserRPC",
    "WAWebAPIParser",
    "WAWebAccountLinkingAPI",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingCryptoUtils",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebMetaAiWaffleAuthTokenCache",
    "WAWebWaffleEncryptionMetadataArgs",
    "WAWebWaffleIQErrorHandler",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
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
      y,
      C,
      b,
      v,
      S,
      R = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      ),
      L = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(),
      E = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(),
      k = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState();
    async function I(t) {
      var n = t.disclosureId,
        a = t.disclosureLc,
        i = t.disclosureLg,
        l = t.disclosureVersion,
        p = t.rawPassword;
      o("WAWebAccountLinkingAPI").assertModeAllowed("generateWAEntACUser");
      var _ = await o("WAWebAccountLinkingAPI").fetchValidCertificate();
      if (_ == null) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[WAFFLE] GenerateWAEntACUser failed: no valid certificate",
            ])),
        );
        return;
      }
      var f = _.passwordKeyId,
        g = _.passwordKeyIsOaepSha256,
        h = _.passwordPublicKey;
      if (h == null || f == null) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[WAFFLE] GenerateWAEntACUser failed: no password PEM",
            ])),
        );
        return;
      }
      var y;
      try {
        y = g
          ? await o("WAWebAccountLinkingCryptoUtils").encryptPasswordWithOaep(
              p,
              h,
              f,
            )
          : await o("WAWebAccountLinkingCryptoUtils").encryptPassword(p, h, f);
      } catch (e) {
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] GenerateWAEntACUser failed: password encryption",
              ])),
          )
          .catching(r("getErrorSafe")(e));
        return;
      }
      var C = await o("WAWebAccountLinkingCryptoUtils").generateRSAKeys(),
        b = C.privateKey,
        v = C.publicKey,
        S = await o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(v),
        E = {
          version: 1,
          timestamp: Date.now(),
          password: y,
          client_pub_key: S,
          client_pub_key_type: "RSA 2048",
        },
        k = await o("WAWebAccountLinkingCryptoUtils").wrapWafflePayload(E, _),
        I = await o(
          "WASmaxWaffleGenerateWAEntACUserRPC",
        ).sendGenerateWAEntACUserRPC({
          rSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroupArgs:
            o("WAWebWaffleEncryptionMetadataArgs").waffleEncryptionMetadataArgs(
              k,
            ),
          timestampElementValue: Date.now(),
          disclosureId: n,
          disclosureVersion: l,
          disclosureLg: i,
          disclosureLc: a,
        });
      if (I.name === "GenerateWAEntACUserResponseSuccess") {
        L.reset();
        var T = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(
            I.value.encryptionMetadataRSAEncryptionMetadataMixin,
          ),
          D = T.data,
          x = T.key,
          $ = T.nonce,
          P = T.tag;
        try {
          var N = await o(
            "WAWebAccountLinkingCryptoUtils",
          ).decryptRSAEncryptedPayload(b, x, D, $, P);
          "fbid" in N
            ? await R.updateEntCreationData(String(N.fbid), y)
            : o("WALogger").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] GenerateWAEntACUser success, no fbid",
                  ])),
              );
        } catch (e) {
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Failed to process generateWAEntACUser response",
                ])),
            )
            .catching(r("getErrorSafe")(e));
        }
      } else {
        var M = I.value.errorGenerateWaEntAcUserErrors,
          w = await o("WAWebWaffleIQErrorHandler").handleCommonWaffleIQError(
            "generateWAEntACUser",
            M.name,
            k.version,
          );
        (await o("WAWebAccountLinkingAPI").handleRecoveryAction(w, L),
          o("WALogger").ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] GenerateWAEntACUser RPC failed: ",
                "",
              ])),
            M.name,
          ));
      }
    }
    async function T() {
      o("WAWebAccountLinkingAPI").assertModeAllowed("generateAccessTokens");
      var e = await R.getAccountLinkingData();
      if (e == null) {
        o("WALogger").ERROR(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[WAFFLE] GenerateAccessTokens failed: no account linking data",
            ])),
        );
        return;
      }
      var t = e.encryptedPassword,
        n = e.fbid;
      if (n == null || t == null) {
        o("WALogger").ERROR(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "[WAFFLE] GenerateAccessTokens failed: missing fbid or encrypted password",
            ])),
        );
        return;
      }
      var r = await o("WAWebAccountLinkingCryptoUtils").generateRSAKeys(),
        a = r.privateKey,
        i = r.publicKey,
        l = await o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(i),
        s = {
          version: 1,
          timestamp: Math.floor(Date.now() / 1e3),
          password: t,
          client_pub_key: l,
          client_pub_key_type: "RSA 2048",
        },
        u = await o("WAWebAccountLinkingCryptoUtils").wrapWafflePayload(s),
        c = await o("WAWebAccountLinkingCryptoUtils").computeIdSign(n),
        d = await o(
          "WASmaxWaffleGenerateAccessTokensRPC",
        ).sendGenerateAccessTokensRPC({
          rSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroupArgs:
            o("WAWebWaffleEncryptionMetadataArgs").waffleEncryptionMetadataArgs(
              u,
            ),
          timestampElementValue: Math.floor(Date.now() / 1e3),
          fbidElementValue: n,
          idSignElementValue: c,
        });
      if (d.name === "GenerateAccessTokensResponseSuccess") {
        E.reset();
        var m = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(
            d.value.encryptionMetadataRSAEncryptionMetadataMixin,
          ),
          y = m.data,
          C = m.key,
          b = m.nonce,
          v = m.tag;
        try {
          var S = await o(
            "WAWebAccountLinkingCryptoUtils",
          ).decryptRSAEncryptedPayload(a, C, y, b, v);
          if (!("access_token" in S)) {
            o("WALogger").ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] GenerateAccessTokens success but response missing access_token",
                ])),
            );
            return;
          }
          var L = d.value.pingIntervalElementValue;
          await R.updateGenerateAccessTokensData({
            accesstoken: S.access_token,
            fbid: "fbid" in S ? String(S.fbid) : null,
            nonce: "nonce" in S ? S.nonce : null,
            pingInterval: L,
          });
        } catch (e) {
          o("WALogger")
            .ERROR(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Failed to process generateAccessTokens response: ",
                  "",
                ])),
              e,
            )
            .tags("waffle", "account-linking", "generate-access-tokens")
            .sendLogs("waffle-generate-access-tokens-failed", {
              sampling: 0.01,
            });
        }
      } else {
        var k = d.value.errorGenerateAccessTokensErrors,
          I = await o("WAWebWaffleIQErrorHandler").handleCommonWaffleIQError(
            "generateAccessTokens",
            k.name,
            u.version,
          );
        (await o("WAWebAccountLinkingAPI").handleRecoveryAction(I, E),
          o("WALogger").ERROR(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] GenerateAccessTokens RPC failed: ",
                "",
              ])),
            k.name,
          ));
      }
    }
    var D = { FB: 0, IG: 1 },
      x = {
        FB: "wa_nta_username_reservation_on_fb",
        IG: "wa_nta_username_reservation_on_ig",
      };
    async function $(e, t, n) {
      o("WAWebAccountLinkingAPI").assertModeAllowed("sendLinkingMutation");
      var a = await R.getAccountLinkingData();
      if (a == null)
        throw (
          o("WALogger")
            .ERROR(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Linking mutation failed: no account linking data",
                ])),
            )
            .sendLogs("waffle-linking-no-data"),
          r("err")("No account linking data")
        );
      var i = a.accesstoken,
        l = a.fbid;
      if (l == null || i == null)
        throw (
          o("WALogger")
            .ERROR(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Linking mutation failed: missing fbid or access token",
                ])),
            )
            .sendLogs("waffle-linking-missing-creds"),
          r("err")("Missing fbid or access token")
        );
      var s = await o("WAWebAccountLinkingCryptoUtils").generateRSAKeys(),
        u = s.privateKey,
        c = s.publicKey,
        d = await o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(c),
        m = {
          version: 1,
          timestamp: Math.floor(Date.now() / 1e3),
          access_token: i,
          client_pub_key: d,
          client_pub_key_type: "RSA 2048",
          action: "waffle_100",
          target_account_type: D[t],
          opaque_target_accounts_to_be_linked_strings: [e],
          linking_entry_point: x[t],
          family_device_id: n,
        },
        p = await o("WAWebAccountLinkingCryptoUtils").wrapWafflePayload(m),
        _;
      try {
        _ = await o(
          "WASmaxWaffleEncryptedPayloadRequestRPC",
        ).sendEncryptedPayloadRequestRPC({
          actionElementValue: "waffle_100",
          fbidElementValue: l,
          timestampElementValue: Math.floor(Date.now() / 1e3),
          rSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroupArgs:
            o("WAWebWaffleEncryptionMetadataArgs").waffleEncryptionMetadataArgs(
              p,
            ),
        });
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Linking mutation error",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          e
        );
      }
      if (_.name === "EncryptedPayloadRequestResponseSuccess") {
        var f = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(
            _.value.encryptionMetadataRSAEncryptionMetadataMixin,
          ),
          g = f.data,
          h = f.key,
          L = f.nonce,
          E = f.tag,
          I = await o(
            "WAWebAccountLinkingCryptoUtils",
          ).decryptRSAEncryptedPayload(u, h, g, L, E);
        if (
          "link_mutation_succeeded" in I &&
          I.success === !0 &&
          I.link_mutation_succeeded === !0
        )
          (await R.updateAccountLinkingState(
            o("WAWebAccountLinkingConstants").AccountLinkState.Active,
          ),
            o(
              "WAWebMetaAiWaffleAuthTokenCache",
            ).refreshMetaAiWaffleAuthTokenBlob());
        else {
          var T = "success" in I ? I.success : void 0,
            $ =
              "link_mutation_succeeded" in I
                ? I.link_mutation_succeeded
                : void 0;
          throw (
            o("WALogger")
              .ERROR(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Linking mutation failed: success=",
                    " link_mutation_succeeded=",
                    "",
                  ])),
                String(T),
                String($),
              )
              .sendLogs("waffle-linking-mutation-failed"),
            r("err")("Linking mutation failed")
          );
        }
      } else {
        var P = _.value.errorEncryptedPayloadRequestErrors,
          N = await o("WAWebWaffleIQErrorHandler").handleCommonWaffleIQError(
            "linkAction",
            P.name,
            p.version,
          );
        throw (
          await o("WAWebAccountLinkingAPI").handleRecoveryAction(N, k),
          o("WALogger")
            .ERROR(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Linking mutation RPC error: ",
                  "",
                ])),
              P.name,
            )
            .sendLogs("waffle-linking-mutation-rpc-error"),
          r("err")("Linking mutation RPC error: %s", P.name)
        );
      }
    }
    ((l.generateWAEntACUser = I),
      (l.generateAccessTokens = T),
      (l.sendLinkingMutation = $));
  },
  98,
);
