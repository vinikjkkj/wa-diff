__d(
  "WAWebUploadPQPrekeysJob",
  [
    "WALogger",
    "WASignalKeys",
    "WASignalPQTypes",
    "WAWebABProps",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebKyberPreKeyStore",
    "WAWebPQGatingUtils",
    "WAWebReleaseToEventLoop",
    "WAWebSignalStoreApi",
    "getErrorSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
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
      C = r("requireDeferred")("WAPQUploadPreKeysProtocol").__setRef(
        "WAWebUploadPQPrekeysJob",
      ),
      b = r("requireDeferred")("WASignalPQKeys").__setRef(
        "WAWebUploadPQPrekeysJob",
      ),
      v = 100;
    function S(e, t) {
      return (
        (e + t) % o("WASignalPQTypes").PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER
      );
    }
    function R(e) {
      var t = r("getErrorSafe")(e).name;
      return (
        t === "DbClosedOnTakeover" ||
        t === "DbNotFoundOnTakeover" ||
        t === "DbOnLogoutAbort"
      );
    }
    function L(e) {
      return {
        keyId: e.id,
        keyPair: {
          pubKey: e.keyPair.publicKey.buffer,
          privKey: e.keyPair.secretKey.buffer,
        },
        signature: e.signature.buffer,
        timestamp: e.timestamp,
        sentToServer: !1,
      };
    }
    function E(e) {
      return {
        keyId: e.id,
        keyPair: {
          pubKey: e.keyPair.publicKey.buffer,
          privKey: e.keyPair.secretKey.buffer,
        },
        signature: e.signature.buffer,
        timestamp: e.timestamp,
      };
    }
    async function k(t, n, a) {
      try {
        await Promise.all(
          [].concat(
            t.map(function (e) {
              return o("WAWebKyberPreKeyStore").removeKyberPreKey(e.id);
            }),
            [o("WAWebKyberPreKeyStore").removeKyberLastResortKey(n.id)],
          ),
        );
      } catch (t) {
        if (R(t)) return;
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "generateAndUploadPQPreKeys: failed to remove initial SET PQ keys after ",
                " failure",
              ])),
            a,
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("pq-prekeys-set-cleanup-failed");
      }
    }
    async function I() {
      try {
        if (!o("WAWebPQGatingUtils").isPqKeysUploadEnabled()) {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "generateAndUploadPQPreKeys: PQ upload not enabled, skipping",
              ])),
          );
          return;
        }
        var e = await o("WAWebKyberPreKeyStore").isPQMigrated();
        if (e) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "generateAndUploadPQPreKeys: already PQ migrated, skipping",
              ])),
          );
          return;
        }
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "generateAndUploadPQPreKeys: starting PQ prekey generation/upload",
            ])),
        );
        var t = await o(
          "WAWebSignalStoreApi",
        ).waSignalStore.getRegistrationInfo();
        if (t == null) {
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "generateAndUploadPQPreKeys: no registration info available",
              ])),
          );
          return;
        }
        var n = o("WASignalKeys").makeKeyPairFromArrayBuffers(
            t.identityKeyPair.pubKey,
            t.identityKeyPair.privKey,
          ),
          r = await Promise.all([C.load(), b.load()]),
          a = r[0].uploadPQPreKeysProtocol,
          i = r[1],
          l = i.generateKyberLastResortKey,
          _ = i.generateKyberPreKeys,
          f = Math.max(
            1,
            o("WAWebABProps").getABPropConfigValue("pq_batch_upload_size"),
          ),
          g = o("WAWebABProps").getABPropConfigValue("pq_max_keys_on_server"),
          h = Number.isFinite(g)
            ? Math.min(
                Math.max(1, g),
                o("WASignalPQTypes").PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER - 1,
              )
            : v,
          y = await o("WAWebKyberPreKeyStore").reserveKyberPreKeyIds(h + 1),
          R = S(y, h);
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "generateAndUploadPQPreKeys: generating ",
              " PQ prekeys starting at ID ",
              "",
            ])),
          h,
          y,
        );
        var I = await l(R, n),
          x = Math.min(f, h);
        await o("WAWebReleaseToEventLoop").releaseToEventLoop();
        var $ = await _(y, x, n),
          P = E(I);
        try {
          (await o("WAWebKyberPreKeyStore").saveKyberLastResortKey(P),
            await o("WAWebKyberPreKeyStore").saveKyberPreKeys($.map(L)));
        } catch (e) {
          throw (await k($, I, "storage"), e);
        }
        var N = await a($, I);
        if (!N.success) {
          (o("WALogger")
            .WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "generateAndUploadPQPreKeys: initial PQ prekey upload failed",
                ])),
            )
            .sendLogs("pq-prekeys-set-upload-failed"),
            await k($, I, "set"));
          return;
        }
        (await o("WAWebKyberPreKeyStore").setPQMigrated(!0),
          await o("WAWebKyberPreKeyStore").markKyberPreKeysAsSent(
            $.map(function (e) {
              return e.id;
            }),
          ),
          T(S(y, x), f, h - x, $.length, h, n));
      } catch (e) {
        D(e);
      }
    }
    async function T(e, t, n, r, a, i) {
      try {
        n > 0 &&
          (await o(
            "WAWebEventsWaitForOfflineDeliveryEnd",
          ).waitForOfflineDeliveryEnd({ ignoreInit: !0 }));
        var l = await x(e, t, n, i),
          s = r + l;
        if (s < a) {
          o("WALogger")
            .WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "generateAndUploadPQPreKeys: PQ migration incomplete, ",
                  "/",
                  " prekeys uploaded",
                ])),
              s,
              a,
            )
            .sendLogs("pq-prekeys-partial-upload");
          return;
        }
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "generateAndUploadPQPreKeys: PQ migration complete, ",
              " prekeys uploaded",
            ])),
          s,
        );
      } catch (e) {
        D(e);
      }
    }
    function D(e) {
      R(e) ||
        o("WALogger")
          .ERROR(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "generateAndUploadPQPreKeys: error during PQ key generation/upload",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("pq-prekeys-upload-failed");
    }
    async function x(e, t, n, r) {
      var a = await Promise.all([C.load(), b.load()]),
        i = a[0].addPQPreKeysProtocol,
        l = a[1].generateKyberPreKeys,
        s = Array.from({ length: Math.ceil(n / t) }, function (e, n) {
          return n * t;
        }),
        u = 0;
      for (var c of s) {
        await o("WAWebReleaseToEventLoop").releaseToEventLoop();
        var d = Math.min(t, n - c),
          m = S(e, c),
          p = await l(m, d, r);
        await o("WAWebKyberPreKeyStore").saveKyberPreKeys(p.map(L));
        var _ = await i(p);
        if (_.success)
          (await o("WAWebKyberPreKeyStore").markKyberPreKeysAsSent(
            p.map(function (e) {
              return e.id;
            }),
          ),
            (u += p.length));
        else {
          o("WALogger")
            .WARN(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "generateAndUploadPQPreKeys: PQ prekey ADD upload failed",
                ])),
            )
            .sendLogs("pq-prekeys-add-upload-failed");
          var f = await Promise.allSettled(
            p.map(function (e) {
              return o("WAWebKyberPreKeyStore").removeKyberPreKey(e.id);
            }),
          );
          f.some(function (e) {
            return e.status === "rejected";
          }) &&
            o("WALogger")
              .WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "generateAndUploadPQPreKeys: failed to remove some rejected PQ prekeys",
                  ])),
              )
              .sendLogs("pq-prekeys-add-cleanup-failed");
          break;
        }
      }
      return u;
    }
    l.generateAndUploadPQPreKeys = I;
  },
  98,
);
