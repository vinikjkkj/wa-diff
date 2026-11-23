__d(
  "WAWebHandlePreKeyLow",
  [
    "WADeprecatedWapParser",
    "WALogger",
    "WASignalKeys",
    "WAWap",
    "WAWebABProps",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebPQGatingUtils",
    "WAWebReleaseToEventLoop",
    "WAWebSignalStoreApi",
    "WAWebUploadPreKeysJob",
    "getErrorSafe",
    "requireDeferred",
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
      g = (f = r("requireDeferred"))("WAPQUploadPreKeysProtocol").__setRef(
        "WAWebHandlePreKeyLow",
      ),
      h = f("WASignalPQKeys").__setRef("WAWebHandlePreKeyLow"),
      y = f("WAWebKyberPreKeyStore").__setRef("WAWebHandlePreKeyLow"),
      C = f("WAWebUploadPQPrekeysJob").__setRef("WAWebHandlePreKeyLow"),
      b = new Set(),
      v = new (r("WADeprecatedWapParser"))("lowKeyParser", function (e) {
        (e.assertTag("notification"),
          e.assertAttr("type", "encrypt"),
          e.assertFromServer());
        var t = e.maybeChild("count"),
          n = e.maybeChild("pq_count");
        return (
          t == null && n == null && e.child("count"),
          {
            hasLegacyCount: t != null,
            hasPqCount: n != null,
            stanzaId: e.attrString("id"),
          }
        );
      });
    async function S(t, n) {
      var r = v.parse(t);
      if (r.error)
        throw (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "handlePreKeyLow: Parsing Error: ",
                "",
              ])),
            r.error.toString(),
          ),
          r.error
        );
      var a = r.success,
        i = o("WAWap").wap("ack", {
          to: o("WAWap").S_WHATSAPP_NET,
          id: o("WAWap").CUSTOM_STRING(a.stanzaId),
          class: "notification",
        });
      return a.hasLegacyCount
        ? b.has(n)
          ? i
          : (b.add(n),
            o("WAWebSignalStoreApi").waSignalStore.setServerHasPreKeys(!1),
            await o(
              "WAWebEventsWaitForOfflineDeliveryEnd",
            ).waitForOfflineDeliveryEnd(),
            o("WAWebUploadPreKeysJob")
              .uploadPreKeys()
              .then(function () {
                return (
                  o("WAWebPQGatingUtils").isPqKeysUploadEnabled() && R(),
                  i
                );
              })
              .finally(function () {
                return void b.delete(n);
              }))
        : (a.hasPqCount &&
            o("WAWebPQGatingUtils").isPqKeysUploadEnabled() &&
            E(),
          i);
    }
    function R() {
      C.load()
        .then(function (e) {
          var t = e.generateAndUploadPQPreKeys;
          return t();
        })
        .catch(function (e) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "handlePreKeyLow: PQ prekey re-upload failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("pq-prekeys-reupload-failed");
        });
    }
    var L = null;
    async function E() {
      return (
        L != null ||
          (L = k().finally(function () {
            L = null;
          })),
        L
      );
    }
    async function k() {
      try {
        var e = await o(
          "WAWebSignalStoreApi",
        ).waSignalStore.getRegistrationInfo();
        if (e == null) return;
        var t = o("WASignalKeys").makeKeyPairFromArrayBuffers(
            e.identityKeyPair.pubKey,
            e.identityKeyPair.privKey,
          ),
          n = await Promise.all([g.load(), h.load(), y.load()]),
          a = n[0].addPQPreKeysProtocol,
          i = n[1].generateKyberPreKeys,
          l = n[2],
          s = l.isPQMigrated,
          f = l.markKyberPreKeysAsSent,
          C = l.removeKyberPreKey,
          b = l.reserveKyberPreKeyIds,
          v = l.saveKyberPreKeys;
        if (!(await s())) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "replenishPQPreKeys: skipped, PQ prekeys are not migrated",
              ])),
          );
          return;
        }
        var S = Math.max(
            1,
            o("WAWebABProps").getABPropConfigValue("pq_batch_upload_size"),
          ),
          R = await b(S);
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "replenishPQPreKeys: generating ",
              " PQ prekeys starting at ID ",
              "",
            ])),
          S,
          R,
        );
        var L = await i(
            R,
            S,
            t,
            o("WAWebReleaseToEventLoop").releaseToEventLoop,
          ),
          E = L.map(function (e) {
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
          });
        await v(E);
        var k = await a(L);
        if (k.success)
          (await f(
            L.map(function (e) {
              return e.id;
            }),
          ),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "replenishPQPreKeys: uploaded ",
                  " PQ prekeys",
                ])),
              L.length,
            ));
        else {
          o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "replenishPQPreKeys: upload rejected: ",
                  " (",
                  ")",
                ])),
              k.error.category,
              k.error.code,
            )
            .sendLogs("pq-replenish-upload-fail");
          var I = await Promise.allSettled(
            L.map(function (e) {
              return C(e.id);
            }),
          );
          I.some(function (e) {
            return e.status === "rejected";
          }) &&
            o("WALogger")
              .WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "replenishPQPreKeys: failed to remove some rejected PQ prekeys",
                  ])),
              )
              .sendLogs("pq-replenish-cleanup-failed");
        }
      } catch (e) {
        o("WALogger")
          .WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "replenishPQPreKeys: error",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("pq-replenish-error");
      }
    }
    l.default = S;
  },
  98,
);
