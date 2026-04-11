__d(
  "WAWebCrosspostingAPI",
  [
    "WALogger",
    "WASmaxWaffleEncryptedPayloadRequestRPC",
    "WAWebAPIParser",
    "WAWebAccountLinkingCryptoUtils",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebCrossposting.flow",
    "WAWebCrosspostingDBOperations",
    "WAWebCrosspostingHelper",
    "WAWebCrosspostingParser",
    "WAWebGraphQLServerError",
    "WAWebRelayClient",
    "WAWebWaffleXEQuery",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "crossposting",
      ),
      d = ["EncryptedPayloadRequestResponseError"];
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.destination,
            a = t.expirationTime,
            i = t.publicKeyBase64,
            l = t.sessionId,
            s = t.uniqueIds,
            u = yield c.getAccountLinkingData();
          if (u != null) {
            var d = u.accesstoken;
            try {
              var m = yield o("WAWebRelayClient").commitMutation(
                r("WAWebWaffleXEQuery"),
                {
                  input: {
                    exp_time: [a],
                    purpose_client_pub_key: i,
                    waffle_unique_id_count: s.length,
                    waffle_unique_ids: s,
                    waffle_xas: n,
                    session_id: l,
                  },
                },
                { accessToken: d },
              );
              return m;
            } catch (t) {
              var p =
                t instanceof o("WAWebGraphQLServerError").GraphQLServerError
                  ? o("WAWebGraphQLServerError").formatGraphQLServerError(t)
                  : t;
              throw (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Eligibility Request Failed: ",
                        "",
                      ])),
                    p,
                  )
                  .tags("waffle", "crossposting", "eligibility")
                  .sendLogs("waffle-eligibility-request-failed", {
                    sampling: 0.01,
                  }),
                t
              );
            }
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
          var t = e.crosspostingDestination,
            n = e.encryptedPayload,
            a = e.mediaType,
            i = e.sessionId,
            l = e.statusMessageId,
            m = yield c.getAccountLinkingData();
          if (m != null) {
            var p = m.accesstoken,
              _ = m.fbid,
              f = yield o("WAWebAccountLinkingCryptoUtils").generateRSAKeys(),
              g = f.privateKey,
              h = f.publicKey,
              y = yield o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(
                h,
                !0,
              ),
              C = {
                version: 1,
                timestamp: Date.now(),
                access_token: p,
                client_pub_key: y,
                client_pub_key_type: "RSA 2048",
                encrypted_payload: n,
                action: "waffle_1",
              },
              b = yield o(
                "WAWebAccountLinkingCryptoUtils",
              ).wrapPayloadWithRSAAESEncryption(C);
            if (_ != null)
              try {
                var v = yield o(
                  "WASmaxWaffleEncryptedPayloadRequestRPC",
                ).sendEncryptedPayloadRequestRPC({
                  actionElementValue: "waffle_1",
                  fbidElementValue: _,
                  timestampElementValue: Date.now(),
                  rSAEncryptionMetadataMixinArgs: {
                    encryptedKeyElementValue: b.encryptedKey,
                    nonceElementValue: b.nonce,
                    encryptedDataElementValue: b.cipherText,
                    authTagElementValue: b.tag,
                  },
                });
                if (v.name === "EncryptedPayloadRequestResponseSuccess") {
                  var S = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(
                      v.value.encryptionMetadataRSAEncryptionMetadataMixin,
                    ),
                    R = S.data,
                    L = S.key,
                    E = S.nonce,
                    k = S.tag,
                    I = yield o(
                      "WAWebAccountLinkingCryptoUtils",
                    ).decryptRSAEncryptedPayload(g, L, R, E, k);
                  if ("waffle_xr" in I) {
                    var T = o(
                      "WAWebCrosspostingParser",
                    ).parseCrosspostingIQResponse(I);
                    yield o(
                      "WAWebCrosspostingHelper",
                    ).processCrosspostingResponse(T, l);
                  }
                  yield o("WAWebCrosspostingHelper").logCrosspostingWamEvent({
                    crosspostingDestination: t,
                    sessionId: i,
                    statusMessageId: l,
                    mediaType: a,
                    isSuccess: !0,
                  });
                }
                if (d.includes(v.name))
                  throw (
                    yield o(
                      "WAWebCrosspostingDBOperations",
                    ).updateCrosspostingState({
                      statusMessageId: l,
                      crosspostingDestination: t,
                      crosspostingState: o("WAWebCrossposting.flow")
                        .CrosspostingState.HARD_FAILURE,
                    }),
                    yield o("WAWebCrosspostingHelper").logCrosspostingWamEvent({
                      crosspostingDestination: t,
                      sessionId: i,
                      statusMessageId: l,
                      mediaType: a,
                      isSuccess: !1,
                      errorType: v.name,
                    }),
                    r("err")("EncryptedPayloadRequestResponseError")
                  );
              } catch (e) {
                throw (
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[WAFFLE] Crossposting IQ RPC failed: ",
                          "",
                        ])),
                      e,
                    )
                    .tags("waffle", "crossposting", "iq")
                    .sendLogs("waffle-crossposting-iq-rpc-failed", {
                      sampling: 0.01,
                    }),
                  e
                );
              }
            else
              throw (
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Crossposting IQ failed due to null waEntFbid",
                      ])),
                  )
                  .tags("waffle", "crossposting", "iq")
                  .sendLogs("waffle-crossposting-iq-null-fbid", {
                    sampling: 0.01,
                  }),
                r("err")("CrosspostingIQNullWaEntFbid")
              );
          }
        })),
        f.apply(this, arguments)
      );
    }
    ((l.makeEligibilityRequest = m), (l.makeCrosspostingIQ = _));
  },
  98,
);
