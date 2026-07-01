__d(
  "WAWebDebugLabyrinth",
  [
    "EBLabyrinthWaWasmReactorSingleton",
    "Promise",
    "WABase64",
    "WALogger",
    "WAResultOrError",
    "WATimeUtils",
    "WAWebDebugLabyrinthInboxSnapshotQuery",
    "WAWebLabyrinthCanonicalUserFbid",
    "WAWebLabyrinthDebugStateCache",
    "WAWebLabyrinthWasmCreateBackup",
    "WAWebLabyrinthWasmDecryptMessage",
    "WAWebLabyrinthWasmEncryptMessage",
    "WAWebMexCreateLabyrinthBackupJob",
    "WAWebMexUploadLabyrinthMessagesJob",
    "WAWebPonyfillsCryptoRandomUUID",
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
      k = "hello labyrinth",
      I = 20,
      T = 20,
      D = 20,
      x = 20,
      $ = "Call Debug.labyrinthCreateBackupWasm() first";
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
    function P() {
      var e = o(
        "WAWebLabyrinthDebugStateCache",
      ).getLabyrinthDebugKeyMaterialCache();
      if (e != null) return e;
      throw r("err")($);
    }
    function N() {
      var e = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow().getDeviceId();
      return e != null ? String(e) : null;
    }
    function M() {
      var e = N();
      if (e == null)
        throw r("err")(
          "Debug.labyrinthCreateBackupWasm requires a live WA Web device id",
        );
      return { deviceId: e, familyDeviceId: e, deviceRegistrationId: e };
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = r("nullthrows")(t.epochRootKey),
            i = r("nullthrows")(t.epochAnonId),
            l = new Uint8Array(o("WABase64").decodeB64(i)),
            u = new Uint8Array(o("WABase64").decodeB64(a));
          return (E || (E = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = yield (E || (E = n("Promise"))).all(
                      e.messages.map(
                        (function () {
                          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                            function* (t) {
                              var n = null,
                                a = null;
                              try {
                                var i = r("nullthrows")(t.encryptedPayload),
                                  c = r("nullthrows")(t.encryptionVersion),
                                  d = new Uint8Array(
                                    o("WABase64").decodeB64(i),
                                  );
                                n = c;
                                var m = yield o(
                                  "WAWebLabyrinthWasmDecryptMessage",
                                ).decryptMessageWasm({
                                  ciphertext: d,
                                  encryptionVersion: c,
                                  epochAnonId: l,
                                  epochRootKey: u,
                                  threadId: e.threadId,
                                });
                                if (!m.success)
                                  throw (
                                    (a = String(m.error)),
                                    r("err")("decryptMessageWasm failed: " + a)
                                  );
                                var p = new TextDecoder().decode(
                                  m.value.plaintext,
                                );
                                return {
                                  messageId: t.messageId,
                                  decryptResult:
                                    o("WAResultOrError").makeResult(p),
                                };
                              } catch (i) {
                                var _ = r("getErrorSafe")(i);
                                return (
                                  o("WALogger")
                                    .ERROR(
                                      s ||
                                        (s =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "[Debug][Labyrinth] labyrinthInboxSnapshot message decrypt failed for message_id ",
                                              "; thread_id ",
                                              "; subtype ",
                                              "",
                                            ],
                                          )),
                                      t.messageId,
                                      e.threadId,
                                      String(a != null ? a : _.name),
                                    )
                                    .catching(_),
                                  {
                                    messageId: t.messageId,
                                    decryptResult: o(
                                      "WAResultOrError",
                                    ).makeError({
                                      decryptError: _,
                                      encryptionVersion: n != null ? n : 0,
                                    }),
                                  }
                                );
                              }
                            },
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })(),
                      ),
                    );
                    return babelHelpers.extends({}, e, { messages: t });
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a = Math.min(
              (t = e == null ? void 0 : e.numMsgs) != null ? t : I,
              D,
            ),
            i = Math.min(
              (n = e == null ? void 0 : e.numThreads) != null ? n : T,
              x,
            );
          try {
            var l = yield o(
                "WAWebDebugLabyrinthInboxSnapshotQuery",
              ).fetchLabyrinthInboxSnapshot({ numMsgs: a, numThreads: i }),
              s = l == null ? null : yield w(l, P());
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
        O.apply(this, arguments)
      );
    }
    ((F.doc =
      "Fetches WA Labyrinth inbox snapshot threads/messages, logs the simplified response, and returns it."),
      (F.paramsToExecute = []));
    function B() {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebLabyrinthWasmCreateBackup").createBackupWasm();
          if (!e.success)
            return (
              o("WALogger").ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[Debug][Labyrinth] createBackupWasm failed",
                  ])),
              ),
              e
            );
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] createBackupWasm success",
              ])),
          );
          var t = M();
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
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
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[Debug][Labyrinth] mexCreateLabyrinthBackup GQL request success",
                      ])),
                  )
                : (a == null ? void 0 : a.__typename) === "XWA2LabyrinthError"
                  ? o("WALogger").ERROR(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] mexCreateLabyrinthBackup GQL request failed",
                        ])),
                    )
                  : o("WALogger").LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] create backup Wasm response",
                        ])),
                    ),
              a
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] mexCreateLabyrinthBackup GQL request failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              e
            );
          }
        })),
        W.apply(this, arguments)
      );
    }
    B.doc =
      "Generate Labyrinth backup data with Wasm and call xwa2_labyrinth_create_backup";
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.msg,
            a = e.threadId,
            i = P(),
            l = (t = r("nullthrows"))(N()),
            s = t(i.backupId),
            u = t(i.epochId),
            c = t(a),
            d = n != null ? n : k,
            m = r("nullthrows")(i.epochRootKey),
            p = r("nullthrows")(i.mailboxRootKey),
            _ = r("nullthrows")(i.orfClientState),
            f = r("nullthrows")(i.epochAnonId),
            g = o("WAWebLabyrinthCanonicalUserFbid").getWaCanonicalUserFbid(),
            h = r("nullthrows")(r("WAWebPonyfillsCryptoRandomUUID")()),
            E = String(o("WATimeUtils").unixTimeMs()),
            I = yield o("WAWebLabyrinthWasmEncryptMessage").encryptMessageWasm({
              backupId: s,
              epochAnonId: f,
              epochId: u,
              epochRootKey: m,
              mailboxRootKey: p,
              orfClientState: _,
              plaintext: d,
              stanzaId: h,
              threadId: c,
              threadType: "ONE_TO_ONE",
              timestampMs: E,
              waCanonicalUserFbid: g,
            });
          if (!I.success)
            return (
              o("WALogger").ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[Debug][Labyrinth] encryptMessageWasm failed",
                  ])),
              ),
              I
            );
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] encryptMessageWasm success",
              ])),
          );
          var T = { deviceId: l, epochId: u, familyDeviceId: l };
          o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] start mexUploadLabyrinthMessages GQL request",
              ])),
          );
          try {
            var D = yield o(
                "WAWebMexUploadLabyrinthMessagesJob",
              ).mexUploadLabyrinthMessages([I.value], T),
              x = D.xwa2_labyrinth_upload_messages;
            return (
              (x == null ? void 0 : x.__typename) ===
              "XWA2LabyrinthUploadMessagesData"
                ? o("WALogger").LOG(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "[Debug][Labyrinth] mexUploadLabyrinthMessages GQL request success",
                      ])),
                  )
                : (x == null ? void 0 : x.__typename) === "XWA2LabyrinthError"
                  ? o("WALogger").ERROR(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] mexUploadLabyrinthMessages GQL request failed",
                        ])),
                    )
                  : o("WALogger").LOG(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] mexUploadLabyrinthMessages GQL response",
                        ])),
                    ),
              x
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] mexUploadLabyrinthMessages GQL failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              e
            );
          }
        })),
        U.apply(this, arguments)
      );
    }
    q.doc =
      "Encrypt one text message for a thread with Wasm and batch-upload it through xwa2_labyrinth_upload_messages. Example: Debug.labyrinthEncryptAndUploadMessage({threadId, msg})";
    var V = {
      labyrinthCreateBackupWasm: B,
      labyrinthEncryptAndUploadMessage: q,
      labyrinthInboxSnapshot: F,
    };
    l.default = V;
  },
  98,
);
