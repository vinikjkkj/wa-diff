__d(
  "WAWebAccountLinkingAPI",
  [
    "WAAsyncSleep",
    "WALogger",
    "WASmaxWaffleEncryptedPayloadRequestRPC",
    "WASmaxWaffleForceDeleteStateRPC",
    "WASmaxWaffleForceSuspendStateRPC",
    "WASmaxWaffleGenerateAccessTokensRPC",
    "WASmaxWaffleGenerateWAEntACUserRPC",
    "WASmaxWaffleGetCertificateRPC",
    "WASmaxWaffleRefreshAccessTokensRPC",
    "WASmaxWaffleStateExistsRPC",
    "WASmaxWaffleWFPingRPC",
    "WAWebAPIParser",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingCryptoUtils",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebAccountLinkingGatingUtils",
    "WAWebAccountLinkingHandler",
    "WAWebDirectConnectionX509",
    "WAWebGraphQLServerError",
    "WAWebRelayClient",
    "WAWebWaffleCertificateCache",
    "WAWebWaffleFXServiceDataQueryV2Mutation",
    "WAWebWaffleIQErrorHandler",
    "WAWebWaffleLifecycleWamLogger",
    "WAWebWamEnumWaffleLifecycleTraceActionType",
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
      $,
      P,
      N,
      M,
      w,
      A,
      F,
      O,
      B,
      W = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      ),
      q = {
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
    function U(t) {
      var n = o("WAWebAccountLinkingGatingUtils").getWaffleMode(),
        a = q[t];
      if (!a.includes(n))
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  '[WAFFLE] API "',
                  '" not allowed in ',
                  " mode",
                ])),
              t,
              n,
            )
            .sendLogs("waffle-api-mode-not-allowed"),
          r("err")('[WAFFLE] API "' + t + '" not allowed in ' + n + " mode")
        );
    }
    async function V() {
      U("fetchValidCertificate");
      var e = await o("WAWebWaffleCertificateCache").loadCertFromIDB();
      if (e != null) {
        var t = await H(e.encryptionPem, e.passwordPem, e.passwordKeyId);
        if (t != null) return t;
      }
      return G();
    }
    async function H(e, t, n) {
      try {
        var a = await o("WAWebDirectConnectionX509").extractCertificates(e),
          i = await o(
            "WAWebAccountLinkingCryptoUtils",
          ).validateCertificateChain(a);
        if (i != null) {
          var l = await i.getPublicKey({
              algorithm: {
                algorithm: { name: "RSA-OAEP", hash: { name: "SHA-1" } },
                usages: ["encrypt"],
              },
            }),
            u = null;
          return (
            t != null &&
              (u = await o(
                "WAWebAccountLinkingCryptoUtils",
              ).importPasswordPublicKey(t)),
            {
              encryptionKey: l,
              passwordPublicKey: u,
              passwordKeyId: n != null ? n : null,
            }
          );
        }
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] Failed to restore cert from PEM",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
      return null;
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
              s = await o("WAWebDirectConnectionX509").extractCertificates(l),
              p = await o(
                "WAWebAccountLinkingCryptoUtils",
              ).validateCertificateChain(s);
            if (p != null) {
              var _,
                f,
                g = await p.getPublicKey({
                  algorithm: {
                    algorithm: { name: "RSA-OAEP", hash: { name: "SHA-1" } },
                    usages: ["encrypt"],
                  },
                }),
                h = null,
                y = null,
                C = null,
                b = a.passwordPem;
              if (b != null)
                try {
                  ((C = String.fromCharCode.apply(null, b.elementValue)),
                    (h = await o(
                      "WAWebAccountLinkingCryptoUtils",
                    ).importPasswordPublicKey(C)),
                    (y = b.keyId));
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[WAFFLE] Failed to import password PEM",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e));
                }
              var v =
                (_ = (f = a.encryptionPem) == null ? void 0 : f.ttl) != null
                  ? _
                  : null;
              return (
                await o("WAWebWaffleCertificateCache").saveCertToIDB(
                  l,
                  C,
                  y,
                  v,
                ),
                { encryptionKey: g, passwordPublicKey: h, passwordKeyId: y }
              );
            }
            return (
              o("WALogger").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
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
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
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
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "fetchValidCertificate failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    var z = (B = o(
        "WAWebWaffleIQErrorHandler",
      )).createWaffleOperationRetryState(),
      j = B.createWaffleOperationRetryState(),
      K = B.createWaffleOperationRetryState(),
      Q = B.createWaffleOperationRetryState(),
      X = B.createWaffleOperationRetryState(),
      Y = null;
    async function J(e, t) {
      e: {
        if (e === "request_nonce")
          return o("WAWebWaffleIQErrorHandler").handleNonceRetry(t);
        if (e === "refresh_token") {
          var n = t.nextBackoffMs();
          if (n == null) return !1;
          return (await o("WAAsyncSleep").asyncSleep(n), te());
          break e;
        }
        if (e === "refetch_certs") {
          var r = t.nextBackoffMs();
          if (r == null) return !1;
          await o("WAAsyncSleep").asyncSleep(r);
          var a = await V();
          return a != null;
        }
        if (e === "purge") {
          return (await W.purgeWaffleData(), !0);
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
          var i = await ie();
          return (i && (await W.purgeWaffleData()), i);
          break e;
        }
        if (e === "server_pause") {
          var l = await le();
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
    async function Z(e) {
      var t = e.disclosureId,
        n = e.disclosureLc,
        a = e.disclosureLg,
        i = e.disclosureVersion,
        l = e.rawPassword;
      U("generateWAEntACUser");
      var s = await V();
      if (s == null) {
        o("WALogger").ERROR(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[WAFFLE] GenerateWAEntACUser failed: no valid certificate",
            ])),
        );
        return;
      }
      var u = s.passwordKeyId,
        c = s.passwordPublicKey;
      if (c == null || u == null) {
        o("WALogger").ERROR(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "[WAFFLE] GenerateWAEntACUser failed: no password PEM",
            ])),
        );
        return;
      }
      var d = await o("WAWebAccountLinkingCryptoUtils").encryptPassword(
          l,
          c,
          u,
        ),
        m = await o("WAWebAccountLinkingCryptoUtils").generateRSAKeys(),
        y = m.privateKey,
        C = m.publicKey,
        b = await o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(C, !0),
        v = {
          version: 1,
          timestamp: Date.now(),
          password: d,
          client_pub_key: b,
          client_pub_key_type: "RSA 2048",
        },
        S = await o(
          "WAWebAccountLinkingCryptoUtils",
        ).wrapPayloadWithRSAAESEncryption(v, s.encryptionKey),
        R = await o(
          "WASmaxWaffleGenerateWAEntACUserRPC",
        ).sendGenerateWAEntACUserRPC({
          rSAEncryptionMetadataMixinArgs: {
            encryptedKeyElementValue: S.encryptedKey,
            nonceElementValue: S.nonce,
            encryptedDataElementValue: S.cipherText,
            authTagElementValue: S.tag,
          },
          timestampElementValue: Date.now(),
          disclosureId: t,
          disclosureVersion: i,
          disclosureLg: a,
          disclosureLc: n,
        });
      if (R.name === "GenerateWAEntACUserResponseSuccess") {
        z.reset();
        var L = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(
            R.value.encryptionMetadataRSAEncryptionMetadataMixin,
          ),
          E = L.data,
          k = L.key,
          I = L.nonce,
          T = L.tag;
        try {
          var D = await o(
            "WAWebAccountLinkingCryptoUtils",
          ).decryptRSAEncryptedPayload(y, k, E, I, T);
          "fbid" in D
            ? await W.updateEntCreationData(String(D.fbid), d)
            : o("WALogger").ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] GenerateWAEntACUser success, no fbid",
                  ])),
              );
        } catch (e) {
          o("WALogger")
            .ERROR(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Failed to process generateWAEntACUser response",
                ])),
            )
            .catching(r("getErrorSafe")(e));
        }
      } else {
        var x = R.value.errorGenerateWaEntAcUserErrors,
          $ = await o("WAWebWaffleIQErrorHandler").handleCommonWaffleIQError(
            "generateWAEntACUser",
            x.name,
          );
        (await J($, z),
          o("WALogger").ERROR(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] GenerateWAEntACUser RPC failed: ",
                "",
              ])),
            x.name,
          ));
      }
    }
    async function ee() {
      U("generateAccessTokens");
      var e = await W.getAccountLinkingData();
      if (e == null) {
        o("WALogger").ERROR(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "[WAFFLE] GenerateAccessTokens failed: no account linking data",
            ])),
        );
        return;
      }
      var t = e.encryptedPassword,
        n = e.fbid;
      if (n == null || t == null) {
        o("WALogger").ERROR(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "[WAFFLE] GenerateAccessTokens failed: missing fbid or encrypted password",
            ])),
        );
        return;
      }
      var r = await o("WAWebAccountLinkingCryptoUtils").generateRSAKeys(),
        a = r.privateKey,
        i = r.publicKey,
        l = await o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(i, !0),
        s = {
          version: 1,
          timestamp: Math.floor(Date.now() / 1e3),
          password: t,
          client_pub_key: l,
          client_pub_key_type: "RSA 2048",
        },
        u = await o(
          "WAWebAccountLinkingCryptoUtils",
        ).wrapPayloadWithRSAAESEncryption(s),
        c = await o("WAWebAccountLinkingCryptoUtils").computeIdSign(n),
        d = await o(
          "WASmaxWaffleGenerateAccessTokensRPC",
        ).sendGenerateAccessTokensRPC({
          rSAEncryptionMetadataMixinArgs: {
            encryptedKeyElementValue: u.encryptedKey,
            nonceElementValue: u.nonce,
            encryptedDataElementValue: u.cipherText,
            authTagElementValue: u.tag,
          },
          timestampElementValue: Math.floor(Date.now() / 1e3),
          fbidElementValue: n,
          idSignElementValue: c,
        });
      if (d.name === "GenerateAccessTokensResponseSuccess") {
        j.reset();
        var m = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(
            d.value.encryptionMetadataRSAEncryptionMetadataMixin,
          ),
          p = m.data,
          _ = m.key,
          f = m.nonce,
          g = m.tag;
        try {
          var h = await o(
            "WAWebAccountLinkingCryptoUtils",
          ).decryptRSAEncryptedPayload(a, _, p, f, g);
          if (!("access_token" in h)) {
            o("WALogger").ERROR(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] GenerateAccessTokens success but response missing access_token",
                ])),
            );
            return;
          }
          var R = d.value.pingIntervalElementValue;
          await W.updateGenerateAccessTokensData(
            h.access_token,
            "nonce" in h ? h.nonce : null,
            "fbid" in h ? String(h.fbid) : null,
            R,
          );
        } catch (e) {
          o("WALogger")
            .ERROR(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
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
        var L = d.value.errorGenerateAccessTokensErrors,
          E = await o("WAWebWaffleIQErrorHandler").handleCommonWaffleIQError(
            "generateAccessTokens",
            L.name,
          );
        (await J(E, j),
          o("WALogger").ERROR(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] GenerateAccessTokens RPC failed: ",
                "",
              ])),
            L.name,
          ));
      }
    }
    async function te() {
      U("refreshAccessToken");
      var e = Y;
      return e != null
        ? (o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
            traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
              .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_DEDUPLICATED,
          }),
          e)
        : ((Y = ne().finally(function () {
            Y = null;
          })),
          Y);
    }
    async function ne() {
      var e = Date.now();
      o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
        traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
          .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_INITIATED,
      });
      var t = await W.getAccountLinkingData();
      if (t == null) return (re(e, !1), !1);
      var n = t.fbid,
        a = t.nonce,
        i = await o("WAWebAccountLinkingCryptoUtils").generateRSAKeys(),
        l = i.privateKey,
        s = i.publicKey,
        u = await o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(s, !0),
        c = {
          version: 1,
          timestamp: Date.now(),
          nonce: a,
          client_pub_key: u,
          client_pub_key_type: "RSA 2048",
        },
        d = await o(
          "WAWebAccountLinkingCryptoUtils",
        ).wrapPayloadWithRSAAESEncryption(c);
      if (n != null) {
        var m = await o(
          "WASmaxWaffleRefreshAccessTokensRPC",
        ).sendRefreshAccessTokensRPC({
          rSAEncryptionMetadataMixinArgs: {
            encryptedKeyElementValue: d.encryptedKey,
            nonceElementValue: d.nonce,
            encryptedDataElementValue: d.cipherText,
            authTagElementValue: d.tag,
          },
          timestampElementValue: Date.now(),
          fbidElementValue: n,
        });
        if (m.name === "RefreshAccessTokensResponseSuccess") {
          K.reset();
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
                await W.updateAccesstoken(y.access_token),
                o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
                  elapsedMs: Date.now() - e,
                  hasAccessToken: !0,
                  traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
                    .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_SUCCESS,
                }),
                !0
              );
            re(e, !1);
          } catch (t) {
            (o("WALogger")
              .ERROR(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Failed to refresh access token",
                  ])),
              )
              .catching(r("getErrorSafe")(t)),
              re(e, !1));
          }
        } else {
          var C = m.value.errorRefreshAccessTokensErrors,
            b = await o("WAWebWaffleIQErrorHandler").handleCommonWaffleIQError(
              "refreshAccessToken",
              C.name,
            );
          (o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
            elapsedMs: Date.now() - e,
            errorAction: o(
              "WAWebWaffleLifecycleWamLogger",
            ).mapIQErrorActionToWam(b),
            errorCode: o(
              "WAWebWaffleLifecycleWamLogger",
            ).mapIQErrorNameToWamCode(C.name),
            traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
              .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_ERROR,
          }),
            await J(b, K),
            o("WALogger").ERROR(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Refresh access token RPC failed: ",
                  "",
                ])),
              C.name,
            ));
        }
      } else re(e, !1);
      return !1;
    }
    function re(e, t) {
      o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
        elapsedMs: Date.now() - e,
        hasAccessToken: t,
        traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
          .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_ERROR,
      });
    }
    async function oe() {
      U("ping");
      var e = Date.now(),
        t = await W.getAccountLinkingData();
      if (t != null) {
        var n = t.accesstoken,
          r = t.fbid;
        if (n != null) {
          var a = { version: 1, timestamp: Date.now(), access_token: n },
            i = await o(
              "WAWebAccountLinkingCryptoUtils",
            ).wrapPayloadWithRSAAESEncryption(a);
          if (r != null) {
            var l = await o("WASmaxWaffleWFPingRPC").sendWFPingRPC({
              rSAEncryptionMetadataMixinArgs: {
                encryptedKeyElementValue: i.encryptedKey,
                nonceElementValue: i.nonce,
                encryptedDataElementValue: i.cipherText,
                authTagElementValue: i.tag,
              },
              timestampElementValue: Date.now(),
              fbidElementValue: r,
            });
            if (l.name === "WFPingResponseSuccess") {
              Q.reset();
              var s = l.value.pingIntervalElementValue;
              (await W.updatePingInterval(s),
                o("WAWebWaffleLifecycleWamLogger").logPing({
                  elapsedMs: Date.now() - e,
                  hasAccessToken: !0,
                }));
            } else {
              var u = l.value.errorWfPingErrors,
                c = await o(
                  "WAWebWaffleIQErrorHandler",
                ).handleCommonWaffleIQError("ping", u.name);
              (o("WAWebWaffleLifecycleWamLogger").logPing({
                elapsedMs: Date.now() - e,
                errorAction: o(
                  "WAWebWaffleLifecycleWamLogger",
                ).mapIQErrorActionToWam(c),
                errorCode: o(
                  "WAWebWaffleLifecycleWamLogger",
                ).mapIQErrorNameToWamCode(u.name),
                hasAccessToken: !0,
              }),
                await J(c, Q),
                o("WALogger").ERROR(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Ping failed: ",
                      "",
                    ])),
                  u.name,
                ));
            }
          } else
            (o("WAWebWaffleLifecycleWamLogger").logPing({
              elapsedMs: Date.now() - e,
              hasAccessToken: !0,
            }),
              o("WALogger").ERROR(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Ping failed due to null waEntFbid",
                  ])),
              ));
        }
      }
    }
    async function ae() {
      U("stateExists");
      var e = await o("WASmaxWaffleStateExistsRPC").sendStateExistsRPC({
        timestampElementValue: Date.now(),
      });
      if (e.name === "StateExistsResponseSuccess") {
        var t = o(
          "WAWebAccountLinkingConstants",
        ).AccountLinkingStateExists.cast(e.value.wfStateElementValue);
        if (t != null) return t;
        o("WALogger").ERROR(
          I ||
            (I = babelHelpers.taggedTemplateLiteralLoose([
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
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] StateExists RPC failed: ",
                "",
              ])),
            n.name,
          ));
      }
    }
    async function ie() {
      U("forceDeleteState");
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
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] ForceDeleteState RPC failed: ",
                "",
              ])),
            t.name,
          )
          .sendLogs("waffle-force-delete-state-failed"),
        !1
      );
    }
    async function le() {
      U("forceSuspendState");
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
            x ||
              (x = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] ForceSuspendState RPC failed: ",
                "",
              ])),
            t.name,
          )
          .sendLogs("waffle-force-suspend-state-failed", { sampling: 0.01 }),
        !1
      );
    }
    async function se() {
      U("fetchServiceData");
      var e = await W.getAccountLinkingData();
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
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
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
            P ||
              (P = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] Fetching service data result",
              ])),
          );
          return;
        }
        var i = o("WAWebAPIParser").parseServiceData(n);
        if (i == null) {
          o("WALogger").ERROR(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] Fetching service data failed",
              ])),
          );
          return;
        }
        await W.updateServiceData(i);
      }
    }
    var ue = { FB: 0, IG: 1 },
      ce = {
        FB: "wa_nta_username_reservation_on_fb",
        IG: "wa_nta_username_reservation_on_ig",
      };
    async function de(e, t) {
      U("sendLinkingMutation");
      var n = await W.getAccountLinkingData();
      if (n == null)
        throw (
          o("WALogger")
            .ERROR(
              M ||
                (M = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Linking mutation failed: no account linking data",
                ])),
            )
            .sendLogs("waffle-linking-no-data"),
          r("err")("No account linking data")
        );
      var a = n.accesstoken,
        i = n.fbid;
      if (i == null || a == null)
        throw (
          o("WALogger")
            .ERROR(
              w ||
                (w = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Linking mutation failed: missing fbid or access token",
                ])),
            )
            .sendLogs("waffle-linking-missing-creds"),
          r("err")("Missing fbid or access token")
        );
      var l = await o("WAWebAccountLinkingCryptoUtils").generateRSAKeys(),
        s = l.privateKey,
        u = l.publicKey,
        c = await o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(u, !0),
        d = {
          version: 1,
          timestamp: Math.floor(Date.now() / 1e3),
          access_token: a,
          client_pub_key: c,
          client_pub_key_type: "RSA 2048",
          action: "waffle_100",
          target_account_type: ue[t],
          opaque_target_accounts_to_be_linked_strings: [e],
          linking_entry_point: ce[t],
          family_device_id: "waffle_debug",
        },
        m = await o(
          "WAWebAccountLinkingCryptoUtils",
        ).wrapPayloadWithRSAAESEncryption(d),
        p;
      try {
        p = await o(
          "WASmaxWaffleEncryptedPayloadRequestRPC",
        ).sendEncryptedPayloadRequestRPC({
          actionElementValue: "waffle_100",
          fbidElementValue: i,
          timestampElementValue: Math.floor(Date.now() / 1e3),
          rSAEncryptionMetadataMixinArgs: {
            encryptedKeyElementValue: m.encryptedKey,
            nonceElementValue: m.nonce,
            encryptedDataElementValue: m.cipherText,
            authTagElementValue: m.tag,
          },
        });
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              A ||
                (A = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Linking mutation error",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          e
        );
      }
      if (p.name === "EncryptedPayloadRequestResponseSuccess") {
        var _ = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(
            p.value.encryptionMetadataRSAEncryptionMetadataMixin,
          ),
          f = _.data,
          g = _.key,
          h = _.nonce,
          y = _.tag,
          C = await o(
            "WAWebAccountLinkingCryptoUtils",
          ).decryptRSAEncryptedPayload(s, g, f, h, y),
          b = C;
        if (b.success === !0 && b.link_mutation_succeeded === !0)
          await W.updateAccountLinkingState(
            o("WAWebAccountLinkingConstants").AccountLinkState.Active,
          );
        else
          throw (
            o("WALogger")
              .ERROR(
                F ||
                  (F = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Linking mutation failed: success=",
                    " link_mutation_succeeded=",
                    "",
                  ])),
                String(b.success),
                String(b.link_mutation_succeeded),
              )
              .sendLogs("waffle-linking-mutation-failed"),
            r("err")("Linking mutation failed")
          );
      } else {
        var v = p.value.errorEncryptedPayloadRequestErrors,
          S = await o("WAWebWaffleIQErrorHandler").handleCommonWaffleIQError(
            "linkAction",
            v.name,
          );
        throw (
          await J(S, X),
          o("WALogger")
            .ERROR(
              O ||
                (O = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Linking mutation RPC error: ",
                  "",
                ])),
              v.name,
            )
            .sendLogs("waffle-linking-mutation-rpc-error"),
          r("err")("Linking mutation RPC error: %s", v.name)
        );
      }
    }
    ((l.fetchValidCertificate = V),
      (l.generateWAEntACUser = Z),
      (l.generateAccessTokens = ee),
      (l.refreshAccessToken = te),
      (l.ping = oe),
      (l.stateExists = ae),
      (l.forceDeleteState = ie),
      (l.forceSuspendState = le),
      (l.fetchServiceData = se),
      (l.sendLinkingMutation = de));
  },
  98,
);
