__d(
  "WAWebLabyrinthPendingAddPeerPayload",
  [
    "WALogger",
    "WAResultOrError",
    "WAWebDbEncryptionKey",
    "WAWebLabyrinthAddPeerPayloadCopy",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebODS",
    "WAWebUserPrefsIndexedDBStorage",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 16,
      c = null,
      d = 0;
    async function m(e) {
      if (((c = e), (d += 1), e == null)) {
        await o("WAWebLabyrinthAddPeerPayloadCopy").deleteAddPeerPayloadCopy();
        return;
      }
      var t = await h(e);
      c === e &&
        ((await y(t)) ||
          r("WAWebODS").incr(
            "web.app.labyrinth_add_peer.pairing.copy_write_failed",
          ));
    }
    async function p() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebLabyrinthAddPeerPayloadCopy").ADD_PEER_PAYLOAD_COPY_KEY,
      );
      if (e == null) return o("WAResultOrError").makeResult(!1);
      var t = d;
      if (
        !(await o(
          "WAWebLabyrinthAddPeerPayloadCopy",
        ).deleteAddPeerPayloadCopy()) ||
        c != null
      )
        return o("WAResultOrError").makeResult(!1);
      try {
        var n = await C(e);
        return d !== t
          ? o("WAResultOrError").makeResult(!1)
          : ((c = n), o("WAResultOrError").makeResult(!0));
      } catch (e) {
        return o("WAResultOrError").makeError({ error: r("getErrorSafe")(e) });
      }
    }
    function _() {
      return c != null;
    }
    function f() {
      var e = c;
      return ((c = null), e);
    }
    function g(e) {
      c != null || (c = e);
    }
    async function h(e) {
      try {
        var t = await Promise.all([b(e.advSecret), b(e.sealedPayload)]),
          n = t[0],
          a = t[1];
        return o("WAResultOrError").makeResult({
          advSecret: n,
          sealedPayload: a,
        });
      } catch (e) {
        return o("WAResultOrError").makeError({ error: r("getErrorSafe")(e) });
      }
    }
    async function y(t) {
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
          await o(
            "WAWebLabyrinthAddPeerPayloadCopy",
          ).deleteAddPeerPayloadCopy(),
          !1
        );
      try {
        return (
          await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
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
    }
    async function C(e) {
      var t = await Promise.all([v(e.advSecret), v(e.sealedPayload)]),
        n = t[0],
        r = t[1];
      return {
        advSecret: o("WAWebLabyrinthOpaqueTypes").makeAdvSecret(n),
        sealedPayload: o(
          "WAWebLabyrinthOpaqueTypes",
        ).makeSealedAddPeerDevicePayload(r),
      };
    }
    async function b(e) {
      var t = new Uint8Array(u);
      self.crypto.getRandomValues(t);
      var n = await self.crypto.subtle.encrypt(
        { iv: t, name: o("WAWebDbEncryptionKey").DB_ENCRYPTION_CIPHER },
        S(),
        e,
      );
      return { ciphertext: n, iv: t.buffer };
    }
    function v(e) {
      var t = e.ciphertext,
        n = e.iv;
      return self.crypto.subtle.decrypt(
        { iv: n, name: o("WAWebDbEncryptionKey").DB_ENCRYPTION_CIPHER },
        S(),
        t,
      );
    }
    function S() {
      return o("WAWebDbEncryptionKey").DbEncKeyStore.getEncKeys()[0].key;
    }
    ((l.holdAddPeerPayload = m),
      (l.restoreAddPeerPayload = p),
      (l.hasAddPeerPayload = _),
      (l.takeAddPeerPayload = f),
      (l.putBackAddPeerPayload = g));
  },
  98,
);
