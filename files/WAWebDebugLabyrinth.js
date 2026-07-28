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
    "WAWebMexCreateLabyrinthBackupJob",
    "WAWebMexUploadLabyrinthMessagesJob",
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
      N,
      M,
      w,
      A,
      F,
      O,
      B,
      W,
      q,
      U,
      V,
      H,
      G,
      z,
      j = "hello labyrinth",
      K = 20,
      Q = 20,
      X = 20,
      Y = 20,
      J = "Call Debug.labyrinthCreateBackupWasm() first";
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
    function Z() {
      var e = o(
        "WAWebLabyrinthDebugStateCache",
      ).getLabyrinthDebugKeyMaterialCache();
      if (e != null) return e;
      throw r("err")(J);
    }
    function ee() {
      var e = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow().getDeviceId();
      return e != null ? String(e) : null;
    }
    function te() {
      var e = ee();
      if (e == null)
        throw r("err")(
          "Debug.labyrinthCreateBackupWasm requires a live WA Web device id",
        );
      return { deviceId: e, familyDeviceId: e, deviceRegistrationId: e };
    }
    function ne(e, t) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (z || (z = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    return babelHelpers.extends({}, e, {
                      messages: yield ie(e.messages, t, e.threadId),
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
        re.apply(this, arguments)
      );
    }
    function oe(e, t, n) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r) {
            return (z || (z = n("Promise"))).all(
              e.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      return babelHelpers.extends({}, e, {
                        messages: yield ie(e.messages, t, r),
                      });
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            );
          },
        )),
        ae.apply(this, arguments)
      );
    }
    function ie(e, t, n) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a) {
            var i = r("nullthrows")(t.epochRootKey),
              l = r("nullthrows")(t.epochAnonId),
              u = new Uint8Array(o("WABase64").decodeB64(l)),
              c = new Uint8Array(o("WABase64").decodeB64(i));
            return (z || (z = n("Promise"))).all(
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
          },
        )),
        le.apply(this, arguments)
      );
    }
    function se(e) {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a = Math.min(
              (t = e == null ? void 0 : e.numMsgs) != null ? t : K,
              X,
            ),
            i = Math.min(
              (n = e == null ? void 0 : e.numThreads) != null ? n : Q,
              Y,
            );
          try {
            var l = yield o(
                "WAWebDebugLabyrinthInboxSnapshotQuery",
              ).fetchLabyrinthInboxSnapshot({ numMsgs: a, numThreads: i }),
              s = l == null ? null : yield ne(l, Z());
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
        ue.apply(this, arguments)
      );
    }
    ((se.doc =
      "Fetches WA Labyrinth inbox snapshot threads/messages, logs the simplified response, and returns it."),
      (se.paramsToExecute = []));
    function ce(e) {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(e.threadId),
            n = Z(),
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
              u = s == null ? null : yield oe(s, n, t);
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
        de.apply(this, arguments)
      );
    }
    ((ce.doc =
      "Fetches WA Labyrinth messages for a plain thread id, internally maps it to partial_thread_id, logs the simplified response, and returns it. Do not pass snapshot.threadId. Example: Debug.labyrinthRangeQuery({threadId, numMessages: 10})"),
      (ce.paramsToExecute = []));
    function me(e) {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = (t = r("nullthrows"))(e.threadId),
            a = Z(),
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
        pe.apply(this, arguments)
      );
    }
    ((me.doc =
      "Given a plain threadId, returns base64 partialThreadId and base64 messageKey for CLI decrypt flow. Example: Debug.labyrinthDecryptFlowInputs({threadId})"),
      (me.paramsToExecute = []));
    function _e() {
      return fe.apply(this, arguments);
    }
    function fe() {
      return (
        (fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
          var t = te();
          o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] start mexCreateLabyrinthBackup GQL request",
              ])),
          );
          try {
            var n = yield o(
                "WAWebMexCreateLabyrinthBackupJob",
              ).mexCreateLabyrinthBackup(e.value, t),
              a = n.xwa2_labyrinth_create_backup;
            return (
              (a == null ? void 0 : a.__typename) ===
              "XWA2LabyrinthCreateBackupData"
                ? o("WALogger").LOG(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "[Debug][Labyrinth] mexCreateLabyrinthBackup GQL request success",
                      ])),
                  )
                : (a == null ? void 0 : a.__typename) === "XWA2LabyrinthError"
                  ? o("WALogger").ERROR(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] mexCreateLabyrinthBackup GQL request failed",
                        ])),
                    )
                  : o("WALogger").LOG(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] create backup Wasm response",
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
                      "[Debug][Labyrinth] mexCreateLabyrinthBackup GQL request failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              e
            );
          }
        })),
        fe.apply(this, arguments)
      );
    }
    _e.doc =
      "Generate Labyrinth backup data with Wasm and call xwa2_labyrinth_create_backup";
    function ge() {
      return he.apply(this, arguments);
    }
    function he() {
      return (
        (he = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebLabyrinthWasmCreateBackup").createBackupWasm();
          if (!e.success)
            return (
              o("WALogger").ERROR(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[Debug][Labyrinth] createBackupWasm failed",
                  ])),
              ),
              e
            );
          o("WALogger").LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] createBackupWasm success",
              ])),
          );
          var t = te();
          o("WALogger").LOG(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
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
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "[Debug][Labyrinth] nativeCreateLabyrinthBackup GQL request success",
                      ])),
                  )
                : (a == null ? void 0 : a.__typename) ===
                    "WALabyrinthCreateBackupError"
                  ? o("WALogger").ERROR(
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] nativeCreateLabyrinthBackup GQL request failed",
                        ])),
                    )
                  : o("WALogger").LOG(
                      x ||
                        (x = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] native create backup GQL response",
                        ])),
                    ),
              a
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] nativeCreateLabyrinthBackup GQL request failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              e
            );
          }
        })),
        he.apply(this, arguments)
      );
    }
    ge.doc =
      "Create backup (native): generate Labyrinth backup data with Wasm and call wa_labyrinth_create_backup";
    function ye(e) {
      return Ce.apply(this, arguments);
    }
    function Ce() {
      return (
        (Ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msg,
            a = e.repeat,
            i = a === void 0 ? 1 : a,
            l = e.threadId,
            s = e.threadType,
            u = s === void 0 ? "ONE_TO_ONE" : s,
            c = Z(),
            d = r("nullthrows")(ee()),
            m = r("nullthrows")(c.backupId),
            p = r("nullthrows")(c.epochId),
            _ = r("nullthrows")(l),
            f = t != null ? t : j,
            g = r("nullthrows")(c.epochRootKey),
            h = r("nullthrows")(c.mailboxRootKey),
            y = r("nullthrows")(c.orfClientState),
            C = r("nullthrows")(c.epochAnonId),
            b = o("WAWebLabyrinthCanonicalUserFbid").getWaCanonicalUserFbid(),
            v = Math.max(1, Math.floor(i)),
            S = yield (z || (z = n("Promise"))).all(
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
            var E = L[0],
              k = L[1];
            if (!k.success)
              return (
                o("WALogger").ERROR(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] encryptMessageWasm failed",
                    ])),
                ),
                k
              );
            R.push(k.value);
          }
          o("WALogger").LOG(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] encryptMessageWasm success",
              ])),
          );
          var I = { deviceId: d, epochId: p, familyDeviceId: d };
          o("WALogger").LOG(
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] start mexUploadLabyrinthMessages GQL request",
              ])),
          );
          try {
            var T = yield o(
                "WAWebMexUploadLabyrinthMessagesJob",
              ).mexUploadLabyrinthMessages(R, I),
              D = T.xwa2_labyrinth_upload_messages;
            return (
              (D == null ? void 0 : D.__typename) ===
              "XWA2LabyrinthUploadMessagesData"
                ? o("WALogger").LOG(
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
                        "[Debug][Labyrinth] mexUploadLabyrinthMessages GQL request success",
                      ])),
                  )
                : (D == null ? void 0 : D.__typename) === "XWA2LabyrinthError"
                  ? o("WALogger").ERROR(
                      A ||
                        (A = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] mexUploadLabyrinthMessages GQL request failed",
                        ])),
                    )
                  : o("WALogger").LOG(
                      F ||
                        (F = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] mexUploadLabyrinthMessages GQL response",
                        ])),
                    ),
              D
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  O ||
                    (O = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] mexUploadLabyrinthMessages GQL failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              e
            );
          }
        })),
        Ce.apply(this, arguments)
      );
    }
    ye.doc =
      'Encrypt one text message one or more times for a thread with Wasm and batch-upload it through xwa2_labyrinth_upload_messages. Example: Debug.labyrinthEncryptAndUploadMessage({threadId, msg, repeat: 3, threadType: "ONE_TO_ONE"})';
    function be(e) {
      return ve.apply(this, arguments);
    }
    function ve() {
      return (
        (ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msg,
            a = e.repeat,
            i = a === void 0 ? 1 : a,
            l = e.threadId,
            s = e.threadType,
            u = s === void 0 ? "ONE_TO_ONE" : s,
            c = Z(),
            d = r("nullthrows")(ee()),
            m = r("nullthrows")(c.backupId),
            p = r("nullthrows")(c.epochId),
            _ = r("nullthrows")(l),
            f = t != null ? t : j,
            g = r("nullthrows")(c.epochRootKey),
            h = r("nullthrows")(c.mailboxRootKey),
            y = r("nullthrows")(c.orfClientState),
            C = r("nullthrows")(c.epochAnonId),
            b = o("WAWebLabyrinthCanonicalUserFbid").getWaCanonicalUserFbid(),
            v = Math.max(1, Math.floor(i)),
            S = yield (z || (z = n("Promise"))).all(
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
            var E = L[0],
              k = L[1];
            if (!k.success)
              return (
                o("WALogger").ERROR(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] encryptMessageWasm failed",
                    ])),
                ),
                k
              );
            R.push(k.value);
          }
          o("WALogger").LOG(
            W ||
              (W = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] encryptMessageWasm success",
              ])),
          );
          var I = { deviceId: d, epochId: p, familyDeviceId: d },
            T = o(
              "WAWebUploadLabyrinthMessagesJob",
            ).wasmResultsToUploadLabyrinthMessagesInput(R, I);
          o("WALogger").LOG(
            q ||
              (q = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] start nativeUploadLabyrinthMessages GQL request",
              ])),
          );
          try {
            var D = yield o(
                "WAWebUploadLabyrinthMessagesJob",
              ).uploadLabyrinthMessages(T),
              x = D.wa_labyrinth_upload_messages;
            return (
              (x == null ? void 0 : x.__typename) ===
              "WALabyrinthUploadMessagesData"
                ? o("WALogger").LOG(
                    U ||
                      (U = babelHelpers.taggedTemplateLiteralLoose([
                        "[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL request success",
                      ])),
                  )
                : (x == null ? void 0 : x.__typename) ===
                    "WALabyrinthUploadMessagesError"
                  ? o("WALogger").ERROR(
                      V ||
                        (V = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL request failed",
                        ])),
                    )
                  : o("WALogger").LOG(
                      H ||
                        (H = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL response",
                        ])),
                    ),
              x
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  G ||
                    (G = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              e
            );
          }
        })),
        ve.apply(this, arguments)
      );
    }
    be.doc =
      'Upload messages (native): encrypt one text message one or more times for a thread with Wasm and batch-upload it through wa_labyrinth_upload_messages. Example: Debug.labyrinthEncryptAndUploadMessageNative({threadId, msg, repeat: 3, threadType: "ONE_TO_ONE"})';
    var Se = {
      labyrinthCreateBackupWasm: _e,
      labyrinthCreateBackupNativeWasm: ge,
      labyrinthDecryptFlowInputs: me,
      labyrinthEncryptAndUploadMessage: ye,
      labyrinthEncryptAndUploadMessageNative: be,
      labyrinthInboxSnapshot: se,
      labyrinthRangeQuery: ce,
    };
    l.default = Se;
  },
  98,
);
