__d(
  "WAWebDebugLabyrinth",
  [
    "CurrentUser",
    "EBLabyrinthWaWasmReactorSingleton",
    "WALogger",
    "WATimeUtils",
    "WAWebCanonicalUtils",
    "WAWebDebugLabyrinthInboxSnapshotQuery",
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
    function w() {
      var e = r("CurrentUser").getPossiblyNonFacebookUserID();
      if (
        !o("WAWebCanonicalUtils").isCanonicalPresent() ||
        e == null ||
        e === ""
      )
        throw r("err")(
          "Debug.labyrinthEncryptAndUploadMessage requires a WA canonical user id",
        );
      return String(e);
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r = P(),
            a = $("eb_device_id", r.ebDeviceId),
            i = $("epoch_id", r.epochId),
            l = Math.min(
              (t = e == null ? void 0 : e.messageFirst) != null ? t : E,
              I,
            ),
            c = Math.min(
              (n = e == null ? void 0 : e.threadFirst) != null ? n : k,
              T,
            );
          try {
            var d = yield o(
              "WAWebDebugLabyrinthInboxSnapshotQuery",
            ).fetchLabyrinthInboxSnapshot({
              ebDeviceId: a,
              locallyAvailableEpochIds: [i],
              messageFirst: l,
              threadFirst: c,
            });
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[Debug][Labyrinth] labyrinthInboxSnapshot GQL response",
                  ])),
              ),
              d
            );
          } catch (e) {
            var m = e instanceof Error ? e.constructor.name : typeof e,
              p = e instanceof Error ? e.message : String(e),
              _ = e instanceof Error ? e.stack : void 0;
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
        F.apply(this, arguments)
      );
    }
    ((A.doc =
      "Fetches WA Labyrinth inbox snapshot threads/messages, logs the raw GraphQL response, and returns it."),
      (A.paramsToExecute = []));
    function O(e, t) {
      return babelHelpers.extends({}, e, {
        device: babelHelpers.extends({}, e.device, {
          device_registration_id: t.deviceRegistrationId,
          device_id: t.deviceId,
          family_device_id: t.familyDeviceId,
        }),
      });
    }
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
          var t = O(e.value, M());
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] start mexCreateLabyrinthBackup GQL request",
              ])),
          );
          try {
            var n = yield o(
                "WAWebMexCreateLabyrinthBackupJob",
              ).mexCreateLabyrinthBackup(t),
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
            f = w(),
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
          var I = {
            device_id: i,
            epoch_id: s,
            family_device_id: i,
            messages: [k.value],
          };
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] start mexUploadLabyrinthMessages GQL request",
              ])),
          );
          try {
            var T = yield o(
                "WAWebMexUploadLabyrinthMessagesJob",
              ).mexUploadLabyrinthMessages(I),
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
              A = e instanceof Error ? e.stack : void 0;
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
        U.apply(this, arguments)
      );
    }
    q.doc =
      "Encrypt one text message for a thread with Wasm and batch-upload it through xwa2_labyrinth_upload_messages. Example: Debug.labyrinthEncryptAndUploadMessage({threadId, msg})";
    var V = {
      labyrinthCreateBackupWasm: B,
      labyrinthEncryptAndUploadMessage: q,
      labyrinthInboxSnapshot: A,
    };
    l.default = V;
  },
  98,
);
