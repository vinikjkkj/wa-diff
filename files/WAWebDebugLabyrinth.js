__d(
  "WAWebDebugLabyrinth",
  [
    "EBLabyrinthWaWasmReactorSingleton",
    "Promise",
    "WABase64",
    "WALogger",
    "WAResultOrError",
    "WATimeUtils",
    "WAWebCreateLabyrinthBackupJob",
    "WAWebDebugLabyrinthInboxSnapshotQuery",
    "WAWebDebugLabyrinthRangeQuery",
    "WAWebLabyrinthCanonicalUserFbid",
    "WAWebLabyrinthDebugStateCache",
    "WAWebLabyrinthWasmCreateBackup",
    "WAWebLabyrinthWasmDecryptMessage",
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
      V = "hello labyrinth",
      H = 20,
      G = 20,
      z = 20,
      j = 20,
      K = "Call Debug.labyrinthCreateBackupWasm() first";
    o("EBLabyrinthWaWasmReactorSingleton")
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
    function Q() {
      var e = o(
        "WAWebLabyrinthDebugStateCache",
      ).getLabyrinthDebugKeyMaterialCache();
      if (e != null) return e;
      throw r("err")(K);
    }
    function X() {
      var e = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow().getDeviceId();
      return e != null ? String(e) : null;
    }
    function Y() {
      var e = X();
      if (e == null)
        throw r("err")(
          "Debug.labyrinthCreateBackupWasm requires a live WA Web device id",
        );
      return { deviceId: e, familyDeviceId: e, deviceRegistrationId: e };
    }
    function J(e, t) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (U || (U = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    return babelHelpers.extends({}, e, {
                      messages: yield ne(e.messages, t, e.threadId),
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
          function* (e, t, r) {
            return (U || (U = n("Promise"))).all(
              e.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      return babelHelpers.extends({}, e, {
                        messages: yield ne(e.messages, t, r),
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
        te.apply(this, arguments)
      );
    }
    function ne(e, t, n) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a) {
            var i = r("nullthrows")(t.epochRootKey),
              l = r("nullthrows")(t.epochAnonId),
              u = new Uint8Array(o("WABase64").decodeB64(l)),
              c = new Uint8Array(o("WABase64").decodeB64(i));
            return (U || (U = n("Promise"))).all(
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
        re.apply(this, arguments)
      );
    }
    function oe(e) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a = Math.min(
              (t = e == null ? void 0 : e.numMsgs) != null ? t : H,
              z,
            ),
            i = Math.min(
              (n = e == null ? void 0 : e.numThreads) != null ? n : G,
              j,
            );
          try {
            var l = yield o(
                "WAWebDebugLabyrinthInboxSnapshotQuery",
              ).fetchLabyrinthInboxSnapshot({ numMsgs: a, numThreads: i }),
              s = l == null ? null : yield J(l, Q());
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
        ae.apply(this, arguments)
      );
    }
    ((oe.doc =
      "Fetches WA Labyrinth inbox snapshot threads/messages, logs the simplified response, and returns it."),
      (oe.paramsToExecute = []));
    function ie(e) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(e.threadId),
            n = Q(),
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
              u = s == null ? null : yield ee(s, n, t);
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
        le.apply(this, arguments)
      );
    }
    ((ie.doc =
      "Fetches WA Labyrinth messages for a plain thread id, internally maps it to partial_thread_id, logs the simplified response, and returns it. Do not pass snapshot.threadId. Example: Debug.labyrinthRangeQuery({threadId, numMessages: 10})"),
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
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[Debug][Labyrinth] createBackupWasm failed",
                  ])),
              ),
              e
            );
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] createBackupWasm success",
              ])),
          );
          var t = Y();
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
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
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[Debug][Labyrinth] mexCreateLabyrinthBackup GQL request success",
                      ])),
                  )
                : (a == null ? void 0 : a.__typename) === "XWA2LabyrinthError"
                  ? o("WALogger").ERROR(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] mexCreateLabyrinthBackup GQL request failed",
                        ])),
                    )
                  : o("WALogger").LOG(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] create backup Wasm response",
                        ])),
                    ),
              a
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] mexCreateLabyrinthBackup GQL request failed",
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
      "Generate Labyrinth backup data with Wasm and call xwa2_labyrinth_create_backup";
    function ce() {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebLabyrinthWasmCreateBackup").createBackupWasm();
          if (!e.success)
            return (
              o("WALogger").ERROR(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[Debug][Labyrinth] createBackupWasm failed",
                  ])),
              ),
              e
            );
          o("WALogger").LOG(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] createBackupWasm success",
              ])),
          );
          var t = Y();
          o("WALogger").LOG(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
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
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "[Debug][Labyrinth] nativeCreateLabyrinthBackup GQL request success",
                      ])),
                  )
                : (a == null ? void 0 : a.__typename) ===
                    "WALabyrinthCreateBackupError"
                  ? o("WALogger").ERROR(
                      E ||
                        (E = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] nativeCreateLabyrinthBackup GQL request failed",
                        ])),
                    )
                  : o("WALogger").LOG(
                      k ||
                        (k = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] native create backup GQL response",
                        ])),
                    ),
              a
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] nativeCreateLabyrinthBackup GQL request failed",
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
      "Create backup (native): generate Labyrinth backup data with Wasm and call wa_labyrinth_create_backup";
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
            c = Q(),
            d = r("nullthrows")(X()),
            m = r("nullthrows")(c.backupId),
            p = r("nullthrows")(c.epochId),
            _ = r("nullthrows")(l),
            f = t != null ? t : V,
            g = r("nullthrows")(c.epochRootKey),
            h = r("nullthrows")(c.mailboxRootKey),
            y = r("nullthrows")(c.orfClientState),
            C = r("nullthrows")(c.epochAnonId),
            b = o("WAWebLabyrinthCanonicalUserFbid").getWaCanonicalUserFbid(),
            v = Math.max(1, Math.floor(i)),
            S = yield (U || (U = n("Promise"))).all(
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
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] encryptMessageWasm failed",
                    ])),
                ),
                k
              );
            R.push(k.value);
          }
          o("WALogger").LOG(
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] encryptMessageWasm success",
              ])),
          );
          var I = { deviceId: d, epochId: p, familyDeviceId: d };
          o("WALogger").LOG(
            x ||
              (x = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] start mexUploadLabyrinthMessages GQL request",
              ])),
          );
          try {
            var w = yield o(
                "WAWebMexUploadLabyrinthMessagesJob",
              ).mexUploadLabyrinthMessages(R, I),
              A = w.xwa2_labyrinth_upload_messages;
            return (
              (A == null ? void 0 : A.__typename) ===
              "XWA2LabyrinthUploadMessagesData"
                ? o("WALogger").LOG(
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "[Debug][Labyrinth] mexUploadLabyrinthMessages GQL request success",
                      ])),
                  )
                : (A == null ? void 0 : A.__typename) === "XWA2LabyrinthError"
                  ? o("WALogger").ERROR(
                      P ||
                        (P = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] mexUploadLabyrinthMessages GQL request failed",
                        ])),
                    )
                  : o("WALogger").LOG(
                      N ||
                        (N = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] mexUploadLabyrinthMessages GQL response",
                        ])),
                    ),
              A
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] mexUploadLabyrinthMessages GQL failed",
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
      'Encrypt one text message one or more times for a thread with Wasm and batch-upload it through xwa2_labyrinth_upload_messages. Example: Debug.labyrinthEncryptAndUploadMessage({threadId, msg, repeat: 3, threadType: "ONE_TO_ONE"})';
    function _e(e) {
      return fe.apply(this, arguments);
    }
    function fe() {
      return (
        (fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msg,
            a = e.repeat,
            i = a === void 0 ? 1 : a,
            l = e.threadId,
            s = e.threadType,
            u = s === void 0 ? "ONE_TO_ONE" : s,
            c = Q(),
            d = r("nullthrows")(X()),
            m = r("nullthrows")(c.backupId),
            p = r("nullthrows")(c.epochId),
            _ = r("nullthrows")(l),
            f = t != null ? t : V,
            g = r("nullthrows")(c.epochRootKey),
            h = r("nullthrows")(c.mailboxRootKey),
            y = r("nullthrows")(c.orfClientState),
            C = r("nullthrows")(c.epochAnonId),
            b = o("WAWebLabyrinthCanonicalUserFbid").getWaCanonicalUserFbid(),
            v = Math.max(1, Math.floor(i)),
            S = yield (U || (U = n("Promise"))).all(
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
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] encryptMessageWasm failed",
                    ])),
                ),
                k
              );
            R.push(k.value);
          }
          o("WALogger").LOG(
            A ||
              (A = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] encryptMessageWasm success",
              ])),
          );
          var I = { deviceId: d, epochId: p, familyDeviceId: d },
            T = o(
              "WAWebUploadLabyrinthMessagesJob",
            ).wasmResultsToUploadLabyrinthMessagesInput(R, I);
          o("WALogger").LOG(
            F ||
              (F = babelHelpers.taggedTemplateLiteralLoose([
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
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
                        "[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL request success",
                      ])),
                  )
                : (x == null ? void 0 : x.__typename) ===
                    "WALabyrinthUploadMessagesError"
                  ? o("WALogger").ERROR(
                      B ||
                        (B = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL request failed",
                        ])),
                    )
                  : o("WALogger").LOG(
                      W ||
                        (W = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL response",
                        ])),
                    ),
              x
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  q ||
                    (q = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL failed",
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
      'Upload messages (native): encrypt one text message one or more times for a thread with Wasm and batch-upload it through wa_labyrinth_upload_messages. Example: Debug.labyrinthEncryptAndUploadMessageNative({threadId, msg, repeat: 3, threadType: "ONE_TO_ONE"})';
    var ge = {
      labyrinthCreateBackupWasm: se,
      labyrinthCreateBackupNativeWasm: ce,
      labyrinthEncryptAndUploadMessage: me,
      labyrinthEncryptAndUploadMessageNative: _e,
      labyrinthInboxSnapshot: oe,
      labyrinthRangeQuery: ie,
    };
    l.default = ge;
  },
  98,
);
