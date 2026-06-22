__d(
  "WAWebDebugLabyrinth",
  [
    "EBLabyrinthWaWasmReactorSingleton",
    "WALogger",
    "WATimeUtils",
    "WAWebDebugLabyrinthInboxSnapshotQuery",
    "WAWebLabyrinthCanonicalUserFbid",
    "WAWebLabyrinthDebugStateCache",
    "WAWebLabyrinthWasmCreateBackup",
    "WAWebLabyrinthWasmEncryptMessage",
    "WAWebMexCreateLabyrinthBackupJob",
    "WAWebMexUploadLabyrinthMessagesJob",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "err",
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
      L = "hello labyrinth",
      E = 20,
      k = 20,
      I = 20,
      T = 20,
      D = "Call Debug.labyrinthCreateBackupWasm() first";
    o("EBLabyrinthWaWasmReactorSingleton")
      .ebLabyrinthWaReactor()
      .catch(function (t) {
        var n = t instanceof Error ? t.constructor.name : typeof t,
          r = t instanceof Error ? t.message : String(t);
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[Debug][Labyrinth] eager WA Wasm initialization failed",
            ])),
        );
      });
    function x(e) {
      if (e == null) return null;
      var t = String(e);
      return t !== "" ? t : null;
    }
    function $(e, t) {
      var n = x(t);
      if (n == null)
        throw r("err")("Debug.labyrinthEncryptAndUploadMessage requires " + e);
      return n;
    }
    function P() {
      var e = o(
        "WAWebLabyrinthDebugStateCache",
      ).getLabyrinthDebugKeyMaterialCache();
      if (e != null) return e;
      throw r("err")(D);
    }
    function N() {
      var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceId();
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
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r = Math.min(
              (t = e == null ? void 0 : e.messageFirst) != null ? t : E,
              I,
            ),
            a = Math.min(
              (n = e == null ? void 0 : e.threadFirst) != null ? n : k,
              T,
            );
          try {
            var i = yield o(
              "WAWebDebugLabyrinthInboxSnapshotQuery",
            ).fetchLabyrinthInboxSnapshot({ messageFirst: r, threadFirst: a });
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[Debug][Labyrinth] labyrinthInboxSnapshot GQL response",
                  ])),
              ),
              i
            );
          } catch (e) {
            var l = e instanceof Error ? e.constructor.name : typeof e,
              c = e instanceof Error ? e.message : String(e),
              d = e instanceof Error ? e.stack : void 0;
            throw (
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[Debug][Labyrinth] labyrinthInboxSnapshot GQL failed",
                  ])),
              ),
              e
            );
          }
        })),
        A.apply(this, arguments)
      );
    }
    ((w.doc =
      "Fetches WA Labyrinth inbox snapshot threads/messages, logs the simplified response, and returns it."),
      (w.paramsToExecute = []));
    function F() {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebLabyrinthWasmCreateBackup").createBackupWasm();
          if (!e.success)
            return (
              o("WALogger").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[Debug][Labyrinth] createBackupWasm failed",
                  ])),
              ),
              e
            );
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] createBackupWasm success",
              ])),
          );
          var t = M();
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] start mexCreateLabyrinthBackup GQL request",
              ])),
          );
          try {
            var n = yield o(
                "WAWebMexCreateLabyrinthBackupJob",
              ).mexCreateLabyrinthBackup(e.value, t),
              r = n.xwa2_labyrinth_create_backup;
            return (
              (r == null ? void 0 : r.__typename) ===
              "XWA2LabyrinthCreateBackupData"
                ? (o(
                    "WAWebLabyrinthDebugStateCache",
                  ).updateLabyrinthDebugKeyMaterialCacheIds({
                    backupId: r.backup_id,
                    ebDeviceId: r.device_id,
                    epochId: r.epoch_id,
                  }),
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[Debug][Labyrinth] mexCreateLabyrinthBackup GQL request success",
                      ])),
                  ))
                : (r == null ? void 0 : r.__typename) === "XWA2LabyrinthError"
                  ? o("WALogger").ERROR(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] mexCreateLabyrinthBackup GQL request failed",
                        ])),
                    )
                  : o("WALogger").LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] create backup Wasm response",
                        ])),
                    ),
              r
            );
          } catch (e) {
            var a = e instanceof Error ? e.constructor.name : typeof e,
              i = e instanceof Error ? e.message : String(e),
              l = e instanceof Error ? e.stack : void 0;
            throw (
              o("WALogger").ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[Debug][Labyrinth] mexCreateLabyrinthBackup GQL request failed",
                  ])),
              ),
              e
            );
          }
        })),
        O.apply(this, arguments)
      );
    }
    F.doc =
      "Generate Labyrinth backup data with Wasm and call xwa2_labyrinth_create_backup";
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msg,
            n = e.threadId,
            a = P(),
            i = $("waDeviceId", N()),
            l = $("backup_id", a.backupId),
            s = $("epoch_id", a.epochId),
            u = $("threadId", n),
            c = t != null ? t : L,
            d = $("epoch_root_key", a.epochRootKey),
            m = $("mailbox_root_key", a.mailboxRootKey),
            p = $("orf_client_state", a.orfClientState),
            _ = $("epoch_anon_id", a.epochAnonId),
            f = o("WAWebLabyrinthCanonicalUserFbid").getWaCanonicalUserFbid(),
            g = $("stanzaId", r("WAWebPonyfillsCryptoRandomUUID")()),
            E = String(o("WATimeUtils").unixTimeMs()),
            k = yield o("WAWebLabyrinthWasmEncryptMessage").encryptMessageWasm({
              backupId: l,
              epochAnonId: _,
              epochId: s,
              epochRootKey: d,
              mailboxRootKey: m,
              orfClientState: p,
              plaintext: c,
              stanzaId: g,
              threadId: u,
              threadType: "ONE_TO_ONE",
              timestampMs: E,
              waCanonicalUserFbid: f,
            });
          if (!k.success)
            return (
              o("WALogger").ERROR(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[Debug][Labyrinth] encryptMessageWasm failed",
                  ])),
              ),
              k
            );
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] encryptMessageWasm success",
              ])),
          );
          var I = { deviceId: i, epochId: s, familyDeviceId: i };
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] start mexUploadLabyrinthMessages GQL request",
              ])),
          );
          try {
            var T = yield o(
                "WAWebMexUploadLabyrinthMessagesJob",
              ).mexUploadLabyrinthMessages([k.value], I),
              D = T.xwa2_labyrinth_upload_messages;
            return (
              (D == null ? void 0 : D.__typename) ===
              "XWA2LabyrinthUploadMessagesData"
                ? o("WALogger").LOG(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "[Debug][Labyrinth] mexUploadLabyrinthMessages GQL request success",
                      ])),
                  )
                : (D == null ? void 0 : D.__typename) === "XWA2LabyrinthError"
                  ? o("WALogger").ERROR(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] mexUploadLabyrinthMessages GQL request failed",
                        ])),
                    )
                  : o("WALogger").LOG(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "[Debug][Labyrinth] mexUploadLabyrinthMessages GQL response",
                        ])),
                    ),
              D
            );
          } catch (e) {
            var x = e instanceof Error ? e.constructor.name : typeof e,
              M = e instanceof Error ? e.message : String(e),
              w = e instanceof Error ? e.stack : void 0;
            throw (
              o("WALogger").ERROR(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[Debug][Labyrinth] mexUploadLabyrinthMessages GQL failed",
                  ])),
              ),
              e
            );
          }
        })),
        W.apply(this, arguments)
      );
    }
    B.doc =
      "Encrypt one text message for a thread with Wasm and batch-upload it through xwa2_labyrinth_upload_messages. Example: Debug.labyrinthEncryptAndUploadMessage({threadId, msg})";
    var q = {
      labyrinthCreateBackupWasm: F,
      labyrinthEncryptAndUploadMessage: B,
      labyrinthInboxSnapshot: w,
    };
    l.default = q;
  },
  98,
);
