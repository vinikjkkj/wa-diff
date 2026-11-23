__d(
  "WAWebAccountLinkingAPI",
  [
    "WALogger",
    "WAPromiseDelays",
    "WASmaxWaffleForceDeleteStateRPC",
    "WASmaxWaffleForceSuspendStateRPC",
    "WASmaxWaffleGetCertificateRPC",
    "WASmaxWaffleRefreshAccessTokensRPC",
    "WASmaxWaffleStateExistsRPC",
    "WASmaxWaffleWFPingRPC",
    "WAWebAPIParser",
    "WAWebAccountLinkingAPIGetCertsQuery.graphql",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingCryptoUtils",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebAccountLinkingGatingUtils",
    "WAWebAccountLinkingHandler",
    "WAWebGraphQLServerError",
    "WAWebMetaAiWaffleAuthTokenCache",
    "WAWebRelayClient",
    "WAWebSubscriptionAgeGating",
    "WAWebWaffleCertificateCache",
    "WAWebWaffleEncryptionMetadataArgs",
    "WAWebWaffleFXServiceDataQueryV2Mutation",
    "WAWebWaffleIQErrorHandler",
    "WAWebWaffleLifecycleWamLogger",
    "WAWebWamEnumWaffleLifecycleTraceActionType",
    "WAWebX509Utils",
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
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $ = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      ),
      P = {
        fetchValidCertificate: ["companion", "guest"],
        generateWAEntACUser: ["guest"],
        generateAccessTokens: ["guest"],
        refreshAccessToken: ["companion", "guest"],
        ping: ["companion", "guest"],
        stateExists: ["companion", "guest"],
        forceDeleteState: ["companion", "guest"],
        forceSuspendState: ["companion", "guest"],
        fetchServiceData: ["companion", "guest"],
        sendLinkingMutation: ["guest"],
      };
    function N(e) {
      var t = o("WAWebAccountLinkingGatingUtils").getWaffleMode(),
        n = P[e];
      if (!n.includes(t))
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  '[WAFFLE] API "',
                  '" not allowed in ',
                  " mode",
                ])),
              e,
              t,
            )
            .sendLogs("waffle-api-mode-not-allowed"),
          r("err")('[WAFFLE] API "' + e + '" not allowed in ' + t + " mode")
        );
    }
    async function M() {
      N("fetchValidCertificate");
      var e = await o("WAWebWaffleCertificateCache").loadCertFromIDB();
      if (e != null) {
        if (!A(e)) {
          var t = await F(e);
          if (t != null) return t;
        }
      }
      return O();
    }
    function w(e) {
      return e.payloadKeyId == null && !e.passwordIsOaep ? 1 : 2;
    }
    function A(e) {
      var t = w(e),
        n = o("WAWebAccountLinkingGatingUtils").isWafflePkiMigrationEnabled()
          ? 2
          : 1;
      return t !== n;
    }
    async function F(e) {
      var t = e.passwordIsOaep,
        n = e.passwordKeyId,
        a = e.passwordPem,
        i = e.payloadKeyId;
      try {
        var l = await o("WAWebX509Utils").extractCertificates(e.encryptionPem),
          s = await o(
            "WAWebAccountLinkingCryptoUtils",
          ).validateCertificateChain(l, {
            source: "cache",
            role: "payload",
            cacheFetchedAtSeconds: e.fetchTimestampSeconds,
            ttlSeconds: e.ttlSeconds,
          });
        if (s != null) {
          var c = await s.getPublicKey({
              algorithm: {
                algorithm: { name: "RSA-OAEP", hash: { name: "SHA-1" } },
                usages: ["encrypt"],
              },
            }),
            d =
              i == null
                ? null
                : await s.getPublicKey({
                    algorithm: {
                      algorithm: {
                        name: "RSA-OAEP",
                        hash: { name: "SHA-256" },
                      },
                      usages: ["encrypt"],
                    },
                  }),
            m = null;
          return (
            a != null &&
              (m = await o(
                "WAWebAccountLinkingCryptoUtils",
              ).importPasswordPublicKey(a, t ? "SHA-256" : "SHA-1")),
            {
              encryptionKey: c,
              passwordKeyIsOaepSha256: t,
              passwordKeyId: n != null ? n : null,
              passwordPublicKey: m,
              payloadEncryptionKeyV2: d,
              payloadKeyId: i,
              source: "cache",
            }
          );
        }
      } catch (e) {
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] Failed to restore cert from PEM",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
      return null;
    }
    async function O() {
      if (!o("WAWebAccountLinkingGatingUtils").isWafflePkiMigrationEnabled())
        return G();
      var e = await W();
      return e != null
        ? e
        : (o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] GraphQL certificate fetch failed, falling back to IQ",
                ])),
            )
            .sendLogs("waffle-graphql-cert-fetch-fallback", { sampling: 0.1 }),
          G());
    }
    var B =
      e !== void 0 ? e : (e = n("WAWebAccountLinkingAPIGetCertsQuery.graphql"));
    async function W() {
      try {
        var e,
          t,
          n,
          a,
          i = await o("WAWebRelayClient").fetchQuery(
            B,
            {},
            { environmentType: "whatsapp_web" },
          ),
          l =
            i == null || (e = i.waffle_get_certs) == null
              ? void 0
              : e.payload_encryption,
          s = l == null ? void 0 : l.cert_chain_pem;
        if (s == null || s.length === 0)
          return (
            o("WALogger").ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] GetCerts response missing payload encryption chain",
                ])),
            ),
            null
          );
        var u = (t = l == null ? void 0 : l.key_id) != null ? t : null;
        if (u == null)
          return (
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] GetCerts payload certificate has no key_id",
                  ])),
              )
              .sendLogs("waffle-getcerts-missing-payload-key-id", {
                sampling: 0.1,
              }),
            null
          );
        var c = s.join(`
`),
          g = await o("WAWebX509Utils").extractCertificates(c),
          h = await o(
            "WAWebAccountLinkingCryptoUtils",
          ).validateCertificateChain(g, { source: "graphql", role: "payload" });
        if (h == null)
          return (
            o("WALogger").ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] GetCerts payload certificate validation failed",
                ])),
            ),
            null
          );
        var y = await h.getPublicKey({
            algorithm: {
              algorithm: { name: "RSA-OAEP", hash: { name: "SHA-1" } },
              usages: ["encrypt"],
            },
          }),
          C = await h.getPublicKey({
            algorithm: {
              algorithm: { name: "RSA-OAEP", hash: { name: "SHA-256" } },
              usages: ["encrypt"],
            },
          }),
          b = null,
          v = null,
          S = null,
          R =
            i == null || (n = i.waffle_get_certs) == null
              ? void 0
              : n.password_encryption,
          L = R == null ? void 0 : R.cert_chain_pem;
        if (L != null && L.length > 0)
          try {
            var E,
              k = await o("WAWebX509Utils").extractCertificates(
                L.join(`
`),
              ),
              I = await o(
                "WAWebAccountLinkingCryptoUtils",
              ).validateCertificateChain(k, {
                source: "graphql",
                role: "password",
              });
            if (I == null)
              throw r("err")(
                "[WAFFLE] Password certificate chain validation failed",
              );
            var T = await I.getPublicKey({
              algorithm: {
                algorithm: { name: "RSA-OAEP", hash: { name: "SHA-1" } },
                usages: ["encrypt"],
              },
            });
            ((S = await o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(T)),
              (b = await o(
                "WAWebAccountLinkingCryptoUtils",
              ).importPasswordPublicKey(S, "SHA-256")),
              (v = (E = R == null ? void 0 : R.key_id) != null ? E : null));
          } catch (e) {
            (o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Failed to import password certificate from GetCerts",
                  ])),
              )
              .catching(r("getErrorSafe")(e)),
              (S = null),
              (b = null),
              (v = null));
          }
        var D = b != null;
        return (
          await o("WAWebWaffleCertificateCache").saveCertToIDB({
            encryptionPem: c,
            passwordIsOaep: D,
            passwordKeyId: v,
            passwordPem: S,
            passwordTtlSeconds: R == null ? void 0 : R.ttl_seconds,
            payloadKeyId: u,
            ttlSeconds:
              (a = l == null ? void 0 : l.ttl_seconds) != null ? a : null,
          }),
          {
            encryptionKey: y,
            passwordKeyId: v,
            passwordKeyIsOaepSha256: D,
            passwordPublicKey: b,
            payloadEncryptionKeyV2: C,
            payloadKeyId: u,
            source: "graphql",
          }
        );
      } catch (e) {
        var x =
          e instanceof o("WAWebGraphQLServerError").GraphQLServerError
            ? o("WAWebGraphQLServerError").formatGraphQLServerError(e)
            : e;
        return (
          o("WALogger")
            .ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] GetCerts query failed: ",
                  "",
                ])),
              x,
            )
            .tags("waffle", "account-linking"),
          null
        );
      }
    }
    async function q() {
      if (
        (N("fetchValidCertificate"),
        !o("WAWebAccountLinkingGatingUtils").isWafflePkiMigrationEnabled())
      )
        throw r("err")(
          "[WAFFLE Debug] Enable web_waffle_pki_migration for this session with ?gk_enable=web_waffle_pki_migration before forcing V2",
        );
      var e = await W();
      if (e == null)
        throw r("err")(
          "[WAFFLE Debug] V2 certificate fetch or validation failed; inspect the GetCerts error logs",
        );
      var t = await o("WAWebWaffleCertificateCache").loadCertFromIDB();
      if (
        t == null ||
        t.payloadKeyId !== e.payloadKeyId ||
        t.passwordIsOaep !== e.passwordKeyIsOaepSha256
      )
        throw r("err")(
          "[WAFFLE Debug] V2 certificate was not persisted to the cache",
        );
      return e;
    }
    var U = "whatsapp_web",
      V = {
        passwordChainLength: null,
        passwordKeyId: null,
        passwordTtlSeconds: null,
        payloadChainLength: null,
        payloadKeyId: null,
        payloadTtlSeconds: null,
      };
    async function H() {
      try {
        var e,
          t,
          n,
          a,
          i,
          l,
          s,
          u,
          c,
          d,
          m = await o("WAWebRelayClient").fetchQuery(
            B,
            {},
            { environmentType: U },
          ),
          p =
            m == null || (e = m.waffle_get_certs) == null
              ? void 0
              : e.payload_encryption,
          _ =
            m == null || (t = m.waffle_get_certs) == null
              ? void 0
              : t.password_encryption;
        return {
          environmentType: U,
          error: null,
          rawError: null,
          ok: (p == null ? void 0 : p.key_id) != null,
          passwordChainLength:
            (n =
              _ == null || (a = _.cert_chain_pem) == null
                ? void 0
                : a.length) != null
              ? n
              : null,
          passwordKeyId: (i = _ == null ? void 0 : _.key_id) != null ? i : null,
          passwordTtlSeconds:
            (l = _ == null ? void 0 : _.ttl_seconds) != null ? l : null,
          payloadChainLength:
            (s =
              p == null || (u = p.cert_chain_pem) == null
                ? void 0
                : u.length) != null
              ? s
              : null,
          payloadKeyId: (c = p == null ? void 0 : p.key_id) != null ? c : null,
          payloadTtlSeconds:
            (d = p == null ? void 0 : p.ttl_seconds) != null ? d : null,
        };
      } catch (e) {
        var f, g;
        return babelHelpers.extends({}, V, {
          environmentType: U,
          error:
            e instanceof o("WAWebGraphQLServerError").GraphQLServerError
              ? o("WAWebGraphQLServerError").formatGraphQLServerError(e)
              : r("getErrorSafe")(e).toString(),
          ok: !1,
          rawError:
            e instanceof o("WAWebGraphQLServerError").GraphQLServerError
              ? JSON.stringify(
                  (f = (g = e.source) == null ? void 0 : g.errors) != null
                    ? f
                    : [],
                )
              : null,
        });
      }
    }
    async function G() {
      var e = Math.floor(Date.now() / 1e3);
      try {
        var t = await o("WASmaxWaffleGetCertificateRPC").sendGetCertificateRPC({
          hasPasswordPem: !0,
          hasPayloadEncCertificates: !0,
          timestampElementValue: e,
        });
        if (t.name === "GetCertificateResponseSuccess") {
          var n,
            a = t.value.replyGetCertificateResponseMixin,
            i = (n = a.encryptionPem) == null ? void 0 : n.elementValue;
          if (i != null) {
            var l = String.fromCharCode.apply(null, i),
              s = await o("WAWebX509Utils").extractCertificates(l),
              u = await o(
                "WAWebAccountLinkingCryptoUtils",
              ).validateCertificateChain(s, { source: "iq", role: "payload" });
            if (u != null) {
              var c,
                d,
                m = await u.getPublicKey({
                  algorithm: {
                    algorithm: { name: "RSA-OAEP", hash: { name: "SHA-1" } },
                    usages: ["encrypt"],
                  },
                }),
                p = null,
                _ = null,
                f = null,
                b = a.passwordPem;
              if (b != null)
                try {
                  ((f = String.fromCharCode.apply(null, b.elementValue)),
                    (p = await o(
                      "WAWebAccountLinkingCryptoUtils",
                    ).importPasswordPublicKey(f)),
                    (_ = b.keyId));
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "[WAFFLE] Failed to import password PEM",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e));
                }
              var v =
                (c = (d = a.encryptionPem) == null ? void 0 : d.ttl) != null
                  ? c
                  : null;
              return (
                await o("WAWebWaffleCertificateCache").saveCertToIDB({
                  encryptionPem: l,
                  passwordIsOaep: !1,
                  passwordKeyId: _,
                  passwordPem: f,
                  passwordTtlSeconds: b == null ? void 0 : b.ttl,
                  payloadKeyId: null,
                  ttlSeconds: v,
                }),
                {
                  encryptionKey: m,
                  passwordKeyId: _,
                  passwordKeyIsOaepSha256: !1,
                  passwordPublicKey: p,
                  payloadEncryptionKeyV2: null,
                  payloadKeyId: null,
                  source: "iq",
                }
              );
            }
            return (
              o("WALogger").ERROR(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Fetching valid certificate failed",
                  ])),
              ),
              null
            );
          }
          return null;
        }
        var S = t.value.errorGetCertificateErrors;
        return (
          o("WALogger").ERROR(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] GetCertificate RPC failed: ",
                "",
              ])),
            S.name,
          ),
          null
        );
      } catch (e) {
        o("WALogger")
          .ERROR(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "fetchValidCertificate failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    var z = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(),
      j = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(),
      K = null;
    async function Q(e, t) {
      e: {
        if (e === "request_nonce")
          return o("WAWebWaffleIQErrorHandler").handleNonceRetry(t);
        if (e === "refresh_token") {
          var n = t.nextBackoffMs();
          if (n == null) return !1;
          return (await o("WAPromiseDelays").delayMs(n), X());
          break e;
        }
        if (e === "refetch_certs") {
          await o("WAWebWaffleCertificateCache").invalidateCertInIDB();
          var r = t.nextBackoffMs();
          if (r == null) return !1;
          await o("WAPromiseDelays").delayMs(r);
          var a = await M();
          return a != null;
        }
        if (e === "purge") {
          return (
            o(
              "WAWebMetaAiWaffleAuthTokenCache",
            ).clearMetaAiWaffleAuthTokenBlobCache(),
            await $.purgeWaffleData(),
            await o(
              "WAWebSubscriptionAgeGating",
            ).invalidateSubscriptionAgeVerdict(),
            !0
          );
          break e;
        }
        if (e === "pause") {
          return (
            await o("WAWebAccountLinkingHandler").handlePausedState(),
            !0
          );
          break e;
        }
        if (e === "server_purge") {
          var i = await te();
          return (
            i &&
              (o(
                "WAWebMetaAiWaffleAuthTokenCache",
              ).clearMetaAiWaffleAuthTokenBlobCache(),
              await $.purgeWaffleData(),
              await o(
                "WAWebSubscriptionAgeGating",
              ).invalidateSubscriptionAgeVerdict()),
            i
          );
          break e;
        }
        if (e === "server_pause") {
          var l = await ne();
          return (
            l && (await o("WAWebAccountLinkingHandler").handlePausedState()),
            l
          );
          break e;
        }
        if (e === "retry" || e === "handled" || e === "fail") return !1;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    async function X() {
      N("refreshAccessToken");
      var e = K;
      return e != null
        ? (o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
            traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
              .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_DEDUPLICATED,
          }),
          e)
        : ((K = Y().finally(function () {
            K = null;
          })),
          K);
    }
    async function Y() {
      var e = Date.now();
      o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
        traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
          .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_INITIATED,
      });
      var t = await $.getAccountLinkingData();
      if (t == null) return (J(e), !1);
      var n = t.fbid,
        a = t.nonce,
        i = await o("WAWebAccountLinkingCryptoUtils").generateRSAKeys(),
        l = i.privateKey,
        s = i.publicKey,
        u = await o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(s),
        c = {
          version: 1,
          timestamp: Date.now(),
          nonce: a,
          client_pub_key: u,
          client_pub_key_type: "RSA 2048",
        },
        d = await o("WAWebAccountLinkingCryptoUtils").wrapWafflePayload(c);
      if (n != null) {
        var m = await o(
          "WASmaxWaffleRefreshAccessTokensRPC",
        ).sendRefreshAccessTokensRPC({
          rSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroupArgs:
            o("WAWebWaffleEncryptionMetadataArgs").waffleEncryptionMetadataArgs(
              d,
            ),
          timestampElementValue: Date.now(),
          fbidElementValue: n,
        });
        if (m.name === "RefreshAccessTokensResponseSuccess") {
          z.reset();
          var p = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(
              m.value.encryptionMetadataRSAEncryptionMetadataMixin,
            ),
            _ = p.data,
            f = p.key,
            g = p.nonce,
            h = p.tag;
          try {
            var y = await o(
              "WAWebAccountLinkingCryptoUtils",
            ).decryptRSAEncryptedPayload(l, f, _, g, h);
            if ("access_token" in y)
              return (
                await $.updateAccesstoken(y.access_token),
                o(
                  "WAWebMetaAiWaffleAuthTokenCache",
                ).refreshMetaAiWaffleAuthTokenBlob(),
                o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
                  elapsedMs: Date.now() - e,
                  hasAccessToken: !0,
                  pkiVersion: o(
                    "WAWebWaffleLifecycleWamLogger",
                  ).mapPkiVersionToWam(d.version),
                  traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
                    .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_SUCCESS,
                }),
                !0
              );
            J(e);
          } catch (t) {
            (o("WALogger")
              .ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Failed to refresh access token",
                  ])),
              )
              .catching(r("getErrorSafe")(t)),
              J(e));
          }
        } else {
          var C,
            S = m.value.errorRefreshAccessTokensErrors,
            R = await o("WAWebWaffleIQErrorHandler").handleCommonWaffleIQError(
              "refreshAccessToken",
              S.name,
              d.version,
            );
          ((C = o("WAWebWaffleLifecycleWamLogger")).logRefreshToken({
            elapsedMs: Date.now() - e,
            errorAction: C.mapIQErrorActionToWam(R),
            errorCode: C.mapIQErrorNameToWamCode(S.name),
            pkiVersion: C.mapPkiVersionToWam(d.version),
            traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
              .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_ERROR,
          }),
            await Q(R, z),
            o("WALogger").ERROR(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Refresh access token RPC failed: ",
                  "",
                ])),
              S.name,
            ));
        }
      } else J(e);
      return !1;
    }
    function J(e) {
      o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
        elapsedMs: Date.now() - e,
        hasAccessToken: !1,
        traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
          .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_ERROR,
      });
    }
    async function Z() {
      N("ping");
      var e = Date.now(),
        t = await $.getAccountLinkingData();
      if (t != null) {
        var n = t.accesstoken,
          r = t.fbid;
        if (n != null) {
          var a = { version: 1, timestamp: Date.now(), access_token: n },
            i = await o("WAWebAccountLinkingCryptoUtils").wrapWafflePayload(a);
          if (r != null) {
            var l = await o("WASmaxWaffleWFPingRPC").sendWFPingRPC({
              rSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroupArgs:
                o(
                  "WAWebWaffleEncryptionMetadataArgs",
                ).waffleEncryptionMetadataArgs(i),
              timestampElementValue: Date.now(),
              fbidElementValue: r,
            });
            if (l.name === "WFPingResponseSuccess") {
              j.reset();
              var s = l.value.pingIntervalElementValue;
              (await $.updatePingInterval(s),
                o("WAWebWaffleLifecycleWamLogger").logPing({
                  elapsedMs: Date.now() - e,
                  hasAccessToken: !0,
                  pkiVersion: o(
                    "WAWebWaffleLifecycleWamLogger",
                  ).mapPkiVersionToWam(i.version),
                }));
            } else {
              var u,
                c = l.value.errorWfPingErrors,
                d = await o(
                  "WAWebWaffleIQErrorHandler",
                ).handleCommonWaffleIQError("ping", c.name, i.version);
              ((u = o("WAWebWaffleLifecycleWamLogger")).logPing({
                elapsedMs: Date.now() - e,
                errorAction: u.mapIQErrorActionToWam(d),
                errorCode: u.mapIQErrorNameToWamCode(c.name),
                hasAccessToken: !0,
                pkiVersion: u.mapPkiVersionToWam(i.version),
              }),
                await Q(d, j),
                o("WALogger").ERROR(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Ping failed: ",
                      "",
                    ])),
                  c.name,
                ));
            }
          } else
            (o("WAWebWaffleLifecycleWamLogger").logPing({
              elapsedMs: Date.now() - e,
              hasAccessToken: !0,
            }),
              o("WALogger").ERROR(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Ping failed due to null waEntFbid",
                  ])),
              ));
        }
      }
    }
    async function ee() {
      N("stateExists");
      var e = await o("WASmaxWaffleStateExistsRPC").sendStateExistsRPC({
        timestampElementValue: Date.now(),
      });
      if (e.name === "StateExistsResponseSuccess") {
        var t = o(
          "WAWebAccountLinkingConstants",
        ).AccountLinkingStateExists.cast(e.value.wfStateElementValue);
        if (t != null) return t;
        o("WALogger").ERROR(
          L ||
            (L = babelHelpers.taggedTemplateLiteralLoose([
              "[WAFFLE] Failed to parse state exists response",
            ])),
        );
      } else {
        var n = e.value.errorStateExistsErrors;
        (await o("WAWebWaffleIQErrorHandler").handleCommonWaffleIQError(
          "stateExists",
          n.name,
        ),
          o("WALogger").ERROR(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] StateExists RPC failed: ",
                "",
              ])),
            n.name,
          ));
      }
    }
    async function te() {
      N("forceDeleteState");
      var e = await o(
        "WASmaxWaffleForceDeleteStateRPC",
      ).sendForceDeleteStateRPC({
        timestampElementValue: Math.floor(Date.now() / 1e3),
      });
      if (e.name === "ForceDeleteStateResponseSuccess") return !0;
      var t = e.value.errorForceDeleteStateErrors;
      return (
        o("WALogger")
          .ERROR(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] ForceDeleteState RPC failed: ",
                "",
              ])),
            t.name,
          )
          .sendLogs("waffle-force-delete-state-failed"),
        !1
      );
    }
    async function ne() {
      N("forceSuspendState");
      var e = await o(
        "WASmaxWaffleForceSuspendStateRPC",
      ).sendForceSuspendStateRPC({
        timestampElementValue: Math.floor(Date.now() / 1e3),
      });
      if (e.name === "ForceSuspendStateResponseSuccess") return !0;
      var t = e.value.errorForceSuspendStateErrors;
      return (
        o("WALogger")
          .ERROR(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] ForceSuspendState RPC failed: ",
                "",
              ])),
            t.name,
          )
          .sendLogs("waffle-force-suspend-state-failed", { sampling: 0.01 }),
        !1
      );
    }
    async function re() {
      N("fetchServiceData");
      var e = await $.getAccountLinkingData();
      if (e != null) {
        var t = e.accesstoken,
          n;
        try {
          n = await o("WAWebRelayClient").commitMutation(
            r("WAWebWaffleFXServiceDataQueryV2Mutation"),
            {},
            { accessToken: t },
          );
        } catch (e) {
          var a =
            e instanceof o("WAWebGraphQLServerError").GraphQLServerError
              ? o("WAWebGraphQLServerError").formatGraphQLServerError(e)
              : e;
          o("WALogger")
            .ERROR(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] fetchServiceData mutation failed: ",
                  "",
                ])),
              a,
            )
            .tags("waffle", "account-linking")
            .sendLogs("waffle-fetch-service-data-mutation-failed", {
              sampling: 0.01,
            });
          return;
        }
        if (n == null) {
          o("WALogger").ERROR(
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] Fetching service data result",
              ])),
          );
          return;
        }
        var i = o("WAWebAPIParser").parseServiceData(n);
        if (i == null) {
          o("WALogger").ERROR(
            x ||
              (x = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] Fetching service data failed",
              ])),
          );
          return;
        }
        await $.updateServiceData(i);
      }
    }
    ((l.assertModeAllowed = N),
      (l.fetchValidCertificate = M),
      (l.forceWafflePkiV2ForDebug = q),
      (l.runWaffleGetCertsForDebug = H),
      (l.handleRecoveryAction = Q),
      (l.refreshAccessToken = X),
      (l.ping = Z),
      (l.stateExists = ee),
      (l.fetchServiceData = re));
  },
  98,
);
