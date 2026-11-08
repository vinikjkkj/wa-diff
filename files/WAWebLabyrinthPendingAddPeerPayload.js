__d(
  "WAWebLabyrinthPendingAddPeerPayload",
  [
    "Promise",
    "WALogger",
    "WAResultOrError",
    "WAWebDbEncryptionKey",
    "WAWebLabyrinthAddPeerPayloadCopy",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebODS",
    "WAWebUserPrefsIndexedDBStorage",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 16,
      d = null,
      m = 0;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (((d = e), (m += 1), e == null)) {
            yield o(
              "WAWebLabyrinthAddPeerPayloadCopy",
            ).deleteAddPeerPayloadCopy();
            return;
          }
          var t = yield b(e);
          d === e &&
            ((yield S(t)) ||
              r("WAWebODS").incr(
                "web.app.labyrinth_add_peer.pairing.copy_write_failed",
              ));
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            o("WAWebLabyrinthAddPeerPayloadCopy").ADD_PEER_PAYLOAD_COPY_KEY,
          );
          if (e == null) return o("WAResultOrError").makeResult(!1);
          var t = m;
          if (
            !(yield o(
              "WAWebLabyrinthAddPeerPayloadCopy",
            ).deleteAddPeerPayloadCopy()) ||
            d != null
          )
            return o("WAResultOrError").makeResult(!1);
          try {
            var n = yield L(e);
            return m !== t
              ? o("WAResultOrError").makeResult(!1)
              : ((d = n), o("WAResultOrError").makeResult(!0));
          } catch (e) {
            return o("WAResultOrError").makeError({
              error: r("getErrorSafe")(e),
            });
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      return d != null;
    }
    function y() {
      var e = d;
      return ((d = null), e);
    }
    function C(e) {
      d != null || (d = e);
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield (u || (u = n("Promise"))).all([
                k(e.advSecret),
                k(e.sealedPayload),
              ]),
              a = t[0],
              i = t[1];
            return o("WAResultOrError").makeResult({
              advSecret: a,
              sealedPayload: i,
            });
          } catch (e) {
            return o("WAResultOrError").makeError({
              error: r("getErrorSafe")(e),
            });
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!t.success)
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[labyrinth add peer] encrypting the pairing payload copy failed",
                    ])),
                )
                .catching(t.error.error),
              yield o(
                "WAWebLabyrinthAddPeerPayloadCopy",
              ).deleteAddPeerPayloadCopy(),
              !1
            );
          try {
            return (
              yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                o("WAWebLabyrinthAddPeerPayloadCopy").ADD_PEER_PAYLOAD_COPY_KEY,
                t.value,
              ),
              !0
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[labyrinth add peer] writing the pairing payload copy failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              !1
            );
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (u || (u = n("Promise"))).all([
              T(e.advSecret),
              T(e.sealedPayload),
            ]),
            r = t[0],
            a = t[1];
          return {
            advSecret: o("WAWebLabyrinthOpaqueTypes").makeAdvSecret(r),
            sealedPayload: o(
              "WAWebLabyrinthOpaqueTypes",
            ).makeSealedAddPeerDevicePayload(a),
          };
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Uint8Array(c);
          self.crypto.getRandomValues(t);
          var n = yield self.crypto.subtle.encrypt(
            { iv: t, name: o("WAWebDbEncryptionKey").DB_ENCRYPTION_CIPHER },
            D(),
            e,
          );
          return { ciphertext: n, iv: t.buffer };
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      var t = e.ciphertext,
        n = e.iv;
      return self.crypto.subtle.decrypt(
        { iv: n, name: o("WAWebDbEncryptionKey").DB_ENCRYPTION_CIPHER },
        D(),
        t,
      );
    }
    function D() {
      return o("WAWebDbEncryptionKey").DbEncKeyStore.getEncKeys()[0].key;
    }
    ((l.holdAddPeerPayload = p),
      (l.restoreAddPeerPayload = f),
      (l.hasAddPeerPayload = h),
      (l.takeAddPeerPayload = y),
      (l.putBackAddPeerPayload = C));
  },
  98,
);
