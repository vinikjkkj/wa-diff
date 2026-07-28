__d(
  "WAWebDebugLabyrinth",
  [
    "Promise",
    "WABase64",
    "WALogger",
    "WAResultOrError",
    "WATimeUtils",
    "WAWebCreateLabyrinthBackupJob",
    "WAWebDebugLabyrinthInboxSnapshotQuery",
    "WAWebDebugLabyrinthRangeQuery",
    "WAWebEBLabyrinthWaWasmReactorSingleton",
    "WAWebLabyrinthCanonicalUserFbid",
    "WAWebLabyrinthDebugStateCache",
    "WAWebLabyrinthWasmCreateBackup",
    "WAWebLabyrinthWasmDecryptMessage",
    "WAWebLabyrinthWasmDeriveMessageKey",
    "WAWebLabyrinthWasmEncryptMessage",
    "WAWebLabyrinthWasmOrfThreadId",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebUploadLabyrinthMessagesJob",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "nullthrows",
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
      N = "hello labyrinth",
      M = 20,
      w = 20,
      A = 20,
      F = 20,
      O = "Call Debug.labyrinthCreateBackupNativeWasm() first";
    o("WAWebEBLabyrinthWaWasmReactorSingleton")
      .ebLabyrinthWaReactor()
      .catch(function (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] eager WA Wasm initialization failed",
              ])),
          )
          .catching(r("getErrorSafe")(t));
      });
    function B() {
      var e = o(
        "WAWebLabyrinthDebugStateCache",
      ).getLabyrinthDebugKeyMaterialCache();
      if (e != null) return e;
      throw r("err")(O);
    }
    function W() {
      var e = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow().getDeviceId();
      return e != null ? String(e) : null;
    }
    function q() {
      var e = W();
      if (e == null)
        throw r("err")(
          "Debug.labyrinthCreateBackupNativeWasm requires a live WA Web device id",
        );
      return { deviceId: e, familyDeviceId: e, deviceRegistrationId: e };
    }
    function U(e, t) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (P || (P = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    return babelHelpers.extends({}, e, {
                      messages: yield z(e.messages, t, e.threadId),
                    });
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        V.apply(this, arguments)
      );
    }
    function H(e, t, n) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          return (P || (P = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    return babelHelpers.extends({}, e, {
                      messages: yield z(e.messages, t, r),
                    });
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        G.apply(this, arguments)
      );
    }
    function z(e, t, n) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i = r("nullthrows")(t.epochRootKey),
            l = r("nullthrows")(t.epochAnonId),
            u = new Uint8Array(o("WABase64").decodeB64(l)),
            c = new Uint8Array(o("WABase64").decodeB64(i));
          return (P || (P = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = null,
                      n = null;
                    try {
                      var i = r("nullthrows")(e.encryptedPayload),
                        l = r("nullthrows")(e.encryptionVersion),
                        d = new Uint8Array(o("WABase64").decodeB64(i));
                      t = l;
                      var m = yield o(
                        "WAWebLabyrinthWasmDecryptMessage",
                      ).decryptMessageWasm({
                        ciphertext: d,
                        encryptionVersion: l,
                        epochAnonId: u,
                        epochRootKey: c,
                        threadId: a,
                      });
                      if (!m.success)
                        throw (
                          (n = String(m.error)),
                          r("err")("decryptMessageWasm failed: " + n)
                        );
                      var p = new TextDecoder().decode(m.value.plaintext);
                      return {
                        messageId: e.messageId,
                        decryptResult: o("WAResultOrError").makeResult(p),
                      };
                    } catch (i) {
                      var _ = r("getErrorSafe")(i);
                      return (
                        o("WALogger")
                          .ERROR(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[Debug][Labyrinth] message decrypt failed for message_id ",
                                "; thread_id ",
                                "; subtype ",
                                "",
                              ])),
                            e.messageId,
                            a,
                            String(n != null ? n : _.name),
                          )
                          .catching(_),
                        {
                          messageId: e.messageId,
                          decryptResult: o("WAResultOrError").makeError({
                            decryptError: _,
                            encryptionVersion: t != null ? t : 0,
                          }),
                        }
                      );
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        j.apply(this, arguments)
      );
    }
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a = Math.min(
              (t = e == null ? void 0 : e.numMsgs) != null ? t : M,
              A,
            ),
            i = Math.min(
              (n = e == null ? void 0 : e.numThreads) != null ? n : w,
              F,
            );
          try {
            var l = yield o(
                "WAWebDebugLabyrinthInboxSnapshotQuery",
              ).fetchLabyrinthInboxSnapshot({ numMsgs: a, numThreads: i }),
              s = l == null ? null : yield U(l, B());
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[Debug][Labyrinth] labyrinthInboxSnapshot GQL response",
                  ])),
              ),
              s
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] labyrinthInboxSnapshot GQL failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              e
            );
          }
        })),
        Q.apply(this, arguments)
      );
    }
    ((K.doc =
      "Fetches WA Labyrinth inbox snapshot threads/messages, logs the simplified response, and returns it."),
      (K.paramsToExecute = []));
    function X(e) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(e.threadId),
            n = B(),
            a = r("nullthrows")(n.ebDeviceId),
            i = r("nullthrows")(n.orfClientState);
          try {
            var l = yield o(
              "WAWebLabyrinthWasmOrfThreadId",
            ).labyrinthOrfThreadIdWasm({
              orfClientState: new Uint8Array(o("WABase64").decodeB64(i)),
              threadId: t,
            });
            if (!l.success)
              return (
                o("WALogger").ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] labyrinthRangeQuery ORF thread id mapping failed",
                    ])),
                ),
                null
              );
            var s = yield o(
                "WAWebDebugLabyrinthRangeQuery",
              ).fetchLabyrinthRangeQuery({
                ebDeviceId: a,
                messageCount: e.numMessages,
                partialThreadId: o("WABase64").encodeB64(
                  new Uint8Array(l.value),
                ),
              }),
              u = s == null ? null : yield H(s, n, t);
            return (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[Debug][Labyrinth] labyrinthRangeQuery GQL response",
                  ])),
              ),
              u
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] labyrinthRangeQuery GQL failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              e
            );
          }
        })),
        Y.apply(this, arguments)
      );
    }
    ((X.doc =
      "Fetches WA Labyrinth messages for a plain thread id, internally maps it to partial_thread_id, logs the simplified response, and returns it. Do not pass snapshot.threadId. Example: Debug.labyrinthRangeQuery({threadId, numMessages: 10})"),
      (X.paramsToExecute = []));
    function J(e) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = (t = r("nullthrows"))(e.threadId),
            a = B(),
            i = t(a.epochAnonId),
            l = t(a.epochRootKey),
            s = t(a.orfClientState);
          try {
            var u = yield o(
              "WAWebLabyrinthWasmOrfThreadId",
            ).labyrinthOrfThreadIdWasm({
              orfClientState: new Uint8Array(o("WABase64").decodeB64(s)),
              threadId: n,
            });
            if (!u.success)
              return (
                o("WALogger").ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] labyrinthDecryptFlowInputs ORF thread id mapping failed",
                    ])),
                ),
                null
              );
            var c = yield o(
              "WAWebLabyrinthWasmDeriveMessageKey",
            ).deriveMessageKeyWasm({
              epochAnonId: new Uint8Array(o("WABase64").decodeB64(i)),
              epochRootKey: new Uint8Array(o("WABase64").decodeB64(l)),
              threadId: n,
            });
            if (!c.success)
              return (
                o("WALogger").ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] labyrinthDecryptFlowInputs message key derivation failed",
                    ])),
                ),
                null
              );
            var d = {
              messageKey: o("WABase64").encodeB64(
                new Uint8Array(c.value.messageKey),
              ),
              partialThreadId: o("WABase64").encodeB64(new Uint8Array(u.value)),
            };
            return (
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[Debug][Labyrinth] labyrinthDecryptFlowInputs result",
                  ])),
              ),
              d
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] labyrinthDecryptFlowInputs failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              e
            );
          }
        })),
        Z.apply(this, arguments)
      );
    }
    ((J.doc =
      "Given a plain threadId, returns base64 partialThreadId and base64 messageKey for CLI decrypt flow. Example: Debug.labyrinthDecryptFlowInputs({threadId})"),
      (J.paramsToExecute = []));
    function ee() {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebLabyrinthWasmCreateBackup").createBackupWasm();
          if (!e.success)
            return (
              o("WALogger").ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[Debug][Labyrinth] createBackupWasm failed",
                  ])),
              ),
              e
            );
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] createBackupWasm success",
              ])),
          );
          var t = q();
          o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] start nativeCreateLabyrinthBackup GQL request",
              ])),
          );
          try {
            var n = yield o(
                "WAWebCreateLabyrinthBackupJob",
              ).createLabyrinthBackup(e.value, t),
              a = n.wa_labyrinth_create_backup;
            return (
              (a == null ? void 0 : a.__typename) ===
              "WALabyrinthCreateBackupData"
                ? o("WALogger").LOG(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "[Debug][Labyrinth] nativeCreateLabyrinthBackup GQL request success",
                      ])),
                  )
                : (a == null ? void 0 : a.__typename) ===
                    "WALabyrinthCreateBackupError"
                  ? o("WALogger").ERROR(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] nativeCreateLabyrinthBackup GQL request failed",
                        ])),
                    )
                  : o("WALogger").LOG(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] native create backup GQL response",
                        ])),
                    ),
              a
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] nativeCreateLabyrinthBackup GQL request failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              e
            );
          }
        })),
        te.apply(this, arguments)
      );
    }
    ee.doc =
      "Create backup (native): generate Labyrinth backup data with Wasm and call wa_labyrinth_create_backup";
    function ne(e) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msg,
            a = e.repeat,
            i = a === void 0 ? 1 : a,
            l = e.threadId,
            s = e.threadType,
            u = s === void 0 ? "ONE_TO_ONE" : s,
            c = B(),
            d = r("nullthrows")(W()),
            m = r("nullthrows")(c.backupId),
            p = r("nullthrows")(c.epochId),
            _ = r("nullthrows")(l),
            f = t != null ? t : N,
            g = r("nullthrows")(c.epochRootKey),
            h = r("nullthrows")(c.mailboxRootKey),
            y = r("nullthrows")(c.orfClientState),
            C = r("nullthrows")(c.epochAnonId),
            b = o("WAWebLabyrinthCanonicalUserFbid").getWaCanonicalUserFbid(),
            v = Math.max(1, Math.floor(i)),
            S = yield (P || (P = n("Promise"))).all(
              Array.from({ length: v }, function () {
                var e = r("nullthrows")(r("WAWebPonyfillsCryptoRandomUUID")()),
                  t = String(o("WATimeUtils").unixTimeMs());
                return o("WAWebLabyrinthWasmEncryptMessage").encryptMessageWasm(
                  {
                    backupId: m,
                    epochAnonId: C,
                    epochId: p,
                    epochRootKey: g,
                    mailboxRootKey: h,
                    orfClientState: y,
                    plaintext: f,
                    stanzaId: e,
                    threadId: _,
                    threadType: u,
                    timestampMs: t,
                    waCanonicalUserFbid: b,
                  },
                );
              }),
            ),
            R = [];
          for (var L of S.entries()) {
            var M = L[0],
              w = L[1];
            if (!w.success)
              return (
                o("WALogger").ERROR(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] encryptMessageWasm failed",
                    ])),
                ),
                w
              );
            R.push(w.value);
          }
          o("WALogger").LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] encryptMessageWasm success",
              ])),
          );
          var A = { deviceId: d, epochId: p, familyDeviceId: d },
            F = o(
              "WAWebUploadLabyrinthMessagesJob",
            ).wasmResultsToUploadLabyrinthMessagesInput(R, A);
          o("WALogger").LOG(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] start nativeUploadLabyrinthMessages GQL request",
              ])),
          );
          try {
            var O = yield o(
                "WAWebUploadLabyrinthMessagesJob",
              ).uploadLabyrinthMessages(F),
              q = O.wa_labyrinth_upload_messages;
            return (
              (q == null ? void 0 : q.__typename) ===
              "WALabyrinthUploadMessagesData"
                ? o("WALogger").LOG(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL request success",
                      ])),
                  )
                : (q == null ? void 0 : q.__typename) ===
                    "WALabyrinthUploadMessagesError"
                  ? o("WALogger").ERROR(
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL request failed",
                        ])),
                    )
                  : o("WALogger").LOG(
                      x ||
                        (x = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL response",
                        ])),
                    ),
              q
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              e
            );
          }
        })),
        re.apply(this, arguments)
      );
    }
    ne.doc =
      'Upload messages (native): encrypt one text message one or more times for a thread with Wasm and batch-upload it through wa_labyrinth_upload_messages. Example: Debug.labyrinthEncryptAndUploadMessageNative({threadId, msg, repeat: 3, threadType: "ONE_TO_ONE"})';
    var oe = {
      labyrinthCreateBackupNativeWasm: ee,
      labyrinthDecryptFlowInputs: J,
      labyrinthEncryptAndUploadMessageNative: ne,
      labyrinthInboxSnapshot: K,
      labyrinthRangeQuery: X,
    };
    l.default = oe;
  },
  98,
);
