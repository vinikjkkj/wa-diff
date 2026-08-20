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
    "WAWebLabyrinthWasmRotateEpoch",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebRotateLabyrinthEpochJob",
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
      W = "hello labyrinth",
      q = 20,
      U = 20,
      V = 20,
      H = 20,
      G = "Call Debug.labyrinthCreateBackupNativeWasm() first";
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
    function z(e) {
      return new Uint8Array(o("WABase64").decodeB64(e));
    }
    function j() {
      var e = o(
        "WAWebLabyrinthDebugStateCache",
      ).getLabyrinthDebugKeyMaterialCache();
      if (e != null) return e;
      throw r("err")(G);
    }
    function K() {
      var e = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow().getDeviceId();
      return e != null ? String(e) : null;
    }
    function Q() {
      var e = K();
      if (e == null)
        throw r("err")(
          "Debug.labyrinthCreateBackupNativeWasm requires a live WA Web device id",
        );
      return { deviceId: e, familyDeviceId: e, deviceRegistrationId: e };
    }
    function X(e, t) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (B || (B = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    return babelHelpers.extends({}, e, {
                      messages: yield ee(e.messages, t, e.threadId),
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
        Y.apply(this, arguments)
      );
    }
    function J(e, t, n) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          return (B || (B = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    return babelHelpers.extends({}, e, {
                      messages: yield ee(e.messages, t, r),
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
        Z.apply(this, arguments)
      );
    }
    function ee(e, t, n) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a) {
            var i = r("nullthrows")(t.epochRootKey),
              l = r("nullthrows")(t.epochAnonId),
              u = new Uint8Array(o("WABase64").decodeB64(l)),
              c = new Uint8Array(o("WABase64").decodeB64(i));
            return (B || (B = n("Promise"))).all(
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
        te.apply(this, arguments)
      );
    }
    function ne(e) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a = Math.min(
              (t = e == null ? void 0 : e.messageFirst) != null ? t : q,
              V,
            ),
            i = Math.min(
              (n = e == null ? void 0 : e.threadFirst) != null ? n : U,
              H,
            );
          try {
            var l = yield o(
                "WAWebDebugLabyrinthInboxSnapshotQuery",
              ).fetchLabyrinthInboxSnapshot({
                messageFirst: a,
                threadFirst: i,
              }),
              s = l == null ? null : yield X(l, j());
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
        re.apply(this, arguments)
      );
    }
    ((ne.doc =
      "Fetches WA Labyrinth inbox snapshot threads/messages, logs the simplified response, and returns it."),
      (ne.paramsToExecute = []));
    function oe(e) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(e.threadId),
            n = j(),
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
              u = s == null ? null : yield J(s, n, t);
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
        ae.apply(this, arguments)
      );
    }
    ((oe.doc =
      "Fetches WA Labyrinth messages for a plain thread id, internally maps it to partial_thread_id, logs the simplified response, and returns it. Do not pass snapshot.threadId. Example: Debug.labyrinthRangeQuery({threadId, numMessages: 10})"),
      (oe.paramsToExecute = []));
    function ie(e) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = (t = r("nullthrows"))(e.threadId),
            a = j(),
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
        le.apply(this, arguments)
      );
    }
    ((ie.doc =
      "Given a plain threadId, returns base64 partialThreadId and base64 messageKey for CLI decrypt flow. Example: Debug.labyrinthDecryptFlowInputs({threadId})"),
      (ie.paramsToExecute = []));
    function se() {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
          var t = Q();
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
        ue.apply(this, arguments)
      );
    }
    se.doc =
      "Create backup (native): generate Labyrinth backup data with Wasm and call wa_labyrinth_create_backup";
    function ce() {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t = j(),
            n = (e = r("nullthrows"))(t.epochId),
            a = [
              {
                deviceId: e(t.ebDeviceId),
                epochStoragePublicKey: z(t.epochStoragePublicKey),
                devicePublicKey: z(t.devicePublicKey),
              },
              {
                deviceId: e(t.vdDeviceId),
                epochStoragePublicKey: z(t.vdEpochStoragePublicKey),
                devicePublicKey: z(t.vdPublicKey),
              },
            ],
            i = yield o("WAWebLabyrinthWasmRotateEpoch").rotateEpochWasm({
              currentEpochRootKey: z(t.epochRootKey),
              currentEpochAnonId: z(t.epochAnonId),
              currentEpochFbid: e(t.epochFbid),
              epochStoragePrivateKey: z(t.epochStoragePrivateKey),
              members: a,
            });
          if (!i.success)
            return (
              o("WALogger").ERROR(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[Debug][Labyrinth] rotateEpochWasm failed",
                  ])),
              ),
              i
            );
          (o("WALogger").LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] rotateEpochWasm success",
              ])),
          ),
            o("WALogger").LOG(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "[Debug][Labyrinth] start rotateLabyrinthEpoch GQL request",
                ])),
            ));
          try {
            var l = yield o(
                "WAWebRotateLabyrinthEpochJob",
              ).rotateLabyrinthEpoch(n, i.value, a),
              s = l.wa_labyrinth_rotate_epoch;
            return (
              (s == null ? void 0 : s.__typename) ===
              "WALabyrinthRotateEpochData"
                ? o("WALogger").LOG(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "[Debug][Labyrinth] rotateLabyrinthEpoch GQL request success",
                      ])),
                  )
                : (s == null ? void 0 : s.__typename) ===
                    "WALabyrinthRotateEpochError"
                  ? o("WALogger").ERROR(
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] rotateLabyrinthEpoch GQL request failed",
                        ])),
                    )
                  : o("WALogger").LOG(
                      x ||
                        (x = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] rotate epoch GQL response",
                        ])),
                    ),
              s
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] rotateLabyrinthEpoch GQL request failed",
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
    ce.doc =
      "Rotate epoch (native): rotate the epoch registered by a prior Debug.labyrinthCreateBackupNativeWasm() (reads its cached material) via wa_labyrinth_rotate_epoch. Call Debug.labyrinthCreateBackupNativeWasm() first.";
    function me(e) {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msg,
            a = e.repeat,
            i = a === void 0 ? 1 : a,
            l = e.threadId,
            s = e.threadType,
            u = s === void 0 ? "ONE_TO_ONE" : s,
            c = j(),
            d = r("nullthrows")(K()),
            m = r("nullthrows")(c.backupId),
            p = r("nullthrows")(c.epochId),
            _ = r("nullthrows")(l),
            f = t != null ? t : W,
            g = r("nullthrows")(c.epochRootKey),
            h = r("nullthrows")(c.mailboxRootKey),
            y = r("nullthrows")(c.orfClientState),
            C = r("nullthrows")(c.epochAnonId),
            b = o("WAWebLabyrinthCanonicalUserFbid").getWaCanonicalUserFbid(),
            v = Math.max(1, Math.floor(i)),
            S = yield (B || (B = n("Promise"))).all(
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
          var I = { deviceId: d, epochId: p, familyDeviceId: d },
            T = o(
              "WAWebUploadLabyrinthMessagesJob",
            ).wasmResultsToUploadLabyrinthMessagesInput(R, I);
          o("WALogger").LOG(
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
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
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
                        "[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL request success",
                      ])),
                  )
                : (x == null ? void 0 : x.__typename) ===
                    "WALabyrinthUploadMessagesError"
                  ? o("WALogger").ERROR(
                      A ||
                        (A = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL request failed",
                        ])),
                    )
                  : o("WALogger").LOG(
                      F ||
                        (F = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL response",
                        ])),
                    ),
              x
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  O ||
                    (O = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL failed",
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
    me.doc =
      'Upload messages (native): encrypt one text message one or more times for a thread with Wasm and batch-upload it through wa_labyrinth_upload_messages. Example: Debug.labyrinthEncryptAndUploadMessageNative({threadId, msg, repeat: 3, threadType: "ONE_TO_ONE"})';
    var _e = {
      labyrinthCreateBackupNativeWasm: se,
      labyrinthRotateEpochNativeWasm: ce,
      labyrinthDecryptFlowInputs: ie,
      labyrinthEncryptAndUploadMessageNative: me,
      labyrinthInboxSnapshot: ne,
      labyrinthRangeQuery: oe,
    };
    l.default = _e;
  },
  98,
);
